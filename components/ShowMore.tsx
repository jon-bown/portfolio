import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ShowMoreProps {
  expanded: boolean;
  onToggle: () => void;
  /** Count of hidden items, shown in the collapsed label. */
  hiddenCount: number;
  /** Singular noun for the items being revealed, e.g. 'certification'. */
  noun: string;
  controls?: string;
}

/** Collapse control shared by the longer sections. */
const ShowMore: React.FC<ShowMoreProps> = ({ expanded, onToggle, hiddenCount, noun, controls }) => {
  if (hiddenCount <= 0 && !expanded) return null;

  return (
    <div className="mt-10 flex justify-center">
      <button
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={controls}
        className="group inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-400 dark:hover:text-slate-50"
      >
        {expanded ? 'Show less' : `Show ${hiddenCount} more ${noun}${hiddenCount === 1 ? '' : 's'}`}
        <ChevronDown
          size={15}
          className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
        />
      </button>
    </div>
  );
};

export default ShowMore;
