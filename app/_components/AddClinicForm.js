"use client";
import { useState } from "react";
import { toast } from "react-hot-toast"; // or whatever toast library you're using
import PhoneIcon from "./icons/PhoneIcon";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { useData } from "@/context/DataContext";
import CheckIcon from "./icons/CheckIcon";
import CloseIcon from "./icons/CloseIcon";
import { showSuccessToast } from "./showSuccessToast";

export default function AddClinicForm() {
  const { clinics } = useData();
  const specialties = clinics.map((clinic) => clinic.specialty);
  const cities = clinics.map((clinic) => clinic.city);
  const clinicNames = clinics.map((clinic) => clinic.name);

  const initialFormState = {
    name: "haytham",
    familyName: "abdulaziz",
    phone: "0591234567",
    sex: "male",
    systemCodeType: "123123",
    systemCode: "123",
    specialty: "",
    city: "",
    clinicName: "",
    clinicAddress: "",
    recommendation: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call or actual submission
      console.log("بيانات النموذج المرسلة:", formData);

      // You can replace this with your actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success toast
      showSuccessToast("تم تسجيل طلبك بنجاح");

      // Reset form
      setFormData(initialFormState);
    } catch (error) {
      // Error toast
      toast.error("حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.", {
        duration: 4000,
        position: "top-center",
        icon: null,
        style: {
          background: "#EF4444",
          color: "#fff",
          padding: "16px",
          borderRadius: "8px",
        },
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Validation for disabling submit
  const isDisabled =
    Object.values(formData).some((val) => val === "") || isSubmitting;

  return (
    <div className="flex-1">
      <div className="px-8 py-10 shadow-md my-8">
        <h1 className="font-bold text-2xl text-[#161F2C] mb-4">
          طلب الانضمام للأطباء في لاباس 🩺
        </h1>
        <p className="text-xl text-[#161F2C] mb-4 flex items-center">
          يرجى ملء النموذج أدناه، وسيتواصل معكم زملاؤنا في أقرب وقت ممكن.
          <PhoneIcon />
        </p>

        <form onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="flex justify-between items-center gap-12">
            <InputField
              id="name"
              name="name"
              label="الاسم"
              placeholder="الاسم"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputField
              id="familyName"
              name="familyName"
              placeholder="اللقب"
              label="اللقب"
              value={formData.familyName}
              onChange={handleChange}
            />
          </div>

          {/* Row 2 */}
          <div className="flex justify-between items-center gap-12">
            <InputField
              id="phone"
              name="phone"
              label="رقم الهاتف"
              placeholder="رقم الهاتف"
              type="tel"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
            />
            <SelectField
              id="sex"
              name="sex"
              label="جنس"
              value={formData.sex}
              onChange={handleChange}
              options={[
                { value: "", label: "اختر الجنس" },
                { value: "male", label: "ذكر" },
                { value: "female", label: "انثى" },
              ]}
            />
          </div>

          {/* Row 3 */}
          <div className="flex justify-between items-center gap-12">
            <SelectField
              id="systemCodeType"
              name="systemCodeType"
              label="نوع كود النظام الطبي"
              value={formData.systemCodeType}
              onChange={handleChange}
              options={[
                { value: "", label: "اختر نوع الكود" },
                { value: "systemCode1", label: "نوع 1" },
                { value: "systemCode2", label: "نوع 2" },
              ]}
            />
            <InputField
              id="systemCode"
              name="systemCode"
              placeholder="كود النظام الطبي"
              label="رمز النظام الطبي"
              type="text"
              value={formData.systemCode}
              onChange={handleChange}
            />
          </div>

          {/* Row 4 */}
          <div className="flex justify-between items-center gap-12">
            <SelectField
              id="specialty"
              name="specialty"
              label="تخصص"
              value={formData.specialty}
              onChange={handleChange}
              options={[
                { value: "", label: "اختر التخصص" }, // Default option first
                ...specialties.map((specialty) => ({
                  value: specialty,
                  label: specialty,
                })),
              ]}
            />
            <SelectField
              id="city"
              name="city"
              label="الولاية"
              value={formData.city}
              onChange={handleChange}
              options={[
                { value: "", label: "اختر المدينة" }, // Default option first
                ...cities.map((city) => ({
                  value: city,
                  label: city,
                })),
              ]}
            />
          </div>

          {/* Row 5 */}
          <div className="flex justify-between items-center gap-12">
            <SelectField
              id="clinicName"
              name="clinicName"
              label="اسم العيادة"
              value={formData.clinicName}
              onChange={handleChange}
              options={[
                { value: "", label: "اختر اسم العيادة" }, // Default option first
                ...clinicNames.map((clinicName) => ({
                  value: clinicName,
                  label: clinicName,
                })),
              ]}
            />
            <InputField
              id="clinicAddress"
              name="clinicAddress"
              placeholder="عنوان العيادة"
              label="عنوان العيادة"
              type="text"
              value={formData.clinicAddress}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <label className="text-base font-medium" htmlFor="recommendation">
              توضیحات
            </label>
            <input
              autoComplete="off"
              name="recommendation"
              id="recommendation"
              type="text"
              value={formData.recommendation}
              onChange={handleChange}
              className="w-full font-normal text-[#161F2C] border border-gray-300 p-4 rounded-lg focus:outline-primary-400 focus:shadow-lg"
              placeholder="توضیحات"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isDisabled}
              className={`bg-primary-400 text-white py-4 px-8 rounded-lg transition flex items-center gap-2 ${
                isDisabled
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-primary-500"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  جاري الإرسال...
                </>
              ) : (
                "ارسال الان"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
