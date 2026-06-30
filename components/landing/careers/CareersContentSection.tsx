"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";

import {
  CAREER_OPPORTUNITIES,
  type CareerContentBlock,
  type CareerTextSegment,
} from "@/components/landing/careers/content/careers-section";

const BODY_CLASS =
  "text-[clamp(15px,1.7vw,18px)] leading-[140%] text-black";
const SECTION_HEADING_CLASS =
  "text-[clamp(15px,1.7vw,18px)] font-[800] uppercase leading-[131%] text-[#194783]";
const BULLETS_CLASS = `mt-1.5 list-disc space-y-1 pl-6 ${BODY_CLASS}`;

function renderSegments(segments: CareerTextSegment[]) {
  return segments.map((segment, index) => {
    let content: React.ReactNode;

    if (segment.href) {
      content = (
        <a
          href={segment.href}
          className="font-medium text-[#194783] underline underline-offset-2 hover:text-[#194783]/80"
        >
          {segment.text}
        </a>
      );
    } else if (segment.bold) {
      content = <strong className="font-bold">{segment.text}</strong>;
    } else {
      content = segment.text;
    }

    return (
      <Fragment key={index}>
        {segment.breakBefore && <br />}
        {content}
      </Fragment>
    );
  });
}

function CareerBlock({ block }: { block: CareerContentBlock }) {
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

export default function CareersContentSection() {
  return (
    <section
      aria-label="Career opportunities"
      className="w-full bg-white"
    >
      <div className="mx-auto w-full max-w-[1785px] px-4 py-10 sm:px-8 sm:py-12 lg:px-[49px] lg:py-14">
        <Accordion type="single" collapsible className="flex w-full flex-col gap-3">
          {CAREER_OPPORTUNITIES.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="rounded-[8.86px] border-none bg-[#EAEAEA] px-5 py-4 sm:px-[28.81px] sm:py-[20px]"
            >
              <AccordionTrigger className="py-0 text-left text-[clamp(15px,1.8vw,20px)] font-[800] uppercase leading-[131%] text-[#194783] hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden [&[data-state=open]_.careers-plus]:rotate-45">
                {item.title}
                <Plus
                  className="careers-plus ml-auto size-5 shrink-0 text-[#194783] transition-transform duration-200 sm:size-6"
                  aria-hidden
                />
              </AccordionTrigger>
              <AccordionContent className="pt-3">
                <div className="space-y-4 sm:space-y-5">
                  {item.intro?.map((block, index) => (
                    <CareerBlock key={index} block={block} />
                  ))}

                  {item.sections?.map((section) => (
                    <article
                      key={section.title}
                      className="space-y-1.5 sm:space-y-2"
                    >
                      <Typography
                        variant="h3"
                        as="h3"
                        className={SECTION_HEADING_CLASS}
                      >
                        {section.title}
                      </Typography>
                      {section.blocks.map((block, index) => (
                        <CareerBlock key={index} block={block} />
                      ))}
                    </article>
                  ))}

                  {item.paragraphs?.map((paragraph) => (
                    <Typography
                      key={paragraph}
                      variant="body-regular"
                      as="p"
                      className={BODY_CLASS}
                    >
                      {paragraph}
                    </Typography>
                  ))}

                  {item.applyPrefix &&
                    item.applyLinkLabel &&
                    item.applyLinkHref && (
                      <Typography
                        variant="body-regular"
                        as="p"
                        className={BODY_CLASS}
                      >
                        {item.applyPrefix}{" "}
                        <Link
                          href={item.applyLinkHref}
                          className="font-medium text-[#194783] underline underline-offset-2 hover:text-[#194783]/80"
                        >
                          {item.applyLinkLabel}
                        </Link>
                        .
                      </Typography>
                    )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
