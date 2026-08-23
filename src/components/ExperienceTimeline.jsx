import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, Download, Award, Sparkles } from 'lucide-react';

export function ExperienceTimeline({ experience, personal }) {
  const handlePrintResume = () => {
    window.print();
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-purple-500/30 text-xs font-mono text-purple-300">
              <Award className="w-4 h-4 text-purple-400" />
              <span>Career & Education</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3">
              Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Milestones</span>
            </h2>
          </div>

          <button
            onClick={handlePrintResume}
            className="px-5 py-2.5 rounded-xl glass-panel text-xs font-mono font-bold text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/10 flex items-center gap-2 transition-all hover:scale-105"
          >
            <Download className="w-4 h-4" />
            <span>Print / Save Resume PDF</span>
          </button>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-10 group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                {item.type === 'Education' ? (
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                ) : (
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                )}
              </div>

              {/* Date Column (Desktop view) */}
              <div className="hidden md:block absolute -left-36 top-2 text-xs font-mono text-slate-400 w-28 text-right">
                {item.period}
              </div>

              {/* Main Card */}
              <div className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/30 transition-all space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold">{item.type}</span>
                    <h3 className="text-xl font-bold text-white mt-0.5">{item.role}</h3>
                    <div className="text-sm font-semibold text-slate-300">{item.organization}</div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="md:hidden flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Key Highlights & Impact:
                  </div>
                  <ul className="space-y-1">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
