import type { EducationEntry } from "@/data/types";
import SectionHeading from "@/components/ui/SectionHeading";
import TerminalWindow from "@/components/ui/TerminalWindow";

interface EducationSectionProps {
  education: EducationEntry[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="mt-16">
      <SectionHeading eyebrow="education" title="Academic background" />
      <div className="mt-8 space-y-4">
        {education.map((entry) => (
          <TerminalWindow key={entry.id} title="education.ts">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg">{entry.degree}</h3>
              <p className="font-mono text-xs text-muted">{entry.date}</p>
            </div>
            <p className="text-body/80">{entry.school}</p>
          </TerminalWindow>
        ))}
      </div>
    </section>
  );
}
