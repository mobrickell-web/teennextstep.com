import { ASSESSMENT_INFO } from "@/components/dashboard/parent-insight/parent-insight-data";

export default function AssessmentInfoCard() {
  const { title, rows } = ASSESSMENT_INFO;

  return (
    <div className="h-full rounded-[11.36px] border-[3px] border-[#EAEAEA] px-2.5 py-4 2xl:px-3 2xl:py-6">
      <h3 className="text-[clamp(16px,1.8vw,21.91px)] font-extrabold leading-snug text-[#194783]">
        {title}
      </h3>
      <dl className="mt-4 space-y-4 2xl:mt-6 2xl:space-y-5">
        {rows.map((row) => (
          <div key={row.label} className="flex flex-col gap-1 sm:flex-row">
            <dt className="shrink-0 text-[clamp(11px,1.2vw,15.91px)] font-bold leading-snug text-black sm:w-[7rem] 2xl:w-[130px] 2xl:leading-[22.73px]">
              {row.label}
            </dt>
            <dd className="min-w-0 flex-1 text-[clamp(11px,1.2vw,15.91px)] font-bold leading-snug text-black 2xl:leading-[22.73px]">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
