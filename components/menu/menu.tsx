import Image from "next/image";
import Link from "next/link";

type MenuProps = {
  title: string;
  style: string;
  styleTitle: string;
};

export default function Menu({ title, style, styleTitle }: MenuProps) {
  return (
    <div className=" flex flex-row items-center gap-2">
      <Link href="" className={styleTitle}>
        {title}
      </Link>
      <Image
        alt="Menu"
        className={style}
        src="/icon/arrow-down.svg"
        width={16}
        height={16}
      ></Image>
    </div>
  );
}
