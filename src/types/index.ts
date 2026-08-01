export type SkillCategory = 
  | "AI & Machine Learning" 
  | "Backend & Systems Architecture" 
  | "Frontend & User Experience" 
  | "Tools, Cloud & DevOps";

export interface SkillItem {
  name: string;
  level: number; // 1-100
  tag: string;
  highlight?: boolean;
}

export interface SkillGroup {
  category: SkillCategory;
  description: string;
  skills: SkillItem[];
}

export interface CaseStudy {
  problemStatement: string;
  motivation: string;
  research: string;
  systemArchitecture: string[];
  developmentProcess: string[];
  challengesAndSolutions: { challenge: string; solution: string }[];
  impact: string[];
  lessonsLearned: string[];
  futureImprovements?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: "AI & Computer Vision" | "HPC & Developer Tools" | "Full-Stack & Systems" | "IoT & Environmental" | "Healthcare AI";
  featured: boolean;
  year: string;
  impactMetrics: { label: string; value: string }[];
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
  caseStudy: CaseStudy;
  pipelineDiagram?: {
    nodes: { id: string; label: string; sub: string }[];
    connections: { from: string; to: string; label?: string }[];
  };
}

export interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  type: "Education" | "Internship" | "Research" | "Competition" | "Milestone";
  location: string;
  description: string;
  highlights: string[];
  skillsUsed: string[];
  logoSrc?: string;
}

export interface Essay {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string; // Markdown / prose content
}

export interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
  badge: string;
  logoSrc?: string;
}

export interface Chapter {
  id: string;
  index: number;
  number: string;
  title: string;
  subtitle: string;
  tag: string;
}

export interface EditorialPhoto {
  src: string;
  alt: string;
  caption: string;
  aspectRatio: string;
}
