import { site } from "@/data/site";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-400">
          {site.role}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">
          Hi, I&rsquo;m {site.displayName}.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          I build scalable, maintainable web applications — from responsive frontend UI to
          backend APIs, databases, authentication, and deployment.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button to="/projects">View Projects</Button>
          <Button to="/contact" variant="secondary">
            Contact Me
          </Button>
        </div>
      </Container>
    </section>
  );
}
