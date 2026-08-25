import React, { useState } from 'react';
import confetti from 'canvas-confetti';

// 8 Authentic Jackie Zhang Stamps in perfect sequence
const STAMP_LIST = [
  { name: 'seal', src: '/images/stamps/stamp-seal.png' },
  { name: 'bowl', src: '/images/stamps/stamp-bowl.png' },
  { name: 'cursor', src: '/images/stamps/stamp-cursor.png' },
  { name: 'flower', src: '/images/stamps/stamp-flower.png' },
  { name: 'owl', src: '/images/stamps/stamp-owl.png' },
  { name: 'sunflower', src: '/images/stamps/stamp-sunflower.png' },
  { name: 'blossom', src: '/images/stamps/stamp-blossom-leaves.png' },
  { name: 'axe', src: '/images/stamps/stamp-axe-vessel.png' }
];

// Repeat 24 times to seamlessly cover even very tall scrolling pages (192 stamps)
const REPEATED_STAMPS = Array.from({ length: 24 }).flatMap(() => STAMP_LIST);

// Side Stamp Ribbon for Left and Right vertical borders
export function StampRibbon({ side = 'left' }) {
  const isLeft = side === 'left';

  return (
    <div
      className={`absolute inset-y-0 ${
        isLeft ? 'left-0' : 'right-0'
      } w-[48px] sm:w-[58px] z-10 overflow-hidden pointer-events-none select-none`}
      aria-hidden="true"
    >
      <div className={`flex flex-col items-center gap-1.5 py-1 w-full ${!isLeft ? 'scale-x-[-1]' : ''}`}>
        {REPEATED_STAMPS.map((stamp, idx) => (
          <img
            key={idx}
            src={stamp.src}
            alt=""
            loading="eager"
            decoding="async"
            className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] object-contain flex-shrink-0 opacity-95"
          />
        ))}
      </div>
    </div>
  );
}

