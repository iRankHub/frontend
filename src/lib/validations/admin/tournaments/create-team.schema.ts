import { z } from "zod";

export const createTeamSchema = z.object({
    name: z.string().min(3, {
        message: "Team name should be at least 3 characters long",
    }).max(255, {
        message: "Team name must not be longer than 255 characters"
    }),
    speaker_1: z.string(),
    speaker_2: z.string(),
    speaker_3: z.string(),
});