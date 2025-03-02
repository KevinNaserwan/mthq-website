// Button.tsx
import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
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
