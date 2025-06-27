"use client";
import { useEffect, useState } from "react";
import CardBerita from "../card-berita";
import { getListBerita } from "@/api/beritaApi";
import type { Berita as BeritaType } from "@/types/berita";

export default function BerandaBerita() {
  const [berita, setBerita] = useState<BeritaType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getListBerita()
      .then((data) => {
        // Urutkan terbaru dan ambil maksimal 3
        const sorted = data.sort(
          (a, b) =>
            new Date(b.tanggal_upload).getTime() -
            new Date(a.tanggal_upload).getTime()
        );
        setBerita(sorted.slice(0, 3));
      })
      .catch(() => setError("Gagal memuat berita"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="lg:w-[1200px] mx-auto lg:py-32 px-6 py-8 bg-white">
      <h1 className="text-[#006C39] font-bold text-center lg:text-[32px] text-2xl">
        Berita dan Artikel
      </h1>
      <div className="lg:grid lg:grid-flow-row lg:grid-cols-3 flex flex-col items-center gap-10 lg:mt-16 mt-8">
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {!loading &&
          !error &&
          berita.map((item) => (
            <CardBerita
              key={item.id.toString()}
              idCard={item.id}
              judul_berita={item.judul_berita}
              tanggal_upload={item.tanggal_upload}
              highlight_berita={item.highlight_berita}
              konten_gambar={item.konten_gambar}
              data-aos="fade-up"
            />
          ))}
      </div>
    </div>
  );
}
