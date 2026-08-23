import React from 'react';
import { ArrowUp } from 'lucide-react';

export function Footer({ name }) {
  return (
    <footer className="border-t border-white/[0.04] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-xs font-mono text-[#4a5068]">
          © {new Date().getFullYear()} {name}. Crafted with precision.
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-xs font-mono text-[#4a5068] hover:text-indigo-400 transition-colors"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
