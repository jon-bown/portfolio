import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE, PROJECTS } from '../constants';
import { Category } from '../types';
import Section from './Section';
import ShowMore from './ShowMore';

const VISIBLE_CERTS = 3;

const CERTIFICATIONS = PROJECTS.filter((p) => p.category === Category.Certifications);

const Credentials: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? CERTIFICATIONS : CERTIFICATIONS.slice(0, VISIBLE_CERTS);

  return (
    <Section
      id="credentials"
      eyebrow="Credentials"
      title="Education and certifications"
      intro="Graduate work in computer science and statistics, backed by industry certification in applied machine learning."
    >
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Education */}
        <div>
          <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
            Education
          </h3>
          <ol className="relative space-y-8 border-l border-slate-200 pl-7 dark:border-slate-800">
            {PROFILE.education.map((edu) => (
              <li key={edu.degree} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.03rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-paper bg-accent-500 dark:border-ink"
                />
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent-600 dark:text-accent-400">
                  {edu.year}
                </p>
                <h4 className="mt-1.5 font-serif text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {edu.degree}
                </h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{edu.school}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="mb-7 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
            Certifications
          </h3>
          <ul id="certification-list" className="space-y-3">
            {visible.map((cert) => (
              <li key={cert.id}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-accent-500/50 hover:shadow-lg hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-accent-500/50 dark:hover:shadow-black/20"
                >
                  {cert.imageUrl && (
                    <img
                      src={cert.imageUrl}
                      alt=""
                      loading="lazy"
                      className="h-11 w-11 shrink-0 rounded-lg object-cover"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-semibold leading-snug text-slate-900 transition-colors group-hover:text-accent-600 dark:text-slate-100 dark:group-hover:text-accent-400">
                      {cert.title}
                    </h4>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {cert.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="mt-0.5 shrink-0 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-600 dark:text-slate-600 dark:group-hover:text-accent-400"
                  />
                </a>
              </li>
            ))}
          </ul>

          <ShowMore
            expanded={expanded}
            onToggle={() => setExpanded((v) => !v)}
            hiddenCount={CERTIFICATIONS.length - VISIBLE_CERTS}
            noun="certification"
            controls="certification-list"
          />
        </div>
      </div>
    </Section>
  );
};

export default Credentials;
