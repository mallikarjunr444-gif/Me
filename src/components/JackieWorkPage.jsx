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


      {/* ══════════════════ 2. THE CLOTHING CARE HANG-TAG (EXACT SCREENSHOT REPLICA) ══════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-6">
        
        {/* Hang Tag (Left 7 Cols) */}
        <div className="md:col-span-7 flex justify-center md:justify-end">
          <a
            href="https://in.linkedin.com/in/mallikarjunr-com?trk=profile-badge"
            target="_blank"
            rel="noopener noreferrer"
            className="relative transform -rotate-2 hover:rotate-0 hover:scale-102 transition-all duration-300 max-w-sm w-full cursor-pointer group block"
            title="Open Mallikarjun R on LinkedIn"
          >
            
            {/* Red Underlay Shadow Card */}
            <div className="absolute inset-0 bg-[#e85746] rounded-3xl translate-x-3 translate-y-3 shadow-xl" />

            {/* Main Cream Hang Tag */}
            <div className="relative bg-[#faecd8] text-black rounded-3xl p-7 pt-14 shadow-2xl border border-[#e5d5c0] space-y-6">
              
              {/* Eyelet & String Loop (Exact from reference) */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
                {/* Loop String */}
                <svg className="w-16 h-12 -mt-10 text-[#605d59]" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M30 40 C10 25, 10 5, 30 10 C50 15, 50 35, 30 40" />
                </svg>
                {/* Metal Eyelet Ring */}
                <div className="w-9 h-9 rounded-full bg-[#2b2927] border-4 border-[#7a756f] flex items-center justify-center shadow-inner">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#181716]" />
                </div>
              </div>

              {/* Hand-Drawn Laundry Care Symbols (Exact 5 icons in pure black line art) */}
              <div className="flex items-center justify-between pt-2 text-black">
                {/* 1. Iron */}
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 22 L24 22 C27 22, 28 20, 27 16 C25 10, 20 8, 12 8 L8 8 C5 8, 4 10, 4 14 Z" />
                  <circle cx="12" cy="18" r="1.5" fill="currentColor" />
                </svg>

                {/* 2. Wash Tub 30° */}
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 12 L8 24 C8 25, 9 26, 11 26 L21 26 C23 26, 24 25, 24 24 L26 12" />
                  <path d="M6 14 C8 12, 10 12, 12 14 C14 16, 16 16, 18 14 C20 12, 22 12, 24 14 C25 15, 26 15, 26 14" />
                  <text x="16" y="21" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">30°</text>
                </svg>

                {/* 3. Square Cross */}
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="7" width="18" height="18" rx="2" />
                  <line x1="8" y1="8" x2="24" y2="24" />
                  <line x1="24" y1="8" x2="8" y2="24" />
                </svg>

                {/* 4. Circle Cross */}
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="16" cy="16" r="9" />
                  <line x1="10" y1="10" x2="22" y2="22" />
                  <line x1="22" y1="10" x2="10" y2="22" />
                </svg>

                {/* 5. Triangle Lines */}
                <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="16,6 5,26 27,26" />
                  <line x1="13" y1="12" x2="19" y2="24" />
                  <line x1="19" y1="12" x2="13" y2="24" />
                </svg>
              </div>

              {/* Title & Description in Black Monospace (Exact layout from screenshot) */}
              <div className="space-y-2 text-black font-mono">
                <div className="text-3xl font-black tracking-tight flex items-center justify-between">
                  <span>LinkedIn</span>
                  <span className="text-[10px] uppercase tracking-wider text-black/60 font-bold group-hover:text-[#e85746] transition-colors">↗ View Profile</span>
                </div>

                <p className="text-xs text-black leading-relaxed font-mono font-medium">
                  Mallikarjun R — CSE Student @ DSATM | Founder at ORVEX Studios & Medicus Labs. Building AI, Cloud & DevOps projects.
                </p>
              </div>

              {/* Hand-Drawn Barcode with handwritten numbers */}
              <div className="pt-4 space-y-1 font-mono text-black">
                {/* Barcode Lines */}
                <div className="flex items-end justify-center gap-[3px] h-14">
                  {[4,2,3,1,4,2,1,3,2,4,1,3,2,1,4,3,2,1,3,4,2,1,3,4,1,2,3,4,2,1].map((w, i) => (
                    <div
                      key={i}
                      className="bg-black"
                      style={{
                        width: `${w}px`,
                        height: `${38 + (i % 5) * 3}px`
                      }}
                    />
                  ))}
                </div>

                {/* Handwritten Serial */}
                <div className="text-center text-xs font-bold tracking-[2px] pt-1">
                  B45H2024220268
                </div>
              </div>

            </div>

          </a>
        </div>

        {/* Notable Work & Learning Quote (Right 5 Cols) */}
        <div className="md:col-span-5 space-y-8 pl-0 md:pl-6">
          
          <div className="space-y-3 font-mono">
            <div className="text-xs text-[#c93f2c] font-bold tracking-wider uppercase">
              Notable work
            </div>
            <ul className="space-y-2 text-lg text-[#c93f2c] font-hand">
              <li className="hover:text-white cursor-pointer transition-colors">
                Medicus Labs
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                BashPay / Payments
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                ORVEX Studios
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Vision X AI Agent
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


      {/* ══════════════════ 5. RETRO RED CRT MONITOR (EXACT REPLICA FROM SCREENSHOT) ══════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8">
        
        {/* Beige CRT Computer Frame (Left 7 Cols) */}
        <div className="md:col-span-7 flex justify-center md:justify-end">
          <div className="relative max-w-[480px] w-full">
            
            {/* Dark bottom stand base underneath */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[88%] h-5 bg-[#635d56] rounded-b-[2rem] -z-10 shadow-xl" />

            {/* Main Outer Beige Chassis */}
            <div className="bg-[#ede5d8] rounded-[2.8rem] pt-6 px-6 pb-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-3px_6px_rgba(0,0,0,0.15)] border border-[#dfd6c7] relative text-slate-900 space-y-4">
              
              {/* Deep Recessed Dark Bezel / Cavity */}
              <div className="rounded-[2.2rem] bg-[#1a1918] p-4 sm:p-5 relative overflow-hidden shadow-[inset_0_18px_30px_rgba(0,0,0,0.95),inset_0_-18px_30px_rgba(0,0,0,0.95),inset_18px_0_30px_rgba(0,0,0,0.95),inset_-18px_0_30px_rgba(0,0,0,0.95)] border border-[#2b2826]">
                
                {/* Red CRT Phosphor Screen */}
                <div className="aspect-[4/3] rounded-[1.6rem] bg-[#e85746] relative overflow-hidden flex items-center p-6 sm:p-8 shadow-[0_0_25px_rgba(232,87,70,0.35),inset_0_0_25px_rgba(0,0,0,0.35)]">
                  
                  {/* High Density Horizontal Scanlines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.22)_50%)] bg-[length:100%_3px] pointer-events-none z-10 opacity-70" />

                  {/* Convex Glass Reflection / Vignette */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.12)_0%,rgba(0,0,0,0.25)_100%)] pointer-events-none z-10" />

                  {/* Text Content (Side-by-side exact layout from screenshot) */}
                  <div className="relative z-20 grid grid-cols-12 gap-3 items-center w-full text-white font-mono">
                    
                    {/* Left Column: Dotslash + Digital transformation agency */}
                    <div className="col-span-5 space-y-2">
                      <div className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-none font-mono">
                        Dotslash
                      </div>
                      <div className="text-[11px] sm:text-xs text-white/95 leading-tight font-mono">
                        Digital<br />
                        transformati<br />
                        on agency
                      </div>
                    </div>

                    {/* Right Column: Helping businesses thrive in the digital landscape. */}
                    <div className="col-span-7 pl-1">
                      <div className="text-xs sm:text-[14px] text-white font-normal leading-snug font-mono">
                        Helping businesses<br />
                        thrive in the<br />
                        digital landscape.
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              {/* Bottom Speaker Matrix & Control Panel */}
              <div
                className="pt-3 pb-1 border-t border-[#d8cfbf] shadow-[0_1px_0_rgba(255,255,255,0.6)] rounded-b-3xl px-2"
                style={{
                  backgroundImage: 'radial-gradient(#5a544c 1.2px, transparent 1.2px)',
                  backgroundSize: '7px 7px'
                }}
              >
                {/* 3-LED Pill Left */}
                <div className="w-14 h-4.5 rounded-full bg-[#181716] px-1.5 flex items-center justify-between shadow-inner mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff4d3d] shadow-[0_0_6px_#ff4d3d]" />
                  <span className="w-2 h-2 rounded-full bg-[#0a0909]" />
                  <span className="w-2 h-2 rounded-full bg-[#0a0909]" />
                </div>

                {/* Floppy Disk Drive Slot */}
                <div className="w-48 sm:w-56 h-2.5 bg-[#181716] rounded-xs shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)] border-t border-black/40 mb-1" />
              </div>

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
              <li>✦ +4 other large projects...</li>
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
