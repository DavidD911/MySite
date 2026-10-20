import type { EducationEntry } from "@/data/types";
import SectionHeading from "@/components/ui/SectionHeading";

interface EducationSectionProps {
  education: EducationEntry[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="mt-16">
      <SectionHeading eyebrow="Education" title="Academic background" />
      <div className="mt-8 space-y-4">
        {education.map((entry) => (
          <article
            key={entry.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg">{entry.degree}</h3>
              <p className="text-sm text-slate-500">{entry.date}</p>
            </div>
            <p className="mt-1 text-slate-400">{entry.school}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
