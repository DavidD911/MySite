import { resume } from "@/data/resume";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import BackLink from "@/components/ui/BackLink";
import EducationSection from "@/components/resume/EducationSection";
import SkillsSection from "@/components/resume/SkillsSection";
import WorkHistorySection from "@/components/resume/WorkHistorySection";

export default function ResumePage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-sm text-muted">
            <span className="text-accent">{"// "}</span>
            {site.role}
          </p>
          <h1 className="mt-2 text-4xl">{site.displayName}</h1>
          <p className="mt-6 max-w-2xl text-lg text-body/80">{resume.summary}</p>
        </div>
        <BackLink />
      </div>

      <div className="mt-16">
        <SkillsSection skills={resume.skills} />
      </div>
      <WorkHistorySection workHistory={resume.workHistory} />
      <EducationSection education={resume.education} />
    </Container>
  );
}
