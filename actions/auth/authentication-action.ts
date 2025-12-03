"use server"

import { userSchema } from "@/src/schemas/auth"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

type ActionStateType = {
    fieldErrors?: {
        username?: string
        password?: string
    }
    generalError?: string
}

export const authenticationAction = async (prevState: any, formData: FormData): Promise<ActionStateType> => {

    const loginCredentials = {
        username: formData.get("username"),
        password: formData.get("password")
    }

    const result = userSchema.safeParse(loginCredentials)

    if (!result.success) {
        const fieldErrors: any = {}

        result.error.issues.forEach(issue => {
            const field = issue.path[0]
            fieldErrors[field] = issue.message
        })

        return { fieldErrors }
    }

    const url = `${process.env.API_URL}/jwt-auth/v1/token`
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data)
    })

    const json = await res.json()

    if (!res.ok) { 
        return {
            generalError: "Credenciales inválidas"
        }
    }

    (await cookies()).set({
        name: "INMOBILIARIO_TOKEN",
        value: json.token,
        httpOnly: true,
        secure: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7
    })

    redirect("/admin")
}
