const IMG_BASE = "/images/landing-page/results-ready";

export const RESULTS_READY_CONTENT = {
  heroImage: `${IMG_BASE}/hero-banner.svg`,
  heroImageAlt: "",
  hero: {
    heading: "Your Results Are Ready (Ages 13 to 15)",
    subheading:
      "Your results have been tabulated and securely saved. The next step is for your teen to complete their alignment profile so your full Parent–Teen results can be generated.",
  },
  inviteLink: "https://teennextstep.com/teen-profile/ABC123",
  handToTeen: {
    heading: "Have Your Teen Complete Their Profile",
    body: "You can either hand your device to your teen or send them a secure invite link.",
    linkLabel: "Teen Alignment Profile Invite Link:",
    image: `${IMG_BASE}/hand-device.svg`,
    imageAlt:
      "A phone passing a teen-profile invite to a teen wearing headphones",
  },
  sendLink: {
    heading: "Prefer to Send the Link?",
    body: "Copy and send this secure invite link to your teen:",
    note: "You can send it via text message, email, or any messaging app.",
    image: `${IMG_BASE}/teen-laptop.svg`,
    imageAlt: "A teen working on a laptop",
  },
  whatHappensNext: {
    heading: "What Happens Next",
    intro: "Once your teen completes their profile:",
    items: [
      "They will be asked to enter their name and email",
      "If they do not have an email, one will be created for them within the system",
      "Once your teen completes and submits their alignment profile, both of you will receive an email with a link to your dashboards",
    ],
  },
  accessToResults: {
    heading: "Access to Results",
    items: [
      "Your teen will have access only to their own results",
      "As the parent, you will have access to both your results and your teen's",
    ],
  },
} as const;
