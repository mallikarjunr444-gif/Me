import React from 'react';
import { ArrowUp, Sparkles, Terminal } from 'lucide-react';

export function FooterSection({ personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-4 sm:px-8 lg:px-12 border-t border-white/10 bg-[#08090c] relative z-10 text-xs font-mono text-[#8b92a5]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xl font-bold font-display text-white tracking-tight">
              MALLIKARJUN R<span className="text-[#f05a3e]">.</span>
            </div>
            <div className="text-xs text-white/50 font-mono">
              AI × Cloud × DevOps × Product Engineering • DSATM Bengaluru
            </div>
          </div>

          <div className="font-hand text-2xl text-[#f05a3e] rotate-2">
            "Still building at 2 AM." ✦
          </div>

          <button
            onClick={scrollToTop}
            data-cursor="TOP"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#12141c] hover:bg-white hover:text-slate-950 text-white transition-all border border-white/10"
            aria-label="Back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#8b92a5]">
          <div>
            © {new Date().getFullYear()} Mallikarjun R. Designed & engineered as an original interactive world.
          </div>
          <div>
            Bengaluru, India [12.9716° N, 77.5946° E]
          </div>
        </div>

      </div>
    </footer>
  );
}
