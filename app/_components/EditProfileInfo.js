"use client";
import { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import Button from "./Button";
import BirthdayPicker from "./BirthdayPicker";

function EditProfileInfo({ onCancel, onSave, profile }) {
  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // send updated data up
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-8 bg-white rounded-lg"
    >
      <h2 className="text-xl font-bold text-[#161F2C]">
        معلومات الحساب الشخصي
      </h2>

      <div className="flex items-center gap-6">
        <InputField
          id="firstName"
          name="firstName"
          label="الاسم"
          placeholder="الاسم"
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          id="lastName"
          name="lastName"
          label="اللقب"
          placeholder="اللقب"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-start gap-6">
        <BirthdayPicker
          value={formData.birthday}
          onChange={(val) => setFormData((p) => ({ ...p, birthday: val }))}
        />
        <InputField
          id="phone"
          name="phone"
          label="رقم الجوال"
          placeholder="رقم الجوال"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center gap-6">
        <InputField
          id="nationalNumber"
          name="nationalNumber"
          label="الرقم الوطني"
          placeholder="الرقم الوطني"
          value={formData.nationalNumber}
          onChange={handleChange}
        />
        <SelectField
          id="insuranceType"
          name="insuranceType"
          label="التأمين المشمول"
          options={[
            { value: "", label: "اختر نوع التأمين" },
            { value: "نوع 1", label: "نوع 1" },
            { value: "نوع 2", label: "نوع 2" },
          ]}
          value={formData.insuranceType}
          onChange={(e) =>
            setFormData((p) => ({ ...p, insuranceType: e.target.value }))
          }
        />
      </div>

      <div className="flex justify-end gap-4 mt-4">
        <Button
          text="الغاء"
          variant="outline"
          size="large"
          className="px-16"
          rounded
          onClick={onCancel}
        />
        <Button
          text="تاكيد"
          variant="primary"
          size="large"
          className="px-16"
          rounded
          type="submit"
        />
      </div>
    </form>
  );
}

export default EditProfileInfo;
