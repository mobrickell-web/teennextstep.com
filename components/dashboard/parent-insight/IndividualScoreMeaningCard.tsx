import { INDIVIDUAL_SCORE_MEANING } from "@/components/dashboard/parent-insight/parent-insight-data";

export default function IndividualScoreMeaningCard() {
  const { title, rows } = INDIVIDUAL_SCORE_MEANING;

  return (
    <div className="h-full w-full overflow-hidden rounded-[11.36px] border-[3px] border-[#EAEAEA] py-3 2xl:py-5">
      <h3 className="px-3 text-[clamp(14px,1.4vw,20px)] font-extrabold leading-snug text-[#194783] 2xl:px-5">
        {title}
      </h3>

      <div className="mt-2 2xl:mt-4">
        {rows.map((row) => (
          <div
            key={row.range}
            className="flex gap-2 border-t-[3px] border-[#EAEAEA] px-3 py-2 first:border-t-0 first:pt-0 2xl:gap-3 2xl:px-5 2xl:py-3"
          >
            <span className="w-12 shrink-0 text-[clamp(10px,1vw,14px)] font-extrabold leading-snug text-black 2xl:w-16">
              {row.range}
            </span>
            <div className="min-w-0 flex-1">
              <span
                className="text-[clamp(10px,1vw,14px)] font-extrabold leading-snug 2xl:text-[clamp(12px,1.2vw,16px)]"
                style={{ color: row.color }}
              >
                {row.heading}
              </span>
              <p className="mt-1 text-[clamp(9px,0.95vw,12px)] font-medium leading-[14px] text-black 2xl:leading-[16px]">
                {row.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
