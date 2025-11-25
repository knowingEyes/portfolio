"use client";
import { MenuIcon, HamburgerIcon, Terminal } from "lucide-react";

import DesktopNavbar from "./DesktopNavbar";
import { useState } from "react";
import { X } from "lucide-react";
import Button from "../ui/Button";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="p-4 flex items-center justify-between sticky top-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/60">
      <div className="text-sm inline-flex items-center gap-4">
        <div className="ring-1 rounded-sm ring-white p-1">
          <Terminal />
        </div>
        <span className="uppercase  font-semibold">web_dev_</span>
      </div>
      <DesktopNavbar />

      {/* mobile menu toggle button */}
      <Button className="md:hidden focus:ring-0" onClick={() => setOpen(!open)} variant="outline" >
        {!open ? <MenuIcon /> : <X />}
      </Button>
    </header>
  );
};

export default Header;
