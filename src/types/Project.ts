
export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  date?: string;
  client?: string;
  team?: string[];
  challenge?: string;
  solution?: string;
  screenshots?: string[];
  results?: string;
}