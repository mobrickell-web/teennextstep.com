import Image from "next/image";
import { Fragment } from "react";

import { LANDING_HERO_HEADING_SIZE } from "@/components/landing/landing-styles";
import { Typography } from "@/components/ui/typography";

import {
  TEEN_NEXT_STEP_OVERVIEW_HERO,
  TEEN_NEXT_STEP_OVERVIEW_HERO_IMAGE,
  type TeenNextStepOverviewTextSegment,
} from "@/components/landing/teen-next-step-overview/content/teen-next-step-overview-section";

function renderSegments(segments: TeenNextStepOverviewTextSegment[]) {
  return segments.map((segment, index) => (
    <Fragment key={index}>
      {segment.breakBefore && <br />}
      {segment.text}
    </Fragment>
  ));
}

export default function TeenNextStepOverviewHeroSection() {
  const { heading, description } = TEEN_NEXT_STEP_OVERVIEW_HERO;

  return (
    <section
      id="teen-next-step-overview"
      aria-labelledby="teen-next-step-overview-heading"
      className="relative flex min-h-[320px] w-full items-center overflow-hidden sm:min-h-[360px] lg:min-h-[440px] xl:min-h-[500px]"
    >
      <div className="absolute inset-0">
        <Image
          src={TEEN_NEXT_STEP_OVERVIEW_HERO_IMAGE}
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
            id="teen-next-step-overview-heading"
            variant="h1"
            as="h1"
            className={`${LANDING_HERO_HEADING_SIZE} font-[800] leading-[131%] text-white`}
          >
            {heading}
          </Typography>

          <Typography
            variant="body-regular"
            as="p"
            className="mt-4 text-[clamp(15px,1.6vw,20px)] font-normal leading-[131%] text-white sm:mt-5"
          >
            {renderSegments([...description])}
          </Typography>
        </div>
      </div>
    </section>
  );
}
