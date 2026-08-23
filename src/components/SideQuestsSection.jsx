import React from 'react';
import { Terminal, Zap, Code2, Sparkles, Flame, Cpu, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export function SideQuestsSection() {
  const quests = [
    {
      type: "TICKET",
      id: "SQ-01",
      title: "CloudOps Multi-Tier IaC",
      desc: "Terraform automation blueprint creating autoscaling VPCs, Cloud Run services, and IAM policies.",
      tag: "DEVOPS",
      accent: "#f05a3e",
      link: "https://github.com/mallikarjunr444-gif"
    },
    {
      type: "POLAROID",
      id: "SQ-02",
      title: "Shader Toy Experiments",
      desc: "Raymarching GLSL shaders and neon glass refraction shaders running in realtime at 60 FPS.",
      tag: "GRAPHICS",
      accent: "#a855f7",
      link: "https://github.com/mallikarjunr444-gif"
    },
    {
      type: "STICKY",
      id: "SQ-03",
      title: "Multimodal Voice Assistant",
      desc: "Low-latency voice pipeline connecting Whisper local transcription with Gemini API reasoning.",
      tag: "AI SPEECH",
      accent: "#38bdf8",
      link: "https://github.com/mallikarjunr444-gif"
    },
    {
      type: "RECEIPT",
      id: "SQ-04",
      title: "Autonomous Scraping Kernel",
      desc: "Distributed Python web scraper bypassing Cloudflare with token rotating proxy pools.",
      tag: "AUTOMATION",
      accent: "#10b981",
      link: "https://github.com/mallikarjunr444-gif"
    },
    {
      type: "TICKET",
      id: "SQ-05",
      title: "AI Canvas Gesture Painter",
      desc: "Hand tracking camera interface rendering digital neon strokes via MediaPipe & WebGL.",
      tag: "VISION UI",
      accent: "#f59e0b",
      link: "https://github.com/mallikarjunr444-gif"
    },
    {
      type: "POLAROID",
      id: "SQ-06",
      title: "Micro-ORM Database Engine",
      desc: "Custom lightweight C++ memory-mapped key-value store with B+ tree indexing.",
      tag: "SYSTEMS",
      accent: "#e05d44",
      link: "https://github.com/mallikarjunr444-gif"
    }
  ];

  return (
    <section id="experiments" className="py-24 px-4 sm:px-8 lg:px-12 relative border-t border-white/10 canvas-dots">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-hand text-2xl text-[#f05a3e] -rotate-1">✦ Chapter 03</span>
              <span className="text-xs font-mono text-[#8b92a5] uppercase tracking-widest">[LAB EXPERIMENTS]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-none">
              SIDE <span className="text-[#f05a3e]">QUESTS</span> & LABS
            </h2>
            <p className="text-lg sm:text-xl text-[#8b92a5] font-sans max-w-2xl">
              An irregular scrapbook of hackathon prototypes, graphics shaders, micro-tools, and systems experiments.
            </p>
          </div>

          <div className="font-hand text-xl text-[#f05a3e] rotate-2">
            "Late night caffeine builds ☕"
          </div>
        </div>

        {/* Scattered Scrapbook Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quests.map((quest, idx) => (
            <div
              key={quest.id}
              data-cursor="INSPECT"
              className={`p-6 rounded-2xl transition-all duration-300 relative group flex flex-col justify-between space-y-6 ${
                idx % 2 === 0
                  ? 'paper-card -rotate-1 hover:rotate-0'
                  : 'dark-card rotate-1 hover:rotate-0 border-white/10'
              }`}
            >
              {/* Top Washi Tape accent on select cards */}
              {idx % 3 === 0 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 washi-tape-orange rotate-1" />
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span
                    className="px-2.5 py-0.5 rounded-md font-bold text-[10px]"
                    style={{
                      backgroundColor: idx % 2 === 0 ? '#191816' : 'rgba(255,255,255,0.1)',
                      color: idx % 2 === 0 ? '#ffffff' : quest.accent,
                    }}
                  >
                    {quest.tag}
                  </span>
                  <span className="opacity-50">{quest.id}</span>
                </div>

                <h3
                  className={`text-xl font-bold font-display leading-tight ${
                    idx % 2 === 0 ? 'text-slate-950' : 'text-white'
                  }`}
                >
                  {quest.title}
                </h3>

                <p
                  className={`text-xs leading-relaxed font-sans ${
                    idx % 2 === 0 ? 'text-slate-700' : 'text-slate-400'
                  }`}
                >
                  {quest.desc}
                </p>
              </div>

              <div
                className={`pt-3 border-t flex items-center justify-between text-xs font-mono ${
                  idx % 2 === 0 ? 'border-slate-300 text-slate-700' : 'border-white/10 text-slate-400'
                }`}
              >
                <span>OPEN SOURCE</span>
                <a
                  href={quest.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold flex items-center gap-1 hover:text-[#f05a3e] transition-colors"
                >
                  <span>Inspect Repo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
