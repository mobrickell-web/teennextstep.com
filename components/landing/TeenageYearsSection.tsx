import { LandingSectionNumber } from "@/components/landing/LandingSectionNumber";
import { LANDING_SECTION_HEADING_PRIMARY, LANDING_SECTION_TAGLINE_CLASS } from "@/components/landing/landing-styles";
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

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-1 text-center sm:gap-4">
          <Typography
            id="teenage-years-heading"
            variant="h2"
            as="h2"
            className={`w-full leading-[131%] lg:whitespace-nowrap ${LANDING_SECTION_HEADING_PRIMARY}`}
          >
            <span className="block lg:inline">{heading.line1}</span>{" "}
            <span className="block lg:inline">{heading.line2}</span>
          </Typography>

          <p
            className={`flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-2 text-foreground lg:flex-nowrap lg:gap-x-3 lg:whitespace-nowrap ${LANDING_SECTION_TAGLINE_CLASS}`}
          >
            {tags.map((tag, index) => (
              <span key={tag} className="inline-flex items-center gap-2">
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
