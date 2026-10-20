import { useLocation } from "react-router-dom";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import TerminalWindow from "@/components/ui/TerminalWindow";

export default function NotFoundPage() {
  const location = useLocation();

  return (
    <Container className="flex flex-col items-center py-24">
      <TerminalWindow title="404.sh" className="w-full max-w-xl">
        <div className="space-y-1 font-mono text-sm">
          <p>
            <span className="text-accent">$</span> <span className="text-body">cd {location.pathname}</span>
          </p>
          <p className="text-pink">{`bash: cd: ${location.pathname}: No such file or directory`}</p>
        </div>
        <p className="mt-6 text-body/80">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="mt-8">
          <Button to="/">cd ~</Button>
        </div>
      </TerminalWindow>
    </Container>
  );
}
