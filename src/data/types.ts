export type ProjectType = "App" | "Portal" | "Website" | "Internal Tool";

export interface Project {
  id: string;
  name: string;
  type: ProjectType;
  description: string;
  tech: string[];
  url?: string;
  linkNote?: string;
  company?: string;
  durationNote?: string;
  metrics?: string[];
  featured: boolean;
  featuredOnHome?: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface WorkHistoryEntry {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  school: string;
  date: string;
}

export interface ResumeData {
  summary: string;
  skills: SkillGroup[];
  workHistory: WorkHistoryEntry[];
  education: EducationEntry[];
}
