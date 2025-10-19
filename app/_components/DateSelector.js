"use client";

import React, { useState } from "react";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import { arSA } from "date-fns/locale";

// Placeholder hook to make the component self-contained and runnable
// This replaces the external import from "@/context/useReservation"
const useReservation = () => {
  const [range, setRange] = useState({});
  const resetRange = () => setRange({});
  return { range, setRange, resetRange };
};

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

// Your updated component, renamed for clarity in a single file
function DateSelector() {
  const { range, setRange, resetRange } = useReservation();

  // Mock data to replace props passed from a parent component
  const bookedDates = [
    new Date(2025, 9, 23),
    new Date(2025, 9, 24),
    new Date(2025, 9, 25),
  ];
  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  return (
    <div className="flex flex-1 flex-col bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <style>{`
        .rdp {
          --rdp-cell-size: 40px;
          --rdp-background-color: #F8F8F8;
          --rdp-hover-color: #E37600;
          --rdp-selected-color: #E37600;
          --rdp-selected-text-color: #ffffff;
          --rdp-caption-color: #161F2C;
          --rdp-nav-color: #161F2C;
          --rdp-today-color: #E37600;
          --rdp-disabled-color: #D3D3D3;
          direction: rtl;
          font-family: inherit;
        }

        .rdp-months {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1
        }
        .rdp-month {
          display: flex;
          flex-direction: column;
          flex: 1       
        }

        .rdp-caption_label {
          display: none;
        }

        .rdp-nav_button_previous, .rdp-nav_button_next {
          width: 30px;
          height: 30px;
          border: 1px solid #D3D3D3;
          border-radius: 50%;
        }

        .rdp-table {
          width: 100%;
        }

        .rdp-head_cell {
          color: #8D8D8D;
          font-weight: normal;
          font-size: 0.875rem;
        }
        
        .rdp-day {
          border-radius: 50%;
          transition: background-color 0.2s, color 0.2s;
        }

        .rdp-day_selected, .rdp-day_selected:hover {
          background-color: #E37600 !important;
          color: white !important;
          border-radius: 50%;
        }
        
        .rdp-day_range_middle {
          background-color: #FBEBD6 !important;
          color: #E37600 !important;
          border-radius: 0;
        }

        .rdp-day_range_middle.rdp-day_selected:not(.rdp-day_range_start):not(.rdp-day_range_end) {
          background-color: #FBEBD6 !important;
          color: #E37600 !important;
          border-radius: 0;
        }

        .rdp-day_range_start {
          border-top-right-radius: 9999px;
          border-bottom-right-radius: 9999px;
        }

        .rdp-day_range_end {
          border-top-left-radius: 9999px;
          border-bottom-left-radius: 9999px;
        }

        .rdp-day_disabled {
          color: #D3D3D3 !important;
      
        }
          .rdp-day{
          
          }
        .rdp-today {
          font-weight: bold;
          color: #E37600;
        }
      `}</style>

      {/* Calendar */}
      <div className="p-6">
        <DayPicker
          mode="range"
          onSelect={setRange}
          selected={displayRange}
          fromMonth={new Date()}
          fromDate={new Date()}
          toYear={new Date().getFullYear() + 5}
          captionLayout="dropdown"
          numberOfMonths={1}
          locale={arSA}
          dir="rtl"
          classNames={{
            root: "rdp-root",
            month: "rdp-month",
            months: "rdp-months",
            caption: "rdp-caption",
            caption_dropdowns: "rdp-caption_dropdowns",
            nav: "rdp-nav",
            nav_button: "rdp-nav_button",
            nav_button_previous: "rdp-nav_button_previous",
            nav_button_next: "rdp-nav_button_next",
            table: "rdp-table",
            head: "rdp-head",
            head_row: "rdp-head_row",
            head_cell: "rdp-head_cell",
            tbody: "rdp-tbody",
            row: "rdp-row",
            cell: "rdp-cell",
            day: "rdp-day",
            day_selected: "rdp-day_selected",
            day_range_middle: "rdp-day_range_middle",
            day_range_start: "rdp-day_range_start",
            day_range_end: "rdp-day_range_end",
            day_today: "rdp-day_today",
            day_disabled: "rdp-day_disabled",
          }}
          disabled={(curDate) =>
            isPast(curDate) ||
            bookedDates.some((date) => isSameDay(date, curDate))
          }
        />
      </div>

      {/* Footer price details */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-accent-500 text-primary-800">
        {/* Clear button */}
        {range.from || range.to ? (
          <button
            onClick={resetRange}
            className="border border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            مسح
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
// Main App component to render the DateSelector
