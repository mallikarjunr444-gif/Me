import React from 'react';

// Side Stamp Badges for the Left and Right vertical borders (Jackie Zhang style)
export function StampRibbon({ side = 'left' }) {
  const stamps = [
    { icon: '🍜', label: 'NOODLE' },
    { icon: '🌸', label: 'FLOWER' },
    { icon: '🦉', label: 'OWL' },
    { icon: '🖥️', label: 'CODE' },
    { icon: '🧃', label: 'JUICE' },
    { icon: '🐱', label: 'NEKO' },
    { icon: '⚡', label: 'AI' },
    { icon: '☁️', label: 'CLOUD' },
    { icon: '🎮', label: 'ORVEX' },
    { icon: '🩺', label: 'MEDICUS' },
    { icon: '🍵', label: 'CHAI' },
    { icon: '🦕', label: 'DINO' },
    { icon: '🎯', label: 'VISION' },
    { icon: '🚀', label: 'BUILD' }
  ];

  return (
    <div
      className={`fixed top-0 bottom-0 ${
        side === 'left' ? 'left-0' : 'right-0'
      } w-8 sm:w-10 z-40 flex flex-col justify-around items-center pointer-events-none select-none bg-[#0e0e0e] border-${
        side === 'left' ? 'r' : 'l'
      } border-[#e0523d]/30 overflow-hidden py-2`}
    >
      {stamps.map((stamp, idx) => (
        <div
          key={idx}
          className="w-6 h-6 sm:w-7 sm:h-7 rounded-sm bg-[#c93f2c] border border-[#a12f1f] flex items-center justify-center text-[10px] sm:text-xs text-[#faecd8] shadow-inner opacity-90 my-0.5 transform hover:scale-110 transition-transform"
          title={stamp.label}
        >
          <span className="filter drop-shadow-xs">{stamp.icon}</span>
        </div>
      ))}
    </div>
  );
}

// Hand-Drawn Avatar Face with Socials Branching (Top of Hero)
export function HandDrawnAvatar({ onNavigate }) {
  return (
    <div className="flex flex-col items-center select-none">
      {/* Branching Social Links */}
      <div className="flex items-center gap-4 text-white/70 font-mono text-sm mb-2">
        <a
          href="https://www.linkedin.com/in/mallikarjunr-com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#e0523d] hover:scale-125 transition-all"
          title="LinkedIn"
        >
          <span className="font-bold">in</span>
        </a>
        <a
          href="https://github.com/mallikarjunr444-gif"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#e0523d] hover:scale-125 transition-all text-xs"
          title="GitHub"
        >
          <svg className="w-4 h-4 fill-current inline" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <a
          href="https://medium.com/@mallikarjunr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#e0523d] hover:scale-125 transition-all text-xs font-serif italic font-bold"
          title="Medium"
        >
          M
        </a>
      </div>

      {/* Hand Drawn Face Icon */}
      <div className="w-12 h-12 text-[#faecd8] hover:text-[#e0523d] transition-colors cursor-pointer">
        <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Hair spikes */}
          <path d="M16 22 L20 12 L26 20 L30 10 L34 20 L40 12 L44 22" />
          {/* Head circle */}
          <circle cx="30" cy="34" r="18" />
          {/* Eyes */}
          <circle cx="23" cy="32" r="1.5" fill="currentColor" />
          <circle cx="37" cy="32" r="1.5" fill="currentColor" />
          {/* Smile */}
          <path d="M24 38 Q30 44 36 38" />
          {/* Ears */}
          <path d="M12 34 Q8 34 12 38" />
          <path d="M48 34 Q52 34 48 38" />
        </svg>
      </div>

      {/* Hand-Drawn Navigation Links */}
      <div className="flex items-center gap-6 text-base font-hand text-[#faecd8] mt-3">
        <a href="#about" onClick={() => onNavigate && onNavigate('about')} className="hover:text-[#e0523d] transition-colors">
          about
        </a>
        <a href="#work" onClick={() => onNavigate && onNavigate('work')} className="hover:text-[#e0523d] transition-colors">
          work
        </a>
        <a
          href="#connect"
          onClick={() => onNavigate && onNavigate('connect')}
          className="relative px-3 py-0.5 hover:text-[#e0523d] transition-colors"
        >
          <span>Connect</span>
          {/* Hand drawn oval ring around Connect (Jackie Zhang style) */}
          <svg className="absolute inset-0 w-full h-full text-[#faecd8] pointer-events-none" viewBox="0 0 80 32" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M10 16 C8 6, 72 4, 72 16 C72 26, 6 28, 12 16" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// Chalk Flowers / Botanicals (Exact from Screenshot 1 left side)
export function ChalkFlowers({ className = "" }) {
  return (
    <svg className={`text-[#faecd8]/85 select-none ${className}`} viewBox="0 0 100 160" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Flower 1 (Top Left) */}
      <circle cx="30" cy="35" r="12" />
      <path d="M22 28 Q30 22 38 28 M22 42 Q30 48 38 42 M18 35 Q24 35 24 35" />
      
      {/* Flower 2 (Top Right) */}
      <circle cx="65" cy="25" r="14" />
      <path d="M56 18 Q65 12 74 18 M56 32 Q65 38 74 32" />

      {/* Flower 3 (Center Bottom) */}
      <circle cx="50" cy="70" r="13" />
      <path d="M42 63 Q50 57 58 63 M42 77 Q50 83 58 77" />

      {/* Stems */}
      <path d="M30 47 Q35 90 45 150" />
      <path d="M65 39 Q55 90 48 150" />
      <path d="M50 83 Q48 110 46 150" />

      {/* Leaves */}
      <path d="M38 90 Q20 85 22 105 Q35 105 40 95" />
      <path d="M52 110 Q70 105 68 125 Q55 125 48 115" />
    </svg>
  );
}

