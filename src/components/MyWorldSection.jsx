import React, { useState } from 'react';
import { Sparkles, Cpu, Cloud, Gamepad2, Terminal, Newspaper, ArrowUpRight, Zap } from 'lucide-react';

export function MyWorldSection() {
  const [activeNode, setActiveNode] = useState(0);

  const worldNodes = [
    {
      id: 'ai',
      title: 'AI & Multimodal Vision',
      subtitle: 'Medicus Labs / Clinical Triage',
      icon: <Sparkles className="w-5 h-5 text-[#38bdf8]" />,
      badge: 'GEMINI API × TENSORFLOW',
      color: '#38bdf8',
      summary: 'Building clinical-grade dermatology pre-screening engines that evaluate lesion pigmentation, asymmetry, and skin vectors in real-time.',
      details: ['YOLOv8 Segmentation', 'Gemini Multimodal Vision API', 'HIPAA Cloud Pipeline', 'Confidence Heatmaps']
    },
    {
      id: 'cloud',
      title: 'Cloud & Distributed Systems',
      subtitle: 'Multi-Region GCP & AWS Architectures',
      icon: <Cloud className="w-5 h-5 text-[#f05a3e]" />,
      badge: 'TERRAFORM × CLOUD RUN',
      color: '#f05a3e',
      summary: 'Designing containerized, resilient backend microservices with automated scaling, load balancing, and high-availability storage.',
      details: ['Google Cloud Platform', 'AWS ECS & S3', 'Terraform IaC', 'Firestore & PostgreSQL']
    },
    {
      id: 'games',
      title: 'Indie Game Engine Physics',
      subtitle: 'ORVEX Games Studio',
      icon: <Gamepad2 className="w-5 h-5 text-[#a855f7]" />,
      badge: 'UNITY × CUSTOM SHADERS',
      color: '#a855f7',
      summary: 'Developing interactive 3D physics mechanics, procedural level generation, and custom GLSL vertex shaders for WebGL and desktop.',
      details: ['Unity 2023 LTS', 'C# Engine Core', 'Shader Graph / GLSL', '150,000+ WebGL Plays']
    },
    {
      id: 'automation',
      title: 'Air-Gapped Offline Agents',
      subtitle: 'Vision X Autonomous Automation',
      icon: <Terminal className="w-5 h-5 text-[#10b981]" />,
      badge: 'ONNX RUNTIME × TESSERACT',
      color: '#10b981',
      summary: 'Creating zero-internet desktop assistants that run local vision models, OCR extraction, and multi-step task workflows securely.',
      details: ['Local Vector DB', 'Tesseract OCR', 'Electron Cross-Platform', 'Zero Internet Dependency']
    },
    {
      id: 'media',
      title: 'Tech Journalism & Intelligence',
      subtitle: 'Tech Discover Publication',
      icon: <Newspaper className="w-5 h-5 text-[#f59e0b]" />,
      badge: 'NLP × FASTAPI',
      color: '#f59e0b',
      summary: 'Aggregating and synthesizing cutting-edge software engineering papers, framework updates, and AI breakthroughs for 45,000 active readers.',
      details: ['GPT-4 Summaries', 'Next.js 14 Web Portal', 'Paper Ranking Algorithm', 'Collaborative Feeds']
    }
  ];

  const current = worldNodes[activeNode];

  return (
    <section id="my-world" className="py-24 px-4 sm:px-8 lg:px-12 relative border-t border-white/10 canvas-grid">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-hand text-2xl text-[#f05a3e] -rotate-1">✦ Chapter 02</span>
              <span className="text-xs font-mono text-[#8b92a5] uppercase tracking-widest">[CREATIVE ECOSYSTEM]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-none">
              THE WORKSPACE & <span className="font-serif-italic text-4xl sm:text-6xl text-[#38bdf8] font-normal">Universe</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-[#8b92a5] max-w-sm">
            Hover and switch between active domains to inspect interconnected engineering systems.
          </p>
        </div>

        {/* Interactive Workspace Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Node Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {worldNodes.map((node, idx) => (
              <button
                key={node.id}
                onClick={() => setActiveNode(idx)}
                onMouseEnter={() => setActiveNode(idx)}
                data-cursor="INSPECT"
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                  activeNode === idx
                    ? 'bg-white text-slate-950 shadow-2xl scale-102 -rotate-1'
                    : 'bg-[#12141c] text-[#8b92a5] border border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-900/10">
                    {node.icon}
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base font-display">
                      {node.title}
                    </div>
                    <div className="text-[11px] font-mono opacity-70">
                      {node.subtitle}
                    </div>
                  </div>
                </div>

                <ArrowUpRight className={`w-4 h-4 transition-transform ${activeNode === idx ? 'text-slate-950 translate-x-1' : 'text-slate-600'}`} />
              </button>
            ))}
          </div>

          {/* Right Column: Node Details & Visual Artifact Card */}
          <div className="lg:col-span-7 paper-card p-8 sm:p-12 flex flex-col justify-between space-y-8 relative overflow-hidden">
            
            {/* Washi Tape Stamp */}
            <div className="absolute -top-3 right-10 w-28 h-6 washi-tape-orange rotate-3" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-slate-950 text-white text-[11px] font-mono font-bold">
                  {current.badge}
                </span>
                <span className="font-hand text-lg text-slate-600 font-bold">
                  Domain 0{activeNode + 1} of 05
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
                {current.title}
              </h3>

              <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
                {current.summary}
              </p>
            </div>

            {/* Architecture Details Chips */}
            <div className="space-y-3 pt-6 border-t border-slate-300">
              <div className="text-xs font-mono text-slate-600 uppercase tracking-wider font-bold">
                Ecosystem Modules & Proof Points:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {current.details.map((d, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-black/10 text-xs font-mono text-slate-800 font-bold shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#f05a3e]" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom footnote */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-4 border-t border-slate-200">
              <span>ACTIVE PIPELINE // VERIFIED</span>
              <span>ENGINEERED BY MALLIKARJUN R.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
