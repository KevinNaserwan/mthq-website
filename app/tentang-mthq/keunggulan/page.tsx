import CardKeunggulan from "@/components/card-keunggulan";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import Image from "next/image";

export default function keunggulan() {
  const keunggulanData = [
    {
      icon: "/icon/keunggulan/1.svg",
      text: "Kurikulum terpadu: tahfidz Qur'an mutqin, kurikulum pesantren modern dan kitab kuning, kurikulum formal MTs dan MA",
    },
    {
      icon: "/icon/keunggulan/2.svg",
      text: "Pendidikan Karakter Berbasis Pesantren",
    },
    {
      icon: "/icon/keunggulan/3.svg",
      text: "4T Qur'an: Tahsin, Tahfidz, Tafsir dan Tadabbur Qur'an",
    },
    {
      icon: "/icon/keunggulan/4.svg",
      text: "Pembiasaan Ibadah Fardhu dan sunah",
    },
    {
      icon: "/icon/keunggulan/5.svg",
      text: "English & Arabic Daily",
    },
    {
      icon: "/icon/keunggulan/6.svg",
      text: "Riset Bahtsul Masail dan Karya Ilmiah",
    },
    {
      icon: "/icon/keunggulan/7.svg",
      text: "Pembelajaran Berbasis ICT/Digital dengan Maktabah Syamilah",
    },
    {
      icon: "/icon/keunggulan/8.svg",
      text: "Kemandirian Ekonomi dengan berwirausaha pada kelas akhir",
    },
    {
      icon: "/icon/keunggulan/9.svg",
      text: "Amaliyatuttadris/praktek mengajar",
    },
  ];
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu
        title="Keunggulan"
        mainCategory="Tentang MTHQ"
        currentPage="Keunggulan"
      />
      <div className="lg:px-36 lg:py-24 lg:bg-white">
        <h1 className="text-black font-normal text-justify text-[16px]">
          MTHQ hadir sebagai pusat pendidikan terpadu yang menekankan karakter
          islami dan kompetensi tinggi, membentuk santri yang siap menghadapi
          tantangan masa depan. Dengan pendekatan yang menggabungkan pendidikan
          agama, ilmu pengetahuan, teknologi, dan keterampilan wirausaha, MTHQ
          mencetak generasi berilmu, berakhlak, dan mandiri dalam menjalani
          kehidupan.
        </h1>
        <div className=" mt-12">
          <div className=" grid grid-flow-row gap-14 grid-cols-3">
            {keunggulanData.map((item, index) => (
              <CardKeunggulan key={index} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
