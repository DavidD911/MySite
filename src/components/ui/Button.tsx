import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "inline-flex items-center gap-2 rounded border border-accent/40 bg-accent/10 px-5 py-2.5 font-mono text-sm font-semibold text-accent hover:border-accent hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
  secondary:
    "inline-flex items-center gap-2 rounded border border-line px-5 py-2.5 font-mono text-sm font-semibold text-body hover:border-line-strong hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
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
