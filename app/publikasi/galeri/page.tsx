"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import Image from "next/image";

export default function Galeri() {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState("kegiatan"); // Default active category

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

  // Handler for category click
  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

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
        <div className="lg:grid grid-flow-col lg:mx-0 mx-4 grid-cols-4 border-[#BFBFBF] border bg-[#fbfbfb] mt-6">
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

        {/* Scrollable gallery container with max 4 rows visible */}
        <div className="lg:grid grid-flow-col lg:mx-0 mx-4 bg-[#E6E6E6] rounded-br-lg rounded-bl-lg mb-6 pt-8 pb-6 relative">
          <div className="grid lg:grid-flow-col grid-flow-row overflow-y-auto max-h-[680px] lg:pr-4">
            {" "}
            {/* Height for 4 rows + gaps */}
            <div className="grid grid-flow-row gap-6 mx-8 justify-around">
              {[...Array(8)].map((_, index) => (
                <div key={`col1-${index}`}>
                  <Image
                    alt=""
                    src="/image/galeri/galeri1.png"
                    width={230}
                    height={130}
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-flow-row gap-6 mx-8 justify-around">
              {[...Array(8)].map((_, index) => (
                <div key={`col2-${index}`}>
                  <Image
                    alt=""
                    src="/image/galeri/galeri1.png"
                    width={230}
                    height={130}
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-flow-row gap-6 mx-8 justify-around">
              {[...Array(8)].map((_, index) => (
                <div key={`col3-${index}`}>
                  <Image
                    alt=""
                    src="/image/galeri/galeri1.png"
                    width={230}
                    height={130}
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-flow-row gap-6 mx-8 justify-around">
              {[...Array(8)].map((_, index) => (
                <div key={`col4-${index}`}>
                  <Image
                    alt=""
                    src="/image/galeri/galeri1.png"
                    width={230}
                    height={130}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="lg:relative hidden">
            <div className="absolute  scroll-indicator"></div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-row flex-wrap gap-16 grid-cols-4 justify-center items-center"></div>
        </div>
      </div>
      <Footer />

      {/* Additional CSS for SVG coloring */}
      <style jsx global>{`
        .filter-green {
          filter: invert(27%) sepia(98%) saturate(1399%) hue-rotate(125deg)
            brightness(93%) contrast(101%);
        }

        /* Make the scroll indicator move with scrolling */
        .scroll-indicator {
          transition: top 0.2s;
        }
      `}</style>
    </div>
  );
}
