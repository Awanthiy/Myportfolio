import React from 'react';
import { ExternalLink, Github, Palette, Code2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isDev = project.category === 'dev';

  // Hardcode Behance link for UI/UX
  const uiuxLink = "https://www.behance.net/awym";

  return (
    <div className="group bg-slate-900/40 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 flex flex-col h-full hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] hover:-translate-y-2">
      
      {/* Image Section */}
      <div className="relative h-60 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#020617]/90 backdrop-blur-md border border-cyan-900/30 rounded-full flex items-center gap-1.5 shadow-xl transition-all duration-500 group-hover:border-cyan-400/50">
          {isDev ? (
            <>
              <Code2 size={12} className="text-cyan-400" />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">Dev Project</span>
            </>
          ) : (
            <>
              <Palette size={12} className="text-cyan-400" />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">UI/UX Study</span>
            </>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 font-heading leading-tight">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed font-medium transition-colors group-hover:text-slate-300">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="text-[9px] font-black text-slate-500 border border-slate-800 px-2.5 py-1 rounded-md uppercase tracking-widest bg-slate-900/50 transition-all group-hover:border-slate-700 group-hover:text-slate-400">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-5 border-t border-slate-800/80">
          {isDev ? (
            <>
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-500 hover:text-white transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:scale-105"
                >
                  <Github size={16} /> GitHub
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cyan-500 hover:text-cyan-400 transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest ml-auto hover:scale-105"
                >
                  <ExternalLink size={16} /> Live
                </a>
              )}
            </>
          ) : (
            // UI/UX link goes to your Behance
            <a 
              href={uiuxLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 bg-cyan-900/20 hover:bg-cyan-600 text-cyan-400 hover:text-white border border-cyan-500/20 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 group/btn hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95"
            >
              View on Behance <Palette size={16} className="group-hover/btn:scale-110 transition-transform duration-500 group-hover/btn:rotate-12" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
