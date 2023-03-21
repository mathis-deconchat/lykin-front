import * as z from "zod";

export const multiStepRegisterPageSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Ce champ est nécessaire" })
      .email("Ce n'est pas un email valide"),
    password: z
      .string()
      .min(8, { message: "Le mot de passe n'est pas assez complexe" })
      .refine(
        (value) => {
          const strongPassword = new RegExp(
            "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}))|(.{15})"
          );
          const mediumPassword = new RegExp(
            "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))|(.{12})"
          );
          if (strongPassword.test(value)) {
            return true;
          } else if (mediumPassword.test(value)) {
            return true;
          } else {
            return false;
          }
        },
        { message: "Trouvez un mot de passe plus complexe" }
      ),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
    terms: z.boolean().refine((value) => value === true, {
      message: "Vous devez accepter les conditions d'utilisation",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Les mots de passe ne correspondent pas",
  });

export type MultiStepRegisterPageSchema = z.infer<
  typeof multiStepRegisterPageSchema
>;
