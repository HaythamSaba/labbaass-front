"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CheckIcon from "./icons/CheckIcon";

function CheckBoxList({ item, onCheckboxChange }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // If you really want URL sync later, you’ll need to know the filter type (city/specialty).
  // For now, just keep the checked state coming from parent (FilterCard).

  return (
    <div key={item.id} className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={`item-${item.id}`}
        checked={item.checked}
        onChange={() => onCheckboxChange(item.id)}
        className="peer sr-only"
      />
      <label
        htmlFor={`item-${item.id}`}
        className={`
          w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200 cursor-pointer
          ${
            item.checked
              ? "bg-[#00A6FB] border-[#00A6FB]"
              : "bg-white border-gray-300"
          }
        `}
      >
        {item.checked && <CheckIcon className="w-4 h-4 text-white" />}
      </label>
      <label
        htmlFor={`item-${item.id}`}
        className="select-none cursor-pointer text-right flex-grow"
      >
        {item.label} {/* ✅ Use generic label */}
      </label>
    </div>
  );
}

export default CheckBoxList;
