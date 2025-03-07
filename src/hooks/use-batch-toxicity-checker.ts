import { useState, useCallback } from 'react';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';

export type BatchToxicityResult = {
    results: {
        isToxic: boolean;
        metrics?: {
            toxicity: number;
            severe_toxicity: number;
            identity_attack: number;
            insult: number;
            threat: number;
        } | null;
    }[];
    isLoading: boolean;
    error: string | null;
};

interface BatchToxicityOptions {
    threshold?: number;
    apiKey: string;
}

const BATCH_PROMPT = `
You are a debate judge evaluating feedback. Analyze each of the following texts and rate how appropriate they are for a debate context. 
For each text, rate it from 0 to 1 (0 being completely appropriate, 1 being inappropriate) on these aspects:
- toxicity (unprofessional, offensive, or inappropriate language)
- severe_toxicity (very aggressive, vulgar, or harmful language)
- identity_attack (biased or discriminatory language)
- insult (demeaning or disrespectful language)
- threat (language that intimidates or implies harm)

Respond ONLY with a JSON array where each element corresponds to the analysis of each text. Example for 3 texts:
[
  {
    "isToxic": false,
    "metrics": {
      "toxicity": 0.1,
      "severe_toxicity": 0,
      "identity_attack": 0,
      "insult": 0.2,
      "threat": 0
    }
  },
  {
    "isToxic": true,
    "metrics": {
      "toxicity": 0.8,
      "severe_toxicity": 0.3,
      "identity_attack": 0.1,
      "insult": 0.7,
      "threat": 0.1
    }
  },
  {
    "isToxic": false,
    "metrics": {
      "toxicity": 0.2,
      "severe_toxicity": 0,
      "identity_attack": 0,
      "insult": 0.1,
      "threat": 0
    }
  }
]

Texts to analyze:
`;

export function useBatchToxicityCheck({ threshold = 0.7, apiKey }: BatchToxicityOptions) {
    const [state, setState] = useState<BatchToxicityResult>({
        results: [],
        isLoading: false,
        error: null
    });

    const checkToxicityBatch = useCallback(async (texts: string[]) => {
        if (!texts.length || !apiKey) {
            return {
                results: texts.map(() => ({ isToxic: false, metrics: null })),
                isLoading: false,
                error: null
            };
        }

        setState(prev => ({ ...prev, isLoading: true, error: null }));

        try {
            // Clean out empty texts to reduce token usage
            const validTexts = texts.map(text => text.trim() || "No content provided");

            // Initialize Gemini API
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({
                model: 'gemini-2.0-flash',
                generationConfig: {
                    temperature: 0,
                    candidateCount: 1,
                },
                safetySettings: [
                    {
                        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                        threshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_UNSPECIFIED,
                    },
                    {
                        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                        threshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_UNSPECIFIED,
                    },
                    {
                        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                        threshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_UNSPECIFIED,
                    },
                    {
                        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                        threshold: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_UNSPECIFIED,
                    },
                ],
            });

            // Format texts for the prompt
            const textList = validTexts.map((text, index) => `TEXT ${index + 1}: "${text}"`).join('\n\n');
            const prompt = `${BATCH_PROMPT}\n${textList}`;

            try {
                const result = await model.generateContent(prompt);
                const response = await result.response;
                const responseText = response.text();

                try {
                    const cleanedText = responseText.replace(/```json\n?|```/g, '').trim();
                    const parsedResults = JSON.parse(cleanedText);

                    // Ensure we have the correct format and apply threshold
                    if (!Array.isArray(parsedResults) || parsedResults.length !== validTexts.length) {
                        throw new Error('Invalid response format from API');
                    }

                    // Apply the threshold to determine what's toxic
                    const processedResults = parsedResults.map((item: any) => {
                        // If API already determined toxicity, use it
                        if (typeof item.isToxic === 'boolean') {
                            return item;
                        }

                        // Otherwise calculate based on metrics and threshold
                        if (item.metrics) {
                            const isToxic = Object.values(item.metrics).some(
                                (value: any) => typeof value === 'number' && value > threshold
                            );
                            return { ...item, isToxic };
                        }

                        return { isToxic: false, metrics: null };
                    });

                    setState({
                        results: processedResults,
                        isLoading: false,
                        error: null
                    });

                    return {
                        results: processedResults,
                        isLoading: false,
                        error: null
                    };
                } catch (parseError) {
                    console.error('Parse error:', parseError, 'Response was:', responseText);
                    const error = 'Failed to parse API response';
                    setState({
                        results: texts.map(() => ({ isToxic: false, metrics: null })),
                        isLoading: false,
                        error
                    });
                    return {
                        results: texts.map(() => ({ isToxic: false, metrics: null })),
                        isLoading: false,
                        error
                    };
                }
            } catch (apiError) {
                // If the API blocks the content, assume it's toxic
                if (apiError instanceof Error && apiError.message.includes('blocked due to SAFETY')) {
                    const results = texts.map(() => ({
                        isToxic: true,
                        metrics: {
                            toxicity: 1.0,
                            severe_toxicity: 1.0,
                            identity_attack: 0.0,
                            insult: 0.0,
                            threat: 0.0
                        }
                    }));
                    setState({
                        results,
                        isLoading: false,
                        error: null
                    });
                    return {
                        results,
                        isLoading: false,
                        error: null
                    };
                }

                const errorMessage = apiError instanceof Error ? apiError.message : 'API error';
                setState({
                    results: texts.map(() => ({ isToxic: false, metrics: null })),
                    isLoading: false,
                    error: errorMessage
                });
                return {
                    results: texts.map(() => ({ isToxic: false, metrics: null })),
                    isLoading: false,
                    error: errorMessage
                };
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            setState({
                results: texts.map(() => ({ isToxic: false, metrics: null })),
                isLoading: false,
                error: errorMessage
            });
            return {
                results: texts.map(() => ({ isToxic: false, metrics: null })),
                isLoading: false,
                error: errorMessage
            };
        }
    }, [apiKey, threshold]);

    return {
        ...state,
        checkToxicityBatch
    };
}