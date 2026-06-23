import { LandingSectionNumber } from "@/components/landing/LandingSectionNumber";
import { LANDING_SECTION_HEADING_PRIMARY } from "@/components/landing/landing-styles";
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
        <LandingSectionNumber>{sectionNumber}</LandingSectionNumber>

        <div className="relative z-10 mx-auto flex w-full flex-col items-center gap-3 text-center sm:gap-4">
          <Typography
            id="teenage-years-heading"
            variant="h2"
            as="h2"
            className={`max-w-full whitespace-nowrap ${LANDING_SECTION_HEADING_PRIMARY}`}
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
