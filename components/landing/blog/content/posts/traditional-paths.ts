import type { BlogPost } from "@/components/landing/blog/types";
import {
  BLOG_DETAIL_HERO_ALT,
  BLOG_DETAIL_HERO_IMAGE,
} from "@/components/landing/blog/content/blog-assets";

export const TRADITIONAL_PATHS_POST: BlogPost = {
  slug: "traditional-paths-vs-teen-next-step",
  title: "Traditional Paths vs. Teen Next Step: Alignment Before Decisions",
  excerpt:
    "Most teens are pushed into decisions before clarity exists. See a smarter, more structured way to help your teen choose a path that actually fits.",
  heroImage: BLOG_DETAIL_HERO_IMAGE,
  heroImageAlt: BLOG_DETAIL_HERO_ALT,
  publishedAt: "2026-01-15",
  blocks: [
    {
      type: "paragraph",
      segments: [
        {
          text: "Traditional guidance often jumps straight to outcomes—pick a track, apply, commit—before teens and parents have compared what they each see.",
        },
      ],
    },
    {
      type: "heading",
      text: "Why Decisions Without Alignment Fail",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "When clarity comes after commitment, teens may follow the plan externally while disengaging internally. Parents may interpret that as lack of effort rather than lack of alignment.",
        },
      ],
    },
    {
      type: "bullets",
      items: [
        "Paths chosen because they look safe—not because they fit",
        "Parent and teen priorities never explicitly compared",
        "Major commitments made before readiness is understood",
        "Motivation drops when the path doesn't feel owned",
      ],
    },
    {
      type: "heading",
      text: "Alignment Before Decisions",
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "Teen Next Step flips the order: measure direction, readiness, and decision awareness first—then choose next steps together with clarity.",
        },
      ],
    },
    {
      type: "paragraph",
      segments: [
        {
          text: "That structure helps families move forward with confidence, not just compliance—and reduces the cost of choosing the wrong path too early.",
        },
      ],
    },
  ],
};
