import type { SkillGroup } from "@/data/types";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

interface SkillsSectionProps {
  skills: SkillGroup[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section>
      <SectionHeading eyebrow="Skills" title="Tools & technologies" />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-base">{group.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
