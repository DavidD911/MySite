import { useState } from "react";
import { Linkedin, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { navLinks, site } from "@/data/site";
import Container from "./Container";

const tabClasses = ({ isActive }: { isActive: boolean }) =>
  `flex items-center border-t-2 px-4 py-4 font-mono text-sm transition-colors ${
    isActive
      ? "border-t-accent bg-surface text-ink"
      : "border-t-transparent text-muted hover:bg-surface/60 hover:text-body"
  }`;

const mobileTabClasses = ({ isActive }: { isActive: boolean }) =>
  `font-mono text-sm ${isActive ? "text-accent" : "text-muted hover:text-body"}`;

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur">
      <Container className="flex items-stretch justify-between">
        <div className="flex items-stretch">
          <Link to="/" aria-label="Home" className="flex items-center gap-1.5 pr-4">
            <span className="h-2.5 w-2.5 rounded-full bg-pink/70" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow/70" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/70" aria-hidden="true" />
          </Link>

          <nav className="hidden md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} className={tabClasses}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hidden text-muted hover:text-ink md:block"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="text-body md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {isMenuOpen ? (
        <nav className="border-t border-line bg-surface md:hidden" aria-label="Mobile navigation">
          <Container className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={mobileTabClasses}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center gap-2 font-mono text-sm text-muted hover:text-body"
            >
              <Linkedin size={16} aria-hidden="true" />
              linkedin
            </a>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