// Hand-Drawn Avatar Face with Socials Branching (Live hair bounce + eye blink + line boil)
export function HandDrawnAvatar({ onNavigate, activeTab = 'about' }) {
  const [blinking, setBlinking] = useState(false);

  const handleFaceClick = () => {
    setBlinking(true);
    setTimeout(() => setBlinking(false), 800);
    confetti({
      particleCount: 20,
      spread: 45,
      origin: { x: 0.5, y: 0.15 },
      colors: ['#c93f2c', '#faecd8']
    });
  };

  return (
    <div className="flex flex-col items-center select-none animate-line-boil-slow">
      {/* Branching Social Links */}
      <div className="flex items-center gap-5 text-white/80 font-mono text-sm mb-2">
        <a
          href="https://www.linkedin.com/in/mallikarjunr-com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#c93f2c] hover:scale-125 transition-all inline-block hover:-rotate-6"
          title="LinkedIn"
        >
          <span className="font-bold">in</span>
        </a>
        <a
          href="https://github.com/mallikarjunr444-gif"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#c93f2c] hover:scale-125 transition-all text-xs inline-block hover:rotate-6"
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
          className="hover:text-[#c93f2c] hover:scale-125 transition-all text-xs font-serif italic font-bold inline-block hover:-rotate-6"
          title="Medium"
        >
          M
        </a>
      </div>

      {/* Hand Drawn Face Icon with live hair and blinking eyes */}
      <div
        onClick={handleFaceClick}
        className="w-13 h-13 text-[#faecd8] hover:text-[#c93f2c] transition-colors cursor-pointer doodle-interactive"
      >
        <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Hair spikes with continuous live bounce */}
          <g className="animate-avatar-hair">
            <path d="M16 22 L20 12 L26 20 L30 10 L34 20 L40 12 L44 22" />
          </g>
          {/* Head circle */}
          <circle cx="30" cy="34" r="18" />
          {/* Eyes with live blink */}
          {blinking ? (
            <g>
              <line x1="20" y1="32" x2="26" y2="32" strokeWidth="2.5" />
              <line x1="34" y1="32" x2="40" y2="32" strokeWidth="2.5" />
            </g>
          ) : (
            <g className="animate-screen-blink">
              <circle cx="23" cy="32" r="1.8" fill="currentColor" />
              <circle cx="37" cy="32" r="1.8" fill="currentColor" />
            </g>
          )}
          {/* Smile */}
          <path d="M24 38 Q30 44 36 38" />
          {/* Ears */}
          <path d="M12 34 Q8 34 12 38" />
          <path d="M48 34 Q52 34 48 38" />
        </svg>
      </div>

      {/* Hand-Drawn Navigation Links with live hover wiggle */}
      <div className="flex items-center gap-6 text-lg font-hand text-[#faecd8] mt-3">
        <button
          onClick={() => onNavigate && onNavigate('about')}
          className={`hover:text-[#c93f2c] hover:scale-110 transition-all inline-block hover:-rotate-3 cursor-pointer ${
            activeTab === 'about' ? 'text-[#c93f2c] font-bold underline underline-offset-4 decoration-wavy' : ''
          }`}
        >
          about
        </button>
        <button
          onClick={() => onNavigate && onNavigate('work')}
          className={`hover:text-[#c93f2c] hover:scale-110 transition-all inline-block hover:rotate-3 cursor-pointer ${
            activeTab === 'work' ? 'text-[#c93f2c] font-bold underline underline-offset-4 decoration-wavy' : ''
          }`}
        >
          work
        </button>
        <button
          onClick={() => onNavigate && onNavigate('connect')}
          className="relative px-4 py-1 hover:text-[#c93f2c] hover:scale-105 transition-all inline-block group cursor-pointer"
        >
          <span>Connect</span>
          {/* Hand drawn oval ring around Connect with live line boil */}
          <svg className="absolute inset-0 w-full h-full text-[#faecd8] group-hover:text-[#c93f2c] pointer-events-none animate-line-boil" viewBox="0 0 80 32" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 16 C8 6, 72 4, 72 16 C72 26, 6 28, 12 16" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// Chalk Flowers with LIVE Wind Sway Animation
export function ChalkFlowers({ className = "" }) {
  return (
    <div className={`animate-flowers-sway doodle-interactive ${className}`}>
      <svg className="w-full h-full text-[#faecd8] select-none animate-line-boil" viewBox="0 0 100 160" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
    </div>
  );
}

// Chalk Retro Smiling CRT Monitor with LIVE Blinking Eyes & Shaking Wobble
export function ChalkRetroComputer({ className = "" }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { x: 0.5, y: 0.8 },
      colors: ['#38bdf8', '#faecd8', '#c93f2c']
    });
  };

  return (
    <div onClick={handleClick} className={`animate-computer-live doodle-interactive ${className}`}>
      <svg className="w-full h-full text-[#faecd8] select-none animate-line-boil" viewBox="0 0 140 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* 3D CRT Monitor Body */}
        <path d="M35 15 L105 15 L125 30 L125 70 L105 70 L35 70 L20 55 L20 25 Z" />
        <path d="M105 15 L105 70" />
        
        {/* Inner Screen */}
        <rect x="42" y="22" width="55" height="40" rx="4" />
        
        {/* Smiling Face inside screen (•‿•) with live blink */}
        <g className="animate-screen-blink">
          <circle cx="58" cy="38" r="2.5" fill="currentColor" />
          <circle cx="80" cy="38" r="2.5" fill="currentColor" />
        </g>
        <path d="M64 47 Q69 53 74 47" />

        {/* Monitor Stand Base */}
        <path d="M30 70 L110 70 L115 85 L25 85 Z" />
        <circle cx="95" cy="78" r="2.5" />
        <line x1="45" y1="78" x2="80" y2="78" />
      </svg>
    </div>
  );
}

