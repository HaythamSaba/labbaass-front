"use client";

import { useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DoctorDetails from "./DoctorDetails";
import { getAllDoctors } from "../_lib/api";
import { useData } from "@/context/DataContext";

function AllDoctors({ filter, cityFilter, specialtyFilter, onCountChange }) {
  // --- 1️⃣ Fetch all doctors directly ---
  const {
    data: doctorsResponse,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["allDoctors"],
    queryFn: getAllDoctors,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const doctorsData = doctorsResponse?.data || [];

  // --- 2️⃣ Memoized filtering logic ---
  const doctorsToRender = useMemo(() => {
    let filtered = [...doctorsData];

    // Sorting
    if (filter === "mostPopular") {
      filtered.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    } else if (filter === "highestRating") {
      filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (filter === "discount") {
      filtered.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    }

    // City filtering
    if (cityFilter?.length) {
      filtered = filtered.filter((doctor) =>
        cityFilter.some((city) =>
          doctor.pharm_address?.toLowerCase().includes(city.toLowerCase())
        )
      );
    }

    // Specialty filtering
    if (specialtyFilter?.length) {
      filtered = filtered.filter((doctor) =>
        specialtyFilter.includes(doctor.category)
      );
    }

    return filtered;
  }, [doctorsData, filter, cityFilter, specialtyFilter]);

  useEffect(() => {
    if (onCountChange) {
      onCountChange(doctorsToRender.length);
    }
  }, [doctorsToRender.length, onCountChange]);

  // --- 3️⃣ Loading & Error States ---
  if (isLoading)
    return (
      <p className="text-center mt-10 text-gray-600">
        جارٍ تحميل قائمة الأطباء...
      </p>
    );

  if (error)
    return (
      <p className="text-center mt-10 text-red-600">
        حدث خطأ أثناء تحميل البيانات.
      </p>
    );

  // --- 4️⃣ Empty State ---
  if (!doctorsToRender.length)
    return (
      <p className="text-center mt-10 text-gray-600">
        لا يوجد أطباء متاحين حسب المعايير المحددة
      </p>
    );

  // --- 5️⃣ Render Doctors ---
  return (
    <div className="rounded-2xl grid grid-cols-1 md:grid-cols-1 pl-4 gap-8 bg-[#FAFAFA]">
      {doctorsToRender.map((doctor) => (
        <DoctorDetails
          key={doctor.id}
          variant="withContact"
          data={{
            id: doctor.id,
            name: doctor.pharm_name,
            specialization: doctor.category,
            imageSrc: doctor.profile_picture?.startsWith("http")
              ? doctor.profile_picture
              : `${process.env.NEXT_PUBLIC_API_BASE_URL}/${doctor.profile_picture}`,
            imageAlt: doctor.pharm_name,
            imageWidth: 82,
            imageHeight: 82,
            rating: doctor.rating || "—",
            reviewsCount: doctor.reviewsCount || 0,
            location: doctor.pharm_address,
            phoneNumber: doctor.phone,
            categoryName: "التخصص",
            category: doctor.category,
            services: "—",
            appointmentsBooked: "—",
            recommendationsPercentage: "—",
          }}
          buttonText="حجز موعد"
        />
      ))}
    </div>
  );
}

export default AllDoctors;
