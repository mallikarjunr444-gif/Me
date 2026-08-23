import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Terminal, Sparkles, Code2, Layers, Cpu, Play } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MediumIcon } from './Icons';

export function HeroSection({ personal, socials }) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / 35;
    const y = (e.clientY - innerHeight / 2) / 35;
    setMouseOffset({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-4 sm:px-8 lg:px-12 overflow-hidden canvas-grid"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#f05a3e]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#38bdf8]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Top Identity Header Row */}
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#12141c] border border-white/10 text-xs font-mono text-[#8b92a5] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10b981]" />
            CSE Core @ DSATM Bengaluru
          </span>
          <span className="px-3 py-1 rounded-full bg-[#f05a3e]/10 border border-[#f05a3e]/30 text-xs font-mono text-[#f05a3e] font-bold">
            AI × Cloud × DevOps × Games
          </span>
        </div>

        <div className="text-xs font-mono text-[#8b92a5] text-left sm:text-right">
          <div>[Coordinates: 12.9716° N, 77.5946° E]</div>
          <div className="text-white/60">Creative Technologist & Systems Builder</div>
        </div>
      </div>

      {/* Main Massive Asymmetrical Typography Statement */}
      <div className="max-w-7xl w-full mx-auto my-auto py-12 relative z-10">
        
        {/* Sub-label handwritten annotation */}
        <div
          className="inline-flex items-center gap-2 mb-2 font-hand text-xl sm:text-2xl text-[#f05a3e] -rotate-2 select-none"
          style={{ transform: `translate3d(${mouseOffset.x * -0.5}px, ${mouseOffset.y * -0.5}px, 0)` }}
        >
          <span>✦ hello world, I'm</span>
          <svg className="w-8 h-4 doodle-stroke text-[#f05a3e]" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2,10 C15,2 25,18 38,10 M32,4 L38,10 L30,14" />
          </svg>
        </div>

        {/* Oversized Name */}
        <div className="relative">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-extrabold tracking-tighter text-white font-display uppercase leading-[0.88] select-none">
            MALLIKARJUN<span className="text-[#f05a3e]">.</span>R
          </h1>
        </div>

        {/* Evolving Manifesto Statement */}
        <div className="mt-6 sm:mt-8 max-w-4xl space-y-4">
          <div className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-200 tracking-tight leading-tight">
            I build things at the edge of{' '}
            <span className="relative inline-block text-white">
              AI, Cloud
              {/* Hand-drawn underline SVG */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#38bdf8] overflow-visible" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 12, 100 4" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>{' '}
            & code.
          </div>

          <p className="text-base sm:text-xl text-[#8b92a5] font-sans max-w-2xl leading-relaxed">
            Computer science engineer and founder of <strong>Medicus Labs</strong> and <strong>ORVEX Games</strong>. Engineering real-world clinical AI models, distributed cloud automation, and 3D interactive graphics.
          </p>
        </div>

        {/* CTAs & Quick Links */}
        <div className="flex flex-wrap items-center gap-4 pt-8">
          <a
            href="#work"
            data-cursor="EXPLORE"
            className="px-8 py-4 rounded-full bg-[#f05a3e] hover:bg-[#ff6f54] text-white font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-xl shadow-[#f05a3e]/30 flex items-center gap-2 hover:scale-105"
          >
            <span>Explore Works</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#about"
            data-cursor="READ"
            className="px-8 py-4 rounded-full bg-[#12141c] hover:bg-[#181b26] text-white border border-white/10 font-mono text-xs font-medium tracking-wider uppercase transition-all"
          >
            <span>The Story</span>
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-2 pl-2">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="CODE"
              className="p-3.5 rounded-full bg-[#12141c] hover:bg-[#181b26] border border-white/10 text-white hover:text-[#38bdf8] transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="CONNECT"
              className="p-3.5 rounded-full bg-[#12141c] hover:bg-[#181b26] border border-white/10 text-white hover:text-[#38bdf8] transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="ARTICLES"
              className="p-3.5 rounded-full bg-[#12141c] hover:bg-[#181b26] border border-white/10 text-white hover:text-[#10b981] transition-colors"
              title="Medium"
            >
              <MediumIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Floating Visual Artifacts Around Hero (Jackie Zhang Scrapbook Parallax Style) */}
      
      {/* Artifact 1: Real Portrait Polaroid Card (Top Right / Center Right) */}
      <div
        className="hidden lg:block absolute top-28 right-12 z-20 float-slow pointer-events-auto"
        data-cursor="MALLIKARJUN"
        style={{
          transform: `translate3d(${mouseOffset.x * 1.2}px, ${mouseOffset.y * 1.2}px, 0) rotate(3deg)`,
        }}
      >
        <div className="paper-card p-3 max-w-[210px] space-y-2 relative shadow-2xl">
          {/* Washi Tape top anchor */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 washi-tape rotate-1 z-30" />

          <div className="aspect-[4/5] rounded-lg overflow-hidden bg-slate-900 border border-black/10">
            <img
              src={personal.avatar}
              alt="Mallikarjun R Portrait"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="text-center pt-1 font-hand text-lg text-slate-800 font-bold leading-tight">
            Mallikarjun @ Bengaluru ☀️
          </div>
          <div className="text-center text-[10px] font-mono text-slate-500">
            Founder & AI Engineer
          </div>
        </div>
      </div>

      {/* Artifact 2: Terminal Snippet Sticker (Center Left) */}
      <div
        className="hidden xl:block absolute top-1/2 left-8 -translate-y-1/2 z-20 float-medium pointer-events-auto"
        data-cursor="TERMINAL"
        style={{
          transform: `translate3d(${mouseOffset.x * -1}px, ${mouseOffset.y * -1}px, 0) rotate(-4deg)`,
        }}
      >
        <div className="dark-card p-4 max-w-[240px] space-y-2 shadow-2xl font-mono text-xs border border-[#38bdf8]/30">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <span className="text-[10px] text-white/40">mesh_core.sh</span>
          </div>
          <p className="text-[#38bdf8] text-[11px]">$ npx deploy --multimodal</p>
          <p className="text-[#10b981] text-[10px]">[OK] Gemini Vision active</p>
          <p className="text-white/60 text-[10px]">[OK] Cloud Run cluster live</p>
        </div>
      </div>

      {/* Artifact 3: Sticky Note (Bottom Right) */}
      <div
        className="hidden md:block absolute bottom-20 right-8 z-20 float-slow pointer-events-auto"
        data-cursor="MOTO"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.8}px, ${mouseOffset.y * 0.8}px, 0) rotate(-2deg)`,
        }}
      >
        <div className="sticky-note p-4 rounded-md max-w-[200px] font-hand text-base leading-tight font-bold">
          <div className="text-xs uppercase font-mono text-slate-700 tracking-wider mb-1">core rule #1:</div>
          "Always ship real products, not just toy repositories."
        </div>
      </div>

      {/* Bottom Scroll Indicator Row */}
      <div className="max-w-7xl w-full mx-auto pt-8 flex items-center justify-between border-t border-white/10 z-10 text-xs font-mono text-[#8b92a5]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#f05a3e]" />
          <span>Scroll to begin interactive journey</span>
        </div>

        <a href="#about" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <span>CHAPTER 01</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#f05a3e]" />
        </a>
      </div>

    </section>
  );
}
