import React, { useEffect } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, Terminal, Cpu, Layers } from 'lucide-react';
import { ChalkLuckyCat, ChalkPerchedBird, ChalkFlowers } from './HandDrawnAssets';

const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 1.64 1.64c0-.9-.74-1.64-1.64-1.64z" />
  </svg>
);

export function JackieWorkPage({ onNavigateHome, onSelectProject }) {
  useEffect(() => {
    // Load LinkedIn Badge Script
    const scriptId = 'linkedin-badge-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://platform.linkedin.com/badges/js/profile.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-28 py-10 select-none">
      
      {/* ══════════════════ 1. TOP HEADER & LUCKY CAT SEAL ══════════════════ */}
      <div className="text-center space-y-6 pt-4">
        
        {/* Top Lucky Cat Seal Stamp */}
        <div className="flex justify-center">
          <div className="w-20 sm:w-24 aspect-[1/2] flex items-center justify-center transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <img
              src="/images/stamps/lucky-cat-stamp.png"
              alt="Lucky Cat Seal Stamp"
              className="w-full h-full object-contain filter drop-shadow-md animate-line-boil-slow hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Page Title */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#faecd8] tracking-tight">
          Places I've been, things I've learnt
        </h1>

      </div>


      {/* ══════════════════ 2. THE CLOTHING CARE HANG-TAG WITH FULL LINKEDIN CARD ══════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-6">
        
        {/* Hang Tag (Left 7 Cols) */}
        <div className="md:col-span-7 flex justify-center md:justify-end">
          <div className="relative transform -rotate-2 hover:rotate-0 transition-all duration-300 max-w-md w-full">
            
            {/* Red Underlay Shadow Card */}
            <div className="absolute inset-0 bg-[#c93f2c] rounded-3xl translate-x-3 translate-y-3" />

            {/* Main Cream Hang Tag */}
            <div className="relative bg-[#faecd8] text-slate-900 rounded-3xl p-6 sm:p-7 pt-12 shadow-2xl border border-slate-300 space-y-4">
              
              {/* Eyelet & String Loop (Exact from reference) */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
                <div className="w-8 h-12 border-2 border-slate-700 rounded-full -mt-9 mb-1" />
                <div className="w-8 h-8 rounded-full bg-slate-800 border-4 border-slate-400 flex items-center justify-center shadow-inner">
                  <div className="w-3 h-3 rounded-full bg-[#181716]" />
                </div>
              </div>

              {/* Laundry Care Icons */}
              <div className="flex items-center justify-between text-2xl pt-1 text-slate-800 font-mono">
                <span title="Care 30°">🧼 30°</span>
                <span title="Do Not Bleach">⛝</span>
                <span title="Tumble Low">⊗</span>
                <span title="Iron Medium">⨂</span>
              </div>

              {/* 💼 COMPLETE LINKEDIN CARD INSIDE THE TAG (Matching 1st pic) */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden font-sans">
                
                {/* LinkedIn Blue Header Bar */}
                <div className="bg-[#f3f0e8] px-4 py-2 flex items-center justify-between border-b border-slate-200">
                  <div className="flex items-center gap-1 font-bold text-[#0077b5] text-lg font-mono tracking-tight">
                    <span>Linked</span>
                    <span className="bg-[#0077b5] text-white px-1 rounded text-base">in</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 font-bold">VERIFIED</span>
                </div>

                {/* Profile Details Body */}
                <div className="p-4 space-y-3">
                  
                  <div className="flex items-center gap-3.5">
                    {/* User Avatar */}
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#0077b5] shadow-sm bg-slate-900 shrink-0">
                      <img
                        src="/images/mallikarjun-avatar.png"
                        alt="Mallikarjun R"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80";
                        }}
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-base text-slate-950 leading-tight flex items-center gap-1">
                        <span>Mallikarjun R</span>
                        <span className="text-[#0077b5] text-xs">●</span>
                      </h3>
                      <p className="text-[11px] text-slate-600 font-medium leading-tight pt-0.5">
                        Founder @ Medicus Labs & ORVEX Studios
                      </p>
                    </div>
                  </div>

                  {/* Headline */}
                  <p className="text-[11px] text-slate-800 font-medium leading-snug">
                    CSE Student @ DSATM | Founder at ORVEX Studios | Building AI, Cloud & DevOps Projects
                  </p>

                  {/* Education & Studio */}
                  <p className="text-[10px] text-slate-500 leading-tight">
                    Orvex Studios | DAYANANDA SAGAR ACADEMY OF TECHNOLOGY AND MANAGEMENT, BANGALORE
                  </p>

                  {/* View Profile Action Button */}
                  <div className="pt-1">
                    <a
                      href="https://in.linkedin.com/in/mallikarjunr-com?trk=profile-badge"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-full py-2 rounded-full border-2 border-[#0077b5] text-[#0077b5] font-bold text-xs hover:bg-[#0077b5] hover:text-white transition-all shadow-xs"
                    >
                      View profile
                    </a>
                  </div>

                  {/* Official LinkedIn Script Fallback Badge Container */}
                  <div className="hidden">
                    <div
                      className="badge-base LI-profile-badge"
                      data-locale="en_US"
                      data-size="medium"
                      data-theme="light"
                      data-type="VERTICAL"
                      data-vanity="mallikarjunr-com"
                      data-version="v1"
                    >
                      <a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/mallikarjunr-com?trk=profile-badge">
                        Mallikarjun R
                      </a>
                    </div>
                  </div>

                </div>

              </div>

              {/* Barcode & Serial */}
              <div className="pt-2 border-t border-slate-300 space-y-1 text-center font-mono">
                <div className="tracking-[4px] text-lg font-black text-slate-950">
                  ||||| | |||| || |||||| | |||||
                </div>
                <div className="text-[10px] text-slate-600 tracking-widest font-bold">
                  B45H2024220268 // MALLIKARJUNR
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Notable Work & Learning Quote (Right 5 Cols) */}
        <div className="md:col-span-5 space-y-8 pl-0 md:pl-6">
          
          <div className="space-y-3 font-mono">
            <div className="text-xs text-[#c93f2c] font-bold tracking-wider uppercase">
              Notable work
            </div>
            <ul className="space-y-2 text-base text-[#c93f2c] font-hand">
              <li className="hover:text-white cursor-pointer transition-colors">
                Medicus Labs
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Clinical AI Diagnostics
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                ORVEX Studios
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Vision X Desktop Agent
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                CloudOps & IaC Matrix
              </li>
            </ul>
          </div>

          {/* Hand-Drawn Quote */}
          <div className="font-hand text-xl text-[#faecd8]/80 pl-2 border-l-2 border-[#c93f2c]/50">
            "Learnt to think beyond what's expected"
          </div>

        </div>

      </div>


      {/* ══════════════════ 4. MARATHON WRISTBAND & RETRO MOUNTAIN TICKET ══════════════════ */}
      <div className="space-y-12">
        
        {/* Wristband (Pulse / Vision X) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-8 flex justify-center md:justify-start">
            <div className="relative w-full max-w-xl h-28 bg-[#c93f2c] rounded-xl shadow-xl flex items-center justify-between px-6 border-y-4 border-[#e85746] transform -rotate-2 hover:rotate-0 transition-transform overflow-hidden text-slate-900 font-mono">
              
              {/* Perforation Holes Left */}
              <div className="flex flex-col gap-3 py-2 border-r-2 border-dashed border-black/30 pr-4">
                <div className="w-3 h-3 rounded-full bg-[#181716]" />
                <div className="w-3 h-3 rounded-full bg-[#181716]" />
              </div>

              {/* Topographic Contour Watermark */}
              <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
                <span className="text-8xl">≋≋≋</span>
              </div>

              {/* Title & Desc */}
              <div className="relative z-10 px-4 space-y-1 flex-1">
                <div className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
                  <span>Pulse // Vision X</span>
                </div>
                <div className="text-xs text-white/90 font-medium">
                  Air-gapped autonomous AI desktop agent & visual OCR intelligence.
                </div>
              </div>

              {/* Barcode Number Right */}
              <div className="flex flex-col items-center border-l-2 border-dashed border-black/30 pl-4 text-[10px] font-bold text-white">
                <div className="w-2.5 h-2.5 rounded-full bg-[#181716] mb-1" />
                <span>43110</span>
                <div className="w-2.5 h-2.5 rounded-full bg-[#181716] mt-1" />
              </div>

            </div>
          </div>

          <div className="md:col-span-4 space-y-4 pl-0 md:pl-4 font-mono">
            <div className="text-xs text-[#c93f2c] font-bold tracking-wider uppercase">
              Notable work
            </div>
            <ul className="space-y-1.5 text-xs text-[#faecd8]/80">
              <li>✦ Stream uploader</li>
              <li>✦ Offline ONNX Engine</li>
              <li>✦ ChromaDB Vector Search</li>
              <li>✦ Autonomous Task HUD</li>
            </ul>
            <div className="font-hand text-sm text-[#faecd8]/70 pt-2">
              "Learnt that design is a team's sports that involves people outside of design"
            </div>
          </div>

        </div>

        {/* Retro Mountain Concert Ticket (Heygo / ORVEX) */}
        <div className="flex justify-center pt-6">
          <div className="relative w-full max-w-2xl bg-[#141211] text-[#faecd8] border-2 border-white/20 rounded-2xl shadow-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 transform rotate-1 hover:rotate-0 transition-transform">
            
            {/* Mountain Linocut Illustration */}
            <div className="w-full sm:w-48 aspect-square rounded-xl bg-[#c93f2c]/20 border border-[#c93f2c]/40 overflow-hidden flex items-center justify-center p-2 relative group">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
                alt="3D Graphics"
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-[#c93f2c]/30 mix-blend-multiply" />
            </div>

            {/* Ticket Info */}
            <div className="flex-1 space-y-3 font-mono">
              <p className="text-xs text-[#faecd8]/70 leading-relaxed font-serif italic text-sm">
                "Visit interesting places and 3D shader worlds through procedural WebGL graphics!"
              </p>
              
              <div className="pt-2 border-t border-white/10 space-y-1">
                <div className="text-xs text-[#c93f2c] font-bold tracking-widest">
                  ADMIT 1 // YOUR TICKET TO SEE THE WORLD
                </div>
                <div className="text-2xl font-black tracking-wider text-white">
                  HEYGO // ORVEX 3D
                </div>
                <div className="text-xs text-[#faecd8]/40">
                  ROW H0 • SEAT M3 • 2024 — 2026
                </div>
              </div>
            </div>

            {/* Perforated Stub Right */}
            <div className="border-t sm:border-t-0 sm:border-l-2 border-dashed border-white/20 pt-4 sm:pt-0 sm:pl-6 flex flex-col items-center justify-center font-mono text-[10px] text-[#faecd8]/50 space-y-2">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-xs font-bold text-white">
                QR CODE
              </div>
              <span className="tracking-widest">12312312322 1</span>
            </div>

          </div>
        </div>

      </div>


      {/* ══════════════════ 5. RETRO RED CRT MONITOR (DOTSLASH / TECH DISCOVER) ══════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8">
        
        {/* Beige CRT Computer Frame (Left 7 Cols) */}
        <div className="md:col-span-7 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md bg-[#e5dfd5] rounded-[2.5rem] p-6 shadow-2xl border-4 border-[#c8c0b2] text-slate-900 space-y-4 transform -rotate-1 hover:rotate-0 transition-transform">
            
            {/* Red CRT Screen with Scanlines */}
            <div className="aspect-[4/3] rounded-2xl bg-[#c93f2c] p-6 shadow-inner relative overflow-hidden flex flex-col justify-between text-white font-mono border-4 border-slate-800">
              
              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40" />

              <div className="relative z-10 space-y-2">
                <div className="text-xl font-bold tracking-tight">
                  Dotslash // Tech Discover
                </div>
                <div className="text-[10px] text-white/80 uppercase tracking-widest">
                  AI Transformation & Radar Platform
                </div>
              </div>

              <div className="relative z-10 text-xs text-white/90 leading-relaxed font-mono">
                Helping researchers, developers, and businesses thrive in the modern intelligence landscape.
              </div>

            </div>

            {/* Front Panel Speaker Grill & Switch */}
            <div className="pt-2 flex items-center justify-between px-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#c93f2c]" />
                <span className="w-3 h-3 rounded-full bg-slate-400" />
              </div>
              <div className="h-3 w-32 bg-slate-400/50 rounded-full" />
            </div>

          </div>
        </div>

        {/* Notable Work & Quote (Right 5 Cols) */}
        <div className="md:col-span-5 space-y-6 pl-0 md:pl-6 font-mono">
          
          <div className="font-hand text-lg text-[#faecd8]/80">
            "Learnt how to make a good design, great."
          </div>

          <div className="space-y-2">
            <div className="text-xs text-[#c93f2c] font-bold tracking-wider uppercase">
              Notable work
            </div>
            <ul className="space-y-1.5 text-xs text-[#faecd8]/80">
              <li>✦ Dekra</li>
              <li>✦ Balwin Fibre</li>
              <li>✦ Junk Mail</li>
              <li>✦ arXiv Research Paper Radar</li>
              <li>✦ +4 other enterprise projects...</li>
            </ul>
          </div>

        </div>

      </div>


      {/* ══════════════════ 6. "SIDE QUESTS" SPIRAL NOTEBOOK ══════════════════ */}
      <div className="pt-12 space-y-8">
        
        <div className="text-center space-y-2 relative">
          <h2 className="font-serif text-4xl sm:text-6xl text-[#faecd8]">
            Side Quests
          </h2>
          {/* Subtle Doodles */}
          <span className="absolute left-1/4 top-0 text-2xl text-[#faecd8]/30 font-hand pointer-events-none">
            ✎ ❀
          </span>
          <span className="absolute right-1/4 top-0 text-2xl text-[#faecd8]/30 font-hand pointer-events-none">
            ✦ ✧
          </span>
        </div>

        {/* Top-Bound Spiral Notebook Container */}
        <div className="relative max-w-3xl mx-auto bg-[#faecd8] text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-300 space-y-10">
          
          {/* Spiral Ring Wire Loops at Top */}
          <div className="absolute -top-4 left-6 right-6 flex justify-between pointer-events-none">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="w-2.5 h-7 rounded-full bg-slate-800 border border-slate-400 shadow-sm" />
            ))}
          </div>

          {/* Quest Item 1: Drift */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center pt-4 border-b border-slate-300 pb-8">
            <div className="space-y-2 font-mono">
              <div className="font-serif text-2xl font-bold text-slate-950">
                Drift // Vision X
              </div>
              <div className="text-xs text-[#c93f2c] font-bold uppercase tracking-wider">
                creator // Design & Code
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                Personal library of autonomous AI desktop agents and vector embeddings discovered across research papers.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-300 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
                alt="Drift"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Quest Item 2: TF2048 / WebGL Shader Lab */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="space-y-2 font-mono">
              <div className="font-serif text-2xl font-bold text-slate-950">
                TF2048 // Shader Lab
              </div>
              <div className="text-xs text-[#c93f2c] font-bold uppercase tracking-wider">
                creator // 3D Concept & Shaders
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                Realtime GPU compute shaders, procedural particle physics, and cybernetic 3D WebGL scenes.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-300 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
                alt="TF2048"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
