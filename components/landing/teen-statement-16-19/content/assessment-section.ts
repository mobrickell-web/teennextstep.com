export const TEEN_STATEMENT_ASSESSMENT_CONTENT = {
  header: {
    notes: [
      [
        {
          text: "Please be as honest as possible when scoring each question. Your clarity ensures your results reflect your true reality — not how you think it should look, but how it actually is right now.",
          bold: false,
        },
      ],
      [
        { text: "Rate each question from ", bold: false },
        { text: "1 to 10", bold: true },
        { text: " based on how true it feels for you right now — with 1 meaning ", bold: false },
        { text: "“not at all true”", bold: true },
        { text: " and 10 meaning ", bold: false },
        { text: "“completely true.”", bold: true },
      ],
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
      statements: ["My teen follows through on commitments independently", "My teen takes ownership of responsibilities without prompting"],
    },
    {
      id: "motivation",
      title: "2. Motivation",
      statements: ["My teen consistently applies effort toward school, work, or goals", "My teen pushes through challenges rather than avoiding them"],
    },
    {
      id: "confidence",
      title: "3. Confidence",
      statements: ["My teen shows belief in their ability to succeed", "My teen is willing to step outside their comfort zone"],
    },
    {
      id: "emotional-stability-support",
      title: "4. Emotional Stability & Support",
      statements: ["My teen manages stress and pressure effectively", "My teen feels supported when facing challenges"],
    },
    {
      id: "discipline-habits",
      title: "5. Discipline & Habits",
      statements: ["My teen maintains productive routines and habits", "My teen manages time and priorities effectively"],
    },
    {
      id: "direction",
      title: "6. Direction",
      statements: ["My teen has a clear sense of next steps after high school", "My teen is actively thinking about their future path"],
    },
    {
      id: "career-awareness",
      title: "7. Career Awareness",
      statements: ["My teen understands different career paths and options", "My teen is exploring opportunities related to future work"],
    },
    {
      id: "education-skills-alignment",
      title: "8. Education & Skills Alignment",
      statements: ["My teen is pursuing education or skills aligned with their interests", "My teen is developing skills that support future goals"],
    },
    {
      id: "decision-making-ability",
      title: "9. Decision-Making Ability",
      statements: ["My teen makes thoughtful and informed decisions", "My teen considers long-term consequences of choices"],
    },
    {
      id: "parent-teen-communication",
      title: "10. Parent-Teen Communication",
      statements: ["My teen communicates openly about important decisions", "My teen is receptive to guidance and discussion"],
    },
  ],
  resultsForm: {
    name: "Bruce Foster",
    email: "brucefoster01@gmail.com",
    submitLabel: "Submit",
  },
} as const;
