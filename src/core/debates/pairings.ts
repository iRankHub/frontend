import {
    GeneratePairingsRequest,
    GetJudgesRequest,
    GetPairingsRequest,
    GetRoomRequest,
    GetRoomResponse,
    GetRoomsRequest,
    Judge,
    Pairing,
    RegeneratePairingsRequest,
    Room,
    RoomStatus,
    Team,
    UpdatePairingsRequest,
    UpdatePairingsResponse,
    UpdateRoomRequest,
    UpdateRoomResponse,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { debateClient } from "../grpc-clients";
import {
    GetPairingsProps,
    GetTournamentJudgesProps,
    GetTournamentRoomProps,
    GetTournamentRoomsProps,
    RegeneratePairingsProps,
    UpdatePairingProps,
    UpdateRoomProps
} from "@/types/pairings";

export const generatePairings = async ({
    token,
    tournament_id,
    is_elimination
}: GetPairingsProps): Promise<Pairing.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new GeneratePairingsRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);
        request.setIsEliminationRound(is_elimination);

        debateClient.generatePairings(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().pairingsList);
            }
        });
    });
}

export const regeneratePairings = async ({
    token,
    tournament_id,
}: RegeneratePairingsProps): Promise<Pairing.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new RegeneratePairingsRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);

        debateClient.regeneratePairings(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().pairingsList);
            }
        });
    });
}

export const getPairings = async ({
    is_elimination,
    round,
    token,
    tournament_id
}: GetPairingsProps): Promise<Pairing.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new GetPairingsRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);
        request.setRoundNumber(round);
        request.setIsElimination(is_elimination); // for both elimination and preliminary rounds

        debateClient.getPairings(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().pairingsList);
            }
        });
    });
}

export const updatePairing = async ({
    pairing,
    token
}: UpdatePairingProps): Promise<UpdatePairingsResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new UpdatePairingsRequest();
        request.setToken(token);

        const updatedPairing = new Pairing();
        updatedPairing.setPairingId(pairing.pairingId);
        updatedPairing.setRoomId(pairing.roomId);

        if (pairing.team1) {
            const team_1 = new Team();
            team_1.setTeamId(pairing.team1.teamId);
            updatedPairing.setTeam1(team_1);
        }

        if (pairing.team2) {
            const team_2 = new Team();
            team_2.setTeamId(pairing.team2.teamId);
            updatedPairing.setTeam2(team_2);
        }

        // request.setPairingsList(updatedPairing);

        debateClient.updatePairings(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const getTournamentJudges = async ({
    is_elimination,
    round_number,
    token,
    tournament_id
}: GetTournamentJudgesProps): Promise<Judge.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new GetJudgesRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);
        request.setRoundNumber(round_number);
        request.setIsElimination(is_elimination);

        debateClient.getJudges(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().judgesList);
            }
        });
    });
}

export const getTournamentRooms = async ({
    token,
    tournament_id
}: GetTournamentRoomsProps): Promise<RoomStatus.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new GetRoomsRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);

        debateClient.getRooms(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().roomsList);
            }
        });
    });
}

export const getRoom = async ({
    token,
    room_id,
    tournament_id
}: GetTournamentRoomProps): Promise<GetRoomResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetRoomRequest();
        request.setToken(token);
        request.setRoomId(room_id);
        request.setTournamentId(tournament_id);

        debateClient.getRoom(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const updateTournamentRoom = async ({
    name,
    token,
    room_id
}: UpdateRoomProps): Promise<UpdateRoomResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new UpdateRoomRequest();
        request.setToken(token);

        const room = new Room();
        room.setRoomName(name);
        room.setRoomId(room_id);
        request.setRoom(room);

        debateClient.updateRoom(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}