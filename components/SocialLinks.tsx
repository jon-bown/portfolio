import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../constants';
import GithubIcon from './GithubIcon';
import KaggleIcon from './KaggleIcon';

export interface SocialLink {
  href: string;
  label: string;
  handle: string;
  icon: React.ReactNode;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { href: PROFILE.links.github, label: 'GitHub', handle: 'Jon-bown', icon: <GithubIcon size={18} /> },
  { href: PROFILE.links.linkedin, label: 'LinkedIn', handle: 'jonathan-bown', icon: <Linkedin size={18} /> },
  { href: PROFILE.links.kaggle, label: 'Kaggle', handle: 'jonbown', icon: <KaggleIcon size={18} /> },
  { href: PROFILE.links.medium, label: 'Medium', handle: '@jonbown', icon: <span className="font-serif text-lg font-bold leading-none">M</span> },
  { href: PROFILE.links.email, label: 'Email', handle: 'Jonathan.k.bown@gmail.com', icon: <Mail size={18} /> },
];

/** Compact icon row used in the hero and footer. */
const SocialLinks: React.FC<{ className?: string }> = ({ className = '' }) => (
  <ul className={`flex items-center gap-2 ${className}`}>
    {SOCIAL_LINKS.map((link) => (
      <li key={link.label}>
        <a
          href={link.href}
          target={link.href.startsWith('mailto:') ? undefined : '_blank'}
          rel="noreferrer"
          title={link.label}
          aria-label={link.label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-accent-500/60 hover:text-accent-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-accent-500/60 dark:hover:text-accent-400"
        >
          {link.icon}
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
