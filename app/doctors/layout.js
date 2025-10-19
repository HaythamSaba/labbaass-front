import { ReservationProvider } from "@/context/useReservation";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

export default function DoctorLayout({ children }) {
  return (
    <ReservationProvider>
      <Header />
      {children}
      <Footer />
    </ReservationProvider>
  );
}
