import { z } from "zod"

export const taskSchema = z.object({
  names: z.string(),
  preliminary: z.string(),
  elimination: z.string(),
  action: z.string(),
})

export type Task = z.infer<typeof taskSchema>