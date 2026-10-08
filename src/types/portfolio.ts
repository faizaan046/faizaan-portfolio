
export interface SocialLink {
  label: string;
  url: string;
  icon?: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  title: string;
  location: string;
  degree: string;
  institution: string;
  email: string;
  github: string;
  linkedin: string;
  medium?: string;
  resumePath: string; // e.g. "/resume/faizaan_resume.pdf" — add file to public/resume/
  heroHeadline: string;
  heroParagraph1: string;
  heroParagraph2: string;
  metaDescription: string;
}


export type ProjectStatus = "completed" | "ongoing" | "in-progress";

export interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "demo" | "paper" | "external";
}

export interface ProjectImage {
  src: string;       // e.g. "/images/projects/ai-incident-assistant.png"
  alt: string;
  width: number;
  height: number;
  placeholderLabel: string;  // shown when src is empty
  placeholderDimensions: string; // e.g. "Recommended 1600 × 900"
}

export interface Project {
  id: string;
  index: number;       // display number like 01, 02 …
  title: string;
  category: string;
  status: ProjectStatus;
  problem: string;
  contribution: string;
  stack: string[];
  links: ProjectLink[];
  image: ProjectImage;
  featured: boolean;  // featured projects get larger visual treatment
}


export type ResearchStatus = "published" | "under-review" | "ongoing";

export interface ResearchLink {
  label: string;
  url: string;
}

export interface ResearchItem {
  id: string;
  year: string;       // e.g. "2024" or "Ongoing"
  title: string;
  status: ResearchStatus;
  venue?: string;     // conference/journal name — leave empty if unknown
  abstract: string;
  tags: string[];
  links: ResearchLink[];
  image?: ProjectImage;
}


export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  dates: string;      // e.g. "Aug 2023 – Present" or "[Add dates]"
  description: string;
  highlights?: string[];
}


export interface SkillCategory {
  id: string;
  title: string;
  items: string[];
}


export interface Article {
  id: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date string
  readingTime: string; // e.g. "5 min read"
  url: string;
  coverImage?: ProjectImage;
}
