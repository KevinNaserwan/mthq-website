import CardMisi from "@/components/card-misi";
import CardProgram from "@/components/card-program";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import Image from "next/image";

export default function MTHQ2() {
  const misiData = [
    "Mencetak generasi yang berakhlakul karimah dan hafiz Al-Qur’an.",
    "Menyelenggarakan Bimbingan Tahsin dan Tahfizh Al-Qur’an.",
    "Memberikan pendidikan tahfidz Alquran yang berkualitas dan menghasilkan santri yang mampu membaca, menghafal, dan memahami Alquran dengan baik.",
    "Membentuk santri yang memiliki kepribadian Qur’ani serta mampu menjalankan tuntunan agama dengan baik.",
    "Menyiapkan peserta didik yang terampil berbahasa Arab serta mampu membaca kitab kuning.",
  ];
  const keunggulanData = [
    {
      icon: "/icon/program.svg",
      text: "Tahsin Al-Qur'an",
    },
    {
      icon: "/icon/program.svg",
      text: "Tahfidz Al-Qur'an",
    },
    {
      icon: "/icon/program.svg",
      text: "Tadabbur Al-Qur'an",
    },
    {
      icon: "/icon/program.svg",
      text: "Kajian Fiqih, Aqidah, Akhlak, Hadis, Bahasa Arab",
    },
  ];
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu title="MTHQ2" mainCategory="Beranda" currentPage="MTHQ2" />
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:w-[1200px] mx-auto lg:py-32 px-6 py-8 bg-white">
        <div className="lg:w-[60%]">
          <h1 className=" font-semibold text-[#006C39] lg:text-[32px] text-2xl ">
            MTHQ 2
          </h1>
          <p className=" font-bold text-base text-[#006C39] lg:mt-2 mt-1">
            “Program Khusus Tahfidz dan Kitab”
          </p>
          <p className=" lg:font-medium text-black lg:text-[16px] lg:mt-4 lg:w-[90%] text-justify hidden lg:block">
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
            src="/image/mthq2.png"
            alt="image"
            className=" lg:w-[470px] lg:h-[276px] lg:my-0 my-5"
            width={470}
            height={276}
          />
        </div>
        <p className=" lg:font-medium text-black lg:text-[16px] lg:mt-4 lg:w-[90%] text-justify lg:hidden block mt-5">
          MTHQ 2 adalah program yang dirancang khusus untuk santri yang ingin
          fokus menghafal Al-Qur’an sekaligus mendalami kitab-kitab keislaman,
          tanpa mengikuti pendidikan formal. Program ini memberikan pengalaman
          belajar Islami yang terarah dan mendalam, mencetak generasi Qur’ani
          yang hafal dengan kuat (mutqin) dan memiliki pemahaman agama yang
          mendalam.
        </p>
      </div>
      <div className=" bg-[#E6F0EB] w-full lg:py-32 px-6 py-8">
        <div className="lg:w-[1200px] mx-auto">
          <h1 className=" font-semibold text-[#006C39] lg:text-[32px] text-2xl text-center">
            Program MTHQ 2
          </h1>
          <div className=" lg:flex-row justify-center flex flex-col items-center lg:items-stretch gap-6 mt-12">
            {keunggulanData.map((item, index) => (
              <CardProgram key={index} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>
      </div>
      <div className=" bg-white lg:w-[1200px] mx-auto lg:py-32 flex flex-col gap-20 px-6 py-8">
        <div className=" flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-8">
          <div className=" flex flex-col justify-start">
            <div className=" flex flex-row items-center gap-4">
              <div className="lg:w-16 lg:h-16 w-12 h-12 rounded-full bg-[#006C39] flex-shrink-0">
                <Image
                  src="/icon/visi.svg"
                  className="p-2 lg:w-[100px] lg:h-[60px] w-[60px] h-[50px]"
                  alt="icon"
                  width={100}
                  height={60}
                />
              </div>
              <p className="font-bold text-[32px] text-[#006C39]">Visi</p>
            </div>
            <p className=" font-semibold  text-lg text-black mt-5">
              “Terwujudnya Penghafal Qur&apos;an yang berakhlak mulia”
            </p>
          </div>
          <Image
            alt="Image Visi"
            src="/image/visi.png"
            width={407}
            height={218}
          />
        </div>
        <div className=" flex flex-row items-center justify-between">
          <div className=" flex flex-col justify-start">
            <div className=" flex flex-row items-center gap-4">
              <div className=" lg:w-16 lg:h-16 w-12 h-12 rounded-full bg-[#006C39]">
                <Image
                  src="/icon/misi.svg"
                  className="p-2 lg:w-[100px] lg:h-[60px] w-[60px] h-[50px]"
                  alt="icon"
                  width={100}
                  height={60}
                />
              </div>
              <p className="font-bold text-[32px] text-[#006C39]">Misi</p>
            </div>
            <div className="lg:grid lg:grid-flow-row lg:grid-cols-5 flex flex-col gap-10 lg:gap-5 mt-12">
              {misiData.map((text, index) => (
                <CardMisi key={index} text={text} number={index + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E6F0EB] lg:px-36 lg:py-32 flex flex-col gap-10 px-6 py-8">
        <div className="lg:w-[1200px] mx-auto ">
          <h1 className="lg:text-left font-bold text-[#006C39] lg:text-[32px text-2xl text-center ">
            Jadwal Harian MTHQ 2
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
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3987.394926084502!2d105.95307537496726!3d-1.9970782979849035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwNTknNDkuNSJTIDEwNcKwNTcnMjAuMyJF!5e0!3m2!1sen!2sid!4v1734874984621!5m2!1sen!2sid"
          className="lg:ml-auto w-full h-[300px]"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}
