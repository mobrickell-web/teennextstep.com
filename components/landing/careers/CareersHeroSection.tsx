import Image from "next/image";

import { LANDING_HERO_HEADING_SIZE } from "@/components/landing/landing-styles";
import { Typography } from "@/components/ui/typography";

import {
  CAREERS_HERO,
  CAREERS_HERO_IMAGE,
} from "@/components/landing/careers/content/careers-section";

export default function CareersHeroSection() {
  const { heading } = CAREERS_HERO;

  return (
    <section
      id="careers"
      aria-labelledby="careers-heading"
      className="relative flex min-h-[320px] w-full items-center overflow-hidden sm:min-h-[310px] lg:min-h-[310px] xl:min-h-[350px]"
    >
      <div className="absolute inset-0">
        <Image
          src={CAREERS_HERO_IMAGE}
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
            id="careers-heading"
            variant="h1"
            as="h1"
            className={`${LANDING_HERO_HEADING_SIZE} font-[800] leading-[131%] text-white`}
          >
            {heading}
          </Typography>
        </div>
      </div>
    </section>
  );
}
