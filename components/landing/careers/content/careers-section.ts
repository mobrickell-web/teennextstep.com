export const CAREERS_HERO_IMAGE = "/images/landing-page/terms-privacy.png";

export const CAREERS_HERO = {
  heading: "CAREERS",
} as const;

export type CareerOpportunityItem = {
  id: string;
  title: string;
  paragraphs: string[];
  applyPrefix: string;
  applyLinkLabel: string;
  applyLinkHref: string;
};

export const CAREER_OPPORTUNITIES: CareerOpportunityItem[] = [
  {
    id: "ambassador",
    title: "TEEN NEXT STEP AMBASSADOR OPPORTUNITY",
    paragraphs: [
      "Teen Next Step Ambassadors provide live, guided support to help families understand their alignment results, navigate the process, and apply what they are learning in a practical way.",
      "If you are passionate about helping parents and teens gain clarity, improve communication, and move forward with confidence, we would like to hear from you.",
    ],
    applyPrefix: "To learn more or apply,",
    applyLinkLabel: "Contact Us",
    applyLinkHref: "/contact",
  },
  {
    id: "alignment-architect",
    title: "PARENT–TEEN ALIGNMENT ARCHITECTS",
    paragraphs: [
      "Certified Parent–Teen Alignment Architects provide advanced, hands-on guidance for families who want deeper support through important conversations, decisions, and next-step planning.",
      "If you have experience supporting families, teens, or educational and career decision-making—and you believe in alignment before decisions—we invite you to connect with us.",
    ],
    applyPrefix: "To learn more or apply,",
    applyLinkLabel: "Contact Us",
    applyLinkHref: "/contact",
  },
];
