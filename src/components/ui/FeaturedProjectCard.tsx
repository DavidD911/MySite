import { ExternalLink } from "lucide-react";

import type { Project } from "@/data/types";
import Badge from "./Badge";

interface FeaturedProjectCardProps {
  project: Project;
}

export default function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/20 transition-colors hover:border-slate-700 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl">{project.name}</h3>
        <Badge>{project.type}</Badge>
      </div>

      {project.company || project.durationNote ? (
        <p className="mt-1 text-sm text-slate-500">
          {[project.company, project.durationNote].filter(Boolean).join(" · ")}
        </p>
      ) : null}

      <p className="mt-4 text-slate-300">{project.description}</p>

      {project.metrics && project.metrics.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400">
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
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Visit project
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        ) : (
          <p className="text-sm italic text-slate-500">{project.linkNote}</p>
        )}
      </div>
    </article>
  );
}
