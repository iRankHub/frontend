import { z } from "zod";

export const createTournamentLeagueSchema = z.object({
    name: z.string().min(3, { message: "format name must be atleast 3 characters" }),
    league_type: z.string().min(3, { message: "league type must be atleast 3 characters" }),
});