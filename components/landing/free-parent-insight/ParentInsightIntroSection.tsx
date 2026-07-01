import Image from "next/image";

import {
  LANDING_CONTENT_HEADING_SIZE_LG,
  LANDING_SECTION_HEADING_PRIMARY,
} from "@/components/landing/landing-styles";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import ParentInsightAgeGroupSelection from "@/components/landing/free-parent-insight/ParentInsightAgeGroupSelection";
import {
  PARENT_INSIGHT_INTRO_CONTENT,
} from "@/components/landing/free-parent-insight/content/intro-section";

const BODY_CLASS =
  "text-[clamp(15px,1.7vw,18px)] leading-[140%] text-black";
const SECTION_HEADING_CLASS =
  `${LANDING_CONTENT_HEADING_SIZE_LG} font-[800] leading-[131%] text-primary w-fit border-b border-[#D9D9D9] pb-3`;

function SectionHeading({ number, title }: { number: number; title: string }) {
  return (
    <Typography variant="h2" as="h2" className={SECTION_HEADING_CLASS}>
      {number}. {title}
    </Typography>
  );
}

const RATING_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
const SAMPLE_STATEMENT_CLASS =
  "min-w-0 flex-1 text-[clamp(15px,1.7vw,18px)] font-medium leading-[140%] text-black";

function PreviewRatingDot({
  rating,
  selected,
  showLowLabel,
  showHighLabel,
  lowLabel,
  highLabel,
}: {
  rating: number;
  selected: boolean;
  showLowLabel: boolean;
  showHighLabel: boolean;
  lowLabel: string;
  highLabel: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 sm:gap-2">
      {showLowLabel ? (
        <span className="mb-0.5 text-[10px] font-medium leading-none text-primary sm:text-xs">
          {lowLabel}
        </span>
      ) : showHighLabel ? (
        <span className="mb-0.5 text-[10px] font-medium leading-none text-primary sm:text-xs">
          {highLabel}
        </span>
      ) : (
        <span
          aria-hidden
          className="invisible mb-0.5 text-[10px] leading-none sm:text-xs"
        >
          {lowLabel}
        </span>
      )}
      <span
        aria-hidden
        className={cn(
          "flex size-7 items-center justify-center rounded-full border text-xs font-semibold sm:size-8 sm:text-sm",
          selected
            ? "border-primary bg-primary text-white"
            : "border-[#b8c0d0] bg-white text-primary",
        )}
      >
        {rating}
      </span>
    </div>
  );
}

function PreviewRatingScale({
  selectedValue,
  lowLabel,
  highLabel,
}: {
  selectedValue: number;
  lowLabel: string;
  highLabel: string;
}) {
  return (
    <div
      aria-hidden
      className="flex w-full shrink-0 flex-col items-stretch gap-1 lg:w-auto lg:items-end"
    >
      <div className="flex w-full max-w-full items-end justify-center gap-1 overflow-x-auto pb-1 sm:justify-end sm:gap-1.5 lg:overflow-visible">
        {RATING_VALUES.map((rating) => (
          <PreviewRatingDot
            key={rating}
            rating={rating}
            selected={selectedValue === rating}
            showLowLabel={rating === 1}
            showHighLabel={rating === 10}
            lowLabel={lowLabel}
            highLabel={highLabel}
          />
        ))}
      </div>
    </div>
  );
}

