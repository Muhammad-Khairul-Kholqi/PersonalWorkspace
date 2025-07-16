import { Folder, EllipsisVertical } from "lucide-react";

export function BlankContent() {
    return (
      <div className="flex flex-col items-start space-y-4">
        <div className="flex justify-between items-center w-full px-5 py-3 border rounded-md border-gray-200 cursor-pointer text-gray-700 hover:-translate-y-1 duration-300">
            <div className="flex items-center gap-3">
              <Folder className="w-5 h-5" />
              <span>Blank document 1</span>
            </div>
            <span>December, 24 2024</span>
            <span>Folder: Project A</span>
            <EllipsisVertical className="w-4 h-4 cursor-pointer" />
        </div>
      </div>
    );
  }
  
  export function MindmapContent() {
    return (
      <>
        <h3 className="text-lg md:text-xl font-semibold mb-2">Mind Map</h3>
        <p className="text-gray-600 text-sm md:text-base">
          Visualize your ideas and concepts in a connected mind map structure.
        </p>
      </>
    );
  }
  
  export function TodoContent() {
    return (
      <>
        <h3 className="text-lg md:text-xl font-semibold mb-2">To Do List</h3>
        <p className="text-gray-600 text-sm md:text-base">
          Manage your tasks with priorities and due dates.
        </p>
      </>
    );
  }
  
  export function TableContent() {
    return (
      <>
        <h3 className="text-lg md:text-xl font-semibold mb-2">Table</h3>
        <p className="text-gray-600 text-sm md:text-base">
          Organize data in rows and columns with spreadsheet-like functionality.
        </p>
      </>
    );
  }
  