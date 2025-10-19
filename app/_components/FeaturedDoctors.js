"use client";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DoctorCard from "./DoctorCard";
import SectionHeader from "./SectionHeader";
import { getAllDoctors } from "../_lib/api";

// ✅ Helper function to generate realistic mock data
function generateMockStats(doctorId) {
  // Use doctor ID as seed for consistent random values
  const seed = doctorId * 137; // Prime number for better distribution

  // Generate rating between 4.0 and 5.0
  const rating = (4.0 + (seed % 10) / 10).toFixed(1);

  // Generate popularity between 50 and 500
  const popularity = 50 + (seed % 450);

  return { rating: parseFloat(rating), popularity };
}

const DoctorCardList = () => {
  // ✅ Fetch doctors with React Query
  const { data: doctorsData, isLoading: doctorsLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await getAllDoctors();
      return res.data || [];
    },
    staleTime: 2 * 60 * 1000,
    refetchOnWindowFocus: true,
  });

  // ✅ Add mock stats to doctors data
  const doctors = useMemo(() => {
    if (!doctorsData) return [];

    return doctorsData.map((doctor) => {
      const mockStats = generateMockStats(doctor.id);
      return {
        ...doctor,
        rating: mockStats.rating,
        popularity: mockStats.popularity,
      };
    });
  }, [doctorsData]);

  if (doctorsLoading) {
    return <div className="p-4 template">جاري تحميل الأطباء...</div>;
  }

  if (!doctors.length) {
    return (
      <div className="p-4 template text-center text-gray-600">
        لا يوجد أطباء متاحين حالياً
      </div>
    );
  }

  return (
    <div className="border-b border-[#E5E7EB] py-8 template">
      <SectionHeader
        subtext="الأطباء"
        title="قسم الأطباء المميزين"
        linkHref="/doctors"
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
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="flex-none w-[390px] max-h-max"
            dir="rtl"
          >
            <DoctorCard
              id={doctor.id}
              name={doctor.pharm_name}
              imageSrc={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${doctor.profile_picture}`}
              specialty={doctor.category}
              location={doctor.pharm_address}
              clinic={doctor.pharm_name}
              rating={doctor.rating}
              popularity={doctor.popularity}
              variant="simple"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorCardList;
