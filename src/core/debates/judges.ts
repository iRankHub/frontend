import { GetJudgeRequest, GetJudgeResponse, GetJudgesRequest, Judge } from "@/lib/grpc/proto/debate_management/debate_pb";
import { GetTournamentJudgeProps, GetTournamentJudgesProps } from "@/types/pairings";
import { debateClient } from "../grpc-clients";

export const getTournamentJudges = async ({
    token,
    tournament_id
}: GetTournamentJudgesProps): Promise<Judge.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new GetJudgesRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);

        debateClient.getJudges(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().judgesList);
            }
        });
    });
}

export const getTournamentJudge = async ({
    token,
    judge_id,
    tournament_id
}: GetTournamentJudgeProps): Promise<GetJudgeResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetJudgeRequest();
        request.setToken(token);
        request.setJudgeId(judge_id);
        request.setTournamentId(tournament_id);

        debateClient.getJudge(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}