import { z } from "zod";

// Validation Schema
export const formSchema = z.object({
  actual_teams_count: z
    .number()
    .min(0, "Actual teams cannot be negative")
    .max(10, "Actual teams cannot exceed planned teams"),
  amount_to_be_paid: z.number().min(0, "Amount cannot be negative"),
  amount_to_be_paid_currency: z.enum(["USD", "RWF"]),
  amount_received: z
    .number({
      required_error: "Amount received is required",
      invalid_type_error: "Amount received must be a number",
    })
    .min(0.01, "Amount received cannot be zero")
    .refine((val) => val > 0, {
      message: "Amount received must be greater than 0",
    }),
  amount_received_currency: z.enum(["USD", "RWF"]),
  discount_percentage: z
    .number()
    .min(0, "Discount cannot be negative")
    .max(100, "Discount cannot exceed 100%")
    .optional(),
  supervisor_name: z
    .string()
    .min(2, "Supervisor name must be at least 2 characters")
    .max(100, "Supervisor name must not exceed 100 characters"),
  supervisor_email: z
    .string()
    .email()
});