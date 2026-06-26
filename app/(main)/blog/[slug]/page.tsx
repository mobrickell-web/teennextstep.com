import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { BlogPostPage, getAllBlogSlugs, getBlogPostBySlug } from "@/components/landing";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Blog Post Not Found" };
  }

  return {
    title: `${post.title} | Teen Next`,
    description: post.excerpt,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPage post={post} />;
}
