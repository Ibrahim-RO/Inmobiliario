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
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
    { name: "Lotes Fracc La Vid Residencial", icon: MapIcon, url: "/lotes-vid" },
    { name: "Departamentos y Pent House", icon: BuildingOfficeIcon, url: "/depts&pent-house" },
    { name: "Casas Entrega Inmediata", icon: HomeModernIcon, url: "/casas" },
    { name: "Rentas Avila Inmuebles", icon: KeyIcon, url: "/rentas" },
    { name: "Pre-Ventas", icon: ClockIcon, url: "/pre-ventas" },
    { name: "Terrenos en Puebla", icon: MapPinIcon, url: "/terrenos" },
    { name: "Lotes Lomas Angelópolis", icon: GlobeAltIcon, url: "/lotes-lomas" },
    { name: "Casas Prefabricadas", icon: CubeIcon, url: "/casas-prefabricadas" },
    { name: "Lotes Otho Yucatán", icon: MapIcon, url: "/lotes-otho" },
    { name: "Lotes Boutique Zerezotla", icon: SparklesIcon, url: "/lotes-zerezotla" },
];

export default function Sidebar({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const base = "/admin"
    const [open, setOpen] = useState(true);

    return (
        <div className="flex h-screen overflow-hidden">

            <aside className={`h-full bg-white shadow border-r border-gray-200 transition-all duration-300 ${open ? "w-64" : "w-20"} fixed md:static z-50`}>
                <div className="flex items-center justify-between p-5">
                    {open && <h1 className="text-xl font-bold text-gray-800">Inmuebles</h1>}

                    <button
                        onClick={() => setOpen(!open)}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                        <Bars3Icon className="size-6 text-gray-700" />
                    </button>
                </div>

                <nav className="mt-4 space-y-1">
                    {menu.map((item) => {
                        const href = base + item.url

                        return (
                            <Link
                                href={href}
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
                            </Link>
                        )
                    })}
                </nav>
            </aside>

            <main className={`flex-1 transition-all duration-300 bg-gray-50 ml-20 md:ml-0`}>
                {children}
            </main>
        </div>
    );
}
