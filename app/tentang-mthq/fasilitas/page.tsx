import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import Image from "next/image";

export default function Fasilitas() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu
        title="Fasilitas"
        mainCategory="Tentang MTHQ"
        currentPage="Fasilitas"
      />
      <div className="lg:w-[1200px] mx-auto lg:py-24 lg:bg-white px-6 py-8">
        <h1 className="text-black font-normal text-justify text-[16px]">
          MTHQ menyediakan fasilitas lengkap untuk mendukung perkembangan
          santri, mulai dari masjid, ruang kelas, perpustakaan, laboratorium
          komputer, hingga asrama yang nyaman dan terjaga. Dilengkapi taman
          hijau, lapangan olahraga, dan gedung serba guna, MTHQ menciptakan
          lingkungan kondusif bagi santri untuk belajar, beribadah, dan
          mengembangkan diri dengan optimal.
        </h1>
        <div className=" mt-12">
          <div className=" flex flex-row flex-wrap gap-16 grid-cols-4 justify-center items-center">
            <Image
              alt=""
              src="/image/fasilitas.png"
              className=" lg:block hidden"
              width={1200}
              height={1200}
            />
            <Image
              alt=""
              src="/image/fasilitas-mobile.png"
              className=" lg:hidden block"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
