import React, { useState } from 'react';
import { Activity, Sparkles, AlertCircle, ShieldAlert, CheckCircle, Download, ExternalLink, RefreshCw, Upload, FileText, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export function MedicusLabsSpotlight({ medicusLabs }) {
  const [selectedCase, setSelectedCase] = useState(medicusLabs.sampleCases[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanCompleted, setScanCompleted] = useState(true);
  const [customImage, setCustomImage] = useState(null);

  const handleRunScan = (caseItem) => {
    const targetCase = caseItem || selectedCase;
    setSelectedCase(targetCase);
    setIsScanning(true);
    setScanProgress(0);
    setScanCompleted(false);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setScanCompleted(true);
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 }
          });
          return 100;
        }
        return prev + 20;
      });
    }, 150);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomImage(event.target.result);
        const customCase = {
          id: 'custom-case',
          title: file.name.replace(/\.[^/.]+$/, ""),
          category: 'Uploaded Skin Clinical Scan',
          confidence: 96.1,
          risk: 'Evaluation Pending',
          riskColor: 'cyan',
          description: `Multimodal scan uploaded by user. Gemini AI detected epidermal metrics with high visual resolution.`,
          recommendations: [
            "Review diagnostic heatmap overlay.",
            "Compare against baseline dermatology dataset.",
            "Consult qualified medical specialist."
          ],
          heatmapGradient: "from-cyan-500/40 via-blue-500/20 to-transparent",
          icon: 'Sparkles'
        };
        handleRunScan(customCase);
      };
      reader.readAsDataURL(file);
    }
  };

  const getRiskBadge = (risk, color) => {
    const colors = {
      amber: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      orange: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
      emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    };
    return (
      <span className={`px-3 py-1 text-xs font-mono font-bold rounded-full border ${colors[color] || colors.cyan}`}>
        Risk: {risk}
      </span>
    );
  };

  return (
    <section id="medicus-spotlight" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-cyan-300">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>Flagship AI Venture Spotlight</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Medicus Labs <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">AI Intelligence</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-sans">
            {medicusLabs.summary}
          </p>

          <div className="pt-1 flex justify-center">
            <a
              href={medicusLabs.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-400 text-slate-950 font-bold text-xs font-mono hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20"
            >
              <span>Visit medicuslabs.app</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bento Grid AI Dermatology Scanner Container */}
        <div className="bento-card p-6 sm:p-10 relative overflow-hidden border border-cyan-500/30 shadow-2xl">
          
          {/* Controls Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Interactive Gemini AI Diagnostic Simulator
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-sans">
                Select a sample dermatological case or upload a scan to trigger Gemini API vision analysis.
              </p>
            </div>

            {/* Upload & Re-run */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <label className="cursor-pointer px-4 py-2 text-xs font-mono rounded-full bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 flex items-center gap-2 transition-all">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Scan</span>
                <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
              </label>

              <button
                onClick={() => handleRunScan()}
                disabled={isScanning}
                className="px-5 py-2 text-xs font-mono font-bold rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white flex items-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all shadow-md shadow-cyan-500/20"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                <span>{isScanning ? 'Scanning...' : 'Re-Run Gemini AI'}</span>
              </button>
            </div>
          </div>

          {/* Sample Cases Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6">
            {medicusLabs.sampleCases.map((c) => (
              <button
                key={c.id}
                onClick={() => handleRunScan(c)}
                className={`p-3.5 rounded-2xl border text-left transition-all ${
                  selectedCase.id === c.id
                    ? 'bg-slate-900 border-cyan-400 text-white shadow-lg shadow-cyan-500/10 scale-102'
                    : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">{c.category}</div>
                <div className="text-xs font-bold font-heading truncate mt-1">{c.title}</div>
                <div className="text-[10px] text-slate-500 mt-1 font-mono">{c.confidence}% Match</div>
              </button>
            ))}
          </div>

          {/* Scanning Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
            
            {/* Image Preview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={
                    customImage ||
                    (selectedCase.id === 'case-1'
                      ? 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
                      : selectedCase.id === 'case-2'
                      ? 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
                      : selectedCase.id === 'case-3'
                      ? 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80'
                      : 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80')
                  }
                  alt={selectedCase.title}
                  className="w-full h-full object-cover opacity-80"
                />

                <div className={`absolute inset-0 bg-gradient-radial ${selectedCase.heatmapGradient} pointer-events-none mix-blend-screen transition-opacity duration-700`} />

                {isScanning && (
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#38bdf8] animate-scan" />
                )}

                {isScanning && (
                  <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-xs flex flex-col items-center justify-center p-6 space-y-3">
                    <div className="w-10 h-10 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin flex items-center justify-center">
                      <Zap className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="text-xs font-mono text-cyan-300 font-bold">
                      Evaluating Vision Features... {scanProgress}%
                    </div>
                    <div className="w-40 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cyan-400 transition-all duration-300"
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700 text-[10px] font-mono text-cyan-300">
                  SCAN #ML-2026-908
                </div>
              </div>
            </div>

            {/* AI Diagnostics */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold">{selectedCase.category}</span>
                    <h4 className="text-2xl font-bold text-white font-heading mt-0.5">{selectedCase.title}</h4>
                  </div>
                  {getRiskBadge(selectedCase.risk, selectedCase.riskColor)}
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Gemini Confidence Match</span>
                    <span className="text-cyan-300 font-bold">{selectedCase.confidence}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-700"
                      style={{ width: `${selectedCase.confidence}%` }}
                    />
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans pt-2 border-t border-slate-800">
                  {selectedCase.description}
                </p>

                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Clinical Recommendations:</div>
                  <ul className="space-y-1">
                    {selectedCase.recommendations.map((rec, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2 font-sans">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
