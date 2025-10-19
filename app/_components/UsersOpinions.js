"use client";
import { useData } from "@/context/DataContext";
import SectionHeader from "./SectionHeader";
import UserOpinionCard from "./UserOpinionCard";

function UsersOpinions() {
  const { usersOpinions } = useData();
  return (
    <section className="border-b border-[#E5E7EB] py-8 template">
      <SectionHeader
        subtext="آراء"
        title="آراء المستخدمين"
        description="أكثر من الف مستخدم استفادوا من خدمات"
        linkHref="/opinions"
        linkText="عرض المزيد من آراء المستخدمين"
      />
      <div
        className="flex overflow-x-auto gap-4 md:gap-8 pb-4"
        dir="ltr"
        style={{
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* IE and Edge */,
        }}
      >
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        `}</style>
        {usersOpinions.map((opinion, index) => (
          <div key={index} className="flex-none w-[398px] h-[348px]" dir="rtl">
            <UserOpinionCard {...opinion} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default UsersOpinions;
