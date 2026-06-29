export const TEEN_STATEMENT_DASHBOARD_IMAGE =
  "/images/landing-page/free-parent-insight/dashboard.png";

export const TEEN_STATEMENT_ASSESSMENT_CONTENT = {
  header: {
    notes: [
      "Please be as honest as possible when scoring each question. Your clarity ensures your results reflect your true reality — not how you think it should look, but how it actually is right now.",
      'Rate each question from 1 to 10 based on how true it feels for you right now — with 1 meaning "not at all true" and 10 meaning "completely true."',
    ],
  },
  scaleLabels: {
    low: "Low",
    high: "High",
  },
  categories: [
    {
      id: "responsibility",
      title: "1. Responsibility",
      statements: ["I follow through on responsibilities when asked", "I take ownership of tasks without needing reminders"],
    },
    {
      id: "motivation",
      title: "2. Motivation",
      statements: ["I put effort into school or my responsibilities", "I try even when something feels difficult"],
    },
    {
      id: "confidence",
      title: "3. Confidence",
      statements: ["I believe I can improve and succeed", "I am willing to try new things"],
    },
    {
      id: "emotional-stability-support",
      title: "4. Emotional Stability & Support",
      statements: ["I handle stress or frustration fairly well", "I feel safe expressing my feelings at home"],
    },
    {
      id: "discipline-habits",
      title: "5. Discipline & Habits",
      statements: ["I keep a consistent routine for school and responsibilities", "I manage my time fairly well"],
    },
    {
      id: "direction",
      title: "6. Direction",
      statements: ["I have started thinking about what I might want to do in the future", "I am curious about different paths I could take"],
    },
    {
      id: "career-awareness",
      title: "7. Career Awareness",
      statements: ["I am aware of different types of jobs or careers", "I am curious about how people make money"],
    },
    {
      id: "education-skills-alignment",
      title: "8. Education & Skills Alignment",
      statements: ["I am learning useful skills for my future", "I try to improve in areas that matter to me"],
    },
    {
      id: "decision-making-ability",
      title: "9. Decision-Making Ability",
      statements: ["I think about consequences before making decisions", "I try to make good choices"],
    },
    {
      id: "parent-teen-communication",
      title: "10. Parent-Teen Communication",
      statements: ["I feel comfortable talking to my parent about important things", "I listen when my parent gives guidance"],
    },
  ],
  resultsForm: {
    heading: "Get Your Teen Statement Results",
    description:
      "Enter your first name and email to unlock your personalized Teen Statement Dashboard.",
    fields: [
      {
        id: "firstName",
        label: "First Name",
        placeholder: "First Name",
        type: "text",
        required: true,
      },
      {
        id: "email",
        label: "Email Address",
        placeholder: "Email Address",
        type: "email",
        required: true,
      },
      {
        id: "zipCode",
        label: "Zip Code",
        placeholder: "Zip Code",
        type: "text",
        required: true,
      },
      {
        id: "phone",
        label: "Phone Number",
        placeholder: "(Optional) Phone Number",
        type: "tel",
        required: false,
      },
    ],
    submitLabel: "Get My Teen Statement Results Instantly",
    privacyText: "We respect your privacy. No spam, ever.",
    privacyLinkLabel: "View our privacy policy.",
    privacyHref: "/terms-privacy",
    image: {
      src: TEEN_STATEMENT_DASHBOARD_IMAGE,
      alt: "Teen Statement Dashboard displayed on a laptop",
    },
  },
} as const;
