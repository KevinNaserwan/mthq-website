import Image from "next/image";

export default function CardKeunggulan({ icon, text }: CardKeunggulanProps) {
  return (
    <div className="inline-flex flex-row items-center gap-5 p-5 rounded-lg bg-[#E6F0EB] transition-colors duration-300 group hover:bg-[#006C39]">
      <div className="lg:w-16 w-12 rounded-full bg-[#006C39] flex-shrink-0 transition-colors duration-300 group-hover:bg-[#006C39] text-black">
        <Image
          src={icon}
          className="p-2 lg:w-[100px] lg:h-[60px] w-[60px] h-[50px]"
          alt="icon"
          width={100}
          height={60}
        />
      </div>
      <p className="font-bold text-base text-black flex-1 transition-colors duration-300 group-hover:text-white">
        {text}
      </p>
    </div>
  );
}
