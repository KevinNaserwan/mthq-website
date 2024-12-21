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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    if (link === "/" && pathname === "/") return true;
    if (link && link !== "/" && pathname.startsWith(link)) return true;
    if (dropdown) {
      return dropdown.some((item) => pathname.startsWith(item.link));
    }
    return false;
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex flex-row justify-between lg:w-[1200px] mx-auto py-3 lg:px-0 px-4">
        <div>
          <Image
            alt="MTHQ Logo"
            src="/image/logo-navbar.png"
            width={160}
            height={60}
          />
        </div>
        <div className="flex flex-row items-center gap-7 lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-black"
          >
            <Image
              src="/icon/menu.svg"
              alt="Menu Icon"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div
          className="lg:flex-row items-center gap-7 hidden lg:flex"
          ref={dropdownRef}
        >
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
                  <DropdownMenu items={dropdown} isOpen={openMenu === title} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden lg:gap-0 gap-5 flex flex-col bg-white shadow-lg p-4">
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
                  <DropdownMenu items={dropdown} isOpen={openMenu === title} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
