import Image from "next/image";

import { Typography } from "@/components/ui/typography";

import {
  TEEN_STATEMENT_HERO_CONTENT,
  TEEN_STATEMENT_HERO_IMAGE,
} from "@/components/landing/teen-statement-16-19/content/hero-section";

export default function TeenStatement1619HeroSection() {
  const { heading } = TEEN_STATEMENT_HERO_CONTENT;

  return (
    <section
      id="teen-statement-16-19-hero"
      aria-labelledby="teen-statement-16-19-hero-heading"
      className="relative flex aspect-[1959/341] w-full items-center justify-center overflow-hidden"
    >
      <Image
        src={TEEN_STATEMENT_HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative z-10 flex w-[91%] items-center justify-center rounded-[9px] bg-[#FFFFFF33] px-6 py-6 text-center backdrop-blur-[22px] sm:py-8 lg:py-10">
        <Typography
          id="teen-statement-16-19-hero-heading"
          variant="h1"
          as="h1"
          className="font-[800] leading-[100%] text-white text-[clamp(20px,3.5vw,53.41px)]"
        >
          {heading}
        </Typography>
      </div>
    </section>
  );
}
