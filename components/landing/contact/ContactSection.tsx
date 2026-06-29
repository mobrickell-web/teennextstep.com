"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { LANDING_SECTION_HEADING_SIZE } from "@/components/landing/landing-styles";
import { Typography } from "@/components/ui/typography";

import { CONTACT_CONTENT } from "@/components/landing/contact/content/contact-section";

const FIELD =
  "w-full rounded-[8.07px] border-[1.79px] border-[#AAA9A9] bg-white px-[21.53px] py-[20.63px] text-[clamp(15px,1.6vw,18px)] leading-[150%] text-black outline-none placeholder:text-[#6B6B6B] focus-visible:border-[#194783] focus-visible:ring-1 focus-visible:ring-[#194783]";

export default function ContactSection() {
  const {
    heroImage,
    heroImageAlt,
    hero,
    formImage,
    formImageAlt,
    fields,
    submitLabel,
    ambassador,
  } = CONTACT_CONTENT;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full bg-white"
    >
      {/* Hero banner */}
      <div className="relative flex w-full items-center justify-center overflow-hidden px-3 py-8 sm:min-h-[260px] sm:px-6 sm:py-10 lg:min-h-[345px]">
        <Image
          src={heroImage}
          alt={heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="relative z-10 w-full max-w-[1785px] rounded-[9px] bg-white/20 px-4 py-6 text-center backdrop-blur-[22px] sm:px-10 sm:py-8 lg:px-16 lg:py-10">
          <Typography
            id="contact-heading"
            variant="h1"
            as="h1"
            className="text-center text-[20px] font-[800] leading-[100%] tracking-normal text-white md:text-[clamp(30px,5vw,53.41px)]"
          >
            {hero.heading}
          </Typography>
          <Typography
            variant="body-regular"
            as="p"
            className="mx-auto mt-3 max-w-[1493px] text-center text-[clamp(14px,2.2vw,29px)] font-medium leading-[125%] tracking-normal text-white"
          >
            {hero.subheading}
          </Typography>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto w-full max-w-[1785px] px-4 py-10 sm:px-8 sm:py-14 lg:px-16">
        {/* Form + image */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              name={fields.fullName.name}
              placeholder={fields.fullName.placeholder}
              aria-label={fields.fullName.placeholder}
              className={FIELD}
            />
            <input
              type="email"
              name={fields.email.name}
              placeholder={fields.email.placeholder}
              aria-label={fields.email.placeholder}
              className={FIELD}
            />
            <input
              type="tel"
              name={fields.phone.name}
              placeholder={fields.phone.placeholder}
              aria-label={fields.phone.placeholder}
              className={FIELD}
            />

            <div className="relative">
              <select
                name={fields.role.name}
                aria-label={fields.role.placeholder}
                defaultValue=""
                className={`${FIELD} appearance-none pr-12`}
              >
                <option value="" disabled>
                  {fields.role.placeholder}
                </option>
                {fields.role.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-[21px] top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-[#194783]"
                aria-hidden
              />
            </div>

            <div className="relative">
              <select
                name={fields.helpWith.name}
                aria-label={fields.helpWith.placeholder}
                defaultValue=""
                className={`${FIELD} appearance-none pr-12`}
              >
                <option value="" disabled>
                  {fields.helpWith.placeholder}
                </option>
                {fields.helpWith.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-[21px] top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-[#194783]"
                aria-hidden
              />
            </div>

            <textarea
              name={fields.message.name}
              placeholder={fields.message.placeholder}
              aria-label={fields.message.placeholder}
              rows={5}
              className={`${FIELD} resize-y`}
            />

            <button
              type="submit"
              className="mt-1 inline-flex min-h-[55px] w-fit items-center justify-center gap-[10px] rounded-[7.57px] bg-[#194783] px-[30px] py-[15px] text-[clamp(13px,1.5vw,16px)] font-semibold text-white shadow-[0px_0px_0px_0.63px_#908F9226] transition-colors hover:bg-[#194783]/90"
            >
              {submitLabel}
            </button>
          </form>

          <div className="relative aspect-[847/629] w-full overflow-hidden rounded-[8.07px] bg-[#E4E4E4] lg:max-w-[847px]">
            <Image
              src={formImage}
              alt={formImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 847px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Ambassador applicants */}
        <div className="mt-12 lg:mt-14">
          <Typography
            as="h2"
            className={`${LANDING_SECTION_HEADING_SIZE} font-[800] leading-[110%] text-[#194783]`}
          >
            {ambassador.heading}
          </Typography>
          <Typography
            as="p"
            className="mt-3 text-[clamp(20px,2.8vw,34.62px)] font-[800] leading-[110%] text-black"
          >
            {ambassador.subheading}
          </Typography>
          <Typography
            as="p"
            className="mt-3 text-[clamp(16px,2vw,26.01px)] font-medium leading-[124%] text-[#194783]"
          >
            {ambassador.linkPrefix}
            <Link
              href={ambassador.linkHref}
              className="underline underline-offset-2 hover:text-[#194783]/80"
            >
              {ambassador.linkLabel}
            </Link>
          </Typography>
        </div>
      </div>
    </section>
  );
}
