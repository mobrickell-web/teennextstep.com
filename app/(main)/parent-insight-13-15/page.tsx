import type { Metadata } from "next";

import { ParentInsightAges1315Page } from "@/components/landing";

export const metadata: Metadata = {
  title: "FREE Parent Insight (Ages 13–15) | Teen Next Step",
  description:
    "Rate each Parent Insight statement and discover areas that may benefit from attention as your teen develops direction, awareness, and readiness for the future.",
};

export default function Page() {
  return <ParentInsightAges1315Page />;
}
