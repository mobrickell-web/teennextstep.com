import { cn } from "@/lib/utils";

type LandingSectionNumberProps = {
  children: React.ReactNode;
  className?: string;
  /** Use on dark section backgrounds (e.g. primary blue) */
  onDark?: boolean;
};

export function LandingSectionNumber({
  children,
  className,
  onDark = false,
}: LandingSectionNumberProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "landing-section-number pointer-events-none absolute -top-10 left-2 select-none font-semibold leading-none text-[18px] sm:-top-11 sm:left-3 sm:font-extrabold sm:text-[clamp(4.5rem,11vw,107px)] lg:left-4 lg:text-[clamp(3rem,7vw,72px)]",
        onDark && "landing-section-number--on-dark",
        className,
      )}
    >
      {children}
    </span>
  );
}
