"use client";

import React, { useState, useEffect } from "react";
import CardFasilitas from "../card-fasilitas";

interface Facility {
  id: number;
  title: string;
  imageName: string;
}

const Fasilitas: React.FC = () => {
  const facilities: Facility[] = [
    { id: 1, title: "Kantin Putra", imageName: "KANTIN PUTRA.jpg" },
    { id: 2, title: "Perpustakaan", imageName: "PERPUSTAKAAN.jpg" },
    { id: 3, title: "Laboratorium", imageName: "LAB KOMPUTER.jpg" },
    { id: 4, title: "Masjid", imageName: "MASJID.jpg" },
    { id: 5, title: "Perumahan Guru", imageName: "PERUMAHAN GURU.jpg" },
    { id: 6, title: "Ruang Kelas", imageName: "RUANG KELAS.jpg" },
    { id: 7, title: "Perpustakaan Putra", imageName: "PERPUS PUTRA.jpg" },
    { id: 8, title: "Penginapan Tamu", imageName: "Penginapan Tamu.png" },
    { id: 9, title: "Kantor Madrasah", imageName: "KANTOR MADRASAH.jpg" },
    {
      id: 10,
      title: "Kantor Administrasi",
      imageName: "KANTOR ADMINISTRASI.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsToShow = isMobile ? 1 : 4;
  const totalSlides = facilities.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === totalSlides - cardsToShow ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides, cardsToShow]);

  const handleDotClick = (index: number): void => {
    if (index + cardsToShow <= totalSlides) {
      setActiveIndex(index);
    }
  };

  const handleArrowClick = (direction: "left" | "right"): void => {
    setActiveIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? totalSlides - cardsToShow : prevIndex - 1;
      } else {
        return prevIndex === totalSlides - cardsToShow ? 0 : prevIndex + 1;
      }
    });
  };

  // Check if slider is at the beginning or end
  const isAtBeginning = activeIndex === 0;
  const isAtEnd = activeIndex === totalSlides - cardsToShow;

  // Define the SVG for left arrow
  const LeftArrow = () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 30L15 20L25 10"
        stroke={isAtBeginning ? "#BFBFBF" : "#006C39"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Define the SVG for right arrow
  const RightArrow = () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 10L25 20L15 30"
        stroke={isAtEnd ? "#BFBFBF" : "#006C39"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="lg:px-36 lg:py-32 py-8 px-6 bg-[#E6F0EB]">
      <div className="lg:w-[1200px] mx-auto">
        <h1 className="text-[#006C39] font-bold text-center lg:text-[32px] text-2xl">
          Fasilitas
        </h1>

        <div className="relative mt-12">
          {/* Left Arrow Button */}
          <button
            onClick={() => handleArrowClick("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          >
            <LeftArrow />
          </button>

          {/* Visible Cards Container */}
          <div className="overflow-hidden mx-16">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / cardsToShow)}%)`,
              }}
            >
              {facilities.map((facility) => (
                <div
                  key={facility.id}
                  className={`w-full ${isMobile ? "px-0" : "px-2"}`}
                  style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                >
                  <div className="flex justify-center">
                    <CardFasilitas
                      title={facility.title}
                      imageName={facility.imageName}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleArrowClick("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          >
            <RightArrow />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 gap-5">
          {[...Array(totalSlides - cardsToShow + 1)].map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`cursor-pointer transition-all duration-300 rounded-lg ${
                index === activeIndex
                  ? "w-[25px] h-[8px] bg-[#006C39]"
                  : "w-[8px] h-[8px] bg-[#BFBFBF]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fasilitas;
