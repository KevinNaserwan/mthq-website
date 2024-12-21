import Image from "next/image";
import Button from "../button";

export default function Galeri() {
  return (
    <div className="lg:px-36 lg:py-32 bg-[#E6F0EB] flex flex-col items-center">
      <h1 className="text-[#006C39] font-bold text-center text-[32px]">
        Galeri
      </h1>
      <Image
        src="/image/galeri.png"
        className="lg:w-[1128px] lg:h-[430px] my-12"
        width={1128}
        height={430}
        alt=""
      />
      <div className="flex justify-center">
        {" "}
        <Button text="Selengkapnya" />
      </div>
    </div>
  );
}
