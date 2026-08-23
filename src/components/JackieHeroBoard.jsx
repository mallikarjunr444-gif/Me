import React from 'react';

export function JackieHeroBoard({ onSelectProject }) {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-2 sm:px-4">
      
      {/* Outer Red Layer Mat (Exact red bevel from user screenshot) */}
      <div className="relative rounded-[2.5rem] p-3 sm:p-4 bg-[#c93f2c] border-2 border-[#a12f1f] shadow-2xl">
        
        {/* Inner Cream Grid Paper Mat */}
        <div
          className="relative rounded-[2rem] p-6 sm:p-10 lg:p-12 bg-[#fbf5ea] border border-[#e5d5c0] overflow-hidden select-none min-h-[460px] sm:min-h-[520px] flex flex-col justify-between"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(201, 63, 44, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(201, 63, 44, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        >
          
          {/* Main Grid Content: Left Typography + Right Illustrated Scene */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            
            {/* Left Column: Hand Signature, Role, 4-Line Headline & Metadata */}
            <div className="md:col-span-6 space-y-6">
              
              {/* Hand-drawn Signature */}
              <div className="space-y-1">
                <div className="font-hand text-4xl sm:text-5xl lg:text-6xl text-[#c93f2c] font-bold tracking-tight -rotate-1">
                  Mallikarjun.R :)
                </div>
                <div className="font-serif italic text-lg sm:text-xl text-[#c93f2c]/90 font-medium">
                  Cloud Engineer and DevOps
                </div>
              </div>

              {/* Big 4-Line Manifesto Headline (Exact from reference screenshot) */}
              <div className="space-y-4 pt-1">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#c93f2c] font-normal leading-[1.04] tracking-tight">
                  Software
                  <br />
                  should
                  <br />
                  <span className="italic">feel</span>
                  <br />
                  <span className="italic font-bold">intelligent</span>
                </h1>

                {/* 3-Column Monospace Metadata with Dot Separators (Clear separation from corner sketch) */}
                <div className="text-xs sm:text-sm font-mono text-[#c93f2c] pt-3 flex items-center gap-3 sm:gap-4 relative z-10">
                  <div className="leading-tight">
                    <div>Bengaluru,</div>
                    <div>India</div>
                  </div>
                  
                  <span className="font-bold text-[#c93f2c] text-sm">.</span>
                  
                  <div className="leading-tight">
                    <div>GMT +5:30</div>
                    <div>(IST)</div>
                  </div>
                  
                  <span className="font-bold text-[#c93f2c] text-sm">.</span>
                  
                  <div className="leading-tight">
                    <div>Founder @ Medicus</div>
                    <div>Labs</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Authentic Illustrated Developer Window & Birds */}
            <div className="md:col-span-6 flex justify-center md:justify-end relative">
              <div className="relative max-w-[390px] w-full">
                <img
                  src="https://framerusercontent.com/images/zreYWHKtYVvdYwuZm8gBYAa3IiA.png?scale-down-to=1024&width=1687&height=1394"
                  alt="Mallikarjun.R Workspace Illustration"
                  className="w-full h-auto object-contain filter drop-shadow-md"
                />
              </div>
            </div>

          </div>

          {/* Bottom-left botanical flower sketch (tucked into corner, non-overlapping with text) */}
          <img
            src="https://framerusercontent.com/images/a5uPbmT6PvUwjD3MFRKJ8andRk.png?width=444&height=437"
            alt=""
            className="absolute -bottom-8 -left-8 w-24 sm:w-28 h-auto pointer-events-none opacity-40 object-contain z-0"
          />

          {/* Bottom-right log sketch with mushrooms */}
          <img
            src="https://framerusercontent.com/images/BUQeUkXwalGo0ETntC1tuR9TM.png?scale-down-to=512&width=552&height=242"
            alt=""
            className="absolute -bottom-2 right-0 w-40 sm:w-48 h-auto pointer-events-none opacity-65 object-contain z-0"
          />

        </div>

      </div>

    </div>
  );
}

// Layered Physical Paper Scraps (Screenshot 2 exact style from jackiezhang.co.za)
export function LayeredPaperNotes() {
  return (
    <div className="relative max-w-4xl mx-auto -mt-8 sm:-mt-12 z-30 px-4">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        
        {/* Note 1: Torn Lined Notebook Paper (Left) */}
        <div className="paper-card p-5 sm:p-6 max-w-[260px] bg-[#fdfaf2] border border-slate-300 shadow-xl -rotate-[5deg] hover:rotate-0 transition-transform duration-300">
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
          className="paper-card p-5 sm:p-6 max-w-[280px] bg-[#f5efe4] border border-slate-300 shadow-xl rotate-[8deg] hover:rotate-0 transition-transform duration-300"
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
        <div className="paper-card p-6 sm:p-7 max-w-[240px] bg-[#e3d3bd] border border-[#c9b59b] shadow-xl rotate-[4deg] hover:rotate-0 transition-transform duration-300 relative">
          
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
