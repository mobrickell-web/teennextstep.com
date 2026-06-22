"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ScoreRange } from "@/components/dashboard/parent-insight/parent-insight-data";

export default function ScoreRangeModal({ range }: { range: ScoreRange }) {
  return (
    <Dialog>
      <DialogTrigger
        className="flex h-[33px] w-[142px] items-center justify-center rounded-[7px] p-[10px] text-[clamp(13px,1.5vw,16.91px)] font-semibold leading-[22.73px] text-white transition-opacity hover:opacity-90 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
        style={{ backgroundColor: range.color }}
      >
        {range.label}
      </DialogTrigger>

      <DialogContent className="w-full max-w-[1319px] gap-0 rounded-[10px] bg-white p-[25px] sm:max-w-[1319px]">
        <DialogHeader className="space-y-0">
          <DialogTitle className="text-[clamp(28px,4vw,51px)] font-extrabold leading-[1.1] text-[#194783]">
            {range.title}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 rounded-[9px] bg-[#D9D9D9]/[0.46] p-[clamp(14px,2vw,19px)]">
          <h3 className="text-[clamp(19px,2.4vw,25px)] font-bold leading-[1.4] text-black">
            {range.heading}
          </h3>
          <div className="mt-3 space-y-4 text-[clamp(14px,1.6vw,19px)] font-normal leading-[1.45] text-black">
            {range.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
