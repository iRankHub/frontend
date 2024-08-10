import { z } from "zod"

export const taskSchema = z.object({
  id: z.string(),
  names: z.string(),
  emails: z.string().email(),
  status: z.string(),
  category: z.string(),
})

export type Task = z.infer<typeof taskSchema>