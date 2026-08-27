export interface JobHighlight {
  label: string;
  detail: string;
}

export interface TechnicalSolution {
  title: string;
  desc: string;
  codeSnippet?: string;
  filename?: string;
}

export interface Job {
  company: string;
  logo: string | null;
  role: string;
  period: string;
  location: string;
  desc: string;
  stack: string;
  overview: string;
  highlights: JobHighlight[];
  metrics: string[];
  recognition?: string[];
  stackList: string[];
  diagram?: string;
  problemStatement?: string;
  solutions?: TechnicalSolution[];
  quote?: { text: string; author: string };
}

export interface Project {
  name: string;
  desc: string;
  tags: string[];
  image: string;
  sourceCode?: string;
  liveDemo?: string;
}

export interface Recognition {
  name: string;
  title: string;
  avatar?: string;
  quote: string;
}

export interface Skill {
  name: string;
  label: string;
  color: string;
  icon: string;
  shortDescription: string;
}

export interface AboutCard {
  icon: string;
  title: string;
  desc: string;
}

export interface CareerStat {
  value: string;
  label: string;
}
