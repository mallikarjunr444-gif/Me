import React from 'react';
import { X, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export function FeaturedProject({ project, onClose, onNext }) {
  if (!project) return null;
  const cs = project.caseStudy;

  return (
    <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="featured-title">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-20 space-y-12 relative">
        
        <button onClick={onClose} className="fixed top-6 right-6 z-50 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[var(--bg-secondary)] border border-black/6 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" aria-label="Close case study">
          <X className="w-5 h-5" />
        </button>

        <div className="aspect-video rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border border-black/4">
          <img src={project.image} alt={`${project.title} case study`} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="w-3 h-3 rounded-full" style={{ background: project.color }} />
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">{project.category}</span>
          </div>
          <h2 id="featured-title" className="text-4xl sm:text-6xl font-extrabold text-[var(--text-primary)] font-heading">{project.title}</h2>
          <p className="text-xl text-indigo-500 font-mono">{project.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-black/4 space-y-3">
            <h3 className="text-xs font-mono text-red-500/80 uppercase tracking-wider font-semibold">The Problem</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{cs?.problem}</p>
          </div>
          <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-black/4 space-y-3">
            <h3 className="text-xs font-mono text-emerald-500/80 uppercase tracking-wider font-semibold">The Solution</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{cs?.solution}</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-black/4 space-y-3">
          <h3 className="text-xs font-mono text-indigo-500 uppercase tracking-wider font-semibold">Technology Stack</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{cs?.technology}</p>
        </div>

        {cs?.features && (
          <div className="space-y-4">
            <h3 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider font-semibold">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cs.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[var(--bg-secondary)] border border-black/3">
                  <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--text-secondary)]">{f}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200/50 space-y-3">
          <h3 className="text-xs font-mono text-indigo-500 uppercase tracking-wider font-semibold">Results & Impact</h3>
          <p className="text-lg text-[var(--text-primary)] font-semibold leading-relaxed">{cs?.results}</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-[var(--bg-secondary)] border border-black/6 text-[var(--text-primary)] text-xs font-mono flex items-center gap-2 hover:bg-[var(--bg-secondary)] transition-colors">
                <GithubIcon className="w-4 h-4" /> Repository
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-indigo-500 text-white text-xs font-mono flex items-center gap-2 hover:bg-indigo-400 transition-colors shadow-md shadow-indigo-500/20">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
          <button onClick={onNext} className="px-5 py-2.5 rounded-full bg-[var(--bg-secondary)] border border-black/6 text-[var(--text-secondary)] text-xs font-mono flex items-center gap-2 hover:text-[var(--text-primary)] transition-colors">
            Next Project <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
