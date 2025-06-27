"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <div data-aos="fade-down">
        <Navbar />
      </div>
      <div data-aos="fade-up">
        <Jumbotron />
      </div>
      <div data-aos="fade-up">
        <Welcome />
      </div>
      <div data-aos="fade-up">
        <Pendaftaran />
      </div>
      <div data-aos="fade-up">
        <Keunggulan />
      </div>
      <div data-aos="fade-up">
        <Fasilitas />
      </div>
      <div data-aos="fade-up">
        <VisiMisi />
      </div>
      <div data-aos="fade-up">
        <Asas />
      </div>
      <div data-aos="fade-up">
        <Berita />
      </div>
      <div data-aos="fade-up">
        <Galeri />
      </div>
      <div data-aos="fade-up">
        <Testimoni />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </div>
  );
}
