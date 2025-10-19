import ComputerIcon from "./icons/ComputerIcon";
import SmartPhoneHealthCare from "./icons/SmartPhoneHealthCare";
import SmartPhoneRerservation from "./icons/SmartPhoneRerservation";
import SectionHeader from "./SectionHeader";

function WhyChooseUs() {
  const features = [
    {
      Icon: ComputerIcon,
      text: "تقييمات حقيقية من مرضى سابقين.",
    },
    {
      Icon: SmartPhoneHealthCare,
      text: "أكثر من 500 طبيب موثوق به",
    },
    {
      Icon: SmartPhoneRerservation,
      text: "احجز موعدك في أقل من دقيقة.",
    },
  ];

  return (
    <section className="template mt-20 mb-20 flex flex-col">
      <SectionHeader subtext="المزايا" title="لماذا تختارنا؟" />

      <ul className="grid gap-10 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {features.map(({ Icon, text }, index) => (
          <div
            key={index}
            className="hover:scale-[1.03] transition-transform ease-in duration-100 "
          >
            <li className="flex flex-col justify-center items-center rounded-lg p-5 gap-5 text-center shadow-accentued bg-white min-h-[210px]">
              <div className="py-5 border-b-2 w-fit">
                <Icon className="w-[60px] h-[60px]" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold">{text}</h3>
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
}

export default WhyChooseUs;
