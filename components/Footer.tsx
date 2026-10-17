import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => (
  <footer className="border-t border-slate-200/80 dark:border-slate-800/80">
    <div className="mx-auto flex w-full max-w-content flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row lg:px-10 dark:text-slate-500">
      <p>
        &copy; {new Date().getFullYear()} {PROFILE.name} &middot; {PROFILE.title}
      </p>
      <a
        href="#top"
        className="inline-flex items-center gap-1.5 transition-colors hover:text-slate-900 dark:hover:text-slate-200"
      >
        Back to top
        <ArrowUp size={14} />
      </a>
    </div>
  </footer>
);

export default Footer;
