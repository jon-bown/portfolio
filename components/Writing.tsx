import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE, PROJECTS } from '../constants';
import { Category } from '../types';
import { byDateDesc, formatDate } from '../utils';
import BlogList from './BlogList';
import Section from './Section';

const FEATURED = PROJECTS.filter((p) => p.category === Category.Blog).sort(byDateDesc);
const [LEAD, ...REST] = FEATURED;

const Writing: React.FC = () => (
  <Section
    id="writing"
    eyebrow="Writing"
    title="Articles and Blog posts"
    aside={
      <a
        href={PROFILE.links.blog}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-accent-600 hover:decoration-accent-500 dark:text-slate-300 dark:decoration-slate-700 dark:hover:text-accent-400"
      >
        All posts
        <ArrowUpRight size={14} />
      </a>
    }
  >
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
      {/* Featured publications: the newest leads, the rest stay compact */}
      {FEATURED.length > 0 && (
        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
            Featured
          </h3>

          <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-accent-500/50 hover:shadow-lg hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-accent-500/50 dark:hover:shadow-black/20">
            {LEAD.link && (
              <a
                href={LEAD.link}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 z-10"
                aria-label={LEAD.title}
              />
            )}
            {LEAD.imageUrl && (
              <div className="aspect-[16/7] overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={LEAD.imageUrl}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            )}
            <div className="p-5">
              {LEAD.date && (
                <time
                  dateTime={LEAD.date}
                  className="text-xs tabular-nums text-slate-500 dark:text-slate-500"
                >
                  {formatDate(LEAD.date)}
                </time>
              )}
              <h4 className="mt-1.5 font-serif text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-accent-600 dark:text-slate-100 dark:group-hover:text-accent-400">
                {LEAD.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {LEAD.description}
              </p>
            </div>
          </article>

          {REST.length > 0 && (
            <ul className="mt-4 space-y-3">
              {REST.map((article) => (
                <li key={article.id}>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-3 transition-all hover:-translate-y-0.5 hover:border-accent-500/50 hover:shadow-lg hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-accent-500/50 dark:hover:shadow-black/20"
                  >
                    {article.imageUrl && (
                      <img
                        src={article.imageUrl}
                        alt=""
                        loading="lazy"
                        className="h-14 w-20 shrink-0 rounded-lg object-cover"
                      />
                    )}
                    <span className="min-w-0 flex-1">
                      {article.date && (
                        <time
                          dateTime={article.date}
                          className="block text-xs tabular-nums text-slate-500 dark:text-slate-500"
                        >
                          {formatDate(article.date)}
                        </time>
                      )}
                      <span className="mt-0.5 block text-sm font-medium leading-snug text-slate-900 transition-colors group-hover:text-accent-600 dark:text-slate-100 dark:group-hover:text-accent-400">
                        {article.title}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-600 dark:text-slate-700 dark:group-hover:text-accent-400"
                    />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Recent posts from the feed */}
      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
          From the blog
        </h3>
        <BlogList />
      </div>
    </div>
  </Section>
);

export default Writing;
