import { SUPER_SECTION_CONTENT } from "./super-section";

export const PARENTS_DISCOVER_SECTION_CONTENT = {
  sectionNumber: "07",
  heading: "What Parents Often Discover",
  image: {
    src: "/images/landing-page/parents-discover-image.png",
    alt: "A parent and teen talking together at a table",
  },
  // Each bullet: text with an orange-emphasized phrase.
  bullets: [
    {
      text: "The teen feels less confident than the parent realized.",
      emphasis: "confident than",
    },
    {
      text: "The parent and teen have different ideas about college or career.",
      emphasis: "teen have different ideas",
    },
    {
      text: "The teen is interested in paths the parent never considered.",
      emphasis: "interested in paths",
    },
  ],
  closing: {
    text: "These insights create the starting point for better conversation and smarter next steps.",
    emphasis: "create the starting point",
  },
  primaryCta: SUPER_SECTION_CONTENT.primaryCta,
  secondaryCta: SUPER_SECTION_CONTENT.secondaryCta,
} as const;
