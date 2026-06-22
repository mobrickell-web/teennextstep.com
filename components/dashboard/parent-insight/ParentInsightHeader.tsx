import { PARENT_INSIGHT_CONTENT } from "@/components/dashboard/parent-insight/parent-insight-data";

export default function ParentInsightHeader() {
  const { welcome, title, subtitle, tagline } = PARENT_INSIGHT_CONTENT.header;

  return (
    <>
      <p className="text-[clamp(22px,2.6vw,32.53px)] font-bold leading-none text-[#E67113]">
        {welcome}
      </p>
      <h1 className="mt-4 text-[clamp(22px,3.2vw,45px)] font-extrabold leading-tight text-[#194783]">
        {title}
      </h1>
      <h2 className="text-[clamp(24px,3.5vw,42.66px)] font-bold leading-none text-[#194783]">
        {subtitle}
      </h2>
      <p className="mt-4 text-[clamp(16px,2.4vw,29.53px)] font-normal leading-[36.1px] text-black">
        {tagline}
      </p>
      <hr className="mt-4 border-0 border-t-[3.08px] border-[#D9D9D9]" />
    </>
  );
}
