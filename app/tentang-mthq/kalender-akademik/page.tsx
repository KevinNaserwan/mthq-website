import Button from "@/components/button";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import Image from "next/image";

export default function KalenderAkademik() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu
        title="Kalender Akademik"
        mainCategory="Tentang MTHQ"
        currentPage="Kalender Akademik"
      />
      <div className="bg-[#E6F0EB] lg:py-28">
        <div className=" lg:w-[1200px] mx-auto py-10 px-10   bg-white rounded-xl">
          <h1 className="w-[360px] mx-auto lg:w-full text-start lg:text-center font-bold text-2xl text-[#006C39]">
            Kalender Akademik MTHQ 2024/2025
          </h1>
          <div className=" w-[300px] mx-auto lg:w-full lg:flex lg:flex-row flex-col flex-nowrap lg:flex-wrap lg:items-center lg:gap-6 lg:justify-center mt-10">
            <div>
              <Image
                alt="Kalender 1"
                src="/image/kalender/1.svg"
                className="lg:w-[240px] lg:h-[280px]"
                width={300}
                height={200}
              />
            </div>
            <div>
              <Image
                alt="Kalender 2"
                src="/image/kalender/2.svg"
                className="lg:w-[240px] lg:h-[280px] lg:py-0 py-10"
                width={300}
                height={200}
              />
            </div>
            <div>
              <Image
                alt="Kalender 3"
                src="/image/kalender/3.svg"
                className="lg:w-[240px] lg:h-[280px]"
                width={300}
                height={200}
              />
            </div>
            <div>
              <Image
                alt="Kalender 4"
                src="/image/kalender/4.svg"
                className="lg:w-[240px] lg:h-[280px] lg:py-0 py-10"
                width={300}
                height={200}
              />
            </div>
            <div>
              <Image
                alt="Kalender 5"
                src="/image/kalender/5.svg"
                className="lg:w-[240px] lg:h-[280px]"
                width={300}
                height={200}
              />
            </div>
            <div>
              <Image
                alt="Kalender 6"
                src="/image/kalender/6.svg"
                className="lg:w-[240px] lg:h-[280px] lg:py-0 py-10"
                width={300}
                height={200}
              />
            </div>
            <div>
              <Image
                alt="Kalender 7"
                src="/image/kalender/7.svg"
                className="lg:w-[240px] lg:h-[280px]"
                width={300}
                height={200}
              />
            </div>
            <div>
              <Image
                alt="Kalender 8"
                src="/image/kalender/8.svg"
                className="lg:w-[240px] lg:h-[280px] lg:py-0 py-10"
                width={300}
                height={200}
              />
            </div>
            <div>
              <Image
                alt="Kalender 9"
                src="/image/kalender/9.svg"
                className="lg:w-[240px] lg:h-[280px]"
                width={300}
                height={200}
              />
            </div>
            <div>
              <Image
                alt="Kalender 10"
                src="/image/kalender/10.svg"
                className="lg:w-[240px] lg:h-[280px] lg:py-0 py-10"
                width={300}
                height={200}
              />
            </div>
            <div>
              <Image
                alt="Kalender 11"
                src="/image/kalender/11.svg"
                className="lg:w-[240px] lg:h-[280px]"
                width={300}
                height={200}
              />
            </div>
            <div>
              <Image
                alt="Kalender 12"
                src="/image/kalender/12.svg"
                className="lg:w-[240px] lg:h-[280px] lg:py-0 py-10"
                width={300}
                height={200}
              />
            </div>
          </div>
          <div className=" flex justify-center mt-6">
            {" "}
            <Button text="Unduh Kalender" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
