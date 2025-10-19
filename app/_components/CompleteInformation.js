"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import InfoIcon from "./icons/InfoIcon";
import TimerIcon from "./icons/TimerIcon";
import Image from "next/image";
import InputField from "./InputField";

function CompleteInformation({ setActiveItem }) {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes
  const [formData, setFormData] = useState({
    department: "green",
    doctor: "green",
    patientName: "me",
    phone: "1231231212",
    email: "",
    visitReason: "rggr",
  });

  const [submitted, setSubmitted] = useState(false);

  // Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      router.back();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, router]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const sec = (seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Simple validation helper
  const isFormValid = () => {
    return Object.entries(formData).every(([key, val]) => {
      if (key === "email") return true; // skip email
      return val.trim() !== "";
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (timeLeft <= 0) return;

    if (!isFormValid()) {
      alert("يرجى ملء جميع الحقول المطلوبة!");
      return;
    }

    setSubmitted(true);

    // 👉 Save form data (example: send to backend / Supabase)
    console.log("Form submitted:", formData);

    // Move to payment step
    setActiveItem("payment");
  };

  return (
    <div className="px-4 mt-8">
      {/* Info + Timer */}
      <div className="p-6 bg-[#f4f4f4] rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <InfoIcon />
          <p>لم يكتمل موعدك بعد. يرجى إتمام طلبك لمتابعة العملية.</p>
        </div>
        {timeLeft > 0 ? (
          <p className="text-lg flex items-center gap-2 text-[#00448E] font-bold">
            <TimerIcon /> {formatTime(timeLeft)}
          </p>
        ) : (
          <p className="text-red-600 font-bold">
            انتهت صلاحية الموعد. سيتم إعادة توجيهك للصفحة السابقة.
          </p>
        )}
      </div>

      {/* Form + Image */}
      <div className="mt-10 flex flex-col items-start justify-between md:flex-row gap-6">
        {/* Form */}
        <form className="flex flex-col gap-4 flex-1" onSubmit={handleSubmit}>
          <InputField
            label="اختيار القسم"
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            requiredStar
            className="w-full"
          />

          <InputField
            label="اختيار اسم الطبيب"
            type="text"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            requiredStar
            className="w-full"
          />

          <InputField
            label="اسم المريض"
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            requiredStar
            className="w-full"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="رقم الهاتف"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="05xxxxxxxx"
              pattern="[0-9]{10}"
              requiredStar
              className="w-full"
            />
            <InputField
              label="البريد الإلكتروني"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              التفاصيل <span className="text-red-500">*</span>
            </label>
            <textarea
              name="visitReason"
              rows="4"
              value={formData.visitReason}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="رسالة ضرورية"
              required
            ></textarea>
          </div>

          <div className="flex justify-end mt-10">
            <button
              type="submit"
              disabled={!isFormValid() || submitted || timeLeft <= 0}
              className={`py-3 font-medium px-24 rounded-lg transition ${
                isFormValid() && !submitted && timeLeft > 0
                  ? "bg-[#E37600] text-white hover:bg-[#d96a00]"
                  : "bg-[#EDEDED] text-[#878787] cursor-not-allowed"
              }`}
            >
              تقديم الطلب
            </button>
          </div>
        </form>

        {/* Image */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/images/continue-infoImage-image.png"
            width={615}
            height={788}
            alt="Doctor"
          />
        </div>
      </div>
      <div className="mt-10 p-6 flex justify-center items-center gap-4 text-center">
        <p className="text-lg flex items-center gap-2 text-[#00448E] font-bold">
          اختبر أفضل الخدمات الطبية فقط مع لاباس
        </p>
      </div>
    </div>
  );
}

export default CompleteInformation;
