// app/api/login/route.ts
import { cookies } from "next/headers";

export async function POST(req: Request) {
    try {
        const { username, password } = await req.json();

        console.log(`${process.env.WP_API}/jwt-auth/v1/token`)
        const wpRes = await fetch(`${process.env.WP_API}/jwt-auth/v1/token`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        console.log(wpRes)

        const data = await wpRes.json();

        if (!wpRes.ok) {
            return Response.json({ error: "Credenciales inválidas" }, { status: 401 });
        }

        (await cookies()).set("INMOBILIARIO_TOKEN", data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24,
        });

        return Response.json(
            { success: true, user: data.user_display_name },
            { status: 200 }
        );
    } catch (error) {
        console.error("API LOGIN ERROR =>", error);
        return Response.json({ error: "Error interno" }, { status: 500 });
    }
}
