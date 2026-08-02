export type SkillCategory = string;

export interface EvidenceSkill {
  name: string;
  category: SkillCategory;
  tag: string;
  projectsUsed: { title: string; id: string }[];
  internshipsUsed: string[];
  yearsUsed: string;
  evidenceSummary: string;
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
  category: string;
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
  type: "Education" | "Internship" | "Research" | "Competition" | "Milestone" | "Program";
  location: string;
  description: string;
  highlights: string[];
  skillsUsed: string[];
  logoSrc?: string;
  proofSrc?: string;
  verificationLink?: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  specialization: string;
  period: string;
  location: string;
  currentCgpa?: string;
  relevantCoursework: string[];
  researchHighlights: string[];
  academicAchievements: string[];
}

export interface IndustrialCaseStudy {
  id: string;
  company: string;
  role: string;
  period: string;
  mentor?: string;
  location: string;
  objective: string;
  whatIWorkedOn: string[];
  technologies: string[];
  challenges: string[];
  learnings: string[];
  outcome: string;
  logoSrc?: string;
  certificateLink?: string;
}

export interface CertificationEntry {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
  logoSrc?: string;
  verificationUrl?: string;
}

export interface CurrentlyBuildingItem {
  category: "Research" | "Project" | "Learning" | "Future Focus";
  title: string;
  description: string;
  techStack: string[];
  status: "In Active Development" | "Research Phase" | "Upcoming Release";
}

export interface ProofItem {
  id: string;
  title: string;
  category: "Internship Letter" | "Certificate" | "GitHub Code" | "LinkedIn Verification" | "Media & Awards";
  issuer: string;
  date: string;
  description: string;
  evidenceUrl: string;
  logoSrc?: string;
}

export interface FutureRoadmapItem {
  year: string;
  focusArea: string;
  milestones: string[];
  objective: string;
}

export interface Essay {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string;
}

export interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
  badge: string;
  logoSrc?: string;
  proofSrc?: string;
  verificationUrl?: string;
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
