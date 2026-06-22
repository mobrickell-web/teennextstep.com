const ICON_BASE = "/images/landing-page/parent-teen-allignment";

export const PARENT_INSIGHT_WELCOME_CONTENT = {
  heading: "Welcome to Your Parent-Teen Alignment System",
  subheading:
    "You've Made A Great Decision to Help Maximize Your Teen's Future Success",
  highlights: [
    {
      icon: `${ICON_BASE}/icon-notes.svg`,
      iconAlt: "",
      text: "20 Easy Statements You Score From 1 to 10",
      // Width of the divider line under this icon (px). Adjust per item.
      lineWidth: 320,
    },
    {
      icon: `${ICON_BASE}/icon-timeframe.svg`,
      iconAlt: "",
      text: "Takes Only 10-15 Minutes for both Parent & Teen",
      lineWidth: 360,
    },
    {
      icon: `${ICON_BASE}/icon-security.svg`,
      iconAlt: "",
      text: "100% Confidential & Secure",
      lineWidth: 360,
    },
  ],
  readyHeading: "Ready to Get Started?",
  steps: [
    {
      label: "Step 1:",
      title: "Complete Your Profile First",
      body: "Begin by selecting your teen's age group below and completing your Parent Alignment Profile.",
      emphasis: ["Parent Alignment Profile"],
      image: `${ICON_BASE}/step-1.svg`,
      imageAlt: "Parent completing their profile on a phone",
      // Width (px) of the divider line below this step's heading.
      lineWidth: 530,
    },
    {
      label: "Step 2:",
      title: "Have Your Teen Complete Their Profile",
      body: "Once you've finished, your teen will complete the same profile. You have two simple options",
      emphasis: [],
      image: `${ICON_BASE}/step-2.svg`,
      imageAlt:
        "Two ways for your teen to complete their profile: hand over the device, or send a secure invite link",
      lineWidth: 700,
      options: [
        {
          label: "Hand your device to your teen",
        },
        {
          label: "Send them a secure invite link",
        },
      ],
    },
    {
      label: "Step 3:",
      title: "View Your Results & Next Steps",
      body: "After both profiles are complete, your Parent-Teen dashboards will be automatically created—one for your teen and one for you.",
      emphasis: [],
      lineWidth: 600,
      notice: "Your teen will only see their own results.",
    },
  ],
  discover: {
    heading: "Here's What You'll Discover:",
    items: [
      "Where You and Your Teen Align - and Where You Differ",
      "Readiness & Future Planning Insights",
      "Your Personalized Next-Step Flexible Success Roadmap, including Live, Guided Help from Your Teen Next Step Ambassador",
    ],
    image: `${ICON_BASE}/step-3.svg`,
    imageAlt: "Parent-Teen dashboard shown on a laptop",
  },
  getStarted: {
    heading: "Get Started Now",
    subheading: "Choose One:",
    options: [
      {
        label: "My teen is 13 to 15 years of age",
        href: "/signup?age=13-15",
      },
      {
        label: "My teen is 16 to 19 years of age",
        href: "/signup?age=16-19",
      },
    ],
  },
} as const;
