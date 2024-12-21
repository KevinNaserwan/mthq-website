import Image from "next/image";
import Button from "./button";

export default function CardBerita() {
  return (
    <div className="w-[350px] h-[450px] relative shadow-lg rounded-lg">
      <Image
        src="/image/jumbotron/2.jpeg"
        alt="image"
        layout="fill"
        objectFit="cover"
        className="rounded-lg h-[20%] w-full"
      />
      <div className=" absolute z-10 bg-white flex flex-col items-start bottom-0 gap-3 p-4 rounded-b-lg">
        <div className=" flex flex-row justify-between w-full">
          <h1 className=" font-bold text-sm text-[#006C39]">Berita</h1>
          <h1 className=" font-bold text-sm text-[#006C39]">
            Senin, 03 Des 2024
          </h1>
        </div>
        <h1 className=" font-bold text-black text-lg">
          Wisuda Akbar Santri Tahfidz 2024
        </h1>
        <p className="text-black text-xs">
          Perjalanan panjang penuh doa dan usaha akhirnya terbayar. Wisuda Akbar
          Santri Tahfidz MTHQ 2024 menjadi puncak kebanggaan bagi...
        </p>
        <Button text="Baca Selengkapnya" />
      </div>
    </div>
  );
}
