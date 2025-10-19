"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Button from "./Button";
import ToggleSwitch from "./ToggleSwitch";
import ArrowIcon from "./icons/ArrowIcon";
import InfoIcon from "./icons/InfoIcon";
import PhoneIcon from "./icons/PhoneIcon";
import LocationIcon from "./icons/LocationIcon";
import ChatIcon from "./icons/ChatIcon";
import FollowIcon from "./icons/FollowIcon";
import Share2Icon from "./icons/Share2Icon";
import DoctorDetails from "./DoctorDetails";
import ClinicReviewsSection from "./ClinicReviewsSection";

export default function ClinicDetails({
  id,
  name,
  categoriesIds = [],
  allCategories = [],
  description,
  location,
  phoneNumber,
  secondNumber,
  clinicOutside,
  doctors = [],
  mainCategory,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [availableAppointments, setAvailableAppointments] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ✅ Map category IDs → names
  const categoryMap = useMemo(
    () => Object.fromEntries(allCategories.map((c) => [c.id, c.name])),
    [allCategories]
  );

  const categoryNames = categoriesIds
    .map((id) => categoryMap[id])
    .filter(Boolean);

  const mainCategoryName = categoryMap[mainCategory];

  // ✅ Filter doctors by category
  const filteredDoctors = useMemo(() => {
    if (!selectedCategory) return doctors;
    return doctors.filter((doctor) => doctor.category?.ar === selectedCategory);
  }, [selectedCategory, doctors]);

  // ✅ Count doctors per category
  const getCategoryDoctorCount = (cat) =>
    doctors.filter((doc) => doc.category?.ar === cat).length;

  return (
    <div className="px-[72px] mt-20 text-[#636972] bg-[#FAFAFA]">
      {/* 🔹 Clinic Header Card */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row md:items-start gap-6 border border-gray-100">
        <Image
          src={clinicOutside}
          alt="clinic image"
          className="rounded-xl object-cover w-full md:w-[240px] h-[200px]"
          width={400}
          height={388}
          quality={100}
        />

        <div className="flex-1 flex flex-col gap-4">
          {/* Title + Actions */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <h1 className="text-2xl font-semibold text-[#090D12]">{name}</h1>
            <div className="flex flex-wrap gap-2 justify-end">
              <Button
                text="متابعة"
                Icon={FollowIcon}
                variant="white"
                rounded
                className="shadow-md"
              />
              <Button text="مراسلة" Icon={ChatIcon} variant="primary" rounded />
              <Button text="اتصال" Icon={PhoneIcon} variant="primary" rounded />
              <Button Icon={Share2Icon} variant="primary" rounded />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2 text-[#4D515C]">
              <LocationIcon iconColor="#94989E" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-[#4D515C]">
              <PhoneIcon color="#94989E" />
              <span>
                {phoneNumber}
                {secondNumber && ` • ${secondNumber}`}
              </span>
            </div>
            {description && (
              <div className="flex items-start gap-2 text-[#4D515C]">
                <InfoIcon iconColor="#94989E" />
                <p className="leading-relaxed">{description}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 🔹 Main Layout (Sidebar + Doctors) */}
      <div className="grid grid-cols-1 lg:grid-cols-[405px_1fr] gap-6 mt-10">
        {/* Sidebar Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
          {/* Filter Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[#090D12] font-semibold">
              التخصص والتخصص الدقيق
            </h3>
            <button onClick={() => setIsOpen(!isOpen)}>
              <ArrowIcon
                className={`h-6 w-6 text-[#B7BABE] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Category Filters */}
          {isOpen && (
            <div className="flex flex-col gap-3">
              {/* All doctors */}
              <button
                onClick={() => setSelectedCategory(null)}
                className={`flex justify-between items-center py-4 px-4 border-2 rounded-xl transition-all duration-200 ${
                  selectedCategory === null
                    ? "bg-[#6000D633] border-[#6000D6]"
                    : "border-gray-200 hover:bg-[#f9f9f9]"
                }`}
              >
                <p className="text-[#090D12] ">جميع الأطباء</p>
                <p className="text-[#B7BABE] text-sm">{doctors.length} طبيب</p>
              </button>

              {/* Categories */}
              {categoryNames.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex justify-between items-center py-4 px-4 border-2 rounded-xl transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-[#6000D633] border-[#6000D6]"
                      : "border-gray-200 hover:bg-[#f9f9f9]"
                  }`}
                >
                  <p className="text-[#090D12] font-medium">{cat}</p>
                  <p className="text-[#B7BABE] text-sm">
                    {getCategoryDoctorCount(cat)} طبيب
                  </p>
                </button>
              ))}
            </div>
          )}

          {/* Toggle */}
          <div className="mt-6">
            <ToggleSwitch
              label="فقط المواعيد المتاحة"
              checked={availableAppointments}
              onToggle={setAvailableAppointments}
            />
          </div>

          {/* Opinions */}
          <ClinicReviewsSection pharmId={id} />
        </div>

        {/* Doctors List */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl text-[#090D12]">
              {selectedCategory
                ? `متخصصين ${selectedCategory}`
                : "جميع الأطباء"}
            </h3>
            <p className="text-[#B7BABE] text-sm">
              {filteredDoctors.length} طبيب
            </p>
          </div>

          {/* Doctor Cards */}
          <div className="grid grid-cols-1 gap-6">
            {filteredDoctors.map((doctor) => (
              <DoctorDetails
                key={doctor.id}
                data={{
                  id: doctor.id,
                  name: doctor.pharm_name,
                  specialization: doctor.category?.ar,
                  imageSrc: doctor.profile_picture?.startsWith("http")
                    ? doctor.profile_picture
                    : `${process.env.NEXT_PUBLIC_API_BASE_URL}/${doctor.profile_picture}`,
                  imageAlt: doctor.pharm_name,
                  imageWidth: 82,
                  imageHeight: 82,
                  rating: doctor.rating?.average_rating || "—",
                  reviewsCount: doctor.rating?.total_rating || 0,
                  detailedSpecialization: doctor.category?.fr,
                  services: "—",
                  appointmentsBooked: "—",
                  recommendationsPercentage: "—",
                  location: doctor.pharm_address,
                  phoneNumber: doctor.pharm_fax,
                }}
                variant="simple"
                buttonText="حجز موعد"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
