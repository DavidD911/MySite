import type { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({ title, children, className = "" }: TerminalWindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-line bg-surface shadow-lg shadow-black/40 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-pink/70" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow/70" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" aria-hidden="true" />
        <span className="ml-2 truncate font-mono text-xs text-muted">{title}</span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
