"use client"

import { useForm } from "react-hook-form"
import ErrorMessage from "../ui/ErrorMessage"
import { User } from "@/src/schemas/auth"

export default function Login() {

    const initialValues = {
        username: "",
        password: ""
    }

    const { register, handleSubmit, formState: { errors } } = useForm<User>({defaultValues: initialValues})

    const handleLogin = (formData: User) => {
        console.log(formData)
    }

    return (
        <form 
            onSubmit={handleSubmit(handleLogin)}
            className="space-y-5"
        >
            <div>
                <label className="block text-gray-700 mb-1 text-sm font-medium">
                    Usuario
                </label>
                <input
                    type="text"
                    placeholder="Ingresa tu usuario"
                    className={`w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none ${errors.username && 'border-red-600'}`}
                    {...register("username", {
                        required: "El usuario es obligatorio"
                    })}
                />
                {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
            </div>

            <div>
                <label className="block text-gray-700 mb-1 text-sm font-medium">
                    Contraseña
                </label>
                <input
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    className={`w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none ${errors.username && 'border-red-600'}`}
                    {...register("password", {
                        required: "La contraseña es obligatoria"
                    })}
                />
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            </div>

            <button
                type="submit"
                className="w-full bg-yellow-900 hover:bg-yellow-950 text-white py-2 rounded-lg transition-colors cursor-pointer"
            >
                Entrar
            </button>
        </form>
    )
}
