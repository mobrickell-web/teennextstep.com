import { Typography } from "@/components/ui/typography";

import { TEENAGE_YEARS_SECTION_CONTENT } from "@/components/landing/content/teenage-years-section";

export default function TeenageYearsSection() {
  const { sectionNumber, heading, tags } = TEENAGE_YEARS_SECTION_CONTENT;

  return (
    <section
      id="teenage-years"
      aria-labelledby="teenage-years-heading"
      className="relative w-full overflow-hidden border-t border-primary bg-[#efefef] py-12 sm:py-14 lg:py-16"
    >
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 left-2 select-none font-semibold leading-none text-[#FFFFFF4F] text-[18px] [text-shadow:0px_4px_19.1px_#00000024] sm:-top-11 sm:font-extrabold sm:text-[clamp(4.5rem,11vw,107px)] sm:left-3 lg:left-4"
        >
          {sectionNumber}
        </span>

        <div className="relative z-10 mx-auto flex w-full flex-col items-center gap-3 text-center sm:gap-4">
          <Typography
            id="teenage-years-heading"
            variant="h2"
            as="h2"
            className="max-w-full text-[clamp(14px,2.4vw,40px)] font-[800] leading-tight whitespace-nowrap text-primary"
          >
            {heading}
          </Typography>

          <p className="scrollbar-hide flex max-w-full flex-nowrap items-center justify-center gap-x-2 overflow-x-auto text-[clamp(11px,3vw,22px)] font-bold whitespace-nowrap text-foreground sm:text-lg md:text-xl lg:text-[22px]">
            {tags.map((tag, index) => (
              <span key={tag} className="inline-flex shrink-0 items-center gap-2">
                {index > 0 ? (
                  <span aria-hidden className="text-foreground">
                    •
                  </span>
                ) : null}
                {tag}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
