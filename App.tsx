import React, { useEffect, useMemo, useState } from 'react';
import Header, { NavItem } from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Credentials from './components/Credentials';
import Speaking from './components/Speaking';
import Work from './components/Work';
import Writing from './components/Writing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollSpy from './components/useScrollSpy';

const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'speaking', label: 'Speaking' },
  { id: 'work', label: 'Work' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
];

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);
  const activeId = useScrollSpy(sectionIds);

  return (
    <div className="min-h-screen bg-paper font-sans text-slate-800 antialiased transition-colors duration-300 selection:bg-accent-500/25 dark:bg-ink dark:text-slate-300">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Header items={NAV_ITEMS} activeId={activeId} theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Credentials />
        <Speaking />
        <Work />
        <Writing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
