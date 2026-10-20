import type { WorkHistoryEntry } from "@/data/types";
import SectionHeading from "@/components/ui/SectionHeading";

interface WorkHistorySectionProps {
  workHistory: WorkHistoryEntry[];
}

export default function WorkHistorySection({ workHistory }: WorkHistorySectionProps) {
  return (
    <section className="mt-16">
      <SectionHeading eyebrow="Experience" title="Work history" />
      <div className="mt-8 space-y-8">
        {workHistory.map((entry) => (
          <article
            key={entry.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg">{entry.role}</h3>
              <p className="text-sm text-slate-500">
                {entry.startDate} — {entry.endDate}
              </p>
            </div>
            <p className="mt-1 text-slate-400">{entry.company}</p>
            {entry.bullets.length > 0 ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
