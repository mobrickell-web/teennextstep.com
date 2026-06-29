import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { LandingCtaBlock } from "@/components/landing/LandingCtaBlock";
import { Typography } from "@/components/ui/typography";

import {
  SUPER_SECTION_CONTENT,
  SUPER_SECTION_IMAGE,
} from "@/components/landing/content/super-section";

type BulletItem = (typeof SUPER_SECTION_CONTENT.bullets)[number];

function renderBulletText(bullet: BulletItem) {
  if (typeof bullet === "string") {
    return bullet;
  }

  const [before, after] = bullet.text.split(bullet.emphasis);

  return (
    <>
      {before}
      <strong className="font-semibold text-white">{bullet.emphasis}</strong>
      {after}
    </>
  );
}

export default function SuperSection() {
  const { headline, subtitle, bullets, primaryCta, secondaryCta } =
    SUPER_SECTION_CONTENT;

  return (
    <section
      id="hero"
      aria-labelledby="super-section-heading"
      className="relative w-full overflow-hidden bg-primary"
    >
      <div className="absolute inset-0">
        <Image
          src={SUPER_SECTION_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 max-lg:bg-gradient-to-r max-lg:from-primary max-lg:via-primary/30 max-lg:to-primary/25" />

      <div className="relative z-10 w-full px-4 py-10 sm:px-6 sm:py-12 lg:min-h-[640px] lg:px-8 lg:py-16 xl:min-h-[700px] xl:px-10">
        <div className="max-w-2xl space-y-6 lg:max-w-4xl lg:space-y-8">
          <div className="space-y-3 lg:space-y-4">
            <Typography
              id="super-section-heading"
              variant="h1"
              as="h1"
              className="text-[20px] leading-[1.12] font-extrabold text-white sm:text-[44px] lg:text-[52px] xl:text-[56px]"
            >
              <span className="block">{headline.before}</span>
              <span className="block sm:whitespace-nowrap">
                <span className="text-white">{headline.beforeContinued}</span>{" "}
                <span className="text-warning">{headline.highlight}</span>{" "}
                {headline.after}
              </span>
            </Typography>

            <Typography
              variant="h5"
              as="p"
              className="font-bold text-secondary text-[20px] leading-tight sm:text-[24px] lg:text-[28px] xl:text-[32px]"
            >
              {subtitle}
            </Typography>
          </div>

          <ul className="space-y-4">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex gap-3">
                <ChevronRight
                  className="mt-1 size-4 shrink-0 text-secondary sm:size-5"
                  aria-hidden
                />
                <Typography
                  variant="body-regular"
                  as="p"
                  className="text-[18px] font-medium leading-relaxed text-white"
                >
                  {renderBulletText(bullet)}
                </Typography>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex w-full flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-4 lg:mt-8 lg:gap-5">
          <LandingCtaBlock
            href={primaryCta.href}
            label={primaryCta.label}
            caption={primaryCta.caption}
            variant="primary"
            theme="dark"
            className="items-center sm:items-start"
          />
          <LandingCtaBlock
            href={secondaryCta.href}
            label={secondaryCta.label}
            caption={secondaryCta.caption}
            variant="secondary"
            theme="dark"
            className="items-center sm:items-start"
          />
        </div>
      </div>
    </section>
  );
}
