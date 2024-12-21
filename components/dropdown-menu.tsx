import Link from "next/link";

export default function DropdownMenu({
  items,
}: {
  items: { title: string; link: string }[];
}) {
  return (
    <div className="absolute top-full z-40 left-0 mt-7 bg-white shadow-lg rounded-b-lg border-t-2 border-[#006C39] w-[185px] p-3 pointer-events-auto">
      {items.map(({ title, link }) => (
        <Link key={title} href={link}>
          <div className="p-2 cursor-pointer">
            <h1 className="font-bold text-sm text-black hover:text-[#006C39]">
              {title}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
}
