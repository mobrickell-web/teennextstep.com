"use client";

import Image from "next/image";
import Link from "next/link";

import { Typography } from "@/components/ui/typography";
import { useResultsTabStore } from "@/lib/stores/use-results-tab-store";
import { cn } from "@/lib/utils";

import InsightDonut from "@/components/dashboard/results/InsightDonut";
import { RESULTS_DASHBOARD_CONTENT } from "@/components/dashboard/results/content/results-dashboard";

const CARD =
  "rounded-[10px] bg-white shadow-[3px_4px_3.9px_0px_#00000040]";

const LOCK_ICON = "/images/landing-page/dasboard-results/lock.svg";

function ParentInsightPanel() {
  const { parentInsight } = RESULTS_DASHBOARD_CONTENT;
  const {
    heading,
    subheading,
    score,
    metrics,
    metricsHeading,
    suggests,
    mayMean,
    important,
    fullPicture,
  } = parentInsight;

  return (
    <div className="mt-8 sm:mt-10">
      <Typography
        variant="h2"
        as="h2"
        className="text-center text-[clamp(24px,3.6vw,42.66px)] font-bold leading-[110%] text-[#194783]"
      >
        {heading}
      </Typography>
      <Typography
        variant="body-regular"
        as="p"
        className="mt-2 text-center text-[clamp(15px,2vw,29.53px)] font-normal leading-[125%] text-black"
      >
        {subheading}
      </Typography>

      {/* Donut + score card */}
      <div className="mt-6 flex flex-col items-center gap-6 lg:ml-[20px] lg:flex-row lg:items-center lg:justify-start lg:gap-10">
        <InsightDonut segments={[...metrics]} />

        <div className={cn(CARD, "w-full max-w-[900px] px-6 py-8 text-center")}>
          <Typography
            variant="h3"
            as="p"
            className="text-[clamp(20px,3vw,42.66px)] font-bold leading-[100%] text-[#194783]"
          >
            {score.label}
          </Typography>
          <hr className="mx-auto mt-3 w-full max-w-[420px] border-0 border-t border-[#D9D9D9]" />
          <p className="mt-14 font-bold leading-[100%] text-[#194783]">
            <span className="text-[clamp(48px,9vw,100.66px)]">
              {score.value}
            </span>
            <span className="text-[clamp(32px,6vw,69.98px)] text-black">
              /{score.max}
            </span>
          </p>
          <Link
            href="/parent-insight-assessment"
            className="mt-9 inline-block rounded-[6px] bg-[#E67113] px-4 py-2 text-[clamp(12px,1.6vw,16px)] font-semibold text-white transition-colors hover:bg-[#E67113]/90"
          >
            {score.concern}
          </Link>
        </div>
      </div>

      {/* Three info boxes */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
        <div className={cn(CARD, "px-6 py-6")}>
          <Typography
            variant="body-semibold"
            as="h3"
            className="text-[clamp(18px,2vw,24px)] font-bold leading-[131%] text-[#194783]"
          >
            {suggests.heading}
          </Typography>
          <hr className="mt-3 border-0 border-t border-[#D9D9D9]" />
          <Typography
            variant="body-regular"
            as="p"
            className="mt-3 text-[clamp(14px,1.6vw,18px)] leading-[150%] text-black"
          >
            {suggests.body}
          </Typography>
        </div>

        {/* Alignment metrics legend */}
        <div className={cn(CARD, "px-6 py-6")}>
          <Typography
            variant="body-semibold"
            as="h3"
            className="text-center text-[clamp(18px,2vw,24px)] font-bold leading-[131%] text-[#194783]"
          >
            {metricsHeading[0]}
            <br />
            {metricsHeading[1]}
          </Typography>
          <hr className="mt-3 border-0 border-t border-[#D9D9D9]" />
          <ul className="mt-3 space-y-2">
            {metrics
              .filter((m) => m.label)
              .map((m) => (
                <li
                  key={m.label}
                  className="flex items-center justify-between gap-3"
                >
                  <span className="text-[clamp(13px,1.5vw,16px)] leading-[150%] text-black">
                    {m.label}
                  </span>
                  <span
                    aria-hidden
                    className="size-3 shrink-0 rounded-[2px]"
                    style={{ backgroundColor: m.color }}
                  />
                </li>
              ))}
          </ul>
        </div>

        <div className={cn(CARD, "px-6 py-6")}>
          <Typography
            variant="body-semibold"
            as="h3"
            className="text-[clamp(18px,2vw,24px)] font-bold leading-[131%] text-[#194783]"
          >
            {mayMean.heading}
          </Typography>
          <hr className="mt-3 border-0 border-t border-[#D9D9D9]" />
          <Typography
            variant="body-regular"
            as="p"
            className="mt-3 text-[clamp(14px,1.6vw,18px)] leading-[150%] text-black"
          >
            {mayMean.body}
          </Typography>
        </div>
      </div>

      {/* Important box */}
      <div className={cn(CARD, "mt-8 px-6 py-6")}>
        <Typography
          variant="body-semibold"
          as="h3"
          className="text-[clamp(18px,2vw,24px)] font-bold leading-[131%] text-[#194783]"
        >
          {important.heading}
        </Typography>
        <hr className="mt-3 border-0 border-t border-[#D9D9D9]" />
        <Typography
          variant="body-regular"
          as="p"
          className="mt-3 text-[clamp(14px,1.6vw,18px)] leading-[150%] text-black"
        >
          {important.body}
        </Typography>
      </div>

      {/* Get the full picture */}
      <div className="mt-10">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
          <Typography
            variant="body-semibold"
            as="h3"
            className="shrink-0 text-[clamp(20px,2.6vw,33.66px)] font-bold leading-[100%] text-[#194783]"
          >
            {fullPicture.heading}
          </Typography>

          {/* Vertical divider between heading and body */}
          <span
            aria-hidden
            className="hidden h-[90px] w-px shrink-0 bg-[#AAA9A9] lg:block"
          />

          <Typography
            variant="body-regular"
            as="p"
            className="text-[clamp(16px,2vw,31.66px)] font-medium leading-[123%] text-black lg:whitespace-pre-line"
          >
            {fullPicture.body}
          </Typography>
        </div>

        {/* Divider below "Get the Full Picture" */}
        <hr className="mt-6 w-full border-0 border-t border-[#AAA9A9]" />

        <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-center">
          <div className="flex flex-col items-center gap-2">
            <Link
              href={fullPicture.primaryCta.href}
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-[6px] bg-primary px-6 py-3 text-center text-[clamp(13px,1.6vw,18px)] font-semibold text-white transition-colors hover:bg-primary/90 sm:w-auto"
            >
              {fullPicture.primaryCta.label}
            </Link>
            <Typography
              variant="muted-sm"
              as="p"
              className="text-center text-[clamp(11px,1.3vw,14px)] text-grey-text"
            >
              {fullPicture.primaryCta.caption}
            </Typography>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Link
              href={fullPicture.secondaryCta.href}
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-[8.75px] rounded-[9px] border-2 border-[#194783] bg-transparent py-4 text-center text-[clamp(13px,1.6vw,18px)] font-semibold text-primary transition-colors hover:bg-primary/5 sm:w-auto sm:py-[10px] sm:pl-[53.36px] sm:pr-[76.97px]"
            >
              {fullPicture.secondaryCta.label}
            </Link>
            <Typography
              variant="muted-sm"
              as="p"
              className="text-center text-[clamp(11px,1.3vw,14px)] text-grey-text"
            >
              {fullPicture.secondaryCta.caption}
            </Typography>
          </div>
        </div>

        <div className="mt-6 flex justify-start sm:pl-[20%] lg:pl-[35%]">
          <Link
            href={fullPicture.contactCta.href}
            className="inline-flex min-h-[48px] items-center justify-center rounded-[6px] bg-[#E67113] px-6 py-3 text-center text-[clamp(13px,1.6vw,18px)] font-semibold text-white transition-colors hover:bg-[#E67113]/90"
          >
            {fullPicture.contactCta.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

function LockedPanel() {
  return (
    <div className={cn(CARD, "mt-10 px-6 py-16 text-center")}>
      <Image
        src={LOCK_ICON}
        alt=""
        width={40}
        height={40}
        aria-hidden
        className="mx-auto h-10 w-10"
      />
      <Typography
        variant="body-semibold"
        as="p"
        className="mt-4 text-[clamp(16px,2vw,22px)] font-bold leading-[131%] text-[#194783]"
      >
        {RESULTS_DASHBOARD_CONTENT.lockedMessage}
      </Typography>
    </div>
  );
}

export default function ResultsDashboardSection() {
  const { pageTitle, tabs } = RESULTS_DASHBOARD_CONTENT;
  const activeTab = useResultsTabStore((state) => state.activeTab);
  const setActiveTab = useResultsTabStore((state) => state.setActiveTab);

  return (
    <section
      id="results-dashboard"
      aria-labelledby="results-dashboard-heading"
      className="w-full bg-[#EAEAEA]"
    >
      <div className="mx-auto w-full max-w-[1920px] px-4 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-12">
        <Typography
          id="results-dashboard-heading"
          variant="h1"
          as="h1"
          className="text-center text-[clamp(28px,5vw,53.41px)] font-[800] leading-[131%] text-[#194783]"
        >
          {pageTitle}
        </Typography>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Results views"
          className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-[#D9D9D9] sm:mt-8"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "-mb-px flex items-center gap-2 border-b-2 pb-3 text-[clamp(15px,1.8vw,29.53px)] leading-[100%] transition-colors",
                  isActive
                    ? "border-[#194783] font-[800] text-[#194783]"
                    : "border-transparent font-medium text-black hover:text-[#194783]",
                )}
              >
                {tab.locked ? (
                  <Image
                    src={LOCK_ICON}
                    alt=""
                    width={28}
                    height={28}
                    aria-hidden
                    className="size-5 shrink-0 sm:size-6"
                  />
                ) : null}
                {tab.label}
              </button>
            );
          })}
        </div>

        {activeTab === "parent-insight" ? <ParentInsightPanel /> : <LockedPanel />}
      </div>
    </section>
  );
}
