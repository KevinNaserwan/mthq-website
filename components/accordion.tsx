"use client";
import { useState } from "react";
import Image from "next/image";

// Add onClick to AccordionProps interface
interface AccordionProps {
  title: string;
  content: string[];
  isActive?: boolean;
  onClick: () => void; // Include onClick prop
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  isActive = false,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(isActive);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
    onClick(); // Trigger the onClick prop passed from the parent
  };

  return (
    <div className="w-[500px] flex-col bg-white mt-5 py-4 px-5 rounded-lg transition-all duration-300">
      <div
        className="flex flex-row items-center justify-between gap-20 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h1 className="font-bold text-lg text-black">{title}</h1>
        <Image
          src="/icon/arrow-d-green.svg"
          alt="icon"
          width={35}
          height={35}
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <>
          <div className="w-full mx-auto bg-[#BFBFBF] h-[1px] my-4"></div>
          <div className="text-black font-medium text-justify transition-all duration-300">
            <ul>
              {content.map((item, index) => (
                <li key={index} className="mb-2">
                  - {item}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Accordion;
