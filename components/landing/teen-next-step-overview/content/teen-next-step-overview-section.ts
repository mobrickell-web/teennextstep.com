import { SMALL_INVESTMENT_SECTION_CONTENT } from "@/components/landing/content/small-investment-section";
import { SUPER_SECTION_CONTENT } from "@/components/landing/content/super-section";
import { WHY_INVESTING_CONTENT } from "@/components/landing/why-investing/content/why-investing-section";

export const TEEN_NEXT_STEP_OVERVIEW_HERO_IMAGE =
  "/images/landing-page/step-overview.png";

export type TeenNextStepOverviewTextSegment = {
  text: string;
  bold?: boolean;
  breakBefore?: boolean;
};

export type TeenNextStepOverviewContentBlock =
  | { type: "paragraph"; segments: TeenNextStepOverviewTextSegment[] }
  | { type: "bullets"; items: string[] };

export const TEEN_NEXT_STEP_OVERVIEW_HERO = {
  heading: "TEEN NEXT STEP OVERVIEW",
  description: [
    {
      text: "Before you spend years and thousands of dollars on education or career paths, Teen Next Step helps you see",
    },
    {
      text: "how aligned you and your teen really are on direction, readiness, and what should come next.",
      breakBefore: true,
    },
  ] satisfies TeenNextStepOverviewTextSegment[],
} as const;

export const TEEN_NEXT_STEP_OVERVIEW_CONTENT = {
  image: {
    src: "/images/landing-page/teen-step-overview.png",
    alt: "Family sitting together on a couch",
    width: 623,
    height: 431,
  },
  introBlocks: [
    {
      type: "paragraph",
      segments: [
        {
          text: "Teen Next Step is a structured parent–teen alignment system designed to help families make better decisions about education, career direction, and what comes next in life.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        { text: "The process begins with a " },
        { text: "FREE Parent Insight Profile", bold: true },
        {
          text: ", where parents assess how they are currently supporting and guiding their teen. This creates an important starting point for understanding strengths and potential gaps.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        { text: "From there, the full " },
        { text: "8-Part Parent–Teen Alignment System", bold: true },
        {
          text: " brings both perspectives together. Parents and teens complete the same structured profile separately, allowing the system to identify where they align, where they differ, and where greater clarity or support may be needed.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Through a combination of alignment scores, key development insights, personality and interest indicators, and a guided direction roadmap, families gain a clearer understanding of:",
        },
      ],
    },
    {
      type: "bullets",
      items: [
        "How aligned they are on future direction",
        "Whether the teen is truly ready for next-step decisions",
        "Where potential risks may exist",
        "What practical steps to take moving forward",
      ],
    },
  ] satisfies TeenNextStepOverviewContentBlock[],
  closingBlocks: [
    {
      type: "paragraph",
      segments: [
        {
          text: "Teen Next Step is designed to provide more than insight — it delivers a structured path forward, helping families avoid costly missteps and move ahead with greater clarity, confidence, and alignment.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "For those who want additional support, guidance is also provided on how to find the right alignment resources if needed.",
        },
      ],
    },
  ] satisfies TeenNextStepOverviewContentBlock[],
} as const;

export const TEEN_NEXT_STEP_OVERVIEW_CTAS = {
  primary: SUPER_SECTION_CONTENT.primaryCta,
  secondary: {
    label: WHY_INVESTING_CONTENT.ctas.primary.label,
    href: WHY_INVESTING_CONTENT.ctas.primary.href,
    caption:
      "Includes Full Alignment And Live, Guided Support For Your Teen's Next Steps",
  },
  tertiary: SMALL_INVESTMENT_SECTION_CONTENT.tertiaryCta,
} as const;
