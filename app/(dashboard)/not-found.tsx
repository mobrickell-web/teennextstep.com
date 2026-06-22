import { Typography } from "@/components/ui/typography";

export default function DashboardNotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-2 text-center">
      <Typography variant="h4" as="h1">
        Page not found
      </Typography>
      <Typography variant="muted">
        This dashboard page does not exist yet.
      </Typography>
    </div>
  );
}
