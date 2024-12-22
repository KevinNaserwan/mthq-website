import Image from "next/image";
import CardKeunggulan from "../card-keunggulan";

export default function VisiMisi() {
  return (
    <div className="lg:w-[1200px] mx-auto lg:py-32 py-8 bg-white lg:grid lg:grid-flow-row lg:grid-cols-3  items-center px-6">
      <div className=" flex flex-col items-start gap-5">
        <h1 className=" font-bold lg:text-[32px] text-2xl text-[#006C39]">
          Visi
        </h1>
        <CardKeunggulan
          icon="/icon/visi.svg"
          text="Terwujudnya kader ulama yang berakhlakul karimah dan berilmu tinggi"
        />
        <CardKeunggulan
          icon="/icon/visi.svg"
          text="Terlahirnya penghafal Qur’an Mutqin yang faham dan mengamalkan ajaran Islam"
        />
        <CardKeunggulan
          icon="/icon/visi.svg"
          text="Terbentuknya generasi yang menguasai Bahasa Arab dan Inggris serta teknologi"
        />
      </div>
      <div className=" my-16 lg:my-0">
        <Image
          src="/image/visi-misi.png"
          className=" mx-auto"
          alt="visi-misi"
          width={311}
          height={260}
        />
      </div>
      <div className=" flex flex-col items-start gap-5">
        <h1 className=" font-bold lg:text-[32px] text-2xl text-[#006C39]">
          Misi
        </h1>
        <CardKeunggulan
          icon="/icon/misi.svg"
          text="Mempersiapkan generasi yang hafal Al-Qur’an, berilmu, pengetahuan, berakhlak mulia, berakidah lurus dan berkhidmat kepada agama, masyarakat dan negara"
        />
        <CardKeunggulan
          icon="/icon/misi.svg"
          text="Mengajarkan ilmu pengetahuan agama dan umum menuju terbentuknya kader ulama yang taqwa"
        />
        <CardKeunggulan
          icon="/icon/misi.svg"
          text="Membiasakan berbahasa Arab dan Inggris serta menggunakan tekhnologi"
        />
      </div>
    </div>
  );
}
