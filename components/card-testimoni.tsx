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
      className="relative flex flex-col lg:w-[320px] lg:h-[700px] h-[700px] w-[260px] justify-start bg-white items-center shadow-xl p-8 rounded-lg border border-gray-100"
      {...props}
    >
      <div className="absolute -top-12 flex justify-center w-full">
        <Image
          alt="image testimoni"
          src={imgError ? "/image/testimoni/1.png" : image}
          width={90}
          height={90}
          className="rounded-full border-4 border-white shadow-md bg-gray-100"
          onError={() => setImgError(true)}
        />
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
        <p className="text-center text-black mt-2 text-base leading-relaxed">
          {testimony}
        </p>
      </div>
    </div>
  );
}
