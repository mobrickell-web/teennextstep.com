export const SIDEBAR_PROFILE = {
  name: ["Teen Next Step", "Ambassador"],
  helpLabel: "Need Help? Contact Me",
  helpHref: "#contact",
  heading: "Parent Insight Dashboard",
};

export type SidebarItem = {
  label: string;
  /** Renders a chevron and marks the row as expandable. */
  expandable?: boolean;
};

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { label: "Teen Alignment Dashboard" },
  { label: "Parent-Teen Alignment Dashboard" },
  { label: "Teen Alignment Insight Dashboard" },
  { label: "Three Teen Next Step™ Assessments" },
  { label: "Age Group", expandable: true },
  { label: "Assessments", expandable: true },
  { label: "Parent-Teen Progress" },
  { label: "My Teens" },
  { label: "Metrics" },
  { label: "Insights" },
  { label: "Roadmap: What to Do First" },
  { label: "Action Plan" },
  { label: "Resources" },
  { label: "Messages" },
  { label: "Profile" },
  { label: "Settings" },
];

export type ScoreRange = {
  /** Pill label, e.g. "90 - 100". */
  label: string;
  /** Pill background color. */
  color: string;
  /** Modal title, e.g. "90–100 Exceptional Guidance". */
  title: string;
  /** Bold sub-heading inside the grey panel. */
  heading: string;
  /** Body paragraphs. */
  paragraphs: string[];
};

export const SCORE_RANGES: ScoreRange[] = [
  {
    label: "90 - 100",
    color: "#3C7C4E",
    title: "90–100 Exceptional Guidance",
    heading: "Your Results Suggest a Strong Guidance Foundation",
    paragraphs: [
      "Your responses suggest that you are providing a high level of guidance, communication, structure, and support for your teen.",
      "This does not necessarily mean that every area is perfect or that no challenges exist.",
      "Even strong foundations can still benefit from deeper alignment, clearer communication, and confirmation that both parent and teen are moving forward with shared understanding and direction.",
      "In many cases, families with strong scores use this insight to further strengthen communication, validate important decisions, and maintain healthy alignment moving forward.",
    ],
  },
  {
    label: "80 - 90",
    color: "#194783",
    title: "80–89 Strong Guidance",
    heading: "Your Results Suggest a Strong Foundation with Room for Continued Growth",
    paragraphs: [
      "Your responses suggest that many important areas of guidance and communication are already being handled well.",
      "At the same time, there may still be opportunities to strengthen alignment, improve clarity, or address smaller gaps before major next-step decisions are made.",
      "Strong guidance does not mean every expectation, concern, or perspective is fully aligned.",
      "In many cases, continuing to strengthen communication and understanding can help create greater confidence and clarity moving forward.",
    ],
  },
  {
    label: "70 - 79",
    color: "#E67113",
    title: "70–79 Moderate Guidance",
    heading: "Your Results Suggest a Developing Guidance Foundation",
    paragraphs: [
      "Your responses suggest that there are several positive areas already in place, along with some areas that may benefit from additional attention or support.",
      "This does not mean that major problems exist.",
      "It simply means there may be opportunities to improve communication, consistency, readiness, or understanding before important decisions are made.",
      "In many cases, strengthening these areas early can help create greater clarity, healthier conversations, and more confident next-step decisions moving forward.",
    ],
  },
  {
    label: "60 - 69",
    color: "#F2A93C",
    title: "60–69 Low Moderate Guidance",
    heading: "Your Results Suggest Some Areas May Need Greater Attention",
    paragraphs: [
      "This does not mean you are failing as a parent.",
      "It simply means there may be opportunities to strengthen communication, structure, direction, readiness, or understanding before important next-step decisions are made.",
      "In many cases, improving the guidance foundation first can help create healthier conversations, clearer expectations, and better long-term outcomes moving forward.",
    ],
  },
  {
    label: "0 - 59",
    color: "#EF4444",
    title: "0–59 Guidance Needs Attention",
    heading: "Your Results Suggest Several Areas May Need Immediate Attention",
    paragraphs: [
      "This does not mean you are a bad parent or that positive change is not possible.",
      "It simply suggests that communication, structure, expectations, readiness, or overall guidance may currently be creating challenges, confusion, or uncertainty that deserve closer attention.",
      "The good news is that awareness is often the first step toward improvement.",
      "In many cases, identifying these areas early can help families begin strengthening communication, rebuilding understanding, and creating a healthier foundation before important education, career, or life decisions are made.",
    ],
  },
];

