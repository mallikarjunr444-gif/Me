import React from 'react';
import { useScrollReveal, useStaggerDelay } from '../hooks/useScrollReveal';

export function TechStack({ techStack }) {
  const { ref, isVisible } = useScrollReveal();
  const getDelay = useStaggerDelay(80);

  return (
    <section className="py-28 relative">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal-base ${isVisible ? 'reveal-visible' : ''}`}>
          <span className="text-xs font-mono text-indigo-500 uppercase tracking-[0.2em] font-semibold">Technology Universe</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] font-heading mt-3">Tools I Work With</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className={`group flex flex-col items-center gap-2 p-5 rounded-2xl bg-[var(--bg-secondary)] border border-black/4 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-500 cursor-default reveal-scale ${isVisible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: getDelay(idx), minWidth: '100px' }}
            >
              <span className={`text-3xl transition-transform duration-500 group-hover:scale-125 ${isVisible ? 'morph-icon' : ''}`} style={{ animationDelay: `${idx * 250}ms` }}>
                {tech.icon}
              </span>
              <span className="text-[11px] font-mono text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
