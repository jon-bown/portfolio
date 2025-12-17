import React from 'react';
import { 
  User, LayoutGrid, Sigma, BrainCircuit, Database, FileCode, Smartphone, GitBranch, Rss,
  ChevronsLeft, ChevronsRight, Presentation, Award, Sun, Moon, Mail
} from 'lucide-react';
import { PROFILE } from '../constants';
import { Category } from '../types';

interface SidebarProps {
  isExpanded: boolean;
  onToggle: () => void;
  activeTab: string;
  onSelectTab: (tab: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, onToggle, activeTab, onSelectTab, theme, toggleTheme }) => {
  // Use root-relative path for the profile image in the public/images folder
  const avatarUrl = 'https://raw.githubusercontent.com/jon-bown/jon-bown.github.io/refs/heads/main/images/profile.png';

  const navItems = [
    { id: 'About', label: 'About Me', icon: User },
    { type: 'divider' },
    { id: 'All', label: 'All Projects', icon: LayoutGrid },
    { id: Category.Presentations, label: 'Presentations', icon: Presentation },
    { id: Category.Certifications, label: 'Certifications', icon: Award },
    { id: Category.Mathematics, label: 'Mathematics', icon: Sigma },
    { id: Category.MachineLearning, label: 'Machine Learning', icon: BrainCircuit },
    { id: Category.Datasets, label: 'Datasets', icon: Database },
    { id: Category.Notebooks, label: 'Notebooks', icon: FileCode },
    { id: Category.Apps, label: 'Apps', icon: Smartphone },
    { id: Category.Repos, label: 'Repositories', icon: GitBranch },
    { type: 'divider' },
    { id: Category.Blog, label: 'Blog', icon: Rss },
  ];

  return (
    <aside 
      className={`
        group h-full flex flex-col shadow-2xl relative transition-all duration-300 w-full
        bg-white/95 backdrop-blur-xl border-r border-slate-200
        dark:bg-slate-900/95 dark:border-slate-800 
      `}
    >
      {/* Toggle Button - Always visible now to indicate expandability */}
      <button 
        onClick={(e) => { e.stopPropagation(); onToggle(); }}
        className={`
          absolute -right-3 top-24 z-50 p-1.5 rounded-full 
          bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 
          text-slate-500 dark:text-slate-400 
          hover:bg-emerald-500 hover:text-white hover:border-emerald-500
          dark:hover:bg-emerald-500 dark:hover:text-white dark:hover:border-emerald-500
          transition-all shadow-lg flex items-center justify-center
          opacity-100
        `}
        aria-label={isExpanded ? "Collapse Menu" : "Expand Menu"}
      >
        {isExpanded ? <ChevronsLeft size={16} /> : <ChevronsRight size={16} />}
      </button>

      {/* Profile Header - Clickable to Toggle */}
      <button 
        onClick={onToggle}
        className={`
            w-full flex flex-col items-center justify-center transition-all duration-300 border-b border-slate-200/50 dark:border-slate-800/50 cursor-pointer hover:bg-slate-100/50 dark:hover:bg-slate-800/30
            ${isExpanded ? 'py-10 px-4' : 'py-4 px-0'}
        `}
        title="Toggle Menu"
      >
        {/* Profile Image */}
        <div className={`
            relative rounded-full border-2 border-slate-200 dark:border-slate-700 overflow-hidden bg-slate-100 dark:bg-slate-800 transition-all duration-500 ease-in-out shadow-xl shrink-0
            ${isExpanded ? 'w-24 h-24 mb-4 ring-4 ring-slate-100 dark:ring-slate-800/50 group-hover:ring-emerald-500/30' : 'w-10 h-10 ring-0 group-hover:border-emerald-500/50'}
        `}>
           <img src={avatarUrl} alt={PROFILE.name} className="w-full h-full object-cover" />
        </div>

        {/* Text Details */}
        <div className={`
            text-center overflow-hidden transition-all duration-300 ease-in-out
            ${isExpanded ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0'}
        `}>
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 whitespace-nowrap tracking-tight group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">{PROFILE.name}</h2>
            <p className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mt-1">{PROFILE.title}</p>
        </div>
      </button>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-4 scrollbar-hide">
        <ul className="space-y-1 px-3">
            {navItems.map((item, idx) => {
                if (item.type === 'divider') {
                    return <li key={`div-${idx}`} className="my-2 border-t border-slate-200 dark:border-slate-800/50" />;
                }
                
                const Icon = item.icon as React.ElementType;
                const isActive = activeTab === item.id;

                return (
                    <li key={item.id}>
                        <button
                            onClick={() => onSelectTab(item.id!)}
                            className={`
                                w-full flex items-center rounded-lg transition-all duration-200 relative
                                ${isExpanded ? 'px-4 py-3 gap-3' : 'justify-center p-3'}
                                ${isActive 
                                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                                }
                            `}
                            title={!isExpanded ? item.label : ''}
                        >
                            <Icon size={20} className={`shrink-0 ${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors'}`} />
                            
                            {isExpanded && (
                                <span className="font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">{item.label}</span>
                            )}
                            
                            {isActive && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-emerald-500 rounded-r-full" />
                            )}
                        </button>
                    </li>
                );
            })}
        </ul>
      </nav>
      
      {/* Theme Toggle & Footer */}
      <div className={`
        border-t border-slate-200 dark:border-slate-800 
        transition-all duration-300
        ${isExpanded ? 'px-4 py-4' : 'px-0 py-4'}
      `}>
          {/* Contact Me Button */}
          <a
            href={PROFILE.links.email}
            className={`
                flex items-center justify-center rounded-lg transition-all duration-200 
                bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 mb-3
                ${isExpanded ? 'w-full py-2.5 gap-3' : 'w-10 h-10 mx-auto'}
            `}
            title="Contact Me"
          >
              <Mail size={18} />
              {isExpanded && (
                  <span className="text-sm font-bold">Contact Me</span>
              )}
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`
                flex items-center justify-center rounded-lg transition-colors duration-200 
                bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700
                text-slate-600 dark:text-slate-400
                ${isExpanded ? 'w-full py-2 gap-3 mb-4' : 'w-10 h-10 mx-auto mb-0'}
            `}
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              {isExpanded && (
                  <span className="text-sm font-medium">
                      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </span>
              )}
          </button>

        {/* Copyright */}
        <div className={`
            text-center whitespace-nowrap overflow-hidden transition-all duration-300
            ${isExpanded ? 'opacity-100 h-auto' : 'opacity-0 h-0 hidden'}
        `}>
            <p className="text-[10px] text-slate-500 dark:text-slate-600">
                &copy; {new Date().getFullYear()} {PROFILE.name}
            </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;