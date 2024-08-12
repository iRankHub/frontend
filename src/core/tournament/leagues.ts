import { tournamentClient } from "../grpc-clients";
import {
    CreateLeagueRequest,
    CreateLeagueResponse,
    DeleteLeagueRequest,
    DeleteLeagueResponse,
    ListLeaguesRequest,
    ListLeaguesResponse,
    LocalDetails,
    UpdateLeagueRequest,
    UpdateLeagueResponse
} from "@/lib/grpc/proto/tournament_management/tournament_pb";
import {
    ListTournamentLeagues,
    CreateTournamentLeague,
    UpdateTournamentLeague,
    DeleteTournamentLeague,
} from "@/types/tournaments/tournament-leagues";

export const tournamentLeagues = async ({
    page_size,
    page_token,
    token,
}: ListTournamentLeagues): Promise<ListLeaguesResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new ListLeaguesRequest();
        request.setPageSize(page_size);
        request.setPageToken(page_token);
        request.setToken(token);

        tournamentClient.listLeagues(request, {}, (err, response) => {
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

export const createTournamentLeague = async ({
    league_type,
    name,
    local_details,
    token,
}: CreateTournamentLeague): Promise<CreateLeagueResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new CreateLeagueRequest();
        request.setName(name);
        request.setLeagueType(league_type);
        request.setToken(token);

        const localDetails = new LocalDetails();
        local_details.districtsList.forEach((district) => {
            localDetails.addDistricts(district);
        });
        local_details.provincesList.forEach((province) => {
            localDetails.addProvinces(province);
        });
        request.setLocalDetails(localDetails);

        tournamentClient.createLeague(request, {}, (err, response) => {
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

export const updateTournamentLeague = async ({
    league_id,
    league_type,
    local_details,
    name,
    token,
}: UpdateTournamentLeague): Promise<UpdateLeagueResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new UpdateLeagueRequest();
        request.setLeagueId(league_id);
        request.setName(name);
        request.setLeagueType(league_type);
        request.setLocalDetails(local_details);
        request.setToken(token);

        tournamentClient.updateLeague(request, {}, (err, response) => {
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

export const deleteTournamentLeague = async ({
    league_id,
    token,
}: DeleteTournamentLeague): Promise<DeleteLeagueResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new DeleteLeagueRequest();
        request.setLeagueId(league_id);
        request.setToken(token);

        tournamentClient.deleteLeague(request, {}, (err, response) => {
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
