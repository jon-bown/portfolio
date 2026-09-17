import React from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '../constants';
import { SOCIAL_LINKS } from './SocialLinks';

const Contact: React.FC = () => (
  <section
    id="contact"
    aria-labelledby="contact-heading"
    className="border-t border-slate-200/80 dark:border-slate-800/80"
  >
    <div className="mx-auto w-full max-w-content px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600 dark:text-accent-400">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50"
          >
            Let&rsquo;s Connect
          </h2>

          <div className="mt-8">
            <a
              href={PROFILE.links.email}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-600 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-accent-400"
            >
              <Mail size={16} />
              Send an email
            </a>
          </div>

          <p className="mt-6 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-500">
            <MapPin size={14} />
            {PROFILE.location}
          </p>
        </div>

        {/* Elsewhere */}
        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-500">
            Elsewhere
          </h3>
          <ul className="grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2 dark:border-slate-800 dark:bg-slate-800">
            {SOCIAL_LINKS.map((link, idx) => (
              // An odd final item spans both columns so no empty cell shows through.
              <li
                key={link.label}
                className={
                  idx === SOCIAL_LINKS.length - 1 && SOCIAL_LINKS.length % 2 === 1
                    ? 'sm:col-span-2'
                    : undefined
                }
              >
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="group flex h-full items-center gap-3 bg-paper p-4 transition-colors hover:bg-white dark:bg-ink dark:hover:bg-slate-900"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors group-hover:text-accent-600 dark:bg-slate-900 dark:text-slate-400 dark:group-hover:text-accent-400">
                    {link.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-500">
                      {link.label}
                    </span>
                    <span className="block truncate text-sm font-medium text-slate-900 dark:text-slate-200">
                      {link.handle}
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
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
