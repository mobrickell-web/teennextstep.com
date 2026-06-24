"use client";

import DynamicMetricsChart, {
  type MetricChartItem,
} from "@/components/dashboard/results/DynamicMetricsChart";

export type InsightDonutSegment = MetricChartItem;

export default function InsightDonut({
  segments,
  cutoutBackground = "#EAEAEA",
  activeLabel,
  onActiveLabelChange,
}: {
  segments: readonly InsightDonutSegment[];
  cutoutBackground?: string;
  activeLabel?: string | null;
  onActiveLabelChange?: (label: string | null) => void;
}) {
  return (
    <DynamicMetricsChart
      data={segments}
      cutoutBackground={cutoutBackground}
      activeLabel={activeLabel}
      onActiveLabelChange={onActiveLabelChange}
      aria-label="Alignment metrics donut chart"
    />
  );
}
