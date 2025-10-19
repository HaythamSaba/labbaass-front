"use client";
import Image from "next/image";
import { useData } from "@/context/DataContext";
import { useState } from "react";
import Link from "next/link";
import LocationIcon from "./icons/LocationIcon";
import PhoneIcon from "./icons/PhoneIcon";
import EmailIcon from "./icons/EmailIcon";
import CheckCircleIcon from "./icons/CheckCircleIcon";
import ThumbUpIcon from "./icons/ThumbUpIcon";
import RedHeart from "./icons/RedHeart";
import FullStarIcon from "./icons/FullStarIcon";
import ArrowIcon from "./icons/ArrowIcon";
import SectionHeader from "./SectionHeader";
import DoctorCard from "./DoctorCard";
import Button from "./Button";
import UserOpinionCarousel from "./UserOpinionCarousel";
import UserOpinionSection from "./UserOpinionSection";
import ShareComponent from "./ShareComponent";
import DoctorPageSkeleton from "./DoctorPageSkeleton";

function DoctorPage({ doctor, session }) {
  const { featuredDoctors } = useData();
  const { usersOpinions } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slides = [];
  for (let i = 0; i < usersOpinions.length; i += 3) {
    slides.push(usersOpinions.slice(i, i + 3));
  }
  if (!doctor) {
    return <DoctorPageSkeleton />;
  }

  return (
    // In DoctorPage component, change the first div to:
    <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[72px] mt-8 sm:mt-12 md:mt-16 lg:mt-20 bg-white">
      {" "}
      {/* Main doctor info section */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 border border-[#DADADA] rounded-lg p-3 md:p-4">
        {/* Doctor image and stats */}
        <div className="flex flex-col w-full lg:w-auto">
          <div className="w-full sm:w-[350px] md:w-[400px] lg:w-[448px] h-[280px] sm:h-[320px] md:h-[350px] p-2 border border-[#EDEDED] rounded-lg flex justify-center items-center mx-auto lg:mx-0">
            <Image
              src={doctor.imageSrc}
              alt="doctor image"
              width={317}
              height={317}
              className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] lg:w-[317px] lg:h-[317px] rounded-full object-cover border-2 border-[#B0E3FE]"
              quality={100}
              priority
            />
          </div>

          {/* Stats row - responsive layout */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-2 mt-6 lg:mt-8">
            <p className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-2 sm:gap-4 lg:gap-4 text-center">
              <CheckCircleIcon />
              <span className="text-sm md:text-base">2156 موعد ناجح</span>
            </p>
            <p className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-2 sm:gap-4 lg:gap-4 text-center">
              <ThumbUpIcon />
              <span className="text-sm md:text-base">
                ٪99 توصيات المستخدمين
              </span>
            </p>
            <p className="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-2 sm:gap-4 lg:gap-4 text-center">
              <FullStarIcon />
              <span className="text-sm md:text-base">5 (2475 تعليقًا)</span>
            </p>
          </div>
        </div>

        {/* Doctor details and booking */}
        <div className="flex-1 flex flex-col lg:justify-between p-2 md:p-4 lg:p-8">
          <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-4">
            {/* Doctor info */}
            <div className="p-2 md:p-4 w-full xl:w-[250px]">
              <p className="text-xl md:text-2xl font-bold">
                {doctor.sex === "male" ? "دكتور " : "دكتورة "}
                {doctor.name.split(" ")[0]}
              </p>
              <p className="font-medium text-sm md:text-base">
                {doctor.specialty}
              </p>
              <div className="flex items-center mt-4 gap-4">
                <ShareComponent />
                <span>
                  <RedHeart />
                </span>
              </div>
              <p className="text-sm md:text-base mb-4 border-b border-gray-200 p-2 md:p-4">
                رمز النظام الطبي {doctor.code}
              </p>
              <p className="text-sm md:text-base mb-4 border-b border-gray-200 p-2 md:p-4">
                نوع النشاط: {doctor.activityType}
              </p>
              <p className="text-sm md:text-base mb-4 p-2 md:p-4">
                خبرة اكثر من {doctor.numOfExperience} سنة
              </p>
            </div>

            {/* Booking card */}
            <div className="p-3 md:p-4 border border-[#EDEDED] w-full xl:w-[394px] h-fit rounded-lg">
              <h3 className="text-base md:text-lg font-bold mb-4">
                موعد زيارة حضورية
              </h3>
              <p className="flex items-center gap-2 mb-4 text-sm md:text-base">
                <span>
                  <LocationIcon iconColor={"#6000d6"} />
                </span>
                <span className="truncate">{doctor.location}</span>
              </p>
              <div className="flex justify-between items-center gap-2 mt-6 md:mt-8 mb-4">
                <p className="text-sm md:text-base">أول موعد متاح</p>
                <p className="text-sm md:text-base">
                  {doctor.firstAvailableTime}
                </p>
              </div>
              <Link href={`/doctors/${doctor.id}/reservation`}>
                <Button
                  text="حجز موعد"
                  variant="primary"
                  className="w-full"
                  rounded
                />
              </Link>
            </div>
          </div>

          {/* Specialties */}
          <div className="mt-6 lg:mt-0">
            <h3 className="text-base md:text-lg font-bold mb-4">التخصصات</h3>
            <div className="flex flex-wrap w-full max-w-[660px]">
              {doctor.listOfSpecialties.map((specialty) => (
                <span
                  key={specialty}
                  className="flex items-center gap-2 rounded-lg ml-2 mb-2 text-xs sm:text-sm md:text-base font-medium bg-[#EDEDED] py-2 px-3 md:px-6"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Doctor details and contact cards */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4 md:gap-6 lg:gap-2 my-6 md:my-12">
        {/* Doctor description card */}
        <div className="w-full lg:w-1/2 p-3 md:p-4 rounded-xl bg-[#F9F9F9] min-h-[200px] md:h-[243px]">
          <h3 className="text-lg md:text-2xl font-bold mb-4">
            {doctor.sex === "male" ? "دكتور " : "دكتورة "}
            {doctor.name.split(" ")[0]}
          </h3>
          <p className="text-base md:text-lg mb-4">
            خدمات: {doctor.detailedSpecialization}
          </p>
        </div>

        {/* Contact information card */}
        <div className="w-full lg:w-1/2 p-3 md:p-4 rounded-xl bg-[#F9F9F9] min-h-[200px] md:h-[243px]">
          <p className="text-lg md:text-2xl font-bold mb-4">
            عنوان عيادة {doctor.sex === "male" ? "الدكتور " : "الدكتورة "}
          </p>
          <p className="flex items-start md:items-center text-sm md:text-lg mb-4 md:mb-8 gap-3 md:gap-4">
            <span className="flex-shrink-0 mt-1 md:mt-0">
              <LocationIcon iconColor={"#6000d6"} />
            </span>
            <span className="break-words">{doctor.location}</span>
          </p>
          <p className="flex items-center text-sm md:text-lg mb-4 md:mb-8 gap-3 md:gap-4">
            <PhoneIcon color={"#6000d6"} />
            <span>{doctor.phoneNumber}</span>
          </p>
          <p className="flex items-center text-sm md:text-lg mb-4 md:mb-8 gap-3 md:gap-4">
            <EmailIcon iconColor={"#6000d6"} />
            <span className="break-all text-xs sm:text-sm md:text-lg">
              {doctor.email}
            </span>
          </p>
        </div>
      </div>
      {/* User opinions section */}
      <SectionHeader
        title="آراء المرضى أو تجارب المرضى"
        linkHref="/opinions"
        linkText="عرض الكل"
        linkColor="#6000D6"
        Icon={ArrowIcon}
        iconProps={{ direction: "left" }}
      />
      <UserOpinionCarousel opinions={usersOpinions} doctor={doctor} />
      <UserOpinionSection
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        session={session}
      />
      {/* Similar doctors section */}
      <SectionHeader
        title="أطباء بتخصص مشابه"
        linkHref={`/doctors`}
        linkText="عرض الكل"
        linkColor="#6000D6"
        Icon={ArrowIcon}
        iconProps={{ direction: "left" }}
      />
      {/* Responsive doctor cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 pb-4 my-8 md:my-12">
        {featuredDoctors.map((doctor, index) => (
          <div key={index} className="w-full max-w-[390px] mx-auto" dir="rtl">
            <DoctorCard {...doctor} variant="withCustomer" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorPage;
