import { z } from "zod";

const speakerSchema = z.object({
    speaker_id: z.number(),
    name: z.string().min(1, "Speaker name is required"),
    points: z.number().min(0).max(100, "Points must be between 0 and 100"),
    rank: z.number().int().min(1).max(3, "Rank must be 1, 2, or 3"),
    feedback: z.string().optional(),
});

const teamSchema = z.object({
    team_id: z.number(),
    name: z.string().min(1, "Team name is required"),
    speakers: z.array(speakerSchema).min(1, "At least one speaker is required"),
    total_points: z.number().optional(),
    feedback: z.string().optional(),
});

export const ballotSchema = z.object({
    ballot_id: z.number(),
    team1: teamSchema,
    team2: teamSchema,
    verdict: z.enum(["Team A", "Team B"]),
    finalFeedback: z.string().optional(),
});

export type BallotFormData = z.infer<typeof ballotSchema>;