import Link from "next/link";

export default function NotFound() {
    return (
        <section className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-8">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <p className="text-xl text-gray-600 mt-4">Página no encontrada</p>

            <Link
                href="/admin"
                className="mt-6 px-6 py-3 bg-yellow-800 text-white rounded-lg hover:bg-yellow-900 transition"
            >
                Regresar al inicio
            </Link>
        </section>
    );
}
