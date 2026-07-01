import { SMALL_INVESTMENT_SECTION_CONTENT } from "@/components/landing/content/small-investment-section";
import { SUPER_SECTION_CONTENT } from "@/components/landing/content/super-section";
import { WHY_INVESTING_CONTENT } from "@/components/landing/why-investing/content/why-investing-section";

export const OUR_TEAM_HERO_IMAGE = "/images/landing-page/our-team.png";

export type OurTeamTextSegment = {
  text: string;
  bold?: boolean;
  breakBefore?: boolean;
};

export type OurTeamContentBlock =
  | { type: "paragraph"; segments: OurTeamTextSegment[] }
  | { type: "bullets"; items: OurTeamTextSegment[][] };

export type OurTeamSection = {
  title: string;
  blocks: OurTeamContentBlock[];
};

export const OUR_TEAM_HERO = {
  heading: "OUR TEAM",
  paragraphs: [
    [
      {
        text: "Teen Next Step is powered by a focused network of professionals dedicated to helping parents and teens gain",
      },
      {
        text: "clarity, improve alignment, and make better decisions about what comes next.",
        breakBefore: true,
      },
    ],
    [
      { text: "Our team is structured to ensure that " },
      { text: "families are supported", bold: true },
      { text: " with both insight and direction, while " },
      {
        text: "maintaining a simple and efficient experience.",
        breakBefore: true,
      },
    ],
  ],
} as const;

export const OUR_TEAM_SECTIONS: OurTeamSection[] = [
  {
    title: "TEEN NEXT STEP AMBASSADORS",
    blocks: [
      {
        type: "paragraph",
        segments: [
          { text: "Teen Next Step Ambassadors", bold: true },
          {
            text: " serve as the first point of connection for parents, helping them understand how the ",
          },
          { text: "complete 8-Part ", bold: true },
          {
            text: "Parent–Teen Alignment System",
            bold: true,
            breakBefore: true,
          },
          {
            text: " works and guiding them through the process of getting started.",
          },
        ],
      },
      {
        type: "paragraph",
        segments: [
          {
            text: "They are not required to coach or provide advice — their role is to ",
          },
          { text: "inform, guide, and support parents", bold: true },
          { text: " as they explore the program." },
        ],
      },
      {
        type: "paragraph",
        segments: [{ text: "They will:" }],
      },
      {
        type: "bullets",
        items: [
          [{ text: "Introduce parents to Teen Next Step" }],
          [
            {
              text: "Explain how the FREE Parent Insight Profile and the complete 8-Part Parent-Teen Alignment System work",
            },
          ],
          [{ text: "Help parents get started with the program" }],
          [
            {
              text: "Answer basic questions and provide guidance throughout the process",
            },
          ],
        ],
      },
      {
        type: "paragraph",
        segments: [
          {
            text: "Ambassadors are trained to communicate clearly and professionally, ensuring that parents feel confident and informed as they begin the process.",
          },
        ],
      },
    ],
  },
  {
    title: "TEEN NEXT STEP ARCHITECTS",
    blocks: [
      {
        type: "paragraph",
        segments: [
          { text: "Parent–Teen Alignment Architects", bold: true },
          {
            text: " work directly with families to help implement the insights and direction identified through",
          },
          { text: " the ", breakBefore: true },
          {
            text: "complete 8-Part Parent–Teen Alignment System.",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "This is a " },
          { text: "specialized role", bold: true },
          {
            text: " focused on helping parents and teens move from clarity to action.",
          },
        ],
      },
      {
        type: "paragraph",
        segments: [{ text: "They will:" }],
      },
      {
        type: "bullets",
        items: [
          [
            {
              text: "Review Parent–Teen Alignment results and direction roadmap",
            },
          ],
          [{ text: "Help families apply insights in real-world situations" }],
          [
            {
              text: "Guide structured conversations between parent and teen",
            },
          ],
          [
            {
              text: "Support decision-making around education, career direction, and next steps",
            },
          ],
          [{ text: "Help maintain alignment as plans evolve" }],
        ],
      },
      {
        type: "paragraph",
        segments: [
          {
            text: "Ambassadors are trained to communicate clearly and professionally, ensuring that parents feel confident and informed as they begin the process.",
          },
        ],
      },
    ],
  },
  {
    title: "OUR APPROACH",
    blocks: [
      {
        type: "paragraph",
        segments: [
          {
            text: "Teen Next Step is not traditional coaching or consulting.",
          },
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "It is a " },
          { text: "structured alignment system", bold: true },
          { text: " designed to help families:" },
        ],
      },
      {
        type: "bullets",
        items: [
          [{ text: "See what is really going on" }],
          [{ text: "Understand where gaps exist" }],
          [{ text: "Move forward with clarity and confidence" }],
        ],
      },
    ],
  },
  {
    title: "OUR COMMITMENT",
    blocks: [
      {
        type: "paragraph",
        segments: [
          {
            text: "We are committed to helping parents avoid costly missteps by providing a clear and structured starting point before major life decisions are made.",
          },
        ],
      },
      {
        type: "paragraph",
        segments: [
          {
            text: "Before you invest years and thousands of dollars, our goal is simple – help you and your teen get aligned first.",
            bold: true,
          },
        ],
      },
    ],
  },
];

export const OUR_TEAM_CTAS = {
  primary: SUPER_SECTION_CONTENT.primaryCta,
  secondary: {
    label: WHY_INVESTING_CONTENT.ctas.primary.label,
    href: WHY_INVESTING_CONTENT.ctas.primary.href,
    caption:
      "Includes Full Alignment And Live, Guided Support For Your Teen's Next Steps",
  },
  tertiary: SMALL_INVESTMENT_SECTION_CONTENT.tertiaryCta,
} as const;
