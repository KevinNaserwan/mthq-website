import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";

export default function Berita() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu
        title="Berita MTHQ"
        mainCategory="Publikasi"
        currentPage="Berita"
      />
      <div className="lg:px-36 lg:py-24 lg:bg-white">
        <h1 className="text-black font-normal text-justify text-[16px]">
          Di MTHQ, santri mengikuti beragam kegiatan harian, pekanan, hingga
          tahunan yang dirancang untuk membangun kedisiplinan, memperdalam ilmu
          agama, serta mengembangkan keterampilan dan bakat.
        </h1>
        <div className=" mt-12">
          <div className=" flex flex-row flex-wrap gap-16 grid-cols-4 justify-center items-center"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