// Chalk Retro Smiling CRT Monitor (Exact from Screenshot 1 bottom center)
export function ChalkRetroComputer({ className = "" }) {
  return (
    <svg className={`text-[#faecd8]/85 select-none ${className}`} viewBox="0 0 140 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 3D CRT Monitor Body */}
      <path d="M35 15 L105 15 L125 30 L125 70 L105 70 L35 70 L20 55 L20 25 Z" />
      <path d="M105 15 L105 70" />
      
      {/* Inner Screen */}
      <rect x="42" y="22" width="55" height="40" rx="4" />
      
      {/* Smiling Face inside screen (•‿•) */}
      <circle cx="58" cy="38" r="2.5" fill="currentColor" />
      <circle cx="80" cy="38" r="2.5" fill="currentColor" />
      <path d="M64 47 Q69 53 74 47" />

      {/* Monitor Stand Base */}
      <path d="M30 70 L110 70 L115 85 L25 85 Z" />
      <circle cx="95" cy="78" r="2.5" />
      <line x1="45" y1="78" x2="80" y2="78" />
    </svg>
  );
}

// Chalk Perched Bird (Exact from Screenshot 1 right side)
export function ChalkPerchedBird({ className = "" }) {
  return (
    <svg className={`text-[#faecd8]/85 select-none ${className}`} viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Bird Body & Head */}
      <circle cx="85" cy="35" r="18" />
      {/* Beak */}
      <path d="M68 35 L55 40 L68 44" fill="currentColor" fillOpacity="0.2" />
      {/* Eye */}
      <circle cx="80" cy="32" r="2.5" fill="currentColor" />
      
      {/* Body */}
      <path d="M72 45 Q50 65 60 90 Q85 100 105 85 Q115 65 98 45" />
      
      {/* Wing */}
      <path d="M75 58 Q60 75 72 85 Q85 85 92 70 Q92 58 75 58" />
      
      {/* Tail feathers */}
      <path d="M100 85 L120 105 M95 88 L115 112" />
      
      {/* Feet perching */}
      <path d="M70 95 L65 110 M75 95 L75 110 M60 110 L78 110" />
    </svg>
  );
}

// Chalk Lucky Cat (Maneki-neko)
export function ChalkLuckyCat({ className = "" }) {
  return (
    <svg className={`text-[#faecd8]/80 select-none ${className}`} viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="50" cy="50" rx="28" ry="24" />
      <path d="M25 38 L30 18 L42 30" />
      <path d="M58 30 L70 18 L75 38" />
      <path d="M38 48 Q42 44 44 48 M56 48 Q58 44 62 48" />
      <circle cx="50" cy="54" r="2" fill="currentColor" />
      <path d="M46 58 Q50 62 54 58" />
      <path d="M20 50 L32 52 M20 56 L32 56 M68 52 L80 50 M68 56 L80 56" />
      <path d="M72 50 Q85 30 80 20 Q70 20 68 38" />
      <path d="M30 70 Q50 78 70 70" />
      <circle cx="50" cy="76" r="5" />
      <path d="M25 72 Q20 110 50 110 Q80 110 75 72" />
      <ellipse cx="50" cy="94" rx="12" ry="10" />
    </svg>
  );
}

export function ChalkJuiceBox({ className = "" }) {
  return (
    <svg className={`text-[#faecd8]/80 select-none ${className}`} viewBox="0 0 100 130" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 15 L50 2 M50 2 L65 2 M65 2 L65 20" />
      <path d="M25 30 L65 30 L80 45 L80 115 L40 115 L25 100 Z" />
      <path d="M25 30 L40 45 L80 45" />
      <path d="M40 45 L40 115" />
      <circle cx="58" cy="80" r="14" />
      <path d="M58 66 L58 72 M54 68 L62 68" />
    </svg>
  );
}

export function ChalkRamenBowl({ className = "" }) {
  return (
    <svg className={`text-[#faecd8]/80 select-none ${className}`} viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10 L110 50 M25 22 L110 58" />
      <ellipse cx="60" cy="50" rx="45" ry="18" />
      <path d="M15 50 Q60 100 105 50" />
      <ellipse cx="60" cy="85" rx="18" ry="5" />
      <path d="M45 28 Q40 18 45 10" />
      <path d="M60 25 Q65 15 60 8" />
    </svg>
  );
}

export function ChalkDino({ className = "" }) {
  return (
    <svg className={`text-[#faecd8]/80 select-none ${className}`} viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 65 L20 60 L15 45 L35 30 L55 35 L50 65 L70 65 Q90 65 105 85 L85 85 L75 75 L65 85 L45 85 L40 70 Z" />
      <circle cx="30" cy="40" r="3" fill="currentColor" />
      <path d="M20 52 L24 48 L28 52 L32 48 L36 52" />
      <path d="M45 32 L48 24 L52 34 M60 48 L65 42 L68 52 M75 58 L82 52 L82 64" />
    </svg>
  );
}
