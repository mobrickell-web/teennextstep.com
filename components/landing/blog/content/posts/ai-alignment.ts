import { BLOG_FOOTER_CTA } from "@/components/landing/blog/content/blog-footer-cta";
import type { BlogPost } from "@/components/landing/blog/types";
import { BLOG_DETAIL_HERO_ALT } from "@/components/landing/blog/content/blog-assets";

const AI_ALIGNMENT_HERO_IMAGE =
  "/images/landing-page/blog/ai-measure-super-section.png";
const DATA_HUMAN_IMAGE = "/images/landing-page/blog/data-human.png";
const WHY_MATTER_IMAGE = "/images/landing-page/blog/why-matter.png";
export const AI_ALIGNMENT_POST: BlogPost = {
  slug: "ai-measurement-human-alignment",
  title: "AI Can Measure, But Only Humans Can Create Alignment",
  
  excerpt:
    "AI can process information—but it cannot replace real human understanding. Discover why true parent-teen alignment still requires empathy, communication, and guided human connection.",
  heroImage: AI_ALIGNMENT_HERO_IMAGE,
  heroImageAlt: BLOG_DETAIL_HERO_ALT,
  publishedAt: "2026-01-05",
  blocks: [
    {
      type: "paragraph",
      className: "mt-6 sm:mt-8",
      segments: [
        {
          text: "If you feel like you're losing your teen to a screen, you aren't alone.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "In an era where AI can write essays, curate social feeds, and simulate conversation, many parents are beginning to ask an important question:",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        { text: "What still creates real human connection?" },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "At Teen Next Step, we use advanced technology to power our system. Our assessments are fast, our dashboards are efficient, and our data provides immediate insight.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        { text: "But we believe something very important:" },
      ],
    },
    {
      type: "lineGroup",
      spacing: "relaxed",
      items: [
        "Technology can reveal patterns.",
        "Only people can help create alignment.",
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "That's why our system was designed to combine the speed and precision of modern technology with the guidance, perspective, and real-world understanding that only experienced humans can provide.",
        },
      ],
    },
    {
      type: "numberedPoint",
      number: 1,
      title: "Data vs. Human Understanding",
      paragraphs: [
        [
          {
            text: "AI can identify trends, scoring patterns, and areas that may need attention.",
          },
        ],
        [
          {
            text: "But it cannot fully understand family dynamics, emotional nuance, personal history, or the unspoken tension that may exist between a parent and teen.",
          },
        ],
        [
          {
            text: "Our Parent-Teen Alignment System uses technology to uncover potential gaps in:",
          },
        ],
      ],
    },
    {
      type: "twoColumn",
      imageSize: "large",
      left: [
        {
          type: "bullets",
          items: [
            "Direction",
            "Readiness",
            "Communication",
            "Motivation",
            "Priorities",
            "Confidence",
            "Responsibility",
            "Education Awareness",
            "Career Awareness",
            "Emotional Support",
          ],
        },
      ],
      image: {
        src: DATA_HUMAN_IMAGE,
        alt: "Teen with parents as digital alignment insights appear beside them",
        aspectClass: "aspect-[623/431]",
      },
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "From there, our live Alignment Architects help families navigate those realities constructively through real human interaction.",
        },
      ],
    },
    {
      type: "lineGroup",
      spacing: "relaxed",
      items: [
        "Technology helps reveal the information.",
        "Human guidance helps families understand what to do with it.",
      ],
    },
    {
      type: "numberedPoint",
      number: 2,
      title: "Technology Should Support Families – Not Replace Them",
      paragraphs: [
        [
          {
            text: "At Teen Next Step, technology exists to support the process — not replace human connection.",
          },
        ],
        [
          {
            text: "We use technology to handle the administrative side of the system, including:",
          },
        ],
      ],
      bullets: [
        "Assessments",
        "Score calculations",
        "Dashboards",
        "Progress tracking",
        "Organization",
        "Reporting",
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "This allows our Alignment Architects to focus their attention where it matters most:",
        },
      ],
    },
    {
      type: "lineGroup",
      spacing: "relaxed",
      items: ["The parent.", "The teen.", "The relationship between them."],
    },
    {
      type: "paragraph",
      segments: [{ text: "The goal is not more automation." }],
    },
    {
      type: "paragraph",
      segments: [{ text: "The goal is more meaningful interaction." }],
    },
    {
      type: "numberedPoint",
      number: 3,
      title: "The Human Element Still Matters",
      paragraphs: [
        [
          {
            text: "As the world becomes increasingly digital, genuine human guidance becomes more valuable — not less.",
          },
        ],
        [{ text: "Teens still need:" }],
      ],
      bullets: [
        "mentorship",
        "communication",
        "emotional support",
        "accountability",
        "direction",
      ],
      closing: [[{ text: "Parents still need:" }]],
      closingBullets: [
        "clarity",
        "perspective",
        "structure",
        "guidance",
        "confidence in next-step decisions",
      ],
    },
    {
      type: "twoColumn",
      imageSize: "large",
      leftSpacing: "compact",
      left: [
        {
          type: "paragraph",
          segments: [{ text: "Technology can provide information." }],
        },
        {
          type: "paragraph",
          segments: [
            {
              text: "But real alignment often requires conversation, perspective, accountability, trust, and emotional awareness — things that cannot be fully automated.",
            },
          ],
        },
        {
          type: "heading",
          text: "Why This Matters More Than Ever",
          className: "mt-0",
        },
        {
          type: "paragraph",
          segments: [{ text: "Many parents today are trying to navigate:" }],
        },
        {
          type: "bullets",
          items: [
            "AI influence",
            "social media overload",
            "confusion around career direction",
            "emotional disconnection",
            "educational uncertainty",
            "increasing communication gaps within the family",
          ],
        },
        {
          type: "paragraph",
          segments: [
            {
              text: "At the same time, many teens appear confident externally while internally lacking structure, readiness, direction, or clarity about what comes next.",
            },
          ],
        },
        {
          type: "paragraph",
          segments: [
            {
              text: "That's where structured parent-teen alignment becomes valuable.",
            },
          ],
        },
        {
          type: "lineGroup",
          spacing: "relaxed",
          items: [
            "Not to control teens.",
            "But to help families communicate more effectively before major educational, career, and life decisions are made.",
          ],
        },
      ],
      image: {
        src: WHY_MATTER_IMAGE,
        alt: "Collage illustrating AI influence, social media, family disconnection, and career uncertainty facing teens and parents",
        aspectClass: "aspect-[623/431]",
        wrapperClassName: "lg:mt-[7rem]",
      },
    },
    {
      type: "heading",
      text: "The Bottom Line",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Teen Next Step is not building a system to replace parents or human connection.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "We've built a structured, technology-powered framework designed to help families reconnect, communicate more effectively, and move forward with greater clarity and alignment.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Our system combines the efficiency of modern technology with something many families feel is disappearing:",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "Real human guidance.", bold: true }],
    },
  ],
  footerCta: BLOG_FOOTER_CTA,
};
