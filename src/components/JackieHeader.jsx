import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export function JackieHeader({ name = "Mallikarjun R", location = "Bengaluru, India" }) {
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Playground', href: '#playground' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all">
      <div
        className={`max-w-6xl mx-auto rounded-full px-5 py-2.5 flex items-center justify-between transition-all duration-300 border ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-[#e7e5df] shadow-sm'
            : 'bg-white/70 backdrop-blur-xs border-transparent'
        }`}
      >
        {/* Left: Wordmark & Live Time Pill */}
        <div className="flex items-center gap-3">
          <a href="#" className="font-heading font-extrabold text-base text-[#191816] tracking-tight hover:opacity-80 transition-opacity">
            {name}
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f2ee] border border-[#e7e5df] text-[11px] font-mono text-[#5c5a55]">
            <span>{location} ☀️</span>
            <span className="text-[#8c8980]">•</span>
            <span className="font-semibold text-[#191816]">{timeStr || 'IST'}</span>
          </span>
        </div>

        {/* Center / Right Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-[#f4f2ee] px-2 py-1 rounded-full border border-[#e7e5df]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1 text-xs font-medium text-[#5c5a55] hover:text-[#191816] rounded-full hover:bg-white transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-[#191816] hover:bg-[#33312e] text-white text-xs font-medium transition-all shadow-xs flex items-center gap-1"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden min-w-[40px] min-h-[40px] flex items-center justify-center text-[#191816] rounded-full hover:bg-[#f4f2ee]"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-white border border-[#e7e5df] p-5 space-y-3 shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-[#e7e5df] text-xs font-mono text-[#5c5a55]">
            <span>{location} ☀️</span>
            <span className="font-bold text-[#191816]">{timeStr}</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-medium text-[#191816] hover:bg-[#f4f2ee]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center py-2.5 rounded-xl bg-[#191816] text-white text-sm font-medium"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
