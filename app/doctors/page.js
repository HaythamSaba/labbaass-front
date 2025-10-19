"use client";

import { Suspense } from "react";
import DoctorsPage from "../_components/DoctorsPage";

export default function Page() {
  return (
    <Suspense
      fallback={<div className="p-6 text-center bg-white">Loading doctors...</div>}
    >
      <DoctorsPage />
    </Suspense>
  );
}
