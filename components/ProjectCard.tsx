import React from 'react';
import { Database } from 'lucide-react';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const hasGithub = !!project.githubLink;
  const hasKaggle = !!project.kaggleLink;
  const hasDirectLink = !!project.link;

  return (
    <article className={`
        group relative overflow-hidden rounded-xl border flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
        bg-white border-slate-200 hover:border-emerald-500/40 hover:shadow-emerald-500/5
        dark:bg-slate-900 dark:border-slate-800/60 dark:hover:border-emerald-500/40 dark:hover:shadow-emerald-500/5
    `}>

      {/* Stretched link covers the whole card */}
      {hasDirectLink && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 z-10"
          aria-label={project.title}
        />
      )}

      {/* Image Container */}
      <div className="h-48 overflow-hidden relative bg-slate-100 dark:bg-slate-950">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent dark:from-slate-900 dark:via-slate-900/20 dark:to-transparent opacity-80"></div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-800 shadow-sm">
          {project.category}
        </div>

        {/* Badge (Beta/etc) */}
        {project.badge && (
          <div className="absolute top-3 right-3 bg-indigo-500 text-white px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-lg">
            {project.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 relative">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Actions */}
        <div className="relative z-20 flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
          <div className="flex-1"></div>

          {hasGithub && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white dark:hover:bg-slate-800 hover:bg-slate-100 rounded-lg transition-all"
              title="View Source on GitHub"
            >
              <GithubIcon size={18} />
            </a>
          )}

          {hasKaggle && (
            <a
              href={project.kaggleLink}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-slate-400 hover:text-sky-600 dark:text-slate-500 dark:hover:text-sky-400 dark:hover:bg-slate-800 hover:bg-slate-100 rounded-lg transition-all"
              title="View on Kaggle"
            >
              <Database size={18} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
