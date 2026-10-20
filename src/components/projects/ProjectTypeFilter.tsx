import type { ProjectType } from "@/data/types";

export type ProjectTypeFilterValue = ProjectType | "All";

const FILTER_VALUES: ProjectTypeFilterValue[] = ["All", "App", "Portal", "Website", "Internal Tool"];

interface ProjectTypeFilterProps {
  value: ProjectTypeFilterValue;
  onChange: (value: ProjectTypeFilterValue) => void;
}

export default function ProjectTypeFilter({ value, onChange }: ProjectTypeFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by type">
      {FILTER_VALUES.map((filterValue) => {
        const isActive = filterValue === value;
        return (
          <button
            key={filterValue}
            type="button"
            onClick={() => onChange(filterValue)}
            aria-pressed={isActive}
            className={
              isActive
                ? "rounded border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-sm text-accent"
                : "rounded border border-line px-3 py-1.5 font-mono text-sm text-muted hover:border-line-strong hover:text-body"
            }
          >
            {`[${filterValue.toLowerCase()}]`}
          </button>
        );
      })}
    </div>
  );
}
