"use client";

import Image from "next/image";
import Button from "./button";
import React from "react";

interface CardBeritaProps extends React.HTMLAttributes<HTMLDivElement> {
  idCard: number;
  judul_berita: string;
  tanggal_upload: string;
  highlight_berita: string;
  konten_gambar: string | null;
}

export default function CardBerita({
  idCard,
  judul_berita,
  tanggal_upload,
  highlight_berita,
  konten_gambar,
  ...props
}: CardBeritaProps) {
  const imageUrl = konten_gambar
    ? `https://backend.mthq-bangka.site/storage/${konten_gambar}`
    : "/image/jumbotron/2.jpeg";

  return (
    <div
      className="w-[350px] h-[450px] relative shadow-lg rounded-lg mx-auto overflow-hidden flex flex-col"
      {...props}
    >
      <div className="relative w-full h-[180px] flex-shrink-0 bg-gray-100">
        <Image
          src={imageUrl}
          alt="image"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
        />
      </div>
      <div className="absolute z-10 bg-white flex flex-col items-start bottom-0 gap-3 p-4 rounded-b-lg w-full min-h-[270px]">
        <div className="flex flex-row justify-between w-full">
          <h1 className="font-bold text-sm text-[#006C39]">Berita</h1>
          <h1 className="font-bold text-sm text-[#006C39]">
            {new Date(tanggal_upload).toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "2-digit",
            })}
          </h1>
        </div>
        <h1 className="font-bold text-black text-lg">{judul_berita}</h1>
        <p className="text-black text-xs">{highlight_berita}</p>
        <Button text="Baca Selengkapnya" href={`/publikasi/berita/${idCard}`} />
      </div>
    </div>
  );
}
