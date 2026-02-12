import type { ReactNode } from "react"

interface SidebarInset{
    label: string;
    page: string;
    navigate: () => void;
    icon: ReactNode;
}

interface SidebarProps {
    logo: ReactNode;
    items: SidebarInset[];
    activeItem: string | null;
}

export default function Sidebar({ logo, items, activeItem }: SidebarProps) {
    return (
        <aside className="w-56 bg-coffee-200 border-r border-cream-400 p-4 flex flex-col gap-4 items-center">
            <div className="mt-12 flex justify-center w-full">
                {logo}
            </div>
            <nav className="flex flex-col gap-2 mt-5">
                {items.map((item, index) => (
                    <button 
                        key={index}
                        onClick={item.navigate} 
                        className={`flex items-center gap-2 w-full px-4 py-2.5 text-black bg-coffee-200 rounded-xl border transition-all duration-200 text-sm font-medium
                            ${item.page === activeItem
                                ? "border-green-200"
                                : "border-cream-300 hover:bg-coffee-300"}`}>
                            {item.icon}
                            <span>{item.label}</span>   
                    </button>
                ))}
            </nav>
        </aside>
    )
}