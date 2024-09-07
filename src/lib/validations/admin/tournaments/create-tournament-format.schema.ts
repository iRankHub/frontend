import { z } from "zod";

export const createTournamentFormatSchema = z.object({
    description: z.string().min(3, { message: "description must be atleast 3 characters" }),
    format_name: z.string().min(3, { message: "format name must be atleast 3 characters" }),
    speakers_per_team: z
    .string()
    .min(1, { message: "Speakers per team must be at least 1" })
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val), { message: "Invalid number" })
});

export const updateTournamentFormatSchema = z.object({
    description: z.string().min(3, { message: "description must be atleast 3 characters" }),
    format_name: z.string().min(3, { message: "format name must be atleast 3 characters" }),
    speakers_per_team: z
    .string()
    .min(1, { message: "Speakers per team must be at least 1" })
});