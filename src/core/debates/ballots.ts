import { GetBallotProps, GetBallotsProps } from "@/types/pairings/ballots";
import { debateClient } from "../grpc-clients";
import { Ballot, GetBallotRequest, GetBallotResponse, GetBallotsRequest } from "@/lib/grpc/proto/debate_management/debate_pb";

export const getBallots = async ({
    token,
    tournament_id,
    is_elimination,
    round
}: GetBallotsProps): Promise<Ballot.AsObject[]> => {
    return new Promise((resolve, reject) => {
        const request = new GetBallotsRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);
        request.setIsElimination(is_elimination);
        request.setRoundNumber(round);

        debateClient.getBallots(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject().ballotsList);
            }
        });
    });
}

export const getBallot = async ({
    token,
    ballot_id
}: GetBallotProps & { ballot_id: number }): Promise<GetBallotResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetBallotRequest();
        request.setToken(token);
        request.setBallotId(ballot_id);

        debateClient.getBallot(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}