import React, { useEffect } from "react";
import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StudentFeedbackEntry } from "@/lib/grpc/proto/debate_management/debate_pb";
import { useFeedbacksStore } from "@/stores/admin/debate/feedbacks.store";

interface ViewFeedbackProps {
  feedbackData: StudentFeedbackEntry.AsObject;
  onFeedbackClick?: () => void;
}

export default function ViewFeedback({
  feedbackData,
  onFeedbackClick,
}: ViewFeedbackProps) {
  const {
    roomName,
    studentTeamName,
    opponentTeamName,
    isEliminationRound,
    speakerPoints,
    isRead,
    // debateId,
    // judgeId,
    headJudgeName,
    roundNumber,
    feedback: textFeedback,
  } = feedbackData;

  const { updateFeedbackReadStatus } = useFeedbacksStore((state) => state);
  useEffect(() => {
    const updateReadStatus = async () => {
      if (!isRead) {
      }
    };

    updateReadStatus();
  }, [isRead]);

  return (
    <div className="w-full sm:max-w-md overflow-y-auto p-5">
      <div className="space-y-6">
        {/* Performance Summary Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            <h3 className="font-medium">Performance Summary</h3>
          </div>
          <div className="text-sm space-y-2">
            <p className="text-orange-500">Individual Summary</p>
            <div className="border border-muted rounded-md p-3 space-y-1">
              <p>
                <span className="text-gray-500">Pairing :</span> Round{" "}
                {roundNumber}
              </p>
              <p>
                <span className="text-gray-500">Division :</span>{" "}
                {isEliminationRound ? "Elimination" : "Preliminary"}
              </p>
              <p>
                <span className="text-gray-500">Debate :</span>{" "}
                {studentTeamName} vs {opponentTeamName}
              </p>
              <p>
                <span className="text-gray-500">Points :</span> {speakerPoints}
              </p>
            </div>
          </div>
        </div>

        {/* Miscellaneous Information Section */}
        <div className="space-y-4">
          <h3 className="text-orange-500 text-sm">Miscellaneous Information</h3>
          <div className="border border-muted rounded-md p-3 space-y-3">
            <div className="flex flex-col gap-1">
              <p className="text-sm">{headJudgeName} - Head Judge</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm">
                <span className="text-gray-500">Room :</span> {roomName}
              </p>
            </div>
          </div>
        </div>

        {/* Comment Section */}
        <div className="border border-muted rounded-md p-3 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            <h3 className="font-medium">Comment</h3>
          </div>
          <p className="border border-muted rounded-md p-3 text-sm text-gray-600">
            {textFeedback || "No feedback provided yet."}
          </p>
        </div>

        {/* Provide Feedback Button */}
        <Button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          onClick={onFeedbackClick}
        >
          {isRead ? "Update Feedback" : "Provide Feedback"}
        </Button>
      </div>
    </div>
  );
}
