import type { Metadata } from "next";

import { TeenNextStepOverviewPage } from "@/components/landing";

export const metadata: Metadata = {
  title: "Teen Next Step Overview | Teen Next Step",
  description:
    "Before you spend years and thousands of dollars on education or career paths, Teen Next Step helps you see how aligned you and your teen really are on direction, readiness, and what should come next.",
};

export default function Page() {
  return <TeenNextStepOverviewPage />;
}
