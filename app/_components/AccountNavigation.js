"use client";
import { useState } from "react";
import MyCalenderIcon from "./icons/MyCalenderIcon";
import MyCommentsIcon from "./icons/MyCommentsMyCommentsIcon";
import MyDoctorsIcon from "./icons/MyDoctorsIcon";
import ProfileLogo from "./icons/ProfileLogo";

function AccountNavigation({ activeItem, setActiveItem }) {
  const getItemClass = (itemName) => {
    return `flex items-center gap-2 text-base p-5 transition-colors duration-200 cursor-pointer ${
      activeItem === itemName
        ? "text-accent-600 bg-[#FFAE001A]"
        : "text-[#454C56] hover:text-gray-900"
    }`;
  };

  const getIconColor = (itemName) => {
    return activeItem === itemName ? "#FFAE00" : "#454C56";
  };

  return (
    <div className="min-w-[405px] rounded-2xl border border-[#E4E4E4]">
      {/* الحساب الشخصي */}
      <div
        className={`${getItemClass("profile")} rounded-t-2xl`}
        onClick={() => setActiveItem("profile")}
      >
        <ProfileLogo iconColor={getIconColor("profile")} />
        الحساب الشخصي
      </div>
      {/* مواعيدي */}
      <div
        className={getItemClass("appointments")}
        onClick={() => setActiveItem("appointments")}
      >
        <MyCalenderIcon iconColor={getIconColor("appointments")} />
        مواعيدي
      </div>
      {/* تعليقاتي */}
      <div
        className={getItemClass("comments")}
        onClick={() => setActiveItem("comments")}
      >
        <MyCommentsIcon iconColor={getIconColor("comments")} />
        تعليقاتي
      </div>
      {/* أطبائي */}
      <div
        className={getItemClass("doctors")}
        onClick={() => setActiveItem("doctors")}
      >
        <MyDoctorsIcon iconColor={getIconColor("doctors")} />
        أطبائي
      </div>
    </div>
  );
}

export default AccountNavigation;
