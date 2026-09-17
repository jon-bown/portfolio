import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { PROFILE } from '../constants';

export interface NavItem {
  id: string;
  label: string;
}

interface HeaderProps {
  items: NavItem[];
  activeId: string;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ items, activeId, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Keep the mobile panel from being left open behind a desktop layout.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${isScrolled || isMenuOpen
          ? 'border-b border-slate-200/80 bg-paper/85 backdrop-blur-xl dark:border-slate-800/80 dark:bg-ink/85'
          : 'border-b border-transparent bg-transparent'}
      `}
    >
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between gap-6 px-6 lg:h-20 lg:px-10">
        {/* Wordmark */}
        <a
          href="#top"
          onClick={() => setIsMenuOpen(false)}
          className="group flex shrink-0 flex-col leading-none"
        >
          <span className="font-serif text-lg font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-accent-600 dark:text-slate-50 dark:group-hover:text-accent-400">
            {PROFILE.name}
          </span>
          <span className="mt-0.5 hidden text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:block dark:text-slate-500">
            {PROFILE.title} · {PROFILE.company}
          </span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Section navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`
                      relative rounded-md px-3 py-2 text-sm font-medium transition-colors
                      ${isActive
                        ? 'text-slate-900 dark:text-slate-50'
                        : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'}
                    `}
                  >
                    {item.label}
                    <span
                      className={`
                        absolute inset-x-3 -bottom-0.5 h-px origin-left bg-accent-500 transition-transform duration-300
                        ${isActive ? 'scale-x-100' : 'scale-x-0'}
                      `}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Controls */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-full border border-slate-200 p-2 text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-slate-100"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href={PROFILE.links.email}
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-600 sm:inline-flex dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-accent-400"
          >
            Get in touch
          </a>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="rounded-full border border-slate-200 p-2 text-slate-600 transition-colors hover:text-slate-900 lg:hidden dark:border-slate-800 dark:text-slate-400 dark:hover:text-slate-100"
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <nav
        aria-label="Section navigation"
        className={`
          overflow-hidden border-slate-200/80 bg-paper/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden
          dark:border-slate-800/80 dark:bg-ink/95
          ${isMenuOpen ? 'max-h-[28rem] border-t opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <ul className="mx-auto w-full max-w-content px-6 py-4">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  block border-b border-slate-100 py-3 text-sm font-medium transition-colors last:border-b-0 dark:border-slate-800/60
                  ${activeId === item.id
                    ? 'text-accent-600 dark:text-accent-400'
                    : 'text-slate-600 dark:text-slate-300'}
                `}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
