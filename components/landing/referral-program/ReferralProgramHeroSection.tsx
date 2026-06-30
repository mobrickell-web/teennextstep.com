import Image from "next/image";

import { LANDING_HERO_HEADING_SIZE } from "@/components/landing/landing-styles";
import { Typography } from "@/components/ui/typography";

import {
  REFERRAL_PROGRAM_HERO,
  REFERRAL_PROGRAM_HERO_IMAGE,
} from "@/components/landing/referral-program/content/referral-program-section";

export default function ReferralProgramHeroSection() {
  const { heading, overviewHeading, description } = REFERRAL_PROGRAM_HERO;

  return (
    <section
      id="referral-program"
      aria-labelledby="referral-program-heading"
      className="relative flex min-h-[320px] w-full items-center overflow-hidden sm:min-h-[360px] lg:min-h-[400px] xl:min-h-[440px]"
    >
      <div className="absolute inset-0">
        <Image
          src={REFERRAL_PROGRAM_HERO_IMAGE}
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
            id="referral-program-heading"
            variant="h1"
            as="h1"
            className={`${LANDING_HERO_HEADING_SIZE} font-[800] leading-[131%] text-white`}
          >
            {heading}
          </Typography>

          <Typography
            id="referral-program-overview-heading"
            variant="h2"
            as="h2"
            className="mt-4 text-[20px] font-[800] leading-[131%] text-white md:text-[clamp(18px,2.2vw,28px)] sm:mt-5"
          >
            {overviewHeading}
          </Typography>

          <Typography
            variant="body-regular"
            as="p"
            className="mx-auto mt-3 max-w-4xl text-[clamp(15px,1.6vw,20px)] font-normal leading-[131%] text-white sm:mt-4"
          >
            {description}
          </Typography>
        </div>
      </div>
    </section>
  );
}
