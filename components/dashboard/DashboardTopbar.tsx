"use client";

import { useMemo } from "react";
import { Building2, ChevronDown, LogOut, Search, Settings, User } from "lucide-react";

import { DASHBOARD_SHELL_HEADER_CLASS } from "@/lib/config/dashboard-nav";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type DashboardTopbarProps = {
  className?: string;
};

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function DashboardTopbar({ className }: DashboardTopbarProps) {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const displayName = user?.name?.trim() || "User";
  const initials = useMemo(() => getInitials(displayName), [displayName]);

  return (
    <header
      className={cn(
        DASHBOARD_SHELL_HEADER_CLASS,
        "z-30 gap-4 border-b-0 bg-background px-4 after:hidden sm:px-6",
        "shadow-[0_4px_14px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      <div className="flex min-w-0 shrink-0 items-center gap-3">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary-foreground"
          aria-hidden
        >
          <Building2 className="size-5" strokeWidth={1.75} />
        </div>
        <div className="hidden min-w-0 flex-col sm:flex">
          <Typography variant="muted" as="span" className="text-xs leading-tight">
            Workspace
          </Typography>
          <Typography
            variant="body-semibold"
            as="span"
            className="truncate text-xs leading-tight text-foreground"
          >
            Teen Next
          </Typography>
        </div>
      </div>

      <div className="mx-auto w-full max-w-xl flex-1 min-w-0">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search"
            aria-label="Search dashboard"
            className="h-11 rounded-[14px] border-border pr-11 pl-4 text-sm shadow-none"
          />
          <Search
            className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
        </div>
      </div>

      <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
        <Separator orientation="vertical" className="hidden h-8 sm:block" decorative />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full py-1 pr-1 pl-1 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-2.5 sm:pr-2"
              aria-label="Account menu"
            >
              <Avatar size="default" className="size-9">
                <AvatarImage src="" alt={displayName} />
                <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                  {initials || "U"}
                </AvatarFallback>
              </Avatar>
              <Typography
                variant="body-medium"
                as="span"
                className="hidden text-[14px] text-muted-foreground sm:inline"
              >
                {displayName}
              </Typography>
              <ChevronDown
                className="hidden size-4 text-muted-foreground sm:block"
                aria-hidden
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">{displayName}</span>
                {user?.email && (
                  <span className="text-xs text-muted-foreground truncate">
                    {user.email}
                  </span>
                )}
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="size-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="size-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive" onClick={() => logout()}>
              <LogOut className="size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
