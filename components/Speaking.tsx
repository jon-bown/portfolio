import React, { useState } from 'react';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { PROJECTS, PROFILE } from '../constants';
import { Category, Project } from '../types';
import { byDateAsc, byDateDesc, formatDate, isUpcoming } from '../utils';
import Section from './Section';
import ShowMore from './ShowMore';

const VISIBLE_PAST = 3;

const MEDIA = PROJECTS.filter((p) => p.category === Category.Media);
const UPCOMING = MEDIA.filter((p) => isUpcoming(p.date)).sort(byDateAsc);
const PAST = MEDIA.filter((p) => !isUpcoming(p.date)).sort(byDateDesc);

const UpcomingCard: React.FC<{ item: Project }> = ({ item }) => (
  <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-accent-500/50 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-accent-500/50 dark:hover:shadow-black/20">
    {item.link && (
      <a href={item.link} target="_blank" rel="noreferrer" className="absolute inset-0 z-10" aria-label={item.title} />
    )}

    <div className="grid sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
      {item.imageUrl && (
        <div className="h-44 overflow-hidden bg-slate-100 sm:h-full dark:bg-slate-950">
          <img
            src={item.imageUrl}
            alt=""
            loading="lazy"
            style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-700 dark:text-accent-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-500" />
            Upcoming
          </span>
          {item.date && (
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <CalendarDays size={14} />
              <time dateTime={item.date}>{formatDate(item.date)}</time>
            </span>
          )}
        </div>

        <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug text-slate-900 transition-colors group-hover:text-accent-600 dark:text-slate-50 dark:group-hover:text-accent-400">
          {item.title}
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 dark:text-slate-100">
          Event details
          <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </div>
  </article>
);

const PastRow: React.FC<{ item: Project }> = ({ item }) => (
  <li>
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="group grid gap-2 border-b border-slate-200 py-5 transition-colors hover:border-accent-500/40 sm:grid-cols-[8.5rem_minmax(0,1fr)_auto] sm:items-baseline sm:gap-6 dark:border-slate-800"
    >
      <span className="text-sm tabular-nums text-slate-500 dark:text-slate-500">
        {item.date ? <time dateTime={item.date}>{formatDate(item.date)}</time> : '—'}
      </span>

      <span className="min-w-0">
        <span className="flex flex-wrap items-center gap-2">
          <span className="font-medium text-slate-900 transition-colors group-hover:text-accent-600 dark:text-slate-100 dark:group-hover:text-accent-400">
            {item.title}
          </span>
          {item.badge && (
            <span className="rounded border border-slate-200 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500 dark:border-slate-700 dark:text-slate-400">
              {item.badge}
            </span>
          )}
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {item.description}
        </span>
      </span>

      <ArrowUpRight
        size={16}
        className="hidden shrink-0 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-600 sm:block dark:text-slate-600 dark:group-hover:text-accent-400"
      />
    </a>
  </li>
);

const Speaking: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const visiblePast = expanded ? PAST : PAST.slice(0, VISIBLE_PAST);

  return (
    <Section
      id="speaking"
      eyebrow="Speaking & Media"
      title="Talks, workshops, and appearances"
      intro="Conference sessions, podcasts, and community work on MLOps and applied machine learning."
      tinted
      aside={
        <a
          href={PROFILE.links.email}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-accent-600 hover:decoration-accent-500 dark:text-slate-300 dark:decoration-slate-700 dark:hover:text-accent-400"
        >
          Invite me to speak
          <ArrowUpRight size={14} />
        </a>
      }
    >
      {UPCOMING.length > 0 && (
        <div className="mb-14 space-y-5">
          {UPCOMING.map((item) => (
            <UpcomingCard key={item.id} item={item} />
          ))}
        </div>
      )}

      <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
        Previous appearances
      </h3>
      <ul id="past-appearances">
        {visiblePast.map((item) => (
          <PastRow key={item.id} item={item} />
        ))}
      </ul>

      <ShowMore
        expanded={expanded}
        onToggle={() => setExpanded((v) => !v)}
        hiddenCount={PAST.length - VISIBLE_PAST}
        noun="appearance"
        controls="past-appearances"
      />
    </Section>
  );
};

export default Speaking;
