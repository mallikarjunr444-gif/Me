import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

export function TestimonialsSection({ testimonials }) {
  return (
    <section id="testimonials" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
            Verified Endorsements
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Client & Collaborator <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Testimonials</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="editorial-card p-8 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-sky-400/40" />
                <p className="text-sm text-slate-200 font-sans italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-1 font-mono">
                <div className="text-sm font-bold text-white">{t.author}</div>
                <div className="text-xs text-sky-400">{t.role}, <span className="text-slate-400">{t.company}</span></div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Re: {t.projectRef}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
