import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-400">{eyebrow}</p>
      <h2 className="mt-2 text-3xl sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-slate-400">{description}</p> : null}
    </div>
  );
}
