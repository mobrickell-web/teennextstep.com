import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const LOGO_SRC = "/images/landing-page/logo.svg";
const WHITE_LOGO_SRC = "/images/landing-page/white-logo.svg";
const LOGO_WIDTH = 331;
const LOGO_HEIGHT = 47;
const WHITE_LOGO_WIDTH = 335;
const WHITE_LOGO_HEIGHT = 51;

export type LogoProps = {
  href?: string | null;
  alt?: string;
  variant?: "default" | "white";
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function Logo({
  href = "/",
  alt = "Teen Next",
  variant = "default",
  className,
  imageClassName,
  priority = false,
}: LogoProps) {
  const isWhite = variant === "white";
  const content = (
    <Image
      src={isWhite ? WHITE_LOGO_SRC : LOGO_SRC}
      alt={alt}
      width={isWhite ? WHITE_LOGO_WIDTH : LOGO_WIDTH}
      height={isWhite ? WHITE_LOGO_HEIGHT : LOGO_HEIGHT}
      priority={priority}
      className={cn("h-8 w-auto sm:h-9", imageClassName)}
    />
  );

  if (href) {
    return (
      <Link href={href} className={cn("inline-flex shrink-0", className)} aria-label={alt}>
        {content}
      </Link>
    );
  }

  return <span className={cn("inline-flex shrink-0", className)}>{content}</span>;
}

export default Logo;
