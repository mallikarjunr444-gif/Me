import React, { useState } from 'react';
import { Sparkles, Terminal, Code2, GraduationCap, Cpu, Layers, ArrowUpRight, Flame } from 'lucide-react';

export function AboutIdentitySection({ personal }) {
  const [activeIdentity, setActiveIdentity] = useState('ai-builder');

  const identityFragments = [
    {
      id: 'ai-builder',
      tag: 'AI BUILDER',
      title: 'Multimodal Machine Learning & Clinical Vision',
      color: '#38bdf8',
      desc: 'Developing Gemini API vision models, TensorFlow classification pipelines, and real-time medical image segmentation at Medicus Labs.',
      tools: ['Gemini Multimodal', 'TensorFlow', 'Python', 'OpenCV', 'PyTorch']
    },
    {
      id: 'cloud-devops',
      tag: 'CLOUD & DEVOPS',
      title: 'Cloud-Native & Distributed Infrastructure',
      color: '#f05a3e',
      desc: 'Architecting Google Cloud Platform (GCP) & AWS multi-tier environments, Docker containerization, Kubernetes clusters, and automated CI/CD pipelines.',
      tools: ['GCP Cloud Run', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions']
    },
    {
      id: 'game-developer',
      tag: 'GAME DEVELOPER',
      title: 'Indie 3D Game Engines & Custom Shaders',
      color: '#a855f7',
      desc: 'Founding ORVEX Games to engineer custom GLSL shader graphs, procedural physics engines, and WebGL browser builds reaching 150K+ impressions.',
      tools: ['Unity 3D', 'C#', 'WebGL', 'HLSL / GLSL', 'Blender']
    },
    {
      id: 'automation-builder',
      tag: 'AUTOMATION BUILDER',
      title: 'Air-Gapped & Offline Autonomous Agents',
      color: '#10b981',
      desc: 'Building Vision X: a zero-cloud offline desktop automation agent running local ONNX models, OCR document extraction, and vector memory.',
      tools: ['ONNX Runtime', 'Electron', 'LangChain', 'Tesseract OCR', 'SQLite']
    },
    {
      id: 'product-founder',
      tag: 'PRODUCT FOUNDER',
      title: 'End-to-End Venture Engineering',
      color: '#f59e0b',
      desc: 'Taking ideas from whiteboard sketches to clinical pilot deployments, user onboarding, and enterprise testing.',
      tools: ['Product Strategy', 'System Architecture', 'UI/UX', 'Pilot Testing']
    }
  ];

  const current = identityFragments.find((i) => i.id === activeIdentity) || identityFragments[0];

  return (
    <section id="about" className="py-24 px-4 sm:px-8 lg:px-12 relative border-t border-white/10 canvas-dots">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-hand text-2xl text-[#f05a3e] -rotate-1">✦ Chapter 01</span>
              <span className="text-xs font-mono text-[#8b92a5] uppercase tracking-widest">[IDENTITY MATRIX]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-none">
              A CSE STUDENT WHO BUILDS{' '}
              <span className="font-serif-italic text-4xl sm:text-6xl text-[#f05a3e] font-normal">
                ambitious systems.
              </span>
            </h2>
          </div>

          <div className="text-xs font-mono text-[#8b92a5] max-w-xs">
            <span className="text-white font-bold block mb-1">THE CYCLE:</span>
            Learning ──→ Building ──→ Shipping ──→ Iterating
          </div>
        </div>

        {/* Identity Stickers / Physical-Looking Label Deck */}
        <div className="space-y-6">
          <div className="text-xs font-mono text-[#8b92a5] uppercase tracking-wider flex items-center gap-2">
            <span>Select Identity Tag to Inspect:</span>
            <span className="font-hand text-lg text-[#f05a3e]">(click any sticker)</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {identityFragments.map((fragment) => (
              <button
                key={fragment.id}
                onClick={() => setActiveIdentity(fragment.id)}
                data-cursor="SELECT"
                className={`px-5 py-3 rounded-2xl font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-lg ${
                  activeIdentity === fragment.id
                    ? 'bg-white text-slate-950 scale-105 shadow-white/20 -rotate-1'
                    : 'bg-[#12141c] text-[#8b92a5] border border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: fragment.color }} />
                <span>{fragment.tag}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Identity Details Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Highlight Detail Board (Paper Texture Card) */}
          <div className="lg:col-span-8 paper-card p-8 sm:p-10 space-y-6 relative overflow-hidden">
            {/* Washi Tape top */}
            <div className="absolute -top-3 left-10 w-24 h-6 washi-tape-orange rotate-2" />

            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono font-bold">
                {current.tag}
              </span>
              <span className="font-mono text-xs text-slate-600 font-bold">
                MALLIKARJUN R. // PROFILE
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
                {current.title}
              </h3>
              <p className="text-base text-slate-700 font-sans leading-relaxed">
                {current.desc}
              </p>
            </div>

            {/* Tools Used */}
            <div className="pt-4 border-t border-slate-300 space-y-2">
              <div className="text-xs font-mono text-slate-600 uppercase tracking-wider">
                Primary Technologies & Tooling:
              </div>
              <div className="flex flex-wrap gap-2">
                {current.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-950 text-white text-xs font-mono font-bold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Academic & Foundation Mini Board */}
          <div className="lg:col-span-4 dark-card p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#f05a3e] font-mono text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Core</span>
              </div>

              <h4 className="text-xl font-bold text-white font-display">
                Dayananda Sagar Academy of Tech & Management
              </h4>

              <div className="space-y-1 text-xs font-mono text-[#8b92a5]">
                <p className="text-white">B.E. in Computer Science & Engineering</p>
                <p>2022 — 2026 • Bengaluru, India</p>
                <p className="pt-2 text-slate-400">
                  Focusing on Operating Systems, Distributed Clouds, Machine Learning, and Graphics Engines.
                </p>
              </div>
            </div>

            {/* Handwritten stamp */}
            <div className="p-4 rounded-xl bg-white/5 border border-dashed border-white/20 font-hand text-lg text-[#f05a3e] text-center rotate-1">
              "Building what doesn't exist yet."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
