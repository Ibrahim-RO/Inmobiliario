import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Sidebar>
            <main className="flex-1 flex flex-col">
                <Header />
                <div className="p-6 bg-gray-100 flex-1">{children}</div>
            </main>
        </Sidebar>
    );
}
