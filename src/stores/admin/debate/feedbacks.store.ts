import { StudentFeedbackEntry } from "@/lib/grpc/proto/debate_management/debate_pb";
import { create } from "zustand";

interface FeedbacksStore {
    feedbacks: StudentFeedbackEntry.AsObject[];
    setFeedbacks: (feedbacks: StudentFeedbackEntry.AsObject[]) => void;
    updateFeedbackReadStatus: (feedbackId: number, isRead: boolean) => void;
}

export const useFeedbacksStore = create<FeedbacksStore>((set) => ({
    feedbacks: [],
    setFeedbacks: (feedbacks: StudentFeedbackEntry.AsObject[]) => set({ feedbacks }),
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