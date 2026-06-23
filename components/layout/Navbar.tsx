"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";

import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DASHBOARD_ROLE_ITEMS,
  LOGIN_MENU_ITEMS,
  MAIN_NAV_ITEMS,
  isNavItemActive,
  isNavLinkActive,
  loginTriggerClassName,
  type MainNavItem,
} from "@/lib/config/main-nav";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useResultsTabStore } from "@/lib/stores/use-results-tab-store";
import { cn } from "@/lib/utils";

const navLinkClass =
  "inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-white transition-colors xl:text-base";

function NavLink({
  href,
  label,
  isActive,
  onClick,
  className,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(navLinkClass, className)}
    >
      {label}
    </Link>
  );
}

function DesktopNavDropdown({
  item,
  pathname,
  hash,
}: {
  item: MainNavItem;
  pathname: string;
  hash: string;
}) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        className={cn(
          navLinkClass,
          "group rounded-lg px-2.5 py-2 outline-none focus-visible:ring-2 focus-visible:ring-white/30 xl:px-3",
        )}
      >
        {item.label}
        <ChevronDown className="size-4 shrink-0 opacity-80 transition-transform group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="min-w-44">
        {item.children?.map((child) => (
          <DropdownMenuItem key={child.href} asChild>
            <Link
              href={child.href}
              className={cn(
                isNavLinkActive(pathname, hash, child.href) &&
                  "bg-accent font-medium",
              )}
            >
              {child.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DesktopNav({
  pathname,
  hash,
}: {
  pathname: string;
  hash: string;
}) {
  return (
    <nav
      aria-label="Main navigation"
      className="hidden min-w-0 flex-1 items-center justify-center xl:flex"
    >
      <ul className="flex max-w-full items-center gap-x-0.5 2xl:gap-x-1">
        {MAIN_NAV_ITEMS.map((item) => (
          <li key={item.label}>
            {item.children?.length ? (
              <DesktopNavDropdown
                item={item}
                pathname={pathname}
                hash={hash}
              />
            ) : (
              <NavLink
                href={item.href}
                label={item.label}
                isActive={isNavItemActive(pathname, hash, item)}
                className="rounded-lg px-2.5 py-2 xl:px-3"
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileNavItem({
  item,
  pathname,
  hash,
}: {
  item: MainNavItem;
  pathname: string;
  hash: string;
}) {
  if (item.children?.length) {
    return (
      <Collapsible>
        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-muted [&[data-state=open]>svg]:rotate-180">
          {item.label}
          <ChevronDown className="size-4 shrink-0 transition-transform duration-200" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pb-1 pl-2">
          <ul className="flex flex-col gap-0.5 border-l border-border pl-3">
            {item.children.map((child) => (
              <li key={child.href}>
                <SheetClose asChild>
                  <Link
                    href={child.href}
                    className={cn(
                      "flex items-center rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                      isNavLinkActive(pathname, hash, child.href)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted",
                    )}
                  >
                    {child.label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <SheetClose asChild>
      <Link
        href={item.href}
        aria-current={
          isNavItemActive(pathname, hash, item) ? "page" : undefined
        }
        className={cn(
          "flex items-center rounded-xl px-4 py-3 text-lg font-medium transition-colors",
          isNavItemActive(pathname, hash, item)
            ? "bg-primary/10 text-primary"
            : "text-foreground hover:bg-muted",
        )}
      >
        {item.label}
      </Link>
    </SheetClose>
  );
}

function LoginMenu({ className }: { className?: string }) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className={cn(loginTriggerClassName, className)}>
        Login
        <ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        collisionPadding={16}
        className="w-auto min-w-40 max-w-[calc(100vw-2rem)]"
      >
        {LOGIN_MENU_ITEMS.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link href={item.href}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DashboardRoleMenu({ className }: { className?: string }) {
  const setActiveTab = useResultsTabStore((state) => state.setActiveTab);
  const logout = useAuthStore((state) => state.logout);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className={cn(loginTriggerClassName, className)}>
        Login
        <ChevronDown className="size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={10}
        collisionPadding={16}
        className="w-auto min-w-[198px] max-w-[calc(100vw-2rem)] gap-[10px] rounded-none border-0 bg-[#0000007A] p-0 px-[22px] py-[17px] text-white shadow-none backdrop-blur-[4px]"
      >
        {DASHBOARD_ROLE_ITEMS.map((item) => {
          const itemClassName =
            "whitespace-nowrap rounded-md px-2 py-2 text-base font-normal text-white focus:bg-white/15 focus:text-white";

          if (item.href) {
            return (
              <DropdownMenuItem key={item.label} asChild className={itemClassName}>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            );
          }

          return (
            <DropdownMenuItem
              key={item.label}
              onSelect={() => {
                if (item.tab) {
                  setActiveTab(item.tab);
                } else {
                  logout();
                }
              }}
              className={itemClassName}
            >
              {item.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileNav({
  pathname,
  hash,
  open,
  onOpenChange,
}: {
  pathname: string;
  hash: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="shrink-0 text-white hover:bg-white/10 hover:text-white xl:hidden"
          aria-label="Open menu"
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full max-w-sm gap-0 p-0">
        <SheetHeader className="border-b border-border px-5 py-4">
          <SheetTitle className="sr-only">Main navigation</SheetTitle>
          <Logo href="/" />
        </SheetHeader>

        <nav
          aria-label="Mobile navigation"
          className="flex-1 overflow-y-auto px-3 py-4"
        >
          <ul className="flex flex-col gap-1">
            {MAIN_NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <MobileNavItem
                  item={item}
                  pathname={pathname}
                  hash={hash}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto border-t border-border p-4">
          <Collapsible>
            <CollapsibleTrigger
              className={cn(
                loginTriggerClassName,
                "w-full border-primary text-primary hover:bg-primary/5 [&[data-state=open]>svg]:rotate-180",
              )}
            >
              Login
              <ChevronDown className="size-4 shrink-0 transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-1">
              {LOGIN_MENU_ITEMS.map((item) => (
                <SheetClose key={item.href} asChild>
                  <Link
                    href={item.href}
                    className="flex w-full items-center rounded-lg px-4 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </SheetContent>
    </Sheet>
  );
}

const Navbar = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname, hash]);

  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <header
      data-site-navbar
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full overflow-x-clip border-b border-white/10 bg-primary text-primary-foreground transition-shadow duration-300",
        scrolled && "shadow-md",
      )}
    >
      <div className="flex h-[var(--site-navbar-height)] w-full items-center gap-3 px-4 sm:px-6 lg:gap-4 lg:px-8 xl:px-10">
        <Logo href="/" priority className="min-w-0 shrink-0" />

        <DesktopNav pathname={pathname} hash={hash} />

        <div className="ml-auto flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
          {isDashboard ? (
            <DashboardRoleMenu className="hidden sm:inline-flex" />
          ) : (
            <LoginMenu className="hidden sm:inline-flex" />
          )}

          <MobileNav
            pathname={pathname}
            hash={hash}
            open={mobileOpen}
            onOpenChange={setMobileOpen}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
