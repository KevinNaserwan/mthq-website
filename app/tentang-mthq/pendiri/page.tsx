import Asas from "@/components/beranda/asas";
import VisiMisi from "@/components/beranda/visi-misi";
import Welcome from "@/components/beranda/welcome";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import Image from "next/image";

export default function Pendiri() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu
        title="Pendiri"
        mainCategory="Tentang MTHQ"
        currentPage="Pendiri"
      />
      <div className="lg:px-36 lg:py-16 bg-[#E6F0EB]">
        <h1 className=" py-16 lg:py-0 w-[360px] mx-auto lg:w-full text-start lg:text-center font-bold text-base text-black">
          MTHQ didirikan pada 1 Mei 2013 di Malaysia oleh empat pendiri :
        </h1>
        <div className=" w-[300px] mx-auto lg:w-full lg:flex lg:flex-row flex-col flex-nowrap lg:flex-wrap lg:gap-24 lg:items-center lg:justify-center mt-10">
          <div>
            <Image
              alt="Pendiri 1"
              src="/image/pendiri/1.svg"
              className="lg:w-[385px] lg:h-[214px]"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              alt="Pendiri 2"
              src="/image/pendiri/2.svg"
              className="lg:w-[385px] lg:h-[214px] lg:py-0 py-10"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              alt="Pendiri 3"
              src="/image/pendiri/3.svg"
              className="lg:w-[385px] lg:h-[214px]"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              alt="Pendiri 4"
              src="/image/pendiri/4.svg"
              className="lg:w-[385px] lg:h-[214px] lg:py-0 py-10"
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
