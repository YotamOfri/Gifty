// In your SignInSchema file
import { z } from "zod";

// In your SignInSchema file

export const SignInSchema = z.object({
  email: z
    .string({ required_error: "validation.email.required" })
    .min(1, "validation.email.required")
    .email("validation.email.invalid"),
  password: z
    .string({ required_error: "validation.password.required" })
    .min(1, "validation.password.required")
    .min(6, "validation.password.min_length"),
});
export type SignInData = z.infer<typeof SignInSchema>;
