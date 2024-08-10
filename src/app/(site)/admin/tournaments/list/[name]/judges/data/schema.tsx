import { z } from "zod"

export const taskSchema = z.object({
  id: z.string(),
  names: z.string(),
  preliminary: z.string(),
  elimination: z.string(),
})

export type Task = z.infer<typeof taskSchema>