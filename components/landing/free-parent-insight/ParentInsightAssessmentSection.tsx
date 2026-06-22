"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import {
  PARENT_INSIGHT_ASSESSMENT_CONTENT,
  PARENT_INSIGHT_DASHBOARD_IMAGE,
} from "@/components/landing/free-parent-insight/content/assessment-section";

const RATING_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
const assessmentSectionWidthClass = "mx-auto w-full max-w-[1611.8927001953125px]";

type RatingsState = Record<string, number>;

function RatingButton({
  rating,
  selected,
  onSelect,
  showLowLabel,
  showHighLabel,
  lowLabel,
  highLabel,
}: {
  rating: number;
  selected: boolean;
  onSelect: () => void;
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
        <span aria-hidden className="invisible mb-0.5 text-[10px] leading-none sm:text-xs">
          {lowLabel}
        </span>
      )}
      <button
        type="button"
        role="radio"
        aria-checked={selected}
        onClick={onSelect}
        className={cn(
          "flex size-7 items-center justify-center rounded-full border text-xs font-semibold transition-colors sm:size-8 sm:text-sm",
          selected
            ? "border-primary bg-primary text-white"
            : "border-[#b8c0d0] bg-white text-primary hover:border-primary",
        )}
      >
        {rating}
      </button>
    </div>
  );
}

function RatingScaleRow({
  statementId,
  statement,
  value,
  onChange,
  lowLabel,
  highLabel,
}: {
  statementId: string;
  statement: string;
  value?: number;
  onChange: (value: number) => void;
  lowLabel: string;
  highLabel: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={statement}
      className="flex w-full shrink-0 flex-col items-stretch gap-1 lg:items-end lg:w-auto"
    >
      <div className="flex w-full max-w-full items-end justify-center gap-1 overflow-x-auto pb-1 sm:justify-end sm:gap-1.5 lg:overflow-visible">
        {RATING_VALUES.map((rating) => (
          <RatingButton
            key={`${statementId}-${rating}`}
            rating={rating}
            selected={value === rating}
            onSelect={() => onChange(rating)}
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

export default function ParentInsightAssessmentSection() {
  const { header, scaleLabels, categories, resultsForm } =
    PARENT_INSIGHT_ASSESSMENT_CONTENT;

  const [ratings, setRatings] = useState<RatingsState>({});

  function handleRatingChange(statementId: string, value: number) {
    setRatings((current) => ({ ...current, [statementId]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      id="parent-insight-assessment"
      aria-labelledby="parent-insight-assessment-heading"
      className="w-full bg-white"
    >
      <div className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14 xl:px-10">
        <div className={cn(assessmentSectionWidthClass, "space-y-10 sm:space-y-12")}>
          <div className="space-y-3 text-center sm:space-y-4">
            <Typography
              id="parent-insight-assessment-heading"
              variant="h2"
              as="h2"
              className="text-[clamp(22px,3.2vw,36px)] font-[800] leading-[131%] text-secondary"
            >
              {header.title}
            </Typography>

            <Typography
              variant="body-semibold"
              as="p"
              className="text-base font-[800] text-secondary sm:text-lg"
            >
              {header.scaleLegend}
            </Typography>

            <Typography
              variant="body-regular"
              as="p"
              className="w-full text-sm font-semibold leading-relaxed text-destructive sm:text-base"
            >
              {header.finalNote}
            </Typography>
          </div>

          <div className="space-y-10 sm:space-y-12">
            {categories.map((category) => (
              <article key={category.id} className="space-y-5 sm:space-y-6">
                <Typography
                  variant="h3"
                  as="h3"
                  className="text-lg font-[800] text-primary sm:text-xl"
                >
                  {category.title}
                </Typography>

                <div className="divide-y divide-[#e8e8e8]">
                  {category.statements.map((statement, index) => {
                    const statementId = `${category.id}-${index}`;
                    return (
                      <div
                        key={statementId}
                        className="flex flex-col gap-4 py-6 first:pt-0 last:pb-0 sm:py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
                      >
                        <Typography
                          variant="body-regular"
                          as="p"
                          className="min-w-0 flex-1 text-[18px] font-medium leading-relaxed text-foreground lg:pr-4"
                        >
                          {statement}
                        </Typography>

                        <RatingScaleRow
                          statementId={statementId}
                          statement={statement}
                          value={ratings[statementId]}
                          onChange={(value) =>
                            handleRatingChange(statementId, value)
                          }
                          lowLabel={scaleLabels.low}
                          highLabel={scaleLabels.high}
                        />
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#e8e8e8] bg-white">
        <div className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14 xl:px-10">
          <div
            className={cn(
              assessmentSectionWidthClass,
              "grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-16",
            )}
          >
            <div className="space-y-6">
              <div className="space-y-3">
                <Typography
                  variant="h2"
                  as="h2"
                  className="text-[clamp(22px,3vw,32px)] font-[800] leading-[131%] text-primary"
                >
                  {resultsForm.heading}
                </Typography>

                <Typography
                  variant="body-regular"
                  as="p"
                  className="text-sm leading-relaxed text-foreground sm:text-base"
                >
                  {resultsForm.description}
                </Typography>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {resultsForm.fields.map((field) => (
                  <Input
                    key={field.id}
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    aria-label={field.label}
                    className="h-12 rounded-lg border-[#d8d8d8] bg-white text-base"
                  />
                ))}

                <Button
                  type="submit"
                  size="cta"
                  className="h-[52px] w-full rounded-lg text-white font-semibold"
                >
                  {resultsForm.submitLabel}
                </Button>

                <Typography
                  variant="muted-sm"
                  as="p"
                  className="text-center text-xs leading-relaxed text-grey-text sm:text-center"
                >
                  {resultsForm.privacyText}{" "}
                  <Link
                    href={resultsForm.privacyHref}
                    className="text-primary underline-offset-2 hover:underline"
                  >
                    {resultsForm.privacyLinkLabel}
                  </Link>
                </Typography>
              </form>
            </div>

            <div className="relative min-h-[220px] w-full min-w-0 overflow-hidden rounded-[9px] border border-[#d8d8d8] sm:min-h-[260px] lg:min-h-0 lg:h-full">
              <Image
                src={PARENT_INSIGHT_DASHBOARD_IMAGE}
                alt={resultsForm.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full rounded-[9px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