// Chalk Perched Bird with LIVE Head Bobbing
export function ChalkPerchedBird({ className = "" }) {
  return (
    <div className={`doodle-interactive ${className}`}>
      <svg className="w-full h-full text-[#faecd8] select-none animate-line-boil" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Animated Head & Beak */}
        <g className="animate-bird-head">
          <circle cx="85" cy="35" r="18" />
          <path d="M68 35 L55 40 L68 44" fill="currentColor" fillOpacity="0.2" />
          <circle cx="80" cy="32" r="2.5" fill="currentColor" />
        </g>
        
        {/* Body */}
        <path d="M72 45 Q50 65 60 90 Q85 100 105 85 Q115 65 98 45" />
        
        {/* Wing */}
        <path d="M75 58 Q60 75 72 85 Q85 85 92 70 Q92 58 75 58" />
        
        {/* Tail feathers */}
        <path d="M100 85 L120 105 M95 88 L115 112" />
        
        {/* Feet perching */}
        <path d="M70 95 L65 110 M75 95 L75 110 M60 110 L78 110" />
      </svg>
    </div>
  );
}

// Chalk Lucky Cat with LIVE WAVING PAW Animation
export function ChalkLuckyCat({ className = "" }) {
  const [patted, setPatted] = useState(false);

  const handlePat = () => {
    setPatted(true);
    setTimeout(() => setPatted(false), 500);
    confetti({
      particleCount: 25,
      spread: 40,
      origin: { x: 0.15, y: 0.4 },
      colors: ['#c93f2c', '#faecd8', '#f59e0b']
    });
  };

  return (
    <div onClick={handlePat} className={`doodle-interactive ${className}`}>
      <svg className="w-full h-full text-[#faecd8] select-none animate-line-boil" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Head */}
        <ellipse cx="50" cy="50" rx="28" ry="24" />
        {/* Ears */}
        <path d="M25 38 L30 18 L42 30" />
        <path d="M58 30 L70 18 L75 38" />
        {/* Eyes & Whiskers with live blink */}
        <g className="animate-screen-blink">
          <path d="M38 48 Q42 44 44 48 M56 48 Q58 44 62 48" />
          <circle cx="50" cy="54" r="2" fill="currentColor" />
        </g>
        <path d="M46 58 Q50 62 54 58" />
        <path d="M20 50 L32 52 M20 56 L32 56 M68 52 L80 50 M68 56 L80 56" />
        
        {/* CONTINUOUSLY WAVING PAW! (Exact live motion!) */}
        <g className="animate-cat-paw">
          <path d="M72 50 Q85 30 80 20 Q70 20 68 38" />
        </g>

        {/* Collar & Bell */}
        <path d="M30 70 Q50 78 70 70" />
        <circle cx="50" cy="76" r="5" />
        {/* Body & Coin */}
        <path d="M25 72 Q20 110 50 110 Q80 110 75 72" />
        <ellipse cx="50" cy="94" rx="12" ry="10" />
      </svg>
    </div>
  );
}

// Chalk Juice Box with LIVE Wobble & Bubbles
export function ChalkJuiceBox({ className = "" }) {
  return (
    <div className={`animate-juice-box doodle-interactive ${className}`}>
      <svg className="w-full h-full text-[#faecd8] select-none animate-line-boil" viewBox="0 0 100 130" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 15 L50 2 M50 2 L65 2 M65 2 L65 20" />
        <path d="M25 30 L65 30 L80 45 L80 115 L40 115 L25 100 Z" />
        <path d="M25 30 L40 45 L80 45" />
        <path d="M40 45 L40 115" />
        <circle cx="58" cy="80" r="14" />
        <path d="M58 66 L58 72 M54 68 L62 68" />
      </svg>
    </div>
  );
}

