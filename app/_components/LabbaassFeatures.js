import Image from "next/image";
import TimeTableIcon from "./icons/TimeTableIcon";
import VideoIcon from "./icons/VideoIcon";
import ManageHistoryIcon from "./icons/ManageHistoryIcon";
import CircleNotification from "./icons/CircleNotification";

const features = [
  {
    id: 1,
    title: "حجز موعد.",
    description:
      "إمكانية اختيار مستشار بتخصصات مختلفة ومتوافقة مع الاحتياجات الفردية.",
    Icon: TimeTableIcon,
  },
  {
    id: 2,
    title: "استشارة عبر الإنترنت.",
    description:
      "إمكانية اختيار مستشار بتخصصات مختلفة ومتوافقة مع الاحتياجات الفردية.",
    Icon: VideoIcon,
  },
  {
    id: 3,
    title: "إدارة الملف الطبي.",
    description:
      "إمكانية اختيار مستشار بتخصصات مختلفة ومتوافقة مع الاحتياجات الفردية.",
    Icon: ManageHistoryIcon,
  },
  {
    id: 4,
    title: "تذكير بالموعد.",
    description:
      "إمكانية اختيار مستشار بتخصصات مختلفة ومتوافقة مع الاحتياجات الفردية.",
    Icon: CircleNotification,
  },
];

function LabbaassFeatures() {
  return (
    <section className="border-t border-[#E4E4E4] template mt-20 mb-20 pt-20 flex flex-col">
      <section className="flex flex-col lg:flex-row items-center md:items-start gap-10 lg:gap-20">
        {/* Image Section */}
        <div className=" max-w-full sm:w-[389px] flex items-center justify-center lg:justify-start">
          <Image
            src="/images/features-image.png"
            alt="Feature image"
            width={389}
            height={394}
            priority
            quality={100}
            className="w-full h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <h2 className="font-changa font-bold text-2xl tracking-normal">
            ميزات <span className="text-[#FFAE00]">لباس</span>
          </h2>

          {/* Features List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            {features.map(({ id, title, description, Icon }) => (
              <li key={id}>
                <div className="flex items-center gap-3 mb-5 text-primary-700">
                  <Icon />
                  <p className="font-bold text-lg tracking-normal text-secondary-800">
                    {title}
                  </p>
                </div>
                <div className="ml-8">
                  <p className="max-w-[240px] sm:w-full font-medium text-lg leading-[180%] tracking-normal text-primary-color">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}

export default LabbaassFeatures;
