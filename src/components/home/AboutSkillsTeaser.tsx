import { resume } from "@/data/resume";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const TEASER_SKILL_COUNT = 8;

export default function AboutSkillsTeaser() {
  const teaserSkills = resume.skills.flatMap((group) => group.skills).slice(0, TEASER_SKILL_COUNT);

  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="About" title="A bit about me" description={resume.summary} />
        <div className="mt-6 flex flex-wrap gap-2">
          {teaserSkills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
        <div className="mt-8">
          <Button to="/resume" variant="secondary">
            View full resume
          </Button>
        </div>
      </Container>
    </section>
  );
}
