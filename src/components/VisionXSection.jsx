import React, { useState } from 'react';
import { Terminal, Eye, Mic, Code2, Cpu, Database, HardDrive, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export function VisionXSection({ project }) {
  const [activeModule, setActiveModule] = useState('vision');

  const modules = [
    {
      id: 'vision',
      label: 'Vision & OCR',
      icon: <Eye className="w-4 h-4" />,
      color: '#38bdf8',
      desc: 'Air-gapped optical character recognition & document diagram parsing using local ONNX vision models without sending a single byte to external clouds.',
      snippet: '[Vision-X OCR] Extracted 48 tables and 2,410 tokens from scanned clinical PDF in 140ms.'
    },
    {
      id: 'voice',
      label: 'Local Voice',
      icon: <Mic className="w-4 h-4" />,
      color: '#a855f7',
      desc: 'Zero-latency on-device speech transcription and voice workflow execution powered by quantized Whisper models.',
      snippet: '[Voice-Kernel] Audio buffer decoded 16kHz stream. Triggered: "export current pipeline to docker".'
    },
    {
      id: 'coding',
      label: 'Code Synthesis',
      icon: <Code2 className="w-4 h-4" />,
      color: '#10b981',
      desc: 'Autonomous AST syntax tree refactoring, automated test generation, and terminal command execution in sandboxed environments.',
      snippet: '[Code-Gen] Synthesized FastAPI microservice + Dockerfile with 100% test coverage.'
    },
    {
      id: 'automation',
      label: 'Task Workflows',
      icon: <Cpu className="w-4 h-4" />,
      color: '#f05a3e',
      desc: 'Multi-step autonomous OS task graphs automating file management, dataset processing, and multi-app data extraction.',
      snippet: '[Workflow-Engine] Executed 6-step data migration pipeline across local SQLite databases.'
    },
    {
      id: 'offline',
      label: 'Offline Memory',
      icon: <Database className="w-4 h-4" />,
      color: '#f59e0b',
      desc: 'Local embedding vector database with ChromaDB & SQLite storing multi-session context entirely on the local NVMe drive.',
      snippet: '[Vector-Store] Indexed 12,000 document embeddings. Cosine similarity query returned in 12ms.'
    }
  ];

  const currentMod = modules.find((m) => m.id === activeModule) || modules[0];

  return (
    <section className="py-24 px-4 sm:px-8 lg:px-12 relative border-t border-white/10 canvas-grid">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-hand text-2xl text-[#10b981] -rotate-1">✦ Flagship Work #02</span>
              <span className="text-xs font-mono text-[#8b92a5] uppercase tracking-widest">[OFFLINE AUTONOMOUS AGENT]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-none">
              VISION <span className="text-[#10b981]">X</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#8b92a5] font-sans max-w-2xl">
              An all-in-one, air-gapped AI desktop agent executing local computer vision, voice automation, and intelligent task workflows with zero internet connectivity.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-xs font-mono text-[#10b981] font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>100% AIR-GAPPED & OFFLINE</span>
            </span>
          </div>
        </div>

        {/* Interactive Architecture Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Capability Module Selectors (Col 5) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-[#8b92a5] uppercase tracking-wider mb-2">
              Hover module to inspect live subsystem:
            </div>

            {modules.map((mod) => (
              <button
                key={mod.id}
                onMouseEnter={() => setActiveModule(mod.id)}
                onClick={() => setActiveModule(mod.id)}
                data-cursor="INSPECT"
                className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                  activeModule === mod.id
                    ? 'bg-white text-slate-950 shadow-xl scale-102 -rotate-1'
                    : 'bg-[#12141c] text-[#8b92a5] border border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-900/10" style={{ color: mod.color }}>
                    {mod.icon}
                  </div>
                  <span className="font-bold font-display text-sm sm:text-base">
                    {mod.label}
                  </span>
                </div>

                <ArrowUpRight className={`w-4 h-4 transition-transform ${activeModule === mod.id ? 'text-slate-950 translate-x-0.5' : 'text-slate-600'}`} />
              </button>
            ))}
          </div>

          {/* Right Column: Live Terminal Simulation Sandbox (Col 7) */}
          <div className="lg:col-span-7 dark-card p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-[#10b981]/30 shadow-2xl bg-[#0e1017]">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-white/50 pl-2">
                  vision-x-kernel // subsystem:{currentMod.id}
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#10b981] font-bold">
                LOCAL ONNX: ACTIVE
              </span>
            </div>

            {/* Subsystem Description */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold" style={{ color: currentMod.color }}>
                {currentMod.icon}
                <span className="uppercase tracking-wider">{currentMod.label} Pipeline</span>
              </div>
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                {currentMod.desc}
              </p>
            </div>

            {/* Terminal Code Output Box */}
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-2 text-slate-300 leading-relaxed shadow-inner">
              <div className="text-emerald-400 font-bold">$ vision-x --module {currentMod.id} --run</div>
              <div className="text-[#38bdf8]">{currentMod.snippet}</div>
              <div className="text-slate-500 pt-1">[Task Complete: 0 bytes uploaded to external networks]</div>
            </div>

            {/* Subsystem Specifications */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs font-mono border-t border-white/10 text-[#8b92a5]">
              <div className="p-2 rounded-xl bg-white/5">
                <span className="block font-bold text-white">0% Internet</span>
                <span className="text-[10px]">Air-Gapped</span>
              </div>
              <div className="p-2 rounded-xl bg-white/5">
                <span className="block font-bold text-[#38bdf8]">&lt; 150ms</span>
                <span className="text-[10px]">Inference</span>
              </div>
              <div className="p-2 rounded-xl bg-white/5">
                <span className="block font-bold text-[#10b981]">12K Vectors</span>
                <span className="text-[10px]">Local Chroma</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
