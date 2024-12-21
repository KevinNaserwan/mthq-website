import Asas from "@/components/beranda/asas";
import Berita from "@/components/beranda/berita";
import Fasilitas from "@/components/beranda/fasilitas";
import Galeri from "@/components/beranda/galeri";
import Jumbotron from "@/components/beranda/jumbotron";
import Keunggulan from "@/components/beranda/keunggulan";
import Pendaftaran from "@/components/beranda/pendaftaran";
import Testimoni from "@/components/beranda/testimoni";
import VisiMisi from "@/components/beranda/visi-misi";
import Welcome from "@/components/beranda/welcome";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Jumbotron />
      <Welcome />
      <Pendaftaran />
      <Keunggulan />
      <Fasilitas />
      <VisiMisi />
      <Asas />
      <Berita />
      <Galeri />
      <Testimoni />
      <Footer />
    </div>
  );
}
