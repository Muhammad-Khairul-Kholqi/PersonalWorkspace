'use client';

import { useState } from 'react';
import MainHeader from "@/app/partials/mainHeader";
import MainSidebar from "@/app/partials/mainSidebar";
import "@/app/styles/globals.css";

export default function RootLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden">
        <MainSidebar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
        />

        <div className="flex-1 flex flex-col min-w-0">
          <MainHeader
            setIsMobileOpen={setIsMobileOpen}
            isMobileOpen={isMobileOpen}
          />

          <main className="flex-1 overflow-y-auto p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
