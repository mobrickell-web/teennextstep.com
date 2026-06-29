import Image from "next/image";

import { LANDING_SUBSECTION_HEADING_SIZE } from "@/components/landing/landing-styles";
import { Typography } from "@/components/ui/typography";

import { RESULTS_READY_CONTENT } from "@/components/landing/results-ready/content/results-ready-section";

function ResultImage({
  src,
  alt,
  className,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[8.07px] bg-[#E4E4E4] ${className ?? ""}`}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      ) : (
        <span className="sr-only">{alt}</span>
      )}
    </div>
  );
}

export default function ResultsReadySection() {
  const {
    heroImage,
    heroImageAlt,
    hero,
    handToTeen,
    sendLink,
    whatHappensNext,
    accessToResults,
    inviteLink,
  } = RESULTS_READY_CONTENT;

  return (
    <section
      id="results-ready"
      aria-labelledby="results-ready-heading"
      className="w-full bg-white"
    >
      {/* Hero banner — full-bleed edge to edge */}
      <div className="relative flex w-full items-center justify-center overflow-hidden px-3 py-10 sm:min-h-[340px] sm:px-6 sm:py-12 lg:min-h-[436px]">
        <Image
          src={heroImage}
          alt={heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Frosted-glass headline panel */}
        <div className="relative z-10 w-full max-w-[1785px] rounded-[9px] bg-white/20 px-4 py-6 text-center backdrop-blur-[22px] sm:px-10 sm:py-10 lg:px-16 lg:py-12">
          <Typography
            id="results-ready-heading"
            variant="h1"
            as="h1"
            className="text-center text-[20px] font-[800] leading-[115%] tracking-normal text-white md:text-[clamp(22px,6vw,53.41px)]"
          >
            {hero.heading}
          </Typography>
          <Typography
            variant="body-regular"
            as="p"
            className="mx-auto mt-3 max-w-[1493px] text-center text-[clamp(13px,3vw,29px)] font-medium leading-[135%] tracking-normal text-white sm:mt-4"
          >
            {hero.subheading}
          </Typography>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto w-full max-w-[1785px] px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-16">
        {/* Have Your Teen Complete Their Profile */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
          <div>
            <Typography
              variant="body-semibold"
              as="h2"
              className={`${LANDING_SUBSECTION_HEADING_SIZE} font-[800] leading-[131%] text-[#194783]`}
            >
              {handToTeen.heading}
            </Typography>
            <Typography
              variant="body-regular"
              as="p"
              className="mt-3 text-[clamp(15px,1.8vw,20px)] leading-[150%] text-black"
            >
              {handToTeen.body}
            </Typography>
            <Typography
              variant="body-semibold"
              as="p"
              className="mt-4 text-[clamp(15px,1.8vw,20px)] font-bold leading-[150%] text-black"
            >
              {handToTeen.linkLabel}
            </Typography>
            <a
              href={inviteLink}
              className="mt-1 block break-all text-[clamp(14px,1.6vw,18px)] font-medium leading-[150%] text-[#194783] underline underline-offset-2"
            >
              {inviteLink}
            </a>
          </div>

          <ResultImage
            src={handToTeen.image}
            alt={handToTeen.imageAlt}
            sizes="(max-width: 1024px) 100vw, 723px"
            className="aspect-[723/348] w-full md:max-w-[723px] md:justify-self-end"
          />
        </div>

        {/* Prefer to Send the Link? */}
        <div className="mt-12 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:mt-16 lg:gap-12">
          <ResultImage
            src={sendLink.image}
            alt={sendLink.imageAlt}
            sizes="(max-width: 1024px) 100vw, 723px"
            className="order-2 aspect-[723/312] w-full md:order-1 md:max-w-[723px]"
          />

          <div className="order-1 md:order-2">
            <Typography
              variant="body-semibold"
              as="h2"
              className={`${LANDING_SUBSECTION_HEADING_SIZE} font-[800] leading-[131%] text-[#194783]`}
            >
              {sendLink.heading}
            </Typography>
            <Typography
              variant="body-regular"
              as="p"
              className="mt-3 text-[clamp(15px,1.8vw,20px)] leading-[150%] text-black"
            >
              {sendLink.body}
            </Typography>
            <a
              href={inviteLink}
              className="mt-1 block break-all text-[clamp(14px,1.6vw,18px)] font-medium leading-[150%] text-[#194783] underline underline-offset-2"
            >
              {inviteLink}
            </a>
            <Typography
              variant="body-regular"
              as="p"
              className="mt-4 text-[clamp(15px,1.8vw,20px)] leading-[150%] text-black"
            >
              {sendLink.note}
            </Typography>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="mt-12 lg:mt-16">
          <Typography
            variant="body-semibold"
            as="h2"
            className={`${LANDING_SUBSECTION_HEADING_SIZE} font-[800] leading-[131%] text-[#194783]`}
          >
            {whatHappensNext.heading}
          </Typography>
          <Typography
            variant="body-regular"
            as="p"
            className="mt-3 text-[clamp(15px,1.8vw,20px)] leading-[150%] text-black"
          >
            {whatHappensNext.intro}
          </Typography>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-[clamp(15px,1.8vw,20px)] leading-[150%] text-black">
            {whatHappensNext.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Access to Results */}
        <div className="mt-10 lg:mt-12">
          <Typography
            variant="body-semibold"
            as="h2"
            className={`${LANDING_SUBSECTION_HEADING_SIZE} font-[800] leading-[131%] text-[#194783]`}
          >
            {accessToResults.heading}
          </Typography>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-[clamp(15px,1.8vw,20px)] leading-[150%] text-black">
            {accessToResults.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
