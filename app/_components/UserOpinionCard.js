"use client";
import Image from "next/image";
import Button from "./Button";
import FullStarIcon from "./icons/FullStarIcon";
import Link from "next/link";

function UserOpinionCard({
  name,
  userRating,
  doctorName,
  datePublished,
  doctor,
  opinion,
  buttomText,
}) {
  return (
    <section className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#E4E4E4] bg-white shadow-sm h-full flex flex-col">
      {/* User Info */}
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex-shrink-0">
          <Image
            src="/images/testimonial-1.png"
            width={60}
            height={60}
            alt={`${name} profile`}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-[84px] md:h-[84px] rounded-full object-cover"
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-1 min-w-0 flex-1">
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-[#005B8A] truncate">
            {name}
          </h2>
          <div className="flex items-center gap-2 text-[#454C56] font-medium text-sm sm:text-base">
            <div className="flex-shrink-0">
              <FullStarIcon />
            </div>
            <span className="whitespace-nowrap">
              {userRating}{" "}
              <span className="text-xs sm:text-sm text-[#B7BABE]">من 5</span>
            </span>
          </div>
          <p className="text-xs text-[#B7BABE] truncate">{datePublished}</p>
        </div>
      </div>

      {/* Opinion Text */}
      <div className="flex-1 mt-3 sm:mt-4">
        <p className="text-[#454C56] font-normal text-sm sm:text-base leading-6 sm:leading-7 line-clamp-4 md:line-clamp-none">
          {opinion}
        </p>
      </div>

      {/* Action / Button */}
      <div className="flex flex-col gap-3 sm:gap-2 lg:flex-row lg:items-center lg:justify-between border-t border-[#E4E4E4] mt-4 pt-3 sm:pt-4">
        {buttomText ? (
          <p className="text-[#454C56] font-normal text-sm sm:text-base leading-relaxed">
            {buttomText}
          </p>
        ) : (
          <>
            <div className="flex-1 min-w-0">
              <p className="text-[#454C56] font-normal text-sm sm:text-base leading-relaxed">
                احجز الآن{" "}
                <span className="text-yellow-500 underline">زيارة</span>{" "}
                <span>
                  {doctorName ? ` الدكتور ${doctorName}` : "لطبيبك المفضل"}
                </span>
              </p>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto">
              <Link href={doctor ? `/doctors/${doctor.id}/reservation` : "#"}>
                <Button
                  text="احجز الآن"
                  variant="primary"
                  rounded
                  size="small"
                  className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default UserOpinionCard;
