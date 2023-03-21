import { z } from "zod"

export const loginInputsSchema = z.object({
  email: z.string().email().min(1, { message: "Ce champ est obligatoire" }),
  password: z.string().min(1, { message: "Ce champ est obligatoire" })
})

export type LoginInputs = z.infer<typeof loginInputsSchema>