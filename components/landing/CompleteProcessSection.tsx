import Image from "next/image";

import { LandingSectionNumber } from "@/components/landing/LandingSectionNumber";
import { LANDING_SECTION_HEADING_PRIMARY } from "@/components/landing/landing-styles";
import { Typography } from "@/components/ui/typography";

import { COMPLETE_PROCESS_SECTION_CONTENT } from "@/components/landing/content/complete-process-section";

export default function CompleteProcessSection() {
  const { sectionNumber, heading, description, steps, footerItems } =
    COMPLETE_PROCESS_SECTION_CONTENT;

  return (
    <section
      id="complete-process"
      aria-labelledby="complete-process-heading"
      className="relative w-full overflow-hidden  bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <LandingSectionNumber>{sectionNumber}</LandingSectionNumber>

        <div className="relative z-10 flex flex-col items-center gap-4 text-center">
          <Typography
            id="complete-process-heading"
            variant="h2"
            as="h2"
            className={LANDING_SECTION_HEADING_PRIMARY}
          >
            <span className="block">{heading.line1}</span>
            <span className="block">{heading.line2}</span>
          </Typography>

          <Typography
            variant="body-regular"
            as="p"
            className="max-w-3xl text-base text-foreground sm:text-lg"
          >
            {description}
          </Typography>
        </div>

        <div className="relative z-10 mt-8 grid gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.title}
              className="flex h-full flex-col overflow-hidden rounded-[9px] border-[6px] border-secondary bg-secondary"
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

              <div
                className="overflow-x-auto py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                <Typography
                  variant="h5"
                  as="h3"
                  className="inline-block min-w-full whitespace-nowrap text-center text-[14px] font-[800] leading-[131%] text-primary sm:text-[18px]"
                >
                  {step.title}
                </Typography>
              </div>

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

        <ul className="relative z-10 mt-10 w-full list-disc space-y-2 pl-5 text-left text-sm text-foreground sm:mt-12 sm:text-base lg:mt-12">
          {footerItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
