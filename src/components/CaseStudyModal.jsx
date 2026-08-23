import React from 'react';
import { X, ArrowRight, CheckCircle2, Quote, Layers, ExternalLink, Calendar, UserCheck, Sparkles } from 'lucide-react';

export function CaseStudyModal({ project, onClose, onNextProject }) {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="editorial-card max-w-4xl w-full p-6 sm:p-10 border border-sky-500/30 relative space-y-8 shadow-2xl my-8 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button (Min 44px Touch Target) */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Lead Artwork Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-sky-400">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 font-bold">{project.discipline}</span>
            <span>•</span>
            <span>{project.year}</span>
            <span>•</span>
            <span className="text-slate-400">{project.client}</span>
          </div>

          <h2 id="case-study-title" className="text-3xl sm:text-5xl font-extrabold text-white font-heading">
            {project.name}
          </h2>
          <p className="text-base text-slate-300 font-sans leading-relaxed">
            {project.challenge}
          </p>
        </div>

        {/* Lead Hero Image */}
        <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-950 border border-slate-800">
          <img src={project.leadImage} alt={project.altText} className="w-full h-full object-cover" />
        </div>

        {/* Metadata Grid (Client, Industry, Year, Role, Collaborators, Deliverables) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs font-mono">
          <div>
            <div className="text-slate-500 uppercase text-[10px]">Client / Industry</div>
            <div className="text-white font-bold mt-0.5">{project.client}</div>
            <div className="text-slate-400">{caseStudy?.industry}</div>
          </div>
          <div>
            <div className="text-slate-500 uppercase text-[10px]">Designer Role</div>
            <div className="text-sky-300 font-bold mt-0.5">{caseStudy?.role}</div>
          </div>
          <div>
            <div className="text-slate-500 uppercase text-[10px]">Collaborators</div>
            <div className="text-slate-300 mt-0.5">{caseStudy?.collaborators}</div>
          </div>
          <div className="col-span-2 sm:col-span-3 pt-3 border-t border-slate-800">
            <div className="text-slate-500 uppercase text-[10px]">Key Deliverables</div>
            <div className="text-sky-400 font-bold mt-0.5">{caseStudy?.deliverables}</div>
          </div>
        </div>

        {/* Section 1: Business Challenge & Audience Constraints */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" /> The Communication Challenge
            </h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              {caseStudy?.challengeDescription}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" /> Audience & Constraints
            </h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              {caseStudy?.audienceConstraints}
            </p>
          </div>
        </div>

        {/* Section 2: Creative Direction & Brand System Elements */}
        <div className="space-y-4 p-6 rounded-3xl bg-slate-900/80 border border-slate-800">
          <h3 className="text-xl font-bold text-white font-heading">Creative Direction & Design System</h3>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            {caseStudy?.creativeDirection}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {caseStudy?.brandElements?.map((elem, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <div className="text-xs font-mono font-bold text-sky-300">{elem.title}</div>
                <div className="text-[11px] text-slate-400 font-sans leading-snug">{elem.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Applications Across Touchpoints */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white font-heading">Touchpoint Applications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {caseStudy?.touchpoints?.map((tp, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="text-sm font-bold text-white font-heading">{tp.title}</div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Process Material & Mockups */}
        {caseStudy?.processMaterial && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white font-heading">Process & Production Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.processMaterial.map((pm, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                    <img src={pm.img} alt={pm.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-xs font-mono text-slate-400">{pm.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 5: Outcome & Client Quote */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-950/50 to-indigo-950/50 border border-sky-500/30 space-y-4">
          <div className="space-y-1">
            <div className="text-xs font-mono text-sky-400 font-bold uppercase">Measurable Outcome</div>
            <div className="text-base sm:text-lg font-bold text-white font-heading">{caseStudy?.outcome}</div>
          </div>

          {caseStudy?.clientQuote && (
            <blockquote className="pt-4 border-t border-sky-500/20 space-y-2">
              <p className="text-sm text-slate-200 italic font-sans">
                "{caseStudy.clientQuote.quote}"
              </p>
              <footer className="text-xs font-mono text-sky-300">
                — {caseStudy.clientQuote.author}, <span className="text-slate-400">{caseStudy.clientQuote.role}</span>
              </footer>
            </blockquote>
          )}
        </div>

        {/* Footer Navigation & Contextual Inquiry CTA */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onNextProject}
            className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-sky-300 text-xs font-mono border border-slate-800 flex items-center gap-2"
          >
            <span>Next Project Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#contact"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-sky-400 text-slate-950 font-bold text-xs font-mono hover:bg-sky-300 transition-all shadow-md shadow-sky-500/20"
          >
            Start a project like this
          </a>
        </div>

      </div>
    </div>
  );
}
