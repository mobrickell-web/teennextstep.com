export const DASHBOARD_SHELL_HEADER_CLASS = "relative flex h-16 shrink-0 items-center";
export const DASHBOARD_SIDEBAR_WIDTH_EXPANDED = 260;
export const DASHBOARD_SIDEBAR_WIDTH_COLLAPSED = 72;
export const DASHBOARD_SIDEBAR_HOVER_CLASS = "hover:bg-primary-foreground/10";

export type DashboardNavItem = {
  href: string;
  label: string;
  icon?: string;
  badge?: number;
  children?: DashboardNavItem[];
};

export const DASHBOARD_NAV_ITEMS: DashboardNavItem[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/analytics", label: "Analytics" },
  { href: "/leads", label: "Leads" },
  { href: "/users", label: "Users" },
  { href: "/departments", label: "Departments" },
  { href: "/billing", label: "Billing" },
];

export function dashboardNavLinkClassName(active: boolean, expanded: boolean) {
  const base =
    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/40";
  const state = active
    ? "bg-primary-foreground/15 text-primary-foreground"
    : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground";
  const width = expanded ? "" : "justify-center px-2";
  return `${base} ${state} ${width}`;
}

export function isDashboardNavItemActive(pathname: string, item: DashboardNavItem) {
  if (item.href === "/dashboard") {
    return pathname === "/dashboard" || pathname.startsWith("/dashboard/");
  }
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}
