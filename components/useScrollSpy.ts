import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently under the sticky header so the nav can
 * highlight it. Returns '' while the reader is still above the first section.
 */
export const useScrollSpy = (ids: string[], offset = 96): string => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const onScroll = () => {
      // The last section whose top has passed the header wins; near the page
      // bottom the final section wins outright so short sections stay reachable.
      const scrollPos = window.scrollY + offset + 1;
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

      if (atBottom) {
        setActiveId(ids[ids.length - 1] ?? '');
        return;
      }

      // Nothing is highlighted while the reader is still above the first section.
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) current = id;
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids, offset]);

  return activeId;
};

export default useScrollSpy;
