import type { ParentInsightHeroTextSegment } from "@/components/landing/free-parent-insight/content/hero-section";

export const PARENT_INSIGHT_1619_HERO_IMAGE =
  "/images/landing-page/free-parent-insight/free-parent-insight-age-sixteen.png";

export const PARENT_INSIGHT_1619_HERO_CONTENT = {
  heading: "FREE Parent Insight (Ages 16–19)",
  description: [
    {
      text: "This quick Parent Insight highlights areas that may need attention as your teen prepares for important",
    },
    {
      text: "education and career decisions.",
      breakBefore: true,
    },
  ] satisfies ParentInsightHeroTextSegment[],
  heading2: "Important Note",
  paragraphs: [
    [
      {
        text: "There is no such thing as a perfect parent—and no parent gets everything right all the time. You are not alone",
      },
      {
        text: "in navigating these important decisions.",
        breakBefore: true,
      },
    ],
    [
      {
        text: "This insight is designed to support you, not evaluate or judge you. The more honest you are in rating each",
      },
      {
        text: "statement, the more meaningful and helpful your results will be—for both you and your teen.",
        breakBefore: true,
      },
    ],
  ] satisfies ParentInsightHeroTextSegment[][],
} as const;
