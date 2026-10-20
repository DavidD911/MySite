import { useMemo, useState } from "react";

import { projects } from "@/data/projects";
import Container from "@/components/layout/Container";
import BackLink from "@/components/ui/BackLink";
import CompactProjectRow from "@/components/ui/CompactProjectRow";
import FeaturedProjectCard from "@/components/ui/FeaturedProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectTypeFilter, { type ProjectTypeFilterValue } from "@/components/projects/ProjectTypeFilter";

export default function ProjectsPage() {
  const [typeFilter, setTypeFilter] = useState<ProjectTypeFilterValue>("All");

  const featuredProjects = projects.filter((project) => project.featured);
  const moreProjects = projects.filter((project) => !project.featured);

  const isFiltering = typeFilter !== "All";

  const filteredProjects = useMemo(
    () => (isFiltering ? projects.filter((project) => project.type === typeFilter) : []),
    [isFiltering, typeFilter],
  );

  return (
    <Container className="py-16 sm:py-20">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <SectionHeading
          eyebrow="work"
          title="Projects"
          description="A selection of apps, portals, and websites I've designed, built, and managed."
        />
        <BackLink />
      </div>

      <div className="mt-8">
        <ProjectTypeFilter value={typeFilter} onChange={setTypeFilter} />
      </div>

      {isFiltering ? (
        <div className="mt-8">
          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {filteredProjects.map((project) => (
                <FeaturedProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="font-mono text-sm text-muted">{"// no projects match this filter"}</p>
          )}
        </div>
      ) : (
        <>
          <div className="mt-12">
            <h2 className="text-2xl">Featured Projects</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {featuredProjects.map((project) => (
                <FeaturedProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl">More Projects</h2>
            <div className="mt-6">
              {moreProjects.map((project) => (
                <CompactProjectRow key={project.id} project={project} />
              ))}
            </div>
          </div>
        </>
      )}
    </Container>
  );
}
