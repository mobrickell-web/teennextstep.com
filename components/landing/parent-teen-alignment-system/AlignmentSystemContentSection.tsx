import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { LANDING_PRIMARY_CTA_BG } from "@/components/landing/LandingCtaBlock";
import { ALIGNMENT_SYSTEM_CONTENT } from "@/components/landing/parent-teen-alignment-system/content/alignment-system-content";

const sectionHeadingClass =
  "text-[clamp(22px,3vw,36px)] font-[800] leading-[131%] text-primary";
const bodyClass = "text-sm leading-relaxed text-foreground sm:text-base";
const sectionGap = "space-y-10 sm:space-y-12 lg:space-y-14";

function SectionHeading({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Typography
      id={id}
      variant="h2"
      as="h2"
      className={cn(sectionHeadingClass, className)}
    >
      {children}
    </Typography>
  );
}

function renderEmphasis(text: string, emphasis: string) {
  const [before, after] = text.split(emphasis);

  return (
    <>
      {before}
      <span className="font-[800]">{emphasis}</span>
      {after}
    </>
  );
}

function ContentImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[688/660] w-full max-w-[688px] overflow-hidden rounded-[8.8px] bg-bg-subtle lg:mx-0 lg:aspect-auto lg:h-full lg:max-w-none lg:min-h-[280px]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 688px"
        className="object-cover"
      />
    </div>
  );
}

