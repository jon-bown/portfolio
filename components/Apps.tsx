import React from 'react';
import { AppWindow, ArrowUpRight } from 'lucide-react';
import { PROFILE, PROJECTS } from '../constants';
import { Category } from '../types';
import { byDateDesc } from '../utils';
import ProjectCard from './ProjectCard';
import Section from './Section';

const APPS = PROJECTS.filter((p) => p.category === Category.Apps).slice().sort(byDateDesc);

const Apps: React.FC = () => (
  <Section
    id="apps"
    eyebrow="Side projects"
    title="Apps"
    intro="My COVID hobby project that resulted in a few concepts and a few on the App Store. Check it out!"
  >
    {/* Featured: the apps website */}
    <a
      href={PROFILE.links.apps}
      target="_blank"
      rel="noreferrer"
      className="group relative mb-8 flex flex-col gap-6 overflow-hidden rounded-2xl border border-slate-200 bg-paper p-6 transition-all hover:-translate-y-0.5 hover:border-accent-500/50 hover:shadow-xl hover:shadow-slate-900/5 sm:flex-row sm:items-center sm:p-7 dark:border-slate-800 dark:bg-ink dark:hover:border-accent-500/50 dark:hover:shadow-black/20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_20rem_at_100%_0%,rgba(16,185,129,0.12),transparent_60%)]"
      />
      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-700 dark:text-accent-400">
        <AppWindow size={26} />
      </span>
      <div className="relative min-w-0 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-700 dark:text-accent-400">
          Hobby apps
        </p>
        <h3 className="mt-1 font-serif text-xl font-semibold text-slate-900 transition-colors group-hover:text-accent-600 dark:text-slate-50 dark:group-hover:text-accent-400">
          appfactorial.com
        </h3>
      </div>
      <span className="relative inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors group-hover:bg-accent-600 sm:self-center dark:bg-slate-50 dark:text-slate-900 dark:group-hover:bg-accent-400">
        Explore apps
        <ArrowUpRight size={15} />
      </span>
    </a>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {APPS.map((app) => (
        <ProjectCard key={app.id} project={app} />
      ))}
    </div>
  </Section>
);

export default Apps;
