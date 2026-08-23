import React, { useState } from 'react';
import { ChalkFlowers, ChalkRetroComputer, ChalkPerchedBird, ChalkBotanicalBranch } from './HandDrawnAssets';

export function JackieWhatILookForSection({ onOpenConnect, personal }) {
  const [checkedItems, setCheckedItems] = useState({
    item1: true,
    item2: true,
    item3: true
  });

  const toggleCheck = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="py-24 px-4 sm:px-8 relative select-none max-w-6xl mx-auto">
      
      {/* Background Chalk Botanicals on Canvas */}
      <div className="absolute left-2 sm:left-4 top-16 hidden md:block opacity-85 pointer-events-none w-36">
        <ChalkFlowers className="w-full h-auto" />
      </div>

      <div className="absolute right-2 sm:right-6 top-20 hidden md:block opacity-85 pointer-events-none w-36">
        <ChalkBotanicalBranch className="w-full h-auto" />
      </div>

      {/* Main "What I look for" Card (Exact from jackiezhang.co.za) */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="rounded-[2.5rem] p-3 sm:p-4 bg-[#c93f2c] border-2 border-[#a12f1f] shadow-2xl">
          
          <div className="rounded-[2rem] p-6 sm:p-10 lg:p-12 bg-[#fbf5ea] border border-[#e5d5c0] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading, Checklist & let's chat button */}
            <div className="md:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#c93f2c] font-normal tracking-tight">
                  What I look for
                </h3>
                <div className="h-0.5 w-full bg-[#c93f2c]/30" />
              </div>

              {/* Interactive Checklist Items */}
              <div className="space-y-4 pt-1 font-hand text-xl sm:text-2xl text-slate-900 font-bold">
                
                {/* Item 1 */}
                <div
                  onClick={() => toggleCheck('item1')}
                  className="flex items-center gap-3 cursor-pointer group hover:text-[#c93f2c] transition-colors"
                >
                  <div className="w-6 h-6 rounded-md border-2 border-[#c93f2c] flex items-center justify-center text-[#c93f2c] text-sm bg-white font-mono shrink-0">
                    {checkedItems.item1 ? '✓' : ''}
                  </div>
                  <span>Impactful work (Clinical AI & Healthcare)</span>
                </div>

                {/* Item 2 */}
                <div
                  onClick={() => toggleCheck('item2')}
                  className="flex items-center gap-3 cursor-pointer group hover:text-[#c93f2c] transition-colors"
                >
                  <div className="w-6 h-6 rounded-md border-2 border-[#c93f2c] flex items-center justify-center text-[#c93f2c] text-sm bg-white font-mono shrink-0">
                    {checkedItems.item2 ? '✓' : ''}
                  </div>
                  <span>Meaningful work (Gemini AI & Cloud)</span>
                </div>

                {/* Item 3 */}
                <div
                  onClick={() => toggleCheck('item3')}
                  className="flex items-center gap-3 cursor-pointer group hover:text-[#c93f2c] transition-colors"
                >
                  <div className="w-6 h-6 rounded-md border-2 border-[#c93f2c] flex items-center justify-center text-[#c93f2c] text-sm bg-white font-mono shrink-0">
                    {checkedItems.item3 ? '✓' : ''}
                  </div>
                  <span>Diversed team of talented folks</span>
                </div>

              </div>

              {/* Hand-Drawn Boxed "let's chat!" Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenConnect}
                  className="relative px-8 py-2.5 font-hand text-2xl text-[#c93f2c] font-bold hover:scale-105 transition-all group select-none cursor-pointer"
                >
                  <span>let's chat!</span>
                  {/* Hand drawn red rectangle border box */}
                  <svg className="absolute inset-0 w-full h-full text-[#c93f2c] pointer-events-none" viewBox="0 0 140 45" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 8 L134 5 Q138 6 136 20 L134 38 Q132 42 120 40 L8 42 Q4 40 5 28 Z" />
                  </svg>
                </button>
              </div>

            </div>

            {/* Right Column: Hand-drawn Red Box with Mallikarjun Portrait / Medicus Logo */}
            <div className="md:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-[260px] aspect-[4/5] p-2 flex items-center justify-center">
                
                {/* Thick Hand-Drawn Red Frame */}
                <svg className="absolute inset-0 w-full h-full text-[#c93f2c] pointer-events-none" viewBox="0 0 200 240" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 20 Q100 12 185 18 Q192 100 188 220 Q100 226 15 220 Q8 120 15 20 Z" />
                </svg>

                {/* Portrait inside the frame */}
                <div className="w-[86%] h-[88%] rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                  <img
                    src={personal.avatar}
                    alt="Mallikarjun R"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Trio: Smiling CRT Monitor, Bird, and Botanical Branch (Exact from jackiezhang.co.za) */}
      <div className="pt-16 max-w-2xl mx-auto flex items-center justify-between px-6 sm:px-12 text-[#faecd8]/85">
        <div className="w-24 sm:w-28">
          <ChalkRetroComputer className="w-full h-auto" />
        </div>
        <div className="w-20 sm:w-24">
          <ChalkPerchedBird className="w-full h-auto" />
        </div>
        <div className="w-20 sm:w-24">
          <ChalkBotanicalBranch className="w-full h-auto" />
        </div>
      </div>

      {/* Running Hand-drawn Country Roads Lyrics Ticker (Exact from jackiezhang.co.za) */}
      <div className="text-center font-hand text-lg sm:text-xl text-[#faecd8]/75 pt-6 space-y-3">
        <p className="leading-relaxed">
          🎶 Almost heaven, West Virginia. Blue Ridge Mountains Shenandoah River . Life is old there. Older than the trees. Younger than the mountains. Growin like a breeze Country Roads, take me home. To the place I belong West Virginia, mountain momma. Take me home, country roads. 🎶
        </p>
        
        {/* Signature icon at bottom center */}
        <div className="flex justify-center pt-2">
          <div className="w-8 h-8 text-[#e0523d]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
        </div>
      </div>

    </section>
  );
}
