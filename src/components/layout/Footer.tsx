import { GitBranch, Linkedin, Mail } from "lucide-react";

import { site } from "@/data/site";
import Container from "./Container";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-2">
      <Container className="flex flex-wrap items-center justify-between gap-3 py-3 font-mono text-xs text-muted">
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1.5">
            <GitBranch size={12} aria-hidden="true" />
            main
          </span>
          <span>UTF-8</span>
          <span>
            © {currentYear} {site.displayName}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-ink">
            <Mail size={12} aria-hidden="true" />
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-ink"
          >
            <Linkedin size={12} aria-hidden="true" />
            linkedin
          </a>
        </div>
      </Container>
    </footer>
  );
}
