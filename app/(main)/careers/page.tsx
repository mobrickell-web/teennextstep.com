import type { Metadata } from "next";

import { CareersPage } from "@/components/landing";

export const metadata: Metadata = {
  title: "Careers | Teen Next Step",
  description:
    "Explore career opportunities with Teen Next Step, including Ambassador and Parent–Teen Alignment Architect roles.",
};

export default function Page() {
  return <CareersPage />;
}
