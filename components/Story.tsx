import React from 'react';
import { CalendarDays, Mail, MapPin, Users } from 'lucide-react';
import { PROFILE } from '../constants';
import Section from './Section';

const TALK = {
  event: 'Bonnell Aluminum Company Summit',
  location: 'Salt Lake City, UT',
  date: 'June 2025',
};

const Story: React.FC = () => (
  <Section
    id="story"
    eyebrow="Motivational Speaking"
    title="It’s Not Luck, It’s Significant"
    intro="A personal talk about resilience, perspective, and showing up every day."
    tinted
  >
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
      {/* Story */}
      <div className="flex flex-col">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
          <li className="inline-flex items-center gap-1.5">
            <Users size={14} />
            {TALK.event}
          </li>
          <li className="inline-flex items-center gap-1.5">
            <MapPin size={14} />
            {TALK.location}
          </li>
          <li className="inline-flex items-center gap-1.5">
            <CalendarDays size={14} />
            {TALK.date}
          </li>
        </ul>

        <div className="mt-6 space-y-5 text-base leading-[1.75] text-slate-700 sm:text-lg dark:text-slate-300">
          <p>
            In June 2025 I gave <em>It&rsquo;s Not Luck, It&rsquo;s Significant</em> at Bonnell Aluminum&rsquo;s
            company summit in Salt Lake City. It&rsquo;s about the hardest thing I&rsquo;ve faced: fighting and beating cancer.
          </p>
          <p>
            While it may seem like luck to some, I argue that it's a "statistically significant outcome" because the probability of me overcoming cancer due to random chance is extremely low. Instead, I attribute my recovery to the consistent, deliberate actions I took over time, including seeking the best medical care, maintaining a positive mindset, and adhering to a rigorous treatment plan.
          </p>
        </div>

        <blockquote className="mt-8 border-l-2 border-accent-500 pl-5">
          <p className="font-serif text-xl leading-snug text-slate-900 dark:text-slate-50">
            &ldquo;The secret to success is doing a lot of little things consistently over a long period of
            time.&rdquo;
          </p>
          <footer className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            James Lawrence, the Iron Cowboy, quoted in the talk
          </footer>
        </blockquote>

        <div className="mt-9">
          <a
            href={PROFILE.links.email}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-600 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-accent-400"
          >
            <Mail size={15} />
            Invite me to share this talk
          </a>
        </div>
      </div>

      {/* Photos */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
          <img
            src="./images/bonnell-talk-audience.jpg"
            alt="Jonathan Bown on stage speaking to a ballroom audience, with a quote on the screens on either side"
            width={1179}
            height={657}
            loading="lazy"
            className="aspect-[16/9] h-full w-full object-cover"
          />
        </figure>
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
          <img
            src="./images/bonnell-talk-stage.jpg"
            alt="Jonathan Bown speaking on stage"
            width={1179}
            height={657}
            loading="lazy"
            style={{ objectPosition: '65% 30%' }}
            className="aspect-[16/9] h-full w-full object-cover"
          />
        </figure>
      </div>
    </div>
  </Section>
);

export default Story;
