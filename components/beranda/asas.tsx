import Image from "next/image";

export default function Asas() {
  return (
    <div className="lg:px-36 lg:py-32 py-8 px-6 bg-[#E6F0EB] lg:grid lg:rid-flow-row lg:grid-cols-3 flex flex-col gap-10">
      <div className=" flex flex-col justify-center bg-white items-center gap-4 p-5 rounded-lg">
        <Image src="/icon/profil/1.svg" alt="asas" width={50} height={50} />
        <h1 className=" font-bold text-[32px] text-black">Asas</h1>
        <p className=" text-justify text-black">
          Beraqidah Islam menurut faham Ahlussunnah wal Jama’ah Taat pada Agama
          dan Hukum, Berakhlaqul Karimah, Melaksanakan Kegiatan
          Dakwah/Pendidikan, serta tidak beraﬁliasi pada Partai Politik tertentu
          (Independen), Musyawarah dan kekeluargaan.
        </p>
      </div>
      <div className=" flex flex-col justify-center bg-white items-center gap-4 p-5 rounded-lg">
        <Image src="/icon/profil/2.svg" alt="asas" width={50} height={50} />
        <h1 className=" font-bold text-[32px] text-black">Landasan</h1>
        <p className=" text-justify text-black">
          Ma’had Tahﬁdz Hidayatul Qur’an (MTHQ) berlandaskan kepada Al-Qur’an
          dan Al-Hadits serta mengikut faham Ahlussunah wal jama’ah dan menganut
          madzhab Imam Syaﬁ’I namun tetap membenarkan 3 madzhab lainnya dengan
          tetap menjunjung aturan-aturan Negara.
        </p>
      </div>
      <div className=" flex flex-col justify-start bg-white items-center gap-4 p-5 rounded-lg">
        <Image src="/icon/profil/3.svg" alt="asas" width={50} height={50} />
        <h1 className=" font-bold text-[32px] text-black">Dasar</h1>
        <p className=" text-justify text-black">
          YAYASAN berdasarkan Akta Notaris dan didaftarkan di akta notaris no.
          43 tanggal 29 Oktober 2010 dan diperbaharui dengan akta notaris no 05
          tanggal 12 November 2020 notaris Dita Rahmasari SH.MKn.
        </p>
      </div>
    </div>
  );
}
