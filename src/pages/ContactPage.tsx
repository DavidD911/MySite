import { Linkedin, Mail } from "lucide-react";

import { site } from "@/data/site";
import Container from "@/components/layout/Container";

export default function ContactPage() {
  return (
    <Container className="py-16 text-center sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-400">Contact</p>
      <h1 className="mt-2 text-4xl">Let&rsquo;s talk.</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
        The best way to reach me is by email. I&rsquo;m also on LinkedIn.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-400"
        >
          <Mail size={18} aria-hidden="true" />
          {site.email}
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-base font-semibold text-slate-200 hover:border-slate-500"
        >
          <Linkedin size={18} aria-hidden="true" />
          LinkedIn
        </a>
      </div>
    </Container>
  );
}
