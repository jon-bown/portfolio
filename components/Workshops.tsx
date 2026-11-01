import React from 'react';
import { ArrowUpRight, CalendarDays, MapPin, Mic, Presentation } from 'lucide-react';
import { WORKSHOPS } from '../constants';
import { Workshop, WorkshopResource } from '../types';
import { byDateDesc, formatDate } from '../utils';
import GithubIcon from './GithubIcon';
import Section from './Section';

const SORTED = [...WORKSHOPS].sort(byDateDesc);

const RESOURCE_ICONS: Record<WorkshopResource['kind'], React.ReactNode> = {
  talk: <Mic size={16} />,
  repo: <GithubIcon size={16} />,
  slides: <Presentation size={16} />,
};

const ResourceLink: React.FC<{ resource: WorkshopResource }> = ({ resource }) => (
  <a
    href={resource.href}
    target="_blank"
    rel="noreferrer"
    className="group/link inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 transition-colors hover:border-accent-500/60 hover:text-accent-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-accent-500/60 dark:hover:text-accent-400"
  >
    {RESOURCE_ICONS[resource.kind]}
    {resource.label}
    <ArrowUpRight size={14} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
  </a>
);

const WorkshopCard: React.FC<{ item: Workshop }> = ({ item }) => (
  <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60">
    <div className="grid sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
      {item.imageUrl && (
        <div className="h-44 overflow-hidden bg-slate-100 sm:h-full dark:bg-slate-950">
          <img src={item.imageUrl} alt="" loading="lazy" className="h-full w-full object-cover" />
        </div>
      )}

      <div className="flex flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-700 dark:text-accent-400">
            {item.event}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={14} />
            <time dateTime={item.date}>{formatDate(item.date)}</time>
          </span>
          {item.location && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} />
              {item.location}
            </span>
          )}
        </div>

        <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug text-slate-900 dark:text-slate-50">
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent-600 dark:hover:text-accent-400"
            >
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {item.resources.map((resource) => (
            <ResourceLink key={resource.href} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  </article>
);

const Workshops: React.FC = () => (
  <Section
    id="workshops"
    eyebrow="Workshop Materials"
    title="Code and slides from my sessions"
    intro="Everything you need to follow along after the talk: repos, notebooks, and slide decks."
  >
    <div className="space-y-5">
      {SORTED.map((item) => (
        <WorkshopCard key={item.id} item={item} />
      ))}
    </div>
  </Section>
);

export default Workshops;
