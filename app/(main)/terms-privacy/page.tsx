import type { Metadata } from "next";

import { TermsPrivacyPage } from "@/components/landing";

export const metadata: Metadata = {
  title: "Terms of Use & Privacy Policy | Teen Next Step",
  description:
    "Terms of use, privacy policy, refund policy, and user responsibilities for Teen Next Step.",
};

export default function Page() {
  return <TermsPrivacyPage />;
}
