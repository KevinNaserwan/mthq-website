import CardKeunggulan from "../card-keunggulan";

export default function Keunggulan() {
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
    <div className="lg:w-[1200px] mx-auto lg:py-32 py-8 px-6 bg-white">
      <h1 className="text-[#006C39] font-bold text-center lg:text-[32px] text-2xl">
        Keunggulan MTHQ
      </h1>
      <div className=" mt-12">
        <div className=" lg:grid lg:grid-flow-row lg:gap-14 lg:grid-cols-3 flex flex-col gap-6">
          {keunggulanData.map((item, index) => (
            <CardKeunggulan key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
