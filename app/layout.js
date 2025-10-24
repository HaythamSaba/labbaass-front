import "./globals.css";
import { Changa } from "next/font/google";
import ClientProviders from "./ClientProviders";

const changa = Changa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Labbaass",
  description: "Your app description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={changa.className}>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
