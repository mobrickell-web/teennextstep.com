export const PARENT_INSIGHT_DASHBOARD_IMAGE =
  "/images/landing-page/free-parent-insight/dashboard.png";

export type ParentInsightAssessmentContent = {
  header: {
    title: string;
    scaleLegend: string;
    finalNoteLabel?: string;
    finalNoteBody?: string;
  };
  scaleLabels: {
    low: string;
    high: string;
  };
  categories: readonly {
    id: string;
    title: string;
    statements: readonly string[];
  }[];
  resultsForm: {
    heading: string;
    description: string;
    fields: readonly {
      id: string;
      label: string;
      placeholder: string;
      type: string;
      required: boolean;
    }[];
    submitLabel: string;
    privacyText: string;
    privacyLinkLabel: string;
    privacyHref: string;
    image: {
      src: string;
      alt: string;
    };
  };
};

export const PARENT_INSIGHT_ASSESSMENT_CONTENT = {
  header: {
    title: "Please Rate Each Statement From 1 To 10",
    scaleLegend: "(1 = Strongly Disagree • 10 = Strongly Agree)",
    finalNoteLabel: "FINAL NOTE:",
    finalNoteBody:
      "The Parent Insight Statement scores measure how you, the parent, believe you are guiding your teen—not your teen's behavior directly nor the alignment between you and your teen.",
  },
  scaleLabels: {
    low: "Low",
    high: "High",
  },
  categories: [
    {
      id: "responsibility",
      title: "1. Responsibility (Guidance)",
      statements: [
        "I clearly communicate expectations around responsibility to my teen.",
        "I consistently hold my teen accountable for their responsibilities.",
      ],
    },
    {
      id: "motivation",
      title: "2. Motivation (Guidance)",
      statements: [
        "I actively encourage my teen to stay motivated and pursue meaningful goals.",
        "I help my teen understand the importance of effort and persistence.",
      ],
    },
    {
      id: "communication",
      title: "3. Communication (Guidance)",
      statements: [
        "I create an environment where my teen feels comfortable communicating with me.",
        "I listen to my teen in a way that helps them feel heard and understood",
      ],
    },
    {
      id: "direction",
      title: "4. Direction (Guidance)",
      statements: [
        "I help my teen think about their future and possible next steps.",
        "I expose my teen to opportunities that can help shape their direction.",
      ],
    },
    {
      id: "confidence",
      title: "5. Confidence (Guidance)",
      statements: [
        "I support my teen in building confidence through encouragement and feedback",
        "I help my teen learn from setbacks without losing confidence.",
      ],
    },
    {
      id: "decision-making",
      title: "6. Decision Making (Guidance)",
      statements: [
        "I guide my teen in thinking through decisions rather than making choices for them.",
        "I help my teen understand consequences before making important decisions.",
      ],
    },
    {
      id: "discipline",
      title: "7. Discipline (Guidance)",
      statements: [
        "I reinforce consistent habits and routines for my teen.",
        "I follow through on boundaries and expectations I set.",
      ],
    },
    {
      id: "respect",
      title: "8. Respect (Guidance)",
      statements: [
        "I model respectful behavior in how I communicate with my teen.",
        "I address disrespectful behavior in a calm and constructive way.",
      ],
    },
    {
      id: "readiness",
      title: "9. Readiness for Next Steps (Guidance)",
      statements: [
        "I am actively preparing my teen for upcoming major educational decisions.",
        "I help my teen build the skills needed for their next steps.",
      ],
    },
    {
      id: "family-understanding",
      title: "10. Family Understanding (Guidance)",
      statements: [
        "I clearly communicate expectations within our household.",
        "I help my teen understand how our family is moving forward.",
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
