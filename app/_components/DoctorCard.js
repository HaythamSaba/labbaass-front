import Image from "next/image";
import React from "react";
import LocationIcon from "./icons/LocationIcon";
import Button from "./Button";
import FullStarIcon from "./icons/FullStarIcon";
import Link from "next/link";

const DoctorCard = ({
  id,
  name,
  imageSrc,
  specialty,
  location,
  rating,
  clinic,
  popularity,
  variant = "simple",
}) => {
  return (
    <div className="px-6 py-6 rounded-2xl border border-[#E4E4E4]">
      <div className="flex items-start justify-start gap-4">
        <Image
          className="rounded-full border-2 border-[#B0E3FE] w-20 h-20 object-cover"
          src={imageSrc} // Replace with the actual image path
          alt={`د. ${name}`}
          width={80}
          height={80}
          priority
          quality={100}
        />
        <div className="flex flex-col flex-1 gap-2">
          <h3 className="text-xl font-bold">د. {name}</h3>
          <div className="flex items-start justify-between text-base">
            <p className="text-gray-500 mt-1">{clinic}</p>
            {variant === "simple" && (
              <div className="flex items-center text-gray-500 gap-1 justify-between ">
                <span>{rating}</span>
                <span className="mr-1">از 5</span>
                <FullStarIcon />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="text-right mb-4 border-b border-gray-200 flex flex-col gap-4 mt-4 p-2">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[#B7BABE] text-base">تخصص:</p>
          <p className="text-[#454C56]">أخصائي {specialty}</p>
        </div>
        {variant !== "simple" && (
          <div className="flex items-center justify-between gap-2">
            <p className="text-[#B7BABE] text-base">تقييم :</p>
            <div className="flex items-center text-gray-500 gap-1 justify-between ">
              <span>{rating}</span>
              <span className="mr-1">از 5</span>
              <FullStarIcon />
            </div>
          </div>
        )}
        {variant !== "simple" && (
          <div className="flex items-center justify-between gap-2">
            <p className="text-[#B7BABE] text-base">العملاء</p>
            <p className="text-[#454C56]">({popularity})</p>
          </div>
        )}

        <div className="flex items-center justify-center mt-4 mb-4 gap-4 text-gray-500 bg-[#FAFAFA] p-2 rounded-lg">
          <LocationIcon iconColor={"#0097E4"} />
          <p>{location}</p>
        </div>
      </div>
      <div className="p-2">
        <Link href={`/doctors/${id}`}>
          <Button
            text="احجز الان"
            variant="primary"
            size="medium"
            fullWidth
            rounded
            className="font-normal" // You can keep font-semibold here to use it directly
          />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
