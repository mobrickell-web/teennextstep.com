import { LandingCtaBlock } from "@/components/landing/LandingCtaBlock";
import type { BlogPostFooterCta } from "@/components/landing/blog/types";

type BlogPostFooterProps = {
  cta: BlogPostFooterCta;
};

export default function BlogPostFooter({ cta }: BlogPostFooterProps) {
  return (
    <div className="border-t border-[#EAEAEA] bg-[#EAEAEA] px-4 pt-4 pb-8 sm:px-8 sm:pt-5 sm:pb-10 md:px-[49px]">
      <div className="flex w-full flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:items-start sm:justify-center sm:gap-3 lg:gap-4">
        <LandingCtaBlock
          href={cta.primary.href}
          label={cta.primary.label}
          caption={cta.primary.caption ?? ""}
          variant="primary"
          theme="light"
          className="w-full sm:w-fit"
          labelClassName="w-full rounded-[7.55px] whitespace-normal text-[14px] font-[800] leading-[160%] tracking-[-0.012em] sm:w-fit sm:whitespace-nowrap sm:text-[14px]"
          captionClassName="text-[13px] font-normal leading-snug tracking-normal text-[#1B2A49] sm:text-[12px] sm:leading-snug"
        />
        <LandingCtaBlock
          href={cta.secondary.href}
          label={cta.secondary.label}
          caption={cta.secondary.caption ?? ""}
          variant="secondary"
          theme="light"
          className="w-full sm:w-fit"
          labelClassName="w-full rounded-[7.55px] whitespace-normal border-primary bg-white text-[14px] font-[800] leading-[160%] tracking-[-0.012em] text-primary hover:bg-primary/5 sm:w-fit sm:whitespace-nowrap sm:bg-transparent sm:text-[14px]"
          captionClassName="text-[13px] font-normal leading-snug tracking-normal text-primary sm:text-[12px] sm:leading-snug"
        />
        <LandingCtaBlock
          href={cta.tertiary.href}
          label={cta.tertiary.label}
          caption={cta.tertiary.caption ?? ""}
          variant="secondary"
          theme="light"
          className="w-full sm:w-fit"
          labelClassName="w-full rounded-[7.58px] whitespace-normal border-[1.79px] border-primary bg-white text-[14px] font-[800] leading-[160%] tracking-[-0.012em] text-primary hover:bg-primary/5 sm:w-fit sm:whitespace-nowrap sm:bg-transparent sm:text-[14px]"
        />
      </div>
    </div>
  );
}
