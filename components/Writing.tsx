import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE, PROJECTS } from '../constants';
import { Category } from '../types';
import { byDateDesc } from '../utils';
import BlogList from './BlogList';
import Section from './Section';

const FEATURED = PROJECTS.filter((p) => p.category === Category.Blog).sort(byDateDesc);

const Writing: React.FC = () => (
  <Section
    id="writing"
    eyebrow="Writing"
    title="Articles and Blog posts"
    tinted
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
      {/* Featured publications */}
      {FEATURED.length > 0 && (
        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
            Featured
          </h3>
          <div className="space-y-4">
            {FEATURED.map((article) => (
              <article
                key={article.id}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-accent-500/50 hover:shadow-lg hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-accent-500/50 dark:hover:shadow-black/20"
              >
                {article.link && (
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 z-10"
                    aria-label={article.title}
                  />
                )}
                {article.imageUrl && (
                  <div className="aspect-[16/7] overflow-hidden bg-slate-100 dark:bg-slate-950">
                    <img
                      src={article.imageUrl}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h4 className="font-serif text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-accent-600 dark:text-slate-100 dark:group-hover:text-accent-400">
                    {article.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {article.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
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
