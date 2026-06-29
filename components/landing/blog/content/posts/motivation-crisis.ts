import type { BlogPost } from "@/components/landing/blog/types";
import {
  BLOG_ACTUALLY_HELP_ALT,
  BLOG_ACTUALLY_HELP_IMAGE,
  BLOG_DETAIL_HERO_ALT,
  BLOG_DETAIL_HERO_IMAGE,
  BLOG_LACK_DIRECTION_ALT,
  BLOG_LACK_DIRECTION_IMAGE,
} from "@/components/landing/blog/content/blog-assets";

export const MOTIVATION_CRISIS_POST: BlogPost = {
  slug: "motivation-crisis",
  title: "The Motivation Crisis: Why Teens Feel Stuck—and What Helps",
  titleLines: [
    "The Motivation Crisis:",
    "Why Teens Feel Stuck—and What Helps",
  ],
  excerpt:
    "Many teens today aren't lazy—they're uncertain. Here's why motivation breaks down and what parents can do.",
  heroImage: BLOG_DETAIL_HERO_IMAGE,
  heroImageAlt: BLOG_DETAIL_HERO_ALT,
  publishedAt: "2026-03-15",
  blocks: [
    {
      type: "heading",
      text: "A Growing Concern Most Parents Can Feel — But Can’t Always Explain",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Across the country, more parents are noticing the same pattern:",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Their teen isn't necessarily struggling in obvious ways…",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "But something feels off." }],
    },
    {
      type: "paragraph",
      segments: [{ text: "Less drive." }],
    },
    {
      type: "paragraph",
      segments: [{ text: "Less clarity." }],
    },
    {
      type: "paragraph",
      segments: [{ text: "Less excitement about the future." }],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "What often gets labeled as \"laziness\" or \"lack of discipline\" is, in many cases, something very different.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "Many teens today are not unmotivated." }],
    },
    {
      type: "paragraph",
      segments: [
        { text: "They are " },
        { text: "uncertain, overwhelmed, or misaligned", bold: true },
        { text: "." },
      ],
    },
    {
      type: "heading",
      text: "Why Motivation Is Breaking Down",
    },
    {
      type: "paragraph",
      segments: [{ text: "Motivation doesn't disappear randomly." }],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "It typically fades when one or more of these are missing:",
        },
      ],
    },
    {
      type: "twoColumn",
      left: [
        {
          type: "numberedPoint",
          number: 1,
          title: "Lack of Clear Direction",
          paragraphs: [
            [
              {
                text: "Many teens are being asked to make important life decisions before they truly understand:",
              },
            ],
          ],
          bullets: [
            "Their strengths",
            "Their interests",
            "What real-world paths actually look like",
          ],
          closing: [
            [{ text: "Without direction, motivation has nowhere to anchor." }],
          ],
        },
        {
          type: "numberedPoint",
          number: 2,
          title: "Overexposure Without Structure",
          paragraphs: [
            [{ text: "Teens today are exposed to:" }],
          ],
          bullets: [
            "Endless career options",
            "Social media comparisons",
            "Conflicting advice",
          ],
          closing: [
            [
              {
                text: "Instead of creating clarity, this often creates confusion.",
              },
            ],
            [
              {
                text: "Too many options, without structure, leads to hesitation.",
              },
            ],
          ],
        },
        {
          type: "numberedPoint",
          number: 3,
          title: "Pressure Without Alignment",
          paragraphs: [
            [{ text: "Parents want the best for their children." }],
            [
              {
                text: "But even well-intentioned pressure can create resistance when a teen does not feel internally connected to the path.",
              },
            ],
            [
              {
                text: "When expectations and internal readiness don't match, motivation drops.",
              },
            ],
          ],
        },
        {
          type: "numberedPoint",
          number: 4,
          title: "Lack of Ownership",
          paragraphs: [
            [
              {
                text: "When decisions feel external (\"I'm doing this because I'm supposed to\"), teens disengage.",
              },
            ],
            [{ text: "Motivation increases when teens feel:" }],
          ],
          bullets: ["Heard", "Involved", "Part of the decision process"],
        },
      ],
      image: {
        src: BLOG_LACK_DIRECTION_IMAGE,
        alt: BLOG_LACK_DIRECTION_ALT,
      },
    },
    {
      type: "heading",
      text: "What This Looks Like in Real Life",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "This “motivation crisis” doesn’t always look dramatic.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "It often shows up as:" }],
    },
    {
      type: "bullets",
      items: [
        "Procrastination",
        "Indecision",
        "Low enthusiasm about future plans",
        "Avoiding conversations about what comes next",
      ],
    },
    {
      type: "paragraph",
      segments: [
        { text: "Many teens aren’t refusing to move forward." },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "They simply don’t know how to move forward with confidence.",
        },
      ],
    },
    {
      type: "heading",
      text: "What Most Parents Try – And Why It Doesn't Always Work",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "When motivation drops, parents often respond by:",
        },
      ],
    },
    {
      type: "bullets",
      items: [
        "Encouraging more discipline",
        "Pushing clearer decisions",
        "Suggesting college or career paths more strongly",
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "While these actions come from a good place, they often address the symptom, not the root issue.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "If a teen lacks clarity or alignment, pushing harder rarely solves it.",
        },
      ],
    },
    {
      type: "heading",
      text: "What Actually Helps: Rebuilding Motivation the Right Way",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Instead of focusing on forcing motivation, the goal is to create the conditions where motivation naturally returns.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "This typically involves three key shifts:" }],
    },
    {
      type: "twoColumn",
      left: [
        {
          type: "numberedPoint",
          number: 1,
          title: "Clarity Before Commitment",
          paragraphs: [
            [{ text: "Before asking:" }],
            [{ text: "\"What are you going to do next?\"" }],
            [{ text: "Start with:" }],
            [
              {
                text: "\"Do we truly understand what fits you best right now?\"",
              },
            ],
            [{ text: "Clarity reduces resistance." }],
          ],
        },
        {
          type: "numberedPoint",
          number: 2,
          title: "Alignment Before Action",
          paragraphs: [
            [
              {
                text: "Motivation increases when a teen feels:",
              },
            ],
          ],
          bullets: ["Understood", "Included", "Aligned with the direction being considered"],
          closing: [
            [{ text: "Alignment creates internal buy-in." }],
          ],
        },
        {
          type: "numberedPoint",
          number: 3,
          title: "Supporting Autonomous Decision-Making",
          paragraphs: [
            [
              {
                text: "Motivation Instead of jumping to decisions, introduce a simple structure that helps: when a teen feels:",
              },
            ],
          ],
          bullets: [
            "Evaluate available options",
            "Identify natural strengths",
            "Recognize knowledge or skill gaps",
            "Build a realistic action plan",
          ],
          closing: [
            [{ text: "A clear structure replaces uncertainty with confidence." }],
          ],
        },
      ],
      image: {
        src: BLOG_ACTUALLY_HELP_IMAGE,
        alt: BLOG_ACTUALLY_HELP_ALT,
        aspectClass: "aspect-[4/3]",
      },
    },
    {
      type: "heading",
      text: "A Different Way Forward",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Most traditional next steps focus on choosing a path quickly.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "But many teens don’t struggle because they can’t choose.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "They struggle because they haven’t been given a clear way to:",
        },
      ],
    },
    {
      type: "bullets",
      items: [
        "Understand themselves",
        "Explore realistic options",
        "Align with a direction that actually fits",
      ],
    },
    {
      type: "paragraph",
      segments: [
        { text: "When those pieces come into place, motivation tends to follow." },
      ],
    },
    {
      type: "heading",
      text: "What Parents Can Do Right Now",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "If your teen feels stuck, consider this approach:",
        },
      ],
    },
    {
      type: "bullets",
      items: [
        "Slow the process down slightly",
        "Focus on understanding before deciding",
        "Create space for honest input from your teen",
        "Look for tools or systems that bring clarity and structure",
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "You’re not trying to force a decision.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "You’re helping your teen move forward with clarity and confidence.",
        },
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
          text: "The motivation crisis isn’t really about motivation.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        { text: "It’s about " },
        { text: "clarity, alignment, and readiness.", bold: true },
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "When those are missing, teens stall." }],
    },
    {
      type: "paragraph",
      segments: [{ text: "When those are present, progress becomes much more natural." }],
    },
    {
      type: "heading",
      text: "Next Step for Parents Who Want More Clarity",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "If you want a clearer picture of where your teen currently stands—and where they may need support—starting with a structured alignment insight can be a powerful first step.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Teen Next Step offers a complete 8-part Parent–Teen Alignment System designed to help you and your teen clearly understand where you align, where you differ, and what steps to take next.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "A simple, guided process can quickly highlight:",
        },
      ],
    },
    {
      type: "bullets",
      items: [
        "Areas of strength",
        "Areas that may need development",
        "And where you and your teen may already align—or differ",
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "From there, the path forward becomes much easier to see.",
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
