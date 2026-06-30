import { SUPER_SECTION_CONTENT } from "@/components/landing/content/super-section";

export type RichSegment = {
  text: string;
  bold?: boolean;
};

export const DIFFERENT_PATHS_SECTION_CONTENT = {
  sectionNumber: "06",
  image: {
    src: "/images/landing-page/Rectangle 40.png",
    alt: "A parent and teen sitting together having a serious conversation",
  },
  heading: {
    line1: "When Parent and Teen Want",
    line2: "Different Paths",
  },
  subheading:
    "Another important area where Teen Next Step becomes extremely valuable.",
  // Paragraphs shown in the right column, beside the image.
  asideParagraphs: [
    [
      { text: "Many families are not dealing with a lack of love or concern. They are dealing with a lack of alignment. " },
      {
        text: "A parent may be focused on stability, security, and practical outcomes, while the teen may be drawn toward different interests, goals, or possibilities.",
        bold: true,
      },
    ],
    [
      {
        text: "Teen Next Step helps bring those differences into the open early — before major educational or career commitments are made.",
      },
    ],
  ],
  // Full-width paragraphs shown below the two-column block.
  bodyParagraphs: [
    [
      {
        text: "Rather than forcing one side to give in to the other, ",
        bold: true,
      },
      {
        text: "the process helps reveal where the real disconnect exists, whether the disagreement is rooted in maturity, readiness, communication, expectations, interests, or misunderstanding, and what kind of next step may be wiser before locking into a larger long-term commitment.",
      },
    ],
    [
      { text: "In many cases, the best answer ", bold: true },
      {
        text: "is not immediately choosing one side's preferred path over the other. ",
      },
      { text: "It is identifying a smarter next step ", bold: true },
      {
        text: "that creates more clarity, reduces pressure, and helps both parent and teen move forward more productively.",
      },
    ],
    [
      {
        text: "Teen Next Step is not about pressure. It is about helping families make better decisions through better alignment.",
      },
    ],
    [
      {
        text: "A small investment now may help prevent much bigger costs later. ",
        bold: true,
      },
      {
        text: "Before your teen makes educational, vocational, or early career decisions that may affect years of their future, make sure you are both aligned on the path ahead.",
      },
    ],
  ],
  primaryCta: SUPER_SECTION_CONTENT.primaryCta,
  secondaryCta: SUPER_SECTION_CONTENT.secondaryCta,
} as const;
