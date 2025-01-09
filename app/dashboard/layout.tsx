"use client";
import { Sidebar, SidebarItems } from "@/components/Sidebar";
import { Book, UserCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const DasboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter(); // Router untuk navigasi
  const pathname = usePathname();
  const URLnow = pathname.substring(pathname.lastIndexOf("/") + 1);
  const [activeItem, setActiveItem] = useState<string | null>(URLnow);

  const handleSidebarClick = (item: string, path: string) => {
    setActiveItem(item); // Set item aktif
    router.push(path);
  };

  return (
    <>
      <div className="flex flex-row">
        <Sidebar>
          <SidebarItems icons={<UserCircle size={20} />} text="Peserta" active={activeItem === "Peserta"} onClick={() => handleSidebarClick("Peserta", "/dashboard/Peserta")} />
          <SidebarItems icons={<Book size={20} />} text="Daftar" active={activeItem === "Daftar"} onClick={() => handleSidebarClick("Daftar", "/dashboard/Daftar")} />
        </Sidebar>
        {children}
      </div>
    </>
  );
};

export default DasboardLayout;
