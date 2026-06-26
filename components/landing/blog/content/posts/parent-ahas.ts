import type { BlogPost } from "@/components/landing/blog/types";
import {
  BLOG_PARENT_AHAS_CHANGES_ALT,
  BLOG_PARENT_AHAS_CHANGES_IMAGE,
  BLOG_PARENT_AHAS_HERO_ALT,
  BLOG_PARENT_AHAS_HERO_IMAGE,
  BLOG_PARENT_AHAS_MOMENTS_ALT,
  BLOG_PARENT_AHAS_MOMENTS_IMAGE,
} from "@/components/landing/blog/content/blog-assets";

export const PARENT_AHAS_POST: BlogPost = {
  slug: "parent-ahas-full-picture",
  title: "Parent Aha's: What Changes When Parents See the Full Picture",
  titleLines: [
    "Parent Aha's:",
    {
      text: "What Changes When Parents See the Full Picture",
      nowrap: true,
    },
  ],
  excerpt:
    "The biggest shift occurs when parents finally see what's really going on. Discover what changes everything—and why most don't see it early enough.",
  heroImage: BLOG_PARENT_AHAS_HERO_IMAGE,
  heroImageAlt: BLOG_PARENT_AHAS_HERO_ALT,
  publishedAt: "2026-02-10",
  blocks: [
    {
      type: "heading",
      text: "Most Parents Are Doing Their Best — With Incomplete Information",
    },
    {
      type: "paragraph",
      segments: [{ text: "Every parent wants their teen to thrive." }],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "To help their teen make good decisions avoid unnecessary setbacks and move toward a future that feels right.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "But here’s the challenge:" }],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Most parents are making important decisions with only part of the picture.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "They see:" }],
    },
    {
      type: "bullets",
      items: ["Grades", "Behavior", "Surface-level interests"],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "But what often remains unclear are the deeper factors that actually shape direction:",
        },
      ],
    },
    {
      type: "bullets",
      items: [
        "Internal readiness",
        "Confidence",
        "Clarity (or lack of it)",
        "How aligned a teen truly feels with what’s being discussed",
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Without a structured way to uncover these, even the best intentions can lead to frustration.",
        },
      ],
    },

    {
      type: "heading",
      text: "Where the \"Aha\" Moments Come From",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "These powerful realizations don’t usually come from more conversations or more advice They come from seeing things clearly for the first time.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "This is exactly where a structured system like the",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Teen Next Step 8-Part Parent–Teen Alignment System",
          bold: true,
        },
        { text: " makes a difference." },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Instead of guessing, it helps bring both the parent’s and teen’s perspectives into view—side by side.",
        },
        { text: "And when that happens, the “aha” moments begin." },

      ],
    },
    {
      type: "heading",
      text: "Common Parent Aha Moments (And How They Become Clear)",
    },
    {
      type: "twoColumn",
      left: [
        {
          type: "numberedPoint",
          number: 1,
          title: "\"My Teen Isn't Resistant — They're Unclear\"",
          paragraphs: [[{ text: "What once looked like:" }]],
          bullets: ["Avoidance", "Procrastination", "Lack of effort"],
          closing: [
            [{ text: "Often turns out to be:" }],
            [{ text: "How this becomes clear:" }],
            [
              {
                text: "Through a structured alignment profile, parents begin to see where clarity is missing—rather than assuming motivation is the issue.",
              },
            ],
          ],
          closingBullets: [
            "Uncertainty",
            "Confusion",
            "Not knowing where to start",
          ],
        },
        {
          type: "numberedPoint",
          number: 2,
          title: "\"We're Not as Aligned as I Thought\"",
          paragraphs: [
            [
              {
                text: "Many parents believe they understand where their teen stands.",
              },
            ],
            [
              {
                text: "But when both perspectives are measured and compared, differences often appear:",
              },
            ],
          ],
          bullets: [
            "Different priorities",
            "Different expectations",
            "Different levels of readiness",
          ],
          closing: [
            [{ text: "How this becomes clear:" }],
            [
              {
                text: "The system reveals both viewpoints independently, then shows exactly where alignment exists—and where it doesn’t.",
              },
            ],
          ],
        },
        {
          type: "numberedPoint",
          number: 3,
          title: "\"Pushing Harder Isn't the Answer\"",
          paragraphs: [
            [
              {
                text: "When progress slows, the instinct is to:",
              },
            ],
          ],
          bullets: ["Push", "Guide more strongly", "Encourage more discipline"],
          closing: [
            [
              {
                text: "But many parents realize:",
              },
            ],
            [{ text: "The issue isn’t effort." }],
            [{ text: "It’s alignment." }],
            [{ text: "How this becomes clear:", bold: true }],
            [
              {
                text: "When underlying gaps are identified, it becomes obvious that pressure alone cannot solve what hasn’t yet been understood.",
              },
            ],
          ],
        },
        {
          type: "numberedPoint",
          number: 4,
          title: "\"My Teen Needs Structure — Not Just Advice\"",
          paragraphs: [
            [
              {
                text: "Advice without structure often leads to repeated conversations without real progress.",
              },
            ],
          ],
          closing: [
            [{ text: "How this becomes clear:", bold: true }],
            [
              {
                text: "The Teen Next Step system organizes insights into a clear framework—helping parents and teens move from conversation to direction.",
              },
            ],
          ],
        },
        {
          type: "numberedPoint",
          number: 5,
          title: "\"This is Earlier Than I Thought\"",
          paragraphs: [
            [
              {
                text: "Many parents assume these conversations should happen later.",
              },
            ],
            [
              {
                text: "But once they see the full picture, they realize:",
              },
            ],
            [
              {
                text: "Clarity should come before major decisions are made.",
              },
            ],
          ],
          closing: [
            [{ text: "How this becomes clear:", bold: true }],
            [
              {
                text: "The system surfaces readiness and direction early—before time and money are committed to a path that may not fit.",
              },
            ],
          ],
        },
      ],
      image: {
        src: BLOG_PARENT_AHAS_MOMENTS_IMAGE,
        alt: BLOG_PARENT_AHAS_MOMENTS_ALT,
        aspectClass: "aspect-[4/3]",
      },
    },
    {
      type: "heading",
      text: "What Changes After These Aha Moments",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "When parents gain this level of clarity, everything begins to shift:",
        },
      ],
    },
    {
      type: "twoColumn",
      left: [
        {
          type: "numberedPoint",
          number: 1,
          hideNumber: true,
          title: "Conversations Become More Focused",
          paragraphs: [
            [
              {
                text: "Instead of talking in circles, you're talking about the things that actually matter.",
              },
            ],
          ],
          bullets: [
            "More productive",
            "Less emotional",
            "More focused on solutions",
          ],
        },
        {
          type: "numberedPoint",
          number: 2,
          hideNumber: true,
          title: "Decisions Become More Grounded",
          paragraphs: [
            [
              {
                text: "You're no longer making decisions based on guesswork or frustration. You're making them based on data and understanding.",
              },
            ],
          ],
          bullets: [
            "Clearer goals",
            "More consistent parenting",
            "Less second-guessing",
          ],
        },
        {
          type: "numberedPoint",
          number: 3,
          hideNumber: true,
          title: "Resistance Often Decreases",
          paragraphs: [
            [
              {
                text: "When a teen feels understood, they're much less likely to push back.",
              },
            ],
          ],
          bullets: [
            "Less conflict",
            "More cooperation",
            "A more positive home environment",
          ],
        },
        {
          type: "numberedPoint",
          number: 4,
          hideNumber: true,
          title: "Confidence Increases — For Both Parent and Teen",
          paragraphs: [
            [
              {
                text: "Knowing that you have a plan and that you're moving in the right direction changes everything.",
              },
            ],
            [
              {
                text: "You feel more confident as a parent, and your teen feels more confident in their ability to succeed.",
              },
            ],
          ],
        },
      ],
      image: {
        src: BLOG_PARENT_AHAS_CHANGES_IMAGE,
        alt: BLOG_PARENT_AHAS_CHANGES_ALT,
        aspectClass: "aspect-[4/3]",
      },
    },
    {
      type: "heading",
      text: "Why Most Parents Don't Experience This Sooner",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "It's not because they don't care. It's because they're missing the tools.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "Most parenting advice is:" }],
    },
    {
      type: "bullets",
      items: [
        "Too general",
        "Not based on your specific situation",
        "Focused on the behavior, not the root cause",
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Teen Next Step is different. It's designed to give you the specific insight you need to understand your unique teen and your unique relationship with them.",
        },
      ],
    },
    {
      type: "heading",
      text: "A Clearer Way to See the Full Picture",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "The Teen Next Step Parent–Teen Alignment System is more than just a survey. It's a comprehensive look at the dynamics in your relationship and the internal factors driving your teen's behavior.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "It's the first step toward moving from \"I hope this works\" to \"I know exactly what's going on.\"",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "It provides clarity on:" }],
    },
    {
      type: "bullets",
      items: [
        "Internal motivation",
        "External pressure and expectations",
        "Alignment between parent and teen",
        "Specific steps for improvement",
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "It's the tool that turns the light on, so you can see the path forward clearly.",
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
          text: "\"Peace\" isn't the absence of conflict. It's the presence of clarity.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "When you have clarity, you have the power to change the dynamic in your home.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "You can move from frustration and confusion to a place of understanding, cooperation, and confidence.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "And that's when your teen can truly start to thrive—not just in school, but in life.",
        },
      ],
    },
    {
      type: "heading",
      text: "Next Step for Parents Who Want That Clarity",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "If you're ready to stop guessing and start leading with clarity, the FREE Parent Insight Assessment is the place to start.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "It's a simple, effective way to get the insight you need to help your teen take their next step with confidence.",
        },
      ],
    },
    {
      type: "bullets",
      items: [
        "Understand your teen's internal motivations",
        "Identify alignment gaps between you and your teen",
        "Create a clear roadmap for moving forward together",
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Don't wait for things to get worse. Get the clarity you need today to help your teen build a better future.",
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
