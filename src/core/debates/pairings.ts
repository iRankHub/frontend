import {
    GenerateEliminationPairingsRequest,
    GeneratePreliminaryPairingsRequest,
    GetPairingsRequest,
    Pairing,
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

export const generatePairingsElimination = async ({
    token,
    tournament_id,
    round
}: GetPairingsProps): Promise<Pairing.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new GenerateEliminationPairingsRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);
        request.setRoundNumber(round);

        debateClient.generateEliminationPairings(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().pairingsList);
            }
        });
    });
}

export const generatePairingsPreliminaries = async ({
    token,
    tournament_id,
}: GetPairingsProps): Promise<Pairing.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new GeneratePreliminaryPairingsRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);

        debateClient.generatePreliminaryPairings(request, {}, (err, response) => {
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

export const updatePairings = async ({
    pairings,
    token
}: UpdatePairingProps): Promise<UpdatePairingsResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new UpdatePairingsRequest();
        request.setToken(token);

        const pairingsList = new Array<Pairing>();
        pairings.forEach((pairing) => {
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

            pairingsList.push(updatedPairing);
        });
        request.setPairingsList(pairingsList);

        debateClient.updatePairings(request, {}, (err, response) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}