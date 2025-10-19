"use client";
import { useState } from "react";
import Image from "next/image";
import CustomDayPicker from "./CustomDayPicker";
import InfoIcon from "./icons/InfoIcon";

function SelectingDate({ setActiveItem, doctor }) {
  const [selected, setSelected] = useState(null); // "paid" or "free"
  const [range, setRange] = useState(null);

  return (
    <div className="px-4 sm:px-6 lg:px-0">
      {/* Top Section with Image and Calendar */}
      <div className="mt-16 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-50">
        <div className="relative z-10 flex justify-center min-w-[317px]">
          <Image
            src="/images/selecting-date-image.png"
            alt="reservation"
            width={317}
            height={326} // Changed to 326 as you requested
            className="w-[317px] h-[326px] rounded-full object-cover relative z-10"
          />
          {/* Fixed background circles to maintain consistent proportions */}
          <div className="absolute w-[426px] h-[426px] bg-accent-200 -top-8 -right-12 z-0 rounded-full"></div>
          <div className="absolute w-[285px] h-[285px] bg-[#5467f824] -top-4 -right-6 z-0 rounded-full"></div>
          <Image
            src="/images/dots.png"
            alt="doctor"
            width={42}
            height={183}
            className="w-6 sm:w-[42px] h-auto absolute -top-10 -left-6 sm:-left-10 z-20"
          />
          <Image
            src="/images/abstract-line.png"
            alt="doctor"
            width={126}
            height={202}
            className="hidden sm:block w-[80px] sm:w-[126px] h-auto absolute -top-20 -right-10 sm:-right-20 z-8"
          />
        </div>
        <div className="w-full max-w-[471px] mx-auto">
          <CustomDayPicker range={range} setRange={setRange} />
        </div>
      </div>

      {/* Appointment Options */}
      <div className="flex flex-col items-center lg:items-end">
        {["free", "paid"].map((type) => (
          <div
            key={type}
            className="flex flex-col sm:flex-row items-start sm:items-center mt-6 sm:justify-between shadow-lg p-4 w-full max-w-[575px] gap-4"
          >
            <div className="flex items-center gap-4 sm:gap-8">
              <button
                type="button"
                onClick={() => setSelected(type)}
                className={`w-5 h-5 rounded-[6px] flex items-center justify-center border-2 transition-colors ${
                  selected === type
                    ? "border-[#007AFF] bg-[#007AFF]"
                    : "border-[#C2C2C2]"
                }`}
              >
                {selected === type && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="white"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.364 7.364a1 1 0 0 1-1.414 0L3.293 9.414a1 1 0 1 1 1.414-1.414l3.95 3.95 6.657-6.657a1 1 0 0 1 1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              <div className="flex flex-col">
                <span>{type === "free" ? "حجز مجاني" : "حجز مدفوع"}</span>
                <span className="text-primary-600 text-lg font-bold">
                  {type === "free" ? "0 دج" : "1000 دج"}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-[9px] sm:text-[10px] max-w-full sm:max-w-[160px]">
              <div className="flex items-start gap-2">
                <InfoIcon iconColor={"#6000D6"} />
                <p>
                  سيُخصم (1000 دج + 50 دج عمولة لباس) من محفظتك لتأكيد الموعد
                  تلقائيًا.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <InfoIcon iconColor={"#6000D6"} />
                <p>
                  ستبقى حالة الحجز قيد المراجعة إلى غاية تأكيد الموعد بالعيادة.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <div className="flex justify-center sm:justify-end mt-10">
        <button
          disabled={!selected}
          onClick={() => setActiveItem("completeInformation")}
          className={`py-3 font-medium w-full sm:w-auto px-10 sm:px-24 rounded-lg transition ${
            selected
              ? "bg-[#E37600] text-white hover:bg-[#d96a00]"
              : "bg-[#EDEDED] text-[#878787] cursor-not-allowed"
          }`}
        >
          متابعة وتأكيد
        </button>
      </div>

      {/* Notes */}
      <div className="mt-10 w-full bg-[#E3F0FF] p-6 rounded-lg">
        <div className="flex flex-wrap items-center gap-4">
          <InfoIcon />
          <p className="font-medium text-sm">ملاحظات</p>
          {doctor.name}
        </div>
        <p className="text-xs mt-2">
          نظرًا لمحدودية عدد مواعيد الاستشارة، في حال عدم رد المريض على الاتصال
          في وقت الموعد، لن يكون من الممكن إعادة الاتصال أو استرداد المبلغ
          المدفوع.
        </p>
      </div>
    </div>
  );
}

export default SelectingDate;
