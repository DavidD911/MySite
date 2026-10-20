interface BadgeProps {
  children: string;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700">
      {children}
    </span>
  );
}
