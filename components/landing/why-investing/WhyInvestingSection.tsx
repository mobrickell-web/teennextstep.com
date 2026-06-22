import Image from "next/image";
import Link from "next/link";

import { Typography } from "@/components/ui/typography";

import { WHY_INVESTING_CONTENT } from "@/components/landing/why-investing/content/why-investing-section";

function RowImage({
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
      className={`relative overflow-hidden rounded-[8.09px] bg-[#E4E4E4] ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 725px"
        className="object-cover"
      />
    </div>
  );
}

const HEADING =
  "text-[clamp(20px,2.6vw,30px)] font-[800] leading-[131%] text-[#194783]";
const BODY =
  "text-[clamp(15px,1.7vw,20px)] leading-[150%] text-black";
const BULLETS =
  "mt-3 list-disc space-y-1.5 pl-6 text-[clamp(15px,1.7vw,20px)] leading-[150%] text-black";

export default function WhyInvestingSection() {
  const {
    heroImage,
    heroImageAlt,
    hero,
    rows,
    banner,
    bannerNote,
    whatYouGet,
    whyMoveForward,
    investment,
    ctas,
  } = WHY_INVESTING_CONTENT;

  return (
    <section
      id="why-investing"
      aria-labelledby="why-investing-heading"
      className="w-full bg-white"
    >
      {/* Hero banner */}
      <div className="relative flex w-full items-center justify-center overflow-hidden px-3 py-10 sm:min-h-[360px] sm:px-6 sm:py-12 lg:min-h-[474px]">
        <Image
          src={heroImage}
          alt={heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="relative z-10 w-full max-w-[1785px] rounded-[9px] bg-white/20 px-4 py-7 text-center backdrop-blur-[22px] sm:px-10 sm:py-10 lg:px-16 lg:py-12">
          <Typography
            id="why-investing-heading"
            variant="h1"
            as="h1"
            className="mx-auto max-w-[1488px] text-center text-[clamp(24px,4.6vw,53.41px)] font-[800] leading-[110%] tracking-normal text-white"
          >
            {hero.heading}
          </Typography>
          <Typography
            variant="body-regular"
            as="p"
            className="mx-auto mt-4 max-w-[1493px] text-center text-[clamp(14px,2.2vw,29px)] font-medium leading-[125%] tracking-normal text-white"
          >
            {hero.subheading}
          </Typography>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto w-full max-w-[1785px] px-4 py-10 sm:px-8 sm:py-14 lg:px-16">
        {/* Alternating image/text rows */}
        <div className="space-y-12 lg:space-y-20">
          {rows.map((row) => (
            <div
              key={row.heading}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
              <RowImage
                src={row.image}
                alt={row.imageAlt}
                className={`aspect-[725/414] w-full lg:max-w-[725px] ${
                  row.imageSide === "right"
                    ? "order-2 lg:order-2 lg:justify-self-end"
                    : "order-2 lg:order-1"
                }`}
              />
              <div
                className={
                  row.imageSide === "right"
                    ? "order-1 lg:order-1"
                    : "order-1 lg:order-2"
                }
              >
                <Typography as="h2" className={HEADING}>
                  {row.heading}
                </Typography>
                {"intro" in row && row.intro ? (
                  <Typography as="p" className={`mt-3 ${BODY}`}>
                    {row.intro}
                  </Typography>
                ) : null}
                {"introNote" in row && row.introNote ? (
                  <Typography as="p" className={`mt-1 ${BODY}`}>
                    {row.introNote}
                  </Typography>
                ) : null}
                <ul className={BULLETS}>
                  {row.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Clarity banner */}
        <div className="mx-auto mt-12 w-full max-w-[1607px] rounded-[8.99px] bg-[#EAEAEA] px-6 py-8 text-center sm:px-10 lg:mt-16">
          <Typography
            as="p"
            className="text-center text-[clamp(18px,2.4vw,28px)] font-[800] leading-[131%] text-[#194783]"
          >
            {banner}
          </Typography>
          <Typography as="p" className={`mt-3 text-center ${BODY}`}>
            {bannerNote}
          </Typography>
        </div>

        {/* What You Get — image left */}
        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-12">
          <RowImage
            src={whatYouGet.image}
            alt={whatYouGet.imageAlt}
            className="order-2 aspect-[725/345] w-full lg:order-1 lg:max-w-[725px]"
          />
          <div className="order-1 lg:order-2">
            <Typography as="h2" className={HEADING}>
              {whatYouGet.heading}
            </Typography>
            <ul className={BULLETS}>
              {whatYouGet.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Parents Move Forward — image right */}
        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-12">
          <div className="order-1">
            <Typography as="h2" className={HEADING}>
              {whyMoveForward.heading}
            </Typography>
            <Typography as="p" className={`mt-3 ${BODY}`}>
              {whyMoveForward.intro}
            </Typography>
            <Typography as="p" className={`mt-1 ${BODY}`}>
              {whyMoveForward.wantLabel}
            </Typography>
            <ul className={BULLETS}>
              {whyMoveForward.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <RowImage
            src={whyMoveForward.image}
            alt={whyMoveForward.imageAlt}
            className="order-2 aspect-[725/414] w-full lg:justify-self-end lg:max-w-[725px]"
          />
        </div>

        {/* Investment */}
        <div className="mt-12 border-t border-[#D9D9D9] pt-8 lg:mt-16">
          <Typography as="h2" className={HEADING}>
            {investment.heading}
          </Typography>
          {investment.lines.map((line) => (
            <Typography key={line} as="p" className={`mt-3 ${BODY}`}>
              {line}
            </Typography>
          ))}
          {investment.bodyLines.map((line) => (
            <Typography key={line} as="p" className={`mt-3 ${BODY}`}>
              {line}
            </Typography>
          ))}
          <Typography
            as="p"
            className={`mt-4 font-bold ${BODY}`}
          >
            {investment.closingBold}
          </Typography>
          <Typography as="p" className={BODY}>
            {investment.closing}
          </Typography>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={ctas.primary.href}
              className="inline-flex min-h-[55px] w-full items-center justify-center gap-[10px] rounded-[7.52px] bg-[#194783] px-5 py-[15px] text-center text-[clamp(13px,1.5vw,18px)] font-semibold text-white shadow-[0px_0px_0px_0.63px_#908F9226] transition-colors hover:bg-[#194783]/90 sm:w-auto sm:px-[30px]"
            >
              {ctas.primary.label}
            </Link>
            <Link
              href={ctas.contact.href}
              className="inline-flex min-h-[55px] w-full items-center justify-center gap-[10px] rounded-[7.58px] bg-[#E67113] px-5 py-[15px] text-center text-[clamp(13px,1.5vw,18px)] font-semibold text-white shadow-[0px_0px_0px_0.63px_#908F9226] transition-colors hover:bg-[#E67113]/90 sm:w-auto sm:px-[30px]"
            >
              {ctas.contact.label}
            </Link>
          </div>
          <Typography
            variant="muted-sm"
            as="p"
            className="mt-2 text-[clamp(11px,1.2vw,13px)] text-grey-text"
          >
            {ctas.disclaimer}
          </Typography>
        </div>
      </div>
    </section>
  );
}
