"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { SECURE_PAYMENT_CONTENT } from "@/components/checkout/content/secure-payment-content";

const SETS_ICON = "/images/landing-page/sets-icon.svg";
const LOGOS_IMAGE = "/images/landing-page/secure-your-teens-next-step/logos-image.png";

function CheckItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <li className={cn("flex gap-2.5", className)}>
      <Image
        src={SETS_ICON}
        alt=""
        width={14}
        height={15}
        aria-hidden
        className="mt-1 shrink-0"
      />
      <span>{children}</span>
    </li>
  );
}

function PolicyItem({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-2.5">
      <Image
        src={SETS_ICON}
        alt=""
        width={14}
        height={15}
        aria-hidden
        className="mt-1 shrink-0"
      />
      <div className="space-y-1">
        <Typography
          variant="body-semibold"
          as="p"
          className="text-sm font-[800] text-primary sm:text-base"
        >
          {heading}
        </Typography>
        <Typography
          variant="body-regular"
          as="div"
          className="text-sm leading-relaxed text-foreground sm:text-base"
        >
          {children}
        </Typography>
      </div>
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

            <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:items-start lg:gap-8 xl:grid-cols-[1fr_380px]">
              <ul className="space-y-2.5 text-[18px] font-medium text-foreground">
                {product.features.map((feature) => (
                  <CheckItem key={feature}>{feature}</CheckItem>
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

            <div className="overflow-hidden rounded-[8px] border border-[#d8d8d8] bg-[#fafafa]">
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
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Input
                    id="card-number"
                    name="cardNumber"
                    placeholder={payment.fields.cardNumber}
                    autoComplete="cc-number"
                    className="sm:flex-1"
                    aria-label={payment.fields.cardNumber}
                  />
                  <Input
                    id="card-expiry"
                    name="cardExpiry"
                    placeholder={payment.fields.expiry}
                    autoComplete="cc-exp"
                    className="sm:w-28 sm:shrink-0"
                    aria-label={payment.fields.expiry}
                  />
                  <Input
                    id="card-cvc"
                    name="cardCvc"
                    placeholder={payment.fields.cvc}
                    autoComplete="cc-csc"
                    className="sm:w-24 sm:shrink-0"
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
                    aria-label={payment.fields.email}
                  />
                  <Input
                    id="full-name"
                    name="fullName"
                    placeholder={payment.fields.fullName}
                    autoComplete="name"
                    aria-label={payment.fields.fullName}
                  />
                </div>

                <div className="relative h-12 w-full overflow-hidden rounded-lg border border-[#d8d8d8] bg-[#f5f5f5] focus-within:ring-1 focus-within:ring-ring">
                  <Input
                    id="discount-code"
                    name="discountCode"
                    placeholder={payment.fields.discountCode}
                    className="h-full w-full rounded-lg border-0 bg-transparent pr-[5.75rem] shadow-none focus-visible:ring-0"
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
