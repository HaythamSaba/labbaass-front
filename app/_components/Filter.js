"use client";
import { use, useEffect, useState } from "react";
import CalendarIcon from "./icons/CalendarIcon";
import PhoneIcon from "./icons/PhoneIcon";
import FilterIcon from "./icons/FilterIcon";
import XIcon from "./icons/XIcon";
import FilterCard from "./FilterCard";
import ToggleSwitch from "./ToggleSwitch";
import ClassificationList from "./ClassificationList";
import MessageIcon from "./icons/MessageIcon";
import { getCategories, getMunicipals } from "../_lib/api";

export default function Filter({
  onCityChange,
  onSpecialtyChange,
  categories,
  municipals,
  textColor,
  backgroundColor,
}) {
  const [availableAppointments, setAvailableAppointments] = useState(false);

  const filters = [
    { id: "clinic", label: "موعد العيادة", icon: CalendarIcon },
    { id: "phone", label: "استشارة هاتفية", icon: PhoneIcon },
    { id: "online", label: "مشاوره انلاین", icon: MessageIcon },
  ];

  const handleClearAll = () => {
    setAvailableAppointments(false);
    onCityChange?.([]);
    onSpecialtyChange?.([]);
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-lg p-2 h-fit">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <FilterIcon color="#161F2C" className="w-5 h-5" />
          <p className="text-[#161F2C] text-xl font-normal">فلتر</p>
        </div>
        <span
          className="text-[#FF4D4D] text-sm font-medium flex items-center bg-[#FFEDED] gap-1 px-3 py-1 rounded-2xl cursor-pointer"
          onClick={handleClearAll}
        >
          <XIcon color="#FF4D4D" className="w-4 h-4" />
          حذف الكل
        </span>
      </div>

      {/* Appointment type buttons (purely visual here) */}
      <div>
        <ClassificationList
          filters={filters}
          textColor={textColor}
          backgroundColor={backgroundColor}
        />
      </div>

      <FilterCard
        title="تخصص و فوق تخصص"
        placeholder="ابحث عن التخصص"
        initialItems={categories}
        labelKey="name"
        onChange={onSpecialtyChange}
      />

      <FilterCard
        title="المدينة"
        placeholder="ابحث عن المدينة"
        initialItems={municipals}
        labelKey="municipal_name"
        onChange={onCityChange}
      />

      <ToggleSwitch
        label="فقط المواعيد المتاحة."
        checked={availableAppointments}
        onToggle={setAvailableAppointments}
      />
    </div>
  );
}
