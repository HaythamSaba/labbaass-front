"use client";
import { useState } from "react";
import ArrowIcon from "./icons/ArrowIcon";
import { is } from "date-fns/locale";

function QuestionCard({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#f6f6f7] rounded-lg p-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={`font-medium text-base ${isOpen ? "text-[#005FC6]" : "text-[#030303]"}`}>{question}</h3>
        <div className={`transition-transform duration-300`}>
          <ArrowIcon
            direction={isOpen ? "up" : "down"}
            className="text-[#005FC6]"
          />
        </div>
      </div>
      <p
        className={`
          mt-2 text-[#030303] text-sm font-normal overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {answer}
      </p>
    </div>
  );
}

export default QuestionCard;
