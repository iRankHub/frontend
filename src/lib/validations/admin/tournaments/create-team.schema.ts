import { z } from "zod";

export const createTeamSchema = z.object({
    name: z.string(),
    speaker_1: z.string(),
    speaker_2: z.string(),
    speaker_3: z.string(),
});