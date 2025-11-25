"use client";

import { useState } from "react";
import {
    MapIcon,
    BuildingOfficeIcon,
    HomeModernIcon,
    KeyIcon,
    ClockIcon,
    MapPinIcon,
    GlobeAltIcon,
    CubeIcon,
    SparklesIcon,
    Bars3Icon,
} from "@heroicons/react/24/solid";

const menu = [
    { name: "Lotes Fracc La Vid Residencial", icon: MapIcon },
    { name: "Departamentos y Pent House", icon: BuildingOfficeIcon },
    { name: "Casas Entrega Inmediata", icon: HomeModernIcon },
    { name: "Rentas Avila Inmuebles", icon: KeyIcon },
    { name: "Pre-Ventas", icon: ClockIcon },
    { name: "Terrenos en Puebla", icon: MapPinIcon },
    { name: "Lotes Lomas Angelópolis", icon: GlobeAltIcon },
    { name: "Casas Prefabricadas", icon: CubeIcon },
    { name: "Lotes Otho Yucatán", icon: MapIcon },
    { name: "Lotes Boutique Zerezotla", icon: SparklesIcon },
];

export default function Sidebar({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(true);

    return (
        <div className="flex h-screen overflow-hidden">

            <aside className={`h-full bg-white shadow-xl border-r transition-all duration-300 ${open ? "w-64" : "w-20"} fixed md:static z-50`}>
                <div className="flex items-center justify-between p-4 border-b">
                    {open && <h1 className="text-xl font-bold text-gray-800">Inmuebles</h1>}

                    <button
                        onClick={() => setOpen(!open)}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                        <Bars3Icon className="h-6 w-6 text-gray-700" />
                    </button>
                </div>

                <nav className="mt-4 space-y-1">
                    {menu.map((item) => (
                        <div
                            key={item.name}
                            className="relative group flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 cursor-pointer transition rounded-lg mx-2"
                        >
                            <item.icon className="size-6 text-yellow-900 shrink-0" />

                            {open && (
                                <span className="text-sm font-medium">{item.name}</span>
                            )}

                            {!open && (
                                <span
                                    className=" absolute left-full ml-3 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg  opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none z-50"
                                >
                                    {item.name}
                                </span>
                            )}
                        </div>
                    ))}
                </nav>
            </aside>

            <main className={`flex-1 transition-all duration-300 p-5 bg-gray-50 ml-20 md:ml-0`}>
                {children}
            </main>
        </div>
    );
}
