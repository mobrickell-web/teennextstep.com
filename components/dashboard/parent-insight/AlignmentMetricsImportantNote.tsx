import { ALIGNMENT_METRICS_TABLE } from "@/components/dashboard/parent-insight/parent-insight-data";
import { cn } from "@/lib/utils";

export default function AlignmentMetricsImportantNote({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-[11.36px] border-[3px] border-[#EAEAEA] p-6",
        className,
      )}
    >
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#194783] text-[clamp(12px,1.2vw,14px)] font-bold italic text-white">
        i
      </span>
      <p className="text-[clamp(12px,1.3vw,14.91px)] font-medium leading-[19.7px] text-black">
        <span className="font-extrabold text-[#194783]">
          {ALIGNMENT_METRICS_TABLE.importantLabel}
        </span>{" "}
        {ALIGNMENT_METRICS_TABLE.importantNote}
      </p>
    </div>
  );
}
