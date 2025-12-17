import React from 'react';
import { ExternalLink, Github, Database } from 'lucide-react';
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
        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
           {hasDirectLink && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors bg-emerald-500/10 px-3 py-1.5 rounded-full hover:bg-emerald-500/20"
            >
              <ExternalLink size={14} />
              View Project
            </a>
          )}
          
          <div className="flex-1"></div>

          {hasGithub && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noreferrer"
              className="p-1.5 text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white dark:hover:bg-slate-800 hover:bg-slate-100 rounded-lg transition-all"
              title="View Source on GitHub"
            >
              <Github size={18} />
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