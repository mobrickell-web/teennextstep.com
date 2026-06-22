export const RESULTS_DASHBOARD_CONTENT = {
  pageTitle: "Teen Next Step Dashboard",
  tabs: [
    { id: "parent-insight", label: "Parent Insight Results", locked: false },
    { id: "teen-alignment", label: "Teen Alignment Results", locked: true },
    {
      id: "parent-teen-alignment",
      label: "Parent-Teen Alignment Results",
      locked: true,
    },
  ],
  parentInsight: {
    heading: "Your Parent Insight Results (Ages 13 to 15)",
    subheading: "A snapshot of how your teen is currently being guided.",
    score: {
      label: "Parent Insight Score",
      value: 78,
      max: 100,
      concern: "Concern Level: Moderate",
    },
    // Donut segments — value is the percentage shown on the slice.
    // Donut slices — radius/angles/color come straight from the API.
    metrics: [
      {
        label: "Direction and Exposure",
        value: 85,
        radius: 300,
        startAngle: 180,
        endAngle: 270,
        color: "#3B5FCB",
      },
      {
        label: "Motivation and Responsibility",
        value: 20,
        radius: 190,
        startAngle: 270,
        endAngle: 315,
        color: "#FF2D55",
      },
      {
        label: "Readiness For Next Steps",
        value: 15,
        radius: 220,
        startAngle: 315,
        endAngle: 360,
        color: "#FFAA00",
      },
      {
        label: "Communication and Alignment",
        value: 35,
        radius: 260,
        startAngle: 0,
        endAngle: 50,
        color: "#8BCB3F",
      },
      {
        label: "Decision Awareness and Understanding",
        value: 48,
        radius: 240,
        startAngle: 50,
        endAngle: 110,
        color: "#1AA7A1",
      },
      {
        label: "",
        value: 62,
        radius: 270,
        startAngle: 110,
        endAngle: 180,
        color: "#4DA3FF",
      },
    ],
    metricsHeading: ["Alignment Metrics", "Parent Insight Results"],
    suggests: {
      heading: "What This Suggests",
      body: "Your responses suggest there may be areas that could benefit from closer attention as your teen approaches important decisions.",
    },
    mayMean: {
      heading: "What This May Mean",
      body: "While some areas may feel on track, there may be gaps in clarity, alignment, or preparation that could impact future decisions if left unaddressed.",
    },
    important: {
      heading: "Important",
      body: "This insight reflects how you currently view your role in guiding your teen. It does not measure your teen's actual perspective or experience, nor does it compare your alignment with your teen.",
    },
    fullPicture: {
      heading: "Get the Full Picture",
      body: "Your dashboard will unlock your teen's perspective and a complete Parent–Teen\nalignment view when you move forward with the full system.",
      primaryCta: {
        label: "Unlock Full Parent-Teen Alignment System - $1487",
        href: "/secure-your-teens-next-step",
        caption: "Includes Full Alignment And Guided Support",
      },
      secondaryCta: {
        label: "Why Investing in the Full Parent-Teen Alignment System Is a Smart Move",
        href: "/why-investing",
        caption: "Move Forward With Clarity And Confidence In Your Teen's Next Steps",
      },
      contactCta: {
        label: "Have Additional Questions? Contact Us Here",
        href: "/contact",
      },
    },
  },
  lockedMessage:
    "This view unlocks with the full Parent-Teen Alignment System.",
} as const;
