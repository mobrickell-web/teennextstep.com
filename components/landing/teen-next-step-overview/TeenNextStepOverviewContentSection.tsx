import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { LandingCtaBlock } from "@/components/landing/LandingCtaBlock";
import { Typography } from "@/components/ui/typography";

import {
  TEEN_NEXT_STEP_OVERVIEW_CONTENT,
  TEEN_NEXT_STEP_OVERVIEW_CTAS,
  type TeenNextStepOverviewContentBlock,
  type TeenNextStepOverviewTextSegment,
} from "@/components/landing/teen-next-step-overview/content/teen-next-step-overview-section";

const BODY_CLASS =
  "text-[clamp(15px,1.7vw,18px)] leading-[140%] text-black";
const BULLETS_CLASS = `list-disc space-y-1.5 pl-6 ${BODY_CLASS}`;

function renderSegments(segments: TeenNextStepOverviewTextSegment[]) {
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

function OverviewBlock({ block }: { block: TeenNextStepOverviewContentBlock }) {
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
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );

    default:
      return null;
  }
}

export default function TeenNextStepOverviewContentSection() {
  const { image, introBlocks, closingBlocks } = TEEN_NEXT_STEP_OVERVIEW_CONTENT;
  const { primary, secondary, tertiary } = TEEN_NEXT_STEP_OVERVIEW_CTAS;

  return (
    <section aria-label="Teen Next Step overview details" className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1785px] px-4 py-10 sm:px-8 sm:py-12 lg:px-[49px] lg:py-14">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-1 space-y-4 sm:space-y-5">
            {introBlocks.map((block, index) => (
              <OverviewBlock key={index} block={block} />
            ))}
          </div>

          <div className="relative order-2 mx-auto h-[381px] w-full max-w-[623px] shrink-0 overflow-hidden rounded-[9px] lg:ml-auto lg:mr-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 1024px) 100vw, 623px"
              className="h-full w-full max-w-[623px] rounded-[9px] object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
          {closingBlocks.map((block, index) => (
            <OverviewBlock key={index} block={block} />
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
