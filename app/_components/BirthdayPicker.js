"use client";

import { useState, useMemo, useEffect } from "react";

const getMonths = () => [
  { value: 1, name: "يناير" },
  { value: 2, name: "فبراير" },
  { value: 3, name: "مارس" },
  { value: 4, name: "أبريل" },
  { value: 5, name: "مايو" },
  { value: 6, name: "يونيو" },
  { value: 7, name: "يوليو" },
  { value: 8, name: "أغسطس" },
  { value: 9, name: "سبتمبر" },
  { value: 10, name: "أكتوبر" },
  { value: 11, name: "نوفمبر" },
  { value: 12, name: "ديسمبر" },
];

const getYears = (startYear = 1950) => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year >= startYear; year--) {
    years.push(year);
  }
  return years;
};

const getDaysInMonth = (month, year) => {
  if (!month || !year) return [];
  return Array.from(
    { length: new Date(year, month, 0).getDate() },
    (_, i) => i + 1
  );
};

export default function BirthdayPicker({ value, onChange }) {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // initialize from value only when value changes
  useEffect(() => {
    if (value) {
      const [year, month, day] = value.split("-");
      if (
        year !== selectedYear ||
        month !== selectedMonth ||
        day !== selectedDay
      ) {
        setSelectedYear(year);
        setSelectedMonth(month);
        setSelectedDay(day);
      }
    }
  }, [value, selectedDay, selectedMonth, selectedYear]); // run only if value changes

  const months = useMemo(() => getMonths(), []);
  const years = useMemo(() => getYears(), []);
  const days = useMemo(
    () => getDaysInMonth(selectedMonth, selectedYear),
    [selectedMonth, selectedYear]
  );

  // Reset day if invalid
  useEffect(() => {
    if (
      selectedDay &&
      days.length > 0 &&
      !days.includes(parseInt(selectedDay))
    ) {
      setSelectedDay("");
    }
  }, [days, selectedDay]);

  // Notify parent ONLY if we have a complete valid date
  useEffect(() => {
    if (selectedYear && selectedMonth && selectedDay) {
      const formatted = `${selectedYear}-${String(selectedMonth).padStart(
        2,
        "0"
      )}-${String(selectedDay).padStart(2, "0")}`;
      if (formatted !== value) {
        onChange(formatted);
      }
    }
  }, [selectedDay, selectedMonth, selectedYear, value, onChange]);

  const selectClasses =
    "p-3 rounded-xl border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-primary-400 focus:border-transparent";

  return (
    <div className="flex flex-col gap-2 text-[#161F2C] flex-1">
      <label className="text-base text-gray-700 mb-2">تاريخ الميلاد:</label>
      <div className="flex gap-4">
        {/* Day Selector */}
        <div className="flex-1">
          <select
            className={`w-full ${selectClasses}`}
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            disabled={!selectedMonth || !selectedYear}
          >
            <option value="">اليوم</option>
            {days.map((day) => (
              <option key={day} value={String(day).padStart(2, "0")}>
                {day}
              </option>
            ))}
          </select>
        </div>

        {/* Month Selector */}
        <div className="flex-1">
          <select
            className={`w-full ${selectClasses}`}
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="">الشهر</option>
            {months.map((month) => (
              <option
                key={month.value}
                value={String(month.value).padStart(2, "0")}
              >
                {month.name}
              </option>
            ))}
          </select>
        </div>

        {/* Year Selector */}
        <div className="flex-1">
          <select
            className={`w-full ${selectClasses}`}
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">السنة</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
