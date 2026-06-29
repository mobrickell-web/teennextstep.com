"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";

import { CAREER_OPPORTUNITIES } from "@/components/landing/careers/content/careers-section";

const BODY_CLASS =
  "text-[clamp(15px,1.7vw,18px)] leading-[140%] text-black";

export default function CareersContentSection() {
  return (
    <section
      aria-label="Career opportunities"
      className="w-full bg-white"
    >
      <div className="mx-auto w-full max-w-[1785px] px-[49px] py-10 sm:py-12 lg:py-14">
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
                <div className="space-y-3">
                  {item.paragraphs.map((paragraph) => (
                    <Typography
                      key={paragraph}
                      variant="body-regular"
                      as="p"
                      className={BODY_CLASS}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                  <Typography variant="body-regular" as="p" className={BODY_CLASS}>
                    {item.applyPrefix}{" "}
                    <Link
                      href={item.applyLinkHref}
                      className="font-medium text-[#194783] underline underline-offset-2 hover:text-[#194783]/80"
                    >
                      {item.applyLinkLabel}
                    </Link>
                    .
                  </Typography>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
