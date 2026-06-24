/** Scales on small screens; caps at 40px on desktop (landing section titles). */
export const LANDING_SECTION_HEADING_SIZE = "text-[clamp(24px,4vw,40px)]";

export const LANDING_SECTION_HEADING_SIZE_SM = "sm:text-[clamp(24px,4vw,40px)]";

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
