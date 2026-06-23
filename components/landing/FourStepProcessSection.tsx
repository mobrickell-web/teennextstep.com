import Image from "next/image";

import { LandingSectionNumber } from "@/components/landing/LandingSectionNumber";
import { LANDING_SECTION_HEADING_PRIMARY } from "@/components/landing/landing-styles";
import { LandingCtaBlock } from "@/components/landing/LandingCtaBlock";
import { Typography } from "@/components/ui/typography";

import { FOUR_STEP_PROCESS_SECTION_CONTENT } from "@/components/landing/content/four-step-process-section";

export default function FourStepProcessSection() {
  const { sectionNumber, heading, steps, primaryCta, secondaryCta } =
    FOUR_STEP_PROCESS_SECTION_CONTENT;

  return (
    <section
      id="four-step-process"
      aria-labelledby="four-step-process-heading"
      className="relative w-full overflow-hidden  bg-[#D2D0D0] py-12 sm:py-14 lg:py-16"
    >
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <LandingSectionNumber>{sectionNumber}</LandingSectionNumber>

        <Typography
          id="four-step-process-heading"
          variant="h2"
          as="h2"
          className={`relative z-10 text-center ${LANDING_SECTION_HEADING_PRIMARY}`}
        >
          {heading}
        </Typography>

        <div className="relative z-10 mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-6">
          {steps.map((step) => (
            <article
              key={step.title}
              className="flex h-full flex-col overflow-hidden rounded-[9px] border-[13px] border-primary bg-primary"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/10">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              <Typography
                variant="h5"
                as="h3"
                className="px-2 py-3 text-center text-[14px] font-[800] leading-[131%] whitespace-nowrap text-secondary sm:px-3 sm:text-[18px]"
              >
                {step.title}
              </Typography>

              <div className="flex flex-1 flex-col rounded-b-[8.8px] bg-white px-3 py-3">
                <Typography
                  variant="body-regular"
                  as="p"
                  className="text-center text-[10px] font-semibold leading-snug whitespace-nowrap text-primary sm:text-[12px]"
                >
                  {step.summary}
                </Typography>

                <Typography
                  variant="muted-sm"
                  as="p"
                  className="mt-2 text-center text-[11px] leading-relaxed text-grey-text sm:text-[12px]"
                >
                  {step.description}
                </Typography>
              </div>
            </article>
          ))}
        </div>

        <div className="relative z-10 mt-10 flex w-full flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-4 lg:mt-12 lg:gap-5">
          <LandingCtaBlock
            href={primaryCta.href}
            label={primaryCta.label}
            caption={primaryCta.caption}
            variant="primary"
            theme="light"
            className="w-full sm:w-fit"
            labelClassName="w-full rounded-[7.55px] text-[14px] font-[800] leading-[160%] tracking-[-0.012em] sm:w-fit sm:text-[20.12px]"
            captionClassName="text-[13px] font-normal leading-snug tracking-normal text-[#1B2A49] sm:text-[15.09px] sm:leading-[30.18px]"
          />
          <LandingCtaBlock
            href={secondaryCta.href}
            label={secondaryCta.label}
            caption={secondaryCta.caption}
            variant="secondary"
            theme="light"
            className="w-full sm:w-fit"
            labelClassName="w-full rounded-[7.55px] border-primary bg-white text-[14px] font-[800] leading-[160%] tracking-[-0.012em] text-primary hover:bg-primary/5 sm:w-fit sm:bg-transparent sm:text-[20.12px]"
            captionClassName="text-[13px] font-normal capitalize leading-snug tracking-normal text-primary sm:text-[15.09px] sm:leading-[30.18px]"
          />
        </div>
      </div>
    </section>
  );
}
