import type { ResumeData } from "./types";

export const resume: ResumeData = {
  summary:
    "Full-Stack Software Engineer with 5+ years of experience building scalable, maintainable web applications across responsive frontend UI, backend APIs, databases, authentication, testing, and deployment. Proficient in React, TypeScript, Node.js, Python, REST/HTTP APIs, SQL, Agile delivery, and cross-functional collaboration.",
  skills: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Angular", "Ionic"],
    },
    {
      category: "Backend/Data",
      skills: [
        "Node.js",
        "Python",
        "C#",
        "REST/HTTP APIs",
        "Microservices",
        "SQL Server",
        "SQL",
        "MongoDB",
        "Postgres",
      ],
    },
    {
      category: "AI & Development",
      skills: ["OpenAI Codex", "Claude", "GitHub Copilot", "AI-Assisted Software Development"],
    },
    {
      category: "Tools/Cloud",
      skills: [
        "GitHub",
        "GitLab",
        "Jira",
        "Agile/Scrum",
        "CI/CD",
        "AWS",
        "Docker",
        "JWT",
        "RBAC",
        "Code Review",
        "Debugging",
        "Testing",
      ],
    },
  ],
  workHistory: [
    {
      id: "wagner",
      role: "Full Stack Software Engineer",
      company: "Wagner Equipment Co.",
      startDate: "Nov 2025",
      endDate: "Present",
      bullets: [
        "Lead end-to-end legacy asset management rebuild using React, TypeScript, C#, and SQL Server, delivering responsive web UI, backend APIs, data storage, authentication, and role-based workflows.",
        "Own the full development lifecycle of a tool crib application as sole developer, including technical design, coding, testing, user feedback, iterative releases, and Phase 2 enhancements.",
        "Build maintainable full-stack features with responsive UI components, REST/HTTP APIs, database-backed services, TanStack Query, JWT authentication, and role-based access control.",
        "Use OpenAI Codex, Claude, and GitHub Copilot to accelerate implementation, debugging, refactoring, and validation of AI-assisted solutions.",
      ],
    },
    {
      id: "cis-services",
      role: "Software Engineer",
      company: "CIS Services, LLC",
      startDate: "Oct 2020",
      endDate: "Nov 2025",
      bullets: [
        "Developed and maintained responsive React, Angular, TypeScript, Ionic, and SCSS applications for customer-facing web workflows.",
        "Collaborated across Agile projects to implement frontend and backend features, resolve defects, improve UX and performance, test releases, and deliver maintainable solutions on schedule.",
        "Applied AI-assisted workflows to accelerate coding, troubleshooting, refactoring, and delivery while reviewing output for correctness and maintainability.",
      ],
    },
    {
      id: "adams-county",
      role: "Parks Worker",
      company: "Adams County Parks & Open Space",
      startDate: "Jun 2023",
      endDate: "Nov 2025",
      bullets: [],
    },
  ],
  education: [
    {
      id: "cu-denver",
      degree: "Bachelor of Arts in Computer Science",
      school: "University of Colorado Denver",
      date: "May 2023",
    },
  ],
};
