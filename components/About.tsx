import React from 'react';
import { PROFILE } from '../constants';
import { FileText, GraduationCap, MapPin, Github, Linkedin, Database, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn max-w-4xl mx-auto space-y-8">
      {/* Bio Section */}
      <section className="bg-white/50 dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
          <FileText className="text-emerald-600 dark:text-emerald-400" />
          About Me
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg font-light">
          {PROFILE.bio}
        </p>
      </section>

      {/* Education Section */}
      <section className="bg-white/50 dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
          <GraduationCap className="text-emerald-600 dark:text-emerald-400" />
          Education
        </h2>
        <ul className="space-y-4">
          {PROFILE.education.map((edu, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
              <div className="mt-2 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-lg">{edu}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Connect Section */}
      <section className="bg-white/50 dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
          <MapPin className="text-emerald-600 dark:text-emerald-400" />
          Connect
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <SocialCard href={PROFILE.links.github} icon={<Github />} label="GitHub" value="Jon-bown" />
            <SocialCard href={PROFILE.links.linkedin} icon={<Linkedin />} label="LinkedIn" value="Jonathan Bown" />
            <SocialCard href={PROFILE.links.kaggle} icon={<Database />} label="Kaggle" value="jonbown" />
            <SocialCard href={PROFILE.links.medium} icon={<span className="font-serif font-bold text-xl leading-none">M</span>} label="Medium" value="@jonbown" />
            <SocialCard href={PROFILE.links.email} icon={<Mail />} label="Email" value="Contact Me" />
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 dark:text-slate-500">
            <MapPin size={16} />
            {PROFILE.location}
        </div>
      </section>
    </div>
  );
};

// Helper component for social cards
const SocialCard = ({ href, icon, label, value }: any) => (
    <a 
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-4 p-4 rounded-xl transition-all group border
        bg-white/50 dark:bg-slate-800/50 
        hover:bg-white dark:hover:bg-slate-800 
        border-slate-200 dark:border-slate-700 
        hover:border-emerald-500/50 dark:hover:border-emerald-500/50"
    >
        <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-300 group-hover:scale-110 transition-transform shadow-lg">
            {icon}
        </div>
        <div className="overflow-hidden">
            <div className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider font-semibold">{label}</div>
            <div className="text-slate-900 dark:text-slate-200 font-medium group-hover:text-slate-700 dark:group-hover:text-white truncate">{value}</div>
        </div>
    </a>
)

export default About;