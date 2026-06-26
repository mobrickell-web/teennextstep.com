import type { BlogPost } from "@/components/landing/blog/types";
import {
  BLOG_DETAIL_HERO_ALT,
  BLOG_DETAIL_HERO_IMAGE,
} from "@/components/landing/blog/content/blog-assets";

export const TEEN_AHAS_POST: BlogPost = {
  slug: "teen-ahas-what-fits",
  title: "Teen Aha's: When Teens Realize What Actually Fits Them",
  excerpt:
    "Teens don't need more pressure—they need something to click. Learn what creates that shift and how teens begin to take real ownership of their future.",
  heroImage: BLOG_DETAIL_HERO_IMAGE,
  heroImageAlt: BLOG_DETAIL_HERO_ALT,
  publishedAt: "2026-01-25",
  blocks: [
    {
      type: "paragraph",
      segments: [
        {
          text: "Teens often know when something doesn't fit—they just don't always have the words or confidence to say it out loud.",
        },
      ],
    },
    {
      type: "heading",
      text: "What Creates the \"Aha\" Moment",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "The shift usually happens when teens connect their choices to something that feels ",
        },
        { text: "personally meaningful", bold: true },
        { text: ", not just expected by others." },
      ],
    },
    {
      type: "bullets",
      items: [
        "Exposure to real options—not just labels or stereotypes",
        "Space to explore without immediate commitment",
        "Honest conversation without judgment",
        "A sense that their perspective actually matters in the decision",
      ],
    },
    {
      type: "heading",
      text: "From Passive Agreement to Real Ownership",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "When teens feel heard, they're more likely to engage—not because pressure increased, but because the path starts to feel like theirs.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "That ownership is what turns short-term compliance into long-term motivation—and it's one of the core outcomes Teen Next Step is designed to support.",
        },
      ],
    },
  ],
};
