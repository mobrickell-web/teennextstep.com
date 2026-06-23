import { SUPER_SECTION_CONTENT } from "./super-section";

export const FOUR_STEP_PROCESS_SECTION_CONTENT = {
  sectionNumber: "04",
  heading: "Our Simple Four Step Process",
  steps: [
    {
      image: "/images/landing-page/Rectangle 28.png",
      imageAlt: "Parent completing their profile on a tablet",
      title: "1. Parent Profile",
      summary: "The parent completes the profile first",
      description:
        "The process begins with the parent’s perspective, helping identify what the parent currently sees, believes, and hopes for their teen.",
    },
    {
      image: "/images/landing-page/Rectangle 29.png",
      imageAlt: "Teen completing their profile at a desk",
      title: "2. Teen Profile",
      summary: "The teen completes their own profile",
      description:
        "The teen then shares their own perspective on where they believe they are, creating a clearer, more balanced picture that can be used in Step 3 to improve parent–teen alignment.",
    },
    {
      image: "/images/landing-page/Rectangle 30.png",
      imageAlt: "Parent and teen reviewing results together on a phone",
      title: "See The Alignment Gap",
      summary: "Alignment strengths and gaps are revealed",
      description:
        "This helps show where parent and teen are already on the same page — and where better communication, understanding, or direction may be needed.",
      
    },
    {
      image: "/images/landing-page/Rectangle 31.png",
      imageAlt: "Parent and teen planning next steps on a laptop",
      title: "Get Next Step Guidance",
      titleClassName: "text-[22px]",
      summary: "Better next-step direction becomes clearer",
      description:
        "With stronger alignment in place, families are better positioned to move forward with smarter, more confident decisions guided by the Teen Next Step roadmap.",
    },
  ],
  primaryCta: SUPER_SECTION_CONTENT.primaryCta,
  secondaryCta: SUPER_SECTION_CONTENT.secondaryCta,
} as const;
