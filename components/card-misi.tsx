export default function CardMisi({ text, number }: CardMisiProps) {
  return (
    <div className="relative inline-flex flex-col p-[1px] z-30">
      <div className="bg-[#E6F0EB] hover:bg-white hover:shadow-2xl z-10 p-4 rounded-lg flex flex-col h-full">
        {/* Display the dynamic number here */}
        <div className="w-10 h-10 bg-[#006C39] flex items-center rounded-md text-white font-semibold justify-center z-10">
          {number}
        </div>
        <p className="text-black] text-base text-left font-medium mt-5">
          {text}
        </p>
      </div>
      <div className="absolute -bottom-1 -left-1 rounded-md bg-[#006C39] w-28 h-28 z-0"></div>
      <div className="absolute -top-1 -right-1 rounded-md bg-[#006C39] w-28 h-28 z-0"></div>
    </div>
  );
}
