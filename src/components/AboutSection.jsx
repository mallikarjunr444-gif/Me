import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function AboutSection({ personal }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-28 relative">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Portrait + Label */}
          <div className={`lg:col-span-4 reveal-left ${isVisible ? 'reveal-visible' : ''}`}>
            <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 border border-black/6 shadow-lg shadow-indigo-500/10">
              <img
                src={personal.avatar}
                alt={`Portrait of ${personal.shortName || personal.name}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="text-xs font-mono text-indigo-500 uppercase tracking-[0.2em] font-semibold">
              About
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] font-heading mt-3 leading-tight">
              Building the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                future, today.
              </span>
            </h2>
          </div>

          {/* Right: Content */}
          <div className={`lg:col-span-8 space-y-6 reveal-right ${isVisible ? 'reveal-visible' : ''}`}>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
              {personal.bio}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {[
                { label: 'Focus', value: 'AI × Cloud × Product' },
                { label: 'Based in', value: personal.location },
                { label: 'Education', value: 'CSE @ DSATM' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-black/4"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">{item.label}</div>
                  <div className="text-sm font-semibold text-[var(--text-primary)] mt-1">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
