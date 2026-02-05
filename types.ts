
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  tools: string[];
  category: 'uiux' | 'dev';
  github?: string;
  demo?: string;
  behanceUrl?: string;
  problem?: string;
  solution?: string;
  process?: string[];
  features?: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  icon: string;
  category: 'frontend' | 'backend' | 'design' | 'tools' | 'mobile' | 'cms';
  officialLink?: string; // Link to official documentation
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
