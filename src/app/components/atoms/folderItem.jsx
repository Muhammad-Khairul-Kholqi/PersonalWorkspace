'use client';

import { FolderClosed, EllipsisVertical } from "lucide-react";
import Link from 'next/link';

export default function FolderItem({ title, date, href }) {
    return (
        <Link href={href} className="flex-shrink-0 bg-gray-50 border border-gray-200 hover:shadow-md duration-300 p-5 rounded-lg flex flex-col w-[250px] mb-2"> 
            <div className="flex items-start justify-between mb-3">
                <FolderClosed className="w-8 h-8 text-gray-500" />
                <EllipsisVertical className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors" />
            </div>
            <h1 className="text-gray-800 font-semibold text-lg">{title}</h1>
            <span className="text-gray-500 text-sm font-medium">{date}</span>
        </Link>
    );
}