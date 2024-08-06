import { z } from "zod"

export const taskSchema = z.object({
  room: z.string(),
  head_judge: z.string(),
  status: z.string(),
})

export type Task = z.infer<typeof taskSchema>