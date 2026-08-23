import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Terminal, Activity, Zap, Play, RefreshCw, Layers, ShieldCheck } from 'lucide-react';

export function JackiePlayground() {
  const [activeTab, setActiveTab] = useState('ai-scanner');
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanResult, setScanResult] = useState({
    title: "Melanocytic Nevus (Benign)",
    confidence: "98.4%",
    risk: "Low Risk",
    recommendation: "Routine annual baseline observation recommended."
  });

  const canvasRef = useRef(null);

  // Interactive Particle Physics for Canvas Sandbox
  useEffect(() => {
    if (activeTab !== 'shader') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const mouse = { x: width / 2, y: height / 2, radius: 140 };
    const particles = [];

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 3 + 2,
        color: Math.random() > 0.5 ? '#2563eb' : '#059669'
      });
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x += (dx / dist) * force * 2;
          p.y += (dy / dist) * force * 2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${1 - d / 90})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [activeTab]);

  const triggerScan = () => {
    setIsScanning(true);
    setScanProgress(0);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + 25;
      });
    }, 150);
  };

  return (
    <section id="playground" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#e7e5df]">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#8c8980] uppercase tracking-[0.2em] font-semibold">
              Interactive Playground & Lab
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191816] tracking-tight font-heading">
              The Cutting <span className="font-serif-italic text-3xl sm:text-5xl font-normal">Board</span>
            </h2>
            <p className="text-sm text-[#5c5a55] font-sans">
              Tactile prototypes, live AI vision algorithms, and interactive physics sandboxes.
            </p>
          </div>

          {/* Playground Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#f4f2ee] border border-[#e7e5df] text-xs font-mono self-start">
            <button
              onClick={() => setActiveTab('ai-scanner')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                activeTab === 'ai-scanner'
                  ? 'bg-white text-[#191816] font-bold shadow-xs'
                  : 'text-[#5c5a55] hover:text-[#191816]'
              }`}
            >
              Medicus AI Scanner
            </button>
            <button
              onClick={() => setActiveTab('shader')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                activeTab === 'shader'
                  ? 'bg-white text-[#191816] font-bold shadow-xs'
                  : 'text-[#5c5a55] hover:text-[#191816]'
              }`}
            >
              WebGL Physics
            </button>
            <button
              onClick={() => setActiveTab('terminal')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                activeTab === 'terminal'
                  ? 'bg-white text-[#191816] font-bold shadow-xs'
                  : 'text-[#5c5a55] hover:text-[#191816]'
              }`}
            >
              Vision X Agent
            </button>
          </div>
        </div>

        {/* Tab 1: Medicus AI Diagnostic Scanner */}
        {activeTab === 'ai-scanner' && (
          <div className="jackie-card p-6 sm:p-8 bg-white border border-[#e7e5df] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e7e5df]">
              <div>
                <h3 className="text-lg font-bold text-[#191816] font-heading flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#2563eb]" />
                  Gemini API Dermatology Diagnostic Simulator
                </h3>
                <p className="text-xs text-[#5c5a55] font-sans">
                  Real-time simulated clinical scan analyzing lesion pigmentation, asymmetry, and border irregularities.
                </p>
              </div>

              <button
                onClick={triggerScan}
                disabled={isScanning}
                className="px-4 py-2 rounded-full bg-[#191816] hover:bg-[#33312e] text-white text-xs font-mono font-medium flex items-center gap-2 transition-all self-start"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
                <span>{isScanning ? `Scanning ${scanProgress}%` : 'Run Live Diagnostic'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#f4f2ee] border border-[#e7e5df]">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="Clinical dermoscopy preview"
                  className="w-full h-full object-cover"
                />

                {isScanning && (
                  <div className="absolute inset-0 bg-[#191816]/40 backdrop-blur-xs flex flex-col items-center justify-center space-y-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    <span className="text-xs font-mono text-white font-bold">Classifying Multimodal Vectors...</span>
                  </div>
                )}

                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-mono text-[#191816] font-semibold border border-[#e7e5df]">
                  Sample Case #ML-804
                </div>
              </div>

              <div className="md:col-span-6 space-y-4">
                <div className="p-4 rounded-xl bg-[#faf9f6] border border-[#e7e5df] space-y-1">
                  <div className="text-[10px] font-mono text-[#8c8980] uppercase">Diagnosis Classification</div>
                  <div className="text-base font-bold text-[#191816] font-heading">{scanResult.title}</div>
                  <div className="text-xs font-mono text-[#059669] font-semibold">Gemini Confidence: {scanResult.confidence}</div>
                </div>

                <div className="p-4 rounded-xl bg-[#faf9f6] border border-[#e7e5df] space-y-1">
                  <div className="text-[10px] font-mono text-[#8c8980] uppercase">Risk Tier & Recommendation</div>
                  <div className="text-xs font-bold text-[#191816]">{scanResult.risk}</div>
                  <p className="text-xs text-[#5c5a55] font-sans">{scanResult.recommendation}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive WebGL Physics */}
        {activeTab === 'shader' && (
          <div className="jackie-card p-6 sm:p-8 bg-white border border-[#e7e5df] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#191816] font-heading">Interactive Node Particle Mesh</h3>
                <p className="text-xs text-[#5c5a55] font-sans">Move your cursor over the canvas to interact with dynamic force fields.</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#f4f2ee] text-[11px] font-mono text-[#191816]">60 FPS Physics</span>
            </div>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#faf9f6] border border-[#e7e5df]">
              <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" />
            </div>
          </div>
        )}

        {/* Tab 3: Vision X Agent Terminal Sandbox */}
        {activeTab === 'terminal' && (
          <div className="jackie-card p-6 sm:p-8 bg-[#191816] text-white border border-[#33312e] rounded-2xl space-y-4 font-mono text-xs shadow-lg">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-[11px] text-white/50 pl-2">vision-x-offline-agent v2.4</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                ● Air-gapped / No Internet Needed
              </span>
            </div>

            <div className="space-y-2 text-white/80 leading-relaxed">
              <p className="text-emerald-400">$ vision-x analyze --input ./clinic_document.pdf --ocr --summarize</p>
              <p className="text-white/60">[✓] Initialized ONNX Runtime in 42ms</p>
              <p className="text-white/60">[✓] Extracted 1,420 tokens with Tesseract OCR engine</p>
              <p className="text-white/60">[✓] Vector search query matched 4 clinical precedents</p>
              <p className="text-indigo-400">[Output] Document classified as Medical Pre-authorization Form.</p>
              <p className="text-emerald-400">$ ready for next local pipeline.</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
