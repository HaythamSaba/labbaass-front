"use client";
import ClinicCard from "./ClinicCard";
import { getClinics } from "../_lib/api";
import { useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

function AllClinics({
  cityFilter,
  specialtyFilter,
  availableAppointments,
  searchQuery,
  categories,
  municipals = [],
  onCountChange,
}) {
  const {
    data: clinicsData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["clinics"],
    queryFn: async () => {
      const res = await getClinics();
      return res.data || [];
    },
    staleTime: 2 * 60 * 1000,
    refetchOnWindowFocus: true,
  });

  const clinics = clinicsData || [];
  const categoryMap = useMemo(
    () => Object.fromEntries(categories.map((c) => [c.id, c.name])),
    [categories]
  );

  const categoryNameToIdMap = useMemo(
    () => Object.fromEntries(categories.map((c) => [c.name, c.id])),
    [categories]
  );

  const municipalNameToIdMap = useMemo(
    () => Object.fromEntries(municipals.map((m) => [m.municipal_name, m.id])),
    [municipals]
  );

  const selectedCategoryIds = useMemo(
    () =>
      specialtyFilter
        .map((name) => categoryNameToIdMap[name])
        .filter((id) => id !== undefined),
    [specialtyFilter, categoryNameToIdMap]
  );

  const selectedMunicipalIds = useMemo(
    () =>
      cityFilter
        .map((name) => municipalNameToIdMap[name])
        .filter((id) => id !== undefined),
    [cityFilter, municipalNameToIdMap]
  );

  const clinicsToRender = useMemo(() => {
    let filtered = [...clinics];

    if (searchQuery) {
      filtered = filtered.filter((clinic) =>
        clinic.pharm_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedMunicipalIds.length) {
      filtered = filtered.filter((clinic) =>
        selectedMunicipalIds.includes(clinic.municipal_id)
      );
    }

    if (selectedCategoryIds.length) {
      filtered = filtered.filter((clinic) =>
        clinic.categories_id?.some((id) => selectedCategoryIds.includes(id))
      );
    }

    if (availableAppointments) {
      filtered = filtered.filter((clinic) => clinic.nbr_of_doctors > 0);
    }

    return filtered;
  }, [
    clinics,
    searchQuery,
    selectedMunicipalIds,
    selectedCategoryIds,
    availableAppointments,
  ]);

  // ✅ Report count with stable callback
  useEffect(() => {
    console.log("🔢 Filtered count changed:", clinicsToRender.length); // Debug
    if (onCountChange) {
      onCountChange(clinicsToRender.length);
    }
  }, [clinicsToRender.length, onCountChange]);

  if (isLoading) return <div className="p-4">جاري تحميل العيادات...</div>;
  if (error)
    return (
      <div className="p-4 text-red-500">
        خطأ: {error.message}
        <button
          onClick={() => refetch()}
          className="mr-4 px-4 py-2 bg-primary text-white rounded"
        >
          إعادة المحاولة
        </button>
      </div>
    );

  if (!clinicsToRender.length) {
    return (
      <p className="text-center mt-10 text-gray-600">
        لا توجد عيادات مطابقة للمعايير المحددة.
      </p>
    );
  }

  return (
    <div className="rounded-2xl grid grid-cols-1 md:grid-cols-2 pl-4 gap-8">
      {clinicsToRender.map((clinic) => (
        <ClinicCard
          key={clinic.id}
          id={clinic.id}
          name={clinic.pharm_name}
          description={clinic.pharm_about}
          categories={clinic.categories_id?.map((id) => categoryMap[id])}
          location={clinic.pharm_address}
          imageUrl={clinic.profile_picture}
          ButtonText="مشاهدة الخدمات"
        />
      ))}
    </div>
  );
}

export default AllClinics;
