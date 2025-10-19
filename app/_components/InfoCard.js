import React from "react";
import Image from "next/image";
import LocationIcon from "./icons/LocationIcon";
import Button from "./Button";

const InfoCard = ({ name, specialty, location, rating, clinic }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-right">
      <div className="flex items-center justify-end gap-6 mb-4">
        <Image
          className="rounded-full border-2 border-[#B0E3FE] w-20 h-20"
          src="/images/doctor-2.png" // Replace with the actual image path
          alt={`د. ${name}`}
          width={80}
          height={80}
          priority
          quality={100}
        />
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-bold">د. {name}</h3>
          <div className="flex items-center justify-between text-base">
            <p className="text-gray-500 mt-1">{clinic}</p>
            <div className="flex items-center text-gray-500 gap-1 justify-between ">
              <span>{rating}</span>
              <span className="mr-1">از 5</span>
              <span className="text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.155c.969 0 1.371 1.24.588 1.81l-3.36 2.446a1 1 0 00-.364 1.118l1.287 3.96a1 1 0 01-1.54 1.118l-3.36-2.446a1 1 0 00-1.176 0l-3.36 2.446a1 1 0 01-1.54-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.09 9.387c-.783-.57-.381-1.81.588-1.81h4.155a1 1 0 00.95-.69l1.286-3.96z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right mb-4 border-b border-gray-200 p-2">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[#B7BABE] text-base">تخصص:</p>
          <p className="text-[#454C56]">أخصائي {specialty}</p>
        </div>
        <div className="flex items-center justify-center mt-4 mb-4 gap-4 text-gray-500 bg-[#FAFAFA] p-2 rounded-lg">
          <LocationIcon />
          <p>{location}</p>
        </div>
      </div>
      <div className="p-2">
        <Button
          text="احجز الان"
          variant="secondary"
          size="medium"
          fullWidth
          rounded
          className="font-normal"
        />
      </div>
    </div>
  );
};

export default InfoCard;
