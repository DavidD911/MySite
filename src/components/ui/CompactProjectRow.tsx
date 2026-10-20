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
    <div className="flex flex-col gap-4 border-b border-slate-800 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-base font-semibold text-slate-100">{project.name}</h3>
          <Badge>{project.type}</Badge>
        </div>
        <p className="mt-1 text-sm text-slate-400">{project.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {visibleTech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {remainingTech > 0 ? <Badge>{`+${remainingTech} more`}</Badge> : null}
        </div>
      </div>

      <div className="shrink-0 sm:text-right">
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Visit
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        ) : (
          <p className="text-sm italic text-slate-500">{project.linkNote}</p>
        )}
      </div>
    </div>
  );
}
