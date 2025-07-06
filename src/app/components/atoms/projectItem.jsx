'use client';

import { Folder, ListTodo, Table, Workflow } from 'lucide-react';

const iconMap = {
    Folder,
    ListTodo,
    Table,
    Workflow
};

export default function ProjectItem({ icon, label }) {
    const IconComponent = iconMap[icon];

    return (
        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
            <IconComponent className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-medium text-gray-700">{label}</span>
        </div>
    );
}