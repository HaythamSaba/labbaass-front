"use client";
import { useState } from "react";

function ToggleSwitch({ label, checked, onToggle }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <label className="relative inline-flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={checked}
        onChange={() => onToggle(!checked)}
      />
      <div
        className={`relative w-11 h-6 rounded-full outline-none transition-all duration-200
          ${checked ? "bg-[#00A6FB]" : "bg-gray-300"}
          
        `}
      >
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300
            ${checked ? "translate-x-[20px]" : "translate-x-0"}
            shadow-md
          `}
        ></div>
      </div>
      <span className="mr-3 text-lg font-medium text-gray-800">{label}</span>
    </label>
  );
}

export default ToggleSwitch;
