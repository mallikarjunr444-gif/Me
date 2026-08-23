import React from 'react';
import { useScrollReveal, useStaggerDelay } from '../hooks/useScrollReveal';

export function SkillsSection({ skills }) {
  const { ref, isVisible } = useScrollReveal();
  const getDelay = useStaggerDelay(100);

  return (
    <section id="skills" className="py-28 relative">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 reveal-base ${isVisible ? 'reveal-visible' : ''}`}>
          <span className="text-xs font-mono text-indigo-500 uppercase tracking-[0.2em] font-semibold">Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-primary)] font-heading mt-3">Skills & Technologies</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill, idx) => (
            <div key={idx} className={`reveal-base ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: getDelay(idx) }}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-sm font-medium text-[var(--text-primary)]">{skill.name}</span>
                </div>
                <span className="text-sm font-mono text-indigo-500 font-semibold counter-number">
                  {isVisible ? skill.level : 0}%
                </span>
              </div>
              <div className="skill-bar-track">
                <div className={`skill-bar-fill ${isVisible ? 'animate' : ''}`} style={{ maxWidth: `${skill.level}%`, transitionDelay: `${300 + idx * 100}ms` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
