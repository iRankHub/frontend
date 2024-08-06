import { z } from "zod"

export const taskSchema = z.object({
  place: z.string(),
  names: z.string(),
  schools: z.string(),
  points: z.string(),
  wins: z.string(),
  rank: z.string(),
})

export type Task = z.infer<typeof taskSchema>