"use client";
import { NAV_ITEMS } from "@/data/nav";
import Button from "../ui/Button";
import { useEffect, useState } from "react";

const MobileNavBar = () => {
  const [activeSec, SetActiveSec] = useState("#home");

  useEffect(() => {
    const hashChange = () => SetActiveSec(window.location.hash);

    window.addEventListener("hashchange", hashChange);
    () => window.removeEventListener("hashchange", hashChange);
  }, [activeSec]);

  return (
    <nav
      className={`flex md:hidden gap-2 flex-col items-start bg-background/99 left-0 right-0 top-full absolute text-sm  border-b border-gray-800 p-4`}
    >
      {NAV_ITEMS.map(({ name, icon: Icon, path }) => (
        <li
          key={name}
          className={`block w-full p-3 transition-all duration-300 h-full ${
            activeSec === `#${path}` ? "ring rounded" : ""
          }`}
        >
          <a
            href={`#${path}`}
            className="flex space-x-3 active:scale-[0.9] transition-transform duration-300"
          >
            <Icon size={18} /> <span>{name}</span>
          </a>
        </li>
      ))}
      <div className="w-full border-t py-4 border-gray-800 mt-2">
        <Button variant="outline" className="uppercase w-full">
          View resume
        </Button>
      </div>
    </nav>
  );
};

export default MobileNavBar;
