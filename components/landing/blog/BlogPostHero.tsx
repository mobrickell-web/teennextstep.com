import Image from "next/image";

import type { BlogTitleLine } from "@/components/landing/blog/types";
import { Typography } from "@/components/ui/typography";

type BlogPostHeroProps = {
  title: string;
  titleLines?: BlogTitleLine[];
  heroImage: string;
  heroImageAlt: string;
};

export default function BlogPostHero({
  title,
  titleLines,
  heroImage,
  heroImageAlt,
}: BlogPostHeroProps) {
  return (
    <div className="relative w-full">
      <div className="relative aspect-[16/7] w-full min-h-[240px] overflow-hidden sm:min-h-[360px] lg:min-h-[480px]">
        <Image
          src={heroImage}
          alt={heroImageAlt}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 z-10 w-[92%] max-w-[1000px] -translate-x-1/2 translate-y-1/2 rounded-[12px] bg-white px-5 py-6 text-center shadow-[0_8px_32px_rgba(0,0,0,0.12)] sm:px-10 sm:py-8 lg:px-14 lg:py-10">
        <Typography
          variant="h1"
          as="h1"
          className="text-[clamp(22px,3.2vw,36px)] font-[800] leading-[131%] text-[#194783]"
        >
          {titleLines?.length ? (
            <>
              {titleLines.map((line, index) => {
                const text = typeof line === "string" ? line : line.text;
                const nowrap = typeof line === "string" ? false : line.nowrap;

                return (
                  <span
                    key={index}
                    className={nowrap ? "block whitespace-nowrap" : "block"}
                  >
                    {text}
                  </span>
                );
              })}
            </>
          ) : (
            title
          )}
        </Typography>
      </div>
    </div>
  );
}
