import { useData } from "@/context/DataContext";
import Image from "next/image";
import FullStarIcon from "./icons/FullStarIcon";
import GrayStarIcon from "./icons/GrayStarIcon";
import CalendarIcon from "./icons/CalendarIcon";
import SmileIcon from "./icons/SmileIcon";
import ClockIcon from "./icons/ClockIcon";

function MyComments() {
  const { featuredDoctors } = useData();
  return (
    <div className="flex-1">
      {featuredDoctors.map((doctor) => (
        <div
          key={doctor.id}
          className="bg-white p-6 sm:p-8 rounded-xl mb-6 sm:mb-8 sm:mr-4 flex flex-col gap-4 border-2 border-gray-200"
        >
          {/* Top section */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <div className="flex gap-3 sm:gap-4">
              <Image
                src="/images/doctor-1.jpg"
                alt="clinic"
                className="w-[48px] h-[48px] object-cover rounded-full flex-shrink-0"
                width={48}
                height={48}
                quality={100}
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="text-sm">
                    {doctor.sex === "male" ? "دكتور" : "دكتورة"} {doctor.name}
                  </span>
                  <span className="text-xs text-[#B7BABE]">۱۴۰۳/۰۹/۰۴</span>
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm">
                  <GrayStarIcon />
                  <FullStarIcon />
                  <FullStarIcon />
                  <FullStarIcon />
                  <FullStarIcon />
                </div>
              </div>
            </div>
            <div className="self-start sm:self-center">
              <span className="flex items-center gap-1 text-accent-600 bg-accent-100 py-1.5 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm">
                <CalendarIcon />
                {doctor.appointmentType}
              </span>
            </div>
          </div>

          {/* Recommendation */}
          <div>
            <p className="text-xs sm:text-sm text-[#454C56] flex items-center gap-2 sm:gap-4">
              <SmileIcon />
              أوصي بهذا الطبيب.
            </p>
          </div>

          {/* Waiting time */}
          <div>
            <p className="text-xs sm:text-sm text-[#454C56] flex items-center gap-2 sm:gap-4">
              <ClockIcon />
              زمان انتظار ۲۰ دقیقه
            </p>
          </div>

          {/* Review text */}
          <div>
            <p className="text-sm sm:text-base text-[#090D12] leading-relaxed">
              الطبيب دقيق للغاية وذو أخلاق حسنة. لقد حصلنا على نتائج جيدة من
              العلاج.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyComments;
