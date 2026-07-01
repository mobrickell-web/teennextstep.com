import { PARENT_INSIGHT_DASHBOARD_IMAGE } from "@/components/landing/free-parent-insight/content/assessment-section";

export const PARENT_INSIGHT_1619_ASSESSMENT_CONTENT = {
  header: {
    title: "Please rate each statement from 1 to 10",
    scaleLegend: "(1 = Strongly Disagree • 10 = Strongly Agree)",
  },
  scaleLabels: {
    low: "Low",
    high: "High",
  },
  categories: [
    {
      id: "direction-and-exposure",
      title: "Direction and Exposure",
      statements: [
        "I feel confident that my teen has explored enough options to begin identifying a realistic direction for what comes next.",
        "I feel that my teen has been exposed to opportunities or experiences that help them make informed decisions about their future.",
      ],
    },
    {
      id: "motivation-and-responsibility",
      title: "Motivation and Responsibility",
      statements: [
        "I feel confident that my teen is prepared to make important education or career decisions in the near future.",
        "I rarely feel concerned about my teen’s motivation or level of follow-through as they approach important decisions.",
      ],
    },
    {
      id: "readiness-for-next-steps",
      title: "Readiness For Next Steps",
      statements: [
        "I am actively preparing my teen for upcoming education or career decisions.",
        "I feel that my teen understands what will be required to succeed in the path they are considering.",
      ],
    },
    {
      id: "communication-and-alignment",
      title: "Communication and Alignment",
      statements: [
        "I feel that communication between my teen and me is open, honest, and productive when discussing their future.",
        "I feel that my teen and I are aligned on expectations for what should come next after high school.",
      ],
    },
    {
      id: "decision-awareness-and-understanding",
      title: "Decision Awareness and Understanding",
      statements: [
        "We have had clear and productive conversations about my teen’s future direction and next steps.",
        "I feel confident that I am effectively guiding my teen as they approach major decisions about their future.",
      ],
    },
  ],
  resultsForm: {
    heading: "Get Your FREE Parent Insight Results",
    description:
      "Enter your first name and email to unlock your personalized Parent Insight Dashboard.",
    fields: [
      { id: "firstName", label: "First Name", placeholder: "First Name", type: "text", required: true },
      { id: "email", label: "Email Address", placeholder: "Email Address", type: "email", required: true },
      { id: "zipCode", label: "Zip Code", placeholder: "Zip Code", type: "text", required: true },
      {
        id: "phone",
        label: "Phone Number",
        placeholder: "(Optional) Phone Number",
        type: "tel",
        required: false,
      },
    ],
    submitLabel: "Get My FREE Parent Insight Results Instantly",
    privacyText: "We respect your privacy. No spam, ever.",
    privacyLinkLabel: "View our privacy policy.",
    privacyHref: "/terms-privacy",
    image: {
      src: PARENT_INSIGHT_DASHBOARD_IMAGE,
      alt: "Parent Insight Dashboard displayed on a laptop",
    },
  },
} as const;
