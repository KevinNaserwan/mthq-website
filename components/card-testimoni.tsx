import Image from "next/image";

export default function CardTestimoni({
  name,
  role,
  image,
  testimony,
}: CardTestimoniProps) {
  return (
    <div className="relative flex flex-col lg:w-[300px] lg:h-[350px] justify-start bg-white items-center shadow-2xl p-10 rounded-lg">
      <Image
        alt="image testimoni"
        src={image}
        width={100}
        height={100}
        className="absolute -top-12 rounded-full"
      />
      <div className="flex flex-col items-center mt-7">
        <Image
          src="/icon/testimoni.svg"
          alt="testimoni"
          width={23}
          height={17}
        />
        <h1 className="font-bold text-lg text-black">{name}</h1>
        <h2 className="font-medium text-lg text-[#595959]">{role}</h2>
        <p className="text-center text-black mt-5">{testimony}</p>
      </div>
    </div>
  );
}
