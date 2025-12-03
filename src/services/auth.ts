// services/auth.ts
export async function loginService(data: { username: string; password: string }) {
    const res = await fetch("/api/wp/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const json = await res.json();

    if (!res.ok) {
        throw new Error(json.error || "Error en login");
    }

    return json; // { user }
}
