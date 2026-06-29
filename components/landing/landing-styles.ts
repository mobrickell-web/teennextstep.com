/** Mobile 20px; scales from md up; caps at 40px on desktop (landing section titles). */
export const LANDING_SECTION_HEADING_SIZE =
  "text-[20px] md:text-[clamp(24px,4vw,40px)]";

export const LANDING_SECTION_HEADING_SIZE_SM =
  "text-[20px] sm:text-[clamp(24px,4vw,40px)]";

/** Mobile 20px; scales from md up for in-page content headings (terms, referral, blog). */
export const LANDING_CONTENT_HEADING_SIZE =
  "text-[20px] md:text-[clamp(18px,2.2vw,24px)]";

/** Mobile 20px; scales from md up for large content / assessment headings. */
export const LANDING_CONTENT_HEADING_SIZE_LG =
  "text-[20px] md:text-[clamp(22px,3vw,36px)]";

/** Mobile 20px; scales from md up for assessment / results page section headings. */
export const LANDING_SUBSECTION_HEADING_SIZE =
  "text-[20px] md:text-[clamp(22px,3vw,32px)]";

/** Mobile 20px; scales from md up for frosted hero panels on landing subpages. */
export const LANDING_HERO_HEADING_SIZE =
  "text-[20px] md:text-[clamp(28px,4vw,48px)]";

export const LANDING_SECTION_HEADING_CLASS = `${LANDING_SECTION_HEADING_SIZE} font-[800] leading-tight`;

export const LANDING_SECTION_HEADING_PRIMARY =
  `${LANDING_SECTION_HEADING_CLASS} text-primary`;

export const LANDING_SECTION_HEADING_WHITE =
  `${LANDING_SECTION_HEADING_CLASS} text-white`;

/** Section 2 tag line scale — responsive, capped at 22px on large screens. */
export const LANDING_SECTION_TAGLINE_CLASS =
  "text-[clamp(11px,3vw,22px)] font-bold sm:text-lg md:text-xl lg:text-[22px]";

/** Body copy at the same scale as section 2 tag lines (normal weight). */
export const LANDING_SECTION_TAGLINE_BODY_CLASS =
  "text-[clamp(11px,3vw,22px)] font-normal leading-[131%] sm:text-lg md:text-xl lg:text-[22px]";

/** Standard landing paragraph — matches Why Us / other narrative sections. */
export const LANDING_SECTION_BODY_CLASS = "text-base text-foreground sm:text-lg";
