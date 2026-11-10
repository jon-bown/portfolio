import React from 'react';
import { PROFILE } from '../constants';
import Section from './Section';

const About: React.FC = () => (
  <Section
    id="about"
    eyebrow="About"
    title="Technical Leader, Educator & Speaker"
    tinted
  >
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16">
      {/* Biography */}
      <div className="max-w-prose space-y-5">
        {PROFILE.bio.map((paragraph) => (
          <p
            key={paragraph}
            className="text-base leading-[1.75] text-slate-700 sm:text-lg dark:text-slate-300"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* At a glance */}
      <aside className="lg:pt-2">
        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
          At a glance
        </h3>
        <ul className="space-y-3">
          {PROFILE.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 text-[0.9375rem] leading-snug text-slate-700 dark:text-slate-300"
            >
              <span className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
              {highlight}
            </li>
          ))}
        </ul>

        <dl className="mt-8 space-y-4 border-t border-slate-200 pt-6 text-sm dark:border-slate-800">
          <div>
            <dt className="text-slate-500 dark:text-slate-500">Currently</dt>
            <dd className="mt-1 font-medium text-slate-900 dark:text-slate-100">
              {PROFILE.title}, {PROFILE.company}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500 dark:text-slate-500">Based in</dt>
            <dd className="mt-1 font-medium text-slate-900 dark:text-slate-100">{PROFILE.location}</dd>
          </div>
        </dl>
      </aside>
    </div>
  </Section>
);

export default About;
