"use client";

import { useState } from "react";

function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    email: "",
    message: "",
  });

  // دالة لمعالجة التغييرات في حقول النموذج
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // دالة لمعالجة إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("بيانات النموذج المرسلة:", formData);
    // يمكنك إضافة منطق إرسال النموذج هنا، على سبيل المثال، استدعاء API.
    // بعد الإرسال، يمكنك إعادة تعيين النموذج.
    setFormData({
      name: "",
      phone: "",
      subject: "",
      email: "",
      message: "",
    });
    alert("تم الارسال بنجاح");
  };
  return (
    <div>
      <div className="px-8 py-10 bg-white shadow-md my-8">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center gap-12">
            <div className="flex flex-col gap-4 w-1/2 mb-8">
            
              <label className="text[14.57px] font-medium" htmlFor="name">
                الاسم الكامل
              </label>
              <input
                autoComplete="name"
                name="name"
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full font-bold text-[#868686] border-[1px] border-gray-300 p-4 rounded-lg focus:outline-primary-400 focus:outline-1  focus:shadow-lg focus:border-none"
              />
            </div>
            <div className="flex flex-col gap-4 w-1/2 mb-8">
              <label className="text[14.57px] font-medium" htmlFor="phone">
                رقم الهاتف
              </label>
              <input
                autoComplete="tel"
                name="phone"
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full font-bold text-[#868686] border-[1px] border-gray-300 p-4 rounded-lg focus:outline-primary-400 focus:outline-1  focus:shadow-lg focus:border-none"
              />
            </div>
          </div>
          <div className="flex justify-between items-center gap-12">
            <div className="flex flex-col gap-4 w-1/2 mb-8">
              <label className="text[14.57px] font-medium" htmlFor="subject">
                موضوع
              </label>
              <input
                autoComplete="off"
                name="subject"
                id="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="w-full font-bold text-[#868686] border-[1px] border-gray-300 p-4 rounded-lg focus:outline-primary-400 focus:outline-1  focus:shadow-lg focus:border-none"
              />
            </div>
            <div className="flex flex-col gap-4 w-1/2 mb-8">
              <label className="text[14.57px] font-medium" htmlFor="email">
                بريدك الالكتروني
              </label>
              <input
                autoComplete="email"
                name="email"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full font-bold text-[#868686] border-[1px] border-gray-300 p-4 rounded-lg focus:outline-primary-400 focus:outline-1  focus:shadow-lg focus:border-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-8">
            <label className="text[14.57px] font-medium" htmlFor="message">
              رسالتك
            </label>
            <textarea
              autoComplete="off"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full font-bold text-[#868686] border-[1px] border-gray-300 p-4 rounded-lg focus:outline-primary-400 focus:outline-1 focus:shadow-lg focus:border-none"
              rows="4"
              placeholder="اكتب رسالتك هنا"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className={`bg-primary-400 text-white py-4 px-8 rounded-lg ${
                formData.name === "" ||
                formData.phone === "" ||
                formData.subject === "" ||
                formData.email === "" ||
                formData.message === ""
                  ? "opacity-30 cursor-not-allowed"
                  : ""
              }`}
            >
              ارسال الان
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
