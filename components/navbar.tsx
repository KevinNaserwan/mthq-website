import Image from "next/image";
import Menu from "./menu/menu";

export default function Navbar() {
  return (
    <div className=" w-full bg-white min-h-0">
      <div className="flex flex-row justify-between lg:w-[1200px] mx-auto py-6">
        <div>
          <Image
            alt="MTHQ Logo"
            src="/image/logo-navbar.png"
            width={160}
            height={60}
          ></Image>
        </div>
        <div className=" flex flex-row items-center gap-7">
          <Menu
            title="Beranda"
            style="hidden"
            styleTitle="font-semibold text-[#006C39]"
          />
          <Menu
            title="Tentang MTHQ"
            style=""
            styleTitle=" font-semibold text-black"
          />
          <Menu
            title="Program"
            style=""
            styleTitle=" font-semibold text-black"
          />
          <Menu
            title="Kegiatan"
            style="hidden"
            styleTitle="font-semibold text-black"
          />
          <Menu
            title="Galeri"
            style="hidden"
            styleTitle="font-semibold text-black"
          />
          <Menu
            title="MTHQ 2"
            style="hidden"
            styleTitle="font-semibold text-black"
          />
          <Menu
            title="Kontak"
            style="hidden"
            styleTitle="font-semibold text-black"
          />
        </div>
      </div>
    </div>
  );
}
