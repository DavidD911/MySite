import { resume } from "@/data/resume";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

const TEASER_SKILL_COUNT = 8;

export default function AboutSkillsTeaser() {
  const teaserSkills = resume.skills.flatMap((group) => group.skills).slice(0, TEASER_SKILL_COUNT);

  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="about" title="A bit about me" description={resume.summary} />

        <p className="mt-6 font-mono text-sm text-muted">
          <span className="text-blue">const</span> skills = [
        </p>
        <div className="flex flex-wrap gap-2 py-2 pl-5">
          {teaserSkills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
        <p className="font-mono text-sm text-muted">];</p>

        <div className="mt-8">
          <Button to="/resume" variant="secondary">
            ./resume
          </Button>
        </div>
      </Container>
    </section>
  );
}
