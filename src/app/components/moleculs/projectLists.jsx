import ProjectItem from "@/app/components/atoms/projectItem";

export default function ProjectLists() {
    return (
        <div className="mt-2 ml-2 space-y-2">
            <ProjectItem icon="Folder" label="Blank Document" />
            <ProjectItem icon="Workflow" label="Mind Map" />
            <ProjectItem icon="ListTodo" label="To Do List" />
            <ProjectItem icon="Table" label="Table" />
        </div>
    );
}