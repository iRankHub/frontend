import { z } from "zod"

export const taskSchema = z.object({
  proposition: z.string(),
  oposition: z.string(),
  room: z.string(),
})

export type Task = z.infer<typeof taskSchema>