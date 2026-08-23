import React from 'react';
import { ArrowUp } from 'lucide-react';

export function JackieFooter({ name = "Mallikarjun R", location = "Bengaluru, India" }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#e7e5df] bg-[#faf9f6]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8c8980]">
        <div>
          © {new Date().getFullYear()} {name} • Designed & engineered in {location} ☀️
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-[#191816] transition-colors"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
