import { z } from "zod"

export const taskSchema = z.object({
  id: z.string(),
  names: z.string(),
  status: z.string(),
  category: z.string(),
  action: z.string(),
})

export type Task = z.infer<typeof taskSchema>