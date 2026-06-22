// src/providers/api-provider.tsx
"use client";

import { useEffect } from "react";
import { setupInterceptors } from "@/lib/config/axiosInterceptor";

export default function ApiResponseProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    setupInterceptors();
  }, []);

  return <>{children}</>;
}