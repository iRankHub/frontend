import { tournamentClient } from "@/core/grpc-clients";
import { ListRegistrationsRequest, ListRegistrationsResponse, RegistrationResponse, UpdateRegistrationRequest } from "@/lib/grpc/proto/tournament_management/tournament_pb";

export interface TournamentBillingsProps {
    page_size: number;
    page_token: number;
    token: string;
    tournament_id: number;
}

export const getTournamentBillings = async ({
    token,
    tournament_id,
    page_size,
    page_token,
}: TournamentBillingsProps): Promise<ListRegistrationsResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new ListRegistrationsRequest()
        request.setToken(token);
        request.setTournamentId(tournament_id);
        request.setPageSize(page_size);
        request.setPageToken(page_token);

        tournamentClient.listTournamentRegistrations(request, {}, (err, response) => {
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export interface UpdateTournamentRegistrationProps {
    actual_paid_amount: number,
    actual_teams_count: number,
    discount_amount: number,
    payment_status: string,
    school_id: number,
    token: string,
    tournament_id: number
}

export const updateTournamentRegistration = async ({
    token,
    tournament_id,
    actual_paid_amount,
    actual_teams_count,
    discount_amount,
    payment_status,
    school_id
}: UpdateTournamentRegistrationProps): Promise<RegistrationResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new UpdateRegistrationRequest()
        request.setToken(token);
        request.setTournamentId(tournament_id);
        request.setActualPaidAmount(actual_paid_amount);
        request.setActualTeamsCount(actual_teams_count);
        request.setDiscountAmount(discount_amount);
        request.setPaymentStatus(payment_status);
        request.setSchoolId(school_id);

        tournamentClient.updateSchoolRegistration(request, {}, (err, response) => {
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}