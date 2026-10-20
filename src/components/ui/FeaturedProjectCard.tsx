import { ExternalLink } from "lucide-react";

import type { Project } from "@/data/types";
import Badge from "./Badge";
import TerminalWindow from "./TerminalWindow";

interface FeaturedProjectCardProps {
  project: Project;
}

export default function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <TerminalWindow title={`${project.id}.project.ts`} className="h-full">
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl">{project.name}</h3>
          <Badge>{project.type}</Badge>
        </div>

        {project.company || project.durationNote ? (
          <p className="mt-1 font-mono text-xs text-muted">
            {[project.company, project.durationNote].filter(Boolean).join(" · ")}
          </p>
        ) : null}

        <p className="mt-4 text-body">{project.description}</p>

        {project.metrics && project.metrics.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
            {project.metrics.map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-6">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold text-accent hover:text-accent-dim"
            >
              visit --live
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          ) : (
            <p className="font-mono text-sm text-muted">{`// ${project.linkNote}`}</p>
          )}
        </div>
      </div>
    </TerminalWindow>
  );
}
