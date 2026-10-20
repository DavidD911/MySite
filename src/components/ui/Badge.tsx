interface BadgeProps {
  children: string;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded border border-line bg-surface-2 px-2 py-1 font-mono text-xs text-blue">
      {children}
    </span>
  );
}
