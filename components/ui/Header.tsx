"use client";

import Image from "next/image";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

export default function Header() {
    return (
        <header className="w-full bg-gray-50 px-8 py-3 flex items-center justify-between sticky top-0 z-10 shadow">

            <div className="flex items-center gap-2 text-gray-700">
                <span className="font-medium">Home</span>
                <span className="font-medium text-gray-900">Sales</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
                <Popover className="relative">
                    <PopoverButton className="outline-none">
                        <div className="bg-black/8 px-4 py-1.5 rounded-lg flex justify-center items-center gap-2 cursor-pointer transition hover:bg-black/15">
                            <div className="relative">
                                <Image
                                    src="/user.svg"
                                    alt="profile"   
                                    width={32}
                                    height={32}
                                    className="rounded-full"
                                />
                                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>
                            </div>

                            <div className="text-left">
                                <span className="text-sm font-medium text-gray-800">Implementador</span>
                                <p className="text-xs text-gray-500">En línea</p>
                            </div>
                        </div>
                    </PopoverButton>

                    <PopoverPanel
                        anchor="bottom"
                        className="flex flex-col bg-white p-2 w-44 mt-2 rounded-xl shadow-lg border border-gray-100 animate-fadeIn z-20"
                    >
                        <button className="text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition text-sm">
                            Cambiar contraseña
                        </button>
                        <button className="text-left px-3 py-2 rounded-lg hover:bg-red-100 text-red-600 transition text-sm">
                            Cerrar sesión
                        </button>
                    </PopoverPanel>
                </Popover>

            </div>
        </header>
    );
}
