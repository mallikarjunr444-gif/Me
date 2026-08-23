import React from 'react';

export function JackieHeroBoard({ onSelectProject }) {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-2 sm:px-4">
      
      {/* Outer Red Layer Mat (Bevel underneath) */}
      <div className="relative rounded-[2.5rem] p-3 sm:p-4 bg-[#c93f2c] border-2 border-[#a12f1f] shadow-2xl">
        
        {/* Inner Cream Grid Paper Mat */}
        <div
          className="relative rounded-[2rem] p-6 sm:p-12 lg:p-14 bg-[#fbf5ea] border border-[#e5d5c0] overflow-hidden select-none min-h-[420px] sm:min-h-[500px] flex flex-col justify-between"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(201, 63, 44, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(201, 63, 44, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        >
          
          {/* Main Grid Content: Left Typography + Right Illustrated Scene */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Hand Signature, Role & Headline */}
            <div className="md:col-span-6 space-y-6">
              
              {/* Hand-drawn Signature */}
              <div className="space-y-1">
                <div className="font-hand text-4xl sm:text-5xl lg:text-6xl text-[#c93f2c] font-bold tracking-tight -rotate-2">
                  Mallikarjun :)
                </div>
                <div className="font-serif italic text-lg sm:text-xl text-[#c93f2c]/90 font-medium">
                  AI Engineer & Founder
                </div>
              </div>

              {/* Big Manifesto Headline */}
              <div className="space-y-2 pt-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#c93f2c] font-normal leading-[1.05] tracking-tight">
                  Software should
                  <br />
                  <span className="font-serif italic font-bold">feel intelligent</span>
                </h1>

                <div className="text-xs sm:text-sm font-mono text-[#c93f2c]/80 pt-2 flex items-center gap-2">
                  <span>Bengaluru</span>
                  <span>•</span>
                  <span>GMT +5:30 (IST)</span>
                  <span>•</span>
                  <span className="font-bold">CSE Core</span>
                </div>
              </div>

            </div>

            {/* Right Column: Illustrated Developer Window & Birds */}
            <div className="md:col-span-6 flex justify-center md:justify-end relative">
              <div className="relative max-w-[340px] w-full">
                
                {/* Hand-drawn Illustrated Window Frame (Jackie Zhang Style) */}
                <svg
                  className="w-full text-[#c93f2c]"
                  viewBox="0 0 320 340"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Little Birds Sitting on Top Window Frame */}
                  <path d="M60 40 Q65 30 72 32 Q80 34 82 40 M68 34 L72 34" />
                  <path d="M90 40 Q95 30 102 32 Q110 34 112 40 M98 34 L102 34" />
                  <path d="M240 40 Q245 30 252 32 Q260 34 262 40 M248 34 L252 34" />

                  {/* Window Outline */}
                  <rect x="30" y="40" width="260" height="240" rx="8" />
                  <line x1="30" y1="65" x2="290" y2="65" />
                  
                  {/* Window Controls & UNTITLED Title */}
                  <circle cx="45" cy="53" r="2.5" />
                  <circle cx="55" cy="53" r="2.5" />
                  <circle cx="65" cy="53" r="2.5" />
                  <text x="130" y="56" fill="currentColor" stroke="none" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                    UNTITLED
                  </text>
                  <rect x="255" y="48" width="8" height="8" rx="1" />
                  <path d="M272 49 L278 55 M278 49 L272 55" />

                  {/* Browser Search Bar */}
                  <rect x="50" y="80" width="220" height="22" rx="4" strokeDasharray="4 4" />
                  <path d="M60 91 Q70 86 80 91" />
                  <line x1="250" y1="91" x2="260" y2="91" />

                  {/* Developer Figure Holding UI Screen */}
                  <rect x="90" y="125" width="100" height="125" rx="12" fill="#c93f2c" fillOpacity="0.1" />
                  
                  {/* Face */}
                  <circle cx="210" cy="180" r="16" />
                  <circle cx="205" cy="177" r="1.5" fill="currentColor" />
                  <circle cx="215" cy="177" r="1.5" fill="currentColor" />
                  <path d="M206 186 Q210 190 214 186" />
                  <path d="M198 168 Q210 160 222 170" />

                  {/* Arms holding tablet */}
                  <path d="M195 190 L160 195 M225 190 L185 205" />

                  {/* Companion (Sheep/Dog/Cat) on right */}
                  <ellipse cx="260" cy="220" rx="18" ry="14" />
                  <path d="M255 210 Q250 200 245 215" />
                  <circle cx="254" cy="218" r="1.5" fill="currentColor" />

                  {/* Foliage / Bushes around the base */}
                  <path d="M10 310 Q25 260 55 280 Q85 250 120 270 Q160 240 200 275 Q245 255 280 290 Q310 270 315 320" />
                  <path d="M30 290 Q40 240 70 260 M220 260 Q240 220 270 250" />
                  
                  {/* Flowers */}
                  <circle cx="45" cy="290" r="8" />
                  <circle cx="70" cy="275" r="7" />
                </svg>

              </div>
            </div>

          </div>

          {/* Bottom foliage corner accent */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 text-[#c93f2c]/20 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <circle cx="30" cy="80" r="25" />
              <circle cx="60" cy="70" r="20" />
              <circle cx="75" cy="90" r="22" />
            </svg>
          </div>

        </div>

      </div>

    </div>
  );
}

// Layered Physical Paper Scraps (Screenshot 2 exact style)
export function LayeredPaperNotes() {
  return (
    <div className="relative max-w-4xl mx-auto -mt-8 sm:-mt-12 z-30 px-4">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        
        {/* Note 1: Torn Lined Notebook Paper (Left) */}
        <div className="paper-card p-5 sm:p-6 max-w-[260px] bg-[#fdfaf2] border border-slate-300 shadow-xl rotate-[-2.5deg] hover:rotate-0 transition-transform duration-300">
          <div className="space-y-2">
            <div className="h-0.5 w-full border-t border-rose-300 mb-2" />
            <p className="font-hand text-2xl sm:text-3xl text-slate-900 font-bold leading-tight">
              tirelessly
              <br />
              pursue
              <br />
              clarity.
            </p>
            <div className="h-0.5 w-full border-t border-blue-200" />
          </div>
        </div>

        {/* Note 2: Graph Paper Note (Center Right) */}
        <div
          className="paper-card p-5 sm:p-6 max-w-[280px] bg-[#f5efe4] border border-slate-300 shadow-xl rotate-[1.5deg] hover:rotate-0 transition-transform duration-300"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '12px 12px'
          }}
        >
          <p className="font-mono text-xl sm:text-2xl text-slate-900 font-extrabold leading-tight tracking-tight">
            Software
            <br />
            should
            <br />
            empower.
          </p>
        </div>

        {/* Note 3: Craft Paper Note with Metal Paperclip (Bottom Center) */}
        <div className="paper-card p-6 sm:p-7 max-w-[240px] bg-[#e3d3bd] border border-[#c9b59b] shadow-xl rotate-[-1deg] hover:rotate-0 transition-transform duration-300 relative">
          
          {/* Metal Paperclip Doodle on top-left */}
          <div className="absolute -top-3 left-6 w-5 h-10 text-slate-700">
            <svg viewBox="0 0 20 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 10 L6 30 Q6 36 10 36 Q14 36 14 30 L14 6 Q14 2 8 2 Q2 2 2 6 L2 32" />
            </svg>
          </div>

          <p className="font-serif italic text-2xl sm:text-3xl text-slate-900 font-normal leading-tight pt-1">
            Engineering
            <br />
            for moments
          </p>
        </div>

      </div>
    </div>
  );
}
