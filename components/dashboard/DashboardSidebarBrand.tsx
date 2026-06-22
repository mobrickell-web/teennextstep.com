import Link from "next/link";

import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type DashboardSidebarBrandProps = {
  expanded: boolean;
  className?: string;
};

export default function DashboardSidebarBrand({
  expanded,
  className,
}: DashboardSidebarBrandProps) {
  return (
    <Link
      href="/dashboard"
      className={cn(
        "inline-flex shrink-0 items-center outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary-foreground/40 rounded-md",
        expanded ? "gap-2.5" : "justify-center",
        className
      )}
      aria-label="Teen Next home"
    >
      <Typography
        variant="body-semibold"
        as="span"
        className={cn(
          "text-primary-foreground transition-all duration-300",
          expanded ? "text-base" : "text-xs"
        )}
      >
        {expanded ? "Teen Next" : "TN"}
      </Typography>
    </Link>
  );
}
