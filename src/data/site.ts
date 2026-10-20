export const site = {
  name: "David J. Desrochers",
  displayName: "David Desrochers",
  role: "Full-Stack Software Engineer",
  email: "dj.desrochers98@gmail.com",
  linkedin: "https://www.linkedin.com/in/david-desrochers-679481263/",
};

export interface NavLink {
  label: string;
  to: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];
