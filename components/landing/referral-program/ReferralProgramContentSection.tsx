import { LANDING_CONTENT_HEADING_SIZE } from "@/components/landing/landing-styles";
import { Typography } from "@/components/ui/typography";

import { REFERRAL_PROGRAM_CONTENT } from "@/components/landing/referral-program/content/referral-program-section";

const BODY_CLASS =
  "text-[clamp(15px,1.7vw,18px)] leading-[140%] text-black";
const OVERVIEW_HEADING_CLASS =
  `${LANDING_CONTENT_HEADING_SIZE} font-[800] leading-[131%] text-[#194783]`;

export default function ReferralProgramContentSection() {
  const { overviewHeading, description } = REFERRAL_PROGRAM_CONTENT;

  return (
    <section
      aria-label="Referral program overview"
      className="w-full bg-white"
    >
      <div className="mx-auto w-full max-w-[1785px] px-[49px] py-10 sm:py-12 lg:py-14">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center sm:gap-5">
          <Typography
            variant="h2"
            as="h2"
            className={OVERVIEW_HEADING_CLASS}
          >
            {overviewHeading}
          </Typography>
          <Typography variant="body-regular" as="p" className={BODY_CLASS}>
            {description}
          </Typography>
        </div>
      </div>
    </section>
  );
}
