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

  // Filter detail sesuai id
  const filteredDetail = detail.filter((item) => item.list_berita_id === id);
  const beritaUtama = filteredDetail[0];

  // Ambil semua gambar dalam urutan
  const gambarList = filteredDetail.filter((item) => item.konten_gambar);
  const gambarKedua = gambarList[1];
  const gambarKeduaId = gambarKedua?.id;

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
        {/* Gambar kedua di bawah tanggal jika ada dua atau lebih, jika hanya satu gambar tetap di bawah tanggal */}
        {gambarList.length === 1 && gambarList[0] && (
          <div className="mb-6">
            <Image
              src={`https://backend.mthq-bangka.site/storage/${gambarList[0].konten_gambar}`}
              alt={gambarList[0].nama_attribute || "Gambar Berita"}
              width={800}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        )}
        {gambarList.length > 1 && gambarKedua && (
          <div className="mb-6">
            <Image
              src={`https://backend.mthq-bangka.site/storage/${gambarKedua.konten_gambar}`}
              alt={gambarKedua.nama_attribute || "Gambar Berita"}
              width={800}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        )}
        {/* Render paragraf dan gambar lain di antara paragraf, skip gambar kedua jika ada lebih dari satu */}
        {filteredDetail.map((item) => {
          // Jika gambar kedua, skip karena sudah ditampilkan di atas
          if (gambarList.length > 1 && item.id === gambarKeduaId) return null;
          return (
            <div key={item.id} className="mb-6">
              {item.konten_gambar && (
                <div className="mb-2">
                  <Image
                    src={`https://backend.mthq-bangka.site/storage/${item.konten_gambar}`}
                    alt={item.nama_attribute || "Gambar Berita"}
                    width={800}
                    height={400}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              )}
              {item.konten_teks && (
                <p className="text-lg leading-relaxed">{item.konten_teks}</p>
              )}
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
