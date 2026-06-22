import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const LOGO_SRC = "/images/landing-page/logo.svg";
const LOGO_WIDTH = 331;
const LOGO_HEIGHT = 47;

export type LogoProps = {
  href?: string | null;
  alt?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function Logo({
  href = "/",
  alt = "Teen Next",
  className,
  imageClassName,
  priority = false,
}: LogoProps) {
  const content = (
    <Image
      src={LOGO_SRC}
      alt={alt}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
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
