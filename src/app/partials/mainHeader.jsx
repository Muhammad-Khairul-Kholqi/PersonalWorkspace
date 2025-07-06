'use client';

import { useState, useEffect } from 'react';
import { Menu, Plus, ChevronDown } from "lucide-react";

export default function MainHeader({ setIsMobileOpen, isMobileOpen }) {
    const [currentDay, setCurrentDay] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const dayName = days[now.getDay()];
            setCurrentDay(dayName);
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    const handleMobileToggle = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <header className="bg-white border-b border-gray-200 w-full px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button
                    onClick={handleMobileToggle}
                    className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <Menu className="w-5 h-5 text-gray-700" />
                </button>

                <div>
                    <h2 className="text-md font-semibold text-gray-800">Happy {currentDay}!</h2>
                </div>
            </div>

            <div className="relative flex items-center gap-3">
                <div className="hidden md:flex items-center gap-3">
                    <div className="px-4 py-2 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50 transition-colors text-sm">
                        <span>Templates</span>
                    </div>
                    <div className="px-4 py-2 bg-black hover:bg-black/90 transition-colors rounded-md cursor-pointer text-white flex items-center justify-center gap-2 text-sm">
                        <Plus className="w-4 h-4" />
                        <span>Blank Doc</span>
                    </div>
                </div>

                <div className="md:hidden relative">
                    <button
                        onClick={toggleDropdown}
                        className="px-4 py-2 w-40 border border-gray-200 transition-colors rounded-md cursor-pointer flex items-center justify-between gap-2"
                    >
                        <span>Create</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}/>
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                            <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                                Templates
                            </div>
                            <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                                Blank Doc
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
