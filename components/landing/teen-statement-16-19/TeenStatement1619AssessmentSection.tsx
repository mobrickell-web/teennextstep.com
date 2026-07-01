"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { TEEN_STATEMENT_ASSESSMENT_CONTENT } from "@/components/landing/teen-statement-16-19/content/assessment-section";

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
      className="flex w-full shrink-0 flex-col items-stretch gap-1 lg:w-auto lg:items-end"
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

export default function TeenStatement1619AssessmentSection() {
  const { header, scaleLabels, categories, resultsForm } =
    TEEN_STATEMENT_ASSESSMENT_CONTENT;

  const [ratings, setRatings] = useState<RatingsState>({});

  function handleRatingChange(statementId: string, value: number) {
    setRatings((current) => ({ ...current, [statementId]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      id="teen-statement-16-19-assessment"
      aria-labelledby="teen-statement-16-19-assessment-heading"
      className="w-full bg-white"
    >
      <div className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14 xl:px-10">
        <div className={cn(assessmentSectionWidthClass, "space-y-10 sm:space-y-12")}>
          <div className="space-y-4 text-center sm:space-y-5">
            {header.notes.map((segments, index) => (
              <Typography
                key={segments[0].text}
                id={index === 0 ? "teen-statement-16-19-assessment-heading" : undefined}
                variant="body-regular"
                as="p"
                className="mx-auto w-full font-normal leading-snug text-foreground text-[clamp(14px,1.4vw,18px)]"
              >
                {segments.map((segment) =>
                  segment.bold ? (
                    <strong key={segment.text} className="font-bold">
                      {segment.text}
                    </strong>
                  ) : (
                    segment.text
                  ),
                )}
              </Typography>
            ))}
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
                        className={cn(
                          "flex flex-col gap-4 py-6 first:pt-0 last:pb-0 sm:py-6 lg:items-center lg:justify-end lg:gap-8",
                          statement
                            ? "lg:flex-row lg:justify-between"
                            : "lg:flex-row",
                        )}
                      >
                        {statement ? (
                          <Typography
                            variant="body-regular"
                            as="p"
                            className="min-w-0 flex-1 text-[18px] font-medium leading-relaxed text-foreground lg:pr-4"
                          >
                            {statement}
                          </Typography>
                        ) : null}

                        <RatingScaleRow
                          statementId={statementId}
                          statement={statement || category.title}
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

      <div className="bg-white">
        <div className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14 xl:px-10">
          <div className={cn(assessmentSectionWidthClass, "space-y-6 border-t border-[#e8e8e8] pt-10 sm:pt-12 lg:pt-14")}>
            <div className="space-y-1">
              <Typography
                variant="body-regular"
                as="p"
                className="text-base font-medium text-foreground"
              >
                Name: {resultsForm.name}
              </Typography>

              <Typography
                variant="body-regular"
                as="p"
                className="text-base font-medium text-foreground"
              >
                Email: {resultsForm.email}
              </Typography>
            </div>

            <form onSubmit={handleSubmit}>
              <Button
                type="submit"
                size="cta"
                className="h-[52px] rounded-lg px-12 text-base font-semibold text-white"
              >
                {resultsForm.submitLabel}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
