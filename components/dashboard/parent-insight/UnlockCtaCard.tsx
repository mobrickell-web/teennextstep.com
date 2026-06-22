import Image from "next/image";
import Link from "next/link";

import { UNLOCK_CTA } from "@/components/dashboard/parent-insight/parent-insight-data";
import { cn } from "@/lib/utils";

export default function UnlockCtaCard() {
  const {
    title,
    subtitle,
    primaryButton,
    secondaryButton,
    buttonsCaption,
    detailsLabel,
    detailsHref,
    features,
  } = UNLOCK_CTA;

  return (
    <div className="mt-6 rounded-[11.36px] bg-[#EAEAEA] p-8">
      <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
        <div className="min-w-0 flex-1">
          <h3 className="text-[clamp(19px,2.2vw,24.91px)] font-extrabold leading-[22.73px] text-[#194783]">
            {title}
          </h3>
          <p className="mt-4 max-w-[808px] text-[clamp(16px,1.9vw,21.64px)] font-normal leading-[27.2px] text-black">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-y-6 sm:flex-nowrap">
            {features.map((feature, i) => (
              <div
                key={feature.label}
                className={cn(
                  "relative flex w-1/2 min-w-0 flex-col items-center px-5 text-center sm:w-auto sm:flex-1",
                  i > 0 &&
                    "sm:before:absolute sm:before:left-0 sm:before:top-1/2 sm:before:h-[108px] sm:before:w-[3px] sm:before:-translate-y-1/2 sm:before:bg-white sm:before:content-['']",
                )}
              >
                <Image
                  src={feature.icon}
                  alt=""
                  width={28}
                  height={28}
                  aria-hidden
                  className="h-7 w-7"
                />
                <p className="mt-3 text-[clamp(11px,1.2vw,13.36px)] font-semibold leading-[16.7px] text-[#1F2937]">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href={detailsHref}
            className="mt-8 inline-flex items-center gap-2 px-5 text-[clamp(12px,1.2vw,14px)] font-semibold text-[#194783]"
          >
            {detailsLabel} <span aria-hidden>→</span> View Details
          </a>
        </div>

        <div className="flex w-full shrink-0 flex-col items-center gap-4 xl:w-[389px]">
          <Link
            href={primaryButton.href}
            className="flex h-[60px] w-full items-center justify-center rounded-[10.55px] bg-[#E67113] text-[clamp(16px,1.9vw,21.51px)] font-bold text-white transition-colors hover:bg-[#E67113]/90"
          >
            {primaryButton.label}
          </Link>
          <Link
            href={secondaryButton.href}
            className="flex h-[60px] w-full items-center justify-center rounded-[10.55px] bg-[#194783] text-[clamp(16px,1.9vw,21.51px)] font-bold text-white transition-colors hover:bg-[#194783]/90"
          >
            {secondaryButton.label}
          </Link>
          <p className="text-center text-[clamp(13px,1.5vw,16.64px)] font-normal leading-[27.2px] text-black">
            {buttonsCaption}
          </p>
        </div>
      </div>
    </div>
  );
}