export default function ParentInsightIntroSection() {
  const { header, sections } = PARENT_INSIGHT_INTRO_CONTENT;
  const [
    whatThisIs,
    whatThisMeasures,
    whatYouReceive,
    whyThisMatters,
    noMatterScores,
    howThisConnects,
    guidedSupport,
    importantNote,
    instructions,
    ageGroupSelection,
  ] = sections;

  return (
    <section
      id="parent-insight-intro"
      aria-labelledby="parent-insight-intro-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto w-full max-w-[1785px] px-4 py-10 sm:px-8 sm:py-12 lg:px-[49px] lg:py-14">
        <header className="space-y-4 text-center sm:space-y-5">
          <Typography
            id="parent-insight-intro-heading"
            variant="h1"
            as="h1"
            className={`${LANDING_SECTION_HEADING_PRIMARY} text-center`}
          >
            {header.title}
          </Typography>

          

          <div
            className="mt-6 h-px w-full bg-[#D9D9D9] sm:mt-8"
            aria-hidden
          />
        </header>

        <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
          <article className="space-y-4">
            <SectionHeading
              number={whatThisIs.number}
              title={whatThisIs.title}
            />

            {whatThisIs.paragraphs.map((paragraph) => (
              <Typography
                key={paragraph}
                variant="body-regular"
                as="p"
                className={BODY_CLASS}
              >
                {paragraph}
              </Typography>
            ))}
          </article>

          <article className="space-y-4">
            <SectionHeading
              number={whatThisMeasures.number}
              title={whatThisMeasures.title}
            />

            <Typography variant="body-regular" as="p" className={BODY_CLASS}>
              {whatThisMeasures.intro}
            </Typography>

            <div className="grid items-stretch gap-6 md:grid-cols-[minmax(0,1fr)_minmax(280px,44%)] md:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,50%)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(420px,55%)]">
              <div className="space-y-1.5">
                <Typography variant="body-regular" as="p" className={BODY_CLASS}>
                  {whatThisMeasures.listIntro}
                </Typography>
                <ul className={`list-disc space-y-1.5 pl-6 ${BODY_CLASS}`}>
                  {whatThisMeasures.metrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-[14rem] w-full overflow-hidden sm:min-h-[16rem] md:min-h-0 md:h-full">
                <Image
                  src={whatThisMeasures.image.src}
                  alt={whatThisMeasures.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 44vw, (max-width: 1280px) 50vw, 55vw"
                  className="object-contain object-left-top md:object-left"
                />
              </div>
            </div>

            {whatThisMeasures.closingParagraphs.map((paragraph) => (
              <Typography
                key={paragraph}
                variant="body-regular"
                as="p"
                className={BODY_CLASS}
              >
                {paragraph}
              </Typography>
            ))}
          </article>

          <article>
            <div className="grid items-center gap-6 md:grid-cols-[minmax(280px,44%)_minmax(0,1fr)] md:gap-8 lg:grid-cols-[minmax(360px,50%)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(420px,55%)_minmax(0,1fr)]">
              <div className="relative min-h-[14rem] w-full overflow-hidden rounded-lg sm:min-h-[16rem] md:min-h-[18rem] md:h-full lg:min-h-[24rem]">
                <Image
                  src={whatYouReceive.image.src}
                  alt={whatYouReceive.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 44vw, (max-width: 1280px) 50vw, 55vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="space-y-4">
                <SectionHeading
                  number={whatYouReceive.number}
                  title={whatYouReceive.title}
                />

                <Typography variant="body-regular" as="p" className={BODY_CLASS}>
                  {whatYouReceive.intro}
                </Typography>

                <ul className={`list-disc space-y-1.5 pl-6 ${BODY_CLASS}`}>
                  {whatYouReceive.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <Typography variant="body-regular" as="p" className={BODY_CLASS}>
                  {whatYouReceive.closing}
                </Typography>
              </div>
            </div>
          </article>

          <article>
            <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(280px,44%)] md:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,45%)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(420px,48%)]">
              <div className="space-y-4">
                <SectionHeading
                  number={whyThisMatters.number}
                  title={whyThisMatters.title}
                />

                <Typography variant="body-regular" as="p" className={BODY_CLASS}>
                  {whyThisMatters.intro}
                </Typography>

                <Typography variant="body-regular" as="p" className={BODY_CLASS}>
                  {whyThisMatters.listIntro}
                </Typography>

                <ul className={`list-disc space-y-1.5 pl-6 ${BODY_CLASS}`}>
                  {whyThisMatters.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <Typography variant="body-regular" as="p" className={BODY_CLASS}>
                  {whyThisMatters.closing}
                </Typography>
              </div>

              <div className="relative min-h-[10rem] w-full overflow-hidden sm:min-h-[12rem] md:min-h-[14rem] md:h-full lg:min-h-[16rem]">
                <Image
                  src={whyThisMatters.image.src}
                  alt={whyThisMatters.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 44vw, (max-width: 1280px) 45vw, 48vw"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </article>

          <article>
            <div className="grid items-stretch gap-6 md:grid-cols-[minmax(280px,44%)_minmax(0,1fr)] md:gap-8 lg:grid-cols-[minmax(360px,50%)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(420px,55%)_minmax(0,1fr)]">
              <div className="relative min-h-[18rem] w-full overflow-hidden rounded-lg sm:min-h-[22rem] md:min-h-[28rem] lg:min-h-[32rem] xl:min-h-[36rem]">
                <Image
                  src={noMatterScores.image.src}
                  alt={noMatterScores.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 44vw, (max-width: 1280px) 50vw, 55vw"
                  className="object-contain object-center"
                />
              </div>

              <div className="space-y-4">
                <SectionHeading
                  number={noMatterScores.number}
                  title={noMatterScores.title}
                />

                {noMatterScores.paragraphs.map((paragraph) => (
                  <Typography
                    key={paragraph}
                    variant="body-regular"
                    as="p"
                    className={BODY_CLASS}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </div>
            </div>
          </article>

          <article className="space-y-4">
            <SectionHeading
              number={howThisConnects.number}
              title={howThisConnects.title}
            />

            {howThisConnects.paragraphs.map((paragraph) => (
              <Typography
                key={paragraph}
                variant="body-regular"
                as="p"
                className={BODY_CLASS}
              >
                {paragraph}
              </Typography>
            ))}

            <Typography variant="body-regular" as="p" className={BODY_CLASS}>
              {howThisConnects.listIntro}
            </Typography>

            <ul className={`list-disc space-y-1.5 pl-6 ${BODY_CLASS}`}>
              {howThisConnects.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {howThisConnects.closingParagraphs.map((paragraph) => (
              <Typography
                key={paragraph}
                variant="body-regular"
                as="p"
                className={BODY_CLASS}
              >
                {paragraph}
              </Typography>
            ))}
          </article>

          <article>
            <div className="grid items-center gap-6 md:grid-cols-[minmax(280px,44%)_minmax(0,1fr)] md:gap-8 lg:grid-cols-[minmax(360px,50%)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(420px,55%)_minmax(0,1fr)]">
              <div className="relative min-h-[14rem] w-full overflow-hidden rounded-lg sm:min-h-[16rem] md:min-h-[18rem] md:h-full lg:min-h-[24rem]">
                <Image
                  src={guidedSupport.image.src}
                  alt={guidedSupport.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 44vw, (max-width: 1280px) 50vw, 55vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="space-y-4">
                <SectionHeading
                  number={guidedSupport.number}
                  title={guidedSupport.title}
                />

                <Typography variant="body-regular" as="p" className={BODY_CLASS}>
                  {guidedSupport.intro}
                </Typography>

                <Typography variant="body-regular" as="p" className={BODY_CLASS}>
                  {guidedSupport.listIntro}
                </Typography>

                <ul className={`list-disc space-y-1.5 pl-6 ${BODY_CLASS}`}>
                  {guidedSupport.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {guidedSupport.closingParagraphs.map((paragraph) => (
                  <Typography
                    key={paragraph}
                    variant="body-regular"
                    as="p"
                    className={BODY_CLASS}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </div>
            </div>
          </article>

          <article className="space-y-4">
            <SectionHeading
              number={importantNote.number}
              title={importantNote.title}
            />

            {importantNote.paragraphs.map((paragraph) => (
              <Typography
                key={paragraph}
                variant="body-regular"
                as="p"
                className={BODY_CLASS}
              >
                {paragraph}
              </Typography>
            ))}
          </article>

          <article>
            <div className="grid items-center gap-6 md:grid-cols-[minmax(240px,32%)_minmax(0,1fr)] md:gap-8 lg:grid-cols-[minmax(280px,34%)_minmax(0,1fr)] lg:gap-10">
              <div className="space-y-4 self-center">
                <SectionHeading
                  number={instructions.number}
                  title={instructions.title}
                />

                <Typography variant="body-regular" as="p" className={BODY_CLASS}>
                  {instructions.intro}
                </Typography>

                <ul className={`list-disc space-y-1.5 pl-6 ${BODY_CLASS}`}>
                  {instructions.scaleItems.map((item) => (
                    <li key={item.value}>
                      <span className="font-semibold text-primary">
                        {item.value} =
                      </span>{" "}
                      {item.label}
                    </li>
                  ))}
                </ul>

                <Typography variant="body-regular" as="p" className={BODY_CLASS}>
                  {instructions.closing}
                </Typography>
              </div>

              <div
                className="divide-y divide-[#e8e8e8]"
                aria-label="Sample assessment rating preview"
              >
                {instructions.sampleStatements.map((sample) => (
                  <div
                    key={sample.statement}
                    className="flex flex-col gap-4 py-6 first:pt-0 last:pb-0 sm:py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
                  >
                    <Typography
                      variant="body-regular"
                      as="p"
                      className={SAMPLE_STATEMENT_CLASS}
                    >
                      {sample.statement}
                    </Typography>

                    <PreviewRatingScale
                      selectedValue={sample.selectedValue}
                      lowLabel={instructions.scaleLabels.low}
                      highLabel={instructions.scaleLabels.high}
                    />
                  </div>
                ))}
              </div>
            </div>
          </article>

          <ParentInsightAgeGroupSelection section={ageGroupSelection} />
        </div>
      </div>
    </section>
  );
}
