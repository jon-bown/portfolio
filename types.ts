export enum Category {
  Mathematics = 'Mathematics',
  MachineLearning = 'Machine Learning',
  Datasets = 'Datasets',
  Notebooks = 'Notebooks',
  Apps = 'Apps',
  Repos = 'Repos',
  Presentations = 'Presentations',
  Certifications = 'Certifications',
  Blog = 'Blog' // Virtual category for the UI
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  imageUrl?: string;
  link?: string;
  githubLink?: string;
  kaggleLink?: string;
  badge?: string;
}

export interface BlogPost {
  title: string;
  link: string;
  pubDate?: string;
}