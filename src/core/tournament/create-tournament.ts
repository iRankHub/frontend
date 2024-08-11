import { CreateTournamentRequest, CreateTournamentResponse } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { CreateTournamentType } from "@/types/tournaments/tournament";
import { tournamentClient } from "../grpc-clients";

export const createTournament = async ({
    coordinator_id,
    end_date,
    format_id,
    judges_per_debate_elimination,
    judges_per_debate_preliminary,
    league_id,
    location,
    name,
    number_of_elimination_rounds,
    number_of_preliminary_rounds,
    start_date,
    tournament_fee,
    token,
}: CreateTournamentType): Promise<CreateTournamentResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new CreateTournamentRequest();
        request.setCoordinatorId(coordinator_id);
        request.setEndDate(end_date);
        request.setFormatId(format_id);
        request.setJudgesPerDebateElimination(judges_per_debate_elimination);
        request.setJudgesPerDebatePreliminary(judges_per_debate_preliminary);
        request.setLeagueId(league_id);
        request.setLocation(location);
        request.setName(name);
        request.setNumberOfEliminationRounds(number_of_elimination_rounds);
        request.setNumberOfPreliminaryRounds(number_of_preliminary_rounds);
        request.setStartDate(start_date);
        request.setTournamentFee(tournament_fee);
        request.setToken(token);

        tournamentClient.createTournament(request, {}, (err, response) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(err);
                resolve(response.toObject());
            }
        });
    });
};