import { useState } from "react";
import { Linkedin, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

import { navLinks, site } from "@/data/site";
import Container from "./Container";

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-indigo-400" : "text-slate-300 hover:text-slate-100";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <NavLink to="/" className="text-base font-semibold text-slate-50">
          {site.displayName}
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={navLinkClasses}>
              {link.label}
            </NavLink>
          ))}
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-slate-300 hover:text-slate-100"
          >
            <Linkedin size={20} aria-hidden="true" />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="text-slate-200 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </Container>

      {isMenuOpen ? (
        <nav
          className="border-t border-slate-800 bg-slate-950 md:hidden"
          aria-label="Mobile navigation"
        >
          <Container className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={navLinkClasses}
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
              className="flex items-center gap-2 text-slate-300 hover:text-slate-100"
            >
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
