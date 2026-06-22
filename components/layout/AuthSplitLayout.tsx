"use client";

import { ReactNode } from "react";

import { Typography } from "@/components/ui/typography";

type AuthSplitLayoutProps = {
  children: ReactNode;
};

export default function AuthSplitLayout({ children }: AuthSplitLayoutProps) {
  return (
    <div className="grid min-h-screen min-w-0 lg:grid-cols-2">
      <div className="hidden min-h-screen bg-gradient-primary p-10 text-white lg:flex lg:flex-col lg:justify-between">
        <Typography variant="h3" as="p" className="text-white">
          Teen Next
        </Typography>
        <Typography variant="body-regular" className="max-w-sm text-white/80">
          Project scaffold — add your auth experience here.
        </Typography>
      </div>

      <div className="flex min-h-screen min-w-0 flex-col bg-background">
        {children}
      </div>
    </div>
  );
}
