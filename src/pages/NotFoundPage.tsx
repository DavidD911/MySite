import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFoundPage() {
  return (
    <Container className="flex flex-col items-center py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-400">404</p>
      <h1 className="mt-2 text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-slate-400">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <div className="mt-8">
        <Button to="/">Back to home</Button>
      </div>
    </Container>
  );
}
