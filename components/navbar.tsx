"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Menu from "./menu/menu";
import DropdownMenu from "./dropdown-menu";

type MenuItem = {
  title: string;
  link: string;
  dropdown?: { title: string; link: string }[];
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleToggle = (title: string) => {
    setOpenMenu((prev) => (prev === title ? null : title));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems: MenuItem[] = [
    { title: "Beranda", link: "/" },
    {
      title: "Tentang MTHQ",
      link: "",
      dropdown: [
        { title: "Profil", link: "/tentang-mthq/profil" },
        { title: "Pendiri", link: "/tentang-mthq/pendiri" },
        { title: "Pimpinan", link: "/tentang-mthq/pimpinan" },
        { title: "Keunggulan", link: "/tentang-mthq/keunggulan" },
        { title: "Fasilitas", link: "/tentang-mthq/fasilitas" },
        { title: "Kalender Akademik", link: "/tentang-mthq/kalender-akademik" },
      ],
    },
    {
      title: "Program",
      link: "",
      dropdown: [
        { title: "Program Pengasuhan", link: "/program/program-pengasuhan" },
        { title: "Program Keamanan", link: "/program/program-keamanan" },
        { title: "Program Tahfidz", link: "/program/program-tahfidz" },
        { title: "Program Ta'lim", link: "/program/program-talim" },
        { title: "⁠Program Ubudiyah", link: "/program/program-ubudiyah" },
        { title: "⁠Program Bahasa", link: "/program/program-bahasa" },
        { title: "⁠Program Kesehatan", link: "/program/program-kesehatan" },
        {
          title: "⁠Program Ekstrakurikuler",
          link: "/program/program-ekstrakulikuler",
        },
        { title: "⁠Program Wirausaha", link: "/program/program-wirausaha" },
      ],
    },
    { title: "Kegiatan", link: "/kegiatan" },
    {
      title: "Publikasi",
      link: "",
      dropdown: [
        { title: "Galeri", link: "/publikasi/galeri" },
        { title: "Berita", link: "/publikasi/berita" },
      ],
    },
    { title: "MTHQ 2", link: "/mthq2" },
    { title: "Kontak", link: "/kontak" },
  ];

  const isActive = (
    link: string,
    dropdown?: { title: string; link: string }[]
  ) => {
    // Special case for home page
    if (link === "/" && pathname === "/") return true;

    // For other pages
    if (link && link !== "/" && pathname.startsWith(link)) return true;

    // For dropdown items
    if (dropdown) {
      return dropdown.some((item) => pathname.startsWith(item.link));
    }

    return false;
  };

  return (
    <div className="w-full bg-white min-h-0">
      <div className="flex flex-row justify-between lg:w-[1200px] mx-auto py-3">
        <div>
          <Image
            alt="MTHQ Logo"
            src="/image/logo-navbar.png"
            width={160}
            height={60}
          />
        </div>
        <div className="flex flex-row items-center gap-7" ref={dropdownRef}>
          {menuItems.map(({ title, link, dropdown }) => {
            const active = isActive(link, dropdown);
            return (
              <div key={title} className="relative">
                <Menu
                  title={title}
                  link={link}
                  isActive={active}
                  isOpen={openMenu === title}
                  onToggle={() => handleToggle(title)}
                  hasDropdown={!!dropdown}
                />
                {dropdown && openMenu === title && (
                  <DropdownMenu items={dropdown} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
