import type { Metadata } from "next";

import { OurTeamPage } from "@/components/landing";

export const metadata: Metadata = {
  title: "Our Team | Teen Next Step",
  description:
    "Meet the Teen Next Step team — Ambassadors and Parent-Teen Alignment Architects dedicated to helping families gain clarity and move forward with confidence.",
};

export default function Page() {
  return <OurTeamPage />;
}
