import type { SkillGroup } from "@/data/types";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import TerminalWindow from "@/components/ui/TerminalWindow";

interface SkillsSectionProps {
  skills: SkillGroup[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section>
      <SectionHeading eyebrow="skills" title="Tools & technologies" />
      <div className="mt-8">
        <TerminalWindow title="skills.ts">
          <div className="space-y-4 font-mono text-sm">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="text-blue">
                  {group.category.toLowerCase().replace(/[^a-z0-9]+/g, "_")}: [
                </p>
                <div className="flex flex-wrap gap-2 py-2 pl-5">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
                <p className="text-muted">],</p>
              </div>
            ))}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
