import React from 'react';
import { Briefcase, Calendar, Award } from 'lucide-react';

export function JackieExperience({ certifications }) {
  const experiences = [
    {
      period: "2024 — Present",
      role: "Founder & Lead AI Engineer",
      company: "Medicus Labs",
      summary: "Architected Gemini API multimodal dermatology pre-screening portal with clinical heatmap overlays and automated structured report exports. Serving partner dermatology clinics.",
      tags: ["Gemini Vision", "Python", "Cloud Run", "React"]
    },
    {
      period: "2023 — Present",
      role: "Founder & Game Developer",
      company: "ORVEX Games",
      summary: "Founded independent 3D game studio creating custom Unity shaders, interactive WebGL browser ports, and procedural graphics pipelines with over 150K impressions.",
      tags: ["Unity", "C#", "GLSL Shaders", "WebGL"]
    },
    {
      period: "2023 — Present",
      role: "Creator & Lead Developer",
      company: "Tech Discover",
      summary: "Built an AI-powered tech aggregation engine ranking emerging software frameworks and research papers for 45K active readers.",
      tags: ["Next.js", "FastAPI", "OpenAI", "PostgreSQL"]
    },
    {
      period: "2022 — 2026",
      role: "Computer Science Engineering Candidate",
      company: "DSATM Bengaluru",
      summary: "Focused on Operating Systems, Distributed Systems, Cloud Architecture, and Artificial Intelligence algorithms.",
      tags: ["Algorithms", "OS", "System Design"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#e7e5df]">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-[#8c8980] uppercase tracking-[0.2em] font-semibold">
            Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191816] tracking-tight font-heading">
            Experience & <span className="font-serif-italic text-3xl sm:text-5xl font-normal">Milestones</span>
          </h2>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="jackie-card p-6 sm:p-8 bg-white border border-[#e7e5df] space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-xl font-bold text-[#191816] font-heading">{exp.role}</h3>
                  <div className="text-sm font-semibold text-[#2563eb]">{exp.company}</div>
                </div>
                <span className="text-xs font-mono text-[#8c8980] bg-[#f4f2ee] px-3 py-1 rounded-full self-start sm:self-auto border border-[#e7e5df]">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-[#5c5a55] font-sans leading-relaxed">
                {exp.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.tags.map((t, i) => (
                  <span key={i} className="text-[11px] font-mono text-[#8c8980] bg-[#faf9f6] px-2.5 py-0.5 rounded border border-[#e7e5df]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Box */}
        {certifications && (
          <div className="jackie-card p-6 bg-[#f4f2ee] border border-[#e7e5df] space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-[#191816] font-heading">
              <Award className="w-4 h-4 text-[#2563eb]" />
              Cloud & AI Industry Certifications
            </div>
            <div className="flex flex-wrap gap-2">
              {certifications.map((c, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-white text-xs font-mono text-[#191816] border border-[#e7e5df]">
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
