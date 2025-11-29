"use client";
import { MenuIcon, HamburgerIcon, Terminal } from "lucide-react";

import DesktopNavbar from "./DesktopNavbar";
import { useState } from "react";
import { X } from "lucide-react";
import Button from "../ui/Button";
import MobileNavBar from "./MobileNavBar";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className=" sticky top-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/60">
      <div className="relative p-4 flex justify-between  w-full items-center ">
        <div className="text-sm inline-flex items-center gap-4">
          <div className="ring-1 rounded-sm ring-white p-1">
            <Terminal />
          </div>
          <span className="uppercase  font-semibold">web_dev_</span>
        </div>
        <DesktopNavbar />
        {open && <MobileNavBar />}

        {/* mobile menu toggle button */}
        <Button
          className="md:hidden focus:ring-0"
          onClick={() => setOpen(!open)}
          variant="outline"
        >
          {!open ? <MenuIcon /> : <X />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
