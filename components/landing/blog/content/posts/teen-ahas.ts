import type { BlogPost } from "@/components/landing/blog/types";
import { BLOG_DETAIL_HERO_ALT } from "@/components/landing/blog/content/blog-assets";

const TEEN_AHAS_HERO_IMAGE = "/images/landing-page/blog/teen-aha-super.png";
const TEEN_AHA_MOMENT_IMAGE = "/images/landing-page/blog/teen-aha.png";
const TEEN_ENGAGEMENT_IMAGE =
  "/images/landing-page/blog/engagement-increase.png";

export const TEEN_AHAS_POST: BlogPost = {
  slug: "teen-ahas-what-fits",
  title: "Teen Aha's: When Teens Realize What Actually Fits Them",
  titleLines: [
    "Teen Aha's:",
    {
      text: "When Teens Realize What Actually Fits Them",
      nowrap: true,
    },
  ],
  excerpt:
    "Teens don't need more pressure—they need something to click. Learn what creates that shift and how teens begin to take real ownership of their future.",
  heroImage: TEEN_AHAS_HERO_IMAGE,
  heroImageAlt: BLOG_DETAIL_HERO_ALT,
  publishedAt: "2026-01-25",
  blocks: [
    {
      type: "heading",
      text: "Most Teens Aren’t Unmotivated — They’re Disconnected",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "From a parent’s perspective, it can look like:",
        },
      ],
    },
    {
      type: "bullets",
      items: [
        "Lack of effort",
        "Indecision",
        "Avoidance of future conversations",
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "But from a teen’s perspective, it often feels very different." }],
    },
    {
      type: "paragraph",
      segments: [{ text: "Many teens are not refusing to move forward." }],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "They simply don’t feel:",
        },
      ],
    },
    {
      type: "bullets",
      items: [
        "Clear about their direction",
        "Confident in their abilities",
        "Connected to the options in front of them",
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "And when that connection is missing, motivation rarely follows.",
        },
      ],
    },
    {
      type: "heading",
      text: "What Creates a Teen “Aha” Moment",
    },
    {
      type: "twoColumn",
      imageSize: "large",
      left: [
        {
          type: "paragraph",
          segments: [
            {
              text: "Teens don’t typically change because they are told what to do.",
            },
          ],
        },
        {
          type: "paragraph",
          segments: [
            {
              text: "They change when something clicks internally.",
            },
          ],
        },
        {
          type: "paragraph",
          segments: [{ text: "A moment of realization:" }],
        },
        {
          type: "bullets",
          items: [
            "“This makes sense now”",
            "“I can see where I fit”",
            "“I actually understand what comes next”",
          ],
        },
        {
          type: "paragraph",
          segments: [{ text: "These are the moments where ownership begins." }],
        },
        {
          type: "paragraph",
          segments: [{ text: "And those moments don’t happen randomly." }],
        },
        {
          type: "paragraph",
          segments: [
            { text: "They happen when teens are given a clear, structured way to:" },
          ],
        },
        {
          type: "bullets",
          items: [
            "understand themselves",
            "see their options",
            "and feel involved in the process",
          ],
        },
      ],
      image: {
        src: TEEN_AHA_MOMENT_IMAGE,
        alt: "Teen having an aha moment as clarity and direction come into focus",
        aspectClass: "aspect-[623/431]",
      },
    },
    {
      type: "heading",
      text: "Where These Aha Moments Come From",
    },
    {
      type: "paragraph",
      segments: [{ text: "This is where a system like the " }],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Teen Next Step 8-Part Parent–Teen Alignment System",
          bold: true,
        },
        { text: " becomes powerful." },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Instead of being told what their future should look like, teens:",
        },
      ],
    },
    {
      type: "bullets",
      items: [
        "Participate in the process",
        "Express their own perspective",
        "And see how their thinking compares with their parent’s",
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "That shift—from being directed to being involved—creates clarity.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "And clarity creates ownership." }],
    },
    {
      type: "heading",
      text: "Common Teen Aha Moments (And How They Become Clear)",
    },
    {
      type: "numberedPoint",
      number: 1,
      title: "\"I Actually See What I’m Good At\"",
      paragraphs: [
        [
          {
            text: "Many teens have strengths—but they haven’t clearly identified them.",
          },
        ],
      ],
      closing: [
        [{ text: "How this becomes clear:", bold: true }],
        [
          {
            text: "Through structured self-assessment, teens begin to recognize patterns in their abilities, interests, and tendencies.",
          },
        ],
        [{ text: "This builds confidence." }],
      ],
    },
    {
      type: "numberedPoint",
      number: 2,
      title: "\"I Understand What’s Expected of Me — and Why\"",
      paragraphs: [
        [
          {
            text: "When expectations feel unclear or imposed, teens resist.",
          },
        ],
      ],
      closing: [
        [{ text: "How this becomes clear:", bold: true }],
        [
          {
            text: "By seeing both their own perspective and their parent’s side-by-side, teens gain a better understanding of expectations—and the reasoning behind them.",
          },
        ],
      ],
    },
    {
      type: "numberedPoint",
      number: 3,
      title: "\"I Have a Say in This\"",
      paragraphs: [
        [
          {
            text: "When teens feel decisions are being made for them, engagement drops.",
          },
        ],
      ],
      closing: [
        [{ text: "How this becomes clear:", bold: true }],
        [
          {
            text: "The Teen Next Step system gives teens a voice in the process, helping them feel included rather than directed.",
          },
        ],
      ],
    },
    {
      type: "numberedPoint",
      number: 4,
      title: "\"I’m Not as Behind (or as Ahead) as I Thought\"",
      paragraphs: [
        [
          {
            text: "Teens often compare themselves to peers or unrealistic standards.",
          },
        ],
      ],
      closing: [
        [{ text: "How this becomes clear:", bold: true }],
        [
          {
            text: "A structured alignment view helps them see where they actually stand—objectively.",
          },
        ],
        [
          {
            text: "This reduces unnecessary pressure and builds realistic confidence.",
          },
        ],
      ],
    },
    {
      type: "numberedPoint",
      number: 5,
      title: "\"I Know What to Do Next\"",
      paragraphs: [
        [{ text: "Perhaps the most important realization." }],
        [{ text: "Without a clear next step, teens stall." }],
      ],
      closing: [
        [{ text: "How this becomes clear:", bold: true }],
        [
          {
            text: "The system translates insights into a simple, structured roadmap—so teens can move forward with direction, not guesswork.",
          },
        ],
      ],
    },
    {
      type: "heading",
      text: "What Changes When Teens Experience These Aha Moments",
      className: "mb-4 lg:mb-6",
    },
    {
      type: "twoColumn",
      imageSize: "large",
      left: [
        {
          type: "numberedPoint",
          number: 1,
          hideNumber: true,
          title: "Engagement Increases",
          paragraphs: [
            [
              {
                text: "Teens begin to participate more actively in conversations about their future.",
              },
            ],
          ],
        },
        {
          type: "numberedPoint",
          number: 2,
          hideNumber: true,
          title: "Resistance Decreases",
          paragraphs: [[{ text: "When teens feel:" }]],
          bullets: ["Heard", "Understood", "Involved"],
          closing: [[{ text: "They are far less likely to push back." }]],
        },
        {
          type: "numberedPoint",
          number: 3,
          hideNumber: true,
          title: "Confidence Begins to Build",
          paragraphs: [
            [{ text: "Clarity replaces uncertainty." }],
            [
              {
                text: "And with clarity comes a greater willingness to take action.",
              },
            ],
          ],
        },
        {
          type: "numberedPoint",
          number: 4,
          hideNumber: true,
          title: "Ownership Starts to Form",
          paragraphs: [
            [{ text: "Instead of:" }],
            [{ text: "“I have to do this...”" }],
            [{ text: "It becomes:" }],
            [{ text: "“I understand why this makes sense.”" }],
          ],
          closing: [[{ text: "That shift changes everything." }]],
        },
      ],
      image: {
        src: TEEN_ENGAGEMENT_IMAGE,
        alt: "Infographic showing engagement increasing and resistance decreasing when teens experience aha moments",
        aspectClass: "aspect-[623/431]",
      },
    },
    {
      type: "heading",
      text: "Why Most Teens Don’t Experience This",
    },
    {
      type: "paragraph",
      segments: [{ text: "Not because they lack ability." }],
    },
    {
      type: "paragraph",
      segments: [{ text: "But because most traditional approaches:" }],
    },
    {
      type: "bullets",
      items: [
        "Tell teens what they should do",
        "Rush decisions before clarity exists",
        "Leave teens out of the process",
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Without structure, teens are left trying to figure things out on their own—while being expected to make important decisions.",
        },
      ],
    },
    {
      type: "heading",
      text: "A Better Way to Help Teens Move Forward",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "The Teen Next Step 8-Part Parent–Teen Alignment System is designed to create these moments intentionally.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "By combining:" }],
    },
    {
      type: "bullets",
      items: [
        "Teen self-assessment",
        "Parent input",
        "Alignment comparison",
        "And a structured roadmap",
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "It gives teens something they rarely have:" }],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "A clear, realistic understanding of themselves and a direction they can actually connect with.",
        },
      ],
    },
    {
      type: "heading",
      text: "Final Thought",
    },
    {
      type: "paragraph",
      segments: [{ text: "Teens don’t need more pressure." }],
    },
    {
      type: "paragraph",
      segments: [
        { text: "They need more clarity, structure, and involvement." },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Because when a teen finally sees where they fit—and what comes next—",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "They don’t have to be pushed forward." }],
    },
    {
      type: "paragraph",
      segments: [{ text: "They begin to move forward on their own." }],
    },
    {
      type: "heading",
      text: "Next Step for Parents Who Want to Help Their Teen Get There",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "If your teen seems uncertain, unmotivated, or disengaged, the first step isn’t pushing harder.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [{ text: "It’s helping them see more clearly." }],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "A short Parent Alignment Insight can begin that process—followed by a structured system that helps both you and your teen move forward with clarity, alignment, and confidence.",
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
