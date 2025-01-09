"use client";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import Image from "next/image";
import React, { createContext, ReactNode, useContext, useState } from "react";

const SidebarContext = createContext({});

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Image src="/globe.svg" alt="asd" width={`${expanded ? "40" : "0"}`} height={`${expanded ? "40" : "0"}`} className={`overflow-hidden transition-all `} priority />
          <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <Image src="/globe.svg" alt="asd" width={40} height={40} className="rounded-md" priority />
          <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
            <div className="leading-4">
              <h4 className="font-semibold text-black">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

interface SidebarItemsProps {
  icons: ReactNode; // For React components or elements
  text: string; // For text content
  active?: boolean; // For a boolean value
  alert?: boolean; // Optional boolean
  onClick?: () => void;
}

export const SidebarItems: React.FC<SidebarItemsProps> = ({ icons, text, active, alert, onClick }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { expanded }: any = useContext(SidebarContext);
  return (
    <>
      <li
        onClick={onClick}
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}
      >
        {icons}
        <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
        {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}></div>}
      </li>
    </>
  );
};
