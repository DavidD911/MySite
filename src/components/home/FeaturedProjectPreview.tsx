import { projects } from "@/data/projects";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FeaturedProjectCard from "@/components/ui/FeaturedProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedProjectPreview() {
  const featuredProject = projects.find((project) => project.featuredOnHome);

  if (!featuredProject) {
    return null;
  }

  return (
    <section className="bg-surface/40 py-20">
      <Container>
        <SectionHeading eyebrow="featured-work" title="A project I'm proud of" />
        <div className="mt-10 max-w-xl">
          <FeaturedProjectCard project={featuredProject} />
        </div>
        <div className="mt-8">
          <Button to="/projects" variant="secondary">
            ls ./projects --all
          </Button>
        </div>
      </Container>
    </section>
  );
}
