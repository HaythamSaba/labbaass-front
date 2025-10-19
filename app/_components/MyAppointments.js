"use client";
import { useSearchParams } from "next/navigation";
import Classification from "./Classification";
import { useData } from "@/context/DataContext";
import ReservedDoctors from "./ReservedDoctors";

function MyAppointments({ session }) {
  const { featuredDoctors } = useData();
  console.log(featuredDoctors);
  const searchParams = useSearchParams();

  const classificationFilters = [
    { id: "all", label: "الكل" },
    { id: "clinicAppointment", label: "موعد العيادة" },
    { id: "phoneCall", label: "استشارة هاتفية" },
    { id: "onlineConsultation", label: "استشارة عبر الإنترنت" },
  ];
  const classification = searchParams.get("classification") ?? "all";

  return (
    <>
      <div className="flex-1">
        <Classification
          active={classification}
          classificationFilters={classificationFilters}
          ClassificationName={"نوع الموعد"}
          textColor="#00A6FB"
          backgroundColor="#EDF8FF"
        />
        <ReservedDoctors filter={classification} session={session}/>
      </div>
    </>
  );
}

export default MyAppointments;
