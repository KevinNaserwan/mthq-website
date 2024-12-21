export default function CardFasilitas() {
  return (
    <div
      className="relative lg:w-[220px] lg:h-[250px] rounded-lg group"
      style={{
        backgroundImage: "url('/image/jumbotron/1.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-70 z-10 rounded-lg transition-opacity duration-300"></div>

      <div className="absolute z-10 w-full bg-[#006C39] py-8 rounded-b-lg flex items-center justify-center bottom-0 h-[20%] group-hover:opacity-0 group-hover:-translate-y-4 transition-all duration-300">
        <h1 className="font-bold text-base text-white">Masjid</h1>
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-600 z-20">
        <h1 className="font-bold text-lg text-white transform translate-y-4 group-hover:translate-y-0">
          Masjid
        </h1>
      </div>
    </div>
  );
}
