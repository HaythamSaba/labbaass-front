"use client";
import ClinicCard from "./ClinicCard";
import SectionHeader from "./SectionHeader";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategories, getClinics } from "../_lib/api";

function ClinicsList() {
  // ✅ Fetch clinics with React Query
  const { data: clinicsData, isLoading: clinicsLoading } = useQuery({
    queryKey: ["clinics"],
    queryFn: async () => {
      const res = await getClinics();
      return res.data || [];
    },
  });

  // ✅ Fetch categories with React Query
  const { data: categoriesData, isLoading: categoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await getCategories();
      return res.categories || [];
    },
  });

  const clinics = clinicsData || [];
  const categories = categoriesData || [];

  const categoryMap = useMemo(
    () => Object.fromEntries(categories.map((c) => [c.id, c.name])),
    [categories]
  );

  const loading = clinicsLoading || categoriesLoading;

  if (loading) return <div className="p-4 template">Loading clinics...</div>;

  return (
    <div className="border-b border-[#E5E7EB] py-8 template">
      <SectionHeader
        subtext="العيادات"
        title="العيادات ومراكز العلاج"
        linkHref="/clinics"
        linkText="مشاهدة المزيد"
      />

      <div
        className="flex overflow-x-auto gap-4 md:gap-8 pb-4 scrollbar-hide"
        dir="ltr"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {clinics.map((clinic) => (
          <div
            key={clinic.id}
            className="flex-none w-[423px] max-h-[454px]"
            dir="rtl"
          >
            <ClinicCard
              id={clinic.id}
              name={clinic.pharm_name}
              description={clinic.pharm_about}
              category={
                clinic.category_id
                  ? categoryMap[clinic.category_id]
                  : "غير محدد"
              }
              location={clinic.pharm_address}
              imageUrl={clinic.profile_picture}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClinicsList;
