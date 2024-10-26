import { JudgeFeedbackEntry } from "@/lib/grpc/proto/debate_management/debate_pb";
import { create } from "zustand";

interface FeedbacksStore {
    feedbacks: JudgeFeedbackEntry.AsObject[];
    setFeedbacks: (feedbacks: JudgeFeedbackEntry.AsObject[]) => void;
    updateFeedbackReadStatus: (feedbackId: number) => void;
}

export const useJudgeFeedbacksStore = create<FeedbacksStore>((set) => ({
    feedbacks: [],
    setFeedbacks: (feedbacks: JudgeFeedbackEntry.AsObject[]) => set({ feedbacks }),
    updateFeedbackReadStatus: (feedbackId: number) => {
        set((state: FeedbacksStore) => {
            const newFeedbacks = state.feedbacks.map((feedback) => {
                if (feedback.feedbackId === feedbackId) {
                    return {
                        ...feedback,
                        isRead: true,
                    }
                }
                return feedback;
            });
            return { feedbacks: newFeedbacks };
        });
    },
}));