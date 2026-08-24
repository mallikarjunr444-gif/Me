import React, { useState } from 'react';

export function JackieWorkPage({ onNavigateHome, onSelectProject }) {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const toggleTooltip = (id) => {
    setActiveTooltip(activeTooltip === id ? null : id);
  };

  // Close tooltips when clicking outside
  const handlePageClick = (e) => {
    if (!e.target.closest('.tooltip-trigger')) {
      setActiveTooltip(null);
    }
  };

  return (
    <div
      className="max-w-5xl mx-auto select-none"
      onClick={handlePageClick}
    >

      {/* ══════════════════ MARQUEE TICKER 1 ══════════════════ */}
      <div className="overflow-hidden py-4 mb-4 border-t border-b border-white/10">
        <div className="animate-marquee-smooth">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 text-xs font-mono text-[#faecd8]/50 tracking-widest uppercase whitespace-nowrap mr-8">
              <span>★ Places I've been</span>
              <span>◆ Things I've learnt</span>
              <span>✦ Work that shaped me</span>
              <span>● Medicus Labs</span>
              <span>★ BashPay</span>
              <span>◆ ORVEX Studios</span>
              <span>✦ Vision X</span>
              <span>● CloudOps</span>
              <span>★ Clinical AI</span>
              <span>◆ Founder & Builder</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════ 1. TOP HEADER & LUCKY CAT SEAL ══════════════════ */}
      <div className="text-center space-y-6 pt-4">
        {/* Top Lucky Cat Seal Stamp */}
        <div className="flex justify-center">
          <div className="w-16 sm:w-20 aspect-[1/2] flex items-center justify-center transform -rotate-1 hover:rotate-0 transition-transform duration-300">
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


      {/* ══════════════════ DIAGRAM 1 (hand-drawn illustration) ══════════════════ */}
      <div className="flex justify-center py-12">
        <img
          src="/images/work/diagram-1.png"
          alt="Hand-drawn illustration"
          className="w-20 h-auto object-contain opacity-60 animate-line-boil-slow"
        />
      </div>


      {/* ══════════════════ 2. MEDICUS LABS — CLOTHING CARE HANG-TAG ══════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

        {/* Slanted Clothing Tag — CSS-BUILT (Left 7 Cols) */}
        <div className="md:col-span-7 flex justify-center md:justify-end">
          <a
            href="https://in.linkedin.com/in/mallikarjunr-com?trk=profile-badge"
            target="_blank"
            rel="noopener noreferrer"
            className="relative transform -rotate-3 hover:rotate-0 hover:scale-[1.03] transition-all duration-500 max-w-[320px] sm:max-w-[360px] w-full block cursor-pointer group"
            title="View LinkedIn Profile"
          >
            {/* ── Red/orange card peeking behind on the right ── */}
            <div
              className="absolute top-4 -right-3 bottom-0 left-4 rounded-2xl bg-[#e05638] group-hover:translate-x-1 transition-transform duration-300"
              style={{ zIndex: 1 }}
            />

            {/* ── Main cream tag card ── */}
            <div
              className="relative rounded-2xl px-7 pt-24 pb-8 flex flex-col gap-6"
              style={{
                backgroundColor: '#f5e0c8',
                zIndex: 2,
                boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
              }}
            >
              {/* ── String loop + Eyelet at top ── */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-24" style={{ zIndex: 3 }}>
                {/* Gray string */}
                <svg viewBox="0 0 120 100" fill="none" className="w-full h-full">
                  <path
                    d="M60 95 C60 95, 20 85, 25 40 C28 15, 55 5, 60 5 C65 5, 92 15, 95 40 C100 85, 60 95, 60 95"
                    stroke="#9a9a9a"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Dark eyelet circle */}
                <div
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-[3.5px] border-[#3d3a36]"
                  style={{ backgroundColor: '#2a2826' }}
                />
              </div>

              {/* ── 5 Hand-drawn laundry care symbols ── */}
              <div className="flex items-center gap-4 mt-2">
                <svg viewBox="0 0 36 32" className="w-9 h-8" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Iron symbol */}
                  <path d="M6 24 L30 24 Q34 24 34 20 L34 16 Q34 8 24 8 L8 8 L6 24 Z" />
                  <circle cx="20" cy="16" r="2" fill="#1a1a1a" />
                </svg>
                <svg viewBox="0 0 36 32" className="w-9 h-8" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Wash tub with 30° */}
                  <path d="M4 14 L32 14 L28 28 L8 28 Z" />
                  <path d="M2 14 L34 14" />
                  <text x="12" y="25" fontSize="8" fontFamily="monospace" fill="#1a1a1a" stroke="none" fontWeight="bold">30</text>
                </svg>
                <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Square with X */}
                  <rect x="4" y="4" width="24" height="24" rx="1" />
                  <line x1="8" y1="8" x2="24" y2="24" />
                  <line x1="24" y1="8" x2="8" y2="24" />
                </svg>
                <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Circle with X */}
                  <circle cx="16" cy="16" r="12" />
                  <line x1="9" y1="9" x2="23" y2="23" />
                  <line x1="23" y1="9" x2="9" y2="23" />
                </svg>
                <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Triangle with X */}
                  <path d="M16 4 L30 28 L2 28 Z" />
                  <line x1="10" y1="14" x2="22" y2="24" />
                  <line x1="22" y1="14" x2="10" y2="24" />
                </svg>
              </div>

              {/* ── Company Name ── */}
              <div
                className="text-[#1a1a1a] text-[2rem] leading-none tracking-tight"
                style={{ fontFamily: "'Courier New', 'Geist Mono', monospace", fontWeight: 900 }}
              >
                Medicus Labs
              </div>

              {/* ── Description (handwritten style) ── */}
              <div
                className="font-hand text-[#2a2826] text-lg leading-snug max-w-[260px]"
              >
                India's AI-driven clinical decision support & healthcare technology platform
              </div>

              {/* ── Barcode (SVG) ── */}
              <div className="mt-2">
                <svg viewBox="0 0 200 50" className="w-48 h-12" fill="#1a1a1a">
                  {/* Thick and thin bars to simulate a barcode */}
                  {[0,6,10,14,20,24,26,32,36,38,44,48,50,56,60,64,68,72,76,80,84,88,90,96,100,104,108,112,116,118,124,128,132,136,140,144,148,152,156,160,164,168,172,176,180,184,188,192,196].map((x, i) => (
                    <rect
                      key={i}
                      x={x}
                      y="0"
                      width={i % 3 === 0 ? 4 : i % 2 === 0 ? 3 : 2}
                      height={i % 5 === 0 ? 50 : 42}
                      rx="0.5"
                    />
                  ))}
                </svg>
              </div>

              {/* ── Serial Number ── */}
              <div
                className="text-[#1a1a1a] text-sm tracking-[0.15em]"
                style={{ fontFamily: "'Courier New', 'Geist Mono', monospace", fontWeight: 700 }}
              >
                M3D1CU52024220268
              </div>
            </div>
          </a>
        </div>

        {/* Notable Work & Learning Quote (Right 5 Cols) */}
        <div className="md:col-span-5 space-y-8 pl-0 md:pl-6">
          <div className="space-y-3 font-mono">
            <div className="text-xs text-[#e85746] font-bold tracking-wider uppercase">
              Notable work
            </div>
            <ul className="space-y-2 text-xl text-[#e85746] font-hand">
              <li
                onClick={() => toggleTooltip('medicus')}
                className="tooltip-trigger hover:text-white cursor-pointer transition-colors relative"
              >
                Medicus Labs
                {activeTooltip === 'medicus' && (
                  <div className="absolute left-0 top-full mt-1 z-30 bg-[#faecd8] text-slate-900 text-xs font-mono p-3 rounded-xl shadow-xl border border-slate-300 max-w-xs animate-in fade-in zoom-in-95">
                    Founded Medicus Labs — Building AI-driven clinical decision support systems.
                  </div>
                )}
              </li>
              <li
                onClick={() => toggleTooltip('bashpay')}
                className="tooltip-trigger hover:text-white cursor-pointer transition-colors relative"
              >
                BashPay / Payments
                {activeTooltip === 'bashpay' && (
                  <div className="absolute left-0 top-full mt-1 z-30 bg-[#faecd8] text-slate-900 text-xs font-mono p-3 rounded-xl shadow-xl border border-slate-300 max-w-xs animate-in fade-in zoom-in-95">
                    Payment portal that increased payment success rate to <strong>80%</strong>.
                  </div>
                )}
              </li>
              <li
                onClick={() => toggleTooltip('clinical_ai')}
                className="tooltip-trigger hover:text-white cursor-pointer transition-colors relative"
              >
                Clinical AI
                {activeTooltip === 'clinical_ai' && (
                  <div className="absolute left-0 top-full mt-1 z-30 bg-[#faecd8] text-slate-900 text-xs font-mono p-3 rounded-xl shadow-xl border border-slate-300 max-w-xs animate-in fade-in zoom-in-95">
                    AI-powered diagnostic assistance for healthcare professionals.
                  </div>
                )}
              </li>
              <li
                onClick={() => toggleTooltip('orvex')}
                className="tooltip-trigger hover:text-white cursor-pointer transition-colors relative"
              >
                ORVEX Studios
                {activeTooltip === 'orvex' && (
                  <div className="absolute left-0 top-full mt-1 z-30 bg-[#faecd8] text-slate-900 text-xs font-mono p-3 rounded-xl shadow-xl border border-slate-300 max-w-xs animate-in fade-in zoom-in-95">
                    Full-stack product studio — design, engineering, and strategy.
                  </div>
                )}
              </li>
              <li className="tooltip-trigger hover:text-white cursor-pointer transition-colors">
                CloudOps & IaC Matrix
              </li>
            </ul>
          </div>

          {/* Hand-Drawn Quote */}
          <div className="font-hand text-xl text-[#faecd8]/90 max-w-xs leading-snug">
            Learnt to think beyond what's expected
          </div>
        </div>

      </div>


      {/* ══════════════════ MARQUEE TICKER 2 ══════════════════ */}
      <div className="overflow-hidden py-4 mt-16 mb-4 border-t border-b border-white/5">
        <div className="animate-marquee-smooth" style={{ animationDirection: 'reverse', animationDuration: '30s' }}>
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 text-xs font-mono text-[#faecd8]/30 tracking-widest uppercase whitespace-nowrap mr-8">
              <span>☆ Systems Design</span>
              <span>◇ Cloud Infrastructure</span>
              <span>✧ Product Engineering</span>
              <span>○ Full-Stack Development</span>
              <span>☆ AI / ML Integration</span>
              <span>◇ DevOps & CI/CD</span>
              <span>✧ Healthcare Tech</span>
              <span>○ Payments & Fintech</span>
            </span>
          ))}
        </div>
      </div>


      {/* ══════════════════ DIAGRAM 2 (hand-drawn illustration) ══════════════════ */}
      <div className="flex justify-center py-10">
        <img
          src="/images/work/diagram-2.png"
          alt="Hand-drawn illustration"
          className="w-28 h-auto object-contain opacity-50 animate-line-boil-slow"
        />
      </div>


      {/* ══════════════════ 3. PULSE WRISTBAND ══════════════════ */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

          {/* Slanted Wristband Graphic (Left 8 Cols) */}
          <div className="md:col-span-8 flex justify-center md:justify-start">
            <div className="w-full max-w-[620px] transform -rotate-2 hover:rotate-0 transition-all duration-500 group">
              {/* Orange-red underlay shadow */}
              <div className="relative">
                <div className="absolute inset-0 bg-[#e05638] rounded-2xl translate-x-2 translate-y-2 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <img
                  src="/images/work/wristband-pulse.png"
                  alt="Pulse Wristband"
                  className="relative w-full h-auto object-contain filter drop-shadow-2xl z-10"
                />
              </div>
            </div>
          </div>

          {/* Notable Work Right (Right 4 Cols) */}
          <div className="md:col-span-4 space-y-2 pl-0 md:pl-4 font-mono">
            <div className="text-xs text-[#e85746] font-bold tracking-wider uppercase mb-3">
              Notable work
            </div>
            <ul className="space-y-1.5 text-lg text-[#e85746] font-hand">
              <li
                onClick={() => toggleTooltip('vision_x')}
                className="tooltip-trigger hover:text-white cursor-pointer transition-colors relative"
              >
                Vision X AI Agent
                {activeTooltip === 'vision_x' && (
                  <div className="absolute left-0 top-full mt-1 z-30 bg-[#faecd8] text-slate-900 text-xs font-mono p-3 rounded-xl shadow-xl border border-slate-300 max-w-xs animate-in fade-in zoom-in-95">
                    Autonomous AI agent for visual recognition and real-time decision making.
                  </div>
                )}
              </li>
              <li className="tooltip-trigger hover:text-white cursor-pointer transition-colors">Stream Uploader</li>
              <li className="tooltip-trigger hover:text-white cursor-pointer transition-colors">Home Feed</li>
              <li className="tooltip-trigger hover:text-white cursor-pointer transition-colors">Event Timeline</li>
            </ul>
          </div>

        </div>

        {/* Learning Quote below Wristband on Left */}
        <div className="font-hand text-lg text-[#faecd8]/90 max-w-sm pt-1 pl-4">
          Learnt that design is a team sport that involves people outside of design
        </div>
      </div>


      {/* ══════════════════ DIAGRAM 6 (hand-drawn illustration) ══════════════════ */}
      <div className="flex justify-center py-14">
        <img
          src="/images/work/diagram-6.png"
          alt="Hand-drawn illustration"
          className="w-32 h-auto object-contain opacity-45 animate-line-boil-slow"
        />
      </div>


      {/* ══════════════════ 4. HEYGO — LINOCUT MOUNTAIN TICKET ══════════════════ */}
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="w-full max-w-[780px] transform rotate-1 hover:rotate-0 transition-all duration-500 group">
            {/* Orange-red underlay shadow */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#e05638] rounded-2xl translate-x-2 translate-y-3 opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <img
                src="/images/work/ticket-heygo.png"
                alt="HEYGO Ticket — Admit 1"
                className="relative w-full h-auto object-contain filter drop-shadow-2xl z-10"
              />
            </div>
          </div>
        </div>

        {/* Quote & Notable Work below Heygo Ticket */}
        <div className="flex flex-col sm:flex-row justify-between items-start max-w-3xl mx-auto px-4 gap-6 font-mono">
          <div className="font-hand text-lg text-[#faecd8]/90 max-w-xs">
            Learnt design is a powerful alignment tool
          </div>

          <div className="space-y-1">
            <div className="text-xs text-[#e85746] font-bold tracking-wider uppercase mb-1">
              Notable work
            </div>
            <ul className="space-y-1 text-base text-[#e85746] font-hand">
              <li className="tooltip-trigger hover:text-white cursor-pointer transition-colors">Streaming UI</li>
              <li
                onClick={() => toggleTooltip('stream_creator')}
                className="tooltip-trigger hover:text-white cursor-pointer transition-colors relative"
              >
                Stream Creator
                {activeTooltip === 'stream_creator' && (
                  <div className="absolute right-0 top-full mt-1 z-30 bg-[#faecd8] text-slate-900 text-xs font-mono p-3 rounded-xl shadow-xl border border-slate-300 max-w-xs animate-in fade-in zoom-in-95">
                    Platform to stream on Heygo. Better streaming experience also increased tipping by 8%/stream.
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>


      {/* ══════════════════ MARQUEE TICKER 3 ══════════════════ */}
      <div className="overflow-hidden py-4 mt-16 mb-4 border-t border-b border-white/5">
        <div className="animate-marquee-smooth" style={{ animationDuration: '20s' }}>
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 text-xs font-mono text-[#faecd8]/25 tracking-widest uppercase whitespace-nowrap mr-8">
              <span>♦ Founder</span>
              <span>♣ Builder</span>
              <span>♠ Engineer</span>
              <span>♥ Designer</span>
              <span>♦ Architect</span>
              <span>♣ Maker</span>
              <span>♠ Thinker</span>
              <span>♥ Creator</span>
            </span>
          ))}
        </div>
      </div>


      {/* ══════════════════ 5. RETRO RED CRT MONITOR (DOTSLASH) ══════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-10">

        {/* Beige CRT Computer Frame (Left 7 Cols) */}
        <div className="md:col-span-7 flex justify-center md:justify-end">
          <div className="relative max-w-[480px] w-full transform -rotate-1 hover:rotate-0 transition-all duration-500 group">
            {/* Orange-red underlay shadow */}
            <div className="absolute inset-0 bg-[#e05638] rounded-2xl translate-x-3 translate-y-3 opacity-55 group-hover:opacity-80 transition-opacity duration-300" />
            <img
              src="/images/work/crt-monitor.png"
              alt="Dotslash CRT Monitor"
              className="relative w-full h-auto object-contain filter drop-shadow-2xl z-10"
            />
          </div>
        </div>

        {/* Notable Work & Quote (Right 5 Cols) */}
        <div className="md:col-span-5 space-y-8 pl-0 md:pl-6 font-mono">
          <div className="font-hand text-xl text-[#faecd8]/90 max-w-xs leading-snug">
            Learnt how to make a good design, great.
          </div>

          <div className="space-y-3">
            <div className="text-xs text-[#e85746] font-bold tracking-wider uppercase">
              Notable work
            </div>
            <ul className="space-y-2 text-xl text-[#e85746] font-hand">
              <li className="tooltip-trigger hover:text-white cursor-pointer transition-colors">Internal Packing Tool</li>
              <li className="tooltip-trigger hover:text-white cursor-pointer transition-colors">Kiosk</li>
              <li className="tooltip-trigger hover:text-white cursor-pointer transition-colors">Point of Sale</li>
              <li className="tooltip-trigger hover:text-white cursor-pointer transition-colors">+4 other large projects...</li>
            </ul>
          </div>
        </div>

      </div>


      {/* ══════════════════ 6. "SIDE QUESTS" 5 PROJECTS SPIRAL NOTEBOOK ══════════════════ */}
      <div className="pt-24 space-y-12">

        {/* Mouse Hero & Garden Linocut Illustration */}
        <div className="flex justify-center -mb-8">
          <div className="w-full max-w-lg transform hover:scale-[1.03] transition-transform duration-300">
            <img
              src="/images/work/diagram-3.png"
              alt="Side Quests Mouse Hero Illustration"
              className="w-full h-auto object-contain filter drop-shadow-md"
            />
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center space-y-2">
          <h2 className="font-serif text-5xl sm:text-7xl text-[#faecd8] tracking-tight">
            Side Quests
          </h2>
        </div>

        {/* Top-Bound Spiral Notebook Container */}
        <div className="relative max-w-4xl mx-auto bg-[#faecd8] text-slate-900 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border border-[#e5d5c0] space-y-14">

          {/* Metal Spiral Wire Loops at Top */}
          <div className="absolute -top-4 left-8 right-8 flex justify-between pointer-events-none">
            {Array.from({ length: 22 }).map((_, i) => (
              <div key={i} className="w-2.5 h-8 rounded-full bg-[#3d3a36] border border-[#605d59] shadow-md" />
            ))}
          </div>

          {/* Quest Item 1: Drift */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4 border-b border-slate-300/80 pb-12">
            <div className="md:col-span-5 space-y-3 font-mono">
              <div className="font-serif text-3xl font-bold text-slate-950">
                Drift
              </div>
              <div className="text-xs text-[#e85746] font-bold uppercase tracking-wider">
                creator // Design & Code
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-serif italic">
                Personal library of images that you found online or created
              </p>
            </div>

            <div className="md:col-span-7 rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-black">
              <img
                src="/images/work/sidequest-drift.png"
                alt="Drift Project"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Quest Item 2: TF2048 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-slate-300/80 pb-12">
            <div className="md:col-span-5 space-y-3 font-mono">
              <div className="font-serif text-3xl font-bold text-slate-950">
                TF2048
              </div>
              <div className="text-xs text-[#e85746] font-bold uppercase tracking-wider leading-relaxed">
                creator // Bot design & Site design & Concept art & 3D Modelling and texturing
              </div>
              <div className="text-xs text-slate-500 font-mono">
                2021
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-serif italic">
                Puzzle based NFT
              </p>
            </div>

            <div className="md:col-span-7 rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-[#2d5248]">
              <img
                src="/images/work/sidequest-tf2048.png"
                alt="TF2048 Project"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Quest Item 3: Who's Speaking */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-slate-300/80 pb-12">
            <div className="md:col-span-5 space-y-3 font-mono">
              <div className="font-serif text-3xl font-bold text-slate-950">
                Who's Speaking
              </div>
              <div className="text-xs text-[#e85746] font-bold uppercase tracking-wider">
                Designer & Framer Developer
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-serif italic">
                Follow speakers and see where they are going to be speaking
              </p>
            </div>

            <div className="md:col-span-7 rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-slate-900">
              <img
                src="/images/work/sidequest-whos-speaking.png"
                alt="Who's Speaking Project"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Quest Item 4: Triple Time */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-slate-300/80 pb-12">
            <div className="md:col-span-5 space-y-3 font-mono">
              <div className="font-serif text-3xl font-bold text-slate-950">
                Triple Time
              </div>
              <div className="text-xs text-[#e85746] font-bold uppercase tracking-wider leading-relaxed">
                Founding Product Designer // Product Designer & Motion designer
              </div>
              <div className="text-xs text-slate-500 font-mono">
                2025
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-serif italic">
                AI powered medical note taker for doctors
              </p>
            </div>

            <div className="md:col-span-7 rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-slate-900">
              <img
                src="/images/work/sidequest-triple-time.png"
                alt="Triple Time Project"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Quest Item 5: ResQued */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-3 font-mono">
              <div className="font-serif text-3xl font-bold text-slate-950">
                ResQued
              </div>
              <div className="text-xs text-[#e85746] font-bold uppercase tracking-wider">
                Product Designer
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-serif italic">
                Helping ordinary people deliver extraordinary acts of kindness
              </p>
            </div>

            <div className="md:col-span-7 rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-slate-900">
              <img
                src="/images/work/sidequest-resqued.png"
                alt="ResQued Project"
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

        </div>

      </div>


      {/* ══════════════════ 7. BOTTOM GUEST MESSAGE & SIGNATURE ══════════════════ */}
      <div className="text-center space-y-4 max-w-xl mx-auto px-6 pt-20 font-hand text-lg text-[#faecd8]/80 leading-relaxed">
        <div className="text-3xl pb-2">🎶</div>
        <p>
          "Hi! Thanks for visiting my site! Feel free to explore and connect anytime."
        </p>
      </div>

    </div>
  );
}
