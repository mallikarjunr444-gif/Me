import React, { useState } from 'react';
import { ArrowUpRight, RotateCw, Layers, Plus } from 'lucide-react';
import { medicusLabsData } from '../data/medicusLabsData';

export function JackieCuttingBoardSection({ onSelectProject }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const medicus = medicusLabsData;
  const currentImg = medicus.images[activeImageIndex] || medicus.images[0];

  const handleFlipCard = (e) => {
    e.stopPropagation();
    setIsFlipped((prev) => !prev);
  };

  const handleCycleImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % medicus.images.length);
  };

  // Blank slots for future projects
  const blankSlots = [
    { id: 2, slot: "SLOT 02", rot: "rotate-[2deg]" },
    { id: 3, slot: "SLOT 03", rot: "-rotate-[2.5deg]" },
    { id: 4, slot: "SLOT 04", rot: "rotate-[1.5deg]" },
    { id: 5, slot: "SLOT 05", rot: "-rotate-[1.5deg]" },
    { id: 6, slot: "SLOT 06", rot: "rotate-[2deg]" }
  ];

  return (
    <section id="work" className="py-20 relative select-none max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Outer Layer: Cutting Board Mat with Grid Coordinates */}
      <div className="relative rounded-[2.5rem] p-4 sm:p-7 bg-[#1f1d1c] border-2 border-[#382725] shadow-2xl overflow-hidden rotate-[0.5deg]">
        
        {/* Subtle Cutting Board Texture Overlay */}
        <img
          src="https://framerusercontent.com/images/9G25ruOgt322clA0e0vFrw4RNEs.png?width=300&height=300"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
        />

        {/* Top Grid Coordinates & Header (Changed from CUTTING BOARD to PROJECTS) */}
        <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-[#faecd8]/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c93f2c] animate-pulse" />
            <span className="font-bold text-[#faecd8]">PROJECTS // WORKSPACE</span>
          </div>
          <div className="flex items-center gap-3">
            <span>GRID 01 — 18</span>
            <span>•</span>
            <span>BENGALURU</span>
          </div>
        </div>

        {/* Left Edge Coordinate Numbers (1 to 18) */}
        <div className="absolute left-2 top-20 bottom-16 flex flex-col justify-between text-[10px] font-mono text-white/20 pointer-events-none hidden sm:flex">
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>

        {/* Inner Card Deck: Slot 1 is Active Medicus Labs, Slots 2-6 are Blank Future Slots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 relative z-10 sm:pl-6">
          
          {/* ═══════════════ CARD 1: MEDICUS LABS (ACTIVE) ═══════════════ */}
          <div
            className={`p-3 rounded-2xl bg-white border-[6px] border-white shadow-xl cursor-pointer group transform ${medicus.rot} hover:rotate-0 hover:scale-103 transition-all duration-300 relative min-h-[320px] flex flex-col justify-between`}
            onClick={() => onSelectProject && onSelectProject(medicus)}
          >
            {!isFlipped ? (
              /* Front Side */
              <div className="flex flex-col h-full justify-between space-y-3">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 relative shadow-inner flex items-center justify-center">
                  <img
                    src={currentImg}
                    alt={medicus.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Tag Pill */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-xs text-[9px] font-mono font-bold text-white flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c93f2c]" />
                    {medicus.tag}
                  </div>

                  {/* Photo Switcher Carousel Button */}
                  {medicus.images.length > 1 && (
                    <button
                      onClick={handleCycleImage}
                      className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-black/85 backdrop-blur-xs text-[9px] font-mono font-bold text-[#faecd8] hover:bg-[#c93f2c] transition-colors flex items-center gap-1"
                      title="Switch preview photo"
                    >
                      <Layers className="w-3 h-3" />
                      <span>{activeImageIndex + 1}/{medicus.images.length}</span>
                    </button>
                  )}
                </div>

                {/* Card Title & Flip Trigger */}
                <div className="p-1 flex items-center justify-between text-xs font-mono text-slate-900">
                  <div>
                    <div className="font-bold text-sm text-slate-900">{medicus.title}</div>
                    <div className="text-[11px] text-slate-500">{medicus.subtitle}</div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {/* Flip Button */}
                    <button
                      onClick={handleFlipCard}
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-[#c93f2c] hover:text-white transition-colors text-slate-700"
                      title="Flip card for architecture details"
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                    </button>
                    
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#c93f2c] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            ) : (
              /* Back Side (Flipped) */
              <div className="flex flex-col h-full justify-between p-2 space-y-3 font-mono text-xs text-slate-900">
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-sm text-[#c93f2c]">{medicus.title}</span>
                    <button
                      onClick={handleFlipCard}
                      className="p-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px]"
                    >
                      ✕ Back
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                    {medicus.description}
                  </p>

                  {/* Stat Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {medicus.stats.map((s, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-[#c93f2c]/10 text-[#c93f2c] text-[10px] font-bold">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {medicus.tech.map((t, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[9px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectProject && onSelectProject(medicus)}
                  className="w-full py-1.5 rounded-lg bg-[#c93f2c] text-white font-bold text-[11px] hover:bg-[#a12f1f] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* ═══════════════ SLOTS 2 TO 6: BLANK / FUTURE SLOTS ═══════════════ */}
          {blankSlots.map((slot) => (
            <div
              key={slot.id}
              className={`p-6 rounded-2xl border-2 border-dashed border-white/20 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#c93f2c]/40 transition-all duration-300 transform ${slot.rot} hover:rotate-0 min-h-[320px] flex flex-col items-center justify-center text-center space-y-3 group`}
            >
              <div className="w-12 h-12 rounded-full border border-dashed border-white/20 group-hover:border-[#c93f2c] flex items-center justify-center text-white/40 group-hover:text-[#c93f2c] transition-colors">
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </div>
              
              <div className="space-y-1">
                <div className="font-mono text-xs font-bold text-[#faecd8]/60 group-hover:text-[#faecd8] transition-colors">
                  {slot.slot} // FUTURE PROJECT
                </div>
                <div className="font-mono text-[10px] text-[#faecd8]/30">
                  Slot Available for Upload
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Tagline */}
        <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#faecd8]/60">
          <div className="font-hand text-lg text-[#faecd8]">
            "Everything you do, do it with care." ✦
          </div>
          <div>MALLIKARJUN.R // PROJECTS</div>
        </div>

      </div>

    </section>
  );
}
