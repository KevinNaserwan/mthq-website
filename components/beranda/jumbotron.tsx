"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import Button from "../button";

export default function Jumbotron() {
  const backgrounds = [
    "/image/jumbotron/1.png",
    "/image/jumbotron/2.jpeg",
    "/image/jumbotron/3.jpeg",
  ];

  return (
    <div className="relative w-screen h-[650px] mt-20">
      {/* Background Slider - z-index: 0 (default) */}
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500 }}
          className="w-full h-full"
        >
          {backgrounds.map((bg, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-left bg-cover"
                style={{
                  backgroundImage: `url('${bg}')`,
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Black Overlay - z-index: 10 */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Content - z-index: 20 */}
      <div className="absolute inset-0 flex flex-col items-start justify-center lg:px-36 text-white z-20">
        <h1 className="text-4xl lg:text-5xl font-semibold">MTHQ</h1>
        <h2 className="text-2xl lg:text-4xl font-semibold text-[#019A3C] mt-2">
          Ma&apos;had Tahﬁdz Hidayatul Qur&apos;an
        </h2>
        <p className="lg:w-[50%] mt-4">
          Pesantren modern yang mengintegrasikan tahfidz al-Qur&apos;an, kajian
          kitab keagamaan, pembiasaan bahasa Arab dan Inggris, serta pendidikan
          formal.
        </p>
        <div className="mt-6">
          <Button text="Selengkapnya" />
        </div>
        <div className="lg:absolute lg:w-[700px] bg-[#006C39] lg:grid lg:grid-flow-row lg:grid-cols-5 lg:px-16 lg:py-4 lg:rounded-lg lg:-bottom-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:justify-items-center">
          <div className="flex flex-row items-center justify-center gap-5">
            <Image src="/icon/teacher.svg" alt="icon" width={100} height={60} />
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-semibold">77</p>
              <p className="text-base font-semibold text-[#E6E6E6]">Pengajar</p>
            </div>
          </div>
          <div className="h-full bg-white w-[2px]"></div>
          <div className="flex flex-row items-center justify-center gap-5">
            <Image src="/icon/student.svg" alt="icon" width={77} height={53} />
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-semibold">903</p>
              <p className="text-base font-semibold text-[#E6E6E6]">Siswa</p>
            </div>
          </div>
          <div className="h-full bg-white w-[2px]"></div>
          <div className="flex flex-row items-center justify-center gap-5">
            <Image src="/icon/staff.svg" alt="icon" width={77} height={60} />
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-semibold">32</p>
              <p className="text-base font-semibold text-[#E6E6E6]">Staff</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
