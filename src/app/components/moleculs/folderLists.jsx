"use client";

import { useState, useRef, useEffect } from "react";
import FolderItem from "@/app/components/atoms/folderItem";
import { Plus } from "lucide-react";

export default function FolderLists() {
  return (
    <div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
            <span className="text-gray-700 font-semibold text-lg">My Folders</span>
            <div className="flex items-center gap-2 cursor-pointer border border-gray-200 h-9 px-3 rounded-md hover:bg-gray-50 transition-colors">
                <span className="text-gray-600">Add Folder</span>
                <Plus className="text-gray-600 w-4 h-4" />
            </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto whitespace-nowrap flex items-center gap-4 mt-3 scrollbar-hide">
        <FolderItem href="#" title="Project A" date="December, 01 2025" />
        <FolderItem href="#" title="Project B" date="December, 08 2025" />
        <FolderItem href="#" title="Project C" date="December, 08 2025" />
        <FolderItem href="#" title="Project D" date="December, 02 2025" />
        <FolderItem href="#" title="Project A" date="December, 01 2025" />
        <FolderItem href="#" title="Project B" date="December, 08 2025" />
        <FolderItem href="#" title="Project C" date="December, 08 2025" />
        <FolderItem href="#" title="Project D" date="December, 02 2025" />
      </div>
    </div>
  );
}
