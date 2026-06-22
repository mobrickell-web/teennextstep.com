import {
  ParentInsightContent,
  ParentInsightSidebar,
} from "@/components/dashboard/parent-insight";

export default function Page() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <ParentInsightSidebar />

      <section className="min-w-0 px-4 py-8 sm:px-8 sm:py-10 lg:ml-[var(--parent-insight-sidebar-width)] lg:px-[var(--parent-insight-content-gap)] lg:py-12">
        <ParentInsightContent />
      </section>
    </div>
  );
}
