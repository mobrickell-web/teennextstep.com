"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { LANDING_CONTENT_HEADING_SIZE_LG } from "@/components/landing/landing-styles";
import { LANDING_PRIMARY_CTA_BG } from "@/components/landing/LandingCtaBlock";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import type { PARENT_INSIGHT_INTRO_CONTENT } from "@/components/landing/free-parent-insight/content/intro-section";

const BODY_CLASS =
  "text-[clamp(15px,1.7vw,18px)] leading-[140%] text-black";

const CONFIRM_BUTTON_CLASS = cn(
  "inline-flex min-h-[50px] min-w-[7.5rem] flex-1 items-center justify-center rounded-lg px-6 py-3 text-center text-base font-[800] leading-[140%] text-white transition-colors sm:min-w-[9rem]",
  LANDING_PRIMARY_CTA_BG,
);

type AgeGroupSelectionSection = Extract<
  (typeof PARENT_INSIGHT_INTRO_CONTENT.sections)[number],
  { ageGroups: readonly unknown[] }
>;

type PendingAgeGroup = {
  href: string;
  confirmMessage: string;
} | null;

type ParentInsightAgeGroupSelectionProps = {
  section: AgeGroupSelectionSection;
};

export default function ParentInsightAgeGroupSelection({
  section,
}: ParentInsightAgeGroupSelectionProps) {
  const router = useRouter();
  const [pendingGroup, setPendingGroup] = useState<PendingAgeGroup>(null);

  const handleConfirm = () => {
    if (!pendingGroup) {
      return;
    }

    router.push(pendingGroup.href);
    setPendingGroup(null);
  };

  return (
    <>
      <article className="space-y-8 sm:space-y-10">
        <div className="space-y-2 text-center">
          <Typography
            variant="h2"
            as="h2"
            className={`${LANDING_CONTENT_HEADING_SIZE_LG} font-[800] leading-[131%] text-primary`}
          >
            {section.number}. {section.title}
          </Typography>

          <Typography variant="body-regular" as="p" className={BODY_CLASS}>
            {section.subtitle}
          </Typography>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-2 md:gap-8 lg:gap-10">
          {section.ageGroups.map((group) => (
            <article
              key={group.id}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-secondary bg-secondary p-1"
            >
              <div className="relative aspect-[4/3] w-full sm:aspect-[5/4]">
                <Image
                  src={group.image.src}
                  alt={group.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="rounded-lg object-cover object-center"
                />
              </div>

              <div className="flex flex-1 flex-col items-center bg-secondary px-5 py-6 text-center sm:px-6 sm:py-8">
                <Typography
                  variant="body-semibold"
                  as="h3"
                  className="text-[clamp(16px,1.8vw,20px)] font-[800] leading-[140%] text-black"
                >
                  {group.title}
                </Typography>

                <Typography
                  variant="body-regular"
                  as="p"
                  className={`mt-3 ${BODY_CLASS}`}
                >
                  {group.description}
                </Typography>

                <button
                  type="button"
                  onClick={() =>
                    setPendingGroup({
                      href: group.href,
                      confirmMessage: group.confirmMessage,
                    })
                  }
                  className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-center text-[clamp(14px,1.5vw,16px)] font-[800] leading-[140%] text-white transition-colors hover:bg-primary/90"
                >
                  {group.buttonLabel}
                </button>
              </div>
            </article>
          ))}
        </div>

        <Typography
          variant="body-regular"
          as="p"
          className="text-center text-[clamp(15px,1.7vw,18px)] font-medium leading-[140%] text-destructive"
        >
          {section.footer}
        </Typography>
      </article>

      <Dialog
        modal={false}
        open={pendingGroup !== null}
        onOpenChange={(open) => {
          if (!open) {
            setPendingGroup(null);
          }
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="z-[100] max-w-[min(520px,calc(100%-2rem))] gap-0 rounded-[12px] border-0 bg-white p-8 shadow-lg ring-0 sm:p-10"
          onInteractOutside={() => setPendingGroup(null)}
        >
          {pendingGroup ? (
            <>
              <DialogTitle className="text-center text-[clamp(18px,2.2vw,24px)] font-[800] leading-[131%] text-primary">
                {pendingGroup.confirmMessage}
              </DialogTitle>

              <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10 sm:gap-6">
                <button
                  type="button"
                  onClick={handleConfirm}
                  className={CONFIRM_BUTTON_CLASS}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setPendingGroup(null)}
                  className={CONFIRM_BUTTON_CLASS}
                >
                  No
                </button>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
