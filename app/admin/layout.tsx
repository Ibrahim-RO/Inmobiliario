import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import { verifySession } from "@/src/auth/dal";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const { user } = await verifySession()

    return (
        <Sidebar>
            <main className="flex-1 flex flex-col h-screen">
                <Header />
                <div className="p-6 bg-gray-100 flex-1 overflow-y-auto custom-scrollbar">
                    {children}
                </div>
            </main>
        </Sidebar>
    );
}
