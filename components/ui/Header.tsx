"use client";

// import { Search, Bell, Home, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full bg-gray-50 px-6 py-3 flex items-center justify-between sticky top-0 z-40 border-b">

            <div className="flex items-center gap-2 text-gray-700">
                <span className="font-medium">Home</span>
                <span className="font-medium text-gray-900">Sales</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
                <div className="bg-white shadow-md px-4 py-2 rounded-full flex items-center gap-3 w-72">
                    <input
                        type="text"
                        placeholder="Search anything"
                        className="outline-none w-full bg-transparent text-gray-700"
                    />
                    {/* <Search size={20} className="text-gray-600" /> */}
                </div>

                <div className="bg-white shadow-md px-5 py-2 rounded-full flex items-center gap-2">
                    <span className="text-gray-600">You have</span>
                    <span className="text-green-600 font-semibold">21</span>
                    <span className="text-gray-600">new leads</span>
                    {/* <Bell size={20} className="text-yellow-500" /> */}
                </div>

                <Image src="/uk.png" alt="Language" width={32} height={32} className="rounded-full" />

                <div className="relative">
                    <Image
                        src="/avatar.png"
                        alt="profile"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>
                </div>
            </div>
        </header>
    );
}
