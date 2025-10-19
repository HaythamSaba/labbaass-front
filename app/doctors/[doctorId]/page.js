import { Suspense } from "react";
import DoctorPage from "@/app/_components/DoctorPage";
import DoctorPageSkeleton from "@/app/_components/DoctorPageSkeleton";
import { auth } from "@/app/_lib/auth";
import { featuredDoctors } from "@/data/appData";

export async function generateStaticParams() {
  return featuredDoctors.map((doctor) => ({
    doctorId: String(doctor.id),
  }));
}

export default async function Page({ params }) {
  const session = await auth();
  const { doctorId } = params;

  const doctor = featuredDoctors.find((c) => String(c.id) === doctorId);
  if (!doctor) {
    return (
      <div className="p-6 text-center text-red-500">
        لم يتم العثور على هذه الطبيب
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Suspense fallback={<DoctorPageSkeleton />}>
        <DoctorPage doctor={doctor} session={session} />
      </Suspense>
    </div>
  );
}