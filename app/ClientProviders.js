"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DataProvider } from "@/context/DataContext";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function ClientProviders({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>{children}</DataProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </QueryClientProvider>
  );
}
