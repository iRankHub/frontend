import { tournamentClient } from "@/core/grpc-clients";
import {
    BulkResendInvitationsRequest,
    BulkResendInvitationsResponse,
    BulkUpdateInvitationStatusRequest,
    BulkUpdateInvitationStatusResponse,
    DeleteTournamentRequest,
    DeleteTournamentResponse,
    GetInvitationsByTournamentRequest,
    GetInvitationsByTournamentResponse,
    GetInvitationsByUserRequest,
    GetInvitationsByUserResponse,
    GetTournamentRequest,
    GetTournamentResponse,
    GetTournamentStatsRequest,
    GetTournamentStatsResponse,
    ListTournamentsRequest,
    ListTournamentsResponse,
    ResendInvitationRequest,
    ResendInvitationResponse,
    UpdateInvitationStatusRequest,
    UpdateInvitationStatusResponse,
    UpdateTournamentRequest,
    UpdateTournamentResponse,
} from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { DeleteTournamentType, GetTournamentType, UpdateTournamentType } from "@/types/tournaments/tournament";
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

export const getTournamentCoordinator = async (token: string): Promise<any> => {}

// invitations
export const getInvitationsByTournament = async (
    token: string,
    tournament_id: number
): Promise<GetInvitationsByTournamentResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetInvitationsByTournamentRequest();
        request.setToken(token);
        request.setTournamentId(tournament_id);

        tournamentClient.getInvitationsByTournament(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const getInvitationsByUser = async (
    token: string
): Promise<GetInvitationsByUserResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetInvitationsByUserRequest();
        request.setToken(token);

        tournamentClient.getInvitationsByUser(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const updateInvitationStatus = async ({
    token,
    invitation_id,
    new_status,
}: {
    token: string;
    invitation_id: number;
    new_status: string;
}): Promise<UpdateInvitationStatusResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new UpdateInvitationStatusRequest();
        request.setToken(token);
        request.setInvitationId(invitation_id);
        request.setNewStatus(new_status);

        tournamentClient.updateInvitationStatus(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const resendInvitation = async ({
    token,
    invitation_id,
}: {
    token: string;
    invitation_id: number;
}): Promise<ResendInvitationResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new ResendInvitationRequest();
        request.setToken(token);
        request.setInvitationId(invitation_id);

        tournamentClient.resendInvitation(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const bulkUpdateInvitation = async ({
    token,
    invitation_ids,
    new_status,
}: {
    token: string;
    invitation_ids: number[];
    new_status: string;
}): Promise<BulkUpdateInvitationStatusResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new BulkUpdateInvitationStatusRequest();
        request.setToken(token);
        request.setInvitationIdsList(invitation_ids);
        request.setNewStatus(new_status);

        tournamentClient.bulkUpdateInvitationStatus(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const bulkResendInvitations = async ({
    token,
    invitation_ids,
}: {
    token: string;
    invitation_ids: number[];
}): Promise<BulkResendInvitationsResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new BulkResendInvitationsRequest();
        request.setToken(token);
        request.setInvitationIdsList(invitation_ids);

        tournamentClient.bulkResendInvitations(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}

export const getTournamentStats = async ({
    token,
}: {
    token: string;
}): Promise<GetTournamentStatsResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetTournamentStatsRequest();
        request.setToken(token);

        tournamentClient.getTournamentStats(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
}