import Image from "next/image";
import FavoriteHeartIcon from "./icons/FavoriteHeartIcon";
import RedHeart from "./icons/RedHeart";
import LocationIcon from "./icons/LocationIcon";
import PhoneIcon from "./icons/PhoneIcon";
import PhoneRightIcon from "./icons/PhoneRightIcon";

function MyDoctors() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex flex-col gap-4 bg-white border border-gray-300 p-6 rounded-xl">
        <div className="flex items-start justify-between ">
          <div className="flex items-center gap-4">
            <div>
              <Image
                src="/images/doctor-1.jpg"
                alt="doctor"
                width={82}
                height={82}
                className="rounded-full object-cover w-[82px] h-[82px]"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-[#090D12]">دکتر سلمی</p>
              <p className="text-[#94989E] text-sm">
                تخصص طب الأطفال وحديثي الولادة/ التخصص الدقيق في أمراض الجهاز
                الهضمي والكبد لدى الأطفال.
              </p>
            </div>
          </div>
          <div>
            <RedHeart />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_115px] mt-4 gap-4">
          <span className="flex items-center border-2 border-gray-200 rounded-full px-4 py-2 gap-2">
            <LocationIcon iconColor={"#636972"} />
            حي العناصر، بناية رقم 23، ولاية الجزائر
          </span>
          <span className="flex items-center text-[#636972] text-[12.8px] border-2 border-gray-200 rounded-full px-4 py-2 gap-2">
            <PhoneRightIcon color={"#636972"} />
            ۰۹۱۲۳۰۰۲۰۰۱
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white border border-gray-300 p-6 rounded-xl">
        <div className="flex items-start justify-between ">
          <div className="flex items-center gap-4">
            <div>
              <Image
                src="/images/doctor-1.jpg"
                alt="doctor"
                width={82}
                height={82}
                className="rounded-full object-cover w-[82px] h-[82px]"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-[#090D12]">دکتر سلمی</p>
              <p className="text-[#94989E] text-sm">
                تخصص طب الأطفال وحديثي الولادة/ التخصص الدقيق في أمراض الجهاز
                الهضمي والكبد لدى الأطفال.
              </p>
            </div>
          </div>
          <div>
            <RedHeart />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_115px] mt-4 gap-4">
          <span className="flex items-center border-2 border-gray-200 rounded-full px-4 py-2 gap-2">
            <LocationIcon iconColor={"#636972"} />
            حي العناصر، بناية رقم 23، ولاية الجزائر
          </span>
          <span className="flex items-center text-[#636972] text-[12.8px] border-2 border-gray-200 rounded-full px-4 py-2 gap-2">
            <PhoneRightIcon color={"#636972"} />
            ۰۹۱۲۳۰۰۲۰۰۱
          </span>
        </div>
      </div>
    </div>
  );
}

export default MyDoctors;
