export type MainNavLink = {
  label: string;
  href: string;
};

export type MainNavItem = MainNavLink & {
  children?: MainNavLink[];
};

/** Public marketing site navigation — landing page sections */
export const MAIN_NAV_ITEMS: MainNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Why Parents Trust Us", href: "/#why-parents-trust-us" },
  { label: "Our 4 Steps", href: "/#four-step-process" },
  { label: "What's Included", href: "/#complete-process" },
  {
    label: "If Parent & Teen Paths Differ",
    href: "/#different-paths",
  },
  {
    label: "More",
    href: "/#more",
    children: [
      { label: "FAQ", href: "/#faq" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/#privacy" },
      { label: "Terms of Service", href: "/#terms" },
    ],
  },
];



export const LOGIN_ROUTE = "/login";

export const LOGIN_MENU_ITEMS: MainNavLink[] = [
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/signup" },
];

/**
 * Role menu shown in place of the login dropdown on dashboard pages.
 * Items with `tab` switch the active results tab; `action: "logout"` signs out.
 */
export type DashboardRoleItem = {
  label: string;
} & (
  | { href: string; tab?: never; action?: never }
  | { tab: string; href?: never; action?: never }
  | { action: "logout"; href?: never; tab?: never }
);

export const DASHBOARD_ROLE_ITEMS: DashboardRoleItem[] = [
  { label: "Parent Insight", href: "/dashboard/parent-insight" },
  { label: "Parent - Teen", tab: "parent-teen-alignment" },
  { label: "Teen", tab: "teen-alignment" },
  { label: "Ambassador", tab: "ambassador" },
  { label: "Alignment Architect", tab: "alignment-architect" },
  { label: "Admin", tab: "admin" },
  { label: "Logout", action: "logout" },
];

/** Outlined login trigger — white border on primary navbar */
export const loginTriggerClassName =
  "group inline-flex h-12 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-white bg-transparent px-5 text-base font-medium text-white transition-colors outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/30 data-[state=open]:bg-white/10";

/** Shared frosted dropdown panel — Login, dashboard role, and main nav submenus */
export const loginDropdownContentClassName =
  "w-auto min-w-[198px] max-w-[calc(100vw-2rem)] gap-[10px] rounded-none border-0 bg-[#0000007A] p-0 px-[22px] py-[17px] text-white shadow-none backdrop-blur-[4px]";

export const loginDropdownItemClassName =
  "whitespace-nowrap rounded-md px-2 py-2 text-base font-normal text-white hover:bg-white/15 focus:bg-white/15 focus:text-white";

export function isNavLinkActive(
  pathname: string,
  hash: string,
  href: string,
): boolean {
  const [path, anchor] = href.split("#");

  if (anchor) {
    return pathname === path && hash === `#${anchor}`;
  }

  return pathname === href && !hash;
}

export function isNavItemActive(
  pathname: string,
  hash: string,
  item: MainNavItem,
): boolean {
  if (item.children?.length) {
    return item.children.some((child) =>
      isNavLinkActive(pathname, hash, child.href),
    );
  }

  return isNavLinkActive(pathname, hash, item.href);
}