export const PARENT_INSIGHT_CONTENT = {
  header: {
    welcome: "Welcome Bruce Foster",
    title: "FREE Parent Insight Assessment™ Dashboard",
    subtitle: "Your Parent Insight Results (Ages 13 to 15)",
    tagline: "A snapshot of how your teen is currently being guided.",
  },
  scoreCard: {
    title: "Parent Cumulative Insight Score",
    subtitle: "(Average of 10 Metrics)",
    score: "68",
    scoreMax: "/100",
    guidanceLevelLabel: "Guidance Level:",
    guidanceLevel: "Low Moderate",
    assessedOnLabel: "Based on your assessment on",
    assessedOnDate: "May 17, 2025",
    nextAssessment:
      "Next assessment available in 30 days through the full Parent-Teen Alignment System.",
  },
  whatThisMeans: {
    title: "What This Means",
    body: "You have a developing foundation, but several key areas are not yet consistent. Without structured quidance, progress in these areas remain uneven and limit your teen's overall readiness",
    linkLabel: "See Full Breakdown Below ↓",
    linkHref: "#full-breakdown",
  },
  topStrengths: {
    title: "Top Strenghts",
    items: [
      "Direction & Exposure",
      "Communication & Alignment",
      "Motivation & Responsibility",
    ],
    linkLabel: "View Strenghts Details →",
    linkHref: "#strengths",
  },
  biggestOpportunities: {
    title: "Biggest Opportunities",
    items: [
      "Decision Awareness",
      "Emotional Connection",
      "Readiness for Next Steps",
    ],
    note: "Most families structured gustance to Improve these areas effectively",
    linkLabel: "View Opportunities →",
    linkHref: "#opportunities",
  },
  scoreInterpretationHeading: "Your Cumulative Score Interpretation",
};

export type GuidanceLevel =
  | "Exceptional"
  | "Strong"
  | "Moderate"
  | "Low Moderate"
  | "Needs Focus";

/** Color per guidance level, shared by the table pills and legend. */
export const GUIDANCE_LEVEL_COLORS: Record<GuidanceLevel, string> = {
  Exceptional: "#3C7C4E",
  Strong: "#194783",
  Moderate: "#E67113",
  "Low Moderate": "#F2A93C",
  "Needs Focus": "#EF4444",
};

export type AlignmentMetric = {
  metric: string;
  score: number;
  level: GuidanceLevel;
  meaning: string;
};

export const ALIGNMENT_METRICS_TABLE = {
  title: "Alignment Metrics-Parent Insight Results",
  subtitle: "How you see your role in guiding your teen",
  columns: {
    metric: "Metric ( Your Role in Guidance Your Teen",
    score: ["Your Score", "(Out of 100)"],
    level: "Guidance Level",
    meaning: "What This Means",
  },
  rows: [
    {
      metric: "Responsibility (Guidance)",
      score: 82,
      level: "Strong",
      meaning: "You set clear expectations and hold accountability.",
    },
    {
      metric: "Motivation (Guidance)",
      score: 75,
      level: "Moderate",
      meaning: "You encourage efforts and helps build internal drive.",
    },
    {
      metric: "Communication (Guidance",
      score: 80,
      level: "Strong",
      meaning: "You create space for open and honest conversations.",
    },
    {
      metric: "Direction (Guidance",
      score: 79,
      level: "Moderate",
      meaning: "You help your teen explore options and future path.",
    },
    {
      metric: "Confidence Guidance)",
      score: 66,
      level: "Low Moderate",
      meaning: "You're supporting confidence but there's more opportunity to grow.",
    },
    {
      metric: "Decision making (Guidance)",
      score: 61,
      level: "Low Moderate",
      meaning: "Your guide decisions but your teen may need practice.",
    },
    {
      metric: "Discipline (Guidance)",
      score: 73,
      level: "Moderate",
      meaning: "Your reinforce routines and follow through consistancy.",
    },
    {
      metric: "Respect (Guidance)",
      score: 90,
      level: "Exceptional",
      meaning: "You model respect and address issues constructively.",
    },
    {
      metric: "Readinees fo Next Steps (Guidance)",
      score: 59,
      level: "Needs Focus",
      meaning: "You're preparing them, but they may need more structure and support.",
    },
    {
      metric: "Family Understanding (Guidance)",
      score: 85,
      level: "Strong",
      meaning: "Expectations are clear and your teen understanding tha plan.",
    },
  ] as AlignmentMetric[],
  legend: [
    { label: "90-100 Exceptional", color: "#3C7C4E" },
    { label: "80-90 Strong", color: "#194783" },
    { label: "70-79 Moderate", color: "#E67113" },
    { label: "60-69 Low Moderate", color: "#F2A93C" },
    { label: "0-59 Needs Focus", color: "#EF4444" },
  ],
  importantLabel: "Important:",
  importantNote:
    "Even higher scores can be strengthened further. High scores indicate a strong foundation, but not maximum potential. Many families Full system to refine already strong areas and achieve more consistent, long-term results",
};

export const HOW_YOU_COMPARE = {
  title: "How You Compare",
  subtitle: "(Parent Insight Score)",
  description: "Your score is higher than 62% parents in your category.",
  percentileLabel: "62nd Percentile",
  /** Blue fill width as a percentage of the bar (306 / 484). */
  percentile: 63,
};

