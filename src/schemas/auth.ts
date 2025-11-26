import { z } from "zod" 

const userSchema = z.object({
    username: z.string().min(1, "El usuario es obligatorio"),
    password: z.string().min(1, "La contraseña es obligatoria")
})

export type User = z.infer<typeof userSchema>