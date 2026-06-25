"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  loginDropdownContentClassName,
  loginDropdownItemClassName,
  loginDropdownItemDisabledClassName,
  loginTriggerClassName,
  type DashboardRoleItem,
  type MainNavItem,
} from "@/lib/config/main-nav";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useResultsTabStore } from "@/lib/stores/use-results-tab-store";
import { cn } from "@/lib/utils";

const navLinkClass =
  "inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-white transition-colors xl:text-base";

function useLoginMenuHandlers({
  navigateOnTab = false,
  navigateOnLogout = false,
}: {
  navigateOnTab?: boolean;
  navigateOnLogout?: boolean;
} = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const setActiveTab = useResultsTabStore((state) => state.setActiveTab);
  const logout = useAuthStore((state) => state.logout);

  const handleSelect = (item: DashboardRoleItem) => {
    if ("tab" in item && item.tab) {
      setActiveTab(item.tab);
      if (navigateOnTab && !pathname.startsWith("/dashboard/results")) {
        router.push("/dashboard/results");
      }
    } else if ("action" in item && item.action === "logout") {
      logout();
      if (navigateOnLogout) {
        router.push("/");
      }
    }
  };

  return { handleSelect };
}

function LoginDropdownItems({
  items,
  navigateOnTab = false,
  navigateOnLogout = false,
}: {
  items: DashboardRoleItem[];
  navigateOnTab?: boolean;
  navigateOnLogout?: boolean;
}) {
  const { handleSelect } = useLoginMenuHandlers({
    navigateOnTab,
    navigateOnLogout,
  });

  return items.map((item) => {
    if ("href" in item && item.href) {
      return (
        <DropdownMenuItem
          key={item.label}
          asChild
          className={loginDropdownItemClassName}
        >
          <Link href={item.href}>{item.label}</Link>
        </DropdownMenuItem>
      );
    }

    return (
      <DropdownMenuItem
        key={item.label}
        onSelect={() => handleSelect(item)}
        className={loginDropdownItemClassName}
      >
        {item.label}
      </DropdownMenuItem>
    );
  });
}

function MobileLoginMenuItems({
  items,
  navigateOnTab = false,
  navigateOnLogout = false,
}: {
  items: DashboardRoleItem[];
  navigateOnTab?: boolean;
  navigateOnLogout?: boolean;
}) {
  const { handleSelect } = useLoginMenuHandlers({
    navigateOnTab,
    navigateOnLogout,
  });

  return items.map((item) => {
    if ("href" in item && item.href) {
      return (
        <li key={item.label}>
          <SheetClose asChild>
            <Link
              href={item.href}
              className={cn(
                loginDropdownItemClassName,
                "flex w-full items-center",
              )}
            >
              {item.label}
            </Link>
          </SheetClose>
        </li>
      );
    }

    return (
      <li key={item.label}>
        <SheetClose asChild>
          <button
            type="button"
            onClick={() => handleSelect(item)}
            className={cn(
              loginDropdownItemClassName,
              "flex w-full items-center text-left",
            )}
          >
            {item.label}
          </button>
        </SheetClose>
      </li>
    );
  });
}

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
      <DropdownMenuContent
        align="center"
        sideOffset={10}
        collisionPadding={16}
        className={loginDropdownContentClassName}
      >
        {item.children?.map((child) =>
          child.href ? (
            <DropdownMenuItem
              key={child.label}
              asChild
              className={cn(
                loginDropdownItemClassName,
                isNavLinkActive(pathname, hash, child.href) &&
                  "bg-white/15 font-medium",
              )}
            >
              <Link href={child.href}>{child.label}</Link>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem
              key={child.label}
              disabled
              className={cn(
                loginDropdownItemClassName,
                loginDropdownItemDisabledClassName,
              )}
            >
              {child.label}
            </DropdownMenuItem>
          ),
        )}
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
        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-lg font-medium text-black transition-colors hover:bg-muted [&[data-state=open]>svg]:rotate-180">
          {item.label}
          <ChevronDown className="size-4 shrink-0 transition-transform duration-200" />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 px-1 pb-1">
          <ul
            className={cn(
              "flex flex-col gap-[10px]",
              loginDropdownContentClassName,
            )}
          >
            {item.children.map((child) => (
              <li key={child.label}>
                {child.href ? (
                  <SheetClose asChild>
                    <Link
                      href={child.href}
                      className={cn(
                        loginDropdownItemClassName,
                        "flex w-full items-center",
                        isNavLinkActive(pathname, hash, child.href) &&
                          "bg-white/15 font-medium",
                      )}
                    >
                      {child.label}
                    </Link>
                  </SheetClose>
                ) : (
                  <span
                    aria-disabled="true"
                    className={cn(
                      loginDropdownItemClassName,
                      loginDropdownItemDisabledClassName,
                      "flex w-full items-center",
                    )}
                  >
                    {child.label}
                  </span>
                )}
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
            ? "bg-muted font-semibold text-black"
            : "text-black hover:bg-muted",
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
        sideOffset={10}
        collisionPadding={16}
        className={loginDropdownContentClassName}
      >
        <LoginDropdownItems
          items={LOGIN_MENU_ITEMS}
          navigateOnTab
          navigateOnLogout
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DashboardRoleMenu({ className }: { className?: string }) {
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
        className={loginDropdownContentClassName}
      >
        <LoginDropdownItems items={DASHBOARD_ROLE_ITEMS} />
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

      <SheetContent
        side="right"
        className="w-full max-w-sm gap-0 bg-white p-0 text-black [&>button[data-slot=sheet-close]]:text-white [&>button[data-slot=sheet-close]:hover]:bg-white/10"
      >
        <SheetHeader className="border-b border-white/10 bg-primary px-5 py-4">
          <SheetTitle className="sr-only">Main navigation</SheetTitle>
          <SheetClose asChild>
            <Logo href="/" variant="white" />
          </SheetClose>
        </SheetHeader>

        <nav
          aria-label="Mobile navigation"
          className="flex-1 overflow-y-auto bg-white px-3 py-4 text-black"
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

        <div className="mt-auto border-t border-border bg-white p-4 text-black">
          <Collapsible>
            <CollapsibleTrigger
              className={cn(
                loginTriggerClassName,
                "w-full border-black text-black hover:bg-black/5 [&[data-state=open]>svg]:rotate-180",
              )}
            >
              Login
              <ChevronDown className="size-4 shrink-0 transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 px-1 pb-1">
              <ul
                className={cn(
                  "flex flex-col gap-[10px]",
                  loginDropdownContentClassName,
                )}
              >
                <MobileLoginMenuItems
                  items={LOGIN_MENU_ITEMS}
                  navigateOnTab
                  navigateOnLogout
                />
              </ul>
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