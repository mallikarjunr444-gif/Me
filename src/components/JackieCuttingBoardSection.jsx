import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export function JackieCuttingBoardSection({ projects, onSelectProject }) {
  const medicus = projects[0];
  const visionx = projects[1];
  const orvex = projects[2];
  const techNews = projects[3];

  const boardItems = [
    {
      id: 1,
      title: "Medicus Labs UI",
      tag: "CLINICAL AI",
      img: medicus?.image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      rot: "-rotate-2",
      project: medicus
    },
    {
      id: 2,
      title: "Vision X Desktop",
      tag: "AIR-GAPPED",
      img: visionx?.image || "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      rot: "rotate-1",
      project: visionx
    },
    {
      id: 3,
      title: "ORVEX 3D Shaders",
      tag: "WEBGL 2.0",
      img: orvex?.image || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      rot: "rotate-3",
      project: orvex
    },
    {
      id: 4,
      title: "Tech Discover Radar",
      tag: "NLP PAPERS",
      img: techNews?.image || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
      rot: "-rotate-3",
      project: techNews
    },
    {
      id: 5,
      title: "Terraform CloudOps",
      tag: "DEVOPS IAC",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      rot: "rotate-2",
      project: medicus
    },
    {
      id: 6,
      title: "Procedural Mesh Engine",
      tag: "UNITY LTS",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      rot: "-rotate-2",
      project: orvex
    }
  ];

  return (
    <section className="py-20 relative select-none max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Outer Layer: Cutting Board Mat with Grid Coordinates */}
      <div className="relative rounded-[2.5rem] p-4 sm:p-6 bg-[#1f1d1c] border-2 border-[#382725] shadow-2xl overflow-hidden">
        
        {/* Top Grid & Coordinate Numbers */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-[#faecd8]/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c93f2c]" />
            <span className="font-bold text-[#faecd8]">THE CUTTING BOARD // WORKSPACE</span>
          </div>
          <span>GRID 01 — 18 // BENGALURU</span>
        </div>

        {/* Inner Card Deck */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
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

        {/* Bottom Tagline (From UXMagic frame!) */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#faecd8]/60">
          <div className="font-hand text-lg text-[#faecd8]">
            "Everything you do, do it with care." ✦
          </div>
          <div>MALLIKARJUN R. // INTERACTIVE LAB</div>
        </div>

      </div>

    </section>
  );
}
