import React from 'react';
import { Download, Terminal, Cpu, Cloud, Code2, GraduationCap } from 'lucide-react';

export function JackieAbout({ personal, skills, techStack }) {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#e7e5df]">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-[#8c8980] uppercase tracking-[0.2em] font-semibold">
            About & Point of View
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191816] tracking-tight font-heading">
            Behind the <span className="font-serif-italic text-3xl sm:text-5xl font-normal">Terminal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-base text-[#5c5a55] font-sans leading-relaxed">
            <p>
              I'm Mallikarjun R, a computer science engineering student and startup builder based in Bengaluru, India. I believe great software isn't just about writing code—it's about understanding real human problems, architecting resilient distributed systems, and shipping products that clinicians, engineers, and everyday users can rely on.
            </p>

            <p>
              At <strong>Medicus Labs</strong>, I lead our AI clinical pre-screening engineering, working directly with dermatologists to integrate Google Gemini multimodal APIs into practical diagnostic pipelines. At <strong>ORVEX Games</strong>, I build modular Unity shaders and WebGL browser-native interactive graphics.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-[#e7e5df] space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#191816] font-heading">
                <GraduationCap className="w-4 h-4 text-[#2563eb]" />
                Education & Foundations
              </div>
              <div className="text-xs text-[#5c5a55]">
                <strong>B.E. in Computer Science and Engineering</strong> (2022–2026)
                <br />
                Dayananda Sagar Academy of Technology and Management (DSATM), Bengaluru
              </div>
            </div>

            <div className="pt-2">
              <a
                href={personal.resumeUrl}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f4f2ee] hover:bg-[#ebe8e1] text-[#191816] text-xs font-mono font-semibold transition-colors border border-[#e7e5df]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume / CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Skills & Stack */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Core Competencies */}
            <div className="jackie-card p-6 bg-white border border-[#e7e5df] space-y-4">
              <h3 className="text-sm font-bold text-[#191816] font-heading uppercase tracking-wider font-mono">
                Core Competencies
              </h3>

              <div className="space-y-3">
                {skills.map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-[#191816] flex items-center gap-2">
                        <span>{s.icon}</span>
                        <span>{s.name}</span>
                      </span>
                      <span className="font-mono text-[#8c8980]">{s.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#f4f2ee] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#191816] rounded-full transition-all duration-500"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Favorite Stack */}
            <div className="jackie-card p-6 bg-white border border-[#e7e5df] space-y-3">
              <h3 className="text-sm font-bold text-[#191816] font-heading uppercase tracking-wider font-mono">
                Tools I Work With Daily
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-[#f4f2ee] text-xs font-mono text-[#5c5a55] border border-[#e7e5df] flex items-center gap-1.5"
                  >
                    <span>{t.icon}</span>
                    <span>{t.name}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
