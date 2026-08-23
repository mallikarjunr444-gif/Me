import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Terminal } from 'lucide-react';

export function Navbar({ personal }) {
  const [timeStr, setTimeStr] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'WORLD', href: '#my-world' },
    { label: 'WORK', href: '#work' },
    { label: 'EXPERIMENTS', href: '#experiments' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'ACHIEVEMENTS', href: '#achievements' },
    { label: 'CONNECT', href: '#connect' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Left: Interactive Monogram & Time Badge */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            data-cursor="TOP"
            className="px-3.5 py-1.5 rounded-full bg-[#12141c]/90 backdrop-blur-md border border-white/10 text-white font-mono text-xs font-bold hover:border-[#f05a3e] transition-colors flex items-center gap-2 shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="font-display tracking-wider">MALLIKARJUN.R</span>
          </a>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#12141c]/80 backdrop-blur-md border border-white/8 text-[11px] font-mono text-[#8b92a5]">
            <span>Bengaluru ☀️</span>
            <span className="text-white/20">•</span>
            <span className="text-white font-semibold">{timeStr || 'IST'}</span>
          </div>
        </div>

        {/* Center: Tactile Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-[#12141c]/90 backdrop-blur-md border border-white/10 shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              data-cursor="VIEW"
              className="relative px-3.5 py-1 text-xs font-mono font-medium text-[#8b92a5] hover:text-white transition-colors group"
            >
              <span>{item.label}</span>
              {/* Handwritten scribble underline on hover */}
              <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#f05a3e] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </a>
          ))}
        </nav>

        {/* Right: Quick CTA & Mobile Hamburger */}
        <div className="flex items-center gap-2">
          <a
            href="#connect"
            data-cursor="TALK"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#f05a3e] hover:bg-[#ff6f54] text-white text-xs font-mono font-bold tracking-wide transition-all shadow-lg shadow-[#f05a3e]/20 hover:scale-105"
          >
            <span>LET'S BUILD</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-[#12141c] border border-white/10 text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-3 max-w-7xl mx-auto rounded-3xl bg-[#12141c]/98 backdrop-blur-xl border border-white/10 p-6 space-y-4 shadow-2xl pointer-events-auto">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-[#8b92a5]">
            <span>Bengaluru, India ☀️</span>
            <span className="font-bold text-white">{timeStr}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-xs font-mono font-bold text-white text-center"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#connect"
            onClick={() => setMobileOpen(false)}
            className="block w-full py-3 text-center rounded-2xl bg-[#f05a3e] text-white text-xs font-mono font-bold"
          >
            LET'S BUILD SOMETHING →
          </a>
        </div>
      )}
    </header>
  );
}
