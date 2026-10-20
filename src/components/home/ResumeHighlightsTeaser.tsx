import { resume } from "@/data/resume";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function ResumeHighlightsTeaser() {
  const currentRole = resume.workHistory[0];
  const education = resume.education[0];

  return (
    <section className="bg-slate-900/40 py-20">
      <Container>
        <SectionHeading eyebrow="Experience" title="Where I&rsquo;ve worked" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {currentRole ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <p className="text-sm text-slate-500">
                {currentRole.startDate} — {currentRole.endDate}
              </p>
              <h3 className="mt-1 text-lg">{currentRole.role}</h3>
              <p className="text-slate-400">{currentRole.company}</p>
            </div>
          ) : null}
          {education ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <p className="text-sm text-slate-500">{education.date}</p>
              <h3 className="mt-1 text-lg">{education.degree}</h3>
              <p className="text-slate-400">{education.school}</p>
            </div>
          ) : null}
        </div>
        <div className="mt-8">
          <Button to="/resume" variant="secondary">
            See full work history
          </Button>
        </div>
      </Container>
    </section>
  );
}
