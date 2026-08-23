import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function JackieCuttingBoardSection({ projects, onSelectProject }) {
  const medicus = projects[0] || {};
  const vision = projects[1] || medicus;
  const cloud = projects[2] || medicus;
  const doctor = projects[3] || medicus;
  const mobile = projects[4] || medicus;
  const reports = projects[5] || medicus;

  const boardItems = [
    {
      id: 1,
      title: "Medicus Labs Clinical AI",
      tag: "CLINICAL AI",
      img: medicus?.image || "/images/medicus-labs-logo.png",
      rot: "-rotate-[2deg]",
      project: medicus
    },
    {
      id: 2,
      title: "Gemini Vision Heatmap",
      tag: "MULTIMODAL AI",
      img: vision?.image || "/images/medicus-labs-logo.png",
      rot: "rotate-[4deg]",
      project: vision
    },
    {
      id: 3,
      title: "Doctor Review Portal",
      tag: "CLINICAL HUB",
      img: doctor?.image || "/images/medicus-labs-logo.png",
      rot: "-rotate-[3deg]",
      project: doctor
    },
    {
      id: 4,
      title: "AR Patient Mobile Client",
      tag: "AR DERMOSCOPY",
      img: mobile?.image || "/images/medicus-labs-logo.png",
      rot: "rotate-[3deg]",
      project: mobile
    },
    {
      id: 5,
      title: "HIPAA GCP Architecture",
      tag: "CLOUD RUN & KMS",
      img: cloud?.image || "/images/medicus-labs-logo.png",
      rot: "-rotate-[2deg]",
      project: cloud
    },
    {
      id: 6,
      title: "ICD-10 Clinical Reports",
      tag: "AUTOMATED PDF",
      img: reports?.image || "/images/medicus-labs-logo.png",
      rot: "rotate-[2deg]",
      project: reports
    }
  ];

  return (
    <section className="py-20 relative select-none max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Outer Layer: Cutting Board Mat with Grid Coordinates (Exact from jackiezhang.co.za) */}
      <div className="relative rounded-[2.5rem] p-4 sm:p-7 bg-[#1f1d1c] border-2 border-[#382725] shadow-2xl overflow-hidden rotate-[0.5deg]">
        
        {/* Subtle Cutting Board Texture Overlay */}
        <img
          src="https://framerusercontent.com/images/9G25ruOgt322clA0e0vFrw4RNEs.png?width=300&height=300"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
        />

        {/* Top Grid Coordinates & Header */}
        <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-[#faecd8]/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c93f2c]" />
            <span className="font-bold text-[#faecd8]">THE CUTTING BOARD // MEDICUS LABS ECOSYSTEM</span>
          </div>
          <div className="flex items-center gap-3">
            <span>GRID 01 — 18</span>
            <span>•</span>
            <span>BENGALURU</span>
          </div>
        </div>

        {/* Left Edge Coordinate Numbers (1 to 18) from jackiezhang.co.za */}
        <div className="absolute left-2 top-20 bottom-16 flex flex-col justify-between text-[10px] font-mono text-white/20 pointer-events-none hidden sm:flex">
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>

        {/* Inner Card Deck */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 relative z-10 sm:pl-6">
          {boardItems.map((item) => (
            <div
              key={item.id}
              onClick={() => item.project && onSelectProject(item.project)}
              className={`p-3 rounded-2xl bg-white border-[6px] border-white shadow-xl cursor-pointer group transform ${item.rot} hover:rotate-0 hover:scale-103 transition-all duration-300 relative`}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-xs text-[9px] font-mono font-bold text-white">
                  {item.tag}
                </div>
              </div>

              <div className="p-2 pt-3 flex items-center justify-between text-xs font-mono text-slate-800">
                <span className="font-bold">{item.title}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#c93f2c] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tagline (Exact wording from jackiezhang.co.za) */}
        <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#faecd8]/60">
          <div className="font-hand text-lg text-[#faecd8]">
            "Everything you do, do it with care." ✦
          </div>
          <div>MALLIKARJUN.R // MEDICUS LABS</div>
        </div>

      </div>

    </section>
  );
}
