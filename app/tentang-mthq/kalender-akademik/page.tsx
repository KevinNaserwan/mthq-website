"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import Image from "next/image";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/utils/AxiosInstances";

interface KalenderAkademik {
  id: number;
  nama_attribute: string;
  tipe_konten: string;
  konten_teks: string | null;
  konten_gambar: string | null;
}

export default function KalenderAkademikPage() {
  const [items, setItems] = useState<KalenderAkademik[]>([]);

  useEffect(() => {
    axiosInstance
      .get("/api/kalender-akademik")
      .then((res) => setItems(res.data.data ?? []))
      .catch(() => {});
  }, []);

  const gambarItems = items.filter((item) => item.konten_gambar);
  const downloadItem = gambarItems[0];

  const now = new Date();
  const startYear = now.getMonth() >= 6 ? now.getFullYear() : now.getFullYear() - 1;
  const tahunAkademik = `${startYear}/${startYear + 1}`;

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <NavbarMenu
        title="Kalender Akademik"
        mainCategory="Tentang MTHQ"
        currentPage="Kalender Akademik"
      />
      <div className="bg-[#E6F0EB] lg:py-28">
        <div className="lg:w-[1200px] mx-auto py-10 px-10 bg-white rounded-xl">
          <h1 className="w-[360px] mx-auto lg:w-full text-start lg:text-center font-bold text-2xl text-[#006C39]">
            Kalender Akademik MTHQ {tahunAkademik}
          </h1>

          {gambarItems.length > 0 ? (
            <div className="w-[300px] mx-auto lg:w-full lg:flex lg:flex-row flex-col flex-nowrap lg:flex-wrap lg:items-center lg:gap-6 lg:justify-center mt-10">
              {gambarItems.map((item) => (
                <div key={item.id}>
                  <Image
                    alt={item.nama_attribute}
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL || "https://backend.mthq-bangka.com"}/storage/${item.konten_gambar}`}
                    className="lg:w-[240px] lg:h-[280px]"
                    width={300}
                    height={200}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 mt-10">
              Belum ada data kalender akademik.
            </p>
          )}

          {downloadItem && (
            <div className="mt-8 flex justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_BACKEND_URL || "https://backend.mthq-bangka.com"}/api/kalender-akademik/${downloadItem.id}/download`}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-[#006C39] hover:bg-[#018B36] text-white font-semibold py-3 px-6 rounded-lg shadow transition-colors duration-200"
              >
                Download Kalender Akademik
              </a>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
