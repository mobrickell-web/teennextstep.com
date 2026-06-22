"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type DashboardShellContextValue = {
  expanded: boolean;
  toggleExpanded: () => void;
};

const DashboardShellContext = createContext<DashboardShellContextValue | null>(
  null
);

export function DashboardShellProvider({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({
      expanded,
      toggleExpanded,
    }),
    [expanded, toggleExpanded]
  );

  return (
    <DashboardShellContext.Provider value={value}>
      {children}
    </DashboardShellContext.Provider>
  );
}

export function useDashboardShell() {
  const context = useContext(DashboardShellContext);
  if (!context) {
    throw new Error("useDashboardShell must be used within DashboardShellProvider");
  }
  return context;
}
