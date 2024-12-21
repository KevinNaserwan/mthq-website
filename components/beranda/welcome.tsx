export default function Welcome() {
  return (
    <div className="flex lg:flex-row flex-col-reverse lg:items-center lg:justify-center lg:px-36 lg:py-32 bg-white py-24">
      <div className=" px-6">
        <h1 className=" font-semibold text-[#006C39] lg:text-[32px] text-2xl mt-4">
          Selamat Datang
        </h1>
        <p className=" font-medium text-black text-[16px] mt-4 lg:w-[90%] text-justify">
          Ma&apos;had Tahfidz Hidayatul Qur’an Bangka (MTHQ) adalah lembaga
          pendidikan berbadan hukum yang berperan sebagai pesantren modern,
          memadukan program tahfidz Al-Qur’an, pengajian kitab keagamaan,
          pembiasaan berbahasa Arab dan Inggris, serta pendidikan formal. MTHQ
          berlokasi di Jalan Raya Mentok-Pangkalpinang, Desa Puding Besar,
          Kecamatan Puding Besar, Kabupaten Bangka, Provinsi Bangka Belitung.
        </p>
        <p className=" font-medium text-black text-[16px] mt-4 lg:w-[90%] text-justify">
          Lembaga ini didirikan pada 1 Mei 2013 di Malaysia oleh empat pendiri
          dengan visi dan komitmen yang sama. Dengan semangat pendidikan Islam
          yang progresif, MTHQ bertujuan mencetak generasi berakhlak mulia,
          cerdas, dan memiliki pemahaman keagamaan yang mendalam sehingga siap
          menghadapi tantangan dunia modern.
        </p>
      </div>
      <div className="">
        <iframe
          className="lg:w-[500px] lg:h-[315px] w-[330px] h-[200px] border-none mx-auto"
          src="https://www.youtube.com/embed/77q5jiZkuJI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
