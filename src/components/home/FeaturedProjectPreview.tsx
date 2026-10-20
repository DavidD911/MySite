import { projects } from "@/data/projects";
import Container from "@/components/layout/Container";
import FeaturedProjectCard from "@/components/ui/FeaturedProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function FeaturedProjectPreview() {
  const featuredProject = projects.find((project) => project.featuredOnHome);

  if (!featuredProject) {
    return null;
  }

  return (
    <section className="bg-slate-900/40 py-20">
      <Container>
        <SectionHeading eyebrow="Featured Work" title="A project I&rsquo;m proud of" />
        <div className="mt-10 max-w-xl">
          <FeaturedProjectCard project={featuredProject} />
        </div>
        <div className="mt-8">
          <Button to="/projects" variant="secondary">
            View all projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
