import { tournamentClient } from "@/core/grpc-clients";
import { CreateExpensesRequest, ExpensesResponse, GetExpensesRequest, UpdateExpensesRequest } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { string } from "zod";

export interface CreateExpense {
    awarding_expense: number;
    food_expense: number;
    notes: string;
    other_expenses: number;
    per_diem_expense: number;
    stationary_expense: number;
    transport_expense: number;
    token: string;
    tournament_id: number;
}

export interface UpdateExpense extends CreateExpense {
    currency: string;
}

export const createTournamentExpenses = async ({
    awarding_expense,
    food_expense,
    notes,
    other_expenses,
    per_diem_expense,
    stationary_expense,
    token,
    tournament_id,
    transport_expense,
}: CreateExpense): Promise<ExpensesResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new CreateExpensesRequest();
        request.setAwardingExpense(awarding_expense);
        request.setFoodExpense(food_expense);
        request.setOtherExpenses(other_expenses);
        request.setNotes(notes);
        request.setPerDiemExpense(per_diem_expense);
        request.setStationaryExpense(stationary_expense);
        request.setToken(token);
        request.setTransportExpense(transport_expense);
        request.setTournamentId(tournament_id);

        tournamentClient.createTournamentExpenses(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export const updateExpenses = async ({
    awarding_expense,
    food_expense,
    notes,
    other_expenses,
    per_diem_expense,
    stationary_expense,
    token,
    tournament_id,
    transport_expense,
    currency,
}: UpdateExpense): Promise<ExpensesResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new UpdateExpensesRequest();
        request.setAwardingExpense(awarding_expense);
        request.setFoodExpense(food_expense);
        request.setOtherExpenses(other_expenses);
        request.setNotes(notes);
        request.setPerDiemExpense(per_diem_expense);
        request.setStationaryExpense(stationary_expense);
        request.setToken(token);
        request.setTransportExpense(transport_expense);
        request.setTournamentId(tournament_id);
        request.setCurrency(currency);

        tournamentClient.updateTournamentExpenses(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export const getTournamentExpenses = async ({
    token,
    tournament_id
}: {
    token: string;
    tournament_id: number;
}): Promise<ExpensesResponse.AsObject> => {
    return new Promise((resolve, reject) => {
        const request = new GetExpensesRequest()
        request.setToken(token);
        request.setTournamentId(tournament_id);

        tournamentClient.getTournamentExpenses(request, {}, (err, response) => {
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}