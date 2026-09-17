import React from 'react';
import { ArrowDown, MapPin } from 'lucide-react';
import { PROFILE } from '../constants';
import SocialLinks from './SocialLinks';

const Hero: React.FC = () => (
  <section id="top" className="relative overflow-hidden">
    {/* Soft ground wash behind the introduction */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_70%_-10%,rgba(16,185,129,0.10),transparent_60%)] dark:bg-[radial-gradient(60rem_40rem_at_70%_-10%,rgba(16,185,129,0.14),transparent_60%)]"
    />

    <div className="relative mx-auto w-full max-w-content px-6 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-44">
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
        {/* Introduction */}
        <div className="max-w-2xl animate-rise">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            {PROFILE.headline} at {PROFILE.company}
          </p>

          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-50">
            {PROFILE.name}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400">
            {PROFILE.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-600 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-accent-400"
            >
              View selected work
              <ArrowDown size={15} />
            </a>
            <a
              href="#speaking"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-400 dark:hover:text-slate-50"
            >
              Speaking &amp; media
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <SocialLinks />
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-500">
              <MapPin size={14} />
              {PROFILE.location}
            </span>
          </div>
        </div>

        {/* Portrait */}
        <div className="order-first flex justify-center lg:order-none lg:justify-end">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] border border-slate-200/70 dark:border-slate-800/70"
            />
            <img
              src="./images/profile.jpg"
              alt={`Portrait of ${PROFILE.name}`}
              width={288}
              height={352}
              className="relative h-64 w-56 rounded-[1.5rem] object-cover object-top shadow-xl shadow-slate-900/5 sm:h-80 sm:w-64 lg:h-[22rem] lg:w-72 dark:shadow-black/30"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
