"use server";

import { auth, signIn } from "./auth";

export async function updateProfile(data) {
  // هنا يمكنك إضافة منطق تحديث الملف الشخصي
  // على سبيل المثال، يمكنك إرسال البيانات إلى قاعدة بيانات أو API
  const session = await auth();
  if (!session) throw new Error("you must be logged in to update profile");

  const { name, familyName, phone, nationalNumber, insuranceType, birthday } =
    data;
  if (!/^(0[1-9]|[1-4][0-9]|5[0-8]|99)\d{16}$/.test(nationalNumber)) {
    throw new Error("الرقم الوطني غير صالح");
  }

  // تحديث الملف الشخصي في قاعدة البيانات
  const updatedUser = {
    ...session.user,
    name: `${name} ${familyName}`,
    phone,
    nationalNumber,
    insuranceType,
    birthday,
  };
  console.log("Updated user profile:", updatedUser);
  return updatedUser;
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
}
