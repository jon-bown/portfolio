import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Rss } from 'lucide-react';
import { BlogPost } from '../types';
import { PROFILE } from '../constants';
import { formatDate } from '../utils';

const FEED_URL = 'https://jon-bown.github.io/blog/feed.xml';
const MAX_POSTS = 5;

/** Feed titles arrive with escaped entities (e.g. '&amp;'); render them as text. */
const decodeEntities = (value: string): string =>
  new DOMParser().parseFromString(value, 'text/html').documentElement.textContent ?? value;

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(FEED_URL)
      .then((response) => response.text())
      .then((str) => new window.DOMParser().parseFromString(str, 'text/xml'))
      .then((data) => {
        if (cancelled) return;
        const feedPosts: BlogPost[] = Array.from(data.querySelectorAll('entry'))
          .slice(0, MAX_POSTS)
          .map((item) => ({
            title: decodeEntities(item.querySelector('title')?.textContent || 'Untitled Post'),
            link: item.querySelector('link')?.getAttribute('href') || '#',
            pubDate: item.querySelector('published')?.textContent?.substring(0, 10),
          }));
        setPosts(feedPosts);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Failed to fetch blog feed:', err);
        setError(true);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse space-y-px" aria-busy="true" aria-label="Loading recent posts">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-16 border-b border-slate-200 dark:border-slate-800" />
        ))}
      </div>
    );
  }

  if (error || posts.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 py-12 text-center dark:border-slate-800">
        <Rss className="mx-auto mb-3 h-8 w-8 text-slate-400 dark:text-slate-600" />
        <p className="text-slate-500 dark:text-slate-400">Recent posts could not be loaded.</p>
        <a
          href={PROFILE.links.blog}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:underline dark:text-accent-400"
        >
          Visit the blog
          <ArrowUpRight size={14} />
        </a>
      </div>
    );
  }

  return (
    <ul>
      {posts.map((post, idx) => (
        <li key={idx}>
          <a
            href={post.link}
            target="_blank"
            rel="noreferrer"
            className="group grid gap-1 border-b border-slate-200 py-5 transition-colors hover:border-accent-500/40 sm:grid-cols-[8.5rem_minmax(0,1fr)_auto] sm:items-baseline sm:gap-6 dark:border-slate-800"
          >
            <span className="text-sm tabular-nums text-slate-500 dark:text-slate-500">
              {post.pubDate ? <time dateTime={post.pubDate}>{formatDate(post.pubDate)}</time> : 'Recent'}
            </span>
            <span className="font-medium leading-snug text-slate-900 transition-colors group-hover:text-accent-600 dark:text-slate-100 dark:group-hover:text-accent-400">
              {post.title}
            </span>
            <ArrowUpRight
              size={16}
              className="hidden shrink-0 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-600 sm:block dark:text-slate-600 dark:group-hover:text-accent-400"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
