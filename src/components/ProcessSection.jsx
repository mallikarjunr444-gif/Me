import React from 'react';
import { Compass, Target, PenTool, CheckCircle, ArrowRight } from 'lucide-react';

export function ProcessSection({ process }) {
  return (
    <section id="process" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
            Structured Workflow
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Practical 4-Stage <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Design Process</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans">
            Clear expectations for milestones, feedback cycles, revision rounds, and final production handoff.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, idx) => (
            <div key={idx} className="editorial-card p-6 space-y-4 relative overflow-hidden flex flex-col justify-between">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold font-heading text-sky-400">{p.step}</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Stage {idx + 1}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-heading">{p.title}</h3>
                  <div className="text-xs font-mono text-sky-300 mt-0.5">{p.subtitle}</div>
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Expectation Box */}
              <div className="pt-4 border-t border-slate-800 text-[11px] font-sans text-slate-400">
                <span className="font-mono text-sky-400 font-bold">Client Expectation: </span>
                <span>{p.expectation}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
