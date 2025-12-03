import { cache } from "react"
import "server-only"
import getToken from "./token"
import { redirect } from "next/navigation"
import { userSessionSchema } from "../schemas/auth"

export const verifySession = cache(async () => {
    const token = await getToken()
    if(!token) {
        redirect("/")
    }

    const url = `${process.env.WP_API}/wp/v2/users/me`
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }) 

    const session = await res.json()
    const result = userSessionSchema.safeParse(session)

    if (!result.success) redirect('/')

    return {
        user: result.data,
        isAuth: true
    }

})