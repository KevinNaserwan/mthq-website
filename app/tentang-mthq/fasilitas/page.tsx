import CardFasilitas from "@/components/card-fasilitas";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";

export default function Fasilitas() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu
        title="Fasilitas"
        mainCategory="Tentang MTHQ"
        currentPage="Fasilitas"
      />
      <div className="lg:px-36 lg:py-24 lg:bg-white">
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
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
            <CardFasilitas />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
