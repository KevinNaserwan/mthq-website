"use client";

import { useEffect, useState } from "react";
import CardBerita from "@/components/card-berita";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import { getListBerita } from "@/api/beritaApi";
import type { Berita } from "@/types/berita";

export default function Berita() {
  const [berita, setBerita] = useState<Berita[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getListBerita()
      .then((data) => setBerita(data))
      .catch(() => setError("Gagal memuat berita"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu
        title="Berita MTHQ"
        mainCategory="Publikasi"
        currentPage="Berita"
      />
      <div className="lg:p-36 lg:pb-24 lg:pt-16 lg:bg-white">
        {/* <div className=" flex lg:flex-row flex-col gap-3 lg:gap-0 mx-3 lg:mx-0 lg:mt-0 mt-3 justify-between items-center">
          <div className=" flex lg:w-fit w-full lg:flex-row flex-col gap-3 items-center ">
            <div className=" flex lg:w-fit w-full flex-row items-center gap-2 rounded-full py-2 px-5 border">
              <Image alt="" src="/icon/time.png" width={20} height={20} />
              <p className=" font-medium text-base">Waktu Posting</p>
            </div>
            <div className=" flex lg:w-fit w-full flex-row items-center gap-2 rounded-full py-2 px-5 border">
              <Image alt="" src="/icon/kategori.png" width={20} height={20} />
              <p className=" font-medium text-base">Kategori</p>
            </div>
          </div>
          <div className="flex lg:w-fit w-full lg:flex-row flex-col">
            <div className=" flex lg:w-fit lg:gap-36 flex-row items-center  justify-between w-full rounded-full py-2 px-5 border">
              <p className=" font-medium text-base">Search</p>
              <Image alt="" src="/icon/search.png" width={20} height={20} />
            </div>
          </div>
        </div> */}
        {/* <div className="w-full h-[1px] bg-[#595959] opacity-50 mt-4 "></div> */}
        <div className=" lg:mt-12 mt-2 mb-10">
          {loading && <div className="text-center">Memuat berita...</div>}
          {error && <div className="text-center text-red-500">{error}</div>}
          <div className=" lg:grid lg:grid-flow-row lg:grid-cols-3 flex flex-col items-center gap-10 lg:mt-12 mt-8">
            {berita.map((item) => (
              <CardBerita
                key={item.id.toString()}
                idCard={item.id}
                judul_berita={item.judul_berita}
                tanggal_upload={item.tanggal_upload}
                highlight_berita={item.highlight_berita}
                konten_gambar={item.konten_gambar}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
