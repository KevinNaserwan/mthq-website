import CardBerita from "../card-berita";

export default function Berita() {
  return (
    <div className="lg:w-[1200px] mx-auto lg:py-32 px-6 py-8 bg-white">
      <h1 className="text-[#006C39] font-bold text-center lg:text-[32px] text-2xl">
        Berita dan Artikel
      </h1>
      <div className="lg:grid lg:grid-flow-row lg:grid-cols-3 flex flex-col items-center gap-10 lg:mt-16 mt-8">
        <CardBerita />
        <CardBerita />
        <CardBerita />
      </div>
    </div>
  );
}
