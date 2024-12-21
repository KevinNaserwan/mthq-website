"use client";

import { useState, useEffect } from "react";
import CardTestimoni from "../card-testimoni";
import Image from "next/image";

interface TestimonyData {
  name: string;
  role: string;
  image: string;
  testimony: string;
}

export default function Testimoni() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const testimonies: TestimonyData[] = [
    {
      name: "Dewi Ratna Melisa",
      role: "Wali Santri",
      image: "/image/testimoni/1.png",
      testimony:
        "Lingkungan di MTHQ sangat mendukung untuk anak-anak belajar dengan nyaman dan teratur.",
    },
    {
      name: "Agus Mubarok",
      role: "Wali Santri",
      image: "/image/testimoni/2.png",
      testimony:
        "MTHQ bukan hanya sekadar pesantren, tetapi juga tempat terbaik untuk membentuk karakter dan kecerdasan spiritual anak-anak kami.",
    },
    {
      name: "Viviana Putri",
      role: "Wali Santri",
      image: "/image/testimoni/3.png",
      testimony:
        "Kami melihat perubahan positif dalam kemandirian dan kedisiplinan anak sejak belajar di MTHQ.",
    },
    {
      name: "Abdul Barik",
      role: "Wali Santri",
      image: "/image/testimoni/4.png",
      testimony:
        "MTHQ berhasil menanamkan akhlak yang baik serta pemahaman agama yang mendalam pada anak kami.",
    },
    {
      name: "Indah Purnama",
      role: "Wali Santri",
      image: "/image/testimoni/5.png",
      testimony:
        "Fasilitas yang lengkap di MTHQ membuat anak kami nyaman dan semangat belajar.",
    },
    {
      name: "Afif Yudha",
      role: "Wali Santri",
      image: "/image/testimoni/6.png",
      testimony:
        "Alhamdulillah, anak kami menjadi lebih tekun dan disiplin berkat pendidikan di MTHQ.",
    },
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonies.length / itemsPerSlide);

  // Auto-slide effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
      }, 6000); //10 seconds
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

  return (
    <div className="lg:px-36 lg:py-32 lg:bg-white overflow-hidden">
      <h1 className="text-[#006C39] font-bold text-center text-[32px]">
        Testimoni
      </h1>
      <div className="lg:bg-[#E6F0EB] mt-12">
        <iframe
          className="lg:w-[480px] lg:h-[360px] py-12 w-full h-[200px] border-none mx-auto"
          src="https://www.youtube.com/embed/77q5jiZkuJI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div
        className="mt-36 flex items-center relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Button Left */}
        <button onClick={handlePrev} className="absolute left-0 p-2 z-10">
          <Image
            src="/icon/left-arrow.svg"
            alt="Left Arrow"
            className="w-8 h-8 lg:w-12 lg:h-12"
          />
        </button>

        {/* Slider Content */}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-500 w-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex justify-center gap-5 min-w-full my-12"
              >
                {testimonies
                  .slice(
                    slideIndex * itemsPerSlide,
                    slideIndex * itemsPerSlide + itemsPerSlide
                  )
                  .map((testimony, index) => (
                    <CardTestimoni key={index} {...testimony} />
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Button Right */}
        <button onClick={handleNext} className="absolute right-0 p-2 z-10">
          <Image
            src="/icon/right-arrow.svg"
            alt="Right Arrow"
            className="w-8 h-8 lg:w-12 lg:h-12"
          />
        </button>
      </div>
      <div className="flex flex-row justify-center gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`lg:w-[40px] lg:h-[10px] rounded-full ${
              currentIndex === index ? "bg-[#006C39]" : "bg-[#BFBFBF]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
