"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/brand/Logo";
import { Typography } from "@/components/ui/typography";
import {
  FOOTER_DISCLAIMER,
  FOOTER_QUICK_LINKS,
  FOOTER_SECONDARY_LINKS,
  FOOTER_SOCIAL_LINKS,
  FOOTER_TAGLINE,
} from "@/lib/config/footer";
import { cn } from "@/lib/utils";

const footerLinkClass =
  "text-[15px] font-normal leading-[131%] text-white transition-colors hover:text-secondary";

export default function Footer() {
  const pathname = usePathname();
  const hasParentInsightSidebar = pathname.startsWith("/dashboard/parent-insight");
  const quickLinksFirstColumn = FOOTER_QUICK_LINKS.slice(0, 5);
  const quickLinksSecondColumn = FOOTER_QUICK_LINKS.slice(5);

  return (
    <footer
      className={cn(
        "relative z-20 overflow-x-hidden bg-primary text-white",
        hasParentInsightSidebar && "lg:ml-[var(--parent-insight-sidebar-width)]",
      )}
    >
      <div
        className={cn(
          "w-full px-4 py-12 sm:px-6 sm:py-14 lg:py-16",
          hasParentInsightSidebar
            ? "lg:px-[var(--parent-insight-content-gap)]"
            : "lg:px-8 xl:px-10",
        )}
      >
        <Typography
          variant="h3"
          as="p"
          className="hidden text-center text-[clamp(18px,2.5vw,28px)] font-[800] leading-[131%] text-white sm:block"
        >
          {FOOTER_TAGLINE}
        </Typography>

        <div className="mt-0 grid gap-10 sm:mt-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-8 xl:gap-12">
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <Logo
              href="/"
              alt="Teen Next Step"
              imageClassName="h-9 w-auto sm:h-10"
            />

            <div className="space-y-3">
              <Typography
                variant="body-semibold"
                as="p"
                className="text-sm font-[800] uppercase tracking-wide text-white"
              >
                {FOOTER_DISCLAIMER.heading}
              </Typography>
              <Typography
                variant="muted-sm"
                as="p"
                className="max-w-sm text-[13px] leading-relaxed text-white/90"
              >
                {FOOTER_DISCLAIMER.text}
              </Typography>
            </div>

            <div className="flex items-center gap-4">
              {FOOTER_SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex transition-opacity hover:opacity-80"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden
                    className="h-5 w-auto"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <Typography
              variant="body-semibold"
              as="p"
              className="mb-4 text-[15px] font-[800] text-white"
            >
              Quick Links
            </Typography>
            <ol className="space-y-2" start={1}>
              {quickLinksFirstColumn.map((link, index) => (
                <li key={link.label}>
                  <Link href={link.href} className={footerLinkClass}>
                    {index + 1}. {link.label}
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:pt-9">
            <ol className="space-y-2" start={6}>
              {quickLinksSecondColumn.map((link, index) => (
                <li key={link.label}>
                  <Link href={link.href} className={footerLinkClass}>
                    {index + 6}. {link.label}
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <ul className="space-y-2">
              {FOOTER_SECONDARY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      footerLinkClass,
                      "text-[#B4B4B4] hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/30 pt-6 lg:mt-12">
          <Typography
            variant="muted-sm"
            as="p"
            className="text-center text-[13px] text-white/90 sm:text-right"
          >
            © {new Date().getFullYear()} Teen Next Step All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
