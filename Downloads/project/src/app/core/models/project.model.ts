export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  gitHubUrl: string;
  technologies: string[];
  date: string;
  featured: boolean;
  category: string;
}