import CardFasilitas from "@/components/card-fasilitas";
import CardKeunggulan from "@/components/card-keunggulan";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import Image from "next/image";

export default function MTHQ2() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu title="MTHQ2" mainCategory="Beranda" currentPage="MTHQ2" />
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:px-36 lg:py-32 lg:bg-white">
        <div className="lg:w-[60%]">
          <h1 className=" lg:font-semibold text-[#006C39] lg:text-[32px]">
            MTHQ 2
          </h1>
          <p className=" font-bold text-base text-[#006C39]">
            “Program Khusus Tahfidz dan Kitab”
          </p>
          <p className=" lg:font-medium text-black lg:text-[16px] lg:mt-4 lg:w-[90%] text-justify">
            MTHQ 2 adalah program yang dirancang khusus untuk santri yang ingin
            fokus menghafal Al-Qur’an sekaligus mendalami kitab-kitab keislaman,
            tanpa mengikuti pendidikan formal. Program ini memberikan pengalaman
            belajar Islami yang terarah dan mendalam, mencetak generasi Qur’ani
            yang hafal dengan kuat (mutqin) dan memiliki pemahaman agama yang
            mendalam.
          </p>
        </div>
        <div className="">
          <Image
            src="/image/mthq2.svg"
            alt="image"
            className=" lg:w-[470px] lg:h-[276px]"
            width={470}
            height={276}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
