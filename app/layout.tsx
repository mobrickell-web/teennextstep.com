import type { Metadata } from "next";

import "./globals.css";
import { fontConfig } from "@/lib/config/fonts";
import QueryProvider from "@/lib/providers/QueryProvider";
import ApiResponseProvider from "@/lib/providers/ApiProvider";

export const metadata: Metadata = {
  title: "Teen Next",
  description: "Teen Next application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${fontConfig.className} font-sans antialiased`}
        suppressHydrationWarning
      >
        <QueryProvider>
          <ApiResponseProvider>{children}</ApiResponseProvider>
        </QueryProvider>
      </body>
    </html>
  );
}