export const WHY_PARENTS_TRUST_IMAGE = "/images/landing-page/why-parents-trust-image.png";

export const WHY_PARENTS_IMAGE_SIZE = {
  width: 688,
  height: 660,
  borderRadius: 8.8,
} as const;

export const WHY_PARENTS_SECTION_CONTENT = {
  sectionNumber: "03",
  heading: {
    line1: "Why Parents Trust Us—",
    line2: "and Take Teen Next Step Seriously",
  },
  intro: {
    text: "Many parents do not realize how easy it is for a teen to head down the wrong educational or career path before the right foundations are in place. When parent and teen are not aligned, the result can be:",
    emphasis: "Many parents do not realize",
  },
  misalignmentResults: [
    "Confusion",
    "Poor Decisions",
    "Wasted Time",
    "Unnecessary Stress",
    "Costly Pathway Changes",
  ],
  callout:
    "Teen Next Step is designed to help parents and teens get aligned before major commitments are made.",
  processIntro: "Through a simple but powerful 4 step process, families can:",
  steps: [
    "Uncover where they are aligned",
    "Discover where disconnects exist",
    {
      text: "Find out where greater clarity and insight is needed BEFORE moving forward with important life, education, or career-related decisions.",
      emphasis: "BEFORE",
    },
    "Receive meaningful guidance based on alignment scores so you can move forward with life, education, or career decisions.",
  ],
  image: {
    src: WHY_PARENTS_TRUST_IMAGE,
    alt: "Family sitting together and smiling in their living room",
    width: WHY_PARENTS_IMAGE_SIZE.width,
    height: WHY_PARENTS_IMAGE_SIZE.height,
  },
} as const;
