import {
  ALIGNMENT_METRICS_TABLE,
  GUIDANCE_LEVEL_COLORS,
  type GuidanceLevel,
} from "@/components/dashboard/parent-insight/parent-insight-data";
import { cn } from "@/lib/utils";

function guidanceColor(level: GuidanceLevel) {
  return GUIDANCE_LEVEL_COLORS[level];
}

export default function AlignmentMetricsCard({
  className,
}: {
  className?: string;
}) {
  const { title, subtitle, columns, rows, legend } = ALIGNMENT_METRICS_TABLE;

  const cellPadding = "px-1.5 py-1.5 lg:px-2 lg:py-2 xl:px-2.5 xl:py-2";
  const rowCellPadding = "px-1.5 py-[20px] lg:px-2 xl:px-2.5";

  return (
    <div
      className={cn(
        "rounded-[11.36px] border-[3px] border-[#EAEAEA] bg-white",
        className,
      )}
    >
      <div className="px-4 pt-4 text-center xl:text-left 2xl:px-5 2xl:pt-5">
        <h3 className="text-[clamp(14px,1.4vw,20px)] font-extrabold leading-snug text-[#194783]">
          {title}
        </h3>
        <p className="mt-2 text-[clamp(11px,1.2vw,15px)] font-normal leading-snug text-black">
          {subtitle}
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-3 px-4 pb-4 md:hidden 2xl:px-5 2xl:pb-5">
        {rows.map((row, i) => (
          <div
            key={row.metric}
            className="rounded-[8px] border border-[#EAEAEA] p-3"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[12px] font-semibold text-black">
                {i + 1}. {row.metric}
              </span>
              <span
                className="text-[20px] font-bold leading-none"
                style={{ color: guidanceColor(row.level) }}
              >
                {row.score}
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between gap-2">
              <span
                className="flex h-[28px] w-[120px] items-center justify-center rounded-[7px] px-2 text-[11px] font-semibold text-white"
                style={{ backgroundColor: guidanceColor(row.level) }}
              >
                {row.level}
              </span>
            </div>
            <p className="mt-2 text-[10px] font-semibold leading-[14px] text-black">
              {row.meaning}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 hidden md:block">
        <table className="w-full table-fixed border-collapse">
          <colgroup>
            <col style={{ width: "4%" }} />
            <col style={{ width: "22%" }} />
            <col style={{ width: "14%" }} />
            <col style={{ width: "16%" }} />
            <col style={{ width: "18%" }} />
          </colgroup>
          <thead>
            <tr className="text-[clamp(10px,1vw,13px)] font-semibold leading-snug text-[#194783]">
              <th
                className={cn(
                  cellPadding,
                  "pb-2 pl-4 pr-1.5 text-left align-bottom font-semibold",
                )}
              >
                #
              </th>
              <th
                className={cn(
                  cellPadding,
                  "pb-2 text-left align-bottom font-semibold",
                )}
              >
                {columns.metric}
              </th>
              <th
                className={cn(
                  cellPadding,
                  "pb-2 text-center align-bottom font-semibold",
                )}
              >
                {columns.score[0]}
                <br />
                {columns.score[1]}
              </th>
              <th
                className={cn(
                  cellPadding,
                  "pb-2 text-center align-bottom font-semibold",
                )}
              >
                {columns.level}
              </th>
              <th
                className={cn(
                  cellPadding,
                  "pb-2 pr-4 text-left align-bottom font-semibold",
                )}
              >
                {columns.meaning}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.metric}
                className="border-t-[3px] border-[#EAEAEA] align-middle last:border-b-[3px]"
              >
                <td
                  className={cn(
                    rowCellPadding,
                    "pl-4 pr-1.5 text-[clamp(10px,1vw,13px)] font-semibold text-black",
                  )}
                >
                  {i + 1}
                </td>
                <td
                  className={cn(
                    rowCellPadding,
                    "text-[clamp(10px,1vw,13px)] font-semibold leading-snug text-black",
                  )}
                >
                  {row.metric}
                </td>
                <td className={cn(rowCellPadding, "text-center")}>
                  <span
                    className="text-[clamp(18px,2vw,24px)] font-bold leading-none"
                    style={{ color: guidanceColor(row.level) }}
                  >
                    {row.score}
                  </span>
                </td>
                <td className={cn(rowCellPadding, "text-center")}>
                  <span
                    className="mx-auto flex h-[28px] w-full max-w-[120px] items-center justify-center rounded-[7px] px-1.5 text-[clamp(9px,0.95vw,12px)] font-semibold leading-tight text-white"
                    style={{ backgroundColor: guidanceColor(row.level) }}
                  >
                    {row.level}
                  </span>
                </td>
                <td
                  className={cn(
                    rowCellPadding,
                    "pr-4 text-[clamp(9px,0.95vw,11px)] font-semibold leading-[14px] text-black",
                  )}
                >
                  {row.meaning}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 px-4 py-3 xl:justify-start 2xl:px-5 2xl:py-4">
        {legend.map((entry) => (
          <span key={entry.label} className="flex items-center gap-1.5">
            <span
              aria-hidden
              className="size-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span
              className="text-[clamp(9px,0.95vw,12px)] font-semibold"
              style={{ color: entry.color }}
            >
              {entry.label}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
