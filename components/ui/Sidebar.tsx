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

export default function Sidebar({ children } : { children: React.ReactNode }) {
    const base = "/admin";
    const [open, setOpen] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);

    const pathname = usePathname()
    const url = pathname.split("/")[2]

    return (
        <div className="flex h-screen overflow-hidden">

            <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white shadow rounded-lg"
            >
                <Bars3Icon className="size-6 text-gray-700" />
            </button>

            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setMobileOpen(false)}
                ></div>
            )}

            <aside
                className={`
                    bg-white shadow border-r border-gray-200 fixed lg:static
                    h-full z-50 transition-all duration-300
                    ${open ? "w-64" : "w-20"}
                    ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                `}
            >
                <div className="flex items-center justify-between p-5">
                    {open && <h1 className="text-xl font-bold text-gray-800">Inmuebles</h1>}

                    <button
                        onClick={() => setOpen(!open)}
                        className="hidden lg:block p-2 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer"
                    >
                        <Bars3Icon className="size-6 text-gray-700" />
                    </button>

                    <button
                        onClick={() => setMobileOpen(false)}
                        className="lg:hidden p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                        ✕
                    </button>
                </div>

                <nav className="mt-4 space-y-1">
                    {menu.map((item) => {
                        const href = base + item.url;

                        return (
                            <Link
                                href={href}
                                key={item.name}
                                onClick={() => setMobileOpen(false)}
                                className={`relative group flex items-center ${!open && "justify-center"} gap-3 p-3 text-gray-700 cursor-pointer transition rounded-lg mx-2
                                ${item.url === "/" + url ? "bg-yellow-950" : "hover:bg-gray-100"}    
                                `}
                            >
                                <item.icon className={`size-6 shrink-0 ${item.url === "/" + url ? "text-white" : "text-yellow-900"} `} />

                                {open && (
                                    <span className={`text-sm font-medium ${item.url === "/" + url && "text-white"}`}>{item.name}</span>
                                )}

                                {!open && (
                                    <span
                                        className=" absolute left-full ml-3 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none z-50"
                                    >
                                        {item.name}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            <main className={`flex-1 transition-all duration-300 bg-gray-50`}>
                {children}
            </main>
        </div>
    );
}
