import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import Image from "next/image";

export default function Pimpinan() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu
        title="Pimpinan MTHQ"
        mainCategory="Tentang MTHQ"
        currentPage="Pimpinan"
      />
      <div className="lg:w-[1200px] mx-auto lg:py-16 bg-[white]">
        <div className=" w-[300px] mx-auto lg:w-full lg:flex lg:flex-row flex-col flex-nowrap lg:flex-wrap lg:gap-24 lg:items-center lg:justify-center mt-10">
          <div>
            <Image
              alt="Pimpinan 1"
              src="/image/pimpinan1.svg"
              className="lg:w-[1128px] lg:h-[400px] lg:block hidden"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              alt="Pimpinan 2"
              src="/image/pimpinan2.svg"
              className="lg:w-[1128px] lg:h-[400px] lg:py-0 py-10 lg:block hidden"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              alt="Pimpinan 1"
              src="/image/pimpinan1-mobile.png"
              className="lg:w-[1128px] lg:h-[400px] lg:hidden block"
              width={300}
              height={200}
            />
          </div>
          <div>
            <Image
              alt="Pimpinan 2"
              src="/image/pimpinan2-mobile.png"
              className="lg:w-[1128px] lg:h-[400px] lg:py-0 py-10 lg:hidden block"
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
