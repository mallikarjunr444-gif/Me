import React, { useRef, useEffect } from 'react';
import { Gamepad2, Sparkles, Layers, Play, Eye, Flame } from 'lucide-react';
import { GithubIcon } from './Icons';

export function OrvexGamesSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: width / 2, y: height / 2 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    const particles = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 3 + 1.5,
        color: Math.random() > 0.4 ? '#a855f7' : '#f05a3e'
      });
    }

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

        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 3;
          p.y += (dy / dist) * force * 3;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${1 - d / 100})`;
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
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="py-24 px-4 sm:px-8 lg:px-12 relative border-t border-white/10 canvas-dots">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-hand text-2xl text-[#a855f7] -rotate-1">✦ Flagship Work #03</span>
              <span className="text-xs font-mono text-[#8b92a5] uppercase tracking-widest">[INDIE GAME STUDIO]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-none">
              ORVEX <span className="text-[#a855f7]">GAMES</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#8b92a5] font-sans max-w-2xl">
              Independent game development studio engineering procedural 3D worlds, custom GLSL shader graphs, and browser-native WebGL game loops.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/30 text-xs font-mono text-[#a855f7] font-bold">
              150,000+ WEBGL PLAYS
            </span>
          </div>
        </div>

        {/* 3D Game Canvas Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Shader & Physics Canvas */}
          <div className="lg:col-span-7 dark-card p-6 sm:p-8 space-y-4 border border-[#a855f7]/30 shadow-2xl relative overflow-hidden bg-[#0c0a14]">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-sm font-mono font-bold text-white">
                <Gamepad2 className="w-4 h-4 text-[#a855f7]" />
                <span>WebGL Particle & Vector Physics Playground</span>
              </div>
              <span className="text-[10px] font-mono text-[#a855f7] bg-[#a855f7]/10 px-2 py-0.5 rounded">
                60 FPS INTERACTIVE
              </span>
            </div>

            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
              <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-xs text-[10px] font-mono text-[#a855f7] border border-white/10">
                Move cursor to interact with dynamic force fields
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[#8b92a5] pt-2">
              <span>ENGINE: UNITY 2023 LTS + WEBGL 2.0</span>
              <span>SHADER GRAPH // HLSL SHADERS</span>
            </div>
          </div>

          {/* Right Column: Game Studio Proof Points (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Paper Card: Game Mechanics & Pipeline */}
            <div className="paper-card p-6 sm:p-8 space-y-4 relative">
              <div className="absolute -top-3 right-6 w-20 h-5 washi-tape-orange rotate-2" />

              <span className="text-xs font-mono text-slate-600 font-bold uppercase tracking-wider">
                Studio Engineering Pipeline
              </span>

              <p className="text-xs sm:text-sm text-slate-800 font-sans leading-relaxed">
                ORVEX Games focuses on tight physics-based gameplay, procedural dungeon creation, and custom GLSL vertex shaders to deliver AAA-level kinetic feedback within lightweight browser builds.
              </p>

              <div className="pt-2 border-t border-slate-300 space-y-1.5">
                <div className="text-[11px] font-mono text-slate-600 uppercase font-bold">Key Milestones:</div>
                <ul className="text-xs text-slate-700 space-y-1 font-sans">
                  <li>✦ 150,000+ total WebGL impressions and plays</li>
                  <li>✦ 3 indie game publishing agreements secured</li>
                  <li>✦ Reusable procedural terrain generation framework</li>
                </ul>
              </div>
            </div>

            {/* Dark Card: Tech Stack Tags */}
            <div className="dark-card p-6 space-y-3">
              <div className="text-xs font-mono text-[#a855f7] font-bold uppercase tracking-wider">
                Graphics & Engine Tooling:
              </div>

              <div className="flex flex-wrap gap-2">
                {['Unity 3D', 'C# Core', 'Shader Graph', 'WebGL 2.0', 'Blender', 'Cinemachine'].map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
