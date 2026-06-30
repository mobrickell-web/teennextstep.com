export const REFERRAL_PROGRAM_HERO_IMAGE =
  "/images/landing-page/terms-privacy.png";

export type ReferralTextSegment = {
  text: string;
  bold?: boolean;
};

export type ReferralContentBlock =
  | { type: "paragraph"; segments: ReferralTextSegment[] }
  | { type: "bullets"; items: ReferralTextSegment[][] }
  | { type: "numbered"; items: ReferralTextSegment[][] };

export type ReferralProgramSection = {
  title: string;
  blocks: ReferralContentBlock[];
};

export const REFERRAL_PROGRAM_HERO = {
  heading: "TEEN NEXT STEP REFERRAL PROGRAM",
  overviewHeading: "Overview",
  description:
    "Teen Next Step offers a referral program that allows individuals to earn a commission for referring new clients to the complete 8-Part Parent–Teen Alignment System.",
} as const;

export const REFERRAL_PROGRAM_SECTIONS: ReferralProgramSection[] = [
  {
    title: "Referral Commission",
    blocks: [
      {
        type: "bullets",
        items: [
          [
            { text: "Earn " },
            { text: "$297", bold: true },
            { text: " for each successful referral" },
          ],
          [
            { text: "Commission applies to purchases of the " },
            {
              text: "complete 8-Part Parent-Teen Alignment System ($5800)",
              bold: true,
            },
          ],
          [
            {
              text: "Commission is earned once the referred client completes their purchase",
            },
          ],
        ],
      },
    ],
  },
  {
    title: "How It Works",
    blocks: [
      {
        type: "numbered",
        items: [
          [{ text: "You are provided with a unique referral link" }],
          [{ text: "You share this link with a parent" }],
          [
            { text: "The parent uses your link to enroll in the " },
            {
              text: "complete 8-Part Parent-Teen Alignment System",
              bold: true,
            },
          ],
          [
            {
              text: "Once the purchase is completed, the referral is recorded",
            },
          ],
        ],
      },
    ],
  },
  {
    title: "Payment Terms",
    blocks: [
      {
        type: "bullets",
        items: [
          [
            { text: "Referral commissions are subject to a " },
            { text: "30-day holding period", bold: true },
            { text: " to account for refunds" },
          ],
          [
            { text: "Commissions are paid " },
            { text: "after 30 days", bold: true },
            { text: ", provided no refund has been issued" },
          ],
          [
            {
              text: "If a refund is issued within the 30-day period, the referral commission is void",
            },
          ],
          [
            {
              text: "You must provide accurate and complete payment information (such as your full name, email, and preferred payment method) in order to receive referral commission payments",
            },
          ],
        ],
      },
    ],
  },
  {
    title: "Eligibility",
    blocks: [
      {
        type: "bullets",
        items: [
          [{ text: "Referrals must be new clients (not existing users)" }],
          [{ text: "The referred purchase must be completed in full" }],
          [{ text: "Self-referrals are not permitted" }],
        ],
      },
    ],
  },
  {
    title: "Parent Requirement for Minors",
    blocks: [
      {
        type: "paragraph",
        segments: [{ text: "If a teen under the age of 18 is involved:" }],
      },
      {
        type: "bullets",
        items: [
          [
            {
              text: "A parent or legal guardian must complete the purchase",
            },
          ],
          [
            { text: "Any referral commission will be paid " },
            { text: "only to the parent or legal guardian", bold: true },
            { text: ", not the minor" },
          ],
        ],
      },
    ],
  },
  {
    title: "Program Integrity",
    blocks: [
      {
        type: "paragraph",
        segments: [{ text: "To maintain fairness:" }],
      },
      {
        type: "bullets",
        items: [
          [
            {
              text: "Abuse, fraudulent activity, or manipulation of the referral system will result in disqualification",
            },
          ],
          [
            {
              text: "Teen Next Step reserves the right to withhold or revoke commissions if misuse is suspected",
            },
          ],
        ],
      },
    ],
  },
  {
    title: "Modifications",
    blocks: [
      {
        type: "paragraph",
        segments: [
          {
            text: "Teen Next Step reserves the right to modify or discontinue the referral program at any time.",
          },
        ],
      },
    ],
  },
  {
    title: "Summary",
    blocks: [
      {
        type: "paragraph",
        segments: [
          {
            text: "The referral program is designed to reward individuals who help other families gain clarity and avoid costly missteps.",
          },
        ],
      },
      {
        type: "paragraph",
        segments: [
          {
            text: "Before families invest years and thousands of dollars, you can help them take the right next step — and be rewarded for it.",
            bold: true,
          },
        ],
      },
    ],
  },
];

export const REFERRAL_PROGRAM_FOOTER = {
  heading: "TEEN NEXT STEP REFERRAL PROGRAM",
  intro:
    "Teen Next Step welcomes referrals from individuals who recognize the value of our platform.",
  closing: [
    {
      text: "If you refer an individual or organization to Teen Next Step and they enroll in a qualifying service package, you will receive a ",
    },
    { text: "referral thank-you of $297.", bold: true },
  ],
} as const;

export type ReferralFormField = {
  name: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea";
};

export type ReferralFormSection = {
  heading: string;
  fields: ReferralFormField[];
};

export const REFERRAL_PROGRAM_FORM = {
  sections: [
    {
      heading: "Your Information",
      fields: [
        { name: "referrerFullName", placeholder: "Full Name", type: "text" },
        {
          name: "referrerEmail",
          placeholder: "Email Address",
          type: "email",
        },
        {
          name: "referrerPhone",
          placeholder: "Phone (optional)",
          type: "tel",
        },
      ],
    },
    {
      heading: "Referred Individual Or Organization",
      fields: [
        { name: "referredFullName", placeholder: "Full Name", type: "text" },
        {
          name: "referredEmail",
          placeholder: "Email Address",
          type: "email",
        },
        {
          name: "referredPhone",
          placeholder: "Phone (optional)",
          type: "tel",
        },
        {
          name: "referredCompany",
          placeholder: "Company / Organization (if applicable)",
          type: "text",
        },
      ],
    },
    {
      heading: "Relationship To The Referred Party",
      fields: [
        { name: "relationship", placeholder: "(Optional)", type: "text" },
      ],
    },
    {
      heading: "Additional Notes",
      fields: [
        {
          name: "additionalNotes",
          placeholder: "(Optional)",
          type: "textarea",
        },
      ],
    },
  ] satisfies ReferralFormSection[],
  confirmation: {
    heading: "Referral Confirmation",
    name: "referralConfirmation",
    label: "I confirm this introduction is being made prior to enrollment.",
  },
  submitLabel: "Submit Referral",
  contactButton: {
    label: "More Questions? Contact Us",
    href: "/contact",
  },
} as const;
