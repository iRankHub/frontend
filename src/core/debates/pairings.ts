import {
    GeneratePairingsRequest,
    GetPairingsRequest,
    Pairing,
    RegeneratePairingsRequest,
    Team,
    UpdatePairingsRequest,
    UpdatePairingsResponse,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { debateClient } from "../grpc-clients";
import {
    GetPairingsProps,
    RegeneratePairingsProps,
    UpdatePairingProps,
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