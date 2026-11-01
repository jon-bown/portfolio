export enum Category {
  Mathematics = 'Mathematics',
  MachineLearning = 'Machine Learning',
  Datasets = 'Datasets',
  Notebooks = 'Notebooks',
  Apps = 'Apps',
  Repos = 'Repos',
  Media = 'Media',
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
  /** ISO date, either 'YYYY-MM' or 'YYYY-MM-DD'. Used for sorting and display. */
  date?: string;
  /** CSS object-position for the card image, e.g. '50% 25%'. Defaults to centered. */
  imagePosition?: string;
}

export interface WorkshopResource {
  label: string;
  href: string;
  kind: 'talk' | 'repo' | 'slides';
}

/** A delivered talk or workshop with the materials attendees can take away. */
export interface Workshop {
  id: string;
  event: string;
  title: string;
  /** Where the title links, usually the event's session page. */
  link?: string;
  description: string;
  /** ISO date, either 'YYYY-MM' or 'YYYY-MM-DD'. */
  date: string;
  location?: string;
  imageUrl?: string;
  resources: WorkshopResource[];
}

export interface BlogPost {
  title: string;
  link: string;
  pubDate?: string;
}