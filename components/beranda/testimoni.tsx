"use client";
import { useState, useEffect } from "react";
import CardTestimoni from "../card-testimoni";
import { getTestimoni } from "@/api/beritaApi";
import type { TestimoniItem } from "@/types/berita";

interface TestimoniGrouped {
  name: string;
  role: string;
  image: string;
  testimony: string;
}

export default function Testimoni() {
  const [testimonies, setTestimonies] = useState<TestimoniGrouped[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    getTestimoni().then((data: TestimoniItem[]) => {
      // Group by section_id
      const grouped: Record<string, Partial<TestimoniGrouped>> = {};
      data.forEach((item) => {
        if (!grouped[item.section_id]) grouped[item.section_id] = {};
        if (item.nama_attribute === "Gambar Testimoni")
          grouped[item.section_id].image = item.konten_gambar
            ? `https://backend.mthq-bangka.site/storage/${item.konten_gambar}`
            : "/image/testimoni/1.png";
        if (item.nama_attribute === "Nama Testimoni")
          grouped[item.section_id].name = item.konten_teks || "";
        if (item.nama_attribute === "Nama Status Testimoni")
          grouped[item.section_id].role = item.konten_teks || "";
        if (item.nama_attribute === "Teks - Testimoni")
          grouped[item.section_id].testimony = item.konten_teks || "";
      });
      // Only include complete testimonies and map to correct type
      const result: TestimoniGrouped[] = Object.values(grouped)
        .filter(
          (t): t is TestimoniGrouped =>
            !!t.image && !!t.name && !!t.role && !!t.testimony
        )
        .map((t) => ({
          name: t.name!,
          role: t.role!,
          image: t.image!,
          testimony: t.testimony!,
        }));
      setTestimonies(result);
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const itemsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(testimonies.length / itemsPerSlide);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isHovered, totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const isAtBeginning = currentIndex === 0;
  const isAtEnd = currentIndex === totalSlides - 1;

  const LeftArrow = () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 lg:w-12 lg:h-12"
    >
      <path
        d="M25 30L15 20L25 10"
        stroke={isAtBeginning ? "#BFBFBF" : "#006C39"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const RightArrow = () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 lg:w-12 lg:h-12"
    >
      <path
        d="M15 10L25 20L15 30"
        stroke={isAtEnd ? "#BFBFBF" : "#006C39"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="lg:w-[1200px] mx-auto lg:py-32 py-8 px-6 bg-white overflow-hidden">
      <h1 className="text-[#006C39] font-bold text-center lg:text-[32px] text-2xl">
        Testimoni
      </h1>
      <div className="lg:bg-[#E6F0EB] lg:mt-12">
        <iframe
          className="lg:w-[480px] lg:h-[360px] py-8 w-[330px] h-[300px] border-none mx-auto"
          src="https://www.youtube.com/embed/77q5jiZkuJI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div
        className="lg:mt-36 mt-6 flex items-center relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Button Left */}
        <button onClick={handlePrev} className="absolute left-0 p-2 z-10">
          <LeftArrow />
        </button>
        {/* Slider Content */}
        <div className="lg:flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-500 w-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className={`flex justify-center lg:gap-5 lg:min-w-full w-[300px] lg:mx-0 mx-12 my-12 ${
                  isMobile ? "" : ""
                }`}
              >
                {testimonies
                  .slice(
                    slideIndex * itemsPerSlide,
                    slideIndex * itemsPerSlide + itemsPerSlide
                  )
                  .map((testimony, index) => (
                    <CardTestimoni
                      key={index}
                      {...testimony}
                      data-aos="fade-up"
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
        {/* Button Right */}
        <button onClick={handleNext} className="absolute right-0 p-2 z-10">
          <RightArrow />
        </button>
      </div>
    </div>
  );
}
