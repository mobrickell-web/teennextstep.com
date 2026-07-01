import Image from "next/image";

import { LandingCtaBlock } from "@/components/landing/LandingCtaBlock";
import { Typography } from "@/components/ui/typography";

import {
  TEEN_INSIGHT_OVERVIEW_ALIGNMENT_METRICS,
  TEEN_INSIGHT_OVERVIEW_ALIGNMENT_TYPES,
  TEEN_INSIGHT_OVERVIEW_DISCLAIMER,
  TEEN_INSIGHT_OVERVIEW_DISCOVER,
  TEEN_INSIGHT_OVERVIEW_OPTIONAL_STEP,
  TEEN_INSIGHT_OVERVIEW_TIMING,
  TEEN_INSIGHT_OVERVIEW_WHAT_IS,
  TEEN_INSIGHT_OVERVIEW_WHAT_YOU_RECEIVE,
  TEEN_INSIGHT_OVERVIEW_WHY_MATTERS,
  TEEN_INSIGHT_OVERVIEW_WHY_TEENS,
} from "@/components/landing/teen-insight-overview/content/teen-insight-overview-section";

const BODY_CLASS =
  "text-[clamp(15px,1.7vw,18px)] leading-[140%] text-black";
const SECTION_HEADING_CLASS =
  "text-[clamp(20px,2.6vw,30px)] font-[800] leading-[131%] text-[#194783]";
const BULLETS_CLASS = `mt-1.5 list-disc space-y-1 pl-6 ${BODY_CLASS}`;

function SectionImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="relative order-2 mx-auto w-full max-w-[623px] shrink-0 overflow-hidden rounded-[9px] lg:ml-auto lg:mr-0">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 1024px) 100vw, 623px"
        className="h-auto w-full max-w-[623px] rounded-[9px]"
      />
    </div>
  );
}

