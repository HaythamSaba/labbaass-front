"use client";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

// Placeholder for a simple, reusable Button component.

// SVG icon for the green checkmark
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3ED965"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-24 h-24 mb-6"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-8.56"></path>
    <path d="M22 4 12 14.01l-3-3"></path>
  </svg>
);
const shadowStyle = {
  boxShadow: "0 10px 20px -5px rgba(62, 217, 101, 0.4)",
};

export default function SuccessfullyPayment() {
  const trackingId = "14585255586";

  return (
    <div className="relative flex items-start p-4 sm:p-8 justify-center mx-auto mt-20 text-[#2FA766]">
      <Image
        src="/images/green-background.png"
        alt="Background"
        width={800}
        height={600}
        className="absolute -top-5 "
      />
      <div className="text-center max-w-2xl w-full flex flex-col items-center">
        {/* Success Icon */}
        <CheckIcon />

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          تمت عملية الدفع بنجاح.
        </h1>

        {/* Descriptive Paragraph */}
        <p className="text-lg leading-relaxed mb-6">
          تم تسجيل موعدك بنجاح. يُرجى أن تكون مستعدًا لمقابلة طبيبك في التاريخ
          والوقت المحددين.
        </p>

        {/* Tracking Number */}
        <p className="text-sm font-medium mb-8">
          رقم تتبع الدفع: <span className="text-sm">{trackingId}</span>
        </p>

        {/* Buttons */}
        {/* The buttons are stacked vertically on small screens and side-by-side on larger screens */}
        <div className="flex flex-col sm:flex-row-reverse sm:justify-center gap-4 w-full">
          <Link href="/account" className="w-full sm:w-auto">
            <Button text="متابعة الموعد" variant="blueOutline" rounded />
          </Link>
          <Link href="/" className="w-full sm:w-auto">
            <Button
              text="العودة إلى الصفحة الرئيسية"
              variant="blueBackground"
              rounded
              className="bg-blue-500"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
