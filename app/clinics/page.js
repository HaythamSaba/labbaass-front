"use client";

import { Suspense } from "react";
import ClinicsPage from "./ClinicsPage";

export default function Page() {
  return (
    <Suspense
      fallback={<div className="p-6 text-center">Loading clinics...</div>}
    >
      <ClinicsPage />
    </Suspense>
  );
}
