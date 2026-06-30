export const CAREERS_HERO_IMAGE = "/images/landing-page/terms-privacy.png";

export const CAREERS_HERO = {
  heading: "CAREERS",
} as const;

export type CareerTextSegment = {
  text: string;
  bold?: boolean;
  href?: string;
  breakBefore?: boolean;
};

export type CareerContentBlock =
  | { type: "paragraph"; segments: CareerTextSegment[] }
  | { type: "bullets"; items: CareerTextSegment[][] };

export type CareerOpportunitySection = {
  title: string;
  blocks: CareerContentBlock[];
};

export type CareerOpportunityItem = {
  id: string;
  title: string;
  intro?: CareerContentBlock[];
  sections?: CareerOpportunitySection[];
  paragraphs?: string[];
  applyPrefix?: string;
  applyLinkLabel?: string;
  applyLinkHref?: string;
};

export const CAREER_OPPORTUNITIES: CareerOpportunityItem[] = [
  {
    id: "ambassador",
    title: "TEEN NEXT STEP AMBASSADOR OPPORTUNITY",
    intro: [
      {
        type: "paragraph",
        segments: [
          {
            text: "Teen Next Step is expanding and seeking motivated individuals to join our team as ",
          },
          { text: "Teen Next Step Ambassadors", bold: true },
          { text: "." },
        ],
      },
      {
        type: "paragraph",
        segments: [
          {
            text: "This is an opportunity to represent a meaningful program that helps families gain clarity and avoid costly missteps when making education and career decisions.",
          },
        ],
      },
    ],
    sections: [
      {
        title: "ROLE OVERVIEW",
        blocks: [
          {
            type: "paragraph",
            segments: [
              { text: "As a Teen Next Step Ambassador, you will serve as a " },
              { text: "point of connection for parents", bold: true },
              {
                text: ", helping them understand how the ",
              },
              {
                text: "complete 8-Part Parent-Teen Alignment System",
                bold: true,
              },
              {
                text: " works and guiding them through the process of getting started.",
              },
            ],
          },
          {
            type: "paragraph",
            segments: [
              { text: "You are not required to coach or provide advice — your role is to " },
              { text: "inform, guide, and support parents", bold: true },
              { text: " as they explore the program." },
            ],
          },
        ],
      },
      {
        title: "WHAT YOU'LL DO",
        blocks: [
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
        ],
      },
      {
        title: "COMPENSATION",
        blocks: [
          {
            type: "bullets",
            items: [
              [{ text: "Earn income based on successful enrollments" }],
              [
                {
                  text: "$70,000 to over $100,000+ annual earning potential",
                  bold: true,
                },
              ],
              [{ text: "No cap on earnings" }],
              [
                {
                  text: "Designed as a premium opportunity for motivated individuals",
                },
              ],
            ],
          },
          {
            type: "paragraph",
            segments: [{ text: "Straight Commission Opportunity", bold: true }],
          },
        ],
      },
      {
        title: "WHAT YOU'LL REPRESENT",
        blocks: [
          {
            type: "paragraph",
            segments: [
              { text: "Teen Next Step is designed to help families:" },
            ],
          },
          {
            type: "bullets",
            items: [
              [
                {
                  text: "Understand where they are aligned — and where they are not",
                },
              ],
              [
                {
                  text: "Identify potential risks before major decisions are made",
                },
              ],
              [
                {
                  text: "Move forward with greater clarity and confidence",
                },
              ],
            ],
          },
          {
            type: "paragraph",
            segments: [
              {
                text: "Before families invest years and thousands of dollars, your role is to help them take the right next step.",
                bold: true,
              },
            ],
          },
        ],
      },
      {
        title: "IDEAL CANDIDATES",
        blocks: [
          {
            type: "paragraph",
            segments: [{ text: "This role may be a strong fit for:" }],
          },
          {
            type: "bullets",
            items: [
              [{ text: "Parents" }],
              [{ text: "Educators" }],
              [{ text: "Coaches" }],
              [
                {
                  text: "Individuals with sales or communication experience",
                },
              ],
            ],
          },
          {
            type: "paragraph",
            segments: [
              {
                text: "No prior experience with Teen Next Step is required; however, candidates should have strong communication skills and the ability to guide parents through a structured process. Training on the Teen Next Step system is provided.",
              },
            ],
          },
        ],
      },
      {
        title: "HOW TO APPLY",
        blocks: [
          {
            type: "paragraph",
            segments: [
              {
                text: "If you are interested in becoming a Teen Next Step Ambassador,",
              },
              {
                text: "please email your resume and cover letter to ",
                breakBefore: true,
              },
              {
                text: "careers@teennextstep.com",
                href: "mailto:careers@teennextstep.com",
              },
              { text: "." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "alignment-architect",
    title: "PARENT–TEEN ALIGNMENT ARCHITECTS",
    sections: [
      {
        title: "ROLE OVERVIEW",
        blocks: [
          {
            type: "paragraph",
            segments: [
              {
                text: "Parent–Teen Alignment Architects work directly with families to help implement the insights and direction identified through the ",
              },
              {
                text: "complete 8-Part Parent–Teen Alignment System.",
                bold: true,
              },
            ],
          },
          {
            type: "paragraph",
            segments: [
              { text: "This is a specialized role focused on helping parents and teens move from " },
              { text: "clarity to action.", bold: true },
            ],
          },
        ],
      },
      {
        title: "WHAT YOU'LL DO",
        blocks: [
          {
            type: "bullets",
            items: [
              [
                {
                  text: "Review Parent–Teen Alignment results and direction roadmap",
                },
              ],
              [
                {
                  text: "Help families apply insights in real-world situations",
                },
              ],
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
        ],
      },
      {
        title: "PROTOCOL REQUIREMENT",
        blocks: [
          {
            type: "paragraph",
            segments: [
              {
                text: "Architects must be able to follow the structured protocols and guidance provided by Teen Next Step to ensure a consistent and high-quality experience for all families.",
              },
            ],
          },
        ],
      },
      {
        title: "CLIENT RELATIONSHIP",
        blocks: [
          {
            type: "paragraph",
            segments: [
              {
                text: "All families referred to Parent–Teen Alignment Architects remain clients of Teen Next Step.",
              },
            ],
          },
          {
            type: "paragraph",
            segments: [
              {
                text: "Architects are engaged to provide services within the scope of the Teen Next Step system and may not independently solicit, contract with, or redirect referred families outside of the Teen Next Step framework without prior authorization.",
              },
            ],
          },
        ],
      },
      {
        title: "ROLE TYPE",
        blocks: [
          {
            type: "bullets",
            items: [
              [{ text: "Independent / contract-based opportunity" }],
              [{ text: "Work with families referred through Teen Next Step" }],
              [{ text: "Flexible engagement based on client needs" }],
            ],
          },
        ],
      },
      {
        title: "COMPENSATION",
        blocks: [
          {
            type: "bullets",
            items: [
              [
                {
                  text: "Competitive, above-average compensation based on experience and engagement",
                },
              ],
              [
                {
                  text: "Paid on a per-client basis for work performed with referred families",
                },
              ],
              [
                { text: "Engagements typically include " },
                {
                  text: "up to 3 total hours per parent–teen client",
                  bold: true,
                },
              ],
              [
                {
                  text: "Any additional time beyond the initial engagement is subject to prior authorization",
                },
              ],
            ],
          },
        ],
      },
      {
        title: "OPPORTUNITY",
        blocks: [
          {
            type: "bullets",
            items: [
              [
                {
                  text: "As Teen Next Step expands, architects may receive a consistent flow of referred families",
                },
              ],
              [
                { text: "Current projections are approximately " },
                {
                  text: "3 to 10 parent–teen clients per month",
                  bold: true,
                },
                { text: ", with growth expected over time" },
              ],
            ],
          },
        ],
      },
      {
        title: "IMPORTANT NOTE",
        blocks: [
          {
            type: "paragraph",
            segments: [
              {
                text: "Parent–Teen Alignment Architects are independent professionals and not employees of Teen Next Step.",
              },
            ],
          },
        ],
      },
      {
        title: "HOW TO APPLY",
        blocks: [
          {
            type: "paragraph",
            segments: [
              {
                text: "If you are interested in becoming a Teen Next Step Ambassador or being considered as a Parent–Teen Alignment Architect,",
              },
              {
                text: "please email your resume and cover letter to ",
                breakBefore: true,
              },
              {
                text: "careers@teennextstep.com",
                href: "mailto:careers@teennextstep.com",
              },
              { text: "." },
            ],
          },
        ],
      },
      {
        title: "FINAL NOTE",
        blocks: [
          {
            type: "paragraph",
            segments: [
              {
                text: "These opportunities are designed for individuals who want to make a meaningful impact while participating in a structured, high-value system focused on helping families make better decisions at a critical stage in life.",
              },
            ],
          },
        ],
      },
    ],
  },
];
