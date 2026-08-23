import React from 'react';
import { X, GraduationCap, Award, Download } from 'lucide-react';

export function JackieAboutDrawer({ isOpen, onClose, personal }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200 select-none">
      
      <div className="relative max-w-3xl w-full rounded-[2.5rem] p-3 bg-[#c93f2c] border-2 border-[#a12f1f] shadow-2xl">
        
        <div
          className="relative rounded-[2rem] p-6 sm:p-10 bg-[#fbf5ea] border border-[#e5d5c0] space-y-6 max-h-[88vh] overflow-y-auto"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(201, 63, 44, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(201, 63, 44, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-full bg-[#c93f2c]/10 text-[#c93f2c] hover:bg-[#c93f2c] hover:text-white transition-colors"
            aria-label="Close about modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left: Polaroid photo */}
            <div className="md:col-span-5 flex justify-center">
              <div className="paper-card p-3 max-w-[220px] bg-white border border-slate-300 shadow-xl rotate-[-2deg]">
                <div className="aspect-[4/5] rounded-lg overflow-hidden bg-slate-900">
                  <img
                    src={personal.avatar}
                    alt="Mallikarjun R"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-center pt-2 font-hand text-xl text-[#c93f2c] font-bold">
                  Mallikarjun :)
                </div>
                <div className="text-center text-[10px] font-mono text-slate-500">
                  Bengaluru, India ☀️
                </div>
              </div>
            </div>

            {/* Right: Bio & Background */}
            <div className="md:col-span-7 space-y-4">
              <div className="font-hand text-3xl text-[#c93f2c] font-bold">
                About Mallikarjun R
              </div>

              <p className="text-xs sm:text-sm text-slate-800 font-sans leading-relaxed">
                I'm a Computer Science Engineering student at DSATM Bengaluru, founder of <strong>Medicus Labs</strong> and <strong>ORVEX Games</strong>. I love building practical clinical AI models, cloud infrastructure, and 3D indie games.
              </p>

              <div className="p-4 rounded-xl bg-white border border-slate-300 space-y-1 text-xs font-mono">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <GraduationCap className="w-4 h-4 text-[#c93f2c]" />
                  <span>B.E. Computer Science (2022-2026)</span>
                </div>
                <p className="text-slate-600 text-[11px]">
                  Dayananda Sagar Academy of Technology & Management
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="text-[11px] font-mono text-slate-600 uppercase font-bold">Key Tooling:</div>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'TensorFlow', 'Gemini Vision', 'GCP', 'AWS', 'Docker', 'Unity 3D', 'Next.js'].map((t, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded-md bg-[#c93f2c]/10 text-[#c93f2c] font-mono font-bold text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
