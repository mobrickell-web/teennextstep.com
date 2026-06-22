import { SNAPSHOT_SUMMARY } from "@/components/dashboard/parent-insight/parent-insight-data";
import { cn } from "@/lib/utils";

export default function SnapshotSummaryCard() {
  const { title, subtitle, columns } = SNAPSHOT_SUMMARY;

  return (
    <div className="h-full overflow-hidden rounded-[11.36px] border-[3px] border-[#EAEAEA]">
      <div className="px-6 py-5">
        <h3 className="text-[clamp(19px,2.2vw,24.91px)] font-extrabold leading-[22.73px] text-[#194783]">
          {title}
        </h3>
        <p className="mt-3 text-[clamp(15px,1.8vw,19.64px)] font-normal leading-[22.16px] text-black">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 border-t-[3px] border-[#EAEAEA] md:grid-cols-3">
        {columns.map((col, i) => (
          <div
            key={col.heading}
            className={cn(
              "relative flex flex-col items-center px-6 py-8 text-center",
              i > 0 &&
                "md:before:absolute md:before:left-0 md:before:top-8 md:before:bottom-8 md:before:w-[3px] md:before:bg-[#EAEAEA] md:before:content-['']",
            )}
          >
            <p className="text-[clamp(14px,1.6vw,17.91px)] font-extrabold leading-[22.73px] text-[#194783]">
              {col.heading}
            </p>
            <p className="mt-4 font-bold leading-none">
              <span
                className={
                  col.max
                    ? "text-[clamp(56px,8vw,92.45px)]"
                    : "text-[clamp(30px,4.5vw,42.45px)]"
                }
                style={{ color: col.valueColor }}
              >
                {col.value}
              </span>
              {col.max ? (
                <span className="text-[clamp(30px,4.5vw,42.45px)] text-black">
                  {col.max}
                </span>
              ) : null}
            </p>
            <p
              className="mt-4 whitespace-pre-line text-[clamp(12px,1.3vw,14.91px)] font-bold leading-[15.7px]"
              style={{ color: col.captionColor }}
            >
              {col.caption}
            </p>
            <p className="mt-3 text-[clamp(10px,1vw,11.91px)] font-medium leading-[15.7px] text-black">
              {col.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
