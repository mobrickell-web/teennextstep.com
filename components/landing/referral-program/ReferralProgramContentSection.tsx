import { LANDING_CONTENT_HEADING_SIZE } from "@/components/landing/landing-styles";
import { Typography } from "@/components/ui/typography";

import ReferralProgramFormSection from "@/components/landing/referral-program/ReferralProgramFormSection";
import {
  REFERRAL_PROGRAM_FOOTER,
  REFERRAL_PROGRAM_SECTIONS,
  type ReferralContentBlock,
  type ReferralTextSegment,
} from "@/components/landing/referral-program/content/referral-program-section";

const BODY_CLASS =
  "text-[clamp(15px,1.7vw,18px)] leading-[140%] text-black";
const SECTION_HEADING_CLASS =
  `${LANDING_CONTENT_HEADING_SIZE} font-[800] leading-[131%] text-[#194783]`;
const BULLETS_CLASS = `mt-1.5 list-disc space-y-1 pl-6 ${BODY_CLASS}`;
const NUMBERED_CLASS = `mt-1.5 list-decimal space-y-1 pl-6 ${BODY_CLASS}`;

function renderSegments(segments: ReferralTextSegment[]) {
  return segments.map((segment, index) =>
    segment.bold ? (
      <strong key={index} className="font-bold">
        {segment.text}
      </strong>
    ) : (
      <span key={index}>{segment.text}</span>
    ),
  );
}

function ReferralBlock({ block }: { block: ReferralContentBlock }) {
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

    case "numbered":
      return (
        <ol className={NUMBERED_CLASS}>
          {block.items.map((item, index) => (
            <li key={index}>{renderSegments(item)}</li>
          ))}
        </ol>
      );

    default:
      return null;
  }
}

export default function ReferralProgramContentSection() {
  return (
    <section
      aria-label="Referral program details"
      className="w-full bg-white"
    >
      <div className="mx-auto w-full max-w-[1785px] px-4 py-10 sm:px-8 sm:py-12 lg:px-[49px] lg:py-14">
        <div className="space-y-8 sm:space-y-10">
          {REFERRAL_PROGRAM_SECTIONS.map((section) => (
            <article key={section.title} className="space-y-1.5 sm:space-y-2">
              <Typography
                variant="h2"
                as="h2"
                className={SECTION_HEADING_CLASS}
              >
                {section.title}
              </Typography>
              {section.blocks.map((block, index) => (
                <ReferralBlock key={index} block={block} />
              ))}
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-4 text-center sm:mt-14 sm:space-y-5">
          <Typography
            variant="h2"
            as="h2"
            className={`${LANDING_CONTENT_HEADING_SIZE} font-[800] leading-[131%] text-[#194783] md:text-[clamp(22px,3vw,36px)]`}
          >
            {REFERRAL_PROGRAM_FOOTER.heading}
          </Typography>
          <Typography variant="body-regular" as="p" className={BODY_CLASS}>
            {REFERRAL_PROGRAM_FOOTER.intro}
          </Typography>
          <Typography variant="body-regular" as="p" className={BODY_CLASS}>
            {renderSegments([...REFERRAL_PROGRAM_FOOTER.closing])}
          </Typography>
        </div>

        <ReferralProgramFormSection />
      </div>
    </section>
  );
}
