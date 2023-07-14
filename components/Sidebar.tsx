import Card from "./Card";
import SidebarLink from "./SidebarLink";

const links: {
  label: string;
  icon: "Settings" | "User" | "Grid" | "Calendar";
  link: string;
}[] = [
  { label: "Home", icon: "Grid", link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      <div className="w-full flex justify-center items-center">
        <strong>Logo</strong>
      </div>
      {links.map((link) => (
        <SidebarLink key={link.link} link={link} />
      ))}
    </Card>
  );
};

export default Sidebar;
