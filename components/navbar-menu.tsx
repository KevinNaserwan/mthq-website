type NavbarMenuProps = {
  title: string;
  mainCategory: string;
  currentPage: string;
};

export default function NavbarMenu({
  title,
  mainCategory,
  currentPage,
}: NavbarMenuProps) {
  return (
    <div
      className="relative w-screen bg-cover mt-20"
      style={{ backgroundImage: "url('/image/navbar-menu.png')" }}
    >
      <div className="absolute inset-0 bg-[#00512B] opacity-80 z-10"></div>
      <div className="py-8">
        <h1 className="relative z-20 font-bold text-[28px] text-white text-center">
          {title}
        </h1>
        <div className="relative z-20 flex flex-row justify-center items-center gap-3">
          <h3 className="font-normal text-white text-base">{mainCategory}</h3>
          <div className="w-[1px] h-4 bg-white"></div>
          <h3 className="font-normal text-white text-base">{currentPage}</h3>
        </div>
      </div>
    </div>
  );
}
