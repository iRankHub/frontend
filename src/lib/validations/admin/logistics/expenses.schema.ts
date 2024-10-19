import { z } from "zod";

export const expensesSchema = z.object({
    food: z.string().min(1, {
        message: "Food is required",
    }),
    transport: z.string().min(1, {
        message: "transport is required",
    }),
    per_diem: z.string().min(1, {
        message: "per diem is required",
    }),
    awarding_and_stationary: z.string().min(1, {
        message: "Awarding and stationary is required",
    }),
    totalExpenses: z.string().min(1, {
        message: "Total expenses is required",
    }),
});