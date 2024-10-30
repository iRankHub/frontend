import { z } from "zod";

export const expensesSchema = z.object({
    awarding_expense: z.number().min(0, {
        message: "Awarding expense must be a positive number",
    }),
    food_expense: z.number().min(0, {
        message: "Food expense must be a positive number",
    }),
    notes: z.string().optional(),
    other_expenses: z.number().min(0, {
        message: "Other expenses must be a positive number",
    }),
    per_diem_expense: z.number().min(0, {
        message: "Per diem expense must be a positive number",
    }),
    stationary_expense: z.number().min(0, {
        message: "Stationary expense must be a positive number",
    }),
    transport_expense: z.number().min(0, {
        message: "Transport expense must be a positive number",
    }),
    currency: z.enum(["RWF", "USD"], {
        required_error: "Please select a currency",
        invalid_type_error: "Please select a valid currency",
    }),
});