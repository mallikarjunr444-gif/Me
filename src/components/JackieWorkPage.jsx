import React, { useState } from 'react';
import { workData } from '../data/workData';

export function JackieWorkPage({ onNavigate, onOpenConnect }) {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const toggleTooltip = (id) => {
    setActiveTooltip(activeTooltip === id ? null : id);
  };

  const handlePageClick = (e) => {
    if (!e.target.closest('.tooltip-trigger')) {
      setActiveTooltip(null);
    }
  };

  return (
    <div
      className="max-w-5xl mx-auto px-4 py-8 select-none space-y-20"
      onClick={handlePageClick}
    >
      {/* ══════════════════ 1. TOP NAV & HEADER ══════════════════ */}
      <div className="space-y-6">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between font-mono text-sm max-w-sm mx-auto pt-2 pb-6">
          <button
            onClick={() => onNavigate && onNavigate('about')}
            className="text-2xl hover:scale-110 transition-transform cursor-pointer"
            title="Home"
          >
            ☺
          </button>
          <button
            onClick={() => onNavigate && onNavigate('about')}
            className="text-[#faecd8]/70 hover:text-[#faecd8] transition-colors cursor-pointer font-medium"
          >
            about
          </button>
          <span className="text-[#e05638] font-bold underline decoration-wavy decoration-[#e05638] underline-offset-4">
            work
          </span>
          <button
            onClick={() => onOpenConnect && onOpenConnect()}
            className="text-[#faecd8]/70 hover:text-[#faecd8] transition-colors cursor-pointer font-medium"
          >
            Connect
          </button>
        </div>

        {/* Marquee Ticker 1 */}
        <div className="overflow-hidden py-3 border-t border-b border-white/10">
          <div className="animate-marquee-smooth">
            {[...Array(2)].map((_, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-8 text-xs font-mono text-[#faecd8]/50 tracking-widest uppercase whitespace-nowrap mr-8"
              >
                {workData.header.ticker1.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center pt-6">
          <h1 className="font-serif text-4xl sm:text-6xl text-[#faecd8] tracking-tight">
            {workData.header.title}
          </h1>
        </div>
      </div>

      {/* ══════════════════ 2. CLOTHING CARE HANG-TAG ══════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-6">
        {/* CSS-Built Slanted Hang-Tag (Left 7 Cols) */}
        <div className="md:col-span-7 flex justify-center md:justify-end">
          <a
            href={workData.hangTag.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative transform -rotate-3 hover:rotate-0 hover:scale-[1.03] transition-all duration-500 max-w-[320px] sm:max-w-[360px] w-full block cursor-pointer group"
            title="View Profile / Project"
          >
            {/* Orange-red offset shadow card */}
            <div
              className="absolute top-4 -right-3 bottom-0 left-4 rounded-2xl bg-[#e05638] group-hover:translate-x-1 transition-transform duration-300"
              style={{ zIndex: 1 }}
            />

            {/* Main cream tag card */}
            <div
              className="relative rounded-2xl px-7 pt-24 pb-8 flex flex-col gap-6"
              style={{
                backgroundColor: '#f5e0c8',
                zIndex: 2,
                boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
              }}
            >
              {/* String loop + Eyelet */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-24" style={{ zIndex: 3 }}>
                <svg viewBox="0 0 120 100" fill="none" className="w-full h-full">
                  <path
                    d="M60 95 C60 95, 20 85, 25 40 C28 15, 55 5, 60 5 C65 5, 92 15, 95 40 C100 85, 60 95, 60 95"
                    stroke="#9a9a9a"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                <div
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-[3.5px] border-[#3d3a36]"
                  style={{ backgroundColor: '#2a2826' }}
                />
              </div>

              {/* 5 Laundry care symbols */}
              <div className="flex items-center gap-4 mt-2">
                <svg viewBox="0 0 36 32" className="w-9 h-8" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 24 L30 24 Q34 24 34 20 L34 16 Q34 8 24 8 L8 8 L6 24 Z" />
                  <circle cx="20" cy="16" r="2" fill="#1a1a1a" />
                </svg>
                <svg viewBox="0 0 36 32" className="w-9 h-8" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14 L32 14 L28 28 L8 28 Z" />
                  <path d="M2 14 L34 14" />
                  <text x="12" y="25" fontSize="8" fontFamily="monospace" fill="#1a1a1a" stroke="none" fontWeight="bold">30</text>
                </svg>
                <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="24" height="24" rx="1" />
                  <line x1="8" y1="8" x2="24" y2="24" />
                  <line x1="24" y1="8" x2="8" y2="24" />
                </svg>
                <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="16" cy="16" r="12" />
                  <line x1="9" y1="9" x2="23" y2="23" />
                  <line x1="23" y1="9" x2="9" y2="23" />
                </svg>
                <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4 L30 28 L2 28 Z" />
                  <line x1="10" y1="14" x2="22" y2="24" />
                  <line x1="22" y1="14" x2="10" y2="24" />
                </svg>
              </div>

              {/* Company / Brand Name */}
              <div
                className="text-[#1a1a1a] text-[2rem] leading-none tracking-tight font-mono font-black"
              >
                {workData.hangTag.brandName}
              </div>

              {/* Description */}
              <div className="font-hand text-[#2a2826] text-lg leading-snug max-w-[260px]">
                {workData.hangTag.description}
              </div>

              {/* Barcode SVG */}
              <div className="mt-2">
                <svg viewBox="0 0 200 50" className="w-48 h-12" fill="#1a1a1a">
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

              {/* Serial Number */}
              <div className="text-[#1a1a1a] text-sm tracking-[0.15em] font-mono font-bold">
                {workData.hangTag.serial}
              </div>
            </div>
          </a>
        </div>

        {/* Notable Work & Quote (Right 5 Cols) */}
        <div className="md:col-span-5 space-y-8 pl-0 md:pl-6">
          <div className="space-y-3 font-mono">
            <div className="text-xs text-[#e85746] font-bold tracking-wider uppercase">
              Notable work
            </div>
            <ul className="space-y-2 text-xl text-[#e85746] font-hand">
              {workData.hangTag.notableWork.map((item) => (
                <li
                  key={item.id}
                  onClick={() => toggleTooltip(item.id)}
                  className="tooltip-trigger hover:text-white cursor-pointer transition-colors relative"
                >
                  {item.title}
                  {activeTooltip === item.id && (
                    <div className="absolute left-0 top-full mt-2 z-30 bg-[#faecd8] text-slate-900 text-xs font-mono p-3.5 rounded-xl shadow-2xl border border-slate-300 max-w-xs">
                      {item.tooltip}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="font-hand text-xl text-[#faecd8]/90 max-w-xs leading-snug">
            {workData.hangTag.quote}
          </div>
        </div>
      </div>

      {/* ══════════════════ MARQUEE TICKER 2 ══════════════════ */}
      <div className="overflow-hidden py-3 border-t border-b border-white/5">
        <div className="animate-marquee-smooth" style={{ animationDirection: 'reverse', animationDuration: '28s' }}>
          {[...Array(2)].map((_, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-8 text-xs font-mono text-[#faecd8]/35 tracking-widest uppercase whitespace-nowrap mr-8"
            >
              {workData.header.ticker2.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════ 3. PULSE WRISTBAND ══════════════════ */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Wristband (Left 8 Cols) */}
          <div className="md:col-span-8 flex justify-center md:justify-start">
            <div className="w-full max-w-[680px] transform -rotate-1 hover:rotate-0 transition-all duration-500 group cursor-pointer">
              <div className="relative flex items-stretch h-[110px] sm:h-[130px] rounded-xl overflow-hidden shadow-2xl">
                {/* Left cream end with zigzag */}
                <div
                  className="relative flex-shrink-0 w-[70px] sm:w-[90px] flex flex-col items-center justify-between py-3"
                  style={{ backgroundColor: '#f5e0c8' }}
                >
                  <svg viewBox="0 0 40 60" className="w-8 h-12 opacity-60" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 5 L20 15 L5 25 L20 35 L5 45 L20 55" />
                    <path d="M20 5 L35 15 L20 25 L35 35 L20 45 L35 55" />
                  </svg>
                  <div className="w-5 h-5 rounded-full bg-[#1a1a1a] border-2 border-[#3d3a36]" />
                </div>

                {/* Center red band with contour lines */}
                <div
                  className="relative flex-1 overflow-hidden flex items-center justify-end px-6 sm:px-8"
                  style={{ backgroundColor: '#e05638' }}
                >
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
                    <circle cx="80" cy="55" r="30" />
                    <circle cx="250" cy="70" r="25" />
                    <circle cx="400" cy="50" r="22" />
                  </svg>

                  <div className="relative z-10 text-right">
                    <div className="text-[#1a1a1a] text-2xl sm:text-3xl leading-none mb-1 font-mono font-black">
                      {workData.wristband.brandName}
                    </div>
                    <div className="font-hand text-[#1a1a1a]/90 text-sm sm:text-base leading-snug max-w-[220px] sm:max-w-[260px]">
                      {workData.wristband.description}
                    </div>
                  </div>
                </div>

                {/* Right cream end with snap holes */}
                <div
                  className="relative flex-shrink-0 w-[45px] sm:w-[55px] flex flex-col items-center justify-center gap-4 py-3"
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
              {workData.wristband.notableWork.map((item) => (
                <li
                  key={item.id}
                  onClick={() => toggleTooltip(item.id)}
                  className="tooltip-trigger hover:text-white cursor-pointer transition-colors relative"
                >
                  {item.title}
                  {activeTooltip === item.id && (
                    <div className="absolute left-0 top-full mt-2 z-30 bg-[#faecd8] text-slate-900 text-xs font-mono p-3.5 rounded-xl shadow-2xl border border-slate-300 max-w-xs">
                      {item.tooltip}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="font-hand text-lg text-[#faecd8]/90 max-w-sm pt-1 pl-4">
          {workData.wristband.quote}
        </div>
      </div>

      {/* ══════════════════ 4. SIDE QUESTS ══════════════════ */}
      {workData.sideQuests && workData.sideQuests.items.length > 0 && (
        <div className="pt-12 space-y-8">
          <div className="text-center">
            <h2 className="font-serif text-4xl sm:text-6xl text-[#faecd8] tracking-tight">
              {workData.sideQuests.title}
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto bg-[#faecd8] text-slate-900 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border border-[#e5d5c0] space-y-10">
            {/* Top spiral binder holes */}
            <div className="absolute -top-4 left-8 right-8 flex justify-between pointer-events-none">
              {Array.from({ length: 22 }).map((_, i) => (
                <div key={i} className="w-2.5 h-8 rounded-full bg-[#3d3a36] border border-[#605d59] shadow-md" />
              ))}
            </div>

            {workData.sideQuests.items.map((quest, i) => (
              <div
                key={quest.id}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
                  i !== workData.sideQuests.items.length - 1 ? 'border-b border-slate-300/80 pb-8' : ''
                }`}
              >
                <div className="md:col-span-6 space-y-2 font-mono">
                  <div className="font-serif text-3xl font-bold text-slate-950">
                    {quest.title}
                  </div>
                  <div className="text-xs text-[#e85746] font-bold uppercase tracking-wider">
                    {quest.role} {quest.year ? `// ${quest.year}` : ''}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-serif italic">
                    {quest.description}
                  </p>
                </div>

                <div className={`md:col-span-6 rounded-2xl p-6 ${quest.bg} text-white shadow-xl border border-slate-300/30 flex items-center justify-center min-h-[120px]`}>
                  <div className="font-serif text-2xl font-bold tracking-tight opacity-90">
                    {quest.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ══════════════════ 5. FOOTER ══════════════════ */}
      <div className="text-center space-y-4 max-w-xl mx-auto pt-16 font-hand text-lg text-[#faecd8]/80 leading-relaxed">
        <div className="text-3xl pb-2">🎶</div>
        <p>"{workData.footer.message}"</p>
        <div className="text-xs font-mono text-[#faecd8]/40 pt-4">
          {workData.footer.signoff}
        </div>
      </div>
    </div>
  );
}
