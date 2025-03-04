import Image from "next/image";
import Button from "../button";

export default function Galeri() {
  return (
    <div className="lg:py-32 py-8 px-6 bg-[#E6F0EB] flex flex-col items-center">
      <div className="lg:w-[1200px] mx-auto">
        <h1 className="text-[#006C39] font-bold text-center lg:text-[32px] text-2xl">
          Galeri
        </h1>
        <Image
          src="/image/galeri.png"
          className="lg:w-[1128px] lg:h-[430px] my-12 hidden lg:block mx-auto"
          width={1128}
          height={430}
          alt=""
        />
        <Image
          src="/image/galeri-mobile.png"
          className="lg:w-[1128px] lg:h-[430px] my-6 block lg:hidden mx-auto"
          width={1128}
          height={430}
          alt=""
        />
        <div className="flex justify-center">
          {" "}
          <Button href="/publikasi/galeri" text="Selengkapnya" />
        </div>
      </div>
    </div>
  );
}
