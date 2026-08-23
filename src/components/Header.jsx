import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Header({ name }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div
        className={`max-w-6xl mx-auto rounded-full px-5 py-3 flex items-center justify-between transition-all duration-500 border ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-black/6 shadow-lg shadow-black/5'
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Wordmark */}
        <a href="#" className="font-heading font-extrabold text-sm tracking-widest text-[var(--text-primary)] hover:text-indigo-500 transition-colors">
          {name}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-4 py-1.5 text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-full hover:bg-black/4 transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden sm:flex items-center gap-1.5 px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-semibold transition-all shadow-lg shadow-indigo-500/20"
        >
          <span>Let's Talk</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-[var(--text-primary)]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="sm:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-white/98 backdrop-blur-xl border border-black/6 p-5 space-y-2 shadow-xl">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block min-h-[44px] flex items-center px-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-medium rounded-xl hover:bg-black/3"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block min-h-[44px] flex items-center justify-center rounded-xl bg-indigo-500 text-white text-sm font-semibold mt-3"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}
