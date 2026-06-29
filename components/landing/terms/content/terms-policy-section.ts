export const TERMS_PRIVACY_HERO_IMAGE =
  "/images/landing-page/terms-privacy.png";

export type TermsTextSegment = {
  text: string;
  bold?: boolean;
};

export type TermsContentBlock =
  | { type: "paragraph"; segments: TermsTextSegment[] }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "contactLine"; prefix: string; linkLabel: string; linkHref: string };

export type TermsPolicySectionContent = {
  number: number;
  title: string;
  blocks: TermsContentBlock[];
};

export const TERMS_PRIVACY_HERO = {
  heading: "TERMS OF USE & PRIVACY POLICY",
} as const;

export const TERMS_PRIVACY_SECTIONS: TermsPolicySectionContent[] = [
  {
    number: 1,
    title: "OVERVIEW",
    blocks: [
      {
        type: "paragraph",
        segments: [
          {
            text: "Teen Next Step provides informational tools and alignment profiles designed to help parents and teens gain insight into areas such as communication, direction, and readiness for future decisions.",
          },
        ],
      },
      {
        type: "paragraph",
        segments: [
          {
            text: "By accessing or using this website and its services, you agree to the terms outlined below.",
          },
        ],
      },
    ],
  },
  {
    number: 2,
    title: "NO PROFESSIONAL ADVICE",
    blocks: [
      {
        type: "paragraph",
        segments: [
          {
            text: "Teen Next Step does not provide medical, psychological, legal, or financial advice.",
          },
        ],
      },
      {
        type: "paragraph",
        segments: [
          { text: "All information, profiles, scores, and guidance are provided for " },
          {
            text: "informational and educational purposes only",
            bold: true,
          },
          { text: "." },
        ],
      },
      {
        type: "paragraph",
        segments: [
          {
            text: "Any decisions made based on this information are the sole responsibility of the user.",
          },
        ],
      },
    ],
  },
  {
    number: 3,
    title: "USER RESPONSIBILITY",
    blocks: [
      {
        type: "paragraph",
        segments: [{ text: "By using this service, you agree:" }],
      },
      {
        type: "bullets",
        items: [
          "To provide accurate information",
          "To use the platform for personal, non-commercial purposes",
          "Not to misuse, copy, or distribute the content without permission",
        ],
      },
      {
        type: "paragraph",
        segments: [
          {
            text: "Parents are responsible for overseeing their teen's participation.",
          },
        ],
      },
    ],
  },
  {
    number: 4,
    title: "PAYMENTS & REFUNDS",
    blocks: [
      {
        type: "paragraph",
        segments: [{ text: "All purchases are processed securely." }],
      },
      {
        type: "subheading",
        text: "30-Day Refund Policy",
      },
      {
        type: "paragraph",
        segments: [
          {
            text: "You may request a full refund within 30 days of purchase if:",
          },
        ],
      },
      {
        type: "bullets",
        items: [
          "The teen profile has not been completed, and",
          "Final combined results, roadmap, or guidance have not been delivered",
        ],
      },
      {
        type: "paragraph",
        segments: [
          {
            text: "Once both profiles are completed and results are made available, the service is considered delivered and is non-refundable.",
          },
        ],
      },
      {
        type: "contactLine",
        prefix: "To request a refund, contact:",
        linkLabel: "Contact Us",
        linkHref: "/contact",
      },
    ],
  },
  {
    number: 5,
    title: "INTELLECTUAL PROPERTY",
    blocks: [
      {
        type: "paragraph",
        segments: [
          {
            text: "All content, including profiles, systems, text, design, and materials, are the property of Teen Next Step and may not be copied, reproduced, or distributed without written permission.",
          },
        ],
      },
    ],
  },
  {
    number: 6,
    title: "LIMITATION OF LIABILITY",
    blocks: [
      {
        type: "paragraph",
        segments: [
          {
            text: "Teen Next Step is not liable for any decisions, outcomes, or actions taken based on the use of this platform.",
          },
        ],
      },
      {
        type: "paragraph",
        segments: [{ text: "We do not guarantee specific results." }],
      },
      {
        type: "paragraph",
        segments: [{ text: "Use of this service is at your own risk." }],
      },
    ],
  },
  {
    number: 7,
    title: "PRIVACY POLICY",
    blocks: [
      {
        type: "subheading",
        text: "Information We Collect",
      },
      {
        type: "paragraph",
        segments: [{ text: "We may collect:" }],
      },
      {
        type: "bullets",
        items: [
          "Name and email address",
          "Profile responses and scores",
          "Payment information (processed securely through third-party providers)",
        ],
      },
      {
        type: "subheading",
        text: "How We Use Information",
      },
      {
        type: "paragraph",
        segments: [{ text: "We use your information to:" }],
      },
      {
        type: "bullets",
        items: [
          "Provide profile results and insights",
          "Improve our services",
          "Communicate with you regarding your account",
        ],
      },
      {
        type: "paragraph",
        segments: [{ text: "We do not sell your personal information." }],
      },
      {
        type: "subheading",
        text: "Data Protection",
      },
      {
        type: "paragraph",
        segments: [
          {
            text: "We take reasonable measures to protect your information. However, no system is completely secure, and we cannot guarantee absolute security.",
          },
        ],
      },
      {
        type: "subheading",
        text: "Children's Information",
      },
      {
        type: "paragraph",
        segments: [
          {
            text: "Teen Next Step is designed for use by parents and their teens. Parents are responsible for consenting to and overseeing their teen's participation.",
          },
        ],
      },
    ],
  },
  {
    number: 8,
    title: "THIRD-PARTY SERVICES",
    blocks: [
      {
        type: "paragraph",
        segments: [
          {
            text: "We may use third-party tools (such as payment processors or email services). These providers have their own policies governing data use.",
          },
        ],
      },
    ],
  },
  {
    number: 9,
    title: "CHANGES TO TERMS",
    blocks: [
      {
        type: "paragraph",
        segments: [
          {
            text: "We reserve the right to update these Terms & Privacy Policy at any time. Continued use of the site constitutes acceptance of any updates.",
          },
        ],
      },
    ],
  },
  {
    number: 10,
    title: "CONTACT",
    blocks: [
      {
        type: "contactLine",
        prefix:
          "For questions regarding these Terms or Privacy Policy, please",
        linkLabel: "Contact Us",
        linkHref: "/contact",
      },
    ],
  },
];
