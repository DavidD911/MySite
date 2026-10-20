import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400",
  secondary:
    "inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:border-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400",
};

interface InternalButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  to: string;
  external?: false;
}

interface ExternalButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  to: string;
  external: true;
}

type ButtonProps = InternalButtonProps | ExternalButtonProps;

export default function Button({ children, variant = "primary", to, external }: ButtonProps) {
  const className = variantClasses[variant];

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
