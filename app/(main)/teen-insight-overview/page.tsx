import type { Metadata } from "next";

import { TeenInsightOverviewPage } from "@/components/landing";

export const metadata: Metadata = {
  title: "Teen Insight Overview | Teen Next Step",
  description:
    "Discover what makes you tick with the FREE Teen Alignment Insight — a quick personal insight experience for teens before major life, education, or future decisions.",
};

export default function Page() {
  return <TeenInsightOverviewPage />;
}
