import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { formatDate } from '../utils';
import GithubIcon from './GithubIcon';
import KaggleIcon from './KaggleIcon';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const hasDirectLink = !!project.link;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/50 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-accent-500/50 dark:hover:shadow-black/20">
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

      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-950">
        <img
          src={project.imageUrl}
          alt=""
          loading="lazy"
          style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {project.badge && (
          <span className="absolute right-3 top-3 rounded bg-slate-900/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
            {project.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-600 dark:text-accent-400">
          {project.category}
        </p>

        <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-accent-600 dark:text-slate-100 dark:group-hover:text-accent-400">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* Meta row */}
        <div className="relative z-20 mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
          <div className="flex-1 text-xs text-slate-400 dark:text-slate-500">
            {project.date && <time dateTime={project.date}>{formatDate(project.date)}</time>}
          </div>

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              title="View source on GitHub"
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <GithubIcon size={17} />
            </a>
          )}

          {project.kaggleLink && (
            <a
              href={project.kaggleLink}
              target="_blank"
              rel="noreferrer"
              title="View on Kaggle"
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-sky-600 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-sky-400"
            >
              <KaggleIcon size={17} />
            </a>
          )}

          {hasDirectLink && (
            <ArrowUpRight
              size={16}
              className="text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-600 dark:text-slate-700 dark:group-hover:text-accent-400"
            />
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
