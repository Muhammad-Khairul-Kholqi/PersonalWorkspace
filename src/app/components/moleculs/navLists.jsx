import NavItem from "@/app/components/atoms/navItem";

export default function NavLists({ isCollapsed }) {
    return (
        <div className="mt-5 space-y-2">
            <NavItem
                href="/"
                icon="LayoutDashboard"
                label="Dashboard"
                isCollapsed={isCollapsed}
            />

            <NavItem
                href="/pages/workspace"
                icon="BriefcaseBusiness"
                label="Workspace"
                isCollapsed={isCollapsed}
            />

            <NavItem
                href="/pages/workspace"
                icon="Trash"
                label="Trash"
                isCollapsed={isCollapsed}
            />
        </div>
    );
}