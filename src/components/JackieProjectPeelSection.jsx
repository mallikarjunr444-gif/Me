import React, { useState } from 'react';
import { ArrowUpRight, Search, Activity, ShieldCheck, Gamepad2, Sparkles, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { ChalkLuckyCat, ChalkJuiceBox, ChalkRamenBowl, ChalkDino } from './HandDrawnAssets';

export function JackieProjectPeelSection({ projects, onSelectProject }) {
  const [hoveredAvatar, setHoveredAvatar] = useState(null);

  const medicus = projects[0];
  const visionx = projects[1];
  const orvex = projects[2];
  const techNews = projects[3];

  return (
    <section id="work" className="py-20 relative select-none max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Background Chalk Doodles */}
      <div className="absolute left-6 top-8 hidden lg:block opacity-75">
        <ChalkLuckyCat className="w-28 h-32 text-[#faecd8]" />
      </div>

      <div className="absolute right-8 top-12 hidden lg:block opacity-60">
        <ChalkRamenBowl className="w-28 h-24 text-[#faecd8]" />
      </div>

      {/* Main Peeling Cards Stage (Exact composition from screenshot) */}
      <div className="relative min-h-[900px] flex flex-col justify-between space-y-16">
        
        {/* Top Row: Medicus Labs Card (Left), Center Torn Note, ORVEX / Shader Gallery Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 pt-10">
          
          {/* 1. Left Card: Medicus Labs Clinical Order / Triage Card (Screenshot 2 left style) */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => onSelectProject(medicus)}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#e5d5c0] rotate-[-2deg] hover:rotate-0 transition-transform duration-300 cursor-pointer space-y-5 relative"
            >
              {/* Header metadata */}
              <div className="space-y-1">
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  CLINICAL CASE #MED-804 // TRIAGE
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                    Medicus Dermatology Scan
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#c93f2c]" />
                </div>
                <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                  <span>Bengaluru Clinic</span>
                  <span>→</span>
                  <span>AI Pre-Screening</span>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="flex items-center justify-between text-xs font-mono py-2 border-y border-slate-100">
                <div>
                  <span className="text-slate-400 block text-[10px]">DIAGNOSTIC SCORE</span>
                  <span className="font-bold text-[#059669]">98.4% Confidence</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 block text-[10px]">TIME SAVED</span>
                  <span className="font-bold text-slate-900">68% Accelerated</span>
                </div>
              </div>

              {/* Team Avatars with Hover Popup Tooltip (Matching Screenshot!) */}
              <div className="space-y-2 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center -space-x-2">
                    {[
                      { name: 'Dr. Priya Sharma', role: 'Dermatologist Lead', loc: 'Bengaluru, IND (IST)', time: '09:30 • Active Now' },
                      { name: 'Mallikarjun R', role: 'AI Systems Architect', loc: 'Bengaluru, IND (IST)', time: '14:20 • In Lab' },
                      { name: 'Dr. Aris Thorne', role: 'Clinical Reviewer', loc: 'Boston, USA (EST)', time: '04:20 • Queue' },
                    ].map((person, idx) => (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoveredAvatar(person)}
                        onMouseLeave={() => setHoveredAvatar(null)}
                        className="w-8 h-8 rounded-full border-2 border-white bg-slate-800 text-white text-[10px] font-bold flex items-center justify-center cursor-pointer shadow-md overflow-hidden"
                      >
                        <img
                          src={
                            idx === 1
                              ? '/images/mallikarjun-portrait.jpg'
                              : idx === 0
                              ? 'https://images.unsplash.com/photo-1594824813573-c15b18f08146?auto=format&fit=crop&w=120&q=80'
                              : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
                          }
                          alt={person.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 text-[10px] font-mono font-bold">
                    PRIORITY TRIAGE
                  </span>
                </div>

                {/* Floating Doctor Tooltip popup (Exact matching popup from screenshot!) */}
                {hoveredAvatar && (
                  <div className="absolute top-10 left-0 z-30 p-3 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-1 font-mono text-xs w-60 animate-in fade-in zoom-in-95 duration-150">
                    <div className="font-bold text-slate-900">{hoveredAvatar.name}</div>
                    <div className="text-[11px] text-[#c93f2c]">{hoveredAvatar.role}</div>
                    <div className="text-[10px] text-slate-500 flex items-center gap-1 pt-1 border-t border-slate-100">
                      <MapPin className="w-3 h-3" />
                      <span>{hoveredAvatar.loc}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Triage Detail Bar */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs font-mono">
                <div className="text-slate-500 text-[10px]">LESION CLASSIFICATION</div>
                <div className="font-bold text-slate-800">Melanocytic Nevus (Benign Baseline)</div>
                <div className="text-[10px] text-[#059669]">Gemini Vision API Multimodal Confirmed</div>
              </div>

              {/* Footnote */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                <span>HIPAA GCP INFRASTRUCTURE</span>
                <span className="text-[#c93f2c] font-bold">Inspect Case Study →</span>
              </div>
            </div>
          </div>

          {/* 2. Center: Torn Lined Paper Scrap (Screenshot 2 exact style) */}
          <div className="lg:col-span-2 flex justify-center py-4 lg:py-0">
            <div className="paper-card p-5 sm:p-6 bg-[#fdfaf2] border border-slate-300 shadow-2xl rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300 select-none max-w-[210px]">
              <div className="space-y-2">
                <div className="h-0.5 w-full border-t border-rose-300 mb-2" />
                <p className="font-hand text-2xl sm:text-3xl text-slate-900 font-bold leading-tight tracking-tight">
                  tirelessly
                  <br />
                  pursue
                  <br />
                  clarity.
                </p>
                <div className="h-0.5 w-full border-t border-blue-200" />
              </div>
            </div>
          </div>

          {/* 3. Right Card: ORVEX Games 3D Studio & Shader Card (Screenshot 2 right style) */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => onSelectProject(orvex)}
              className="bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-[#e5d5c0] rotate-[2deg] hover:rotate-0 transition-all duration-300 cursor-pointer space-y-4"
            >
              {/* Media & Shader Grid */}
              <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden bg-slate-950 p-2 border border-slate-200">
                <div className="aspect-square rounded-xl overflow-hidden bg-slate-900 relative">
                  <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80"
                    alt="3D Game Scene"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[9px] font-mono text-purple-300">
                    宛先: 3D ENGINE
                  </div>
                </div>

                <div className="aspect-square rounded-xl overflow-hidden bg-slate-900 relative">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
                    alt="GLSL Shader Graph"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/70 text-[9px] font-mono text-cyan-300">
                    GLSL SHADER
                  </div>
                </div>
              </div>

              {/* Search pill at bottom with avatar icon (Matching Screenshot!) */}
              <div className="p-3 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-between px-4 text-xs font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-slate-400" />
                  <span>Search shaders & physics engines...</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#c93f2c] text-white text-[10px] flex items-center justify-center font-bold font-hand">
                  M :)
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-600 pt-1">
                <span className="font-bold text-slate-900">ORVEX Games Studio</span>
                <span className="text-purple-700 font-bold">150K+ WebGL Impressions →</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row: Mobile App Frames (Left) & Vision X Checkout / Execution Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative z-10 pt-4">
          
          {/* Bottom Left Card: Tech Discover Multi-Screen Mobile View (Screenshot 2 bottom left) */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => onSelectProject(techNews)}
              className="bg-[#12141c] rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/10 rotate-[-1deg] hover:rotate-0 transition-transform duration-300 cursor-pointer space-y-4 text-white"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#8b92a5] pb-2 border-b border-white/10">
                <span className="text-amber-400 font-bold">TECH DISCOVER // MOBILE HUB</span>
                <span>45,000 READERS</span>
              </div>

              {/* 3 Mobile Screens Layout */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { title: 'AI Papers', tag: 'NLP', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=400&q=80' },
                  { title: 'Cloud Matrix', tag: 'GCP', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80' },
                  { title: 'Radar Feed', tag: 'LIVE', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80' }
                ].map((screen, sIdx) => (
                  <div key={sIdx} className="aspect-[9/16] rounded-xl overflow-hidden bg-slate-900 border border-white/10 relative">
                    <img src={screen.img} alt={screen.title} className="w-full h-full object-cover opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-2 text-[10px] font-mono">
                      <span className="text-amber-400 font-bold">{screen.tag}</span>
                      <span className="text-white font-bold">{screen.title}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#8b92a5]">
                <span>WEEKLY RESEARCH REVIEWS</span>
                <span className="text-amber-400 font-bold">Read Feed →</span>
              </div>
            </div>
          </div>

          {/* Bottom Right Card: Vision X Autonomous Execution Summary (Screenshot 2 bottom right) */}
          <div className="lg:col-span-7 relative">
            <div
              onClick={() => onSelectProject(visionx)}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#e5d5c0] rotate-[1deg] hover:rotate-0 transition-transform duration-300 cursor-pointer space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2 font-display font-bold text-slate-900 text-lg">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Vision X Autonomous Kernel</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold">
                  AIR-GAPPED SYSTEM
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase">OCR Processing</span>
                  <div className="font-bold text-slate-900">500+ Docs / Hr Offline</div>
                  <div className="text-emerald-700">0% Internet Transmission</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase">Local Vector DB</span>
                  <div className="font-bold text-slate-900">ChromaDB On-Device</div>
                  <div className="text-[#38bdf8]">12ms Query Response</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 text-white font-mono text-xs flex items-center justify-between px-4">
                <span>$ vision-x --air-gapped --verified</span>
                <span className="text-emerald-400 font-bold">100% PRIVATE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
