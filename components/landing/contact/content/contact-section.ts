const IMG = "/images/landing-page/contact";

export const CONTACT_CONTENT = {
  heroImage: `${IMG}/hero-banner.svg`,
  heroImageAlt: "",
  hero: {
    heading: "CONTACT US",
    subheading:
      "Have a question or need help getting started? We're here to help.",
  },
  formImage: `${IMG}/form-image.svg`,
  formImageAlt: "Someone reviewing the Teen Next Step site on a laptop",
  fields: {
    fullName: { name: "fullName", placeholder: "Full Name" },
    email: { name: "email", placeholder: "Email Address" },
    phone: { name: "phone", placeholder: "Phone Number" },
    role: {
      name: "role",
      placeholder: "I am a:",
      options: ["Parent", "Teen", "Educator", "Other"],
    },
    helpWith: {
      name: "helpWith",
      placeholder: "What do you need help with?",
      options: [
        "General question",
        "Getting started",
        "Technical support",
        "Billing",
        "Other",
      ],
    },
    message: { name: "message", placeholder: "Message" },
  },
  submitLabel: "Send Message",
} as const;
