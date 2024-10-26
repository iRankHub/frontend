import { StudentFeedbackEntry } from "@/lib/grpc/proto/debate_management/debate_pb";
import { create } from "zustand";

interface FeedbacksStore {
    feedbacks: StudentFeedbackEntry.AsObject[];
    setFeedbacks: (feedbacks: StudentFeedbackEntry.AsObject[]) => void;
    updateFeedbackReadStatus: (feedbackId: number) => void;
}

export const useFeedbacksStore = create<FeedbacksStore>((set) => ({
    feedbacks: [],
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
}));