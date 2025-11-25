import { Home } from "lucide-react";
import Button from "../ui/Button";
import { User } from "lucide-react";
import { Code } from "lucide-react";
import { Mail } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", path: "home", icon: Home },
  { name: "About", path: "about", icon: User },
  { name: "Projects", path: "projects", icon: Code },
  { name: "Contact", path: "contact", icon: Mail },
];

const DesktopNavbar = () => {
  return (
    <nav className="hidden md:flex items-center space-x-2 text-xs list-none ">
      {NAV_ITEMS.slice(1).map(({ name, path, icon }) => (
        <a
          key={name}
          className="cursor-pointer hover:text-white hover:-translate-y-0.5 transition-transform"
          href={`#${path}`}
        >
          {name}
        </a>
      ))}
      <div className="ml-6 pl-6 border-l border-gray-800">
        <Button variant="outline" className="text-xs uppercase py-1.5 px-4 h-8">
          Resume
        </Button>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
