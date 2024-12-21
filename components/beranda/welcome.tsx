export default function Welcome() {
  return (
    <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:px-36 lg:py-32 lg:bg-white">
      <div>
        <h1 className=" lg:font-semibold text-[#006C39] lg:text-[32px]">
          Selamat Datang
        </h1>
        <p className=" lg:font-medium text-black lg:text-[16px] lg:mt-4 lg:w-[90%] text-justify">
          Ma&apos;had Tahfidz Hidayatul Qur’an Bangka (MTHQ) adalah lembaga
          pendidikan berbadan hukum yang berperan sebagai pesantren modern,
          memadukan program tahfidz Al-Qur’an, pengajian kitab keagamaan,
          pembiasaan berbahasa Arab dan Inggris, serta pendidikan formal. MTHQ
          berlokasi di Jalan Raya Mentok-Pangkalpinang, Desa Puding Besar,
          Kecamatan Puding Besar, Kabupaten Bangka, Provinsi Bangka Belitung.
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
        <iframe
          className="lg:w-[500px] lg:h-[315px] w-full h-[200px] border-none"
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
