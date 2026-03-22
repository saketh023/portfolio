export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  accent: 'primary' | 'yellow';
  githubUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  team: string;
  period: string;
  description: string;
  active?: boolean;
}

export interface Skill {
  title: string;
  items: string;
  icon: string;
  accent: 'primary' | 'yellow';
  image: string;
}
