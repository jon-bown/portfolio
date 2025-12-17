import React, { useEffect, useState } from 'react';
import { BlogPost } from '../types';
import { Rss, Calendar, ChevronRight } from 'lucide-react';

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Attempt to fetch RSS feed.
    fetch('https://jon-bown.github.io/blog/feed.xml')
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        const items = data.querySelectorAll('entry');
        const feedPosts: BlogPost[] = [];
        items.forEach((item, index) => {
          if (index < 6) { // Limit to 6
            const link = item.querySelector('link')?.getAttribute('href') || '#';
            const title = item.querySelector('title')?.textContent || 'Untitled Post';
            const pubDate = item.querySelector('published')?.textContent?.substring(0, 10);
            feedPosts.push({ title, link, pubDate });
          }
        });
        setPosts(feedPosts);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blog feed:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-pulse">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="h-32 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
        ))}
      </div>
    );
  }

  if (error || posts.length === 0) {
    return (
      <div className="text-center py-12 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
        <Rss className="mx-auto h-10 w-10 text-slate-400 dark:text-slate-600 mb-3" />
        <p className="text-slate-500 dark:text-slate-400">Could not load recent blog posts.</p>
        <a href="https://jon-bown.github.io/blog" target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline text-sm mt-2 block">
          Visit blog directly &rarr;
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post, idx) => (
        <a 
          key={idx} 
          href={post.link}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col p-5 rounded-xl transition-all group border
          bg-white dark:bg-slate-800 
          border-slate-200 dark:border-slate-700 
          hover:border-emerald-500/50 dark:hover:border-emerald-500/50 
          hover:bg-slate-50 dark:hover:bg-slate-750"
        >
          <div className="flex items-start justify-between">
            <h4 className="text-slate-800 dark:text-slate-200 font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
              {post.title}
            </h4>
            <ChevronRight size={16} className="text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mt-1 flex-shrink-0 ml-2" />
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
             <Calendar size={12} />
             {post.pubDate || 'Recent'}
          </div>
        </a>
      ))}
      
      <div className="md:col-span-2 flex justify-center mt-6">
        <a href="https://jon-bown.github.io/blog" className="px-6 py-2 rounded-full text-sm font-medium transition-colors border
        bg-white dark:bg-slate-800 
        text-slate-600 dark:text-slate-300 
        border-slate-200 dark:border-slate-700
        hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white">
            View All Posts
        </a>
      </div>
    </div>
  );
};

export default BlogList;