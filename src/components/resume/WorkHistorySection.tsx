import type { WorkHistoryEntry } from "@/data/types";
import SectionHeading from "@/components/ui/SectionHeading";
import TerminalWindow from "@/components/ui/TerminalWindow";

interface WorkHistorySectionProps {
  workHistory: WorkHistoryEntry[];
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function WorkHistorySection({ workHistory }: WorkHistorySectionProps) {
  return (
    <section className="mt-16">
      <SectionHeading eyebrow="experience" title="Work history" />
      <div className="mt-8 space-y-6">
        {workHistory.map((entry) => (
          <TerminalWindow key={entry.id} title={`${slugify(entry.company)}.role.ts`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg">{entry.role}</h3>
              <p className="font-mono text-xs text-muted">
                {entry.startDate} — {entry.endDate}
              </p>
            </div>
            <p className="text-body/80">{entry.company}</p>
            {entry.bullets.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-body">
                    <span className="font-mono text-muted">{">"}</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </TerminalWindow>
        ))}
      </div>
    </section>
  );
}
