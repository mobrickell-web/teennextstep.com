import Image from "next/image";
import { Fragment } from "react";

import type { BlogTitleLine } from "@/components/landing/blog/types";
import { Typography } from "@/components/ui/typography";

type BlogPostHeroProps = {
  title: string;
  titleLines?: BlogTitleLine[];
  titleInlineOnMobile?: boolean;
  heroImage: string;
  heroImageAlt: string;
};

export default function BlogPostHero({
  title,
  titleLines,
  titleInlineOnMobile = false,
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

      <div className="absolute bottom-0 left-1/2 z-10 w-[calc(100%-2rem)] max-w-[1000px] -translate-x-1/2 translate-y-1/2 rounded-[12px] bg-white px-4 py-5 text-center shadow-[0_8px_32px_rgba(0,0,0,0.12)] sm:w-[92%] sm:px-10 sm:py-8 lg:px-14 lg:py-10">
        <Typography
          variant="h1"
          as="h1"
          className="w-full text-balance text-[16px] font-[800] leading-[131%] text-[#194783] md:text-[clamp(22px,3vw,36px)]"
        >
          {titleLines?.length ? (
            <>
              {titleLines.map((line, index) => {
                const text = typeof line === "string" ? line : line.text;
                const nowrap = typeof line === "string" ? false : line.nowrap;
                const lineClass = titleInlineOnMobile
                  ? nowrap
                    ? "inline md:block text-balance md:whitespace-nowrap"
                    : "inline md:block text-balance"
                  : nowrap
                    ? "block text-balance md:whitespace-nowrap"
                    : "block text-balance";

                return (
                  <Fragment key={index}>
                    {index > 0 && titleInlineOnMobile ? (
                      <span className="md:hidden"> </span>
                    ) : null}
                    <span className={lineClass}>{text}</span>
                  </Fragment>
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
