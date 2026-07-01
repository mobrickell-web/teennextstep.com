import type { Metadata } from "next";

import { ParentInsightAges1619Page } from "@/components/landing";

export const metadata: Metadata = {
  title: "FREE Parent Insight (Ages 16–19) | Teen Next Step",
  description:
    "Rate each Parent Insight statement and discover areas that may need attention as your teen prepares for important education and career decisions.",
};

export default function Page() {
  return <ParentInsightAges1619Page />;
}
