import { z } from "zod" 

export const SuccessSchema = z.string().min(1, { message: 'Valor no válido' })

export const ErrorResponseSchema = z.object({
  error: z.string().optional(),
  message: z.string().optional()
});


export const userSchema = z.object({
    username: z.string().min(1, "El usuario es obligatorio"),
    password: z.string().min(1, "La contraseña es obligatoria")
})

export type User = z.infer<typeof userSchema>

export const userSessionSchema = z.object({
    id: z.number(),
    name: z.string(),
    role: z.string()
})