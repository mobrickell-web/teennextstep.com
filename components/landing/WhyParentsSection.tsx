import Image from "next/image";

import { LandingSectionNumber } from "@/components/landing/LandingSectionNumber";
import {
  LANDING_SECTION_BODY_CLASS,
  LANDING_SECTION_HEADING_PRIMARY,
} from "@/components/landing/landing-styles";
import { Typography } from "@/components/ui/typography";

import {
  WHY_PARENTS_IMAGE_SIZE,
  WHY_PARENTS_SECTION_CONTENT,
} from "@/components/landing/content/why-parents-section";

type StepItem = (typeof WHY_PARENTS_SECTION_CONTENT.steps)[number];

function renderStepText(step: StepItem) {
  if (typeof step === "string") {
    return step;
  }

  const [before, after] = step.text.split(step.emphasis);

  return (
    <>
      {before}
      <span className="font-semibold uppercase">{step.emphasis}</span>
      {after}
    </>
  );
}

export default function WhyParentsSection() {
  const {
    sectionNumber,
    heading,
    intro,
    misalignmentResults,
    callout,
    processIntro,
    steps,
    image,
  } = WHY_PARENTS_SECTION_CONTENT;

  return (
    <section
      id="why-parents-trust-us"
      aria-labelledby="why-parents-heading"
      className="relative w-full overflow-hidden bg-[#EAEAEA] py-12 sm:py-14 lg:py-16"
    >
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <LandingSectionNumber>{sectionNumber}</LandingSectionNumber>

        <div className="relative z-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div
            className="relative order-1 mx-auto h-[min(400px,70vw)] w-full max-w-[688px] shrink-0 overflow-hidden bg-bg-subtle sm:h-[min(520px,80vw)] lg:col-start-2 lg:row-start-2 lg:mx-0 lg:ml-auto lg:h-[min(660px,90vw)]"
            style={{ borderRadius: WHY_PARENTS_IMAGE_SIZE.borderRadius }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 688px"
              className="object-cover opacity-100"
            />
          </div>

          <Typography
            id="why-parents-heading"
            variant="h2"
            as="h2"
            className={`order-2 w-full max-w-5xl text-balance text-left leading-[131%] lg:col-span-2 lg:row-start-1 lg:mx-auto lg:text-center ${LANDING_SECTION_HEADING_PRIMARY}`}
          >
            <span className="inline md:block">{heading.line1} </span>
            <span className="inline md:block">{heading.line2}</span>
          </Typography>

          <div className="order-3 flex flex-col gap-5 sm:gap-6 lg:col-start-1 lg:row-start-2">
            <Typography
              variant="body-regular"
              as="p"
              className={LANDING_SECTION_BODY_CLASS}
            >
              <strong className="font-bold">{intro.emphasis}</strong>
              {intro.text.slice(intro.emphasis.length)}
            </Typography>

            <ul className={`list-disc space-y-1 pl-5 ${LANDING_SECTION_BODY_CLASS}`}>
              {misalignmentResults.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <Typography
              variant="body-semibold"
              as="p"
              className={`font-bold text-primary ${LANDING_SECTION_BODY_CLASS}`}
            >
              {callout}
            </Typography>

            <Typography
              variant="body-regular"
              as="p"
              className={LANDING_SECTION_BODY_CLASS}
            >
              {processIntro}
            </Typography>

            <ol className={`list-decimal space-y-2 pl-5 ${LANDING_SECTION_BODY_CLASS}`}>
              {steps.map((step, index) => (
                <li key={index}>{renderStepText(step)}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
