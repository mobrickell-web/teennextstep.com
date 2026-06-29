import BlogPostContent from "@/components/landing/blog/BlogPostContent";
import BlogPostFooter from "@/components/landing/blog/BlogPostFooter";
import BlogPostHero from "@/components/landing/blog/BlogPostHero";
import type { BlogPost } from "@/components/landing/blog/types";

type BlogPostPageProps = {
  post: BlogPost;
};

export default function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <div className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1200px] overflow-hidden rounded-[11.06px]">
        <BlogPostHero
          title={post.title}
          titleLines={post.titleLines}
          titleInlineOnMobile={post.titleInlineOnMobile}
          heroImage={post.heroImage}
          heroImageAlt={post.heroImageAlt}
        />

        <div className="bg-[#EAEAEA] pt-12 sm:pt-20 lg:pt-24">
          <BlogPostContent blocks={post.blocks} />
          {post.footerCta ? <BlogPostFooter cta={post.footerCta} /> : null}
        </div>
      </div>
    </div>
  );
}
