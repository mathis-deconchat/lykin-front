import { FieldErrors, UseFormRegister } from "react-hook-form";
import { z } from "zod";

// export interface MultiStepFormRegisterInputs {
//   // lastName?: string;
//   // firstName?: string;
//   // username?: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   terms: boolean;
// }

export const multiStepFormRegisterInputsSchema = z
  .object({
    // lastName: z.string(),
    // firstName: z.string(),
    // username: z.string(),
    email: z
      .string()
      .min(1, { message: "Ce champ est nécessaire" })
      .email("Ce n'est pas un email valide"),
    password: z
      .string()
      .min(8, { message: "Password must be atleast 6 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),

  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Les mots de passe ne correspondent pas",
  });

export type MultiStepFormRegisterInputsSchema = z.infer<
  typeof multiStepFormRegisterInputsSchema
>;
