import { resume } from "@/data/resume";
import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import EducationSection from "@/components/resume/EducationSection";
import SkillsSection from "@/components/resume/SkillsSection";
import WorkHistorySection from "@/components/resume/WorkHistorySection";

export default function ResumePage() {
  return (
    <Container className="py-16 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-400">{site.role}</p>
      <h1 className="mt-2 text-4xl">{site.displayName}</h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-400">{resume.summary}</p>

      <div className="mt-16">
        <SkillsSection skills={resume.skills} />
      </div>
      <WorkHistorySection workHistory={resume.workHistory} />
      <EducationSection education={resume.education} />
    </Container>
  );
}
