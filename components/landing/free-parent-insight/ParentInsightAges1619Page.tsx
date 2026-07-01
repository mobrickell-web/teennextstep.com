import ParentInsightAssessmentSection from "./ParentInsightAssessmentSection";
import ParentInsightHeroSection from "./ParentInsightHeroSection";
import { PARENT_INSIGHT_1619_ASSESSMENT_CONTENT } from "@/components/landing/free-parent-insight/content/assessment-section-16-19";
import {
  PARENT_INSIGHT_1619_HERO_CONTENT,
  PARENT_INSIGHT_1619_HERO_IMAGE,
} from "@/components/landing/free-parent-insight/content/hero-section-16-19";

export default function ParentInsightAges1619Page() {
  return (
    <>
      <ParentInsightHeroSection
        content={PARENT_INSIGHT_1619_HERO_CONTENT}
        image={PARENT_INSIGHT_1619_HERO_IMAGE}
        sectionId="parent-insight-16-19-hero"
      />
      <ParentInsightAssessmentSection
        content={PARENT_INSIGHT_1619_ASSESSMENT_CONTENT}
        sectionId="parent-insight-16-19-assessment"
      />
    </>
  );
}
