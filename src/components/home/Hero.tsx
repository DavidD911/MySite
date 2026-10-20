import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Cursor from "@/components/ui/Cursor";
import TerminalWindow from "@/components/ui/TerminalWindow";

export default function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <TerminalWindow title="david@portfolio — zsh" className="max-w-2xl">
          <div className="space-y-1 font-mono text-sm sm:text-base">
            <p>
              <span className="text-accent">$</span> <span className="text-body">whoami</span>
            </p>
            <p className="text-lg text-ink sm:text-xl">{site.displayName}</p>
            <p className="text-muted">{site.role}</p>
            <p className="pt-4">
              <span className="text-accent">$</span> <span className="text-body">cat about.txt</span>
            </p>
            <p className="max-w-xl text-body">
              I build scalable, maintainable web applications — from responsive frontend UI to
              backend APIs, databases, authentication, and deployment.
              <Cursor />
            </p>
          </div>
        </TerminalWindow>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button to="/projects">./projects</Button>
          <Button to="/contact" variant="secondary">
            ./contact
          </Button>
        </div>
      </Container>
    </section>
  );
}
