import { ABOUT_PARENT_INSIGHT } from "@/components/dashboard/parent-insight/parent-insight-data";
import { cn } from "@/lib/utils";

export default function AboutParentInsightCard({
  className,
}: {
  className?: string;
}) {
  const { title, body, emphasis } = ABOUT_PARENT_INSIGHT;

  return (
    <div
      className={cn(
        "w-full rounded-[11.36px] border-[3px] border-[#EAEAEA] p-3 2xl:p-5",
        className,
      )}
    >      <h3 className="text-[clamp(14px,1.4vw,20px)] font-extrabold leading-snug text-[#194783]">
        {title}
      </h3>
      <p className="mt-2 text-[clamp(9px,0.95vw,12px)] font-medium leading-[14px] text-black 2xl:leading-[16px]">
        {body}
      </p>
      <p className="mt-2 text-[clamp(9px,0.95vw,12px)] font-bold leading-[14px] text-black 2xl:leading-[16px]">
        {emphasis}
      </p>
    </div>
  );
}
