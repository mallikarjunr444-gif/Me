import React, { useState } from 'react';
import { ArrowUpRight, Search, Activity, ShieldCheck, CheckCircle2, MapPin, Sparkles, FileText, Smartphone, Lock, Stethoscope } from 'lucide-react';
import { ChalkLuckyCat, ChalkOrigamiMap, ChalkCoffeeKettle, ChalkJuiceBox, ChalkRamenBowl } from './HandDrawnAssets';

export function JackieProjectPeelSection({ projects, onSelectProject }) {
  const [hoveredAvatar, setHoveredAvatar] = useState(null);

  const medicusMain = projects[0] || {};
  const medicusVision = projects[1] || projects[0] || {};
  const medicusCloud = projects[2] || projects[0] || {};
  const medicusDoctor = projects[3] || projects[0] || {};

  return (
    <section id="work" className="py-20 relative select-none max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Background Authentic Chalk Doodles on Canvas (Exact from jackiezhang.co.za) */}
      
      {/* Top Left: Lucky Cat */}
      <div className="absolute -left-2 top-8 hidden lg:block opacity-90 pointer-events-none w-28">
        <ChalkLuckyCat className="w-full h-auto" />
      </div>

      {/* Middle Right: Folded Origami Map */}
      <div className="absolute -right-4 top-1/2 -translate-y-12 hidden lg:block opacity-85 pointer-events-none w-44">
        <ChalkOrigamiMap className="w-full h-auto" />
      </div>

      {/* Middle Left: Coffee / Teapot Kettle */}
      <div className="absolute -left-3 top-2/3 hidden lg:block opacity-85 pointer-events-none w-28">
        <ChalkCoffeeKettle className="w-full h-auto" />
      </div>

      {/* Top Right: Juice Box / Ramen */}
      <div className="absolute right-4 top-8 hidden lg:block opacity-80 pointer-events-none w-32">
        <ChalkJuiceBox className="w-full h-auto" />
      </div>

      {/* Main Peeling Cards Stage (Exact 2-Column Staggered Composition) */}
      <div className="relative min-h-[900px] flex flex-col justify-between space-y-14">
        
        {/* ROW 1: Medicus Labs Clinical Order / Triage Card (Left), Center Torn Note, Medicus AI Architecture Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 pt-6">
          
          {/* 1. Left Card: Medicus Labs Clinical Order / Triage Card */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => onSelectProject(medicusMain)}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#e5d5c0] rotate-[-2deg] hover:rotate-0 transition-transform duration-300 cursor-pointer space-y-5 relative group"
            >
              {/* Header metadata */}
              <div className="space-y-1">
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>CLINICAL CASE #MED-804 // TRIAGE</span>
                  <span className="text-[#c93f2c] font-bold">MEDICUS LABS</span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 group-hover:text-[#c93f2c] transition-colors">
                    Medicus Dermatology Scan
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#c93f2c] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                  <span>Bengaluru Clinical Pilot</span>
                  <span>→</span>
                  <span>Gemini AI Triage</span>
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

              {/* Team Avatars with Hover Popup Tooltip */}
              <div className="space-y-2 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center -space-x-2">
                    {[
                      { name: 'Dr. Priya Sharma', role: 'Dermatologist Lead', loc: 'Bengaluru, IND (IST)', time: '09:30 • Active Now' },
                      { name: 'Mallikarjun R', role: 'Founder & AI Architect', loc: 'Bengaluru, IND (IST)', time: '14:20 • In Lab' },
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

                {/* Floating Doctor Tooltip popup */}
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
                <div className="text-[10px] text-[#059669]">Gemini 1.5 Pro Multimodal Confirmed</div>
              </div>

              {/* Footnote */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                <span>HIPAA GCP INFRASTRUCTURE</span>
                <span className="text-[#c93f2c] font-bold">Inspect Case Study →</span>
              </div>
            </div>
          </div>

          {/* 2. Center: Torn Lined Paper Scrap ("tirelessly pursue clarity.") */}
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

          {/* 3. Right Card: Medicus Labs AI Architecture & Gemini Vision Card */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => onSelectProject(medicusVision)}
              className="bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-[#e5d5c0] rotate-[2deg] hover:rotate-0 transition-all duration-300 cursor-pointer space-y-4 group"
            >
              {/* Media & Heatmap Grid */}
              <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden bg-slate-950 p-2 border border-slate-200">
                <div className="aspect-square rounded-xl overflow-hidden bg-slate-900 relative">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
                    alt="Dermoscopy Scan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[9px] font-mono text-cyan-300">
                    宛先: DERMOSCOPY AI
                  </div>
                </div>

                <div className="aspect-square rounded-xl overflow-hidden bg-slate-900 relative">
                  <img
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80"
                    alt="Gemini Vision Heatmap"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/70 text-[9px] font-mono text-emerald-300">
                    GRAD-CAM HEATMAP
                  </div>
                </div>
              </div>

              {/* Search pill at bottom with avatar icon */}
              <div className="p-3 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-between px-4 text-xs font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-slate-400" />
                  <span>Search dermatology datasets & Gemini embeddings...</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#c93f2c] text-white text-[10px] flex items-center justify-center font-bold font-hand">
                  M :)
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-600 pt-1">
                <span className="font-bold text-slate-900">Medicus Multimodal Vision Engine</span>
                <span className="text-[#c93f2c] font-bold">98.4% Validation →</span>
              </div>
            </div>
          </div>

        </div>

        {/* ROW 2: Medicus Mobile Client Trio (Left) & Medicus Doctor Portal / Cloud Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative z-10 pt-4">
          
          {/* Bottom Left Card: Medicus Mobile Scanner (3 Phone Screens) */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => onSelectProject(projects[4] || medicusMain)}
              className="bg-[#12141c] rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/10 rotate-[-1deg] hover:rotate-0 transition-transform duration-300 cursor-pointer space-y-4 text-white group"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#8b92a5] pb-2 border-b border-white/10">
                <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5" />
                  MEDICUS LABS // MOBILE CLIENT
                </span>
                <span className="text-emerald-400 font-bold">SUB-200MS SCAN</span>
              </div>

              {/* 3 Mobile Screens Layout */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { title: 'AR Lesion Scan', tag: 'CAMERA', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80' },
                  { title: 'AI Heatmap', tag: 'GEMINI', img: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=400&q=80' },
                  { title: 'Doctor Triage', tag: 'CLINICAL', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80' }
                ].map((screen, sIdx) => (
                  <div key={sIdx} className="aspect-[9/16] rounded-xl overflow-hidden bg-slate-900 border border-white/10 relative">
                    <img src={screen.img} alt={screen.title} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-2 text-[10px] font-mono">
                      <span className="text-cyan-400 font-bold">{screen.tag}</span>
                      <span className="text-white font-bold">{screen.title}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#8b92a5]">
                <span>ON-DEVICE AR FRAMING</span>
                <span className="text-cyan-400 font-bold">Open Mobile Scan →</span>
              </div>
            </div>
          </div>

          {/* Bottom Right Card: Medicus Doctor Portal & HIPAA Security Card */}
          <div className="lg:col-span-7 relative">
            <div
              onClick={() => onSelectProject(medicusDoctor)}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#e5d5c0] rotate-[1deg] hover:rotate-0 transition-transform duration-300 cursor-pointer space-y-5 group"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2 font-display font-bold text-slate-900 text-lg">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Medicus Labs Clinical Workstation</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  HIPAA ZERO-TRUST
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase">GCP Cloud Run Microservices</span>
                  <div className="font-bold text-slate-900">12 Partner Clinics Connected</div>
                  <div className="text-emerald-700 font-bold">99.99% Serverless Uptime</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase">Automated PDF Reports</span>
                  <div className="font-bold text-slate-900">ICD-10 Pathology Summaries</div>
                  <div className="text-[#0284c7] font-bold">Instant Clinician Signoff</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 text-white font-mono text-xs flex items-center justify-between px-4">
                <span>$ medicus-core --gemini-1.5 --hipaa-compliant</span>
                <span className="text-emerald-400 font-bold">100% ENCRYPTED (KMS)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
