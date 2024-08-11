import { tournamentClient } from "@/core/grpc-clients";
import {
    DeleteTournamentRequest,
    DeleteTournamentResponse,
    GetTournamentRequest,
    GetTournamentResponse,
    ListTournamentsRequest,
    ListTournamentsResponse,
    UpdateTournamentRequest,
    UpdateTournamentResponse,
} from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { DeleteTournamentType, GetTournamentType, UpdateTournamentType } from "@/types/tournaments/tournament";
import { CreateTournamentRequest } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import {
    ListTournamentFormats,
} from "@/types/tournaments/tournament-formats";

export const updateTournament = async ({
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
    coordinator_id,
    tournament_id
}: UpdateTournamentType): Promise<UpdateTournamentResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new UpdateTournamentRequest();
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
        request.setCoordinatorId(coordinator_id);
        request.setTournamentId(tournament_id);

        tournamentClient.updateTournament(request, {}, (err, response) => {
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

export const tournamentsList = async ({
    page_size,
    page_token,
    token,
}: ListTournamentFormats): Promise<ListTournamentsResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new ListTournamentsRequest();
        request.setPageSize(page_size);
        request.setPageToken(page_token);
        request.setToken(token);

        tournamentClient.listTournaments(request, {}, (err, response) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
};

export const getTournament = async ({
    token,
    tournament_id
}: GetTournamentType): Promise<GetTournamentResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetTournamentRequest();
        request.setTournamentId(tournament_id);
        request.setToken(token);

        tournamentClient.getTournament(request, {}, (err, response) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const deleteTournament = async ({
    token,
    tournament_id
}: DeleteTournamentType): Promise<DeleteTournamentResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new DeleteTournamentRequest();
        request.setTournamentId(tournament_id);
        request.setToken(token);

        tournamentClient.deleteTournament(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}


