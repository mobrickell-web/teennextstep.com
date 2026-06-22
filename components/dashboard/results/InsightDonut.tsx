"use client";

import { useEffect, useState } from "react";

export type InsightDonutSegment = {
  label: string;
  value: number;
  radius: number;
  startAngle: number;
  endAngle: number;
  color: string;
};

const MIN_VALUE = 15;
const MAX_VALUE = 90;

/** Randomize slice percentages on each page load (client-only). */
export function randomizeInsightDonutSegments(
  template: readonly InsightDonutSegment[],
): InsightDonutSegment[] {
  return template.map((seg) => ({
    ...seg,
    value:
      Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE,
  }));
}

/**
 * Segmented "petal" donut: each slice has its own angular span and an outer
 * radius proportional to its value, so higher percentages reach further out.
 *
 * Angle convention: degrees measured clockwise from the positive x-axis
 * (3 o'clock) in screen space — i.e. 0°=right, 90°=bottom, 180°=left,
 * 270°=top.
 */
export default function InsightDonut({
  segments,
}: {
  segments: readonly InsightDonutSegment[];
}) {
  const [displaySegments, setDisplaySegments] = useState<InsightDonutSegment[]>(
    () => [...segments],
  );

  useEffect(() => {
    setDisplaySegments(randomizeInsightDonutSegments(segments));
  }, [segments]);

  const maxValue = Math.max(...displaySegments.map((s) => s.value), 1);
  const SIZE = 320;
  const cx = SIZE / 2;
  const cy = SIZE / 2;
  const outerLimit = 150; // px from center for the largest slice
  const innerRadius = 46;
  const scale = outerLimit / maxValue;

  // Polar → cartesian (0°=right, clockwise, screen y-down).
  const point = (angleDeg: number, r: number) => {
    const a = (angleDeg * Math.PI) / 180;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  };

  const arcPath = (startDeg: number, endDeg: number, outer: number) => {
    const inner = innerRadius;
    const oStart = point(startDeg, outer);
    const oEnd = point(endDeg, outer);
    const iEnd = point(endDeg, inner);
    const iStart = point(startDeg, inner);
    const largeArc = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
    // Clockwise sweep (sweep-flag 1) for the outer arc, reverse for the inner.
    return [
      `M ${oStart.x} ${oStart.y}`,
      `A ${outer} ${outer} 0 ${largeArc} 1 ${oEnd.x} ${oEnd.y}`,
      `L ${iEnd.x} ${iEnd.y}`,
      `A ${inner} ${inner} 0 ${largeArc} 0 ${iStart.x} ${iStart.y}`,
      "Z",
    ].join(" ");
  };

  const GAP = 0.2; // degrees of gap between slices

  return (
    <div className="aspect-square w-full max-w-[340px]">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="h-full w-full"
        role="img"
        aria-label="Alignment metrics donut chart"
      >
        {displaySegments.map((seg, i) => {
          const start = seg.startAngle + GAP / 2;
          const end = seg.endAngle - GAP / 2;
          const mid = (seg.startAngle + seg.endAngle) / 2;
          const outer = seg.value * scale;
          const labelPos = point(mid, (innerRadius + outer) / 2);

          return (
            <g key={`${seg.color}-${i}`}>
              <path d={arcPath(start, end, outer)} fill={seg.color} />
              <text
                x={labelPos.x}
                y={labelPos.y}
                fill="#FFFFFF"
                textAnchor="middle"
                dominantBaseline="central"
                className="text-[15px] font-semibold"
              >
                {`${seg.value}%`}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
