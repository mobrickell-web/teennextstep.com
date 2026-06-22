import AboutParentInsightCard from "@/components/dashboard/parent-insight/AboutParentInsightCard";
import AlignmentMetricsCard from "@/components/dashboard/parent-insight/AlignmentMetricsCard";
import AlignmentMetricsImportantNote from "@/components/dashboard/parent-insight/AlignmentMetricsImportantNote";
import AssessmentInfoCard from "@/components/dashboard/parent-insight/AssessmentInfoCard";
import HowYouCompareCard from "@/components/dashboard/parent-insight/HowYouCompareCard";
import IndividualScoreMeaningCard from "@/components/dashboard/parent-insight/IndividualScoreMeaningCard";
import ParentInsightHeader from "@/components/dashboard/parent-insight/ParentInsightHeader";
import ParentInsightScoreCards from "@/components/dashboard/parent-insight/ParentInsightScoreCards";
import ScoreInterpretationSection from "@/components/dashboard/parent-insight/ScoreInterpretationSection";
import SnapshotSummaryCard from "@/components/dashboard/parent-insight/SnapshotSummaryCard";
import UnlockCtaCard from "@/components/dashboard/parent-insight/UnlockCtaCard";
import WhyInvestBanner from "@/components/dashboard/parent-insight/WhyInvestBanner";

export default function ParentInsightContent() {
  return (
    <div className="w-full">
      <ParentInsightHeader />
      <ParentInsightScoreCards />
      <ScoreInterpretationSection />

      <div className="parent-insight-two-col mt-6">
        <div className="flex min-h-0 min-w-0 flex-col gap-6 lg:h-full">
          <AlignmentMetricsCard className="min-h-0 lg:flex lg:flex-1 lg:flex-col" />
          <AlignmentMetricsImportantNote className="shrink-0" />
        </div>
        <div className="parent-insight-side-col flex min-h-0 min-w-0 flex-col gap-6 lg:h-full">
          <HowYouCompareCard className="shrink-0" />
          <div className="flex min-h-0 min-w-0 lg:flex-1">
            <IndividualScoreMeaningCard />
          </div>
          <AboutParentInsightCard className="shrink-0" />
        </div>
      </div>

      <div className="parent-insight-two-col parent-insight-two-col--snapshot mt-6">
        <div className="min-w-0">
          <SnapshotSummaryCard />
        </div>
        <div className="parent-insight-side-col min-w-0">
          <AssessmentInfoCard />
        </div>
      </div>

      <UnlockCtaCard />
      <WhyInvestBanner />
    </div>
  );
}
