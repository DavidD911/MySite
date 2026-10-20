import { Linkedin, Mail } from "lucide-react";

import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import BackLink from "@/components/ui/BackLink";
import Cursor from "@/components/ui/Cursor";
import TerminalWindow from "@/components/ui/TerminalWindow";

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="mb-8 flex justify-end">
        <BackLink />
      </div>

      <div className="mx-auto max-w-xl text-center">
        <TerminalWindow title="contact.sh">
          <div className="space-y-1 font-mono text-sm sm:text-base">
            <p>
              <span className="text-accent">$</span>{" "}
              <span className="text-body">./send-message --to david</span>
              <Cursor />
            </p>
          </div>
          <p className="mt-6 text-body/80">
            The best way to reach me is by email. I'm also on LinkedIn.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded border border-accent/40 bg-accent/10 px-6 py-3 font-mono text-sm font-semibold text-accent hover:border-accent hover:bg-accent/20"
            >
              <Mail size={18} aria-hidden="true" />
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-line px-6 py-3 font-mono text-sm font-semibold text-body hover:border-line-strong hover:text-ink"
            >
              <Linkedin size={18} aria-hidden="true" />
              linkedin
            </a>
          </div>
        </TerminalWindow>
      </div>
    </Container>
  );
}
