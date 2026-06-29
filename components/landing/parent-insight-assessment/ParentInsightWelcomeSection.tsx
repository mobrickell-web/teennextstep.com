import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { LANDING_CONTENT_HEADING_SIZE_LG } from "@/components/landing/landing-styles";
import { Typography } from "@/components/ui/typography";

import { PARENT_INSIGHT_WELCOME_CONTENT } from "@/components/landing/parent-insight-assessment/content/welcome-section";

/**
 * Renders body copy and bolds any phrase listed in `emphasis`, coloring it
 * with the primary navy to match the design's inline links.
 */
function EmphasizedText({
  text,
  emphasis,
}: {
  text: string;
  emphasis: readonly string[];
}) {
  if (!emphasis.length) return <>{text}</>;

  // Split on the emphasized phrases while keeping them in the result.
  const pattern = new RegExp(
    `(${emphasis
      .map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})`,
    "g",
  );

  return (
    <>
      {text.split(pattern).map((part, index) =>
        emphasis.includes(part) ? (
          <span key={index} className="font-bold text-primary">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

function ImagePlaceholder({
  src,
  alt,
  className,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[8px] bg-[#E4E4E4] ${className ?? ""}`}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      ) : (
        <span className="sr-only">{alt}</span>
      )}
    </div>
  );
}

export default function ParentInsightWelcomeSection() {
  const {
    heading,
    subheading,
    highlights,
    readyHeading,
    steps,
    discover,
    getStarted,
  } = PARENT_INSIGHT_WELCOME_CONTENT;

  const [stepOne, stepTwo, stepThree] = steps;

  return (
    <div className="w-full bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      {/* Grey outer rectangle */}
      <div className="mx-auto box-border w-full max-w-[1560px] rounded-[12px] bg-[#efefef] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14 xl:px-12">
        {/* White inner card */}
        <div className="mx-auto w-full max-w-[1350px] rounded-[12px] bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <Typography
            id="parent-insight-welcome-heading"
            variant="h2"
            as="h1"
            className={`text-center leading-[131%] text-primary ${LANDING_CONTENT_HEADING_SIZE_LG} font-[800]`}
          >
            {heading}
          </Typography>

          {/* Divider between heading and subheading */}
          <hr className="mx-auto mt-4 w-full max-w-[810px] border-0 border-t-[1.71px] border-[#D9D9D9] sm:mt-5" />

          <Typography
            variant="h5"
            as="p"
            className="mt-4 text-center text-[clamp(14px,2vw,22px)] font-semibold leading-[131%] text-secondary sm:mt-5 lg:whitespace-nowrap"
          >
            {subheading}
          </Typography>

          {/* Three highlight icons */}
          <ul className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-[#D9D9D9]">
            {highlights.map((highlight) => (
              <li
                key={highlight.text}
                className="flex flex-col items-center px-2 text-center sm:px-6"
              >
                <Image
                  src={highlight.icon}
                  alt={highlight.iconAlt}
                  width={120}
                  height={106}
                  className="h-[80px] w-auto object-contain sm:h-[96px] lg:h-[110px]"
                />
                <hr
                  className="mt-4 w-full border-0 border-t-[1.71px] border-[#D9D9D9]"
                  style={{ maxWidth: `${highlight.lineWidth}px` }}
                />
                <Typography
                  variant="muted-sm"
                  as="p"
                  className="mt-3 max-w-[320px] text-center text-[clamp(15px,2.2vw,23.92px)] font-medium leading-[131%] tracking-normal text-[#194783]"
                >
                  {highlight.text}
                </Typography>
              </li>
            ))}
          </ul>

          {/* Divider above "Ready to Get Started?" */}
          <hr className="mx-auto mt-8 w-full max-w-[1200px] border-0 border-t-[1.71px] border-[#D9D9D9]" />

          <Typography
            variant="h2"
            as="h2"
            className="mt-6 text-center text-[20px] font-[800] leading-[110%] tracking-normal text-[#1B2A49] md:text-[clamp(26px,5vw,44.59px)]"
          >
            {readyHeading}
          </Typography>

          {/* Divider below "Ready to Get Started?" */}
          <hr className="mx-auto mt-6 w-full max-w-[1200px] border-0 border-t-[1.71px] border-[#D9D9D9]" />

          <div className="mt-6 w-full max-w-[1200px] space-y-12 sm:mt-2 lg:space-y-10">
            {/* Step 1 */}
            <article className="relative">
              <div className="relative z-10 sm:mt-10">
                <Typography
                  variant="body-semibold"
                  as="h3"
                  className="text-[clamp(20px,3.2vw,30.86px)] font-[800] leading-[131%] tracking-normal"
                >
                  <span className="text-black">{stepOne.label} </span>
                  <span className="text-[#194783]">{stepOne.title}</span>
                </Typography>
                <hr
                  className="mt-4 w-full border-0 border-t-[1.71px] border-[#D9D9D9]"
                  style={{ maxWidth: `${stepOne.lineWidth}px` }}
                />
                <Typography
                  variant="body-regular"
                  as="p"
                  className="mt-6 max-w-[766px] text-[clamp(16px,2.6vw,30.86px)] font-medium leading-[131%] tracking-normal text-grey-text lg:mt-10"
                >
                  <EmphasizedText
                    text={stepOne.body}
                    emphasis={stepOne.emphasis}
                  />
                </Typography>
              </div>
              <ImagePlaceholder
                src={stepOne.image}
                alt={stepOne.imageAlt}
                sizes="(max-width: 640px) 100vw, 529px"
                className="mt-5 aspect-[529/270] w-full sm:absolute sm:right-0 sm:-top-6 sm:mt-0 sm:w-[40%] lg:w-[529px]"
              />
            </article>

            {/* Step 2 */}
            <article className="sm:mt-20 lg:mt-30">
              <Typography
                variant="body-semibold"
                as="h3"
                className="text-[clamp(20px,3.2vw,30.86px)] font-[800] leading-[131%] tracking-normal"
              >
                <span className="text-black">{stepTwo.label} </span>
                <span className="text-[#194783]">{stepTwo.title}</span>
              </Typography>
              <hr
                className="mt-4 w-full border-0 border-t-[1.71px] border-[#D9D9D9]"
                style={{ maxWidth: `${stepTwo.lineWidth}px` }}
              />
              <Typography
                variant="body-regular"
                as="p"
                className="mt-2 max-w-[914px] text-[clamp(16px,2.6vw,30.86px)] font-medium leading-[131%] tracking-normal text-black"
              >
                {stepTwo.body}
              </Typography>

              {"image" in stepTwo && stepTwo.image ? (
                <ImagePlaceholder
                  src={stepTwo.image}
                  alt={stepTwo.imageAlt}
                  sizes="(max-width: 920px) 100vw, 920px"
                  className="mt-5 aspect-[1182/284] w-full"
                />
              ) : null}

              {"options" in stepTwo && stepTwo.options ? (
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {stepTwo.options.map((option) => (
                    <Typography
                      key={option.label}
                      variant="body-medium"
                      as="p"
                      className="flex items-center gap-1.5 text-[clamp(16px,2.6vw,30.86px)] font-[800] leading-[131%] tracking-normal text-[#194783] sm:pl-8 lg:pl-15"
                    >
                      <ArrowRight className="size-4 shrink-0" aria-hidden />
                      {option.label}
                    </Typography>
                  ))}
                </div>
              ) : null}
            </article>

            {/* Step 3 */}
            <article>
              <Typography
                variant="body-semibold"
                as="h3"
                className="text-[clamp(20px,3.2vw,30.86px)] font-[800] leading-[131%] tracking-normal"
              >
                <span className="text-black">{stepThree.label} </span>
                <span className="text-[#194783]">{stepThree.title}</span>
              </Typography>
              <hr
                className="mt-4 w-full border-0 border-t-[1.71px] border-[#D9D9D9]"
                style={{ maxWidth: `${stepThree.lineWidth}px` }}
              />
              <Typography
                variant="body-regular"
                as="p"
                className="mt-2 max-w-[914px] text-[clamp(16px,2.6vw,30.86px)] font-medium leading-[131%] tracking-normal text-black"
              >
                {stepThree.body}
              </Typography>

              {"notice" in stepThree && stepThree.notice ? (
                <div className="mt-4 flex max-w-full items-center justify-center gap-[13.72px] rounded-[10.29px] bg-[#E67113] px-25 py-[15px] shadow-[0px_0px_0px_0.86px_#908F9226] sm:inline-flex sm:px-[35px]">
                  <Typography
                    variant="body-medium"
                    as="p"
                    className="whitespace-nowrap text-center text-[clamp(12px,3.2vw,27.43px)] font-[400] leading-[160%] tracking-[-0.012em] text-[#FAFAFA]"
                  >
                    {stepThree.notice}
                  </Typography>
                </div>
              ) : null}
            </article>
          </div>

          {/* Divider above "What You'll Discover" */}
          <hr className="mt-12 w-full max-w-[700px] border-0 border-t-[1.71px] border-[#D9D9D9]" />

          {/* What you'll discover */}
          <div className="mt-8 grid w-full max-w-[1200px] grid-cols-1 gap-6 pt-0 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Typography
                variant="body-semibold"
                as="h3"
                className="text-[clamp(20px,3.2vw,30.86px)] font-[800] leading-[131%] tracking-normal text-[#194783]"
              >
                {discover.heading}
              </Typography>
              <ul className="mt-4 space-y-3">
                {discover.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ArrowRight
                      className="mt-1.5 size-4 shrink-0 text-secondary"
                      aria-hidden
                    />
                    <Typography
                      variant="body-regular"
                      as="span"
                      className="block max-w-[544px] text-[clamp(16px,2.6vw,30.86px)] font-medium leading-[131%] tracking-normal text-black"
                    >
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
            <ImagePlaceholder
              src={discover.image}
              alt={discover.imageAlt}
              sizes="(max-width: 1024px) 100vw, 605px"
              className="relative aspect-[605/373] w-full rounded-[30.88px] lg:left-[-30px] lg:-top-25 lg:w-[605px]"
            />
          </div>

          {/* Get started CTAs */}
          <div className="mt-12 w-full max-w-[1200px] border-t border-[#D9D9D9] pt-8">
            <Typography
              variant="body-semibold"
              as="h3"
              className="text-[clamp(20px,3.2vw,30.86px)] font-[800] leading-[131%] tracking-normal text-black"
            >
              {getStarted.heading}
            </Typography>
            <Typography
              variant="body-regular"
              as="p"
              className="mt-1 text-[clamp(16px,2.6vw,30.86px)] font-medium leading-[131%] tracking-normal text-black"
            >
              {getStarted.subheading}
            </Typography>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:gap-6 lg:gap-12">
              {getStarted.options.map((option) => (
                <Link
                  key={option.href}
                  href={option.href}
                  className="flex min-h-[50px] w-full items-center justify-center gap-3 whitespace-nowrap rounded-[6px] bg-primary px-3 py-3 text-center text-[clamp(12px,3.4vw,27.43px)] font-[800] leading-[160%] tracking-[-0.012em] text-white transition-colors hover:bg-primary/90 sm:w-auto sm:flex-1 sm:px-6"
                >
                  {option.label}
                  <ArrowRight className="size-4 shrink-0" aria-hidden />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
