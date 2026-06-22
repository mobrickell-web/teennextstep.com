import Image from "next/image";
import Link from "next/link";

import { WHY_INVEST_BANNER } from "@/components/dashboard/parent-insight/parent-insight-data";

export default function WhyInvestBanner() {
  const { shieldIcon, title, features, linkLabel, linkHref } = WHY_INVEST_BANNER;

  return (
    <div className="mt-6 flex flex-col gap-6 rounded-[11.36px] border-[3px] border-[#EAEAEA] p-6 xl:flex-row xl:items-center">
      <Image
        src={shieldIcon}
        alt=""
        width={85}
        height={85}
        aria-hidden
        className="mx-auto h-[85px] w-[85px] shrink-0 xl:mx-0"
      />

      <div className="min-w-0 flex-1">
        <h3 className="text-[clamp(19px,2.2vw,24.91px)] font-extrabold leading-[22.73px] text-[#194783]">
          {title}
        </h3>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-8">
          {features.map((feature) => (
            <div key={feature.label} className="flex items-start gap-2">
              <Image
                src={feature.icon}
                alt=""
                width={20}
                height={20}
                aria-hidden
                className="mt-0.5 h-5 w-5 shrink-0"
              />
              <p className="max-w-[215px] text-[clamp(11px,1.2vw,13.36px)] font-semibold leading-[16.7px] text-[#1F2937]">
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative shrink-0 xl:pl-8 xl:before:absolute xl:before:left-0 xl:before:top-1/2 xl:before:h-[108px] xl:before:w-[3px] xl:before:-translate-y-1/2 xl:before:bg-[#EAEAEA] xl:before:content-['']">
        <Link
          href={linkHref}
          className="inline-flex items-center gap-2 text-[clamp(13px,1.4vw,16.04px)] font-bold leading-[21.38px] text-[#E67113]"
        >
          {linkLabel} <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
