import ClinicDetails from "@/app/_components/ClinicDetails";
import { getCategories, getClinicDetails } from "@/app/_lib/api";

export default async function Page({ params }) {
  const { clinicId } = await params;

  try {
    const { clinic, doctors, workTime } = await getClinicDetails(clinicId);
    const categoriesRes = await getCategories();
    const categories = categoriesRes.categories || [];
    if (!clinic || !clinic.id) {
      return (
        <div className="p-6 text-center text-red-500">
          لم يتم العثور على هذه العيادة 🚫
        </div>
      );
    }

    return (
      <div className="p-6">
        <ClinicDetails
          id={clinic.id}
          name={clinic.pharm_name}
          description={clinic.pharm_about}
          location={clinic.pharm_address}
          phoneNumber={clinic.user_Phone_Number}
          clinicOutside={clinic.background_image}
          categoriesIds={clinic.categories_id} // ✅ Add this line
          allCategories={categories}
          mainCategory={clinic.category_id}
          doctors={doctors}
          workTime={workTime}
        />
      </div>
    );
  } catch (error) {
    console.error("Error loading clinic details:", error);
    return (
      <div className="p-6 text-center text-red-500">
        حدث خطأ أثناء تحميل بيانات العيادة ⚠️
      </div>
    );
  }
}
