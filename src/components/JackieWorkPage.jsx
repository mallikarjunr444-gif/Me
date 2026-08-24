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


      {/* ══════════════════ 3. PULSE WRISTBAND — CSS-BUILT ══════════════════ */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

          {/* CSS-Built Wristband (Left 8 Cols) */}
          <div className="md:col-span-8 flex justify-center md:justify-start">
            <div className="w-full max-w-[680px] transform -rotate-1 hover:rotate-0 transition-all duration-500 group cursor-pointer">
              <div className="relative flex items-stretch h-[110px] sm:h-[130px]">

                {/* ── Left cream end with zigzag & snap holes ── */}
                <div
                  className="relative flex-shrink-0 w-[70px] sm:w-[90px] rounded-l-xl flex flex-col items-center justify-between py-3"
                  style={{ backgroundColor: '#f5e0c8' }}
                >
                  {/* Zigzag pattern */}
                  <svg viewBox="0 0 40 60" className="w-8 h-12 opacity-60" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 5 L20 15 L5 25 L20 35 L5 45 L20 55" />
                    <path d="M20 5 L35 15 L20 25 L35 35 L20 45 L35 55" />
                  </svg>
                  {/* Snap hole */}
                  <div className="w-5 h-5 rounded-full bg-[#1a1a1a] border-2 border-[#3d3a36]" />
                  {/* Rotated text */}
                  <div
                    className="absolute left-1 top-1/2 -translate-y-1/2 text-[7px] tracking-[0.3em] font-mono text-[#1a1a1a]/50 uppercase"
                    style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg) translateX(50%)' }}
                  >
                    PULSE
                  </div>
                </div>

                {/* ── Center red band with abstract contour lines ── */}
                <div
                  className="relative flex-1 overflow-hidden flex items-center justify-end px-6 sm:px-8"
                  style={{ backgroundColor: '#e05638' }}
                >
                  {/* Abstract topographic / contour SVG lines */}
                  <svg
                    viewBox="0 0 500 130"
                    className="absolute inset-0 w-full h-full opacity-30"
                    fill="none"
                    stroke="#fae0c8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M0 65 C40 30, 80 90, 120 50 C160 10, 200 100, 240 60 C280 20, 320 90, 360 45 C400 0, 440 80, 500 50" />
                    <path d="M0 80 C50 50, 100 110, 150 70 C200 30, 250 100, 300 65 C350 30, 400 95, 450 55 L500 70" />
                    <path d="M0 40 C60 70, 100 10, 160 50 C220 90, 260 20, 320 60 C380 100, 420 30, 500 60" />
                    <path d="M0 95 C70 60, 130 110, 200 80 C270 50, 330 100, 400 75 L500 90" />
                    <path d="M0 25 C30 55, 90 5, 140 40 C190 75, 240 15, 300 45 C360 75, 410 25, 500 35" />
                    <circle cx="80" cy="55" r="30" />
                    <circle cx="80" cy="55" r="18" />
                    <circle cx="250" cy="70" r="25" />
                    <circle cx="250" cy="70" r="12" />
                    <circle cx="400" cy="50" r="22" />
                  </svg>

                  {/* Text content */}
                  <div className="relative z-10 text-right">
                    <div
                      className="text-[#1a1a1a] text-2xl sm:text-3xl leading-none mb-1"
                      style={{ fontFamily: "'Courier New', 'Geist Mono', monospace", fontWeight: 900 }}
                    >
                      Pulse
                    </div>
                    <div className="font-hand text-[#1a1a1a]/90 text-sm sm:text-base leading-snug max-w-[220px] sm:max-w-[260px]">
                      Watch the race from the athletes point of view
                    </div>
                  </div>
                </div>

                {/* ── Right cream end with snap holes ── */}
                <div
                  className="relative flex-shrink-0 w-[45px] sm:w-[55px] rounded-r-xl flex flex-col items-center justify-center gap-4 py-3"
                  style={{ backgroundColor: '#f5e0c8' }}
                >
                  <div className="w-4 h-4 rounded-full bg-[#1a1a1a] border-2 border-[#3d3a36]" />
                  <div className="w-4 h-4 rounded-full bg-[#1a1a1a] border-2 border-[#3d3a36]" />
                </div>

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
                Stream uploader
                {activeTooltip === 'vision_x' && (
                  <div className="absolute left-0 top-full mt-1 z-30 bg-[#faecd8] text-slate-900 text-xs font-mono p-3 rounded-xl shadow-xl border border-slate-300 max-w-xs animate-in fade-in zoom-in-95">
                    Enabled athletes to easily upload their GoPro footages onto the app.
                  </div>
                )}
              </li>
              <li className="tooltip-trigger hover:text-white cursor-pointer transition-colors">Home feed</li>
              <li className="tooltip-trigger hover:text-white cursor-pointer transition-colors">Race platform</li>
              <li className="tooltip-trigger hover:text-white cursor-pointer transition-colors">Event timeline</li>
            </ul>
          </div>

        </div>

        {/* Learning Quote below Wristband on Left */}
        <div className="font-hand text-lg text-[#faecd8]/90 max-w-sm pt-1 pl-4">
          Learnt that design is a team's sports that involves people outside of design
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
