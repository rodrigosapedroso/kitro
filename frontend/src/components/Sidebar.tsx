import type { ReactNode } from "react"

interface SidebarInset{
    label: string;
    page: () => void;
    icon: ReactNode;
}

interface SidebarProps {
    logo: ReactNode;
    items: SidebarInset[];
}

export default function Sidebar({ logo, items }: SidebarProps) {
    return (
        <aside className="w-56 bg-kitro-backgroundAlt border-r border-kitro-border p-4 flex flex-col gap-4 items-center">
            <div className="mt-12 flex justify-center w-full">
                {logo}
            </div>
            <nav className="flex flex-col gap-2 mt-5">
                {items.map((item, index) => (
                    <button 
                        key={index}
                        onClick={item.page} 
                        className="flex items-center gap-2 py-2 px-4 rounded-md border border-kitro-border bg-kitro-backgroundAlt hover:bg-kitro-gray transition-colors">
                            {item.icon}
                            <span className="text-base text-kitro-textPrimary">{item.label}</span>   
                    </button>
                ))}
            </nav>
        </aside>
    )
}