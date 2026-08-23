import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, Download, Award, ShieldCheck, Sparkles, Gamepad2 } from 'lucide-react';

export function ExperienceSection({ experience, achievements, certifications }) {
  const handlePrintResume = () => {
    window.print();
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Milestones & Credentialing</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 font-heading">
              Experience, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">Achievements & Certs</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>Career & Founder Timeline</span>
            </h3>

            <div className="relative border-l-2 border-slate-800 ml-4 space-y-10">
              {experience.map((item, idx) => (
                <div key={idx} className="relative pl-8 group">
                  
                  {/* Dot */}
                  <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                    {item.type === 'Education' ? (
                      <GraduationCap className="w-4 h-4 text-purple-400" />
                    ) : item.type === 'Game Studio' ? (
                      <Gamepad2 className="w-4 h-4 text-indigo-400" />
                    ) : (
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/30 transition-all space-y-4 glow-card">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-xs font-mono text-cyan-400 font-semibold">{item.type}</span>
                        <h4 className="text-xl font-bold text-white font-heading mt-0.5">{item.role}</h4>
                        <div className="text-sm font-semibold text-slate-300">{item.organization}</div>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {item.description}
                    </p>

                    <ul className="space-y-1 pt-2 border-t border-slate-800/80">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2 font-sans">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Certifications */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Honors & Achievements</span>
              </h3>

              <div className="space-y-3">
                {achievements.map((ach, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/30 transition-all space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="text-purple-400 font-bold">{ach.org}</span>
                      <span>{ach.date}</span>
                    </div>
                    <div className="text-sm font-bold text-white font-heading">{ach.title}</div>
                    <p className="text-xs text-slate-300 font-sans">{ach.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Cloud & System Certifications</span>
              </h3>

              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-bold text-white font-heading">{cert.name}</div>
                      <div className="text-xs font-mono text-emerald-400">{cert.issuer} • {cert.date}</div>
                    </div>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-cyan-300"
                    >
                      Verify
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
