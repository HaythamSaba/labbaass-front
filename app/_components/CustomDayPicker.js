"use client";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { arSA } from "date-fns/locale";

// Helper: get today's date in UTC (midnight)
function getUTCDate(year, month, day) {
  return new Date(Date.UTC(year, month, day));
}

// Fixed available times
const availableTimes = [
  "9:00",
  "9:45",
  "14:00",
  "14:30",
  "16:00",
  "16:30",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
];

export default function CustomDayPicker({ range, setRange }) {
  const [selectedTime, setSelectedTime] = useState(null);

  // Always compute dates in UTC
  const now = new Date();
  const today = getUTCDate(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate()
  );
  const fromMonth = getUTCDate(now.getUTCFullYear(), now.getUTCMonth(), 1);
  const fromDate = today;
  const toYear = now.getUTCFullYear() + 5;

  return (
    <div className="w-full">
      {" "}
      {/* Remove max-width constraints */}
      <style>{`
        table{
          margin: auto;
          border-collapse: separate;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100% !important; /* Make table full width */
          max-width: none !important;
          flex: 1;
        }
        
        thead{
          width: 100%;
        }
        
        .rdp-months{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        
        .rdp-nav{
          display: none;
        }
        
        .rdp-caption_label{
          display: none;
        }
        
        .rdp-month_caption {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .rdp-month_caption div{
          flex-direction: row;
        }
        
        /* Center the day numbers */
        .rdp-weeks{
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          width: 100% !important;
        }
        .rdp-weekdays{
          display: flex !important;
          justify-content: space-around !important;
          align-items: center !important;
        }
        .rdp-week{
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100% !important;
          gap: 10px !important;
        }
        td {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex: 1 !important; /* Make cells expand */
        }
          .rdp-today{
          border: 2px solid #E37600 !important;
          font-weight: bold !important;
          background-color: #FFF4EA !important;
          color: #E37600 !important;
          border-radius: 50% !important;
          cursor: pointer !important;
          &:hover{
            background-color: #FFE0C2 !important;
          }
        }
          .rdp-outside button, .rdp-outside, .rdp-outside:hover{
          color: #D3D3D3 !important;
          cursor: not-allowed !important;
          }

      `}</style>
      <DayPicker
        mode="range"
        onSelect={setRange}
        selected={range}
        fromMonth={fromMonth}
        fromDate={fromDate}
        toYear={toYear}
        captionLayout="dropdown"
        locale={arSA}
        showOutsideDays={true} // Force showing outside days
        numberOfMonths={1}
        classNames={{
          // Wrapper - remove width constraints
          root: "w-full flex flex-1",
          // Caption (year + month dropdowns)
          caption: "flex items-center gap-4 mb-6 text-lg font-semibold",
          dropdowns: "flex items-center gap-2",
          dropdown:
            "bg-[#FFF4EA] text-[#E37600] px-2 py-1 rounded-md font-bold",
          // Table - full width
          table: "w-full border-collapse",
          head_row: "text-[#9CA3AF] text-base font-semibold w-full",
          head_cell: "p-2 text-center flex-1", // Make header cells expand
          row: "text-center w-full",
          cell: "flex-1 h-12 text-lg font-medium relative", // Make cells expand
          day: "w-full h-12 rounded-full hover:bg-[#FFE0C2] transition cursor-pointer flex items-center justify-center",
          day_selected: "bg-[#E37600] text-white font-bold hover:bg-[#c55e00]",
          day_today: "border border-[#E37600] rounded-full",
          day_disabled: "text-gray-400 opacity-50 cursor-not-allowed",
          month:
            "flex flex-1 items-center justify-center flex-col gap-4 w-full",
          months: "flex justify-center items-center flex-1 flex-col w-full",
          
        }}
      />
      {/* Time slots */}
      <div className="flex flex-col items-center w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 w-full">
          {availableTimes.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`border border-[#EDEDED] text-[#414141] p-3 flex items-center justify-center rounded-lg font-bold cursor-pointer transition
                ${
                  selectedTime === time ? "bg-[#E37600] text-white" : "bg-white"
                }
                hover:bg-[#FFE0C2]
              `}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
