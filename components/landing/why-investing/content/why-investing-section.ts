const IMG = "/images/landing-page/why-investing";

export const WHY_INVESTING_CONTENT = {
  heroImage: `${IMG}/hero-banner.svg`,
  heroImageAlt: "",
  hero: {
    heading: "Why Investing in the Full Parent–Teen Alignment System Is a Smart Move",
    subheading:
      "Before you invest years and tens of thousands of dollars, make sure you and your teen are truly aligned.",
  },
  rows: [
    {
      heading: "Most parents believe they are on the right track.",
      intro: "Many later realize:",
      items: [
        "Their teen wasn't as clear as they thought",
        "Important conversations were incomplete",
        "Decisions were made without full alignment",
      ],
      image: `${IMG}/right-track.svg`,
      imageAlt: "Parents and teens in conversation",
      imageSide: "right",
    },
    {
      heading: "Your Parent Insight Results were a strong first step.",
      intro: "But they reflect your perspective alone.",
      introNote: "They do not show:",
      items: [
        "Your teen's actual perspective",
        "Where you may not be aligned",
        "What to do next with confidence",
      ],
      image: `${IMG}/first-step.svg`,
      imageAlt: "A parent and teen with differing perspectives",
      imageSide: "left",
    },
    {
      heading: "Moving forward without full alignment can lead to:",
      items: [
        "Wrong education or career choices",
        "Wasted time and money",
        "Low motivation or follow-through",
        "Stress and second-guessing later",
      ],
      image: `${IMG}/without-alignment.svg`,
      imageAlt: "A graduate and a stressed parent",
      imageSide: "right",
    },
  ],
  banner:
    "The Full Parent–Teen Alignment System gives you clarity before decisions are made.",
  bannerNote:
    "A structured process that brings both perspectives together and shows you exactly where things stand.",
  whatYouGet: {
    heading: "What You Get",
    items: [
      "Parent and Teen Alignment Assessments",
      "Side-by-side comparison of both perspectives",
      "Clear identification of alignment gaps",
      "A personalized roadmap for what to do next",
      "Guidance to move forward with confidence",
    ],
    image: `${IMG}/what-you-get.svg`,
    imageAlt: "A couple looking toward a path forward",
  },
  whyMoveForward: {
    heading: "Why Parents Move Forward",
    intro: "They are not looking for more information.",
    wantLabel: "They want:",
    items: ["Clarity", "Confidence", "Direction"],
    image: `${IMG}/move-forward.svg`,
    imageAlt: "Parents reviewing results and a road ahead",
  },
  investment: {
    heading: "Investment",
    lines: [
      "The cost of getting this wrong can be years and tens of thousands of dollars.",
      "The investment to get it right: $1487",
    ],
    bodyLines: [
      "This is not about being a perfect parent.",
      "It is about making sure you are aligned before moving forward.",
    ],
    closingBold: "You can move forward with assumptions.",
    closing: "Or move forward with clarity.",
  },
  ctas: {
    primary: {
      label: "Unlock Full Parent–Teen Alignment System – $1487",
      href: "/secure-your-teens-next-step",
    },
    contact: {
      label: "Have Additional Questions? Contact Us Here",
      href: "/contact",
    },
    disclaimer:
      "Includes Full Alignment And Guided Support For Your Teen Next Step",
  },
} as const;
