import React, { useState } from 'react';
import { ArrowUpRight, RotateCw, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export function JackieCuttingBoardSection({ projects, onSelectProject }) {
  const [flippedCardId, setFlippedCardId] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState({});

  const medicus = projects[0] || {};
  const visionx = projects[1] || {};
  const orvex = projects[2] || {};
  const techNews = projects[3] || {};

  const boardItems = [
    {
      id: 1,
      title: "Medicus Labs",
      subtitle: "AI Dermatology Diagnostics",
      tag: "CLINICAL AI",
      rot: "-rotate-[2.5deg]",
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
        "/images/medicus-labs-logo.png",
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Gemini-powered multimodal clinical pre-screening tool analyzing skin lesions with heatmap overlays and ICD-10 automated reports.",
      stats: ["98.4% Precision", "12 Clinics", "HIPAA GCP"],
      tech: ["Gemini Vision", "Python", "GCP Cloud Run", "React"],
      project: medicus
    },
    {
      id: 2,
      title: "Vision X",
      subtitle: "Air-Gapped AI Desktop Agent",
      tag: "AUTONOMOUS AI",
      rot: "rotate-[3.5deg]",
      images: [
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Offline autonomous assistant executing OS tasks, vector document search, and local ONNX vision without internet connection.",
      stats: ["500+ docs/hr", "100% Offline", "Zero Latency"],
      tech: ["Local ONNX", "ChromaDB", "Tesseract", "FastAPI"],
      project: visionx
    },
    {
      id: 3,
      title: "ORVEX Games",
      subtitle: "3D Indie Studio & Shaders",
      tag: "WEBGL & UNITY",
      rot: "-rotate-[3deg]",
      images: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Interactive 3D shader simulation, procedural lighting systems, and indie game experiences built with Unity and GLSL.",
      stats: ["150K+ Plays", "60 FPS WebGL", "Custom Shaders"],
      tech: ["Unity LTS", "C#", "GLSL Shaders", "WebGL"],
      project: orvex
    },
    {
      id: 4,
      title: "Tech Discover",
      subtitle: "AI News & Research Radar",
      tag: "RADAR FEED",
      rot: "rotate-[2.5deg]",
      images: [
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Automated aggregation pipeline clustering arXiv papers, open-source AI breakthroughs, and technology news with semantic vectors.",
      stats: ["45K Readers", "Real-time NLP", "Daily Digest"],
      tech: ["Next.js 14", "FastAPI", "Vector Embeddings", "PostgreSQL"],
      project: techNews
    },
    {
      id: 5,
      title: "CloudOps Matrix",
      subtitle: "DevOps & IaC Pipeline",
      tag: "INFRASTRUCTURE",
      rot: "-rotate-[2deg]",
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Declarative cloud provisioning with Terraform, automated Docker CI/CD pipelines, and multi-region Kubernetes cluster autoscaling.",
      stats: ["99.99% Uptime", "Zero-downtime", "Auto-scaling"],
      tech: ["Terraform", "Docker", "Kubernetes", "GCP Cloud KMS"],
      project: medicus
    },
    {
      id: 6,
      title: "Shader Physics Lab",
      subtitle: "Procedural GPU Graphics",
      tag: "GPU SIMULATION",
      rot: "rotate-[3deg]",
      images: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Interactive real-time fluid dynamic simulator and procedural particle mesh deformers running in WebGL with compute shaders.",
      stats: ["1M+ Particles", "Compute Pass", "Live Audio Sync"],
      tech: ["WebGPU", "GLSL", "Three.js", "Audio API"],
      project: orvex
    }
  ];

  const handleFlipCard = (e, id) => {
    e.stopPropagation();
    setFlippedCardId((prev) => (prev === id ? null : id));
  };

  const handleCycleImage = (e, id, max) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % max
    }));
  };

  return (
    <section className="py-20 relative select-none max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Outer Layer: Cutting Board Mat with Grid Coordinates */}
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
            <span className="w-2.5 h-2.5 rounded-full bg-[#c93f2c] animate-pulse" />
            <span className="font-bold text-[#faecd8]">THE CUTTING BOARD // INTERACTIVE LAB PROJECTS</span>
          </div>
          <div className="flex items-center gap-3">
            <span>GRID 01 — 18</span>
            <span>•</span>
            <span>CLICK CARD TO FLIP 🔄</span>
          </div>
        </div>

        {/* Left Edge Coordinate Numbers (1 to 18) */}
        <div className="absolute left-2 top-20 bottom-16 flex flex-col justify-between text-[10px] font-mono text-white/20 pointer-events-none hidden sm:flex">
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>

        {/* Inner Card Deck with 3D Flip Support */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 relative z-10 sm:pl-6">
          {boardItems.map((item) => {
            const isFlipped = flippedCardId === item.id;
            const currentImgIdx = activeImageIndex[item.id] || 0;
            const currentImg = item.images[currentImgIdx];

            return (
              <div
                key={item.id}
                className={`p-3 rounded-2xl bg-white border-[6px] border-white shadow-xl cursor-pointer group transform ${item.rot} hover:rotate-0 hover:scale-103 transition-all duration-300 relative min-h-[310px] flex flex-col justify-between`}
                onClick={() => onSelectProject(item.project)}
              >
                
                {/* 1. Card Front State */}
                {!isFlipped ? (
                  <div className="flex flex-col h-full justify-between space-y-3">
                    
                    {/* Image Frame with Image Switcher */}
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 relative shadow-inner">
                      <img
                        src={currentImg}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Tag Pill */}
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-xs text-[9px] font-mono font-bold text-white flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c93f2c]" />
                        {item.tag}
                      </div>

                      {/* Photo Switcher Button (if multiple images) */}
                      {item.images.length > 1 && (
                        <button
                          onClick={(e) => handleCycleImage(e, item.id, item.images.length)}
                          className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-black/85 backdrop-blur-xs text-[9px] font-mono font-bold text-[#faecd8] hover:bg-[#c93f2c] transition-colors flex items-center gap-1"
                          title="Switch preview photo"
                        >
                          <Layers className="w-3 h-3" />
                          <span>{currentImgIdx + 1}/{item.images.length}</span>
                        </button>
                      )}
                    </div>

                    {/* Card Title & Flip Trigger */}
                    <div className="p-1 flex items-center justify-between text-xs font-mono text-slate-900">
                      <div>
                        <div className="font-bold text-sm text-slate-900">{item.title}</div>
                        <div className="text-[11px] text-slate-500">{item.subtitle}</div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {/* Flip Button */}
                        <button
                          onClick={(e) => handleFlipCard(e, item.id)}
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
                  /* 2. Card Back State (Flipped details) */
                  <div className="flex flex-col h-full justify-between p-2 space-y-3 font-mono text-xs text-slate-900">
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span className="font-bold text-sm text-[#c93f2c]">{item.title}</span>
                        <button
                          onClick={(e) => handleFlipCard(e, item.id)}
                          className="p-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px]"
                        >
                          ✕ Back
                        </button>
                      </div>

                      <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                        {item.description}
                      </p>

                      {/* Stat Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.stats.map((s, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded-md bg-[#c93f2c]/10 text-[#c93f2c] text-[10px] font-bold">
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {item.tech.map((t, idx) => (
                          <span key={idx} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[9px]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectProject(item.project)}
                      className="w-full py-1.5 rounded-lg bg-[#c93f2c] text-white font-bold text-[11px] hover:bg-[#a12f1f] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#faecd8]/60">
          <div className="font-hand text-lg text-[#faecd8]">
            "Everything you do, do it with care." ✦
          </div>
          <div>MALLIKARJUN.R // 6 DISTINCT LAB PROJECTS</div>
        </div>

      </div>

    </section>
  );
}
