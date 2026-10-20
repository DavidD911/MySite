import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-sm text-muted">
        <span className="text-accent">{"// "}</span>
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-body/80">{description}</p> : null}
    </div>
  );
}