export default function TeenInsightOverviewContentSection() {
  const discover = TEEN_INSIGHT_OVERVIEW_DISCOVER;
  const whatIs = TEEN_INSIGHT_OVERVIEW_WHAT_IS;
  const alignmentTypes = TEEN_INSIGHT_OVERVIEW_ALIGNMENT_TYPES;
  const whyTeens = TEEN_INSIGHT_OVERVIEW_WHY_TEENS;
  const whatYouReceive = TEEN_INSIGHT_OVERVIEW_WHAT_YOU_RECEIVE;
  const alignmentMetrics = TEEN_INSIGHT_OVERVIEW_ALIGNMENT_METRICS;
  const timing = TEEN_INSIGHT_OVERVIEW_TIMING;
  const whyMatters = TEEN_INSIGHT_OVERVIEW_WHY_MATTERS;
  const optionalStep = TEEN_INSIGHT_OVERVIEW_OPTIONAL_STEP;
  const disclaimer = TEEN_INSIGHT_OVERVIEW_DISCLAIMER;

  return (
    <section aria-label="Teen alignment insight overview" className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1785px] px-4 py-10 sm:px-8 sm:py-12 lg:px-[49px] lg:py-14">
        <article className="space-y-4 sm:space-y-5">
          <Typography variant="h2" as="h2" className={SECTION_HEADING_CLASS}>
            {discover.heading}
          </Typography>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-1 space-y-1.5 sm:space-y-2">
              {discover.introParagraphs.map((paragraph) => (
                <Typography
                  key={paragraph}
                  variant="body-regular"
                  as="p"
                  className={BODY_CLASS}
                >
                  {paragraph}
                </Typography>
              ))}

              <ul className={BULLETS_CLASS}>
                {discover.questions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </div>

            <SectionImage
              src={discover.image.src}
              alt={discover.image.alt}
              width={discover.image.width}
              height={discover.image.height}
            />
          </div>

          <Typography variant="body-regular" as="p" className={BODY_CLASS}>
            {discover.closing}
          </Typography>
        </article>

        <article className="mt-10 space-y-1.5 sm:mt-12 sm:space-y-2">
          <Typography variant="h2" as="h2" className={SECTION_HEADING_CLASS}>
            {whatIs.heading}
          </Typography>

          <Typography variant="body-regular" as="p" className={BODY_CLASS}>
            {whatIs.intro}
          </Typography>

          <ul className={BULLETS_CLASS}>
            {whatIs.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {whatIs.notes.map((note) => (
            <Typography
              key={note}
              variant="body-regular"
              as="p"
              className={BODY_CLASS}
            >
              {note}
            </Typography>
          ))}

          <Typography variant="body-regular" as="p" className={BODY_CLASS}>
            {whatIs.closing}
          </Typography>
        </article>

        <article className="mt-10 space-y-1.5 sm:mt-12 sm:space-y-2">
          <Typography variant="h2" as="h2" className={SECTION_HEADING_CLASS}>
            {alignmentTypes.heading}
          </Typography>

          <ul className={BULLETS_CLASS}>
            {alignmentTypes.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Typography variant="body-regular" as="p" className={BODY_CLASS}>
            {alignmentTypes.closing}
          </Typography>
        </article>

        <article className="mt-10 space-y-4 sm:mt-12 sm:space-y-5">
          <Typography variant="h2" as="h2" className={SECTION_HEADING_CLASS}>
            {whyTeens.heading}
          </Typography>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-1 space-y-1.5 sm:space-y-2">
              <Typography variant="body-regular" as="p" className={BODY_CLASS}>
                {whyTeens.intro}
              </Typography>

              <ul className={BULLETS_CLASS}>
                {whyTeens.thriveItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Typography variant="body-regular" as="p" className={BODY_CLASS}>
                {whyTeens.discoveringIntro}
              </Typography>

              <ul className={BULLETS_CLASS}>
                {whyTeens.discoveringItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <SectionImage
              src={whyTeens.image.src}
              alt={whyTeens.image.alt}
              width={whyTeens.image.width}
              height={whyTeens.image.height}
            />
          </div>

          <Typography variant="body-regular" as="p" className={BODY_CLASS}>
            {whyTeens.closing}
          </Typography>
        </article>

        <article className="mt-10 space-y-1.5 sm:mt-12 sm:space-y-2">
          <Typography variant="h2" as="h2" className={SECTION_HEADING_CLASS}>
            {whatYouReceive.heading}
          </Typography>

          <Typography variant="body-regular" as="p" className={BODY_CLASS}>
            {whatYouReceive.intro}
          </Typography>

          <ul className={BULLETS_CLASS}>
            {whatYouReceive.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="mt-10 space-y-1.5 sm:mt-12 sm:space-y-2">
          <Typography variant="h2" as="h2" className={SECTION_HEADING_CLASS}>
            {alignmentMetrics.heading}
          </Typography>

          <ul className={BULLETS_CLASS}>
            {alignmentMetrics.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="mt-10 space-y-1.5 sm:mt-12 sm:space-y-2">
          <Typography variant="h2" as="h2" className={SECTION_HEADING_CLASS}>
            {timing.heading}
          </Typography>

          <Typography variant="body-regular" as="p" className={BODY_CLASS}>
            {timing.intro}
          </Typography>

          {timing.scale.map((line) => (
            <Typography
              key={line}
              variant="body-regular"
              as="p"
              className={BODY_CLASS}
            >
              {line}
            </Typography>
          ))}

          <Typography variant="body-regular" as="p" className={BODY_CLASS}>
            {timing.listIntro}
          </Typography>

          <ul className={BULLETS_CLASS}>
            {timing.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Typography variant="body-regular" as="p" className={BODY_CLASS}>
            {timing.closing}
          </Typography>
        </article>

        <article className="mt-10 space-y-1.5 sm:mt-12 sm:space-y-2">
          <Typography variant="h2" as="h2" className={SECTION_HEADING_CLASS}>
            {whyMatters.heading}
          </Typography>

          <Typography variant="body-regular" as="p" className={BODY_CLASS}>
            {whyMatters.intro}
          </Typography>

          <ul className={BULLETS_CLASS}>
            {whyMatters.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Typography variant="body-regular" as="p" className={BODY_CLASS}>
            {whyMatters.closing}
          </Typography>
        </article>

        <article className="mt-10 space-y-1.5 sm:mt-12 sm:space-y-2">
          <Typography variant="h2" as="h2" className={SECTION_HEADING_CLASS}>
            {optionalStep.heading}
          </Typography>

          {optionalStep.paragraphs.map((paragraph) => (
            <Typography
              key={paragraph}
              variant="body-regular"
              as="p"
              className={BODY_CLASS}
            >
              {paragraph}
            </Typography>
          ))}

          <div className="pt-2">
            <LandingCtaBlock
              href={optionalStep.cta.href}
              label={optionalStep.cta.label}
              caption={optionalStep.cta.caption}
              variant="primary"
              theme="light"
              className="w-fit items-start"
              labelClassName="w-fit rounded-[7.55px] px-8 py-4.5 text-[14px] font-[800] leading-[160%] tracking-[-0.012em] sm:px-8 sm:text-[20.12px]"
              captionClassName="text-left text-[13px] font-normal leading-snug tracking-normal text-[#1B2A49] sm:text-[15.09px] sm:leading-[30.18px]"
            />
          </div>
        </article>

        <article className="mt-10 space-y-1.5 sm:mt-12 sm:space-y-2">
          <Typography
            variant="h2"
            as="h2"
            className={`${SECTION_HEADING_CLASS} uppercase`}
          >
            {disclaimer.heading}
          </Typography>

          <Typography variant="body-regular" as="p" className={BODY_CLASS}>
            {disclaimer.text}
          </Typography>
        </article>
      </div>
    </section>
  );
}
