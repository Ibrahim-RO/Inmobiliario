"use client";

import Image from "next/image";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { logoutAction } from "@/actions/auth/logout-action";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname()
    const url = pathname.split("/")[2]

    const pathnameUrl = {
        "lotes-vid": "Lotes Fracc La Vid Residencial",
        "depts&pent-house": "Departamentos y Pent House",
        "casas": "Casas Entrega Inmediata",
        "rentas": "Rentas Avila Inmuebles",
        "pre-ventas": "Pre-Ventas",
        "terrenos": "Terrenos en Puebla",
        "lotes-lomas": "Lotes Lomas Angelópolis",
        "casas-prefabricadas": "Casas Prefabricadas",
        "lotes-otho": "Lotes Otho Yucatán",
        "lotes-zerezotla": "Lotes Boutique Zerezotla"
    };

    return (
        <header className="w-full bg-gray-50 px-8 py-3 flex items-center justify-end lg:justify-between sticky top-0 z-10 shadow">

            <div className="hidden lg:flex items-center gap-2 text-gray-700">
                <span className="font-medium">Inmobiliario - </span>
                <span className="font-medium text-gray-900">{pathnameUrl[url as keyof typeof pathnameUrl] || ""}</span>
            </div>

            <div className="flex items-center gap-6">
                <Popover>
                    <PopoverTrigger asChild>
                        <button
                            type="button"
                            className="bg-black/8 px-4 py-1.5 rounded-lg flex justify-center items-center gap-2 cursor-pointer transition hover:bg-black/15"
                        >
                            <div className="relative">
                                <Image
                                    src="/user.svg"
                                    alt="profile"
                                    width={32}
                                    height={32}
                                    className="rounded-full size-6 md:size-8"
                                />
                                <span className="absolute bottom-0 right-0 size-2.5 md:size-3 rounded-full bg-green-500 border md:border-2 border-white"></span>
                            </div>

                            <div className="text-left">
                                <span className="text-sm font-medium text-gray-800">Implementador</span>
                                <p className="text-xs text-gray-500">En línea</p>
                            </div>
                        </button>
                    </PopoverTrigger>

                    <PopoverContent className="flex flex-col bg-white p-2 w-44 mt-2 rounded-xl shadow-lg border border-gray-100 animate-fadeIn z-20">
                        <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition text-sm">
                            Cambiar contraseña
                        </button>

                        <button
                            type="button"
                            onClick={async () => await logoutAction()}
                            className="text-left px-3 py-2 rounded-lg hover:bg-red-100 text-red-600 transition text-sm"
                        >
                            Cerrar sesión
                        </button>
                    </PopoverContent>
                </Popover>
            </div>
        </header>
    );
}
