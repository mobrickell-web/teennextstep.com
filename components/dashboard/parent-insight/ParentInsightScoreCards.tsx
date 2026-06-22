import { PARENT_INSIGHT_CONTENT } from "@/components/dashboard/parent-insight/parent-insight-data";
import { PARENT_INSIGHT_CARD } from "@/components/dashboard/parent-insight/constants";
import NumberedItem from "@/components/dashboard/parent-insight/NumberedItem";
import OpportunityItem from "@/components/dashboard/parent-insight/OpportunityItem";
import { cn } from "@/lib/utils";

export default function ParentInsightScoreCards() {
  const { scoreCard, whatThisMeans, topStrengths, biggestOpportunities } =
    PARENT_INSIGHT_CONTENT;

  return (
    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <div
        className={cn(
          PARENT_INSIGHT_CARD,
          "flex flex-col items-center border-0 bg-[#EAEAEA] text-center",
        )}
      >
        <p className="text-[clamp(14px,1.6vw,17.91px)] font-extrabold leading-[22.73px] text-[#194783]">
          {scoreCard.title}
        </p>
        <p className="text-[clamp(11px,1.2vw,13.91px)] font-medium leading-[22.73px] text-[#194783]">
          {scoreCard.subtitle}
        </p>

        <p className="mt-6 font-bold leading-none">
          <span className="text-[clamp(56px,8vw,92.45px)] text-[#F2A93C]">
            {scoreCard.score}
          </span>
          <span className="text-[clamp(30px,4.5vw,42.45px)] text-black">
            {scoreCard.scoreMax}
          </span>
        </p>

        <div className="mt-6 flex h-[65px] w-[300px] max-w-full flex-col items-center justify-center rounded-[11px] bg-[#F2A93C] text-white">
          <span className="text-[clamp(11px,1.1vw,13px)] font-medium leading-tight">
            {scoreCard.guidanceLevelLabel}
          </span>
          <span className="text-[clamp(15px,1.6vw,18px)] font-bold leading-tight">
            {scoreCard.guidanceLevel}
          </span>
        </div>

        <p className="mt-6 self-start text-left text-[clamp(11px,1.2vw,13.64px)] font-normal leading-[22.16px] text-black">
          {scoreCard.assessedOnLabel}
          <br />
          <span className="font-bold">{scoreCard.assessedOnDate}</span>
          <br />
          {scoreCard.nextAssessment}
        </p>
      </div>

      <div className={cn(PARENT_INSIGHT_CARD, "flex flex-col")}>
        <h3 className="text-center text-[clamp(14px,1.6vw,17.91px)] font-extrabold leading-[22.73px] text-[#194783]">
          {whatThisMeans.title}
        </h3>
        <p className="mt-4 text-[clamp(11px,1.2vw,13.64px)] font-normal leading-[22.16px] text-black">
          {whatThisMeans.body}
        </p>
        <a
          href={whatThisMeans.linkHref}
          className="mt-15 pt-6 text-center text-[clamp(11px,1.2vw,13.64px)] font-bold leading-[18.18px] text-[#E67113]"
        >
          {whatThisMeans.linkLabel}
        </a>
      </div>

      <div className={cn(PARENT_INSIGHT_CARD, "flex flex-col")}>
        <h3 className="text-center text-[clamp(14px,1.6vw,17.91px)] font-extrabold leading-[22.73px] text-[#194783]">
          {topStrengths.title}
        </h3>
        <ul className="mt-4 space-y-3">
          {topStrengths.items.map((label, i) => (
            <NumberedItem key={label} index={i + 1} label={label} />
          ))}
        </ul>
        <a
          href={topStrengths.linkHref}
          className="mt-19 pt-6 text-center text-[clamp(11px,1.2vw,13.64px)] font-bold leading-[18.18px] text-[#E67113]"
        >
          {topStrengths.linkLabel}
        </a>
      </div>

      <div className={cn(PARENT_INSIGHT_CARD, "flex flex-col")}>
        <h3 className="text-center text-[clamp(14px,1.6vw,17.91px)] font-extrabold leading-[22.73px] text-[#E67113]">
          {biggestOpportunities.title}
        </h3>
        <ul className="mt-4 space-y-3">
          {biggestOpportunities.items.map((label, i) => (
            <OpportunityItem key={label} index={i + 1} label={label} />
          ))}
        </ul>
        <hr className="my-4 border-0 border-t border-[#E67113]" />
        <p className="text-[clamp(11px,1.2vw,13.64px)] font-normal leading-[22.16px] text-black">
          {biggestOpportunities.note}
        </p>
        <a
          href={biggestOpportunities.linkHref}
          className="mt-0 pt-6 text-center text-[clamp(11px,1.2vw,13.64px)] font-bold leading-[18.18px] text-[#E67113]"
        >
          {biggestOpportunities.linkLabel}
        </a>
      </div>
    </div>
  );
}
