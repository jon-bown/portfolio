import React, { useMemo, useState } from 'react';
import { PROJECTS } from '../constants';
import { Category } from '../types';
import { byDateDesc } from '../utils';
import ProjectCard from './ProjectCard';
import Section from './Section';
import ShowMore from './ShowMore';

const INITIAL_VISIBLE = 6;

/** Speaking, certifications, and writing each have their own section. */
const EXCLUDED = new Set<Category>([Category.Media, Category.Certifications, Category.Blog]);

const WORK = PROJECTS.filter((p) => !EXCLUDED.has(p.category));

const FILTERS: { id: string; label: string }[] = [
  { id: 'All', label: 'All' },
  { id: Category.MachineLearning, label: 'Machine Learning' },
  { id: Category.Mathematics, label: 'Mathematics' },
  { id: Category.Datasets, label: 'Datasets' },
  { id: Category.Notebooks, label: 'Notebooks' },
  { id: Category.Apps, label: 'Apps' },
  { id: Category.Repos, label: 'Repositories' },
].filter((f) => f.id === 'All' || WORK.some((p) => p.category === f.id));

const Work: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(
    () => (filter === 'All' ? WORK : WORK.filter((p) => p.category === filter)).slice().sort(byDateDesc),
    [filter],
  );

  const visible = expanded ? filtered : filtered.slice(0, INITIAL_VISIBLE);

  const selectFilter = (id: string) => {
    setFilter(id);
    setExpanded(false);
  };

  return (
    <Section
      id="work"
      eyebrow="Work"
      title="Selected projects and research"
      intro="Papers, datasets, notebooks, and applications spanning machine learning, statistics, and software engineering."
    >
      {/* Filters */}
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {FILTERS.map((f) => {
          const isActive = filter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => selectFilter(f.id)}
              aria-pressed={isActive}
              className={`
                rounded-full border px-4 py-1.5 text-sm font-medium transition-colors
                ${isActive
                  ? 'border-slate-900 bg-slate-900 text-white dark:border-slate-50 dark:bg-slate-50 dark:text-slate-900'
                  : 'border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-100'}
              `}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div id="work-grid" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="rounded-xl border border-dashed border-slate-300 py-16 text-center text-slate-500 dark:border-slate-800 dark:text-slate-500">
          Nothing here yet.
        </p>
      )}

      <ShowMore
        expanded={expanded}
        onToggle={() => setExpanded((v) => !v)}
        hiddenCount={filtered.length - INITIAL_VISIBLE}
        noun="project"
        controls="work-grid"
      />
    </Section>
  );
};

export default Work;
