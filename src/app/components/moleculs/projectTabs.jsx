'use client'

import { useState } from 'react';
import { Folder, ListTodo, Table, Workflow } from 'lucide-react';
import { BlankContent, MindmapContent, TodoContent, TableContent } from '@/app/components/moleculs/tabContents';

export default function ProjectTabs() {
    const [activeTab, setActiveTab] = useState('blank');

    const tabData = {
        blank: {
          title: "Blank Document",
          icon: <Folder className="w-4 h-4 md:w-5 md:h-5" />,
          content: <BlankContent />
        },
        mindmap: {
          title: "Mind Map",
          icon: <Workflow className="w-4 h-4 md:w-5 md:h-5" />,
          content: <MindmapContent />
        },
        todo: {
          title: "To Do List",
          icon: <ListTodo className="w-4 h-4 md:w-5 md:h-5" />,
          content: <TodoContent />
        },
        table: {
          title: "Table",
          icon: <Table className="w-4 h-4 md:w-5 md:h-5" />,
          content: <TableContent />
        }
    };
    return (
        <div>
            <div className="mt-4 border-b border-gray-200 overflow-x-auto scrollbar-hide">
                <div className="flex min-w-max md:min-w-0">
                {Object.entries(tabData).map(([key, tab]) => (
                    <button
                        key={key}
                        className={`py-3 px-2 md:py-4 md:px-4 flex-1 min-w-[120px] flex items-center justify-center gap-2 transition-all cursor-pointer
                            ${activeTab === key 
                            ? 'text-black border-b-2 border-black' 
                            : 'text-gray-700 hover:text-gray-700 hover:bg-gray-50'
                            }`}
                        onClick={() => setActiveTab(key)}
                    >
                        {tab.icon}
                        <span className="text-xs sm:text-sm whitespace-nowrap">{tab.title}</span>
                    </button>
                ))}
                </div>
            </div>

            <div className="mt-4">
                {tabData[activeTab].content}
            </div>
        </div>
    )
}