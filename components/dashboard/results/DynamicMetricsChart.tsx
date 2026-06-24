"use client";

import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

export type MetricChartItem = {
  label: string;
  /** Percentage value — controls each segment's radial extent. */
  value: number;
  color: string;
};

type DynamicMetricsChartProps = {
  data: readonly MetricChartItem[];
  /** Inner hole size as a fraction of the chart's max radius (0–1). */
  cutout?: number;
  /** Background fill for the center hole — match the surrounding page/card. */
  cutoutBackground?: string;
  className?: string;
  /** Controlled hover — syncs with external legend or list. */
  activeLabel?: string | null;
  onActiveLabelChange?: (label: string | null) => void;
  "aria-label"?: string;
};

const SIZE = 320;
const MAX_OUTER = 158;
const GAP_DEG = 0.25;
const VIEW_PAD = 3;

/** Round SVG coords so server/client trig produce identical attributes. */
function roundCoord(n: number) {
  return Math.round(n * 100) / 100;
}

function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function polarPoint(cx: number, cy: number, r: number, angleDeg: number) {
  const a = degToRad(angleDeg);
  return {
    x: roundCoord(cx + r * Math.cos(a)),
    y: roundCoord(cy + r * Math.sin(a)),
  };
}

/** Annular sector from innerR to outerR, angles in degrees (0° = 3 o'clock, clockwise). */
function annularArcPath(
  cx: number,
  cy: number,
  innerR: number,
  outerR: number,
  startDeg: number,
  endDeg: number,
) {
  const oStart = polarPoint(cx, cy, outerR, startDeg);
  const oEnd = polarPoint(cx, cy, outerR, endDeg);
  const iEnd = polarPoint(cx, cy, innerR, endDeg);
  const iStart = polarPoint(cx, cy, innerR, startDeg);
  const largeArc = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;

  return [
    `M ${oStart.x} ${oStart.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${oEnd.x} ${oEnd.y}`,
    `L ${iEnd.x} ${iEnd.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${iStart.x} ${iStart.y}`,
    "Z",
  ].join(" ");
}

function MetricTooltip({
  label,
  value,
  color,
  x,
  y,
}: {
  label: string;
  value: number;
  color: string;
  x: number;
  y: number;
}) {
  return (
    <div
      className="pointer-events-none absolute z-10 animate-in fade-in-0 zoom-in-95 duration-150"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, calc(-100% - 14px))",
      }}
    >
      <div className="relative min-w-[160px] rounded-[8px] border border-[#D9D9D9] bg-white px-3.5 py-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
        <div className="flex items-start gap-2.5">
          <span
            aria-hidden
            className="mt-0.5 size-3 shrink-0 rounded-[3px]"
            style={{ backgroundColor: color }}
          />
          <div className="min-w-0">
            <p className="text-[11px] font-medium uppercase tracking-wide text-[#666]">
              Metric
            </p>
            <p className="mt-0.5 text-[13px] font-semibold leading-snug text-black">
              {label}
            </p>
          </div>
        </div>
        <p className="mt-2 border-t border-[#EAEAEA] pt-2 text-center text-[22px] font-bold leading-none text-[#194783]">
          {value}%
        </p>
        <span
          aria-hidden
          className="absolute bottom-0 left-1/2 size-2.5 -translate-x-1/2 translate-y-1/2 rotate-45 border-r border-b border-[#D9D9D9] bg-white"
        />
      </div>
    </div>
  );
}

/**
 * Radial polar-area chart with a center cutout (donut-style).
 * Each segment spans equal angle; its outer radius scales with `value`.
 */
export default function DynamicMetricsChart({
  data,
  cutout = 0.32,
  cutoutBackground = "#EAEAEA",
  className,
  activeLabel: controlledActiveLabel,
  onActiveLabelChange,
  "aria-label": ariaLabel = "Alignment metrics chart",
}: DynamicMetricsChartProps) {
  const [internalActiveLabel, setInternalActiveLabel] = useState<string | null>(
    null,
  );

  const activeLabel = controlledActiveLabel ?? internalActiveLabel;
  const setActiveLabel = onActiveLabelChange ?? setInternalActiveLabel;

  const cx = SIZE / 2;
  const cy = SIZE / 2;
  const innerRadius = roundCoord(MAX_OUTER * cutout);
  const band = roundCoord(MAX_OUTER - innerRadius);
  const count = data.length;
  const angleStep = 360 / count;
  const startOffset = -90;
  const viewMin = cx - MAX_OUTER - VIEW_PAD;
  const viewSize = 2 * (MAX_OUTER + VIEW_PAD);

  const segments = useMemo(
    () =>
      data.map((segment, index) => {
        const start = startOffset + index * angleStep + GAP_DEG / 2;
        const end = startOffset + (index + 1) * angleStep - GAP_DEG / 2;
        const outer = roundCoord(innerRadius + (segment.value / 100) * band);
        const mid = startOffset + (index + 0.5) * angleStep;
        const anchor = polarPoint(
          cx,
          cy,
          roundCoord((innerRadius + outer) / 2),
          mid,
        );
        const tooltipX = roundCoord(((anchor.x - viewMin) / viewSize) * 100);
        const tooltipY = roundCoord(((anchor.y - viewMin) / viewSize) * 100);

        return {
          segment,
          path: annularArcPath(cx, cy, innerRadius, outer, start, end),
          outer,
          anchor,
          tooltipX,
          tooltipY,
        };
      }),
    [
      data,
      angleStep,
      band,
      cx,
      cy,
      innerRadius,
      startOffset,
      viewMin,
      viewSize,
    ],
  );

  const activeSegment = segments.find((s) => s.segment.label === activeLabel);

  return (
    <div
      className={cn(
        "relative aspect-square w-full max-w-[340px]",
        className,
      )}
      role="img"
      aria-label={ariaLabel}
      onMouseLeave={() => setActiveLabel(null)}
    >
      <svg
        viewBox={`${viewMin} ${viewMin} ${viewSize} ${viewSize}`}
        className="h-full w-full"
      >
        {segments.map(({ segment, path, anchor }, index) => {
            const isActive = activeLabel === segment.label;
            const isDimmed = activeLabel !== null && !isActive;

            return (
              <g key={`${segment.label}-${index}`}>
                <path
                  d={path}
                  fill={segment.color}
                  stroke="#FFFFFF"
                  strokeWidth={isActive ? 3 : 2.5}
                  className={cn(
                    "cursor-pointer transition-[opacity,filter] duration-200",
                    isDimmed && "opacity-50",
                    isActive && "brightness-110",
                  )}
                  onMouseEnter={() => setActiveLabel(segment.label)}
                  aria-label={`${segment.label}: ${segment.value}%`}
                />
                <text
                  x={anchor.x}
                  y={anchor.y}
                  fill="#FFFFFF"
                  textAnchor="middle"
                  dominantBaseline="central"
                  pointerEvents="none"
                  className={cn(
                    "text-[17px] font-semibold transition-opacity duration-200",
                    isDimmed && "opacity-60",
                  )}
                >
                  {segment.value}%
                </text>
              </g>
            );
          })}

        <circle
          cx={cx}
          cy={cy}
          r={innerRadius}
          fill={cutoutBackground}
          pointerEvents="none"
        />
      </svg>

      {activeSegment ? (
        <MetricTooltip
          label={activeSegment.segment.label}
          value={activeSegment.segment.value}
          color={activeSegment.segment.color}
          x={activeSegment.tooltipX}
          y={activeSegment.tooltipY}
        />
      ) : null}
    </div>
  );
}
