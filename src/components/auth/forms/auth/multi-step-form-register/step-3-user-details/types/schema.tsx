import * as z from "zod";

export const multiStepRegisterUserDetailsSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "Faut un prénom frére" }),
    lastName: z
      .string()
      .min(1, { message: "Et un nom de famille frère" }),
    pseudo: z
        .string()
        .min(1, { message: "Et un nom d'utilisateur frère" }),

  })


export type MultiStepRegisterUserDetailsSchema = z.infer<
  typeof multiStepRegisterUserDetailsSchema
>;
