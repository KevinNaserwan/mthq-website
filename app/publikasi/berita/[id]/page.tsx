"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getDetailBerita } from "@/api/beritaApi";
import type { DetailBerita } from "@/types/berita";
import { useParams } from "next/navigation";

export default function BeritaDetail() {
  const params = useParams();
  const id = params.id as string;
  const [detail, setDetail] = useState<DetailBerita[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getDetailBerita(id)
      .then((data) => setDetail(data))
      .catch(() => setError("Gagal memuat detail berita"))
      .finally(() => setLoading(false));
  }, [id]);

  const filteredDetail = detail.filter((item) => String(item.list_berita_id) === id);
  const beritaUtama = filteredDetail[0];
  const gambarBloks = filteredDetail.filter((item) => item.konten_gambar);
  const teksBloks = filteredDetail.filter((item) => item.konten_teks);

  if (loading) return <div className="min-h-screen">Loading...</div>;
  if (error) return <div className="min-h-screen">{error}</div>;
  if (!beritaUtama)
    return <div className="min-h-screen">Berita tidak ditemukan.</div>;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <NavbarMenu
        title="Berita MTHQ"
        mainCategory="Publikasi"
        currentPage="Berita"
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">
          {beritaUtama.list_berita?.judul_berita}
        </h1>
        <div className="text-gray-500 mb-4">
          {new Date(
            beritaUtama.list_berita?.tanggal_upload || ""
          ).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
        </div>
        {gambarBloks.map((item) => (
          <div key={item.id} className="mb-6">
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL || "https://backend.mthq-bangka.com"}/storage/${item.konten_gambar}`}
              alt={item.nama_attribute || "Gambar Berita"}
              width={800}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        ))}
        {teksBloks.map((item) => (
          <div key={item.id} className="mb-6">
            <p className="text-lg leading-relaxed">{item.konten_teks}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
