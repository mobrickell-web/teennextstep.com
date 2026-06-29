import Link from "next/link";

import { LANDING_CONTENT_HEADING_SIZE } from "@/components/landing/landing-styles";
import { Typography } from "@/components/ui/typography";

import {
  TERMS_PRIVACY_SECTIONS,
  type TermsContentBlock,
  type TermsTextSegment,
} from "@/components/landing/terms/content/terms-policy-section";

const BODY_CLASS =
  "text-[clamp(15px,1.7vw,18px)] leading-[140%] text-black";
const SECTION_HEADING_CLASS =
  `${LANDING_CONTENT_HEADING_SIZE} font-[800] leading-[131%] text-[#194783]`;
const SUBHEADING_CLASS =
  "text-[clamp(16px,1.9vw,20px)] font-bold leading-[140%] text-black";
const BULLETS_CLASS = `mt-1.5 list-disc space-y-1 pl-6 ${BODY_CLASS}`;

function renderSegments(segments: TermsTextSegment[]) {
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

function TermsBlock({ block }: { block: TermsContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <Typography variant="body-regular" as="p" className={BODY_CLASS}>
          {renderSegments(block.segments)}
        </Typography>
      );

    case "subheading":
      return (
        <Typography variant="body-regular" as="p" className={SUBHEADING_CLASS}>
          {block.text}
        </Typography>
      );

    case "bullets":
      return (
        <ul className={BULLETS_CLASS}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );

    case "contactLine":
      return (
        <Typography variant="body-regular" as="p" className={BODY_CLASS}>
          {block.prefix}{" "}
          <Link
            href={block.linkHref}
            className="font-medium text-[#194783] underline underline-offset-2 hover:text-[#194783]/80"
          >
            {block.linkLabel}
          </Link>
        </Typography>
      );

    default:
      return null;
  }
}

export default function TermsPrivacyContentSection() {
  return (
    <section
      aria-label="Terms of use and privacy policy content"
      className="w-full bg-white"
    >
      <div className="mx-auto w-full max-w-[1785px] px-[49px] py-10 sm:py-12 lg:py-14">
        <div className="space-y-8 sm:space-y-10">
          {TERMS_PRIVACY_SECTIONS.map((section) => (
            <article key={section.number} className="space-y-1.5 sm:space-y-2">
              <Typography
                variant="h2"
                as="h2"
                className={SECTION_HEADING_CLASS}
              >
                {section.number}. {section.title}
              </Typography>
              {section.blocks.map((block, index) => (
                <TermsBlock key={index} block={block} />
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
