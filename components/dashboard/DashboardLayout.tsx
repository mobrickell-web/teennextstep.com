"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import DashboardSidebar from "./DashboardSidebar";
import DashboardTopbar from "./DashboardTopbar";
import { DashboardShellProvider, useDashboardShell } from "./DashboardShellContext";

type DashboardLayoutProps = {
  children: ReactNode;
};

function DashboardLayoutInner({ children }: DashboardLayoutProps) {
  const { expanded } = useDashboardShell();

  return (
    <div className="min-h-svh bg-background">
      <DashboardSidebar />

      <div
        className={cn(
          "flex min-h-svh flex-col transition-[padding] duration-200 ease-out",
          expanded ? "lg:pl-[260px]" : "lg:pl-[72px]"
        )}
      >
        <DashboardTopbar />
        <main className="flex-1 overflow-y-auto bg-background ">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <DashboardShellProvider>
      <DashboardLayoutInner>{children}</DashboardLayoutInner>
    </DashboardShellProvider>
  );
}
