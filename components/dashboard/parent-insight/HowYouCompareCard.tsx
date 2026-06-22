import { HOW_YOU_COMPARE } from "@/components/dashboard/parent-insight/parent-insight-data";
import { cn } from "@/lib/utils";

export default function HowYouCompareCard({
  className,
}: {
  className?: string;
}) {
  const { title, subtitle, description, percentileLabel, percentile } =
    HOW_YOU_COMPARE;

  return (
    <div
      className={cn(
        "w-full rounded-[11.36px] border-[3px] border-[#EAEAEA] p-4 2xl:p-6",
        className,
      )}
    >
      <h3 className="text-[clamp(14px,1.4vw,20px)] font-extrabold leading-snug text-[#194783]">
        {title}
      </h3>
      <p className="mt-2 text-[clamp(11px,1.2vw,15px)] font-normal leading-snug text-black">
        {subtitle}
      </p>
      <p className="mt-2 text-[clamp(9px,1vw,12px)] font-medium leading-[14px] text-black">
        {description}
      </p>

      <div className="mt-4">
        <div
          className="mb-1.5 text-[clamp(9px,1vw,12px)] font-semibold leading-snug text-[#194783]"
          style={{ marginLeft: `${percentile}%`, transform: "translateX(-50%)" }}
        >
          {percentileLabel}
        </div>
        <div className="h-[26px] w-full overflow-hidden rounded-[25px] bg-[#D9D9D9] 2xl:h-[30px]">
          <div
            className="h-full rounded-[25px] bg-[#194783]"
            style={{ width: `${percentile}%` }}
          />
        </div>
        <div className="mt-1.5 flex justify-between text-[clamp(9px,0.95vw,12px)] font-semibold text-[#194783]">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
}
