import { JudgeFeedbackEntry } from "@/lib/grpc/proto/debate_management/debate_pb";
import { create } from "zustand";

interface FeedbacksStore {
    feedbacks: JudgeFeedbackEntry.AsObject[];
    setFeedbacks: (feedbacks: JudgeFeedbackEntry.AsObject[]) => void;
    updateFeedbackReadStatus: (feedbackId: number, isRead: boolean) => void;
}

export const useJudgeFeedbacksStore = create<FeedbacksStore>((set) => ({
    feedbacks: [],
    setFeedbacks: (feedbacks: JudgeFeedbackEntry.AsObject[]) => set({ feedbacks }),
    updateFeedbackReadStatus: (feedbackId: number, isRead: boolean) => {
        set((state: FeedbacksStore) => {
            const newFeedbacks = state.feedbacks.map((feedback) => {
                if (feedback.roundNumber === feedbackId) {
                    return {
                        ...feedback,
                        isRead,
                    }
                }
                return feedback;
            });
            return { feedbacks: newFeedbacks };
        });
    },
}));