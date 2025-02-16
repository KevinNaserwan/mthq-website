"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Menu from "./menu/menu";
import DropdownMenu from "./dropdown-menu";
import Link from "next/link";

type MenuItem = {
  title: string;
  link: string;
  dropdown?: { title: string; link: string }[];
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleToggle = (title: string) => {
    setOpenMenu((prev) => (prev === title ? null : title));
  };

  const handleMobileToggle = (title: string) => {
    setMobileOpenMenu((prev) => (prev === title ? null : title));
  };

  // Click outside handler hanya untuk desktop dropdown
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    // Hanya tambahkan event listener jika dalam mode desktop
    if (window.innerWidth >= 1024) {
      // 1024px adalah breakpoint lg
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
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
        { title: "Program Tahfidz", link: "/program/program-tahfidz" },
        { title: "Program Ta'lim", link: "/program/program-talim" },
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
        <div className="lg:hidden flex flex-col gap-4 bg-white shadow-lg p-4">
          {menuItems.map(({ title, link, dropdown }) => (
            <div
              key={title}
              className="border-b border-gray-200 last:border-none pb-2"
            >
              {dropdown ? (
                <>
                  <button
                    onClick={() => handleMobileToggle(title)}
                    className={`w-full flex justify-between items-center text-left text-black font-semibold hover:text-[#006C39] ${
                      isActive(link, dropdown) ? "text-[#006C39]" : ""
                    }`}
                  >
                    {title}
                    <Image
                      src={
                        mobileOpenMenu === title
                          ? "/icon/arrow-up.svg"
                          : "/icon/arrow-down.svg"
                      }
                      alt={mobileOpenMenu === title ? "Arrow Up" : "Arrow Down"}
                      width={16}
                      height={16}
                      className="ml-2"
                    />
                  </button>
                  {mobileOpenMenu === title && (
                    <div className="pl-4 border-gray-200 mt-2">
                      {dropdown.map((item) => (
                        <Link
                          key={item.link}
                          href={item.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block py-2 border-b font-semibold ${
                            pathname.startsWith(item.link)
                              ? "text-[#006C39]"
                              : "text-black hover:text-[#006C39]"
                          }`}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full text-left py-2 font-semibold ${
                    isActive(link)
                      ? "text-[#006C39]"
                      : "text-black hover:text-[#006C39]"
                  }`}
                >
                  {title}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
