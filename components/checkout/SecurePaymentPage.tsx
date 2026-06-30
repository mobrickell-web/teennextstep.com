"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { SECURE_PAYMENT_CONTENT } from "@/components/checkout/content/secure-payment-content";

const TICK_ICON =
  "/images/landing-page/secure-your-teens-next-step/tick.svg";
const LOGOS_IMAGE = "/images/landing-page/secure-your-teens-next-step/logos-image.png";

function CheckItem({
  children,
  number,
  className,
}: {
  children: ReactNode;
  number: number;
  className?: string;
}) {
  return (
    <li className={cn("flex gap-2.5", className)}>
      <Image
        src={TICK_ICON}
        alt=""
        width={19}
        height={17}
        aria-hidden
        className="mt-1 shrink-0"
      />
      <span className="mt-0.5 shrink-0 font-[500] text-primary">{number}.</span>
      <span className="text-primary">{children}</span>
    </li>
  );
}

const CARD_FIELD_BASE =
  "h-full min-w-0 rounded-none border-0 bg-[#F9F7F7] px-3 shadow-none focus-visible:ring-0";
const PAYMENT_INPUT_BG = "bg-[#F9F7F7]";

function PolicyItem({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2.5">
        <Image
          src={TICK_ICON}
          alt=""
          width={19}
          height={17}
          aria-hidden
          className="shrink-0"
        />
        <Typography
          variant="body-semibold"
          as="p"
          className="text-sm font-[800] leading-[131%] text-primary sm:text-base"
        >
          {heading}
        </Typography>
      </div>
      <Typography
        variant="body-regular"
        as="div"
        className="pl-[29px] text-sm leading-relaxed text-foreground sm:text-base"
      >
        {children}
      </Typography>
    </div>
  );
}

