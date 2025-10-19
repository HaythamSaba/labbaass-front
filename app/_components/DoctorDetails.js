import Image from "next/image";
import Button from "./Button";
import LikeIcon from "./icons/LikeIcon";
import StarIcon from "./icons/StarIcon";
import TickIcon from "./icons/TickIcon";
import ArrowIcon from "./icons/ArrowIcon";
import CalendarIcon from "./icons/CalendarIcon";
import PhoneIcon from "./icons/PhoneIcon";
import MessageIcon from "./icons/MessageIcon";
import LocationIcon from "./icons/LocationIcon";
import FollowIcon from "./icons/FollowIcon";
import Share2Icon from "./icons/Share2Icon";
import Link from "next/link";

function DoctorDetails({ data, buttonText, variant }) {
  const {
    id,
    name,
    specialization,
    rating,
    reviewsCount,
    imageSrc,
    imageAlt,
    imageWidth,
    imageHeight,
    categoryName,
    category,
    services,
    appointmentsBooked,
    recommendationsPercentage,
    location,
    phoneNumber,
  } = data;

  const filters = [
    { id: "clinic", label: "موعد العيادة", icon: CalendarIcon },
    { id: "phone", label: "استشارة هاتفية", icon: PhoneIcon },
    { id: "online", label: "مشاوره انلاین", icon: MessageIcon },
  ];

  return (
    <div
      className={`bg-white p-8 rounded-xl mt-4 flex flex-col gap-4 ${
        variant !== "withContact" && "border-2 border-gray-200"
      }`}
    >
      {/* Top section */}
      <div className="bg-white flex flex-col sm:flex-row sm:items-start sm:gap-4 border-b pb-4 border-gray-200 text-right">
        <Image
          src={imageSrc || "/placeholder.png"}
          alt={imageAlt || "doctor"}
          className="w-[82px] h-[82px] object-cover rounded-full mx-auto sm:mx-0 mb-4 sm:mb-0"
          width={imageWidth}
          height={imageHeight}
          quality={100}
        />
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex justify-between items-center">
            <p
              className={`text-base text-black ${
                variant === "withContact" ? "font-bold" : "font-medium"
              }`}
            >
              {name}
            </p>

            {variant === "withContact" && (
              <div className="flex items-center gap-4 mt-2">
                <Button
                  text="متابعة"
                  variant="noBorder"
                  Icon={FollowIcon}
                  className="font-bold text-primary-600 shadow-md"
                  rounded
                />
                <Button
                  variant="primary"
                  Icon={Share2Icon}
                  className="font-bold text-primary-600 shadow-md"
                  rounded
                />
              </div>
            )}
          </div>

          <p className="text-sm text-[#94989E]">{specialization}</p>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <p className="flex items-center gap-1 text-primary-400">
              <StarIcon /> {rating}{" "}
              <span className="text-[#636972] mr-2">
                ({reviewsCount} تقييم)
              </span>
            </p>
            <span className="flex items-center gap-1">
              <LikeIcon />
              {recommendationsPercentage}٪ توصيات المستخدمين
            </span>
            <span className="flex items-center gap-1">
              <TickIcon />
              {appointmentsBooked} حجز موعد
            </span>
          </div>
        </div>
      </div>

      {/* Middle section */}
      <div className="mt-4 text-[#94989E] text-right">
        <p className="text-sm">{categoryName}: {category}</p>
        <p className="text-sm mt-2">خدمات: {services}</p>
      </div>

      {/* Location & Phone */}
      {variant === "withContact" && (
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_180px] mt-4 gap-4">
          <span className="flex items-center border-2 border-gray-200 rounded-full px-4 py-2 gap-2">
            <LocationIcon iconColor={"#636972"} />
            {location}
          </span>
          <span className="flex items-center text-[#636972] border-2 border-gray-200 rounded-full px-4 py-2 gap-2">
            <PhoneIcon color={"#636972"} />
            {phoneNumber}
          </span>
        </div>
      )}

      {/* Bottom section */}
      <div className="flex flex-col sm:flex-row items-end justify-between gap-4 mt-4">
        <div className="flex flex-col gap-3">
          
        </div>
        <Link href={`/doctors/${id}`}>
          <Button
            text={buttonText}
            variant="outline"
            size="large"
            Icon={ArrowIcon}
            iconPosition="right"
            iconProps={{ direction: "left" }}
            rounded
          />
        </Link>
      </div>
    </div>
  );
}

export default DoctorDetails;
