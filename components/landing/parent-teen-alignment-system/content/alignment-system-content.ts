import { SUPER_SECTION_CONTENT } from "@/components/landing/content/super-section";
import { COMPLETE_PROCESS_SECTION_CONTENT } from "@/components/landing/content/complete-process-section";
import { FOUR_STEP_PROCESS_SECTION_CONTENT } from "@/components/landing/content/four-step-process-section";
import { WHY_DIFFERENT_SECTION_CONTENT } from "@/components/landing/content/why-different-section";

export const ALIGNMENT_SYSTEM_CONTENT = {
  freeAssessment: {
    heading: "Many Families Begin with the FREE Parent Insight Assessment",
    paragraphs: [
      "The FREE Parent Insight Assessment is designed to help parents first gain greater awareness of how they currently view their role in guiding their teen",
      "After completing the FREE assessment, parents receive access to their Parent Insight Dashboard, where they can review their scores and insights across all 10 Parent Guidance Metrics.",
      "From there, families can choose to continue into the Full Parent–Teen Alignment System, where both parent and teen perspectives are combined to create a deeper and more complete alignment process.",
      "As additional steps are completed, the dashboard expands to include:"
    ],
    bullets: [
      "Parent Alignment Results",
      "Teen Alignment Results",
      "Parent–Teen Alignment Results",
      "Alignment Gap Insights",
      "Personalized Roadmap Guidance",
    ],
    image: {
      src: "/images/landing-page/free-parent-insight.png",
      alt: "Parent and teen reviewing results together on a laptop",
    },
  },
  whatMakesDifferent: {
    heading: "What Makes Teen Next Step Different",
    intro:
      "Many next-step options for parents and teens fall into one of three categories:",
    limitationCategories: WHY_DIFFERENT_SECTION_CONTENT.intro.limitations.map(
      (item) => item.text,
    ),
    differentiatorIntro: WHY_DIFFERENT_SECTION_CONTENT.differentiator.description,
    benefits: WHY_DIFFERENT_SECTION_CONTENT.differentiator.benefits,
  },
  systemIncludes: {
    heading: "What the Full Parent-Teen Alignment System Includes",
    description: "The Complete 8-Part Parent–Teen Alignment System includes:",
    items: COMPLETE_PROCESS_SECTION_CONTENT.steps.map((step) => ({
      title: step.title.trim(),
      description: step.description,
    })),
  },
  howItWorks: {
    heading: "How the System Works",
    steps: FOUR_STEP_PROCESS_SECTION_CONTENT.steps.map((step, index) => ({
      step: `Step ${index + 1}`,
      title: step.title.replace(/^\d+\.\s*/, "").trim(),
      description: step.description,
    })),
  },
  guidedSupport: {
    heading: "Guided Support Included",
    intro:
      "The full Parent-Teen Alignment System includes live Ambassador Support — real human guidance to help your family understand results, address alignment gaps, and move forward with confidence.",
    ambassadorHeading: "Your Teen Next Step Ambassador helps you:",
    bullets: [
      "Understand your results",
      "Navigate the process",
      "Stay focused on what matters most",
      "Apply what you are learning in a practical way",
    ],
    closing:
      "You are leading the process — but you are not doing it alone.",
    image: {
      src: "/images/landing-page/guided-support-include.png",
      alt: "Ambassador supporting a parent and teen during a guided session",
    },
  },
  noPerfectParent: {
    heading: "No Perfect Parent. No Perfect Teen.",
    paragraphs: [
      "There is no such thing as a perfect parent or a perfect teen.",
      "This system is not designed to judge either one.",
      "It is designed to help families gain greater awareness, improve alignment, strengthen communication, and make better-informed decisions together.",
    ],
  },
  estimatedTime: {
    heading: "Estimated Completion Time",
    paragraphs: [
      "The Full Parent–Teen Alignment System is designed to be completed over approximately 30–60 days.",
      "Some families move faster.",
      "Others choose to move more slowly to allow for greater reflection, communication, and understanding throughout the process.",
    ],
  },
  optionalSupport: {
    heading: "Optional Advanced Support",
    paragraphs: [
      "Some families later decide they would like a more hands-on, professionally guided experience.",
      "For those families, advanced support with a Certified Parent–Teen Alignment Architect is also available.",
      "This higher level of support is designed for families who want deeper guidance through important conversations, decisions, and next-step planning.",
    ],
  },
  investment: {
    heading: "Investment",
    priceLine: "Complete 8-Part Parent–Teen Alignment System — $5800",
    description: {
      text: "Includes guided support from a Teen Next Step Ambassador throughout the process.",
      emphasis: "Teen Next Step Ambassador",
    },
  },
  ctas: {
    primary: {
      label: "Start Parent-Teen Alignment System — $5800",
      href: "/secure-your-teens-next-step",
      caption: "Full system • Ambassador Support • Personalized roadmap",
    },
    secondary: {
      label: "Start FREE Parent Insight Assessment",
      href: SUPER_SECTION_CONTENT.primaryCta.href,
      caption: SUPER_SECTION_CONTENT.primaryCta.caption,
    },
    disclaimer:
      "Results vary by family. Teen Next Step is designed to improve clarity and alignment — not to guarantee specific outcomes.",
  },
} as const;
