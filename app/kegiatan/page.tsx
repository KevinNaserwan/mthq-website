import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import Image from "next/image";

export default function Kegiatan() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu
        title="Kegiatan"
        mainCategory="Beranda"
        currentPage="Kegiatan"
      />
      <div className="lg:px-36 lg:pt-24 lg:bg-white">
        <h1 className="text-black font-normal text-justify text-[16px] px-6 py-6 lg:px-0 lg:py-0">
          Di MTHQ, santri mengikuti beragam kegiatan harian, pekanan, hingga
          tahunan yang dirancang untuk membangun kedisiplinan, memperdalam ilmu
          agama, serta mengembangkan keterampilan dan bakat.
        </h1>
        <div className=" lg:mt-12">
          <div className=" flex flex-row flex-wrap gap-16 grid-cols-4 justify-center items-center"></div>
        </div>
      </div>
      <div className="bg-[#fff] lg:px-36  flex flex-col gap-10 px-6 py-8">
        <div className="lg:w-[1200px] mx-auto ">
          <h1 className="lg:text-left font-bold text-[#006C39] lg:text-[32px text-2xl text-center ">
            Kegiatan Harian
          </h1>
          <div className=" flex lg:flex-row flex-col lg:gap-0 gap-10 items-center justify-between">
            <Image
              alt="jadwal-1"
              src="/image/jadwal-mthq2-1.png"
              width={364}
              height={300}
            />
            <Image
              alt="jadwal-1"
              src="/image/jadwal.png"
              width={200}
              height={310}
            />
            <Image
              alt="jadwal-1"
              src="/image/jadwal-mthq2-2.png"
              width={364}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#E6F0EB] lg:px-36 lg:py-12 flex flex-col gap-10 px-6 py-8">
        <div className="lg:w-[1200px] mx-auto ">
          <Image
            src="/image/kegiatan-1.png"
            width={328}
            className="lg:hidden block mx-auto"
            height={536}
            alt=""
          />
          <div className="hidden lg:flex flex-row justify-between items-center mt-6 w-full">
            <div className="w-7/12">
              <h1 className="text-left font-bold text-[#006C39] text-[32px] mb-4">
                Kegiatan Pekanan
              </h1>
              <table className="flex flex-col gap-3 mt-3 w-full">
                <tr className="flex flex-row items-start gap-2">
                  <td className="font-bold">Jumat</td>
                  <td className="font-bold">: </td>
                  <td>
                    Muhadatsah Prakter Percapakan Arab/Inggris, Pembacaan Surah
                    Al- Kahfi, dzikir dan doa bersama
                  </td>
                </tr>
                <tr className="flex flex-row items-start gap-2">
                  <td className="font-bold">Sabtu</td>
                  <td className="font-bold">: </td>
                  <td>
                    Kajian Tafsir An-Nawawi, Nonton Bareng, (Bahasa Arab/ Bahasa
                    Inggris/sejarah/hiburan)
                  </td>
                </tr>
                <tr className="flex flex-row items-start gap-2">
                  <td className="font-bold">Ahad</td>
                  <td className="font-bold">: </td>
                  <td>
                    Kajian Hadits Kitab Mukhtarul Ahadits, Muhadatsah/Tasjiul
                    Lughoh, Jogging, dilanjutkan Senam Bersama
                  </td>
                </tr>
              </table>
            </div>
            <div className="w-4/12 flex justify-end">
              <Image
                src="/image/kegiatan-pekanan.png"
                width={351}
                height={242}
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] lg:px-36 lg:py-12 flex flex-col gap-10 px-6 py-8">
        <h1 className="lg:text-left font-bold text-[#006C39] lg:text-[32px text-2xl text-center lg:block hidden ">
          Kegiatan Semesteran
        </h1>
        <Image
          src="/image/kegiatan-semesteran.png"
          width={1150}
          className=" lg:block hidden"
          height={200}
          alt=""
        />
        <Image
          src="/image/kegiatan-2.png"
          width={328}
          className=" lg:hidden block mx-auto"
          height={536}
          alt=""
        />
      </div>
      <div className="bg-[#E6F0EB] lg:px-36 lg:py-12 flex flex-col gap-10 px-6 py-8">
        <h1 className="lg:text-left font-bold text-[#006C39] lg:text-[32px text-2xl text-center lg:block hidden ">
          Kegiatan Tahunan
        </h1>
        <Image
          src="/image/kegiatan-tahunan.png"
          className=" lg:block hidden"
          width={1150}
          height={282}
          alt=""
        />
        <Image
          src="/image/kegiatan-3.png"
          width={328}
          className=" lg:hidden block mx-auto"
          height={536}
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
}
