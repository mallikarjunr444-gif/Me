import React, { useState } from 'react';
import { ArrowUpRight, Filter, Sparkles } from 'lucide-react';

export function SelectedWork({ projects, onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Brand Identity', 'Campaign', 'Packaging', 'Editorial', 'Digital'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.filterCategory === activeFilter || p.discipline === activeFilter);

  return (
    <section id="work" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
              Selected Work (2023 – 2026)
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mt-1">
              Case Studies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Visual Systems</span>
            </h2>
          </div>

          {/* Discipline Filters */}
          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Project Discipline Filters">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                role="tab"
                aria-selected={activeFilter === f}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all min-h-[38px] ${
                  activeFilter === f
                    ? 'bg-sky-400 text-slate-950 font-bold shadow-lg shadow-sky-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Orderly Image-First Project Grid (Non-Masonry for Screen Readers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              tabIndex={0}
              onClick={() => onSelectProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(project);
                }
              }}
              className="editorial-card p-5 cursor-pointer flex flex-col justify-between group focus-visible:outline-2 focus-visible:outline-sky-400"
              aria-label={`View case study for ${project.name}`}
            >
              <div className="space-y-4">
                
                {/* Lead Image with Intentional Crop & Alt Text */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img
                    src={project.leadImage}
                    alt={project.altText}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 group-focus-within:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                  {/* Discipline & Client Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[10px] font-mono text-sky-300 font-bold">
                      {project.discipline}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[10px] font-mono text-slate-400">
                      {project.clientLabel}
                    </span>
                  </div>
                </div>

                {/* Meta Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white font-heading group-hover:text-sky-300 transition-colors flex items-center justify-between gap-2">
                    <span>{project.name}</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-400">{project.year}</span>
                </div>

                <div className="text-xs font-mono text-sky-400">{project.client}</div>

                {/* One-Sentence Challenge / Outcome */}
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {project.challenge}
                </p>

              </div>

              {/* Action Link Footer */}
              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-sky-400 group-hover:underline">
                <span>View Full Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
