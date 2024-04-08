"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

interface SidebarProps  {
 children: React.ReactNode;
};

const Sidebar: React.FC<SidebarProps> = ({
        children
}) => {

    const pathname = usePathname();

    const routes = useMemo(() =>[
        {
            label: "Home",
            active: pathname !== '/search',
            href: "/",
            icon: HiHome,
        },
        {
            label: "Search",
            active: pathname !== '/search',
            href: "/search",
            icon: BiSearch,
        },
    ], [pathname]);

    return (
        <div className="flex h-full">
            <div className="
            hidden
            md:flex
            
            
            "
            >
           
        </div>
        </div>
    );
}

export default Sidebar;