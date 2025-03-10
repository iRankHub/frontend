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
    // Flag to indicate if the error is critical (should block submission) or non-critical
    isErrorCritical: boolean;
};

interface BatchToxicityOptions {
    threshold?: number;
    apiKey: string;
}

const BATCH_PROMPT = `
You are a debate judge evaluating feedback. Analyze each text and rate it from 0 to 1 (0 = appropriate, 1 = inappropriate) based on the following aspects:

Toxicity – Language that is unprofessional, offensive, or undermines constructive discussion, including subtle negativity or rude remarks.
Severe Toxicity – Extremely aggressive, vulgar, or harmful language, such as hate speech or any language meant to incite violence or provoke significant harm.
Identity Attack – Discriminatory or biased language targeting someone based on their race, gender, sexuality, religion, or other protected identities, including stereotyping or dehumanizing language.
Insult – Demeaning, belittling, or disrespectful language intended to humiliate or degrade others.
Threat – Language that implies harm, intimidation, or coercion, including direct or indirect threats of violence or psychological harm.

Respond ONLY with a JSON array where each element corresponds to the analysis of each text. Example:
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
  }
]

Texts to analyze:
`;

export function useBatchToxicityCheck({ threshold = 0.7, apiKey }: BatchToxicityOptions) {
    const [state, setState] = useState<BatchToxicityResult>({
        results: [],
        isLoading: false,
        error: null,
        isErrorCritical: false
    });

    const checkToxicityBatch = useCallback(async (texts: string[]) => {
        if (!texts.length || !apiKey) {
            return {
                results: texts.map(() => ({ isToxic: false, metrics: null })),
                isLoading: false,
                error: null,
                isErrorCritical: false
            };
        }

        setState(prev => ({ ...prev, isLoading: true, error: null, isErrorCritical: false }));

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
                    // Remove code block markers if present
                    const cleanedText = responseText.replace(/```json\n?|```/g, '').trim();
                    const parsedResults = JSON.parse(cleanedText);

                    // Ensure we have the correct format
                    if (!Array.isArray(parsedResults)) {
                        throw new Error('Invalid response format from API - not an array');
                    }

                    // Handling case where we might get fewer results than expected
                    const normalizedResults = [];
                    for (let i = 0; i < texts.length; i++) {
                        if (i < parsedResults.length) {
                            const item = parsedResults[i];

                            // If API already determined toxicity, use it
                            if (typeof item.isToxic === 'boolean') {
                                normalizedResults.push(item);
                                continue;
                            }

                            // Otherwise calculate based on metrics and threshold
                            if (item.metrics) {
                                const isToxic = Object.values(item.metrics).some(
                                    (value: any) => typeof value === 'number' && value > threshold
                                );
                                normalizedResults.push({ ...item, isToxic });
                                continue;
                            }

                            // Fallback for items without expected structure
                            normalizedResults.push({ isToxic: false, metrics: null });
                        } else {
                            // Fill in missing results
                            normalizedResults.push({ isToxic: false, metrics: null });
                        }
                    }

                    const result = {
                        results: normalizedResults,
                        isLoading: false,
                        error: null,
                        isErrorCritical: false
                    };

                    setState(result);
                    return result;
                } catch (parseError) {
                    console.error('Parse error:', parseError, 'Response was:', responseText);
                    const error = 'Content check unavailable (technical issue)';

                    const result = {
                        results: texts.map(() => ({ isToxic: false, metrics: null })),
                        isLoading: false,
                        error,
                        isErrorCritical: false // Non-critical because it's a technical issue
                    };

                    setState(result);
                    return result;
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

                    const result = {
                        results,
                        isLoading: false,
                        error: "Content was flagged by safety systems",
                        isErrorCritical: true // Critical because content was flagged
                    };

                    setState(result);
                    return result;
                }

                const errorMessage = apiError instanceof Error ? apiError.message : 'API error';

                const result = {
                    results: texts.map(() => ({ isToxic: false, metrics: null })),
                    isLoading: false,
                    error: `Content check unavailable`,
                    isErrorCritical: false // Non-critical because it's a technical issue
                };

                console.error('API error:', errorMessage);
                setState(result);
                return result;
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';

            const result = {
                results: texts.map(() => ({ isToxic: false, metrics: null })),
                isLoading: false,
                error: `Content check unavailable`,
                isErrorCritical: false // Non-critical because it's an unexpected issue
            };

            console.error('Unexpected error:', errorMessage);
            setState(result);
            return result;
        }
    }, [apiKey, threshold]);

    return {
        ...state,
        checkToxicityBatch
    };
}