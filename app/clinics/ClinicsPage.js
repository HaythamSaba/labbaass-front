"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AllClinics from "../_components/AllClinics";
import Filter from "../_components/Filter";
import Classification from "../_components/Classification";
import SearchIcon from "../_components/icons/SearchIcon";
import { useQuery } from "@tanstack/react-query";
import { getCategories, getMunicipals } from "../_lib/api";

export default function ClinicsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ✅ Fetch categories with React Query
  const { data: categoriesData } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await getCategories();
      return res.categories || [];
    },
  });

  // ✅ Fetch municipals with React Query
  const { data: municipalsData } = useQuery({
    queryKey: ["municipals"],
    queryFn: async () => {
      const res = await getMunicipals();
      return res.data || [];
    },
  });

  const categories = categoriesData || [];
  const municipals = municipalsData || [];

  // ✅ Initialize filters from URL
  const [selectedCities, setSelectedCities] = useState(
    searchParams.getAll("city")
  );
  const [selectedSpecialties, setSelectedSpecialties] = useState(
    searchParams.getAll("specialty")
  );
  const [availableAppointments, setAvailableAppointments] = useState(
    searchParams.get("available") === "true"
  );
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const classification = searchParams.get("classification") ?? "all";

  // ✅ Track filtered count from AllClinics
  const [filteredCount, setFilteredCount] = useState(0);

  // ✅ Wrap setFilteredCount with useCallback to stabilize the reference
  const handleCountChange = useCallback((count) => {
    setFilteredCount(count);
  }, []);

  const classificationFilters = [
    { id: "all", label: "الكل" },
    { id: "mostPopular", label: "الأكثر شعبية" },
    { id: "highestRating", label: "أعلى تقييم" },
    { id: "mostViews", label: "أعلى عرض" },
  ];

  const colors = {
    textColor: "#FFAE00",
    backgroundColor: "#FFAE0033",
  };


  // ✅ Sync filters + searchQuery to URL
  useEffect(() => {
    const params = new URLSearchParams();

    if (classification !== "all") params.set("classification", classification);
    selectedCities.forEach((c) => params.append("city", c));
    selectedSpecialties.forEach((s) => params.append("specialty", s));
    if (availableAppointments) params.set("available", "true");
    if (searchQuery) params.set("q", searchQuery);

    router.replace(`?${params.toString()}`);
  }, [
    classification,
    selectedCities,
    selectedSpecialties,
    availableAppointments,
    searchQuery,
    router,
  ]);

  return (
    <div className="px-[72px] mt-20">
      {/* 🔎 Search Input */}
      <div className="flex justify-center">
        <div className="flex justify-center items-center w-full lg:w-[808px] max-w-[808px] rounded-lg z-10 relative overflow-hidden">
          <input
            type="text"
            placeholder="ابحث عن عيادات طبيب"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-14 md:h-16 p-4 pl-10 md:pl-12 outline-none bg-[#f5f5f5] rounded-lg placeholder-[#4D515C]"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-900" textColor="#4D515C" />
          </div>
        </div>
      </div>

      {/* 🏥 Filters + Clinics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[392px_1fr] min-h-[1580px] gap-4 mt-6">
        <Filter
          selectedCities={selectedCities}
          onCityChange={setSelectedCities}
          selectedSpecialties={selectedSpecialties}
          onSpecialtyChange={setSelectedSpecialties}
          availableAppointments={availableAppointments}
          onAvailableToggle={setAvailableAppointments}
          municipals={municipals}
          categories={categories}
          textColor={colors.textColor}
          backgroundColor={colors.backgroundColor}
        />

        <div>
          <Classification
            active={classification}
            ClassificationName={"التصنيف"}
            classificationFilters={classificationFilters}
            textColor="#6000D6"
            backgroundColor="#6000D61A"
            itemCount={filteredCount}
          />
          <AllClinics
            filter={classification}
            cityFilter={selectedCities}
            specialtyFilter={selectedSpecialties}
            availableAppointments={availableAppointments}
            searchQuery={searchQuery}
            municipals={municipals}
            categories={categories}
            onCountChange={handleCountChange} // ✅ Pass stable callback
          />
        </div>
      </div>
    </div>
  );
}
