import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function BackLink() {
  return (
    <Link
      to="/"
      className="inline-flex shrink-0 items-center gap-2 rounded border border-line bg-surface px-4 py-2 font-mono text-sm font-semibold text-body hover:border-accent hover:bg-accent/10 hover:text-accent"
    >
      <ArrowLeft size={14} aria-hidden="true" />
      cd ..
    </Link>
  );
}
