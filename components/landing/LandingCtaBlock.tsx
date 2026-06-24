import Link from "next/link";

import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

/** Filled orange primary CTA — shared across landing sections. */
export const LANDING_PRIMARY_CTA_BG =
  "bg-[#E67113] text-white hover:bg-[#E67113]/90";

type LandingCtaBlockProps = {
  href: string;
  label: string;
  caption: string;
  variant: "primary" | "secondary";
  theme?: "dark" | "light";
  className?: string;
  labelClassName?: string;
  captionClassName?: string;
};

const ctaLabelClassName = (
  variant: LandingCtaBlockProps["variant"],
  theme: LandingCtaBlockProps["theme"],
  labelClassName?: string,
) =>
  cn(
    "inline-flex w-fit min-h-[50px] items-center justify-center rounded-lg px-4 py-3 text-center text-sm font-semibold leading-snug transition-colors sm:text-base",
    variant === "primary"
      ? LANDING_PRIMARY_CTA_BG
      : theme === "light"
        ? "border border-primary bg-white text-primary hover:bg-primary/5"
        : "border border-white bg-transparent text-white hover:bg-white/10",
    labelClassName,
  );

export function LandingCtaBlock({
  href,
  label,
  caption,
  variant,
  theme = "light",
  className,
  labelClassName,
  captionClassName,
}: LandingCtaBlockProps) {
  const isPlaceholder = href === "#";

  return (
    <div
      className={cn(
        "flex w-fit max-w-full flex-col items-center gap-2",
        className,
      )}
    >
      {isPlaceholder ? (
        <span
          role="link"
          aria-disabled="true"
          className={ctaLabelClassName(variant, theme, labelClassName)}
        >
          {label}
        </span>
      ) : (
        <Link
          href={href}
          className={ctaLabelClassName(variant, theme, labelClassName)}
        >
          {label}
        </Link>
      )}
      <Typography
        variant="muted-sm"
        as="p"
        className={cn(
          "text-center text-xs leading-relaxed",
          theme === "light" ? "text-grey-text" : "text-white/80",
          captionClassName,
        )}
      >
        {caption}
      </Typography>
    </div>
  );
}
