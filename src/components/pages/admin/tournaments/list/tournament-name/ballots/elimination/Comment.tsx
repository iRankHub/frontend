import { Textarea } from "@/components/ui/textarea";
import { FC, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export type ValidationStatus = {
  isToxic: boolean;
  isLoading: boolean;
};

interface TextareaWithToxicityCheckProps {
  text: string;
  onFeedbackChange: (text: string, validation: ValidationStatus) => void;
  validation?: ValidationStatus;
  metrics?: {
    toxicity?: number;
    identity_attack?: number;
    threat?: number;
  } | null;
}

const TextareaWithToxicityCheck: FC<TextareaWithToxicityCheckProps> = ({
                                                                         text,
                                                                         onFeedbackChange,
                                                                         validation = { isToxic: false, isLoading: false },
                                                                         metrics = null,
                                                                       }) => {
  const [feedback, setFeedback] = useState(text);

  // This effect handles syncing external text updates
  useEffect(() => {
    if (text !== feedback) {
      setFeedback(text);
    }
  }, [text]);

  // Update local state without triggering immediate validation
  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setFeedback(newValue);
    // Pass the current validation state along with the text
    onFeedbackChange(newValue, validation);
  };

  return (
      <div className="relative">
        <Textarea
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Add a comment..."
            className={cn(
                "resize-none",
                validation.isToxic && "border-red-500 focus-visible:ring-red-500"
            )}
        />
        {validation.isLoading && (
            <div className="absolute right-2 top-2">
              <Icons.spinner className="h-4 w-4 animate-spin" />
            </div>
        )}
        {validation.isToxic && (
            <div className="mt-2 space-y-2">
              <p className="text-sm text-red-500">
                Please ensure your feedback is respectful
              </p>
              {metrics && metrics.toxicity !== undefined && (
                  <div className="text-xs text-muted-foreground">
                    <div>Toxicity: {(metrics.toxicity * 100).toFixed(1)}%</div>
                    {metrics.identity_attack && metrics.identity_attack > 0.5 && (
                        <div>Contains potential identity-based language</div>
                    )}
                    {metrics.threat && metrics.threat > 0.5 && (
                        <div>Contains potentially threatening language</div>
                    )}
                  </div>
              )}
            </div>
        )}
      </div>
  );
};

export default TextareaWithToxicityCheck;