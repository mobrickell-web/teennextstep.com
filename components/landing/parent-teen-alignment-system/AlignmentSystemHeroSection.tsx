import Image from "next/image";

import { LANDING_HERO_HEADING_SIZE } from "@/components/landing/landing-styles";
import { Typography } from "@/components/ui/typography";

import {
  ALIGNMENT_SYSTEM_HERO_CONTENT,
  ALIGNMENT_SYSTEM_HERO_IMAGE,
} from "@/components/landing/parent-teen-alignment-system/content/hero-section";

export default function AlignmentSystemHeroSection() {
  const { heading, subheading, paragraphs } = ALIGNMENT_SYSTEM_HERO_CONTENT;

  return (
    <section
      id="alignment-system-hero"
      aria-labelledby="alignment-system-hero-heading"
      className="relative flex min-h-[320px] w-full items-center overflow-hidden sm:min-h-[360px] lg:min-h-[440px] xl:min-h-[500px]"
    >
      <div className="absolute inset-0">
        <Image
          src={ALIGNMENT_SYSTEM_HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover object-center blur-[2px]"
        />
        <div className="absolute inset-0 bg-primary/10" />
      </div>

      <div className="relative z-10 w-full px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 xl:px-10">
        <div className="w-full rounded-[12px] bg-[#FFFFFF33] px-6 py-6 text-center backdrop-blur-[2px] sm:px-10 sm:py-8 lg:px-14 lg:py-10">
          <Typography
            id="alignment-system-hero-heading"
            variant="h1"
            as="h1"
            className={`${LANDING_HERO_HEADING_SIZE} font-[800] leading-[131%] text-white`}
          >
            {heading}
          </Typography>

          <Typography
            variant="h5"
            as="p"
            className="mt-3 text-[20px] font-[800] leading-[131%] text-white md:text-[clamp(18px,2.2vw,28px)] sm:mt-4"
          >
            {subheading}
          </Typography>

          <div className="mt-4 space-y-3 sm:mt-5">
            {paragraphs.map((paragraph) => (
              <Typography
                key={paragraph}
                variant="body-regular"
                as="p"
                className="text-[clamp(15px,1.6vw,20px)] font-normal leading-[131%] text-white"
              >
                {paragraph}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
