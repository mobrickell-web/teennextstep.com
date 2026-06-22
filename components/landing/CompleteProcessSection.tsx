import Image from "next/image";

import { Typography } from "@/components/ui/typography";

import { COMPLETE_PROCESS_SECTION_CONTENT } from "@/components/landing/content/complete-process-section";

export default function CompleteProcessSection() {
  const { sectionNumber, heading, steps, footerItems } =
    COMPLETE_PROCESS_SECTION_CONTENT;

  return (
    <section
      id="complete-process"
      aria-labelledby="complete-process-heading"
      className="relative w-full overflow-hidden  bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 left-2 select-none font-semibold leading-none text-[#FFFFFF4F] text-[18px] [text-shadow:0px_4px_19.1px_#00000024] sm:-top-11 sm:font-extrabold sm:text-[clamp(4.5rem,11vw,107px)] sm:left-3 lg:left-4"
        >
          {sectionNumber}
        </span>

        <Typography
          id="complete-process-heading"
          variant="h2"
          as="h2"
          className="relative z-10 text-center text-[clamp(24px,4vw,40px)] font-[800] leading-tight text-primary"
        >
          <span className="block">{heading.line1}</span>
          <span className="block">{heading.line2}</span>
        </Typography>

        <div className="relative z-10 mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-6">
          {steps.map((step) => (
            <article
              key={step.title}
              className="flex h-full flex-col overflow-hidden rounded-[9px] border-[13px] border-secondary bg-secondary"
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

              <Typography
                variant="h5"
                as="h3"
                className="px-2 py-3 text-center text-[14px] font-[800] leading-[131%] whitespace-nowrap text-primary sm:px-3 sm:text-[18px]"
              >
                {step.title}
              </Typography>

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

        <ul className="relative z-10 mt-10 w-full max-w-3xl list-disc space-y-2 pl-5 text-left text-sm text-foreground sm:mt-12 sm:text-base lg:mt-12">
          {footerItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
