import * as z from "zod"

export const createTournamentSchema = z.object({
    startDate: z.date(),
    startTime: z.date(),
    endDate: z.date(),
    endTime: z.date(),
    location: z.string().min(3, { message: "location must be atleast 3 characters" }),
    coordinator: z.string().min(1, { message: "a coordinator is required" }),
    fees_currency: z.string(),
    fees: z.string(),
    format: z.string().min(1, { message: "format is required" }),
    preliminaries_start_from: z.string(),
    preliminaries_end_at: z.string(),
    no_of_judges: z.string(),
    no_of_elimination_judges: z.string(),
})
