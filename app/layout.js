"use client";
import "./globals.css";
import { Changa } from "next/font/google";
import { DataProvider } from "@/context/DataContext";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const changa = Changa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  // ✅ Create QueryClient instance (one per user session)
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 2 * 60 * 1000, // Data considered fresh for 2 minutes
            cacheTime: 5 * 60 * 1000, // Keep unused data in cache for 5 minutes
            refetchOnWindowFocus: true, // Refetch when user returns to tab
            refetchOnReconnect: true, // Refetch when internet reconnects
            retry: 1, // Retry failed requests once
          },
        },
      })
  );

  return (
    <html lang="ar" dir="rtl" className={changa.className}>
      <body>
        <QueryClientProvider client={queryClient}>
          <DataProvider>{children}</DataProvider>
          <Toaster position="top-center" reverseOrder={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
