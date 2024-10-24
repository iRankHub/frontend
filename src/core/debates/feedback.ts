import { GetJudgeFeedbackRequest, GetJudgeFeedbackResponse, GetStudentFeedbackRequest, GetStudentFeedbackResponse, JudgeFeedbackEntry, MarkFeedbackAsReadRequest, StudentFeedbackEntry, SubmitJudgeFeedbackRequest, SubmitJudgeFeedbackResponse } from "@/lib/grpc/proto/debate_management/debate_pb";
import { number, string } from "zod";
import { debateClient } from "../grpc-clients";

export interface GetStudentFeedback {
    token: string;
    page_size: number;
    page: number;
    tournament_id: number;
}

export const getStudentFeedback = async ({
    page,
    page_size,
    token,
    tournament_id
}: GetStudentFeedback): Promise<StudentFeedbackEntry.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new GetStudentFeedbackRequest();
        request.setPage(page);
        request.setPageSize(page_size);
        request.setToken(token);
        request.setTournamentId(tournament_id);

        debateClient.getStudentFeedback(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().feedbackEntriesList);
            }
        })
    })
}

export interface GetJudgeFeedback {
    token: string;
    page_size: number;
    page: number;
}

export const getJudgeFeedback = async ({
    page,
    page_size,
    token,
}: GetJudgeFeedback): Promise<JudgeFeedbackEntry.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new GetJudgeFeedbackRequest();
        request.setPage(page);
        request.setPageSize(page_size);
        request.setToken(token);

        debateClient.getJudgeFeedback(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().feedbackEntriesList);
            }
        })
    })
}

export const submitFeedback = async ({
    clarity_rating,
    constructiveness_rating,
    debate_id,
    engagement_rating,
    fairness_rating,
    judge_id,
    text_feedback,
    timeliness_rating,
    token,
}: {
    clarity_rating: number;
    constructiveness_rating: number;
    debate_id: number;
    engagement_rating: number;
    fairness_rating: number;
    judge_id: number;
    text_feedback: string;
    timeliness_rating: number;
    token: string;
}): Promise<SubmitJudgeFeedbackResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new SubmitJudgeFeedbackRequest();
        request.setClarityRating(clarity_rating)
        request.setConstructivenessRating(constructiveness_rating);
        request.setDebateId(debate_id);
        request.setEngagementRating(engagement_rating);
        request.setFairnessRating(fairness_rating);
        request.setJudgeId(judge_id);
        request.setTextFeedback(text_feedback);
        request.setTimelinessRating(timeliness_rating);
        request.setToken(token);

        debateClient.submitJudgeFeedback(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        })
    })
}

export const markStudentFeedbackAsRead = async ({
    feedback_id,
    token,
}: {
    feedback_id: number;
    token: string
}): Promise<any> => {
    return new Promise((resolve, reject) => {
        const request = new MarkFeedbackAsReadRequest();
        request.setFeedbackId(feedback_id);
        request.setToken(token);

        debateClient.markStudentFeedbackAsRead(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        })
    })
}

export const markVolunteerFeedbackAsRead = async ({
    feedback_id,
    token,
}: {
    feedback_id: number;
    token: string
}): Promise<any> => {
    return new Promise((resolve, reject) => {
        const request = new MarkFeedbackAsReadRequest();
        request.setFeedbackId(feedback_id);
        request.setToken(token);

        debateClient.markJudgeFeedbackAsRead(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        })
    })
}