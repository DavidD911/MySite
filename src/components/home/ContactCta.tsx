import { Mail } from "lucide-react";

import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function ContactCta() {
  return (
    <section className="py-20">
      <Container className="text-center">
        <p className="font-mono text-sm text-muted">
          <span className="text-accent">$</span> ./get-in-touch
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Let's build something together.</h2>
        <p className="mx-auto mt-4 max-w-xl text-body/80">
          Have a project in mind or just want to connect? I'd love to hear from you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded border border-accent/40 bg-accent/10 px-5 py-2.5 font-mono text-sm font-semibold text-accent hover:border-accent hover:bg-accent/20"
          >
            <Mail size={16} aria-hidden="true" />
            {site.email}
          </a>
          <Button to="/contact" variant="secondary">
            ./contact
          </Button>
        </div>
      </Container>
    </section>
  );
}
