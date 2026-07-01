import Image from "next/image";
import { Fragment } from "react";

import { LANDING_HERO_HEADING_SIZE } from "@/components/landing/landing-styles";
import { Typography } from "@/components/ui/typography";

import {
  OUR_TEAM_HERO,
  OUR_TEAM_HERO_IMAGE,
  type OurTeamTextSegment,
} from "@/components/landing/our-team/content/our-team-section";

function renderSegments(segments: OurTeamTextSegment[]) {
  return segments.map((segment, index) => {
    const content = segment.bold ? (
      <strong className="font-bold">{segment.text}</strong>
    ) : (
      segment.text
    );

    return (
      <Fragment key={index}>
        {segment.breakBefore && <br />}
        {content}
      </Fragment>
    );
  });
}

export default function OurTeamHeroSection() {
  const { heading, paragraphs } = OUR_TEAM_HERO;

  return (
    <section
      id="our-team"
      aria-labelledby="our-team-heading"
      className="relative flex min-h-[320px] w-full items-center overflow-hidden sm:min-h-[360px] lg:min-h-[400px] xl:min-h-[440px]"
    >
      <div className="absolute inset-0">
        <Image
          src={OUR_TEAM_HERO_IMAGE}
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
            id="our-team-heading"
            variant="h1"
            as="h1"
            className={`${LANDING_HERO_HEADING_SIZE} font-[800] leading-[131%] text-white`}
          >
            {heading}
          </Typography>

          <div className="mt-4 space-y-4 sm:mt-5">
            {paragraphs.map((segments, index) => (
              <Typography
                key={index}
                variant="body-regular"
                as="p"
                className="text-[clamp(15px,1.6vw,20px)] font-normal leading-[131%] text-white"
              >
                {renderSegments([...segments])}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
