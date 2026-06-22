export type MainNavLink = {
  label: string;
  href: string;
};

export type MainNavItem = MainNavLink & {
  children?: MainNavLink[];
};

/** Public marketing site navigation — landing page sections */
export const MAIN_NAV_ITEMS: MainNavItem[] = [
  { label: "Home", href: "/home" },
  { label: "Why Us", href: "/home#why-us" },
  { label: "Why Parents Trust Us", href: "/home#why-parents-trust-us" },
  { label: "Our 4 Steps", href: "/home#our-4-steps" },
  { label: "What's Included", href: "/parent-teen-alignment-system" },
  {
    label: "If Parent & Teen Paths Differ",
    href: "/home#if-parent-teen-paths-differ",
  },
  {
    label: "More",
    href: "/home#more",
    children: [
      { label: "FAQ", href: "/home#faq" },
      { label: "Contact Us", href: "/home#contact" },
      { label: "Privacy Policy", href: "/home#privacy" },
      { label: "Terms of Service", href: "/home#terms" },
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
  "group inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-white bg-transparent px-5  text-base font-medium text-white transition-colors outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/30 data-[state=open]:bg-white/10";

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
