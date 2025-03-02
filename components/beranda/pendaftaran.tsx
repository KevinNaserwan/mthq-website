"use client";

import { useState } from "react";
import Accordion from "../accordion";
import Button from "../button";

export default function Pendaftaran() {
  const handleWhatsAppClick = () => {
    // WhatsApp phone number with country code
    const phoneNumber = "6287749181562"; // Formatted without spaces or dashes
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };
  const content1: string[] = [
    "Pendaftaran Online: 11 November – 14 Desember 2024",
    "Tes Seleksi: 12 Januari 2025",
    "Pengumuman Hasil Seleksi: 19 Januari 2025",
    "Daftar Ulang: 3 – 8 Februari 2025",
  ];

  const alurCaraPendaftaran: string[] = [
    "Masuk ke Grup PSB: Akses grup WhatsApp PSB dengan menekan tombol daftar sekarang pada website.",
    "Unduh Aplikasi: Instal aplikasi 'MTHQ Bangka Belitung' di Play Store untuk pendaftaran secara online.",
    "Lengkapi Formulir: Isi data secara lengkap dan unggah dokumen pendukung (foto akta kelahiran, kartu keluarga, dan pas foto ukuran 3x4).",
    "Biaya Pendaftaran: Rp 200.000,- (melalui mekanisme yang tersedia di aplikasi).",
    "Konfirmasi Pendaftaran: Jika mengalami kendala, hubungi narahubung:",
    "Ustadzah Nurjanah: 0857 6880 7514",
    "Ustadzah Fataria: 0857 6939 8170",
  ];

  const biayapendidikan: string[] = [
    "Wakaf Pembangunan: Rp 2.000.000,-",
    "Keperluan Tahunan: Rp 1.360.000, (seperti seragam, buku, dll).",
  ];

  // State to manage which accordion is open, set default to 2 (Jadwal Pendaftaran dan Seleksi)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(2);

  // Toggle active accordion
  const handleAccordionClick = (index: number) => {
    if (activeAccordion === index) {
      setActiveAccordion(null); // If the same accordion is clicked, close it
    } else {
      setActiveAccordion(index); // Open the clicked accordion
    }
  };

  return (
    <div
      className="relative w-screen lg:py-32 py-8 bg-cover"
      style={{ backgroundImage: "url('/image/daftar.jpeg')" }}
    >
      <div className="absolute inset-0 bg-[#E6F0EBE5] z-10"></div>
      <div className="lg:grid lg:grid-flow-row lg:grid-cols-2 flex flex-col lg:gap-16 gap-6 lg:w-[1200px] mx-auto h-full z-20 px-6">
        <div className="flex flex-col items-start justify-center text-white z-20">
          <h2 className="text-2xl lg:text-4xl font-semibold text-[#019A3C] lg:w-[600px] w-full mt-2">
            Pendaftaran Santri Baru 2025 Telah Dibuka!
          </h2>
          <p className="text-black font-medium mt-4 text-justify">
            Kesempatan untuk bergabung di Ma&apos;had Tahfidz Hidayatul Qur’an
            (MTHQ) Bangka sudah dimulai! Raih masa depan cemerlang dengan
            pendidikan Islami yang modern, memadukan tahfidz Al-Qur’an,
            pengembangan karakter, dan kemampuan bahasa Arab serta Inggris.
          </p>
          <div className="mt-6">
            <Button text="Daftar Sekarang" onClick={handleWhatsAppClick} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-white z-20">
          <Accordion
            title="Alur dan Cara Pendaftaran Online"
            content={alurCaraPendaftaran}
            isActive={activeAccordion === 1}
            onClick={() => handleAccordionClick(1)}
          />
          <Accordion
            title="Jadwal Pendaftaran dan Seleksi"
            content={content1}
            isActive={activeAccordion === 2}
            onClick={() => handleAccordionClick(2)}
          />
          <Accordion
            title="Biaya Pendidikan"
            content={biayapendidikan}
            isActive={activeAccordion === 3}
            onClick={() => handleAccordionClick(3)}
          />
        </div>
      </div>
    </div>
  );
}
