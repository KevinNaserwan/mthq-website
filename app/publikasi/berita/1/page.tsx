import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import Image from "next/image";

export default function Berita() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu
        title="Berita MTHQ"
        mainCategory="Publikasi"
        currentPage="Berita"
      />
      <div className="flex flex-row flex-wrap gap-16 grid-cols-4 justify-center items-center lg:my-24 my-12">
        <Image
          className=" lg:block hidden"
          alt=""
          src="/image/sectionNews.png"
          width={1120}
          height={1340}
        />
        <Image
          className=" lg:hidden block"
          alt=""
          src="/image/sectionNewsMobile.png"
          width={330}
          height={1620}
        />
      </div>
      <Footer />
    </div>
  );
}
