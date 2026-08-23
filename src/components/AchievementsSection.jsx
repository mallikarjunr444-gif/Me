import React from 'react';
import { Award, CheckCircle2, Trophy, Star, ArrowUpRight } from 'lucide-react';

export function AchievementsSection({ certifications }) {
  const milestones = [
    {
      id: "PASS-01",
      category: "VENTURE LAUNCH",
      title: "Medicus Labs Clinical Deployment",
      metric: "12 Partner Clinics",
      year: "2024",
      desc: "Successfully deployed multimodal skin lesion triage system with 98.4% diagnostic accuracy."
    },
    {
      id: "PASS-02",
      category: "GAME ENGINE",
      title: "ORVEX Games WebGL Milestone",
      metric: "150,000+ Plays",
      year: "2024",
      desc: "Shipped custom 3D shader and procedural mechanics across browser-native WebGL platforms."
    },
    {
      id: "PASS-03",
      category: "RESEARCH PUBLICATION",
      title: "Tech Discover Intelligence Hub",
      metric: "45,000 Active Readers",
      year: "2023",
      desc: "Built AI engineering discovery engine crawling and synthesizing research papers weekly."
    },
    {
      id: "PASS-04",
      category: "OPEN SOURCE",
      title: "GitHub Engineering Output",
      metric: "850+ Verified Commits",
      year: "2023-2024",
      desc: "Continuous open-source contributions across AI models, Terraform scripts, and Unity tools."
    }
  ];

  return (
    <section id="achievements" className="py-24 px-4 sm:px-8 lg:px-12 relative border-t border-white/10 canvas-dots">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-hand text-2xl text-[#f59e0b] -rotate-1">✦ Chapter 05</span>
              <span className="text-xs font-mono text-[#8b92a5] uppercase tracking-widest">[PROOF OF WORK]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-none">
              MILESTONES & <span className="text-[#f59e0b]">CREDENTIALS</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#8b92a5] font-sans max-w-2xl">
              Verified clinical deployments, open-source commits, game engine impressions, and cloud certifications.
            </p>
          </div>

          <div className="font-hand text-lg text-[#f59e0b] rotate-1">
            (Boarding passes & proof receipts)
          </div>
        </div>

        {/* Milestone Boarding Passes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {milestones.map((m, idx) => (
            <div
              key={m.id}
              data-cursor="INSPECT"
              className="paper-card p-6 sm:p-8 relative flex flex-col justify-between space-y-6"
            >
              {/* Washi tape on first cards */}
              {idx === 0 && <div className="absolute -top-3 left-8 w-20 h-5 washi-tape rotate-1" />}

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-300">
                  <span className="px-2 py-0.5 rounded bg-slate-950 text-white font-bold text-[10px]">
                    {m.category}
                  </span>
                  <span>{m.id} • {m.year}</span>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
                    {m.metric}
                  </div>
                  <h3 className="text-lg font-bold text-[#f05a3e] font-display">
                    {m.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-300 flex items-center justify-between text-xs font-mono text-slate-600 font-bold">
                <span>STATUS: VERIFIED & LIVE</span>
                <span className="text-slate-950">MALLIKARJUN R.</span>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Certifications Ticket Row */}
        <div className="dark-card p-8 space-y-4 border border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#38bdf8] uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Verified Cloud & Technical Certifications</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {(certifications || [
              "Google Cloud Associate Cloud Engineer",
              "AWS Cloud Practitioner Certified",
              "TensorFlow Developer Certificate",
              "Unity Certified Developer"
            ]).map((cert, cIdx) => (
              <div key={cIdx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-xs font-bold text-white font-display flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
                  <span>{cert}</span>
                </div>
                <div className="text-[10px] font-mono text-[#8b92a5]">Industry Standard Credential</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
