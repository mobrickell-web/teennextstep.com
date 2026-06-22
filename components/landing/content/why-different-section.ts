import { SUPER_SECTION_CONTENT } from "./super-section";

export const WHY_DIFFERENT_IMAGE = "/images/landing-page/why-different-image.png";
export const SETS_ICON = "/images/landing-page/sets-icon.svg";

export const WHY_DIFFERENT_IMAGE_SIZE = {
  width: 688,
  height: 660,
  borderRadius: 8.8,
} as const;

export const WHY_DIFFERENT_SECTION_CONTENT = {
  sectionNumber: "03",
  image: {
    src: WHY_DIFFERENT_IMAGE,
    alt: "Parent and teen reviewing next steps together on a laptop",
    width: WHY_DIFFERENT_IMAGE_SIZE.width,
    height: WHY_DIFFERENT_IMAGE_SIZE.height,
  },
  intro: {
    heading: {
      line1: "Why Teen Next Step Is Different—",
      line2: "and Why It Matters",
    },
    description:
      "Most next step options for teens and parents fall into one of three categories:",
    limitations: [
      {
        text: "Insight without clear next steps",
        emphasis: "without",
        popup: {
          title: "Insight WITHOUT Clear Next Steps",
          description:
            "A personality or interest profile may point your teen toward the arts—but that can lead to dozens of different career paths. Teen Next Step narrows this down by comparing parent and teen perspectives, identifying alignment gaps in direction, readiness, and priorities, and evaluating how well each potential path fits your teen's current level of commitment and real-world expectations—then outlining clear, structured next steps so you know exactly what to do next.",
        },
      },
      {
        text: "Guidance without structure",
        emphasis: "without",
        popup: {
          title: "Guidance WITHOUT Structure",
          description:
            "Advisors can help—but often lack a structured system to compare parent and teen perspectives, identify alignment gaps in direction and readiness, and translate that into a clear, actionable plan.",
        },
      },
      {
        text: "Motivation without real-world clarity",
        emphasis: "without",
        popup: {
          title: "Motivation WITHOUT Real-World Clarity",
          description:"Programs can inspire—but without clear direction, families are left unsure how that motivation applies to real decisions. For example, a teen may feel energized after a program but still not know whether to pursue college, a trade, or a specific career—or what to do next."
        },
      },
    ],
  },
  differentiator: {
    heading: "Here's What Sets Us Apart",
    description: "Teen Next Step was designed to bring these areas together into one guided, structured Parent–Teen Alignment process.",
    benefitsIntro: "This is not just another assessment.",
    benefitsList: "It is a guided system designed to help families:",
    benefits: [
      "Improve communication and understanding",
      "Identify alignment gaps before major decisions are made",
      "Gain greater clarity on direction and readiness",
      "Create a more structured and confident path forward",
    ],
  },
  primaryCta: SUPER_SECTION_CONTENT.primaryCta,
  secondaryCta: SUPER_SECTION_CONTENT.secondaryCta,
} as const;
