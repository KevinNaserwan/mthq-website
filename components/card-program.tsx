import Image from "next/image";

export default function CardProgram({ icon, text }: CardProgramProps) {
  return (
    <div className="flex items-center gap-5 p-5 rounded-lg bg-white shadow-lg w-[300px]">
      {" "}
      {/* Set width here */}
      <div className="lg:w-16 w-12 rounded-full bg-[#006C39] flex-shrink-0">
        <Image
          src={icon}
          className="p-2 lg:w-[100px] lg:h-[60px] w-[60px] h-[50px]"
          alt="icon"
          width={100}
          height={60}
        />
      </div>
      <p className="font-bold text-base text-black flex-1">{text}</p>
    </div>
  );
}
