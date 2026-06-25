import type { Metadata } from "next";

import "./globals.css";
import { fontConfig } from "@/lib/config/fonts";
import QueryProvider from "@/lib/providers/QueryProvider";
import ApiResponseProvider from "@/lib/providers/ApiProvider";

export const metadata: Metadata = {
  title: "Teen Next",
  description: "Teen Next application",
  icons: {
    icon: "/images/landing-page/favicon.png",
    shortcut: "/images/landing-page/favicon.png",
    apple: "/images/landing-page/favicon.png",
  },
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