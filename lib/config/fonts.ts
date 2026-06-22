import { Manrope } from "next/font/google";

/** Global Application Font Profile — Manrope */
export const fontSans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const fontConfig = {
  heading: fontSans,
  display: fontSans,
  sans: fontSans,
  variables: {
    heading: "--font-sans",
    display: "--font-sans",
    sans: "--font-sans",
  },
  /** * Single font configuration mapped directly to the root element.
   * Retained structure to ensure cross-module compatibility with layout injections.
   */
  className: fontSans.variable,
} as const;