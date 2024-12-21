import CardBerita from "../card-berita";

export default function Berita() {
  return (
    <div className="lg:px-36 lg:py-32 lg:bg-white">
      <h1 className="text-[#006C39] font-bold text-center text-[32px]">
        Berita dan Artikel
      </h1>
      <div className="grid grid-flow-row grid-cols-3 items-center gap-10 mt-16">
        <CardBerita />
        <CardBerita />
        <CardBerita />
      </div>
    </div>
  );
}
