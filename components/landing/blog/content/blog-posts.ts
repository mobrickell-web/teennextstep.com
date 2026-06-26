import { AI_ALIGNMENT_POST } from "@/components/landing/blog/content/posts/ai-alignment";
import { MOTIVATION_CRISIS_POST } from "@/components/landing/blog/content/posts/motivation-crisis";
import { PARENT_AHAS_POST } from "@/components/landing/blog/content/posts/parent-ahas";
import { TEEN_AHAS_POST } from "@/components/landing/blog/content/posts/teen-ahas";
import { TRADITIONAL_PATHS_POST } from "@/components/landing/blog/content/posts/traditional-paths";
import type { BlogPost } from "@/components/landing/blog/types";

/** Registry of insight/blog articles — matched to homepage insight cards. */
export const BLOG_POSTS: BlogPost[] = [
  MOTIVATION_CRISIS_POST,
  PARENT_AHAS_POST,
  TEEN_AHAS_POST,
  TRADITIONAL_PATHS_POST,
  AI_ALIGNMENT_POST,
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
