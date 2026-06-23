import Image from "next/image";

import { LandingSectionNumber } from "@/components/landing/LandingSectionNumber";
import { LANDING_SECTION_HEADING_SIZE_SM } from "@/components/landing/landing-styles";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import {
  DIFFERENT_PATHS_SECTION_CONTENT,
  type RichSegment,
} from "@/components/landing/content/different-paths-section";

function renderSegments(segments: readonly RichSegment[]) {
  return segments.map((segment, index) =>
    segment.bold ? (
      <strong key={index} className="font-[800]">
        {segment.text}
      </strong>
    ) : (
      <span key={index}>{segment.text}</span>
    ),
  );
}

export default function DifferentPathsSection() {
  const {
    sectionNumber,
    image,
    heading,
    subheading,
    asideParagraphs,
    bodyParagraphs,
  } = DIFFERENT_PATHS_SECTION_CONTENT;

  return (
    <section
      id="different-paths"
      aria-labelledby="different-paths-heading"
      className="relative w-full overflow-hidden bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <LandingSectionNumber>{sectionNumber}</LandingSectionNumber>

        <div className="relative z-10 md:pl-[100px] xl:pl-[120px]">
          <div className="grid items-stretch gap-8 md:grid-cols-2 md:gap-12 xl:gap-16">
            <div
              className="relative mx-auto aspect-[722/380] w-full max-w-[822px] shrink-0 overflow-hidden mt-3  bg-bg-subtle md:aspect-auto md:mx-0 md:h-full md:min-h-[280px]"
              style={{ borderRadius: 8.8 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 722px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 lg:gap-5">
              <Typography
                id="different-paths-heading"
                variant="h2"
                as="h2"
                className={cn(
                  "text-[13px] font-[800] leading-[131%] text-primary",
                  LANDING_SECTION_HEADING_SIZE_SM,
                  "sm:font-[800] sm:leading-tight",
                )}
              >
                <span className="inline md:block">{heading.line1} </span>
                <span className="inline md:block">{heading.line2}</span>
              </Typography>

              <Typography
                variant="h5"
                as="p"
                className="text-[11px] font-[800] leading-[131%] text-[#1B2A49] sm:text-[clamp(16px,1.7vw,22px)]"
              >
                {subheading}
              </Typography>

              {asideParagraphs.map((segments, index) => (
                <Typography
                  key={index}
                  variant="body-regular"
                  as="p"
                  className="text-[11px] font-normal leading-[131%] text-[#1B2A49] sm:text-[clamp(15px,1.7vw,22px)]"
                >
                  {renderSegments(segments)}
                </Typography>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 lg:mt-10 lg:gap-5">
            {bodyParagraphs.map((segments, index) => (
              <Typography
                key={index}
                variant="body-regular"
                as="p"
                className="text-[11px] font-normal leading-[131%] text-[#1B2A49] sm:text-[clamp(15px,1.7vw,22px)]"
              >
                {renderSegments(segments)}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
