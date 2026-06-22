import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import {
  SIDEBAR_ITEMS,
  SIDEBAR_PROFILE,
} from "@/components/dashboard/parent-insight/parent-insight-data";
import {
  PARENT_INSIGHT_AVATAR,
  PARENT_INSIGHT_LOCK_ICON,
} from "@/components/dashboard/parent-insight/constants";
import { cn } from "@/lib/utils";

export default function ParentInsightSidebar({
  className,
}: {
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-10 grid h-svh w-[var(--parent-insight-sidebar-width)] max-lg:hidden grid-rows-[auto_auto_minmax(0,1fr)] overflow-hidden bg-[#EAEAEA] px-5 pb-4 pt-[calc(4rem+1.5rem)] lg:pt-[calc(4.5rem+1.5rem)]",
        className,
      )}
    >
      <div className="flex shrink-0 flex-col items-center text-center">
        <Image
          src={PARENT_INSIGHT_AVATAR}
          alt=""
          width={130}
          height={131}
          aria-hidden
          className="h-[130px] w-[130px]"
        />
        <p className="mt-4 text-[clamp(15px,1.7vw,18.79px)] font-extrabold leading-[20.54px] text-black">
          {SIDEBAR_PROFILE.name[0]}
          <br />
          {SIDEBAR_PROFILE.name[1]}
        </p>
        <Link
          href={SIDEBAR_PROFILE.helpHref}
          className="mt-3 text-[clamp(12px,1.3vw,14.54px)] font-medium leading-none text-[#194783] underline"
        >
          {SIDEBAR_PROFILE.helpLabel}
        </Link>
      </div>

      <div className="mt-9 shrink-0">
        <h2 className="text-[clamp(18px,2.2vw,23.04px)] font-extrabold leading-none text-[#194783]">
          {SIDEBAR_PROFILE.heading}
        </h2>
        <hr className="mt-4 border-0 border-t border-[#C9C9C9]" />
      </div>

      <nav
        aria-label="Parent insight navigation"
        className="parent-insight-sidebar-nav scrollbar-hide mt-1 min-h-0 overflow-y-auto"
      >
        <ul>
          {SIDEBAR_ITEMS.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                className="flex w-full items-center gap-3 border-b border-[#C9C9C9] py-3 text-left"
              >
                <Image
                  src={PARENT_INSIGHT_LOCK_ICON}
                  alt=""
                  width={18}
                  height={18}
                  aria-hidden
                  className="size-[17.89px] shrink-0"
                />
                <span className="flex-1 text-[clamp(15px,1.7vw,18.88px)] font-medium leading-[110%] text-black">
                  {item.label}
                </span>
                {item.expandable ? (
                  <ChevronDown
                    className="size-4 shrink-0 text-black"
                    aria-hidden
                  />
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
