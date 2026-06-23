import { LandingSectionNumber } from "@/components/landing/LandingSectionNumber";
import { LANDING_SECTION_HEADING_PRIMARY } from "@/components/landing/landing-styles";
import { LandingCtaBlock } from "@/components/landing/LandingCtaBlock";
import { Typography } from "@/components/ui/typography";

import { SMALL_INVESTMENT_SECTION_CONTENT } from "@/components/landing/content/small-investment-section";

export default function SmallInvestmentSection() {
  const { sectionNumber, heading, primaryCta, secondaryCta, tertiaryCta } =
    SMALL_INVESTMENT_SECTION_CONTENT;

  return (
    <section
      id="small-investment"
      aria-labelledby="small-investment-heading"
      className="relative w-full overflow-hidden  bg-[#EAEAEA] py-12 sm:py-14 lg:py-16"
    >
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <LandingSectionNumber>{sectionNumber}</LandingSectionNumber>

        <Typography
          id="small-investment-heading"
          variant="h2"
          as="h2"
          className={`relative z-10 text-center ${LANDING_SECTION_HEADING_PRIMARY}`}
        >
          {heading}
        </Typography>

        <div className="relative z-10 mt-8 flex w-full flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:items-start sm:justify-center sm:gap-2 lg:mt-10 lg:flex-nowrap">
          <LandingCtaBlock
            href={primaryCta.href}
            label={primaryCta.label}
            caption={primaryCta.caption}
            variant="primary"
            theme="light"
            className="w-full shrink-0 sm:w-auto"
            labelClassName="w-full rounded-[7.55px] px-3 text-[14px] font-[800] leading-[160%] tracking-[-0.012em] sm:w-auto sm:whitespace-nowrap sm:px-2 sm:text-[11px] md:px-3 md:text-[12px] lg:text-[13px] xl:px-4 xl:text-[20.12px]"
            captionClassName="max-w-[220px] text-[13px] font-normal leading-snug tracking-normal text-[#1B2A49] sm:max-w-none sm:text-[10px] md:text-[11px] xl:text-[15.09px] xl:leading-[30.18px]"
          />
          <LandingCtaBlock
            href={secondaryCta.href}
            label={secondaryCta.label}
            caption={secondaryCta.caption}
            variant="secondary"
            theme="light"
            className="w-full shrink-0 sm:w-auto"
            labelClassName="w-full rounded-[7.55px] border-primary bg-white px-3 text-[14px] font-[800] leading-[160%] tracking-[-0.012em] text-primary hover:bg-primary/5 sm:w-auto sm:whitespace-nowrap sm:bg-transparent sm:px-2 sm:text-[11px] md:px-3 md:text-[12px] lg:text-[13px] xl:px-4 xl:text-[20.12px]"
            captionClassName="max-w-[220px] text-[13px] font-normal capitalize leading-snug tracking-normal text-primary sm:max-w-none sm:text-[10px] md:text-[11px] xl:text-[15.09px] xl:leading-[30.18px]"
          />
          <LandingCtaBlock
            href={tertiaryCta.href}
            label={tertiaryCta.label}
            caption={tertiaryCta.caption}
            variant="secondary"
            theme="light"
            className="w-full shrink-0 sm:w-auto"
            labelClassName="w-full rounded-[7.58px] border-[1.79px] border-primary bg-white px-3 text-[14px] font-[800] leading-[160%] tracking-[-0.012em] text-primary hover:bg-primary/5 sm:w-auto sm:whitespace-nowrap sm:bg-transparent sm:px-2 sm:text-[11px] md:px-3 md:text-[12px] lg:text-[13px] xl:px-4 xl:text-[20.12px]"
          />
        </div>
      </div>
    </section>
  );
}
