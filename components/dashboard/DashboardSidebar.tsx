"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, LayoutDashboard } from "lucide-react";

import {
  DASHBOARD_NAV_ITEMS,
  DASHBOARD_SHELL_HEADER_CLASS,
  DASHBOARD_SIDEBAR_WIDTH_COLLAPSED,
  DASHBOARD_SIDEBAR_WIDTH_EXPANDED,
  dashboardNavLinkClassName,
  DASHBOARD_SIDEBAR_HOVER_CLASS,
  isDashboardNavItemActive,
  type DashboardNavItem,
} from "@/lib/config/dashboard-nav";
import { cn } from "@/lib/utils";
import DashboardSidebarBrand from "./DashboardSidebarBrand";
import { useDashboardShell } from "./DashboardShellContext";

function NavLink({
  item,
  active,
  expanded,
}: {
  item: DashboardNavItem;
  active: boolean;
  expanded: boolean;
}) {
  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={dashboardNavLinkClassName(active, expanded)}
    >
      <LayoutDashboard className="size-5 shrink-0" aria-hidden />
      <span
        className={cn(
          "truncate text-sm font-medium whitespace-nowrap transition-all duration-200",
          expanded
            ? "max-w-[140px] opacity-100"
            : "max-w-0 overflow-hidden opacity-0"
        )}
      >
        {item.label}
      </span>
    </Link>
  );
}

function SidebarToggle({
  expanded,
  onToggle,
}: {
  expanded: boolean;
  onToggle: () => void;
}) {
  if (expanded) {
    return (
      <button
        type="button"
        onClick={onToggle}
        aria-label="Collapse sidebar"
        aria-expanded
        className="absolute -top-3 -right-7 z-20 flex size-8 items-center justify-center rounded-lg border border-border bg-background text-secondary shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ChevronLeft className="size-4 shrink-0" strokeWidth={2} aria-hidden />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
      aria-label="Expand sidebar"
      aria-expanded={false}
      className={cn(
        "relative z-20 mx-auto flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-primary-foreground/35 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/40",
        DASHBOARD_SIDEBAR_HOVER_CLASS
      )}
    >
      <ChevronRight className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
    </button>
  );
}

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { expanded, toggleExpanded } = useDashboardShell();

  const sidebarWidth = expanded
    ? DASHBOARD_SIDEBAR_WIDTH_EXPANDED
    : DASHBOARD_SIDEBAR_WIDTH_COLLAPSED;

  return (
    <aside
      data-expanded={expanded}
      style={{ width: sidebarWidth }}
      className={cn(
        "fixed inset-y-0 left-0 z-40 hidden shrink-0 flex-col overflow-visible border-r border-primary-foreground/10 bg-secondary text-primary-foreground lg:flex",
        "transition-[width] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[width]"
      )}
      aria-label="Dashboard navigation"
    >
      <div
        className={cn(
          DASHBOARD_SHELL_HEADER_CLASS,
          "shrink-0 bg-secondary",
          expanded ? "px-4" : "justify-center px-2"
        )}
      >
        <DashboardSidebarBrand expanded={expanded} />
      </div>

      <nav
        className={cn(
          "flex min-h-0 flex-1 flex-col",
          expanded ? "px-3 py-3" : "px-2 py-4"
        )}
      >
        <ul
          className={cn(
            "flex min-h-0 flex-1 flex-col overflow-y-auto scrollbar-hide",
            expanded ? "gap-2" : "items-center gap-4"
          )}
          role="list"
        >
          {DASHBOARD_NAV_ITEMS.map((item) => {
            const active = isDashboardNavItemActive(pathname, item);

            return (
              <li
                key={item.href}
                className={cn(
                  "flex w-full overflow-visible",
                  !expanded && "justify-center"
                )}
              >
                <NavLink item={item} active={active} expanded={expanded} />
              </li>
            );
          })}
        </ul>

        <div
          className={cn(
            "relative z-20 shrink-0 flex flex-col items-center bg-secondary",
            expanded ? "pb-4 pt-2" : "gap-3 pt-4 pb-6"
          )}
        >
          {expanded ? (
            <div className="relative mx-3 h-4 w-full">
              <SidebarToggle expanded onToggle={toggleExpanded} />
            </div>
          ) : (
            <SidebarToggle expanded={false} onToggle={toggleExpanded} />
          )}
        </div>
      </nav>
    </aside>
  );
}
