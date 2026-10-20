import { useMemo, useState } from "react";

import { projects } from "@/data/projects";
import Container from "@/components/layout/Container";
import CompactProjectRow from "@/components/ui/CompactProjectRow";
import FeaturedProjectCard from "@/components/ui/FeaturedProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectTypeFilter, { type ProjectTypeFilterValue } from "@/components/projects/ProjectTypeFilter";

export default function ProjectsPage() {
  const [typeFilter, setTypeFilter] = useState<ProjectTypeFilterValue>("All");

  const featuredProjects = projects.filter((project) => project.featured);
  const moreProjects = projects.filter((project) => !project.featured);

  const filteredMoreProjects = useMemo(
    () =>
      typeFilter === "All"
        ? moreProjects
        : moreProjects.filter((project) => project.type === typeFilter),
    [moreProjects, typeFilter],
  );

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Work"
        title="Projects"
        description="A selection of apps, portals, and websites I've designed, built, and managed."
      />

      <div className="mt-12">
        <h2 className="text-2xl">Featured Projects</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl">More Projects</h2>
          <ProjectTypeFilter value={typeFilter} onChange={setTypeFilter} />
        </div>
        <div className="mt-6">
          {filteredMoreProjects.map((project) => (
            <CompactProjectRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
}
