import React from 'react';
import * as Icons from 'lucide-react';
import { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
  index?: number; // optional for animation delay
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index = 0 }) => {
  const IconComponent = (Icons as any)[skill.icon] || Icons.Zap;

  const BadgeContent = (
    <div className="flex flex-col items-center gap-3 p-4 bg-slate-900/50 border border-slate-800 rounded-xl
                    hover:bg-cyan-950/20 hover:border-cyan-500/30 transition-all duration-300 group h-full
                    hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.3)] cursor-pointer w-full">
      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400
                      group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500
                      group-hover:rotate-[360deg]">
        <IconComponent size={24} />
      </div>
      <div className="text-center">
        <p className="text-xs font-bold text-white mb-1 transition-colors group-hover:text-cyan-400">{skill.name}</p>
        <div className="flex gap-0.5 justify-center">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i < skill.level ? 'bg-cyan-400 group-hover:scale-125' : 'bg-slate-700'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
        {skill.officialLink && (
          <p className="text-[10px] text-cyan-600 font-bold uppercase mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            Visit Site
          </p>
        )}
      </div>
    </div>
  );

  if (skill.officialLink) {
    return (
      <a
        href={skill.officialLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block reveal-on-scroll"
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        {BadgeContent}
      </a>
    );
  }

  return (
    <div className="block reveal-on-scroll" style={{ transitionDelay: `${index * 50}ms` }}>
      {BadgeContent}
    </div>
  );
};

export default SkillBadge;
