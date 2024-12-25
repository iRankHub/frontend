import { StudentFeedbackEntry } from "@/lib/grpc/proto/debate_management/debate_pb";
import { create } from "zustand";

interface FeedbacksStore {
    feedbacks: StudentFeedbackEntry.AsObject[];
    totalCount: number;
    setFeedbacks: (feedbacks: StudentFeedbackEntry.AsObject[]) => void;
    updateFeedbackReadStatus: (feedbackId: number) => void;
    addFeedbacks: (newFeedbacks: StudentFeedbackEntry.AsObject[]) => void;
    setTotalCount: (count: number) => void;
    reset: () => void;
}

export const useFeedbacksStore = create<FeedbacksStore>((set) => ({
    feedbacks: [],
    totalCount: 0,
    setFeedbacks: (feedbacks: StudentFeedbackEntry.AsObject[]) => set({ feedbacks }),
    updateFeedbackReadStatus: (feedbackId: number) => {
        set((state: FeedbacksStore) => {
            const newFeedbacks = state.feedbacks.map((feedback) => {
                if (feedback.ballotId === feedbackId) {
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
    addFeedbacks: (newFeedbacks) =>
        set((state) => ({
            feedbacks: [
                ...state.feedbacks,
                ...newFeedbacks.filter(
                    (newFeedback) =>
                        !state.feedbacks.some(
                            (existingFeedback) => existingFeedback.debateId === newFeedback.debateId
                        )
                ),
            ],
        })),
    setTotalCount: (totalCount) => set({ totalCount }),
    reset: () => set({ feedbacks: [], totalCount: 0 }),
}));
