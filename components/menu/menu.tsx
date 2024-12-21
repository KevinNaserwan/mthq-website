"use client";
import Link from "next/link";

type MenuProps = {
  link: string;
  title: string;
  style?: string;
  isOpen: boolean;
  onToggle: () => void;
  hasDropdown?: boolean;
  isActive?: boolean; // Add isActive prop
};

export default function Menu({
  title,
  link,
  style = "",
  isOpen,
  onToggle,
  hasDropdown = false,
  isActive = false, // Default to false
}: MenuProps) {
  return (
    <div className="flex flex-row items-center gap-2 group text-black">
      <Link
        href={link}
        className={`font-semibold ${
          isActive || isOpen ? "text-[#006C39]" : "text-[#000000]"
        } group-hover:text-[#006C39] transition-colors duration-300`}
        onClick={onToggle}
      >
        {title}
      </Link>
      {hasDropdown && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180 stroke-[#006C39]" : ""
          } group-hover:stroke-[#006C39] ${style}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      )}
    </div>
  );
}
