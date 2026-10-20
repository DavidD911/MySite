import { resume } from "@/data/resume";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import TerminalWindow from "@/components/ui/TerminalWindow";

export default function ResumeHighlightsTeaser() {
  const currentRole = resume.workHistory[0];
  const education = resume.education[0];

  return (
    <section className="bg-surface/40 py-20">
      <Container>
        <SectionHeading eyebrow="experience" title="Where I've worked" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {currentRole ? (
            <TerminalWindow title="current-role.ts">
              <p className="font-mono text-xs text-muted">
                {currentRole.startDate} — {currentRole.endDate}
              </p>
              <h3 className="mt-1 text-lg">{currentRole.role}</h3>
              <p className="text-body/80">{currentRole.company}</p>
            </TerminalWindow>
          ) : null}
          {education ? (
            <TerminalWindow title="education.ts">
              <p className="font-mono text-xs text-muted">{education.date}</p>
              <h3 className="mt-1 text-lg">{education.degree}</h3>
              <p className="text-body/80">{education.school}</p>
            </TerminalWindow>
          ) : null}
        </div>
        <div className="mt-8">
          <Button to="/resume" variant="secondary">
            ./resume
          </Button>
        </div>
      </Container>
    </section>
  );
}