// Chalk Ramen Bowl with LIVE RISING STEAM Animation
export function ChalkRamenBowl({ className = "" }) {
  return (
    <div className={`doodle-interactive ${className}`}>
      <svg className="w-full h-full text-[#faecd8] select-none animate-line-boil" viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Live Rising Steam wisps */}
        <g className="animate-steam-1">
          <path d="M45 28 Q40 18 45 10" />
        </g>
        <g className="animate-steam-2">
          <path d="M60 25 Q65 15 60 8" />
        </g>
        <g className="animate-steam-1">
          <path d="M75 28 Q70 18 75 10" />
        </g>

        {/* Chopsticks */}
        <path d="M20 10 L110 50 M25 22 L110 58" />
        {/* Bowl Rim */}
        <ellipse cx="60" cy="50" rx="45" ry="18" />
        {/* Bowl Body */}
        <path d="M15 50 Q60 100 105 50" />
        {/* Bowl Base */}
        <ellipse cx="60" cy="85" rx="18" ry="5" />
      </svg>
    </div>
  );
}

// Chalk Dinosaur with LIVE Chomping & Tail Wag
export function ChalkDino({ className = "" }) {
  return (
    <div className={`animate-dino-live doodle-interactive ${className}`}>
      <svg className="w-full h-full text-[#faecd8] select-none animate-line-boil" viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 65 L20 60 L15 45 L35 30 L55 35 L50 65 L70 65 Q90 65 105 85 L85 85 L75 75 L65 85 L45 85 L40 70 Z" />
        <circle cx="30" cy="40" r="3" fill="currentColor" />
        <path d="M20 52 L24 48 L28 52 L32 48 L36 52" />
        <path d="M45 32 L48 24 L52 34 M60 48 L65 42 L68 52 M75 58 L82 52 L82 64" />
      </svg>
    </div>
  );
}

// Chalk Coffee Kettle with live steam and wobble
export function ChalkCoffeeKettle({ className = "" }) {
  return (
    <div className={`doodle-interactive ${className}`}>
      <svg className="w-full h-full text-[#faecd8] select-none animate-line-boil" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Steam */}
        <g className="animate-steam-1">
          <path d="M25 15 Q20 8 25 2" />
        </g>
        {/* Gooseneck Spout */}
        <path d="M30 45 Q15 35 22 20 Q28 20 28 24" />
        {/* Kettle Body */}
        <path d="M35 35 L65 35 L75 75 L25 75 Z" />
        {/* Lid & Knob */}
        <path d="M40 35 Q50 30 60 35" />
        <circle cx="50" cy="30" r="2.5" fill="currentColor" />
        {/* Handle */}
        <path d="M68 40 Q85 45 80 65 L72 70" />
      </svg>
    </div>
  );
}

// Chalk Origami Map
export function ChalkOrigamiMap({ className = "" }) {
  return (
    <div className={`doodle-interactive ${className}`}>
      <svg className="w-full h-full text-[#faecd8] select-none animate-line-boil" viewBox="0 0 120 90" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="10,25 40,15 70,25 100,15 110,65 80,75 50,65 20,75" />
        <line x1="40" y1="15" x2="50" y2="65" />
        <line x1="70" y1="25" x2="80" y2="75" />
        <circle cx="60" cy="45" r="3" fill="#c93f2c" />
      </svg>
    </div>
  );
}

// Chalk Botanical Branch with organic sway
export function ChalkBotanicalBranch({ className = "" }) {
  return (
    <div className={`animate-flowers-sway doodle-interactive ${className}`}>
      <svg className="w-full h-full text-[#faecd8] select-none animate-line-boil" viewBox="0 0 100 140" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Main curved branch */}
        <path d="M20 130 Q45 80 80 15" />
        {/* Leaves */}
        <path d="M35 105 Q20 95 24 80 Q40 85 38 100" />
        <path d="M48 80 Q65 70 68 55 Q52 60 50 75" />
        <path d="M60 55 Q45 45 48 30 Q65 35 62 50" />
        <path d="M72 30 Q90 20 88 5 Q72 12 74 26" />
      </svg>
    </div>
  );
}
