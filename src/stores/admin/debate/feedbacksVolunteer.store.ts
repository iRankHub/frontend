import { JudgeFeedbackEntry } from "@/lib/grpc/proto/debate_management/debate_pb";
import { create } from "zustand";

interface FeedbacksStore {
    feedbacks: JudgeFeedbackEntry.AsObject[];
    totalCount: number;
    setFeedbacks: (feedbacks: JudgeFeedbackEntry.AsObject[]) => void;
    addFeedbacks: (newFeedbacks: JudgeFeedbackEntry.AsObject[]) => void;
    setTotalCount: (count: number) => void;
    updateFeedbackReadStatus: (feedbackId: number) => void;
    reset: () => void;
}

export const useJudgeFeedbacksStore = create<FeedbacksStore>((set) => ({
    feedbacks: [],
    totalCount: 0,
    setFeedbacks: (feedbacks) => set({ feedbacks }),
    addFeedbacks: (newFeedbacks) =>
        set((state) => ({
            feedbacks: [
                ...state.feedbacks,
                ...newFeedbacks.filter(
                    (newFeedback) =>
                        !state.feedbacks.some(
                            (existingFeedback) => existingFeedback.feedbackId === newFeedback.feedbackId
                        )
                ),
            ],
        })),
    setTotalCount: (totalCount) => set({ totalCount }),
    updateFeedbackReadStatus: (feedbackId) => {
        set((state) => {
            const newFeedbacks = state.feedbacks.map((feedback) => {
                if (feedback.feedbackId === feedbackId) {
                    return {
                        ...feedback,
                        isRead: true,
                    };
                }
                return feedback;
            });
            return { feedbacks: newFeedbacks };
        });
    },
    reset: () => set({ feedbacks: [], totalCount: 0 }),
}));
