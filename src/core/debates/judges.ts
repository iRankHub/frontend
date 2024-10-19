import { GetJudgeRequest, GetJudgeResponse, GetJudgesRequest, Judge, RoomInfo, UpdateJudgeRequest, UpdateJudgeResponse } from "@/lib/grpc/proto/debate_management/debate_pb";
import { GetTournamentJudgeProps, GetTournamentJudgesProps, UpdateJudgeData } from "@/types/pairings";
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

export const updateTournamentJudge = async ({
    token,
    judge_id,
    tournament_id,
    elimination,
    preliminary
}: UpdateJudgeData): Promise<UpdateJudgeResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new UpdateJudgeRequest();
        request.setToken(token);
        request.setJudgeId(judge_id);
        request.setTournamentId(tournament_id);

        const eliminationMap = request.getEliminationMap();
        Object.entries(elimination).forEach(([round, assignment]) => {
            console.log(round, assignment)
            const room = new RoomInfo();
            room.setRoomId(assignment.roomId);
            room.setRoomName(assignment.roomName || "");
            eliminationMap.set(Number(round), room);
        });

        const preliminaryMap = request.getPreliminaryMap();
        Object.entries(preliminary).forEach(([round, assignment]) => {
            console.log(round, assignment)
            const room = new RoomInfo();
            room.setRoomId(assignment.roomId);
            room.setRoomName(assignment.roomName || "");
            preliminaryMap.set(Number(round), room);
        });

        // console.log("UpdateJudgeRequest:", request.toObject());

        debateClient.updateJudge(request, {}, (err, response) => {
            if (err) {
                console.error("Error updating judge:", err);
                reject(err);
            } else {
                console.log("Update judge response:", response.toObject());
                resolve(response.toObject());
            }
        });
    });
}