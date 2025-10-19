import Image from "next/image";
import AddClinicForm from "../_components/AddClinicForm";

function Page() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col md:flex-row">
      {/* Form Section */}
      <div className="flex-1">
        <AddClinicForm />
      </div>

      {/* Image Section */}
      <div className="hidden md:block flex-1 relative max-w-[620px]">
        <Image
          src="/images/join-labbaass-image.png"
          alt="add-clinic"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </div>
  );
}

export default Page;
