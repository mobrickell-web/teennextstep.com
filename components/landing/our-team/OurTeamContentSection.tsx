import { Fragment } from "react";
import Link from "next/link";

import { LandingCtaBlock } from "@/components/landing/LandingCtaBlock";
import { Typography } from "@/components/ui/typography";

import {
  OUR_TEAM_CTAS,
  OUR_TEAM_SECTIONS,
  type OurTeamContentBlock,
  type OurTeamTextSegment,
} from "@/components/landing/our-team/content/our-team-section";

const BODY_CLASS =
  "text-[clamp(15px,1.7vw,18px)] leading-[140%] text-black";
const SECTION_HEADING_CLASS =
  "text-[clamp(15px,1.7vw,18px)] font-[800] uppercase leading-[131%] text-[#194783]";
const BULLETS_CLASS = `mt-1.5 list-disc space-y-1 pl-6 ${BODY_CLASS}`;

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

function OurTeamBlock({ block }: { block: OurTeamContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <Typography variant="body-regular" as="p" className={BODY_CLASS}>
          {renderSegments(block.segments)}
        </Typography>
      );

    case "bullets":
      return (
        <ul className={BULLETS_CLASS}>
          {block.items.map((item, index) => (
            <li key={index}>{renderSegments(item)}</li>
          ))}
        </ul>
      );

    default:
      return null;
  }
}

export default function OurTeamContentSection() {
  const { primary, secondary, tertiary } = OUR_TEAM_CTAS;

  return (
    <section aria-label="Our team details" className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1785px] px-4 py-10 sm:px-8 sm:py-12 lg:px-[49px] lg:py-14">
        <div className="space-y-8 sm:space-y-10">
          {OUR_TEAM_SECTIONS.map((section) => (
            <article key={section.title} className="space-y-1.5 sm:space-y-2">
              <Typography
                variant="h2"
                as="h2"
                className={SECTION_HEADING_CLASS}
              >
                {section.title}
              </Typography>
              {section.blocks.map((block, index) => (
                <OurTeamBlock key={index} block={block} />
              ))}
            </article>
          ))}
        </div>

        <div className="mt-10 flex w-full flex-col items-start gap-6 sm:flex-row sm:flex-wrap sm:justify-start sm:gap-3 lg:mt-12 lg:gap-4">
          <LandingCtaBlock
            href={primary.href}
            label={primary.label}
            caption={primary.caption}
            variant="primary"
            theme="light"
            className="w-full items-start sm:w-fit"
            labelClassName="w-full rounded-[7.55px] whitespace-normal text-[14px] font-[800] leading-[160%] tracking-[-0.012em] sm:w-fit sm:whitespace-nowrap sm:text-[14px]"
            captionClassName="text-left text-[13px] font-normal leading-snug tracking-normal text-[#1B2A49] sm:text-[12px] sm:leading-snug"
          />

          <div className="flex w-full max-w-full flex-col items-start gap-2 sm:w-fit">
            <Link
              href={secondary.href}
              className="inline-flex min-h-[50px] w-full items-center justify-center rounded-lg bg-[#194783] px-4 py-3 text-center text-sm font-[800] leading-snug text-white transition-colors hover:bg-[#194783]/90 sm:w-fit sm:text-base"
            >
              {secondary.label}
            </Link>
            <Typography
              variant="muted-sm"
              as="p"
              className="text-left text-xs leading-relaxed text-grey-text"
            >
              {secondary.caption}
            </Typography>
          </div>

          <LandingCtaBlock
            href={tertiary.href}
            label={tertiary.label}
            caption={tertiary.caption}
            variant="secondary"
            theme="light"
            className="w-full items-start sm:w-fit"
            labelClassName="w-full rounded-[7.58px] whitespace-normal border-[1.79px] border-primary bg-white text-[14px] font-[800] leading-[160%] tracking-[-0.012em] text-primary hover:bg-primary/5 sm:w-fit sm:whitespace-nowrap sm:bg-transparent sm:text-[14px]"
            captionClassName="text-left"
          />
        </div>
      </div>
    </section>
  );
}
