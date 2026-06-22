import {
  PARENT_INSIGHT_CONTENT,
  SCORE_RANGES,
} from "@/components/dashboard/parent-insight/parent-insight-data";
import ScoreRangeModal from "@/components/dashboard/parent-insight/ScoreRangeModal";

export default function ScoreInterpretationSection() {
  return (
    <>
      <h3 className="mt-10 text-center text-[clamp(19px,2.2vw,24.91px)] font-extrabold capitalize leading-[22.73px] text-[#194783] xl:text-left">
        {PARENT_INSIGHT_CONTENT.scoreInterpretationHeading}
      </h3>
      <div className="mt-5 flex flex-wrap justify-center gap-[11px] xl:justify-start">
        {SCORE_RANGES.map((range) => (
          <ScoreRangeModal key={range.label} range={range} />
        ))}
      </div>
    </>
  );
}
