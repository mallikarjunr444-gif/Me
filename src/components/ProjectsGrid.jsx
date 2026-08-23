import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useScrollReveal, useStaggerDelay } from '../hooks/useScrollReveal';
import { GithubIcon } from './Icons';

export function ProjectsGrid({ projects, onSelectProject }) {
  const { ref, isVisible } = useScrollReveal();
  const getDelay = useStaggerDelay(120);

  return (
    <section id="work" className="py-28 relative">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`text-center mb-16 reveal-base ${isVisible ? 'reveal-visible' : ''}`}>
          <span className="text-xs font-mono text-indigo-500 uppercase tracking-[0.2em] font-semibold">
            Selected Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] font-heading mt-3">
            Projects & Ventures
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              tabIndex={0}
              onClick={() => onSelectProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectProject(project); }
              }}
              className={`motion-card p-5 cursor-pointer group reveal-scale ${isVisible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: getDelay(idx) }}
              aria-label={`View case study for ${project.title}`}
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[var(--bg-secondary)] mb-5">
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.subtitle}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: project.color }}
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading group-hover:text-indigo-500 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-indigo-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                
                <p className="text-sm font-mono text-indigo-500/80">{project.subtitle}</p>
                
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] border border-black/4 text-[11px] font-mono text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-black/4 flex items-center justify-between text-xs">
                <span className="font-mono text-indigo-500/60 group-hover:text-indigo-500 transition-colors">
                  View Case Study →
                </span>
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 rounded-lg hover:bg-black/4 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors" aria-label={`GitHub for ${project.title}`}>
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 rounded-lg hover:bg-black/4 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors" aria-label={`Live demo of ${project.title}`}>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
