'use client';

import { useState } from 'react';
import NavLists from '@/app/components/moleculs/navLists';
import ProjectLists from '@/app/components/moleculs/projectLists';
import { ChevronLeft, Club, ChevronDown, Moon, ChevronRight, Plus, Folder, Sun } from "lucide-react";

export default function MainSidebar({ isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCollapseToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleClubClick = () => {
        if (isCollapsed) {
            setIsCollapsed(false);
        }
    };

    const handleMobileOverlayClick = () => {
        setIsMobileOpen(false);
    };

    return (
        <>
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={handleMobileOverlayClick}
                />
            )}

            <aside className={`${isCollapsed ? 'w-17.5' : 'w-64'} h-screen bg-white border-r border-gray-200 flex flex-col fixed z-50 md:relative md:z-auto ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-all duration-300 ease-in-out`}>
                <div className="px-4 h-16 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
                    {!isCollapsed && (
                        <h1 className="text-xl font-bold">Neuro Code</h1>
                    )}
                    <div className="flex items-center gap-2">
                        {!isCollapsed && (
                            <div className="cursor-pointer border border-gray-200 hover:bg-gray-100 flex items-center justify-center w-8 h-8 rounded-md transition-colors">
                                <Moon className="w-4 h-4 text-gray-800" />
                            </div>
                        )}

                        <div
                            className="cursor-pointer border border-gray-200 hover:bg-gray-100 flex items-center justify-center w-8 h-8 rounded-md transition-colors"
                            onClick={handleCollapseToggle}
                        >
                            {isCollapsed ? (
                                <ChevronRight className="w-5 h-5 text-gray-800" />
                            ) : (
                                <ChevronLeft className="w-5 h-5 text-gray-800" />
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <div className="px-3 mt-5">
                        <div
                            onClick={isCollapsed ? handleClubClick : toggleDropdown}
                            className="p-2 border border-gray-200 flex justify-between items-center rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex gap-2 items-center">
                                <div className="p-1.5 bg-gradient-to-b from-purple-500 to-blue-500 rounded-lg flex-shrink-0">
                                    <Club className="w-4 h-4 text-white" fill="#fff" />
                                </div>
                                {!isCollapsed && (
                                    <span className="font-semibold">Neuro Workspace</span>
                                )}
                            </div>
                            {!isCollapsed && (
                                <div className={`transition-transform duration-200 ease-in-out ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
                                    <ChevronDown className="w-4 h-4 text-gray-700" />
                                </div>
                            )}
                        </div>

                        {!isCollapsed && (
                            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                {/* Project Lists */}
                                <ProjectLists />
                            </div>
                        )}

                        {/* Navigation Links */}
                        <NavLists isCollapsed={isCollapsed} />

                        <hr className="my-5 border-gray-200" />

                        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                            {!isCollapsed && (
                                <span className="text-xs font-medium text-gray-500">FOLDERS</span>
                            )}
                            <Plus className="text-gray-500 hover:text-gray-700 w-4 h-4 cursor-pointer" />
                        </div>

                        <div className="mt-5 space-y-3">
                            <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                                <Folder className="w-5 h-5 text-gray-700" />
                                {!isCollapsed && <span className="text-sm font-medium">Forlder Name 1</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}