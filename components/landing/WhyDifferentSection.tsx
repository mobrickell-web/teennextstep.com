"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import { X } from "lucide-react";

import { LANDING_SECTION_HEADING_PRIMARY } from "@/components/landing/landing-styles";
import { LandingCtaBlock } from "@/components/landing/LandingCtaBlock";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Typography } from "@/components/ui/typography";

import {
  SETS_ICON,
  WHY_DIFFERENT_IMAGE_SIZE,
  WHY_DIFFERENT_SECTION_CONTENT,
} from "@/components/landing/content/why-different-section";

type LimitationPopup = {
  title: string;
  description: string;
};

function renderEmphasisText(text: string, emphasis: string) {
  const index = text.toLowerCase().indexOf(emphasis.toLowerCase());

  if (index === -1) {
    return text;
  }

  const before = text.slice(0, index);
  const matched = text.slice(index, index + emphasis.length);
  const after = text.slice(index + emphasis.length);

  return (
    <>
      {before}
      <span className="font-semibold uppercase">{matched}</span>
      {after}
    </>
  );
}

export default function WhyDifferentSection() {
  const { image, intro, differentiator, primaryCta, secondaryCta } =
    WHY_DIFFERENT_SECTION_CONTENT;

  const [activePopup, setActivePopup] = useState<LimitationPopup | null>(null);

  return (
    <>
    <section
      id="why-us"
      aria-labelledby="why-different-heading"
      className="relative w-full overflow-hidden bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative z-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div
            className="relative mx-auto h-[min(660px,90vw)] w-full max-w-[688px] shrink-0 overflow-hidden bg-bg-subtle"
            style={{ borderRadius: WHY_DIFFERENT_IMAGE_SIZE.borderRadius }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 688px"
              className="object-cover opacity-100"
            />
          </div>

          <div className="flex flex-col gap-8 lg:gap-10">
            <div className="space-y-4">
              <Typography
                id="why-different-heading"
                variant="h3"
                as="h2"
                className={LANDING_SECTION_HEADING_PRIMARY}
              >
                <span className="block">{intro.heading.line1}</span>
                <span className="block">{intro.heading.line2}</span>
              </Typography>

              <Typography
                variant="body-regular"
                as="p"
                className="text-base text-foreground sm:text-lg"
              >
                {intro.description}
              </Typography>

              <ul className="space-y-3">
                {intro.limitations.map((item) => {
                  const popup =
                    "popup" in item && item.popup ? item.popup : null;

                  return (
                    <li
                      key={item.text}
                      className={`flex gap-3${popup ? " cursor-pointer" : ""}`}
                      {...(popup
                        ? {
                            role: "button" as const,
                            tabIndex: 0,
                            onClick: () => setActivePopup(popup),
                            onKeyDown: (event: KeyboardEvent<HTMLLIElement>) => {
                              if (
                                event.key === "Enter" ||
                                event.key === " "
                              ) {
                                event.preventDefault();
                                setActivePopup(popup);
                              }
                            },
                          }
                        : {})}
                    >
                      <span
                        aria-hidden
                        className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
                      >
                        <X className="size-3.5 text-highlight" strokeWidth={3} />
                      </span>
                      <Typography
                        variant="body-regular"
                        as="p"
                        className={`min-w-0 flex-1 text-base text-foreground sm:text-lg${popup ? " transition-colors hover:text-primary" : ""}`}
                      >
                        {renderEmphasisText(item.text, item.emphasis)}
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="space-y-4">
              <Typography
                variant="h3"
                as="h3"
                className={LANDING_SECTION_HEADING_PRIMARY}
              >
                {differentiator.heading}
              </Typography>

              <Typography
                variant="body-regular"
                as="p"
                className="text-base text-foreground sm:text-lg"
              >
                {differentiator.description}
              </Typography>

              <ul className="space-y-3">
                {differentiator.benefits.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Image
                      src={SETS_ICON}
                      alt=""
                      width={14}
                      height={15}
                      aria-hidden
                      className="mt-0.5 shrink-0"
                    />
                    <Typography
                      variant="body-regular"
                      as="p"
                      className="text-base text-foreground sm:text-lg"
                    >
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-10 flex w-full flex-col items-center justify-center gap-6 sm:flex-row sm:gap-4 lg:mt-12 lg:gap-5">
          <LandingCtaBlock
            href={primaryCta.href}
            label={primaryCta.label}
            caption={primaryCta.caption}
            variant="primary"
            theme="light"
          />
          <LandingCtaBlock
            href={secondaryCta.href}
            label={secondaryCta.label}
            caption={secondaryCta.caption}
            variant="secondary"
            theme="light"
          />
        </div>
      </div>
    </section>

      <Dialog
        modal={false}
        open={activePopup !== null}
        onOpenChange={(open) => {
          if (!open) {
            setActivePopup(null);
          }
        }}
      >
        <DialogContent
          className="z-[100] max-w-[min(640px,calc(100%-2rem))] gap-0 rounded-[12px] border-0 bg-white p-6 shadow-lg ring-0 sm:max-w-[640px] sm:p-8"
          onInteractOutside={() => setActivePopup(null)}
        >
          {activePopup ? (
            <>
              <DialogTitle className="pr-10 text-left text-[clamp(18px,2.2vw,24px)] font-[800] leading-[131%] text-primary">
                {activePopup.title}
              </DialogTitle>

              <div className="mt-5 rounded-[12px] bg-[#efefef] p-5 sm:mt-6 sm:p-6">
                <Typography
                  variant="body-regular"
                  as="p"
                  className="text-left text-sm leading-relaxed text-foreground sm:text-base"
                >
                  {activePopup.description}
                </Typography>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
