import Asas from "@/components/beranda/asas";
import VisiMisi from "@/components/beranda/visi-misi";
import Welcome from "@/components/beranda/welcome";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import Image from "next/image";

export default function Profil() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu
        title="Profil"
        mainCategory="Tentang MTHQ"
        currentPage="Profil"
      />
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:px-36 lg:py-32 lg:bg-white">
        <div className="lg:w-[60%]">
          <h1 className=" lg:font-semibold text-[#006C39] lg:text-[32px]">
            Profil MTHQ
          </h1>
          <p className=" lg:font-medium text-black lg:text-[16px] lg:mt-4 lg:w-[90%] text-justify">
            Ma'had Tahfidz Hidayatul Qur’an Bangka (MTHQ) adalah lembaga
            pendidikan berbadan hukum yang berperan sebagai pesantren modern,
            memadukan program tahfidz Al-Qur’an, pengajian kitab keagamaan,
            pembiasaan berbahasa Arab dan Inggris, serta pendidikan formal. MTHQ
            berlokasi di Jalan Raya Mentok-Pangkalpinang, Desa Puding Besar,
            Kecamatan Puding Besar, Kabupaten Bangka, Provinsi Bangka Belitung
          </p>
          <p className=" lg:font-medium text-black lg:text-[16px] lg:mt-4 lg:w-[90%] text-justify">
            Lembaga ini didirikan pada 1 Mei 2013 di Malaysia oleh empat pendiri
            dengan visi dan komitmen yang sama. Dengan semangat pendidikan Islam
            yang progresif, MTHQ bertujuan mencetak generasi berakhlak mulia,
            cerdas, dan memiliki pemahaman keagamaan yang mendalam sehingga siap
            menghadapi tantangan dunia modern.
          </p>
        </div>
        <div className="">
          <Image
            src="/image/profil.png"
            alt="image"
            className=" lg:w-[470px] lg:h-[276px]"
            width={470}
            height={276}
          />
        </div>
      </div>
      <Asas />
      <VisiMisi />
      <div className="lg:px-36 lg:py-32 bg-[#E6F0EB]  ">
        <div className=" flex lg:flex-row justify-around items-center">
          <div>
            <Image
              src="/image/motto.png"
              className="lg:w-[200px] lg:h-[214px]"
              alt="image"
              width={300}
              height={250}
            />
          </div>
          <div>
            <Image
              src="/image/motto-panca.png"
              className="lg:w-[550px] lg:h-[250px]"
              alt="image"
              width={300}
              height={250}
            />
          </div>
          <div>
            <Image
              src="/image/panca-jiwa.png"
              className="lg:w-[250px] lg:h-[250px]"
              alt="image"
              width={300}
              height={250}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
