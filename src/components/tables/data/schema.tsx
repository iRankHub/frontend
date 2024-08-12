import { z } from "zod"

export const taskSchema = z.object({
  id: z.string(),
  names: z.string(),
  status: z.string(),
  category: z.string(),
  action: z.string(),
})

export const judgesSchema = z.object({
  id: z.string(),
  names: z.string(),
  preliminary: z.string(),
  elimination: z.string(),
})

export const invitationSchema = z.object({
  id: z.string(),
  names: z.string(),
  status: z.string(),
  category: z.string(),
  action: z.string(),
})

export const roomsSchema = z.object({
  names: z.string(),
  preliminary: z.string(),
  elimination: z.string(),
  action: z.string(),
})

export const teamsSchema = z.object({
  id: z.string(),
  school: z.string(),
  no_of_teams: z.string(),
  no_of_speakers: z.string(),
})

export const ballotEliminationSchema = z.object({
  room: z.string(),
  head_judge: z.string(),
  status: z.string(),
})

export const ballotPreliminariesSchema = z.object({
  room: z.string(),
  head_judge: z.string(),
  status: z.string(),
})

export const pairingsPreliminariesSchema = z.object({
  proposition: z.string(),
  oposition: z.string(),
  room: z.string(),
})

export const rankingsSchema = z.object({
  place: z.string(),
  names: z.string(),
  schools: z.string(),
  points: z.string(),
  wins: z.string(),
  rank: z.string(),
})

export type Task = z.infer<typeof taskSchema>
export type Judges = z.infer<typeof judgesSchema>
export type Invitation = z.infer<typeof invitationSchema>
export type Rooms = z.infer<typeof roomsSchema>
export type Teams = z.infer<typeof teamsSchema>
export type BallotElimination = z.infer<typeof ballotEliminationSchema>
export type BallotPreliminaries = z.infer<typeof ballotPreliminariesSchema>
export type PairingsPreliminaries = z.infer<typeof pairingsPreliminariesSchema>
export type Rankings = z.infer<typeof rankingsSchema>
