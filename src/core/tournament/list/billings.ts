import { tournamentClient } from "@/core/grpc-clients";
import { CreateRegistrationRequest, DetailedRegistrationResponse, GetRegistrationRequest, RegistrationResponse } from "@/lib/grpc/proto/tournament_management/tournament_pb";

export const createSchoolRegistration = async ({
    planned_teams_count,
    school_id,
    token,
    tournament_id,
}: {
    planned_teams_count: number;
    school_id: number;
    token: string;
    tournament_id: number;
}): Promise<RegistrationResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new CreateRegistrationRequest();
        request.setPlannedTeamsCount(planned_teams_count);
        request.setSchoolId(school_id);
        request.setToken(token);
        request.setTournamentId(tournament_id);

        tournamentClient.createSchoolRegistration(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        })
    })
}

export const getSchoolRegistration = async ({
    school_id,
    token,
    tournament_id,
}: {
    school_id: number;
    token: string;
    tournament_id: number;
}): Promise<DetailedRegistrationResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetRegistrationRequest();
        request.setSchoolId(school_id);
        request.setToken(token);
        request.setTournamentId(tournament_id);

        tournamentClient.getSchoolRegistration(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject());
            }
        })
    })
}