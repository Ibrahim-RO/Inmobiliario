export default function Loading() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-linear-to-b from-yellow-50 to-yellow-100">
            <div className="relative">
                <div className="animate-spin h-20 w-20 border-4 border-yellow-900 border-t-transparent rounded-full"></div>
            </div>
            <p className="mt-6 text-lg font-semibold text-yellow-900">
                Cargando inmuebles…
            </p>
        </div>
    );
}
