import { Textarea } from "@/components/ui/textarea";
import { FC, useState, useEffect, useCallback } from "react";
import { useToxicityCheck } from "@/hooks/use-toxicity-checker";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;

export type ValidationStatus = {
  isToxic: boolean;
  isLoading: boolean;
};

interface TextareaWithToxicityCheckProps {
  text: string;
  onFeedbackChange: (text: string, validation: ValidationStatus) => void;
}

const TextareaWithToxicityCheck: FC<TextareaWithToxicityCheckProps> = ({
  text,
  onFeedbackChange,
}) => {
  const [feedback, setFeedback] = useState(text);
  const { isToxic, isLoading, error, metrics } = useToxicityCheck(feedback, {
    threshold: 0.7,
    debounceMs: 500,
    apiKey: GEMINI_API_KEY,
  });


  // Only update parent when toxicity check status changes
  useEffect(() => {
    onFeedbackChange(feedback, { isToxic, isLoading });
    // @ts-ignore
  }, [isToxic, isLoading]);

  // Update local state without triggering validation when text changes
  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setFeedback(newValue);
  };

  return (
    <div className="relative">
      <Textarea
        value={feedback}
        onChange={handleFeedbackChange}
        placeholder="Add a comment..."
        className={cn(
          "resize-none",
          isToxic && "border-red-500 focus-visible:ring-red-500"
        )}
      />
      {isLoading && (
        <div className="absolute right-2 top-2">
          <Icons.spinner className="h-4 w-4 animate-spin" />
        </div>
      )}
      {isToxic && (
        <div className="mt-2 space-y-2">
          <p className="text-sm text-red-500">
            Please ensure your feedback is respectful
          </p>
          {metrics && (
            <div className="text-xs text-muted-foreground">
              <div>Toxicity: {(metrics.toxicity * 100).toFixed(1)}%</div>
              {metrics.identity_attack > 0.5 && (
                <div>Contains potential identity-based language</div>
              )}
              {metrics.threat > 0.5 && (
                <div>Contains potentially threatening language</div>
              )}
            </div>
          )}
        </div>
      )}
      {error && (
        <p className="text-sm text-red-500 mt-1">
          Error checking content: {error.message}
        </p>
      )}
    </div>
  );
};

export default TextareaWithToxicityCheck;

