"use client";
import Image from "next/image";
import Button from "./Button";
import LocationIcon from "./icons/LocationIcon";
import Link from "next/link";

function  ClinicCard({
  id,
  name, // maps to pharm_name
  description, // maps to pharm_about
  categories, // maps to category_id or categories_id
  location, // maps to pharm_address
  imageUrl, // maps to profile_picture
  ButtonText,
}) {
  return (
    <div className="bg-white rounded-3xl p-4 text-right shadow-md h-full flex flex-col justify-between">
      <div className="mb-4 w-full h-[196px]">
        <Image
          className="rounded-lg w-full h-full object-cover"
          src={imageUrl || "/placeholder.png"}
          alt={name}
          width={368}
          height={196}
          priority
          quality={100}
        />
      </div>
      <div className="pt-6">
        <div className="flex justify-between items-start mb-2 gap-4">
          <h3 className="text-lg font-bold min-w-fit">{name}</h3>
          {categories && (
            <p className="text-sm text-gray-500 text-left">{categories.join(", ")}</p>
          )}
        </div>
        {description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {description}
          </p>
        )}
        <div className="flex items-center gap-2 text-gray-500 bg-[#FAFAFA] p-2 rounded-lg">
          <LocationIcon iconColor="#A862FF" />
          <p className="text-sm">{location}</p>
        </div>
      </div>
      <div className="pt-4">
        <Link href={`/clinics/${id}`}>
          <Button
            text={ButtonText || "احجز الآن"}
            variant={ButtonText ? "outline" : "primary"}
            size="medium"
            fullWidth
            rounded
            className="font-normal"
          />
        </Link>
      </div>
    </div>
  );
}

export default ClinicCard;