export default function SecurePaymentPage() {
  const { pageTitle, product, payment, policies } = SECURE_PAYMENT_CONTENT;

  return (
    <div className="w-full bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto box-border w-full max-w-[1560px] rounded-[12px] bg-[#efefef] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14 xl:px-12">
        <Typography
          variant="h2"
          as="h1"
          className="text-center text-[clamp(24px,3.5vw,36px)] font-[800] leading-[131%] text-primary"
        >
          {pageTitle}
        </Typography>

        <div className="mx-auto mt-8 w-full max-w-[1350px] rounded-[12px] bg-white px-5 py-8 sm:mt-10 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <section className="space-y-5 border-b border-[#D9D9D9] pb-8">
            <div className="space-y-2 border-b border-[#D9D9D9] pb-5">
              <Typography
                variant="h3"
                as="h2"
                className="text-[clamp(18px,2.2vw,24px)] font-[800] leading-[131%] text-primary"
              >
                {product.heading}
              </Typography>

              <Typography
                variant="muted-sm"
                as="p"
                className="text-sm leading-relaxed text-grey-text sm:text-base"
              >
                {product.subheading}
              </Typography>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:items-start lg:gap-8 xl:grid-cols-[1fr_380px]">
              <ul className="space-y-2.5 text-[18px] font-medium">
                {product.features.map((feature, index) => (
                  <CheckItem key={feature} number={index + 1}>
                    {feature}
                  </CheckItem>
                ))}
              </ul>

              <div className="rounded-[11px] border-[1.64px] border-[#D9D9D9] bg-[#F9F7F7] px-4 py-4 text-center sm:px-5 sm:py-5">
                <Typography
                  variant="body-semibold"
                  as="p"
                  className="text-base font-[800] leading-snug text-primary sm:text-xl"
                >
                  {product.priceBox.label} —{" "}
                  <span className="text-[28px] sm:text-[28px]">
                    {product.priceBox.amount}
                  </span>
                </Typography>
                <Typography
                  variant="muted-sm"
                  as="p"
                  className="mt-2 text-[11px] leading-relaxed text-grey-text sm:text-[14px]"
                >
                  {product.priceBox.note}
                </Typography>
              </div>
            </div>

            <Typography
              variant="body-semibold"
              as="p"
              className="text-left text-lg font-[800] text-primary sm:text-xl"
            >
              {product.footerNote}
            </Typography>
          </section>

          <section className="mt-10 space-y-5 sm:mt-12">
            <Typography
              variant="h3"
              as="h2"
              className="text-[clamp(18px,2.2vw,24px)] font-[800] leading-[131%] text-primary"
            >
              {payment.heading}
            </Typography>

            <div className="overflow-hidden rounded-[8px] border border-[#d8d8d8] bg-[#F9F7F7]">
              <div className="flex w-full flex-wrap items-center justify-between gap-3 border-b border-[#e5e5e5] px-4 py-4 sm:px-6">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/landing-page/secure-your-teens-next-step/secure.svg"
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden
                    className="shrink-0"
                  />
                  <Typography
                    variant="body-semibold"
                    as="p"
                    className="text-sm font-[800] text-primary sm:text-base"
                  >
                    {payment.secureTitle}
                  </Typography>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <Image
                    src="/images/landing-page/secure-your-teens-next-step/visa.svg"
                    alt="Visa"
                    width={48}
                    height={32}
                    className="h-8 w-auto shrink-0"
                  />
                  <Image
                    src="/images/landing-page/secure-your-teens-next-step/paypal.svg"
                    alt="PayPal"
                    width={48}
                    height={32}
                    className="h-8 w-auto shrink-0"
                  />
                </div>
              </div>

              <form className="space-y-4 p-4 sm:p-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex h-12 items-stretch overflow-hidden rounded-lg border border-[#d8d8d8] bg-[#F9F7F7] focus-within:ring-1 focus-within:ring-ring">
                  <Input
                    id="card-number"
                    name="cardNumber"
                    placeholder={payment.fields.cardNumber}
                    autoComplete="cc-number"
                    className={cn(CARD_FIELD_BASE, "flex-1")}
                    aria-label={payment.fields.cardNumber}
                  />
                  <div className="w-px shrink-0 bg-[#d8d8d8]" aria-hidden />
                  <Input
                    id="card-expiry"
                    name="cardExpiry"
                    placeholder={payment.fields.expiry}
                    autoComplete="cc-exp"
                    className={cn(
                      CARD_FIELD_BASE,
                      "w-[5.75rem] shrink-0 px-2 text-center placeholder:text-center sm:w-28",
                    )}
                    aria-label={payment.fields.expiry}
                  />
                  <div className="w-px shrink-0 bg-[#d8d8d8]" aria-hidden />
                  <Input
                    id="card-cvc"
                    name="cardCvc"
                    placeholder={payment.fields.cvc}
                    autoComplete="cc-csc"
                    className={cn(
                      CARD_FIELD_BASE,
                      "w-[4.5rem] shrink-0 px-2 text-center placeholder:text-center sm:w-24",
                    )}
                    aria-label={payment.fields.cvc}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={payment.fields.email}
                    autoComplete="email"
                    className={PAYMENT_INPUT_BG}
                    aria-label={payment.fields.email}
                  />
                  <Input
                    id="full-name"
                    name="fullName"
                    placeholder={payment.fields.fullName}
                    autoComplete="name"
                    className={PAYMENT_INPUT_BG}
                    aria-label={payment.fields.fullName}
                  />
                </div>

                <div className="relative h-12 w-full overflow-hidden rounded-lg border border-[#d8d8d8] bg-[#F9F7F7] focus-within:ring-1 focus-within:ring-ring">
                  <Input
                    id="discount-code"
                    name="discountCode"
                    placeholder={payment.fields.discountCode}
                    className={cn(
                      "h-full w-full rounded-lg border-0 pr-[5.75rem] shadow-none focus-visible:ring-0",
                      PAYMENT_INPUT_BG,
                    )}
                    aria-label={payment.fields.discountCode}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center justify-center bg-secondary px-5 text-sm font-[800] text-white transition-colors hover:bg-secondary/90 sm:px-6"
                  >
                    {payment.fields.apply}
                  </button>
                </div>

                <div className="flex justify-center pt-2">
                  <Button
                    type="submit"
                    variant="secondary"
                    size="cta"
                    className="w-full max-w-md text-base font-[800] sm:w-auto sm:min-w-[320px]"
                  >
                    {payment.submitLabel}
                  </Button>
                </div>
              </form>
            </div>
          </section>

          <section className="mt-10 space-y-5 sm:mt-12">
            <PolicyItem heading={policies.refund.heading}>
              {policies.refund.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-2 first:mt-0">
                  {paragraph}
                </p>
              ))}
            </PolicyItem>

            {policies.trustItems.map((item) => (
              <PolicyItem key={item.heading} heading={item.heading}>
                {item.text}
                {"phone" in item && item.phone ? (
                  <>
                    {" "}
                    <span className="font-[800]">{item.phone}</span>
                  </>
                ) : null}
              </PolicyItem>
            ))}
          </section>

          <div className="mt-10 w-full sm:mt-12">
            <div className="relative mx-auto aspect-[732/147] w-full max-w-[732px]">
              <Image
                src={LOGOS_IMAGE}
                alt={
                  policies.logosImage?.alt ??
                  "McAfee Secure, Norton Secured, and 100% Satisfaction guarantee badges"
                }
                fill
                sizes="(max-width: 768px) 100vw, 732px"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
