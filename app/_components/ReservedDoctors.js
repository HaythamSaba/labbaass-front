import { featuredDoctors } from "@/data/appData";
import AppointmentWithDoctor from "./AppointmentWithDoctor";

function ReservedDoctors({ filter, session }) {
  // Create a variable to hold the filtered list
  let doctorsToRender = [];

  if (filter === "all") {
    // If filter is "all", render all doctors
    doctorsToRender = featuredDoctors;
  } else if (filter === "clinicAppointment") {
    // Correctly store the result of the filter operation
    doctorsToRender = featuredDoctors.filter(
      (doctor) => doctor.appointmentType === "موعد العيادة"
    );
  } else if (filter === "phoneCall") {
    doctorsToRender = featuredDoctors.filter(
      (doctor) => doctor.appointmentType === "استشارة هاتفية"
    );
  } else if (filter === "onlineConsultation") {
    doctorsToRender = featuredDoctors.filter(
      (doctor) => doctor.appointmentType === "استشارة عبر الإنترنت"
    );
  }

  return (
    <div>
      {doctorsToRender.map((doctor) => (
        <AppointmentWithDoctor
          key={doctor.id}
          data={doctor}
          buttonText="إرسال التعليق"
          session={session}
        />
      ))}
    </div>
  );
}

export default ReservedDoctors;
