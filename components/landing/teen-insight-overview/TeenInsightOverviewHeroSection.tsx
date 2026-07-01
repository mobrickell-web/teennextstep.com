import Image from "next/image";

import { Typography } from "@/components/ui/typography";

import {
  TEEN_INSIGHT_OVERVIEW_HERO,
  TEEN_INSIGHT_OVERVIEW_HERO_IMAGE,
  TEEN_INSIGHT_OVERVIEW_HERO_IMAGE_SIZE,
} from "@/components/landing/teen-insight-overview/content/teen-insight-overview-section";

export default function TeenInsightOverviewHeroSection() {
  const { heading, subheading } = TEEN_INSIGHT_OVERVIEW_HERO;
  const { width, height } = TEEN_INSIGHT_OVERVIEW_HERO_IMAGE_SIZE;

  return (
    <section
      id="teen-insight-overview"
      aria-labelledby="teen-insight-overview-heading"
      className="relative w-full overflow-hidden"
    >
      <Image
        src={TEEN_INSIGHT_OVERVIEW_HERO_IMAGE}
        alt=""
        width={width}
        height={height}
        priority
        sizes="100vw"
        className="h-auto w-full "
      />
      <div className="absolute inset-0 bg-primary/10" aria-hidden />

      <div className="absolute inset-0 flex items-center px-3 py-3 sm:px-6 sm:py-8 lg:px-8 lg:py-10 xl:px-10">
        <div className="w-full rounded-[12px] bg-[#FFFFFF33] px-4 py-3 text-center backdrop-blur-[2px] sm:px-10 sm:py-8 lg:px-14 lg:py-10">
          <Typography
            id="teen-insight-overview-heading"
            variant="h1"
            as="h1"
            className="text-[16px] font-[800] leading-[131%] text-white sm:text-[20px] md:text-[clamp(28px,4vw,48px)]"
          >
            {heading}
          </Typography>

          <Typography
            variant="h2"
            as="p"
            className="mt-2 text-[13px] font-[800] leading-[131%] text-white sm:mt-4 sm:text-[20px] md:text-[clamp(18px,2.2vw,28px)]"
          >
            {subheading}
          </Typography>
        </div>
      </div>
    </section>
  );
}
