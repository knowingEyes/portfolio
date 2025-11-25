import { MenuIcon } from "lucide-react";
import { HamburgerIcon } from "lucide-react";
import { Terminal } from "lucide-react";
import DesktopNavbar from "./DesktopNavbar";
const Header = () => {
  return (
    <header className="p-4 flex items-center justify-between">
      <div className="text-sm inline-flex items-center gap-4">
        <div className="ring-1 rounded-sm ring-white p-1">
          <Terminal />
        </div>
        <span className="uppercase  font-semibold">web_dev_</span>
      </div>
      <DesktopNavbar/>
      {/* <MenuIcon /> */}
    </header>
  );
};

export default Header;
