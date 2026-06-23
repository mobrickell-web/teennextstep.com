import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { LandingSectionNumber } from "@/components/landing/LandingSectionNumber";
import { LANDING_SECTION_HEADING_WHITE } from "@/components/landing/landing-styles";
import { LandingCtaBlock } from "@/components/landing/LandingCtaBlock";
import { Typography } from "@/components/ui/typography";

import { PARENTS_DISCOVER_SECTION_CONTENT } from "@/components/landing/content/parents-discover-section";

function renderEmphasis(text: string, emphasis: string) {
  const [before, after] = text.split(emphasis);

  return (
    <>
      {before}
      <span className="font-[800] text-secondary">{emphasis}</span>
      {after}
    </>
  );
}

export default function ParentsDiscoverSection() {
  const { sectionNumber, heading, image, bullets, closing, primaryCta, secondaryCta } =
    PARENTS_DISCOVER_SECTION_CONTENT;

  return (
    <section
      id="parents-discover"
      aria-labelledby="parents-discover-heading"
      className="relative w-full overflow-hidden bg-[#182E5B] py-12 sm:py-14 lg:py-0"
    >
      {/* Photo bleeds off the right edge on desktop */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="50vw"
          className="object-cover object-left"
        />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#182E5B] to-transparent" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <LandingSectionNumber onDark className="sm:top-4">
          {sectionNumber}
        </LandingSectionNumber>

        <div className="flex max-w-2xl flex-col gap-6 lg:ml-[130px] lg:min-h-[640px] lg:justify-center lg:py-16 xl:min-h-[700px]">
          <Typography
            id="parents-discover-heading"
            variant="h2"
            as="h2"
            className={`leading-[131%] ${LANDING_SECTION_HEADING_WHITE}`}
          >
            {heading}
          </Typography>

          <ul className="flex flex-col gap-4 sm:gap-5">
            {bullets.map((bullet) => (
              <li key={bullet.text} className="flex gap-3">
                <ChevronRight
                  className="mt-1 size-4 shrink-0 text-secondary xl:size-5"
                  aria-hidden
                />
                <Typography
                  variant="body-regular"
                  as="p"
                  className="text-[clamp(16px,1.8vw,20px)] font-normal leading-[131%] text-white lg:text-[22px] xl:text-[33.95px]"
                >
                  {renderEmphasis(bullet.text, bullet.emphasis)}
                </Typography>
              </li>
            ))}
          </ul>

          <Typography
            variant="body-regular"
            as="p"
            className="text-[clamp(16px,1.8vw,20px)] font-normal leading-[131%] text-white lg:text-[22px] xl:text-[33.95px]"
          >
            {renderEmphasis(closing.text, closing.emphasis)}
          </Typography>

          <div className="mt-2 flex w-full flex-col items-start gap-6 sm:flex-row sm:gap-4 lg:gap-5">
            <LandingCtaBlock
              href={primaryCta.href}
              label={primaryCta.label}
              caption={primaryCta.caption}
              variant="primary"
              theme="dark"
              className="w-full sm:w-fit"
              labelClassName="w-full rounded-[7.55px] px-[30.18px] py-[15.09px] text-[14px] font-[800] leading-[160%] tracking-[-0.012em] sm:h-[55px] sm:w-[660.7px] sm:max-w-full sm:text-[16px] lg:text-[14px] xl:text-[16px]"
              captionClassName="text-[13px] font-normal leading-snug tracking-normal text-white/80 sm:text-[13px]"
            />
            <LandingCtaBlock
              href={secondaryCta.href}
              label={secondaryCta.label}
              caption={secondaryCta.caption}
              variant="secondary"
              theme="dark"
              className="w-full sm:w-fit"
              labelClassName="w-full rounded-[7.55px] border-[1.26px] border-white px-[30.18px] py-[15.09px] text-[14px] font-[800] leading-[160%] tracking-[-0.012em] sm:h-[55px] sm:w-[492px] sm:max-w-full sm:text-[16px] lg:text-[14px] xl:text-[16px]"
              captionClassName="text-[13px] font-normal capitalize leading-snug tracking-normal text-white/80 sm:text-[13px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
