import { ExternalLink } from "lucide-react";

import type { Project } from "@/data/types";
import Badge from "./Badge";

interface CompactProjectRowProps {
  project: Project;
}

const VISIBLE_TECH_COUNT = 4;

export default function CompactProjectRow({ project }: CompactProjectRowProps) {
  const visibleTech = project.tech.slice(0, VISIBLE_TECH_COUNT);
  const remainingTech = project.tech.length - visibleTech.length;

  return (
    <div className="flex flex-col gap-4 border-b border-line py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            loading="lazy"
            className="h-20 w-32 shrink-0 rounded border border-line object-cover object-top"
          />
        ) : null}

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-mono text-base font-semibold text-ink">
              <span className="text-muted">{"> "}</span>
              {project.name}
            </h3>
            <Badge>{project.type}</Badge>
          </div>
          <p className="mt-1 text-sm text-body/80">{project.description}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {visibleTech.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
            {remainingTech > 0 ? <Badge>{`+${remainingTech} more`}</Badge> : null}
          </div>
        </div>
      </div>

      <div className="shrink-0 sm:text-right">
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold text-accent hover:text-accent-dim"
          >
            visit
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        ) : (
          <p className="font-mono text-xs text-muted">{`// ${project.linkNote}`}</p>
        )}
      </div>
    </div>
  );
}
