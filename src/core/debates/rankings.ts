import { OverallRankingRequest, OverallRankingResponse, PerformanceRequest, PerformanceResponse, StudentRanking, TournamentRankingRequest } from "@/lib/grpc/proto/debate_management/debate_pb";
import { debateClient } from "../grpc-clients";

export const getTournamentStudentRanking = async ({
    token,
    tournament_id,
}: {
    token: string;
    tournament_id: number;
}): Promise<StudentRanking.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new TournamentRankingRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);

        debateClient.getTournamentStudentRanking(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().rankingsList);
            }
        });
    });
}

export const getOverallStudentRanking = async ({
    token,
    user_id,
}: {
    token: string;
    user_id: number;
}): Promise<OverallRankingResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new OverallRankingRequest();
        request.setToken(token);
        request.setUserId(user_id);

        debateClient.getOverallStudentRanking(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const getStudentOverallPerformance = async ({
    token,
    user_id,
    start_date,
    end_date,
}: {
    token: string;
    user_id: number;
    start_date: string;
    end_date: string;
}): Promise<PerformanceResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new PerformanceRequest();
        request.setToken(token);
        request.setUserId(user_id);
        request.setStartDate(start_date);
        request.setEndDate(end_date);

        debateClient.getStudentOverallPerformance(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}