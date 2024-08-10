import { z } from "zod"

export const taskSchema = z.object({
  id: z.string(),
  school: z.string(),
  no_of_teams: z.string(),
  no_of_speakers: z.string(),
})

export type Task = z.infer<typeof taskSchema>