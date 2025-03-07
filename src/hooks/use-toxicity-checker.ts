import { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory, GenerateContentResult } from '@google/generative-ai';

export type ToxicityResponse = {
    toxicity: number;
    severe_toxicity: number;
    identity_attack: number;
    insult: number;
    threat: number;
};

export type ToxicityError = {
    message: string;
    code?: string;
};

type ToxicityCheck = {
    isToxic: boolean;
    isLoading: boolean;
    error: ToxicityError | null;
    metrics: ToxicityResponse | null;
};

type UseToxicityCheckOptions = {
    threshold?: number;
    debounceMs?: number;
    enabled?: boolean;
    apiKey: string;
};

interface GenerativeError extends Error {
    status?: string;
}

const DEFAULT_PROMPT = `
You are a debate judge evaluating feedback. Analyze the following text and rate how appropriate it is for a debate context. Rate it from 0 to 1 (0 being completely appropriate, 1 being inappropriate) on these aspects:
- toxicity (unprofessional, offensive, or inappropriate language that can harm the conversation)
- severe_toxicity (very aggressive, vulgar, or harmful language that creates a hostile environment)
- identity_attack (biased, discriminatory, or prejudiced language that targets someone's identity, such as race, gender, or nationality)
- insult (demeaning, belittling, or disrespectful language intended to degrade or humiliate someone)
- threat (language that intimidates or implies harm or violence)

Respond ONLY with a JSON object. Example:
{
  "toxicity": 0.1,
  "severe_toxicity": 0,
  "identity_attack": 0,
  "insult": 0.2,
  "threat": 0
}

Text to analyze:
`;

const DEFAULT_METRICS: ToxicityResponse = {
    toxicity: 0,
    severe_toxicity: 0,
    identity_attack: 0,
    insult: 0,
    threat: 0,
};

export function useToxicityCheck(
    text: string,
    {
        threshold = 0.7,
        debounceMs = 200,
        enabled = true,
        apiKey,
    }: UseToxicityCheckOptions
): ToxicityCheck {
    const [state, setState] = useState<ToxicityCheck>({
        isToxic: false,
        isLoading: false,
        error: null,
        metrics: null,
    });

    const checkToxicity = useCallback(
        async (textToCheck: string) => {
            if (!textToCheck.trim() || !enabled) {
                setState(prev => ({
                    ...prev,
                    isToxic: false,
                    isLoading: false,
                    error: null,
                }));
                return;
            }

            setState(prev => ({ ...prev, isLoading: true, error: null }));

            try {
                // Initialize Gemini API with safety settings
                const genAI = new GoogleGenerativeAI(apiKey);
                const model = genAI.getGenerativeModel({
                    model: 'gemini-2.0-flash', // Updated to use the correct model
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

                const prompt = `${DEFAULT_PROMPT}\n"${textToCheck}"`;

                let result: GenerateContentResult;
                try {
                    result = await model.generateContent(prompt);
                } catch (generationError) {
                    if (generationError instanceof Error &&
                        generationError.message.includes('blocked due to SAFETY')) {
                        setState({
                            isToxic: true,
                            isLoading: false,
                            error: null,
                            metrics: DEFAULT_METRICS,
                        });
                        return;
                    }
                    throw generationError;
                }

                const response = await result.response;
                const responseText = response.text();

                try {
                    const metrics: ToxicityResponse = JSON.parse(responseText);

                    // Validate the response format
                    const requiredMetrics = ['toxicity', 'severe_toxicity', 'identity_attack', 'insult', 'threat'];
                    const hasAllMetrics = requiredMetrics.every(metric =>
                        typeof metrics[metric as keyof ToxicityResponse] === 'number'
                    );

                    if (!hasAllMetrics) {
                        throw new Error('Invalid response format from Gemini API');
                    }

                    // Check if any metric exceeds the threshold
                    const isToxic = Object.values(metrics).some(value => value > threshold);

                    setState({
                        isToxic,
                        isLoading: false,
                        error: null,
                        metrics,
                    });
                } catch (parseError) {
                    // Handle JSON parsing errors
                    setState({
                        isToxic: false,
                        isLoading: false,
                        error: {
                            message: 'Error processing toxicity check response',
                            code: 'PARSE_ERROR',
                        },
                        metrics: null,
                    });
                }
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'An error occurred while checking toxicity';
                const errorStatus = (error as GenerativeError).status;

                setState({
                    isToxic: false,
                    isLoading: false,
                    error: {
                        message: errorMessage,
                        code: errorStatus || 'API_ERROR',
                    },
                    metrics: null,
                });
            }
        },
        [threshold, enabled, apiKey]
    );

    // Create a debounced version of checkToxicity
    const debouncedCheck = useCallback(
        debounce((text: string) => checkToxicity(text), debounceMs),
        [checkToxicity, debounceMs]
    );

    // Effect to trigger toxicity check when text changes
    useEffect(() => {
        if (enabled && apiKey) {
            debouncedCheck(text);
        }

        // Cleanup
        return () => {
            debouncedCheck.cancel();
        };
    }, [text, enabled, apiKey, debouncedCheck]);

    return state;
}