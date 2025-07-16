import MainSectionPage from "@/app/components/moleculs/mainSectionPage";
import FolderLists from "@/app/components/moleculs/folderLists";
import ProjectTabs from "@/app/components/moleculs/projectTabs";

export default function Workspace() {
  return (
    <div>
      <MainSectionPage 
        title="Workspace" 
        description="Manage your personal workspace, organize your folders, and access your files easily."
      />
      <FolderLists />
      <ProjectTabs />
    </div>
  );
}