import React from 'react';

interface SectionProps {
  id: string;
  /** Small uppercase label above the heading. */
  eyebrow: string;
  title: string;
  /** Optional standfirst rendered under the heading. */
  intro?: string;
  /** Content aligned to the right of the heading, e.g. a filter or a link. */
  aside?: React.ReactNode;
  /** Alternating sections get a tinted ground to separate them while scrolling. */
  tinted?: boolean;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, eyebrow, title, intro, aside, tinted = false, children }) => (
  <section
    id={id}
    aria-labelledby={`${id}-heading`}
    className={`
      border-t transition-colors duration-300
      border-slate-200/80 dark:border-slate-800/80
      ${tinted ? 'bg-white dark:bg-slate-900/40' : 'bg-transparent'}
    `}
  >
    <div className="mx-auto w-full max-w-content px-6 py-14 lg:px-10 lg:py-20">
      <div className="mb-9 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-prose">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600 dark:text-accent-400">
            {eyebrow}
          </p>
          <h2
            id={`${id}-heading`}
            className="font-serif text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
          >
            {title}
          </h2>
          {intro && (
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {intro}
            </p>
          )}
        </div>
        {aside && <div className="shrink-0">{aside}</div>}
      </div>
      {children}
    </div>
  </section>
);

export default Section;
