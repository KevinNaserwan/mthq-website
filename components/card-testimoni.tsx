import Image from "next/image";
import { useState } from "react";
import React from "react";

interface CardTestimoniProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  image: string;
  testimony: string;
}

export default function CardTestimoni({
  name,
  role,
  image,
  testimony,
  ...props
}: CardTestimoniProps) {
  const [imgError, setImgError] = useState(false);
  return (
    <div
      className="relative flex flex-col lg:w-[320px] lg:h-[470px] h-[470px] w-[260px] justify-start bg-white items-center shadow-xl p-8 rounded-lg border border-gray-100"
      {...props}
    >
      <div className="absolute -top-12 flex justify-center w-full">
        <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-100 flex items-center justify-center">
          <Image
            alt="image testimoni"
            src={imgError ? "/image/testimoni/1.png" : image}
            width={90}
            height={90}
            className="object-cover w-full h-full"
            onError={() => setImgError(true)}
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-10 w-full">
        <Image
          src="/icon/testimoni.svg"
          alt="testimoni"
          width={23}
          height={17}
          className="mb-2"
        />
        <h1 className="font-bold text-lg text-black text-center mb-1">
          {name}
        </h1>
        <h2 className="font-medium text-sm text-[#595959] italic text-center mb-2">
          {role}
        </h2>
        <div className="text-center text-black mt-2 text-base leading-relaxed max-h-[180px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#BFBFBF] scrollbar-track-[#F3F3F3] px-2 relative">
          <p>{testimony}</p>
          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
        <span className="text-xs text-gray-400 mt-2">
          Scroll untuk membaca lebih lanjut
        </span>
      </div>
    </div>
  );
}
