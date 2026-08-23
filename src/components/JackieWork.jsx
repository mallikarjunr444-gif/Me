import React from 'react';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export function JackieWork({ projects, onSelectProject }) {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#e7e5df]">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-[#8c8980] uppercase tracking-[0.2em] font-semibold">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191816] tracking-tight font-heading">
            Products, Systems & <span className="font-serif-italic text-3xl sm:text-5xl font-normal">Ventures</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5c5a55] font-sans max-w-2xl">
            A curated selection of healthcare AI platforms, offline intelligence agents, and 3D indie game engines I've built and shipped.
          </p>
        </div>

        {/* Projects List (Editorial Style) */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="jackie-card p-6 sm:p-8 cursor-pointer group space-y-6"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-[#f4f2ee] border border-[#e7e5df]">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-[#e7e5df] text-[11px] font-mono text-[#191816] font-semibold shadow-xs">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Header & Meta */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#191816] font-heading group-hover:text-[#2563eb] transition-colors flex items-center gap-2">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#8c8980] group-hover:text-[#2563eb] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                    <span className="text-xs font-mono text-[#8c8980]">
                      — {project.subtitle}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#5c5a55] font-sans leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-full bg-[#f4f2ee] border border-[#e7e5df] text-[11px] font-mono text-[#5c5a55]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action Links */}
                <div className="lg:col-span-4 flex lg:flex-col items-center lg:items-end justify-between gap-3 pt-2">
                  <span className="text-xs font-mono text-[#2563eb] font-semibold group-hover:underline">
                    Read Case Study →
                  </span>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-xl bg-[#f4f2ee] hover:bg-[#ebe8e1] text-[#5c5a55] hover:text-[#191816] transition-colors"
                        title="GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-xl bg-[#191816] hover:bg-[#33312e] text-white transition-colors"
                        title="Live Demo"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
