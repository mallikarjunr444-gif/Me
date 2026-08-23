import React, { useState } from 'react';
import { Activity, Sparkles, RefreshCw, ExternalLink, CheckCircle2, ShieldCheck, Layers, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon } from './Icons';

export function MedicusLabsSection({ medicusProject }) {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [selectedLesion, setSelectedLesion] = useState({
    name: "Atypical Melanocytic Lesion (Border Irregularity)",
    confidence: 98.4,
    risk: "Moderate Caution (Review Advised)",
    riskColor: "text-amber-400 bg-amber-950/80 border-amber-800",
    triageScore: "Priority Level 2",
    details: "High pigment network asymmetry detected across 3 quadrants. Recommended for immediate clinical dermatoscopy confirmation."
  });

  const handleTriggerScan = () => {
    setIsScanning(true);
    setScanProgress(0);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          confetti({
            particleCount: 40,
            spread: 50,
            origin: { y: 0.6 }
          });
          return 100;
        }
        return prev + 20;
      });
    }, 120);
  };

  return (
    <section id="work" className="py-24 px-4 sm:px-8 lg:px-12 relative border-t border-white/10 canvas-dots">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-hand text-2xl text-[#38bdf8] -rotate-1">✦ Flagship Work #01</span>
              <span className="text-xs font-mono text-[#8b92a5] uppercase tracking-widest">[CLINICAL AI INTELLIGENCE]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-none">
              MEDICUS <span className="text-[#38bdf8]">LABS</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#8b92a5] font-sans max-w-2xl">
              Multimodal AI Dermatology Platform empowering dermatologists with clinical-grade pre-screening accuracy and instant structured diagnostic reports.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://medicuslabs.app"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="LAUNCH"
              className="px-6 py-3.5 rounded-full bg-[#38bdf8] hover:bg-[#58caff] text-slate-950 font-mono text-xs font-bold uppercase transition-all shadow-xl shadow-[#38bdf8]/30 flex items-center gap-2"
            >
              <span>Visit medicuslabs.app</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Interactive Case Study Stage: Left Scanner Simulator + Right Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Gemini AI Lesion Scanner (Col 7) */}
          <div className="lg:col-span-7 dark-card p-6 sm:p-8 space-y-6 relative overflow-hidden border border-[#38bdf8]/30 shadow-2xl">
            
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
                  <Activity className="w-5 h-5 text-[#38bdf8]" />
                  <span>Gemini Vision Lesion Analyzer</span>
                </div>
                <div className="text-[11px] font-mono text-[#8b92a5]">
                  Clinical Dermoscopy Diagnostic Engine v2.4
                </div>
              </div>

              <button
                onClick={handleTriggerScan}
                disabled={isScanning}
                data-cursor="SCAN"
                className="px-4 py-2 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/40 text-xs font-mono font-bold flex items-center gap-2 hover:bg-[#38bdf8]/30 transition-all self-start"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                <span>{isScanning ? `Evaluating ${scanProgress}%` : 'Run AI Diagnostic Scan'}</span>
              </button>
            </div>

            {/* Scan Image & Laser Overlay */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
                alt="Medicus Labs clinical diagnostic scan"
                className="w-full h-full object-cover opacity-80"
              />

              {/* Laser Line Scanning Animation */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent shadow-[0_0_20px_#38bdf8] animate-scanner-line pointer-events-none" />

              {/* Scanning Active Overlay */}
              {isScanning && (
                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex flex-col items-center justify-center space-y-3 z-20">
                  <div className="w-10 h-10 rounded-full border-2 border-[#38bdf8] border-t-transparent animate-spin" />
                  <div className="text-xs font-mono text-[#38bdf8] font-bold">
                    Running Gemini Vision API Multimodal Inference... {scanProgress}%
                  </div>
                </div>
              )}

              {/* Badges on Scan */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#38bdf8] font-bold">
                HIPAA-COMPLIANT CLINICAL PIPELINE
              </div>
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#10b981] font-bold">
                CONFIDENCE: 98.4%
              </div>
            </div>

            {/* Diagnostic Results Card */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-[#8b92a5] uppercase">Classification Result</span>
                  <h4 className="text-lg font-bold text-white font-display mt-0.5">{selectedLesion.name}</h4>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${selectedLesion.riskColor}`}>
                  {selectedLesion.risk}
                </span>
              </div>

              {/* Confidence Gauge */}
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#8b92a5]">Gemini AI Multimodal Confidence</span>
                  <span className="text-[#38bdf8] font-bold">98.4% Match</span>
                </div>
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <div className="h-full bg-gradient-to-r from-[#38bdf8] to-[#10b981] rounded-full w-[98.4%]" />
                </div>
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed pt-1">
                {selectedLesion.details}
              </p>
            </div>

          </div>

          {/* Right Column: Problem, Architecture & Outcomes (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Paper Card 1: Problem & Solution */}
            <div className="paper-card p-6 sm:p-8 space-y-4 relative">
              <div className="absolute -top-3 right-6 w-20 h-5 washi-tape-orange rotate-2" />

              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-600 font-bold uppercase tracking-wider">
                  The Clinical Challenge
                </span>
                <p className="text-xs sm:text-sm text-slate-800 font-sans leading-relaxed">
                  Dermatologists face backlogged triage pipelines. Early-stage melanoma and malignant lesions require immediate prioritization without clinical false positives.
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-300">
                <span className="text-xs font-mono text-[#059669] font-bold uppercase tracking-wider">
                  The Engineering Solution
                </span>
                <p className="text-xs sm:text-sm text-slate-800 font-sans leading-relaxed">
                  We engineered a cloud-native platform pairing Google Gemini Vision multimodal models with local YOLO segmentation to provide instant structured diagnostic reports.
                </p>
              </div>
            </div>

            {/* Dark Card 2: Measurable Impact Badges */}
            <div className="dark-card p-6 space-y-4">
              <div className="text-xs font-mono text-[#38bdf8] font-bold uppercase tracking-wider">
                Measurable Impact & Validation:
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-2xl font-bold text-white font-display">12</div>
                  <div className="text-[11px] font-mono text-[#8b92a5]">Partner Clinics</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-2xl font-bold text-[#10b981] font-display">68%</div>
                  <div className="text-[11px] font-mono text-[#8b92a5]">Triage Speedup</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-2xl font-bold text-[#38bdf8] font-display">98.4%</div>
                  <div className="text-[11px] font-mono text-[#8b92a5]">Model Precision</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-2xl font-bold text-[#f59e0b] font-display">HIPAA</div>
                  <div className="text-[11px] font-mono text-[#8b92a5]">GCP Security</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
