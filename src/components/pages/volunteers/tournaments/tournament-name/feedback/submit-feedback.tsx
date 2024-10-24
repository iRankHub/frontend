import React, { useEffect } from "react";
import { Check, ChevronsUpDown, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useFeedbacksStore } from "@/stores/admin/debate/feedbacks.store";
import { StudentFeedbackEntry } from "@/lib/grpc/proto/debate_management/debate_pb";
import { submitFeedback } from "@/core/debates/feedback";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useUserStore } from "@/stores/auth/auth.store";

const RATING_OPTIONS = [
  { value: "20", label: "20% - Vague" },
  { value: "40", label: "40% - General" },
  { value: "60", label: "60% - Clear" },
  { value: "80", label: "80% - Specific" },
  { value: "100", label: "100% - Crystal" },
];

interface RatingComboboxProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const RatingCombobox = ({ label, value, onChange }: RatingComboboxProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      <Popover open={open} onOpenChange={setOpen} modal={true}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between font-normal"
          >
            {value
              ? RATING_OPTIONS.find((option) => option.value === value)?.label
              : "Select rating..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[--radix-popover-trigger-width] p-0"
          align="start"
          side="bottom"
        >
          <Command>
            <CommandList>
              <CommandGroup>
                {RATING_OPTIONS.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                      onChange(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

interface ProvideFeedbackProps {
  debateId: number;
  judgeId: number;
  onClose?: () => void;
  feedbackData: StudentFeedbackEntry.AsObject;
}

const ProvideFeedback = ({
  debateId,
  judgeId,
  onClose,
  feedbackData,
}: ProvideFeedbackProps) => {
  const { isRead } = feedbackData;
  const [formData, setFormData] = React.useState({
    clarity_rating: "",
    fairness_rating: "",
    engagement_rating: "",
    timeliness_rating: "",
    constructiveness_rating: "",
    text_feedback: "",
  });
  const { updateFeedbackReadStatus } = useFeedbacksStore((state) => state);

  useEffect(() => {
    const updateReadStatus = async () => {
      if (!isRead) {
      }
    };

    updateReadStatus();
  }, [isRead]);

  const handleRatingChange = (field: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const { toast } = useToast();
  const { user } = useUserStore((state) => state);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      return;
    }

    const submissionData = {
      clarity_rating: parseInt(formData.clarity_rating),
      constructiveness_rating: parseInt(formData.constructiveness_rating),
      debate_id: debateId,
      engagement_rating: parseInt(formData.engagement_rating),
      fairness_rating: parseInt(formData.fairness_rating),
      judge_id: judgeId,
      text_feedback: formData.text_feedback,
      timeliness_rating: parseInt(formData.timeliness_rating),
      token: user.token,
    };

    submitFeedback(submissionData)
      .then((res) => {
        console.log(res)
        toast({
          variant: "success",
          title: "Success",
          description: res.message,
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
        // Close the modal if provided
        if (onClose) {
          onClose();
        }
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Error",
          description: err.message,
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
      });
  };

  return (
    <div className="w-full sm:max-w-md p-5">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h3 className="text-base font-medium text-foreground">
          Judge Performance Evaluation Rubric
        </h3>

        <div className="space-y-4">
          {/* Rating Comboboxes */}
          <RatingCombobox
            label="Clarity"
            value={formData.clarity_rating}
            onChange={handleRatingChange("clarity_rating")}
          />
          <RatingCombobox
            label="Fairness"
            value={formData.fairness_rating}
            onChange={handleRatingChange("fairness_rating")}
          />
          <RatingCombobox
            label="Engagement"
            value={formData.engagement_rating}
            onChange={handleRatingChange("engagement_rating")}
          />
          <RatingCombobox
            label="Timeliness"
            value={formData.timeliness_rating}
            onChange={handleRatingChange("timeliness_rating")}
          />
          <RatingCombobox
            label="Constructiveness"
            value={formData.constructiveness_rating}
            onChange={handleRatingChange("constructiveness_rating")}
          />

          {/* Comment Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              <h3 className="text-sm font-medium">Comment</h3>
            </div>
            <Textarea
              placeholder="Type your comment here..."
              className="min-h-[100px] resize-none"
              value={formData.text_feedback}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  text_feedback: e.target.value,
                }))
              }
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          >
            Post feedback
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProvideFeedback;