export const SNAPSHOT_SUMMARY = {
  title: "Your Snapshot Summary",
  subtitle: "This is high-level view of where you stand across all key areas.",
  columns: [
    {
      heading: "What You're Doing Well",
      value: "7",
      valueColor: "#194783",
      max: "/10",
      caption: "Areas are Strong or\nExceptional",
      captionColor: "#3C7C4E",
      description: "You have a strong foundation in several important areas.",
    },
    {
      heading: "Areas Needing More Focus",
      value: "3",
      valueColor: "#E67113",
      max: "/10",
      caption: "Areas are Moderate or Low\nModerate",
      captionColor: "#E67113",
      description: "Strenthening these ares can make a bigger impact.",
    },
    {
      heading: "Overall Guidance Level",
      value: "Low Moderate",
      valueColor: "#F2A93C",
      max: "",
      caption: "Opportunity to Strengthen Impact",
      captionColor: "#F2A93C",
      description:
        "You have a developing foundation, but several key araes are not yet consistant.",
    },
  ],
};

export const ASSESSMENT_INFO = {
  title: "Assessment Information",
  rows: [
    { label: "Assessment Date", value: "May 17, 2025" },
    { label: "Assessment Type", value: "Parent Insight (Ages 13-15)" },
    { label: "Metrics Completed", value: "10 of 10" },
    {
      label: "Retake Frequency",
      value: "Every 30 days through the full Parent-Teen Alignment System",
    },
  ],
};

const UNLOCK_ICON_BASE =
  "/images/landing-page/dashbaord-parent-insight";

export const UNLOCK_CTA = {
  title: "Unlock the Full Parent-Teen Alignment System",
  subtitle:
    "Get everything you need to strengthen your relationship, guide with confidenen, and help your toon take their steps",
  primaryButton: {
    label: "Unlock Full Access - $1487",
    href: "/secure-your-teens-next-step",
  },
  secondaryButton: { label: "More Question? Contact Us", href: "/contact" },
  buttonsCaption:
    "Includes Full Alignment And Live, Guided Support For Your Teen's Next Steps",
  detailsLabel: "What's Included in the Full System?",
  detailsHref: "#",
  features: [
    { icon: `${UNLOCK_ICON_BASE}/Symbol.svg`, label: "Complete Parent & Teen Alignment Reports" },
    { icon: `${UNLOCK_ICON_BASE}/Symbol (1).svg`, label: "Personalized Action Plan For Your Family" },
    { icon: `${UNLOCK_ICON_BASE}/Symbol (2).svg`, label: "Guided Conversations That Build Trust" },
    { icon: `${UNLOCK_ICON_BASE}/Symbol (3).svg`, label: "Ongoing Support & Accountability" },
    { icon: `${UNLOCK_ICON_BASE}/Symbol (4).svg`, label: "Track Progress & See Real Results Over Time" },
  ],
};

export const WHY_INVEST_BANNER = {
  shieldIcon: `${UNLOCK_ICON_BASE}/Group.svg`,
  title: "Why Investing in the Full Parent - Teen Alignment System is a Smart Move",
  features: [
    {
      icon: `${UNLOCK_ICON_BASE}/heart (2) 1.svg`,
      label: "Strengthen your relationship and build lasting trust",
    },
    {
      icon: `${UNLOCK_ICON_BASE}/correct 1.svg`,
      label: "Help your teen make better choice and avoid costly mistakes",
    },
    {
      icon: `${UNLOCK_ICON_BASE}/plus 1.svg`,
      label: "Reduce stress and bring more peace to your home",
    },
  ],
  linkLabel: "Learn More About the Benefits",
  linkHref: "/why-investing",
};

export const ABOUT_PARENT_INSIGHT = {
  title: "About Parent Insight Scores",
  body: "These scores reflect how you see your role as a guide. They are not a measure of your teen's behavior, but an opportunity for you to grow and strengthen Influence where it matters most.",
  emphasis:
    "Most families aim to move from Moderate or Strong into Exceptional with structured guidance.",
};

export const INDIVIDUAL_SCORE_MEANING = {
  title: "What Your Individual Score Means",
  rows: [
    {
      range: "90-100",
      heading: "Exceptional Guidance",
      color: "#3C7C4E",
      description:
        "You are learling at an exceptional level and maximizing your teen's potential",
    },
    {
      range: "80-89",
      heading: "Strong Guidance",
      color: "#194783",
      description: "You have a strong foundation and are making a positive impact.",
    },
    {
      range: "70-79",
      heading: "Moderate Guidance",
      color: "#E67113",
      description:
        "You're on the right track! A few adjustments can increase your impact.",
    },
    {
      range: "60-69",
      heading: "Low Moderate Guidance",
      color: "#F2A93C",
      description: "There is room to strengthen key areas for greater impact.",
    },
    {
      range: "0-59",
      heading: "Needs Focus",
      color: "#EF4444",
      description: "Your teen may be missing key support in important areas.",
    },
  ],
};
