import { SUPER_SECTION_CONTENT } from "./super-section";

export const FOUR_STEP_PROCESS_SECTION_CONTENT = {
  sectionNumber: "04",
  heading: "Our Simple Four Step Process",
  steps: [
    {
      image: "/images/landing-page/Rectangle 28.png",
      imageAlt: "Parent completing their profile on a tablet",
      title: "Parent Completes Alignment Profile",
      summary: "The parent completes the profile first",
      description:
        "The process begins with the Parent Alignment Profile designed to measure important Parent Guidance and Alignment Metrics.",
    },
    {
      image: "/images/landing-page/Rectangle 29.png",
      imageAlt: "Teen completing their profile at a desk",
      title: "Teen Completes Alignment Profile",
      summary: "The teen completes their own profile",
      description:
        "Your teen completes their own profile separately and privately. This allows both perspectives to be measured independently.",
    },
    {
      image: "/images/landing-page/Rectangle 30.png",
      imageAlt: "Parent and teen reviewing results together on a phone",
      title: "Alignment Results Are Generated",
      summary: "Alignment strengths and gaps are revealed",
      description:
        "The system compares both perspectives to identify:",
      bullets: [
        "Areas of alignment",
        "Areas of misalignment",
        "Gaps in expectations, communication, readiness, or direction",
      ],
    },
    {
      image: "/images/landing-page/Rectangle 31.png",
      imageAlt: "Parent and teen planning next steps on a laptop",
      title: "Next Step Guidance - Follow the Alignment Roadmap",
      titleClassName: "text-[22px]",
      summary: "Better next-step direction becomes clearer",
      description:
        "You and your teen then work through the remaining guided steps of the system with support from your Teen Next Step Ambassador.The goal is to improve communication, strengthen understanding, and create greater clarity before important decisions are made.",
    },
  ],
  primaryCta: SUPER_SECTION_CONTENT.primaryCta,
  secondaryCta: SUPER_SECTION_CONTENT.secondaryCta,
} as const;
