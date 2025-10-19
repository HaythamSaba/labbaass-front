import Image from "next/image";
import Button from "./Button";
import ArrowIcon from "./icons/ArrowIcon";
import CalendarIcon from "./icons/CalendarIcon";
import LocationIcon from "./icons/LocationIcon";
import AppointmentIcon from "./icons/AppointmentIcon";
import InfoIcon from "./icons/InfoIcon";
import ShieldIcon from "./icons/ShieldIcon";

function AppointmentWithDoctor({ data, buttonText, session }) {
  const {
    name,
    sex,
    specialization,
    imageSrc,
    imageAlt,
    imageWidth,
    imageHeight,
    appointmentType,
  } = data;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg mt-4 flex flex-col gap-4 border-2 border-gray-200">
      {/* Top section */}
      <div className="bg-white flex flex-col sm:flex-row sm:items-start sm:gap-4 border-b pb-4 border-gray-200 text-right">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-[82px] h-[82px] object-cover rounded-full mx-auto sm:mx-0 mb-4 sm:mb-0 flex-shrink-0"
          width={imageWidth}
          height={imageHeight}
          quality={100}
        />
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-2 sm:gap-0">
            <p className="text-base text-black font-bold">
              {sex === "male" ? "دكتور" : "دكتورة"} {name}
            </p>
            <div>
              <span className="flex items-center gap-1 text-accent-600 bg-accent-100 py-2 px-4 rounded-full text-sm sm:text-base">
                <CalendarIcon />
                {appointmentType}
              </span>
            </div>
          </div>

          <p className="text-sm text-[#94989E]">{specialization}</p>

          <div className="flex flex-col md:flex-wrap md:flex-row items-start md:items-center gap-2 sm:gap-4 mt-2 text-sm">
            <p className="flex items-center gap-1 text-primary-400">
              <AppointmentIcon />
              <span className="text-[#161F2C] font-medium mr-2">
                تاريخ الموعد: 22 أبريل 2025 ۲۱:۳۰
              </span>
            </p>
            <span className="flex items-center gap-1">
              <InfoIcon />
              الحالة
              <span className="text-[#3ED965]">تم الانتهاء.</span>
            </span>
            <span className="flex items-center gap-1">
              <ShieldIcon />
              رقم التتبع ۲۳۴۴۳۵
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 mt-2 text-sm">
            <LocationIcon />
            <span>العنوان</span>
            <span>منطقه 6، خیابان بخارست، کوچه هشتم، پلاک 32</span>
          </div>
        </div>
      </div>

      {/* Middle section */}
      <div className="mt-4 text-[#94989E] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
        <div className="flex items-center gap-2 sm:gap-4">
          <span>اسم المريض</span>
          <span className="text-[#161F2C]">{session.user.name}</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <span>الرقم الوطني</span>
          <span className="text-[#161F2C]">۰۹۴۳۱۸۵۹۳۰</span>
        </div>
        <Button
          text={buttonText}
          variant="noBorder"
          className="text-[#00A6FB]"
          Icon={ArrowIcon}
          iconPosition="right"
          iconProps={{ direction: "left" }}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default AppointmentWithDoctor;
