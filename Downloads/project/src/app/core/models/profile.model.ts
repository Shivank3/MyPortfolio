export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  linkedIn: string;
  gitHub: string;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
}

export interface Skill {
  name: string;
  proficiency: number;
  category: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}