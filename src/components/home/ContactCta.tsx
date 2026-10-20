import { Mail } from "lucide-react";

import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function ContactCta() {
  return (
    <section className="py-20">
      <Container className="text-center">
        <h2 className="text-3xl sm:text-4xl">Let&rsquo;s build something together.</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Have a project in mind or just want to connect? I&rsquo;d love to hear from you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400"
          >
            <Mail size={16} aria-hidden="true" />
            {site.email}
          </a>
          <Button to="/contact" variant="secondary">
            Contact page
          </Button>
        </div>
      </Container>
    </section>
  );
}
