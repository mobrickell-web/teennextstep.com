"use client";

import Link from "next/link";

import { Checkbox } from "@/components/ui/checkbox";
import { Typography } from "@/components/ui/typography";

import {
  REFERRAL_PROGRAM_FORM,
  type ReferralFormField,
} from "@/components/landing/referral-program/content/referral-program-section";

const FIELD =
  "w-full rounded-[8.07px] border-[1.79px] border-[#AAA9A9] bg-white px-[21.53px] py-[12.63px] text-[clamp(15px,1.6vw,18px)] leading-[150%] text-black outline-none placeholder:text-[#6B6B6B] focus-visible:border-[#194783] focus-visible:ring-1 focus-visible:ring-[#194783]";

const GROUP_HEADING_CLASS =
  "text-[clamp(16px,1.8vw,20px)] font-bold leading-[140%] pb-2 text-black";

function FormField({ field }: { field: ReferralFormField }) {
  if (field.type === "textarea") {
    return (
      <textarea
        name={field.name}
        placeholder={field.placeholder}
        aria-label={field.placeholder}
        rows={5}
        className={`${FIELD} resize-y`}
      />
    );
  }

  return (
    <input
      type={field.type}
      name={field.name}
      placeholder={field.placeholder}
      aria-label={field.placeholder}
      className={FIELD}
    />
  );
}

export default function ReferralProgramFormSection() {
  const { sections, confirmation, submitLabel, contactButton } =
    REFERRAL_PROGRAM_FORM;

  return (
    <div className="mt-12 w-full sm:mt-14">
      <form
        className="flex flex-col gap-8 sm:gap-10"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Referral submission form"
      >
        {sections.map((section) => (
          <fieldset
            key={section.heading}
            className="flex min-w-0 flex-col gap-4 border-0 p-0"
          >
            <Typography
              variant="body-semibold"
              as="legend"
              className={GROUP_HEADING_CLASS}
            >
              {section.heading}
            </Typography>
            {section.fields.map((field) => (
              <FormField key={field.name} field={field} />
            ))}
          </fieldset>
        ))}

        <fieldset className="flex min-w-0 flex-col gap-4 border-0 p-0">
          <Typography
            variant="body-semibold"
            as="legend"
            className={GROUP_HEADING_CLASS}
          >
            {confirmation.heading}
          </Typography>
          <label className="flex cursor-pointer items-start gap-3">
            <Checkbox
              name={confirmation.name}
              required
              className="mt-1 rounded-full border-[#AAA9A9] bg-white data-checked:border-[#194783] data-checked:bg-[#194783]"
            />
            <span className="text-[clamp(15px,1.6vw,18px)] leading-[150%] text-black">
              {confirmation.label}
            </span>
          </label>
        </fieldset>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <button
            type="submit"
            className="inline-flex min-h-[55px] w-fit items-center justify-center gap-[10px] rounded-[7.57px] bg-[#194783] px-[30px] py-[15px] text-[clamp(13px,1.5vw,16px)] font-semibold text-white shadow-[0px_0px_0px_0.63px_#908F9226] transition-colors hover:bg-[#194783]/90"
          >
            {submitLabel}
          </button>
          <Link
            href={contactButton.href}
            className="inline-flex min-h-[55px] w-fit items-center justify-center gap-[10px] rounded-[7.57px] border-[1.79px] border-[#194783] bg-white px-[30px] py-[15px] text-[clamp(13px,1.5vw,16px)] font-semibold text-[#194783] transition-colors hover:bg-[#194783]/5"
          >
            {contactButton.label}
          </Link>
        </div>
      </form>
    </div>
  );
}
