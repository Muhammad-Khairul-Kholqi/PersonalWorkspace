'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BriefcaseBusiness, Settings, Trash } from 'lucide-react';

const iconMap = {
    LayoutDashboard,
    BriefcaseBusiness,
    Settings,
    Trash
};

export default function NavItem({ href, icon, label, isCollapsed }) {
    const pathname = usePathname();
    const IconComponent = iconMap[icon] || LayoutDashboard;
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`
                flex items-center gap-3 px-3 py-2 rounded-lg
                text-gray-700 transition-colors
                ${isCollapsed ? 'justify-center' : ''}
                ${isActive ? 'bg-gray-50' : 'hover:bg-gray-50'}
            `}
        >
            <IconComponent className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span className="font-medium">{label}</span>}
        </Link>
    );
}
