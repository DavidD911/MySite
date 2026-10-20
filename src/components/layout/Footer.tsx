import { Linkedin, Mail } from "lucide-react";

import { site } from "@/data/site";
import Container from "./Container";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <Container className="flex flex-col items-center gap-4 py-8 text-sm text-slate-400 sm:flex-row sm:justify-between">
        <p>© {currentYear} {site.displayName}</p>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-1.5 hover:text-slate-200"
          >
            <Mail size={16} aria-hidden="true" />
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-slate-200"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
