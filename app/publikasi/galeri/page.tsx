"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import Image from "next/image";

export default function Galeri() {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState("kegiatan"); // Default active category
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Categories data
  const categories = [
    { id: "semua", label: "Semua Foto", icon: "/icon/photo.svg" },
    { id: "kegiatan", label: "Kegiatan Santri", icon: "/icon/kegiatan.svg" },
    {
      id: "program",
      label: "Program Pendidikan",
      icon: "/icon/program-pendidikan.svg",
    },
    { id: "wisuda", label: "Wisuda Akbar", icon: "/icon/wisuda.svg" },
  ];

  // Determine image paths based on category
  const getImagePaths = () => {
    switch (activeCategory) {
      case "kegiatan":
        return [...Array(4)].map(
          (_, index) => `/image/galeri/1/galeri${index + 1}.png`
        );
      case "program":
        return [...Array(4)].map(
          (_, index) => `/image/galeri/2/galeri${index + 1}.png`
        );
      case "wisuda":
        return [...Array(4)].map(
          (_, index) => `/image/galeri/3/galeri${index + 1}.png`
        );
      case "semua":
        return [
          ...[...Array(4)].map(
            (_, index) => `/image/galeri/1/galeri${index + 1}.png`
          ),
          ...[...Array(4)].map(
            (_, index) => `/image/galeri/2/galeri${index + 1}.png`
          ),
          ...[...Array(4)].map(
            (_, index) => `/image/galeri/3/galeri${index + 1}.png`
          ),
        ];
      default:
        return [];
    }
  };

  // Get image paths for the current category
  const imagePaths = getImagePaths();

  // Handler for category click
  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    setIsDropdownOpen(false);
  };

  // Find the currently active category label
  const activeCategoryLabel =
    categories.find((category) => category.id === activeCategory)?.label ||
    "Pilih Kategori";

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu
        title="Galeri MTHQ"
        mainCategory="Publikasi"
        currentPage="Galeri"
      />
      <div className="lg:px-36 lg:py-24 lg:bg-white">
        <h1 className="text-black font-normal text-[16px] text-center">
          Dokumentasi kegiatan, program, dan pencapaian di Ma&apos;had Tahfidz
          Hidayatul Qur&apos;an Bangka.
        </h1>
        {/* Desktop Grid Categories */}
        <div className="hidden lg:grid grid-flow-col grid-cols-4 border-[#BFBFBF] border bg-[#fbfbfb] mt-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="cursor-pointer"
            >
              <div
                className={`flex flex-row items-center gap-2 py-3 justify-center ${
                  activeCategory === category.id
                    ? "text-[#006C39] border-b-2 border-[#006C39]"
                    : "text-black"
                }`}
              >
                <Image
                  alt=""
                  src={category.icon}
                  width={25}
                  height={25}
                  className={
                    activeCategory === category.id ? "filter-green" : ""
                  }
                />
                <p>{category.label}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile Dropdown Categories */}
        <div className="lg:hidden mx-4 mt-6 relative">
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex justify-between items-center border border-[#BFBFBF] p-3 bg-[#fbfbfb] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Image
                alt=""
                src={
                  categories.find((c) => c.id === activeCategory)?.icon ||
                  "/icon/photo.svg"
                }
                width={25}
                height={25}
                className={activeCategory !== "semua" ? "filter-green" : ""}
              />
              <span
                className={`${
                  activeCategory !== "semua" ? "text-[#006C39]" : "text-black"
                }`}
              >
                {activeCategoryLabel}
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          {isDropdownOpen && (
            <div className="absolute z-10 w-full border border-[#BFBFBF] bg-white shadow-lg">
              {categories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer"
                >
                  <Image
                    alt=""
                    src={category.icon}
                    width={25}
                    height={25}
                    className={
                      activeCategory === category.id ? "filter-green" : ""
                    }
                  />
                  <span
                    className={`
                      ${
                        activeCategory === category.id
                          ? "text-[#006C39]"
                          : "text-black"
                      }`}
                  >
                    {category.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Gallery Grid */}
        <div className="lg:grid grid-flow-col lg:mx-0 mx-4 bg-[#E6E6E6] rounded-br-lg rounded-bl-lg mb-6 pt-8 pb-6 relative">
          <div className="flex flex-wrap justify-center gap-4 px-8 max-h-[680px] overflow-y-auto">
            {imagePaths.map((imagePath, index) => (
              <div key={`image-${index}`} className="flex-shrink-0">
                <Image
                  alt={`Gallery image ${index + 1}`}
                  src={imagePath}
                  width={230}
                  height={130}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      {/* Additional CSS for SVG coloring */}
      <style jsx global>{`
        .filter-green {
          filter: invert(27%) sepia(98%) saturate(1399%) hue-rotate(125deg)
            brightness(93%) contrast(101%);
        }
      `}</style>
    </div>
  );
}
