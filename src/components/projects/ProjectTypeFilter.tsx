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
                ? "rounded-full bg-indigo-500 px-4 py-1.5 text-sm font-semibold text-white"
                : "rounded-full border border-slate-700 px-4 py-1.5 text-sm font-semibold text-slate-300 hover:border-slate-500"
            }
          >
            {filterValue}
          </button>
        );
      })}
    </div>
  );
}