export default function AlignmentSystemContentSection() {
  const {
    freeAssessment,
    whatMakesDifferent,
    systemIncludes,
    howItWorks,
    guidedSupport,
    noPerfectParent,
    estimatedTime,
    optionalSupport,
    investment,
    ctas,
  } = ALIGNMENT_SYSTEM_CONTENT;

  return (
    <div className="w-full bg-white">
      <div
        className={cn(
          "w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14 xl:px-10",
          sectionGap,
        )}
      >
        <section
          id="free-parent-insight"
          aria-labelledby="free-parent-insight-heading"
          className="space-y-6 sm:space-y-8"
        >
          <SectionHeading id="free-parent-insight-heading">
            {freeAssessment.heading}
          </SectionHeading>

          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="space-y-4 sm:space-y-5">
              {freeAssessment.paragraphs.map((paragraph) => (
                <Typography
                  key={paragraph}
                  variant="body-regular"
                  as="p"
                  className={bodyClass}
                >
                  {paragraph}
                </Typography>
              ))}

              <ul className="list-disc space-y-2 pl-5">
                {freeAssessment.bullets.map((item) => (
                  <li key={item} className={bodyClass}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ContentImage
              src={freeAssessment.image.src}
              alt={freeAssessment.image.alt}
            />
          </div>
        </section>

        <section
          id="what-makes-different"
          aria-labelledby="what-makes-different-heading"
          className="space-y-4 sm:space-y-5"
        >
          <SectionHeading id="what-makes-different-heading">
            {whatMakesDifferent.heading}
          </SectionHeading>

          <Typography variant="body-regular" as="p" className={bodyClass}>
            {whatMakesDifferent.intro}
          </Typography>

          <ul className="list-disc space-y-2 pl-5">
            {whatMakesDifferent.limitationCategories.map((item) => (
              <li key={item} className={bodyClass}>
                {item}
              </li>
            ))}
          </ul>

          <Typography variant="body-regular" as="p" className={bodyClass}>
            {whatMakesDifferent.differentiatorIntro}
          </Typography>

          <ul className="list-disc space-y-2 pl-5">
            {whatMakesDifferent.benefits.map((item) => (
              <li key={item} className={bodyClass}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="system-includes"
          aria-labelledby="system-includes-heading"
          className="space-y-4 sm:space-y-5"
        >
          <SectionHeading id="system-includes-heading">
            {systemIncludes.heading}
          </SectionHeading>

          <ol className="space-y-4 sm:space-y-5">
            {systemIncludes.items.map((item) => (
              <li key={item.title} className="space-y-1.5">
                <Typography
                  variant="body-semibold"
                  as="p"
                  className="text-sm font-[800] text-primary sm:text-base"
                >
                  {item.title}
                </Typography>
                <Typography variant="body-regular" as="p" className={bodyClass}>
                  {item.description}
                </Typography>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="how-it-works"
          aria-labelledby="how-it-works-heading"
          className="space-y-4 sm:space-y-5"
        >
          <SectionHeading id="how-it-works-heading">
            {howItWorks.heading}
          </SectionHeading>

          <ol className="space-y-4 sm:space-y-5">
            {howItWorks.steps.map((step) => (
              <li key={step.step} className="space-y-1.5">
                <Typography
                  variant="body-semibold"
                  as="p"
                  className="text-sm font-[800] text-primary sm:text-base"
                >
                  {step.step}: {step.title}
                </Typography>
                <Typography variant="body-regular" as="p" className={bodyClass}>
                  {step.description}
                </Typography>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="guided-support"
          aria-labelledby="guided-support-heading"
          className="space-y-6 sm:space-y-8"
        >
          <SectionHeading id="guided-support-heading">
            {guidedSupport.heading}
          </SectionHeading>

          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="space-y-4 sm:space-y-5">
              <Typography variant="body-regular" as="p" className={bodyClass}>
                {guidedSupport.intro}
              </Typography>

              <Typography
                variant="body-semibold"
                as="p"
                className="text-sm font-[800] text-primary sm:text-base"
              >
                {guidedSupport.ambassadorHeading}
              </Typography>

              <ul className="list-disc space-y-2 pl-5">
                {guidedSupport.bullets.map((item) => (
                  <li key={item} className={bodyClass}>
                    {item}
                  </li>
                ))}
              </ul>

              <Typography variant="body-regular" as="p" className={bodyClass}>
                {guidedSupport.closing}
              </Typography>

              <div
                id="no-perfect-parent"
                aria-labelledby="no-perfect-parent-heading"
                className="space-y-4 sm:space-y-5"
              >
                <SectionHeading
                  id="no-perfect-parent-heading"
                  className="text-[clamp(20px,2.6vw,32px)]"
                >
                  {noPerfectParent.heading}
                </SectionHeading>

                {noPerfectParent.paragraphs.map((paragraph) => (
                  <Typography
                    key={paragraph}
                    variant="body-regular"
                    as="p"
                    className={bodyClass}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </div>
            </div>

            <ContentImage
              src={guidedSupport.image.src}
              alt={guidedSupport.image.alt}
              className="min-h-[320px] sm:min-h-[380px] lg:min-h-[460px]"
            />
          </div>
        </section>

        <section
          id="estimated-time"
          aria-labelledby="estimated-time-heading"
          className="space-y-4"
        >
          <SectionHeading id="estimated-time-heading">
            {estimatedTime.heading}
          </SectionHeading>

          {estimatedTime.paragraphs.map((paragraph) => (
            <Typography
              key={paragraph}
              variant="body-regular"
              as="p"
              className={bodyClass}
            >
              {paragraph}
            </Typography>
          ))}
        </section>

        <section
          id="optional-support"
          aria-labelledby="optional-support-heading"
          className="space-y-4 sm:space-y-5"
        >
          <SectionHeading id="optional-support-heading">
            {optionalSupport.heading}
          </SectionHeading>

          {optionalSupport.paragraphs.map((paragraph) => (
            <Typography
              key={paragraph}
              variant="body-regular"
              as="p"
              className={bodyClass}
            >
              {paragraph}
            </Typography>
          ))}
        </section>

        <section
          id="investment"
          aria-labelledby="investment-heading"
          className="space-y-4"
        >
          <SectionHeading id="investment-heading">
            {investment.heading}
          </SectionHeading>

          <Typography
            variant="body-semibold"
            as="p"
            className="text-sm font-[800] text-primary sm:text-base"
          >
            {investment.priceLine}
          </Typography>

          <Typography variant="body-regular" as="p" className={bodyClass}>
            {renderEmphasis(
              investment.description.text,
              investment.description.emphasis,
            )}
          </Typography>
        </section>

        <section
          id="alignment-system-ctas"
          aria-label="Get started"
          className="space-y-4 pt-2 sm:pt-4"
        >
          <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:justify-start sm:gap-5">
            <div className="flex w-full flex-col items-start gap-2 sm:w-fit">
              <Link
                href={ctas.primary.href}
                className={cn(
                  "inline-flex min-h-[50px] w-full items-center justify-center rounded-lg px-4 py-3 text-center text-sm font-[800] leading-snug transition-colors sm:w-fit sm:min-w-[320px] sm:text-base",
                  LANDING_PRIMARY_CTA_BG,
                )}
              >
                {ctas.primary.label}
              </Link>
              <Typography
                variant="muted-sm"
                as="p"
                className="text-left text-xs leading-relaxed text-grey-text"
              >
                {ctas.primary.caption}
              </Typography>
            </div>

            <div className="flex w-full flex-col items-start gap-2 sm:w-fit">
              <Link
                href={ctas.secondary.href}
                className="inline-flex min-h-[50px] w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-center text-sm font-[800] leading-snug text-white transition-colors hover:bg-primary/90 sm:w-fit sm:min-w-[320px] sm:text-base"
              >
                {ctas.secondary.label}
              </Link>
              <Typography
                variant="muted-sm"
                as="p"
                className="text-left text-xs leading-relaxed text-grey-text"
              >
                {ctas.secondary.caption}
              </Typography>
            </div>
          </div>

          <Typography
            variant="muted-sm"
            as="p"
            className="text-left text-xs leading-relaxed text-grey-text"
          >
            {ctas.disclaimer}
          </Typography>
        </section>
      </div>
    </div>
  );
}
