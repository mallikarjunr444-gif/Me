import React from 'react';
import { X, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export function JackieCaseStudyModal({ project, onClose, onNext }) {
  if (!project) return null;
  const cs = project.caseStudy;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#191816]/70 backdrop-blur-md overflow-y-auto flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="jackie-card max-w-4xl w-full p-6 sm:p-10 bg-white border border-[#e7e5df] shadow-2xl relative space-y-8 max-h-[92vh] overflow-y-auto my-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-[#f4f2ee] hover:bg-[#ebe8e1] text-[#5c5a55] hover:text-[#191816] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Lead Image */}
        <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-white border border-[#e7e5df] p-6 flex items-center justify-center shadow-inner">
          <img src={project.image} alt={project.title} className="max-w-full max-h-full object-contain" />
        </div>

        {/* Title Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8c8980]">
            <span className="px-3 py-0.5 rounded-full bg-[#f4f2ee] text-[#191816] font-semibold">{project.category}</span>
            <span>•</span>
            <span>{project.subtitle}</span>
          </div>

          <h2 id="case-study-title" className="text-3xl sm:text-4xl font-extrabold text-[#191816] font-heading">
            {project.title}
          </h2>

          <p className="text-base text-[#5c5a55] font-sans leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem → Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#faf9f6] border border-[#e7e5df] space-y-2">
            <div className="text-xs font-mono text-rose-600 font-bold uppercase tracking-wider">The Challenge</div>
            <p className="text-xs sm:text-sm text-[#5c5a55] font-sans leading-relaxed">{cs?.problem}</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#faf9f6] border border-[#e7e5df] space-y-2">
            <div className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-wider">The Solution</div>
            <p className="text-xs sm:text-sm text-[#5c5a55] font-sans leading-relaxed">{cs?.solution}</p>
          </div>
        </div>

        {/* Technology Architecture */}
        <div className="p-6 rounded-2xl bg-[#faf9f6] border border-[#e7e5df] space-y-2">
          <div className="text-xs font-mono text-[#2563eb] font-bold uppercase tracking-wider">Technology Stack & Architecture</div>
          <p className="text-xs sm:text-sm text-[#5c5a55] font-sans leading-relaxed">{cs?.technology}</p>
        </div>

        {/* Key Features */}
        {cs?.features && (
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#8c8980] uppercase tracking-wider font-semibold">Core Features & Capabilities</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cs.features.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-[#e7e5df]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-[#5c5a55] font-sans">{f}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Measurable Results & Impact */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#f4f2ee] border border-[#e7e5df] space-y-2">
          <div className="text-xs font-mono text-[#191816] font-bold uppercase tracking-wider">Measurable Results & Clinical Impact</div>
          <p className="text-base sm:text-lg font-bold text-[#191816] font-heading leading-relaxed">{cs?.results}</p>
        </div>

        {/* Actions & Next Project */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#e7e5df]">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#f4f2ee] hover:bg-[#ebe8e1] text-[#191816] text-xs font-mono flex items-center gap-2 transition-colors"
              >
                <GithubIcon className="w-4 h-4" /> View Repository
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full bg-[#191816] hover:bg-[#33312e] text-white text-xs font-mono flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Launch Product
              </a>
            )}
          </div>

          <button
            onClick={onNext}
            className="px-4 py-2 rounded-full bg-[#f4f2ee] hover:bg-[#ebe8e1] text-[#191816] text-xs font-mono flex items-center gap-2 transition-colors"
          >
            Next Case Study <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
