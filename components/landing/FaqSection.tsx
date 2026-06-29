import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Plus } from "lucide-react";

import { LandingSectionNumber } from "@/components/landing/LandingSectionNumber";
import { LANDING_SECTION_HEADING_PRIMARY } from "@/components/landing/landing-styles";
import { LandingCtaBlock } from "@/components/landing/LandingCtaBlock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";

import { FAQ_SECTION_CONTENT } from "@/components/landing/content/faq-section";

const CARD_BORDER = "#D9D9D9";

export default function FaqSection() {
  const { sectionNumber, heading, subheading, ctaLabel, cards, faq } =
    FAQ_SECTION_CONTENT;

  return (
    <section
      aria-labelledby="faq-insight-heading"
      className="relative w-full overflow-hidden bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <LandingSectionNumber className="sm:-top-15">
          {sectionNumber}
        </LandingSectionNumber>

        <div className="relative z-10 flex flex-col items-center gap-2 text-center">
          <Typography
            id="faq-insight-heading"
            variant="h2"
            as="h2"
            className={`text-balance leading-[131%] ${LANDING_SECTION_HEADING_PRIMARY}`}
          >
            {heading}
          </Typography>

          <Typography
            variant="h5"
            as="p"
            className="text-[clamp(14px,1.6vw,23.63px)] font-semibold leading-[131%] text-black"
          >
            {subheading}
          </Typography>
        </div>

        <div
          id="blog"
          className="relative z-10 mt-8 grid scroll-mt-[var(--site-navbar-height)] gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-5 lg:gap-5"
        >
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex h-full flex-col overflow-hidden rounded-[8.22px] border-[3.12px] transition-shadow hover:shadow-md"
              style={{ backgroundColor: CARD_BORDER, borderColor: CARD_BORDER }}
            >
              <div className="relative aspect-[364/248] w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2 px-3 pt-3">
                <Typography
                  variant="h5"
                  as="h3"
                  className="text-[15px] font-[800] leading-[131%] text-primary"
                >
                  {card.title}
                </Typography>

                <Typography
                  variant="muted-sm"
                  as="p"
                  className="text-[11px] leading-snug text-grey-text"
                >
                  {card.description}
                </Typography>
              </div>

              <span className="mt-3 flex items-center justify-center gap-1.5 rounded-b-[8.41px] bg-white px-3 py-3 text-[13px] font-semibold text-primary transition-colors group-hover:bg-primary/5">
                {ctaLabel}
                <ChevronRight className="size-4 shrink-0" aria-hidden />
              </span>
            </Link>
          ))}
        </div>

        <div className="relative mt-14 lg:mt-20">
          <LandingSectionNumber className="-top-8 sm:-top-16 lg:-left-8">
            {faq.sectionNumber}
          </LandingSectionNumber>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8">
          <Typography
            variant="h2"
            as="h2"
            className={`text-center leading-[131%] ${LANDING_SECTION_HEADING_PRIMARY}`}
          >
            {faq.heading}
          </Typography>

          <Accordion
            id="faq"
            type="single"
            collapsible
            className="grid w-full scroll-mt-[var(--site-navbar-height)] gap-3 sm:gap-4 md:grid-cols-2"
          >
            {faq.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="h-fit rounded-[8.86px] border-none bg-[#EAEAEA] px-5 py-3 sm:px-[28.81px] sm:py-[20px]"
              >
                <AccordionTrigger className="py-0 text-[15px] font-[800] text-black hover:no-underline sm:text-[18px] [&_[data-slot=accordion-trigger-icon]]:hidden [&[data-state=open]_.faq-plus]:rotate-45">
                  {item.question}
                  <Plus
                    className="faq-plus ml-auto size-5 shrink-0 text-black transition-transform duration-200"
                    aria-hidden
                  />
                </AccordionTrigger>
                <AccordionContent className="text-[13px] leading-relaxed text-grey-text sm:text-[15px]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-4 flex w-full flex-col items-center gap-6 sm:flex-row sm:flex-nowrap sm:items-start sm:justify-center sm:gap-3 lg:gap-4">
            <LandingCtaBlock
              href={faq.primaryCta.href}
              label={faq.primaryCta.label}
              caption={faq.primaryCta.caption}
              variant="primary"
              theme="light"
              className="w-full sm:w-fit"
              labelClassName="w-full rounded-[7.55px] whitespace-normal text-[14px] font-[800] leading-[160%] tracking-[-0.012em] sm:w-fit sm:whitespace-nowrap sm:text-[14px]"
              captionClassName="text-[13px] font-normal leading-snug tracking-normal text-[#1B2A49] sm:text-[12px] sm:leading-snug"
            />
            <LandingCtaBlock
              href={faq.secondaryCta.href}
              label={faq.secondaryCta.label}
              caption={faq.secondaryCta.caption}
              variant="secondary"
              theme="light"
              className="w-full sm:w-fit"
              labelClassName="w-full rounded-[7.55px] whitespace-normal border-primary bg-white text-[14px] font-[800] leading-[160%] tracking-[-0.012em] text-primary hover:bg-primary/5 sm:w-fit sm:whitespace-nowrap sm:bg-transparent sm:text-[14px]"
              captionClassName="text-[13px] font-normal capitalize leading-snug tracking-normal text-primary sm:whitespace-nowrap sm:text-[12px] sm:leading-snug"
            />
            <LandingCtaBlock
              href={faq.tertiaryCta.href}
              label={faq.tertiaryCta.label}
              caption={faq.tertiaryCta.caption}
              variant="secondary"
              theme="light"
              className="w-full sm:w-fit"
              labelClassName="w-full rounded-[7.58px] whitespace-normal border-[1.79px] border-primary bg-white text-[14px] font-[800] leading-[160%] tracking-[-0.012em] text-primary hover:bg-primary/5 sm:w-fit sm:whitespace-nowrap sm:bg-transparent sm:text-[14px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
