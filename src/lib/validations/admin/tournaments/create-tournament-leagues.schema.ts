import { z } from "zod";

export const createTournamentLeagueSchema = z.object({
    name: z.string().min(3, { message: "format name must be atleast 3 characters" }),
    league_type: z.string().min(3, { message: "league type must be atleast 3 characters" }),
    province: z.string().min(3, { message: "province must be atleast 3 characters" }),
    district: z.string().min(3, { message: "district must be atleast 3 characters" }),
});