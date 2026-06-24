import { SMALL_INVESTMENT_SECTION_CONTENT } from "./small-investment-section";

export const FAQ_SECTION_CONTENT = {
  sectionNumber: "08",
  heading: "Clear Insight for Parents Navigating Their Teen's Future",
  subheading:
    "Understand what's really going on — and how to move forward with clarity and confidence",
  ctaLabel: "View More",
  faq: {
    sectionNumber: "09",
    heading: "Frequently Asked Questions",
    // Placeholder answers — edit these with the real content.
    items: [
      {
        question: "What Will We Receive?",
        answer:
          "You'll receive a clear insight report on how you currently view your role in guiding your teen, plus a recommended next step.",
      },
      {
        question: "What If My Teen Isn't Interested?",
        answer:
          "The process begins with the parent. The teen profile comes later and is designed to lower pressure and open conversation.",
      },
      {
        question: "Is This A Career Test?",
        answer:
          "No. It's an alignment system that measures direction, readiness, and decision awareness — not a single career label.",
      },
      {
        question: "Do We Need To Agree?",
        answer:
          "No. The goal is to reveal where you align and where gaps exist, so you can move forward with better understanding.",
      },
      {
        question: "Who Completes The Profile?",
        answer:
          "The parent completes their profile first, then the teen completes their own as part of the full alignment system.",
      },
      {
        question: "What Happens After Results?",
        answer:
          "You'll see your alignment strengths and gaps, along with a clear next-step roadmap and access to Ambassador Support.",
      },
      {
        question: "How Long Does It Take?",
        answer:
          "The free Parent Insight Assessment takes about 3–5 minutes, with instant results.",
      },
      {
        question: "What Ages Is This For?",
        answer:
          "Teen Next Step is designed for families with teens navigating education, career, and next-step decisions.",
      },
      {
        question: "What If My Teen Has A Plan?",
        answer:
          "Great — this helps confirm alignment and surfaces anything worth discussing before major commitments are made.",
      },
      {
        question: "Is The $5800 Refundable?",
        answer:
          "Please review the current refund terms at checkout. Reach out to our team if you have questions before purchasing.",
      },
    ],
    primaryCta: SMALL_INVESTMENT_SECTION_CONTENT.primaryCta,
    secondaryCta: SMALL_INVESTMENT_SECTION_CONTENT.secondaryCta,
    tertiaryCta: SMALL_INVESTMENT_SECTION_CONTENT.tertiaryCta,
  },
  cards: [
    {
      image: "/images/landing-page/Rectangle 185.png",
      imageAlt: "A teen sitting at a desk with her head in her hands",
      title: "The Motivation Crisis: Why Teens Feel Stuck—and What Helps",
      description:
        "Many teens aren't unmotivated—they're misaligned. See what's really causing the motivation gap and how the right structure can help your teen move forward.",
      /** Placeholder until insight article URLs are finalized */
      href: "#",
    },
    {
      image: "/images/landing-page/Rectangle 182.png",
      imageAlt: "A family looking at a scene of their teen's full picture",
      title: "Parent Aha's: What Changes When Parents See the Full Picture",
      description:
        "The biggest shift occurs when parents finally see what's really going on. Discover what changes everything—and why most don't see it early enough.",
      /** Placeholder until insight article URLs are finalized */
      href: "#",
    },
    {
      image: "/images/landing-page/Rectangle 179.png",
      imageAlt: "Three teens looking out toward a city skyline",
      title: "Teen Aha's: When Teens Realize What Actually Fits Them",
      description:
        "Teens don't need more pressure—they need something to click. Learn what creates that shift and how teens begin to take real ownership of their future.",
      /** Placeholder until insight article URLs are finalized */
      href: "#",
    },
    {
      image: "/images/landing-page/Rectangle 176.png",
      imageAlt: "An illustration of decision paths and alignment options",
      title: "Traditional Paths vs. Teen Next Step: Alignment Before Decisions",
      description:
        "Most teens are pushed into decisions before clarity exists. See a smarter, more structured way to help your teen choose a path that actually fits.",
      /** Placeholder until insight article URLs are finalized */
      href: "#",
    },
    {
      image: "/images/landing-page/Rectangle 72.png",
      imageAlt: "A human hand and a robot hand joining puzzle pieces at sunset",
      title: "AI Can Measure, But Only Humans Can Create Alignment",
      description:
        "AI can process information—but it cannot replace real human understanding. Discover why true parent-teen alignment still requires empathy, communication, and guided human connection.",
      /** Placeholder until insight article URLs are finalized */
      href: "#",
    },
  ],
} as const;
