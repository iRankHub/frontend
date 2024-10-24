import React, { useEffect } from "react";
import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JudgeFeedbackEntry } from "@/lib/grpc/proto/debate_management/debate_pb";
import { useFeedbacksStore } from "@/stores/admin/debate/feedbacks.store";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ViewFeedbackProps {
  feedbackData: JudgeFeedbackEntry.AsObject;
  onFeedbackClick?: () => void;
}

const getRatingEvaluation = (rating: number) => {
  switch (rating) {
    case 20:
      return "Vague";
    case 40:
      return "General";
    case 60:
      return "Clear";
    case 80:
      return "Specific";
    case 100:
      return "Crystal";
    default:
      return "Not rated";
  }
};

export default function ViewFeedback({
  feedbackData,
  onFeedbackClick,
}: ViewFeedbackProps) {
  const {
    clarityRating,
    constructivenessRating,
    engagementRating,
    fairnessRating,
    isRead,
    textFeedback,
    timelinessRating,
  } = feedbackData;

  const { updateFeedbackReadStatus } = useFeedbacksStore((state) => state);

  // Calculate total score
  const totalScore = Math.round(
    (clarityRating +
      constructivenessRating +
      engagementRating +
      fairnessRating +
      timelinessRating) /
      5
  );

  useEffect(() => {
    const updateReadStatus = async () => {
      if (!isRead) {
        // await updateFeedbackReadStatus(feedbackData.debateId);
      }
    };
    updateReadStatus();
  }, [isRead, updateFeedbackReadStatus]);

  return (
    <ScrollArea className="w-full sm:max-w-md p-5 pb-24 h-full">
      <div className="space-y-6">
        {/* Total Score Section */}
        <div className="border border-muted rounded-md p-3 space-y-2">
          <p className="text-orange-500 text-sm">Total feedback score</p>
          <p className="text-sm">score : {totalScore}%</p>
        </div>

        {/* Individual Ratings */}
        <div className="space-y-4">
          {/* Clarity */}
          <div className="border border-muted rounded-md p-3 space-y-1">
            <p className="text-orange-500 text-sm">Clarity</p>
            <p className="text-sm">
              Evaluation : {getRatingEvaluation(clarityRating)}
            </p>
            <p className="text-sm">Score : {clarityRating}%</p>
          </div>

          {/* Constructiveness */}
          <div className="border border-muted rounded-md p-3 space-y-1">
            <p className="text-orange-500 text-sm">Constructiveness</p>
            <p className="text-sm">
              Evaluation : {getRatingEvaluation(constructivenessRating)}
            </p>
            <p className="text-sm">Score : {constructivenessRating}%</p>
          </div>

          {/* Fairness */}
          <div className="border border-muted rounded-md p-3 space-y-1">
            <p className="text-orange-500 text-sm">Fairness</p>
            <p className="text-sm">
              Evaluation : {getRatingEvaluation(fairnessRating)}
            </p>
            <p className="text-sm">Score : {fairnessRating}%</p>
          </div>

          {/* Engagement */}
          <div className="border border-muted rounded-md p-3 space-y-1">
            <p className="text-orange-500 text-sm">Engagement</p>
            <p className="text-sm">
              Evaluation : {getRatingEvaluation(engagementRating)}
            </p>
            <p className="text-sm">Score : {engagementRating}%</p>
          </div>

          {/* Timeliness */}
          <div className="border border-muted rounded-md p-3 space-y-1">
            <p className="text-orange-500 text-sm">Timeliness</p>
            <p className="text-sm">
              Evaluation : {getRatingEvaluation(timelinessRating)}
            </p>
            <p className="text-sm">Score : {timelinessRating}%</p>
          </div>
        </div>

        <div className="border border-muted rounded-md p-3 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            <h3 className="font-medium">Comment</h3>
          </div>
          <p className="border border-muted rounded-md p-3 text-sm text-gray-600">
            {textFeedback || "No feedback provided yet."}
          </p>
        </div>
      </div>
    </ScrollArea>
  );
}
