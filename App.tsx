import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import BlogList from './components/BlogList';
import About from './components/About';
import { PROJECTS } from './constants';
import { Category } from './types';

const App: React.FC = () => {
  // Navigation State
  const [activeTab, setActiveTab] = useState<string>('All');
  // Initialize collapsed to prevent layout shift/covering content on mobile load
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  
  // Theme State
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('theme');
        if (saved) return saved as 'light' | 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  // Effect for Sidebar responsiveness
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      setIsSidebarExpanded(true);
    }
  }, []);

  // Effect for Theme Application
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const handleTabSelect = (tab: string) => {
    setActiveTab(tab);
    // On mobile, auto-collapse sidebar when a selection is made
    if (window.innerWidth < 1024) {
      setIsSidebarExpanded(false);
    }
  };

  // Content Rendering Logic
  const renderContent = () => {
    if (activeTab === 'About') {
        return <About />;
    }

    if (activeTab === Category.Blog) {
        return (
             <div className="animate-fadeIn max-w-5xl mx-auto">
                <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Latest Writings</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">Thoughts on MLOps, Statistics, and Software Engineering.</p>
                </div>
                <BlogList />
            </div>
        );
    }

    // Filter projects
    const filteredProjects = activeTab === 'All' 
        ? PROJECTS 
        : PROJECTS.filter(p => p.category === activeTab);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 animate-fadeIn">
            {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
            
            {filteredProjects.length === 0 && (
                    <div className="col-span-full py-20 text-center rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30">
                    <p className="text-slate-500 dark:text-slate-500 text-lg">No projects found in this category.</p>
                    <button onClick={() => setActiveTab('All')} className="mt-4 text-emerald-600 dark:text-emerald-400 hover:underline">
                        View all projects
                    </button>
                    </div>
            )}
        </div>
    );
  };

  // Get current title for header
  const getPageTitle = () => {
      if (activeTab === 'About') return 'Profile';
      if (activeTab === 'All') return 'All Projects';
      return activeTab;
  };

  return (
    <div className={`
        min-h-screen font-sans transition-colors duration-300 selection:bg-emerald-500/30 relative
        bg-slate-50 text-slate-900
        dark:bg-[radial-gradient(circle_at_50%_0%,#1e293b_0%,#0f172a_100%)] dark:text-slate-300
    `}>
      
      {/* Mobile Backdrop - Closes menu when clicked (only visible when expanded on mobile) */}
      {isSidebarExpanded && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarExpanded(false)}
        />
      )}

      {/* Unified Sidebar - Fixed Left */}
      <div 
        className={`
            fixed top-0 left-0 h-screen z-50
            transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${isSidebarExpanded ? 'w-64' : 'w-[72px]'}
        `}
      >
         <Sidebar 
            isExpanded={isSidebarExpanded} 
            onToggle={() => setIsSidebarExpanded(!isSidebarExpanded)} 
            activeTab={activeTab}
            onSelectTab={handleTabSelect}
            theme={theme}
            toggleTheme={toggleTheme}
         />
      </div>

      {/* Main Content Area */}
      <main 
        className={`
            min-h-screen transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
            /* On mobile, always maintain the minimized margin. On Desktop, push content when expanded */
            ml-[72px]
            ${isSidebarExpanded ? 'lg:ml-64' : 'lg:ml-[72px]'}
        `}
      >
        {/* Page Content Header */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 px-6 py-6 lg:px-10 flex items-center justify-between transition-colors duration-300">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{getPageTitle()}</h1>
                <p className="text-sm text-slate-500 mt-1">Jonathan Bown Portfolio</p>
            </div>
        </header>

        {/* Dynamic Content */}
        <div className="p-6 md:p-10 max-w-[1920px] mx-auto">
            {renderContent()}

            {/* Global Footer */}
            <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800/50 text-center text-slate-500 dark:text-slate-600 text-sm pb-8 transition-colors duration-300">
                <p>&copy; {new Date().getFullYear()} Jonathan Bown.</p>
                <p className="mt-2 text-xs opacity-50">Principal Machine Learning Engineer</p>
            </footer>
        </div>
      </main>
    </div>
  );
};

export default App;