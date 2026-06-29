import type { BlogPost } from "@/components/landing/blog/types";
import { BLOG_DETAIL_HERO_ALT } from "@/components/landing/blog/content/blog-assets";

const TRADITIONAL_PATHS_HERO_IMAGE =
  "/images/landing-page/blog/traditional-path-hero.png";
const TRADITIONAL_PATHS_IMAGE =
  "/images/landing-page/blog/traditional-image.png";
const PATH_DIFFERENT_IMAGE =
  "/images/landing-page/blog/path-different.png";

export const TRADITIONAL_PATHS_POST: BlogPost = {
  slug: "traditional-paths-vs-teen-next-step",
  title: "Traditional Paths vs. Teen Next Step: Alignment Before Decisions",
  titleLines: [
    "Traditional Paths vs. Teen Next Step Paths:",
    {
      text: "Why Alignment Comes Before Decisions",
      nowrap: true,
    },
  ],
  titleInlineOnMobile: true,
  excerpt:
    "Most teens are pushed into decisions before clarity exists. See a smarter, more structured way to help your teen choose a path that actually fits.",
  heroImage: TRADITIONAL_PATHS_HERO_IMAGE,
  heroImageAlt: BLOG_DETAIL_HERO_ALT,
  publishedAt: "2026-01-15",
  blocks: [
    {
      type: "heading",
      text: "The Pressure to Decide — Before Clarity Exists",
    },
    {
      type: "twoColumn",
      imageSize: "large",
      left: [
        {
          type: "paragraph",
          segments: [
            {
              text: "At some point, almost every parent faces the same question:",
            },
          ],
        },
        {
          type: "lineGroup",
          items: [
            "“What should my teen do next?”",
            "College?",
            "Trade school?",
            "Work?",
            "Take time to figure things out?",
          ],
        },
        {
          type: "paragraph",
          segments: [
            { text: "On the surface, these seem like clear options." },
          ],
        },
        {
          type: "paragraph",
          segments: [
            {
              text: "But there’s a deeper issue most families never address first:",
            },
          ],
        },
        {
          type: "paragraph",
          segments: [
            {
              text: "How do we know which path actually fits this specific teen?",
              bold: true,
            },
          ],
        },
      ],
      image: {
        src: TRADITIONAL_PATHS_IMAGE,
        alt: "Parents and teen at a table reviewing college, trade school, work, and other path options",
        aspectClass: "aspect-[623/431]",
      },
    },
    {
      type: "heading",
      text: "The Traditional Approach",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Most families—often without realizing it—follow a familiar pattern.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        { text: "They choose from a small set of standard paths:" },
      ],
    },
    {
      type: "numberedPoint",
      number: 1,
      title: "College Path",
      paragraphs: [
        [
          {
            text: "A common default, often chosen with the belief that it keeps options open.",
          },
        ],
      ],
    },
    {
      type: "numberedPoint",
      number: 2,
      title: "Trade or Skill-Based Path",
      paragraphs: [
        [
          {
            text: "A more focused direction toward a specific profession or skill set.",
          },
        ],
      ],
    },
    {
      type: "numberedPoint",
      number: 3,
      title: "\"Figure It Out\" Path",
      paragraphs: [
        [
          {
            text: "A less structured route where the teen explores options over time.",
          },
        ],
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "None of these paths are inherently wrong." }],
    },
    {
      type: "paragraph",
      segments: [{ text: "The problem is not the options." }],
    },
    {
      type: "paragraph",
      segments: [{ text: "The problem is how the decision is made." }],
    },
    {
      type: "heading",
      text: "What Traditional Paths Often Miss",
    },
    {
      type: "paragraph",
      segments: [{ text: "In many cases, the decision happens:" }],
    },
    {
      type: "bullets",
      items: [
        "Before clarity is established",
        "Before alignment is understood",
        "Before readiness is evaluated",
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "This can lead to:" }],
    },
    {
      type: "bullets",
      items: [
        "Uncertainty after the decision is made",
        "Changes in direction later",
        "Wasted time and resources",
        "Unnecessary stress for both parent and teen",
      ],
      
    },
    {
      type: "paragraph",
      segments: [{ text: "Not because the path was wrong—" }],
    },
    {
      type: "paragraph",
      segments: [{ text: "But because the timing and foundation were incomplete." }],
    },
    {
      type: "heading",
      text: "Teen Next Step Paths: A Different Starting Point",
    },
    {
      type: "lineGroup",
      spacing: "relaxed",
      items: [
        "Instead of asking:",
        "“What should my teen do next?”",
        "The Teen Next Step approach begins with a more important question:",
        [{ text: "“What actually fits this teen right now?”", bold: true }],
        "This shift changes everything.",
        "Because instead of choosing a path first, you create clarity first.",
      ],
    },
    {
      type: "heading",
      text: "What Makes Teen Next Step Paths Different",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "The Teen Next Step 8-Part Parent–Teen Alignment System is designed to guide families through a more structured process before any major decision is made.",
        },
      ],
    },
    {
      type: "twoColumn",
      imageSize: "large",
      left: [
        {
          type: "numberedPoint",
          number: 1,
          title: "Clarity Before Commitment",
          paragraphs: [
            [
              {
                text: "Rather than guessing or assuming, you begin by understanding:",
              },
            ],
          ],
          bullets: [
            "Strengths",
            "Areas for development",
            "Level of direction and confidence",
          ],
          closing: [[{ text: "This removes much of the uncertainty." }]],
        },
        {
          type: "numberedPoint",
          number: 2,
          title: "Alignment Before Action",
          paragraphs: [
            [
              {
                text: "Parents and teens often have different perspectives. Instead of assuming alignment, the system reveals:",
              },
            ],
          ],
          bullets: [
            "Where you agree",
            "Where you differ",
            "And what needs to be addressed",
          ],
          closing: [
            [
              {
                text: "This prevents miscommunication and resistance later.",
              },
            ],
          ],
        },
        {
          type: "numberedPoint",
          number: 3,
          title: "Readiness Before Investment",
          paragraphs: [
            [
              {
                text: "Whether the next step involves time, money, or both, it's important to know: Is your teen truly ready? The system helps identify:",
              },
            ],
          ],
          bullets: [
            "Readiness gaps",
            "Areas that may need strengthening",
            "Whether now is the right time for a specific path",
          ],
        },
        {
          type: "numberedPoint",
          number: 4,
          title: "Structure Before Decisions",
          paragraphs: [
            [
              {
                text: "Instead of rushing into a choice, you follow a clear, guided process that leads to a decision that makes sense.",
              },
            ],
            [{ text: "Not just logically—" }],
            [{ text: "But practically and personally." }],
          ],
        },
      ],
      image: {
        src: PATH_DIFFERENT_IMAGE,
        alt: "Infographic showing the Teen Next Step 8-Part Parent-Teen Alignment System and what makes its paths different",
        aspectClass: "aspect-square",
      },
    },
    {
      type: "heading",
      text: "Side-by-Side: Traditional vs. Teen Next Step",
    },
    {
      type: "numberedPoint",
      number: 1,
      hideNumber: true,
      title: "Traditional Approach",
      bullets: [
        "Choose a path first",
        "Hope it fits",
        "Adjust later if needed",
      ],
    },
    {
      type: "numberedPoint",
      number: 2,
      hideNumber: true,
      title: "Teen Next Step Approach",
      bullets: [
        "Understand first",
        "Align perspectives",
        "Choose a path that fits from the start",
      ],
    },
    {
      type: "heading",
      text: "Why This Difference Matters",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "When decisions are made without clarity and alignment:",
        },
      ],
    },
    {
      type: "bullets",
      items: [
        "Motivation tends to drop",
        "Confidence remains low",
        "Course corrections become more likely",
      ],
    },
    {
      type: "paragraph",
      segments: [
        { text: "But when clarity and alignment come first:" },
      ],
    },
    {
      type: "bullets",
      items: [
        "Decisions feel more natural",
        "Teens are more engaged",
        "Progress becomes more consistent",
      ],
    },
    {
      type: "heading",
      text: "It’s Not About Avoiding Traditional Paths",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "College, trade schools, and exploratory paths can all be valuable.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        { text: "Teen Next Step does not replace these options." },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "It helps ensure that whichever path is chosen is:",
        },
      ],
    },
    {
      type: "bullets",
      items: [
        "Better understood",
        "Better aligned",
        "And better timed",
      ],
    },
    {
      type: "heading",
      text: "A More Confident Way Forward",
    },
    {
      type: "paragraph",
      segments: [{ text: "Parents don’t need more options." }],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "They need a clearer way to evaluate the options already available.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "The Teen Next Step 8-Part Parent–Teen Alignment System provides that clarity by helping families:",
        },
      ],
    },
    {
      type: "bullets",
      items: [
        "See where they truly stand",
        "Understand what fits",
        "And move forward with greater confidence",
      ],
    },
    {
      type: "heading",
      text: "Final Thought",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "The most important decision isn't which path your teen chooses.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        { text: "It's " },
        { text: "how that decision is made.", bold: true },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Because when clarity and alignment come first, the right path becomes much easier to see.",
        },
      ],
    },
    {
      type: "heading",
      text: "Next Step for Parents Who Want That Clarity",
    },
    {
      type: "paragraph",
      segments: [{ text: "If you're unsure:" }],
    },
    {
      type: "bullets",
      items: [
        "Which direction truly fits your teen",
        "Whether they're ready for their next step",
        "Or how aligned you and your teen really are",
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Starting with a simple Parent Alignment Insight can provide a clear starting point.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "From there, the full Teen Next Step system can help you move forward with a structured, confident plan.",
        },
      ],
    },
  ],
  footerCta: {
    primary: {
      label: "Get Your FREE Roadmap for Your Teen's Success",
      href: "/free-parent-insight",
      caption: "Takes 3–5 minutes • Instant results • See what may need attention",
    },
    secondary: {
      label: "Learn More About Our Alignment System",
      href: "/parent-teen-alignment-system",
      caption: "Clarity and better decisions start with alignment and guided support",
    },
    tertiary: {
      label: "View All Parent Resources",
      href: "/#blog",
      caption: "",
    },
  },
};
