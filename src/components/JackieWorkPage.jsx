import React from 'react';

export function JackieWorkPage({ onNavigateHome }) {
  return (
    <div className="max-w-5xl mx-auto space-y-32 py-10 select-none">
      
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


      {/* ══════════════════ 2. THE CLOTHING CARE HANG-TAG (BASH) ══════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-6">
        
        {/* Slanted Clothing Tag (Left 7 Cols) */}
        <div className="md:col-span-7 flex justify-center md:justify-end">
          <a
            href="https://in.linkedin.com/in/mallikarjunr-com?trk=profile-badge"
            target="_blank"
            rel="noopener noreferrer"
            className="relative transform -rotate-2 hover:rotate-0 hover:scale-103 transition-all duration-300 max-w-[340px] sm:max-w-[370px] w-full block cursor-pointer group"
            title="View LinkedIn Profile"
          >
            <img
              src="/images/work/tag-bash.png"
              alt="Clothing Hang Tag"
              className="w-full h-auto object-contain filter drop-shadow-2xl"
            />
          </a>
        </div>

        {/* Notable Work & Learning Quote (Right 5 Cols) */}
        <div className="md:col-span-5 space-y-10 pl-0 md:pl-6">
          <div className="space-y-3 font-mono">
            <div className="text-xs text-[#e85746] font-bold tracking-wider uppercase">
              Notable work
            </div>
            <ul className="space-y-2 text-xl text-[#e85746] font-hand">
              <li className="hover:text-white cursor-pointer transition-colors">
                BashPay
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Internal Packing Tool
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Kiosk
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Point of Sale
              </li>
            </ul>
          </div>

          {/* Hand-Drawn Quote */}
          <div className="font-hand text-xl text-[#faecd8]/90 max-w-xs leading-snug">
            Learnt to think beyond what's expected
          </div>
        </div>

      </div>


      {/* ══════════════════ 3. PULSE WRISTBAND & HEYGO TICKET ══════════════════ */}
      <div className="space-y-24 pt-6">
        
        {/* Pulse Marathon Wristband */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Slanted Wristband Graphic (Left 8 Cols) */}
            <div className="md:col-span-8 flex justify-center md:justify-start">
              <div className="w-full max-w-[620px] transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/images/work/wristband-pulse.png"
                  alt="Pulse Wristband"
                  className="w-full h-auto object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Notable Work Right (Right 4 Cols) */}
            <div className="md:col-span-4 space-y-2 pl-0 md:pl-4 font-mono">
              <div className="text-xs text-[#e85746] font-bold tracking-wider uppercase mb-3">
                Notable work
              </div>
              <ul className="space-y-1.5 text-lg text-[#e85746] font-hand">
                <li className="hover:text-white cursor-pointer transition-colors">Stream uploader</li>
                <li className="hover:text-white cursor-pointer transition-colors">Home feed</li>
                <li className="hover:text-white cursor-pointer transition-colors">Race platform</li>
                <li className="hover:text-white cursor-pointer transition-colors">Event timeline</li>
              </ul>
            </div>

          </div>

          {/* Learning Quote below Wristband on Left */}
          <div className="font-hand text-lg text-[#faecd8]/90 max-w-sm pt-1 pl-4">
            Learnt that design is a team's sports that involves people outside of design
          </div>
        </div>


        {/* HEYGO ADMIT 1 Linocut Mountain Ticket */}
        <div className="flex justify-center pt-8">
          <div className="w-full max-w-[780px] transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <img
              src="/images/work/ticket-heygo.png"
              alt="HEYGO Ticket Admit 1"
              className="w-full h-auto object-contain filter drop-shadow-2xl"
            />
          </div>
        </div>

      </div>


      {/* ══════════════════ 4. RETRO RED CRT MONITOR (DOTSLASH) ══════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-10">
        
        {/* Beige CRT Computer Frame (Left 7 Cols) */}
        <div className="md:col-span-7 flex justify-center md:justify-end">
          <div className="relative max-w-[480px] w-full transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <img
              src="/images/work/crt-monitor.png"
              alt="Dotslash CRT Monitor"
              className="w-full h-auto object-contain filter drop-shadow-2xl"
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
              <li className="hover:text-white cursor-pointer transition-colors">Dekra</li>
              <li className="hover:text-white cursor-pointer transition-colors">Balwin Fibre</li>
              <li className="hover:text-white cursor-pointer transition-colors">Junk Mail</li>
              <li className="hover:text-white cursor-pointer transition-colors">+4 other large projects...</li>
            </ul>
          </div>
        </div>

      </div>


      {/* ══════════════════ 5. "SIDE QUESTS" SPIRAL NOTEBOOK ══════════════════ */}
      <div className="pt-16 space-y-12">
        
        <div className="text-center space-y-3 relative">
          {/* Top Doodles */}
          <div className="flex justify-between items-center max-w-md mx-auto px-8 pointer-events-none opacity-40">
            <span className="text-2xl font-hand">🐁</span>
            <span className="text-2xl font-hand">🌸</span>
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl text-[#faecd8]">
            Side Quests
          </h2>
        </div>

        {/* Top-Bound Spiral Notebook Container */}
        <div className="relative max-w-3xl mx-auto bg-[#faecd8] text-slate-900 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border border-[#e5d5c0] space-y-12">
          
          {/* Metal Spiral Wire Loops at Top */}
          <div className="absolute -top-4 left-8 right-8 flex justify-between pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-2.5 h-8 rounded-full bg-[#3d3a36] border border-[#605d59] shadow-md" />
            ))}
          </div>

          {/* Quest Item 1: Drift */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center pt-4 border-b border-slate-300/80 pb-10">
            <div className="space-y-3 font-mono">
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

            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-300">
              <img
                src="/images/work/sidequest-drift.png"
                alt="Drift"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Quest Item 2: TF2048 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div className="space-y-3 font-mono">
              <div className="font-serif text-3xl font-bold text-slate-950">
                TF2048
              </div>
              <div className="text-xs text-[#e85746] font-bold uppercase tracking-wider">
                creator // Bot design & Site design & Concept art & 3D Modelling and texturing
              </div>
              <div className="text-xs text-slate-500 font-mono">
                2021
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-serif italic">
                Puzzle based NFT
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-300">
              <img
                src="/images/work/sidequest-tf2048.png"
                alt="TF2048"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
