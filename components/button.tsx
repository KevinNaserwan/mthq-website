// Button.tsx
import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, href }) => {
  if (href) {
    return (
      <Link href={href}>
        <button className="bg-[#006C39] text-white hover:bg-[#018B36] font-medium py-2 px-4 rounded mt-2 inline-flex">
          {text}
        </button>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className="bg-[#006C39] text-white hover:bg-[#018B36] font-medium py-2 px-4 rounded mt-2 inline-flex"
    >
      {text}
    </button>
  );
};

export default Button;
