import type { Metadata } from "next";

import { ReferralProgramPage } from "@/components/landing";

export const metadata: Metadata = {
  title: "Referral Program | Teen Next Step",
  description:
    "Earn a commission by referring new clients to the Teen Next Step 8-Part Parent–Teen Alignment System.",
};

export default function Page() {
  return <ReferralProgramPage />;
}
