import ContactUsForm from "../_components/ContactUsForm";
import ArrowIcon from "../_components/icons/ArrowIcon";
import FiiledPhoneIcon from "../_components/icons/FiiledPhoneIcon";
import FilledEmailIcon from "../_components/icons/FilledEmailIcon";
import FilledLocationIcon from "../_components/icons/FilledLocationIcon";

function page() {
  return (
    <div className="template mt-10">
      <div className="flex items-center gap-2 text-sm text-[#737373] mb-32">
        الرئيسية <ArrowIcon direction="left" />
        تواصل معنا
      </div>
      <div className="flex gap-16">
        <div className="w-1/2 flex flex-col gap-12">
          <p className="text-3xl font-semibold text-[#737373]">تواصل معنا</p>
          <p className="text-[10px] font-normal tracking-[-2px]">
            مرحبا بكم في عيادة النور متعددة الإختصاصات، نوفر لكم خدماتنا مرحبا
            بكم في عيادة النور متعددة الإختصاصات، نوفر لكم خدماتنا على مدار
            الأسبوع 24/7 بطاقم طبي محترف يسهر على ضمان راحتكم
            <br /> على مدار الأسبوع 24/7 بطاقم طبي محترف يسهر على ضمان راحتكم
            <br /> مرحبا بكم في عيادة النور متعددة الإختصاصات، نوفر لكم خدماتنا
            مرحبا بكم في عيادة النور متعددة الإختصاصات، نوفر لكم خدماتنا على
            <br />
            مدار الأسبوع 24/7 بطاقم طبي محترف يسهر على ضمان راحتكم
            <br /> على مدار الأسبوع 24/7 بطاقم طبي محترف يسهر على ضمان راحتكم
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-normal flex justify-between items-center">
              <FilledLocationIcon />
              حي العناصر، بناية رقم 23، ولاية الجزائر
            </p>
            <p className="text-sm font-normal flex justify-between items-center">
              <FilledEmailIcon />
              clinique.nour@gmail.com
            </p>
            <p className="text-sm font-normal flex justify-between items-center">
              <FiiledPhoneIcon />
              0550 00 00 00
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center bg-[#E0E0E0] rounded-2xl">
          <span className="text-sm font-semibold py-2 px-5 bg-[#868686] rounded-2xl">
            فتح في MAPS
          </span>
        </div>
      </div>
      <ContactUsForm />
    </div>
  );
}

export default page;
