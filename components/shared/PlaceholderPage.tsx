import { Typography } from "@/components/ui/typography";

type PlaceholderPageProps = {
  title: string;
  description?: string;
};

export default function PlaceholderPage({
  title,
  description = "This page is ready for implementation.",
}: PlaceholderPageProps) {
  return (
    <div className="flex min-h-[40vh] flex-col gap-2 p-6">
      <Typography variant="h3" as="h1">
        {title}
      </Typography>
      <Typography variant="muted">{description}</Typography>
    </div>
  );
}
