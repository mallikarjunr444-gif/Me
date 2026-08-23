import React from 'react';

// 1. Traditional Ramen Bowl with Ornate Lattice Frame & 寿 Seal (User Image 1)
export function StampRamenBowl({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={`select-none ${className}`} fill="none">
      {/* Outer Square Lattice Frame */}
      <rect x="8" y="8" width="84" height="84" rx="4" stroke="#e0523d" strokeWidth="2.8" />
      <rect x="14" y="14" width="72" height="72" stroke="#e0523d" strokeWidth="1.5" strokeDasharray="6 2" opacity="0.85" />
      
      {/* Lattice Corner Cross Joints */}
      <line x1="8" y1="24" x2="24" y2="8" stroke="#e0523d" strokeWidth="2" />
      <line x1="76" y1="8" x2="92" y2="24" stroke="#e0523d" strokeWidth="2" />
      <line x1="8" y1="76" x2="24" y2="92" stroke="#e0523d" strokeWidth="2" />
      <line x1="76" y1="92" x2="92" y2="76" stroke="#e0523d" strokeWidth="2" />
      
      {/* Center Circular Medallion */}
      <circle cx="50" cy="50" r="33" stroke="#e0523d" strokeWidth="2.5" fill="#191816" fillOpacity="0.4" />
      <circle cx="50" cy="50" r="30" stroke="#e0523d" strokeWidth="1" strokeDasharray="3 2" />

      {/* Traditional Ramen Bowl */}
      {/* Noodle / Rice Mound */}
      <path d="M 28 46 Q 50 30 72 46" stroke="#e0523d" strokeWidth="2.2" fill="#e0523d" fillOpacity="0.25" />
      <path d="M 36 39 Q 44 34 52 38 Q 60 34 66 40" stroke="#e0523d" strokeWidth="1.8" />
      <circle cx="43" cy="38" r="1.5" fill="#e0523d" />
      <circle cx="55" cy="37" r="1.5" fill="#e0523d" />
      <circle cx="49" cy="42" r="1.5" fill="#e0523d" />

      {/* Bowl Rim & Body */}
      <path d="M 25 46 L 75 46 Q 73 70 50 72 Q 27 70 25 46 Z" stroke="#e0523d" strokeWidth="2.5" fill="#191816" />
      
      {/* Greek Key Meander Pattern on Rim */}
      <path d="M 27 49 L 73 49" stroke="#e0523d" strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Chinese Longevity Character (寿) Seal in Center of Bowl */}
      <circle cx="50" cy="59" r="6.5" stroke="#e0523d" strokeWidth="1.5" />
      <text x="47" y="62.5" fill="#e0523d" fontSize="7" fontWeight="bold" fontFamily="serif">
        寿
      </text>

      {/* Bowl Foot / Stand */}
      <rect x="42" y="72" width="16" height="3" rx="1" stroke="#e0523d" strokeWidth="1.5" fill="#e0523d" />
    </svg>
  );
}

// 2. Browser Window with Chunky Pointer Cursor (User Image 2)
export function StampBrowserCursor({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={`select-none ${className}`} fill="none">
      {/* Solid Terracotta Red Rounded Card */}
      <rect x="6" y="6" width="88" height="88" rx="16" fill="#e0523d" />

      {/* Top Window Bar Division */}
      <line x1="6" y1="26" x2="94" y2="26" stroke="#191816" strokeWidth="2.8" strokeLinecap="round" />

      {/* 3 Window Controls Dots */}
      <circle cx="20" cy="16" r="3.2" fill="#191816" />
      <circle cx="32" cy="16" r="3.2" fill="#191816" />
      <circle cx="44" cy="16" r="3.2" fill="#191816" />

      {/* Chunky Hand-Drawn Mouse Pointer Cursor Arrow */}
      <path
        d="M 32 36 L 32 70 L 44 60 L 56 75 L 63 70 L 51 54 L 66 54 Z"
        fill="#191816"
        stroke="#191816"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Right Scrollbar Accent Slit */}
      <line x1="84" y1="36" x2="84" y2="56" stroke="#191816" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// 3. Lotus Botanical Flower Stem in Rounded Frame (User Image 3)
export function StampLotusFlower({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={`select-none ${className}`} fill="none">
      {/* Outer Rounded Line Frame with Hand-Drawn Corner Breaks */}
      <rect x="8" y="8" width="84" height="84" rx="14" stroke="#e0523d" strokeWidth="2.8" />
      
      {/* Lotus Flower Stem */}
      <path d="M 50 54 Q 46 72 38 84" stroke="#e0523d" strokeWidth="3.2" strokeLinecap="round" />

      {/* Lower Leaf */}
      <path d="M 42 74 Q 22 72 26 62 Q 38 62 43 72" stroke="#e0523d" strokeWidth="2.5" fill="#e0523d" fillOpacity="0.2" />

      {/* Lotus Petals Blooming Upward */}
      <path d="M 50 20 Q 56 36 50 48 Q 44 36 50 20 Z" stroke="#e0523d" strokeWidth="2.5" fill="#e0523d" fillOpacity="0.2" />
      <circle cx="50" cy="34" r="1.5" fill="#e0523d" />
      <circle cx="48" cy="38" r="1.5" fill="#e0523d" />
      <circle cx="52" cy="38" r="1.5" fill="#e0523d" />

      {/* Left Petals */}
      <path d="M 50 48 Q 30 38 24 24 Q 38 28 50 48" stroke="#e0523d" strokeWidth="2.5" fill="#e0523d" fillOpacity="0.15" />
      <path d="M 48 50 Q 24 48 16 38 Q 32 40 48 50" stroke="#e0523d" strokeWidth="2.5" />

      {/* Right Petals */}
      <path d="M 50 48 Q 70 38 76 24 Q 62 28 50 48" stroke="#e0523d" strokeWidth="2.5" fill="#e0523d" fillOpacity="0.15" />
      <path d="M 52 50 Q 76 48 84 38 Q 68 40 52 50" stroke="#e0523d" strokeWidth="2.5" />

      {/* Base Calyx */}
      <path d="M 38 52 Q 50 56 62 52" stroke="#e0523d" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// 4. Night Owl on Tree Branch with Full Moon (User Image 4)
export function StampNightOwl({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={`select-none ${className}`} fill="none">
      {/* Solid Terracotta Red Rounded Card */}
      <rect x="6" y="6" width="88" height="88" rx="16" fill="#e0523d" />

      {/* Left Tree Trunk with Bark Texture */}
      <path d="M 6 6 L 24 6 L 18 94 L 6 94 Z" fill="#191816" />
      <line x1="12" y1="12" x2="10" y2="88" stroke="#e0523d" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="18" y1="12" x2="15" y2="88" stroke="#e0523d" strokeWidth="1.6" strokeLinecap="round" />

      {/* Tree Branch */}
      <path d="M 18 72 Q 40 76 76 66 L 78 74 Q 40 82 18 80 Z" fill="#191816" />

      {/* Full Moon in Night Sky */}
      <circle cx="36" cy="22" r="7.5" fill="#191816" />

      {/* Owl Silhouette Perched on Branch */}
      <circle cx="58" cy="38" r="12" fill="#191816" />
      <path d="M 50 36 Q 58 32 66 36 Q 64 44 58 44 Q 52 44 50 36" stroke="#e0523d" strokeWidth="1.6" />
      <circle cx="54" cy="36" r="2.2" fill="#e0523d" />
      <circle cx="62" cy="36" r="2.2" fill="#e0523d" />
      <path d="M 58 39 L 57 42 L 59 42 Z" fill="#e0523d" />

      {/* Body & Wings */}
      <path d="M 48 46 Q 44 68 58 72 Q 72 68 68 46 Z" fill="#191816" />
      <path d="M 50 50 Q 44 64 54 68" stroke="#e0523d" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M 54 74 L 56 82 L 60 74" stroke="#191816" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

// 5. Diamond Blossom Flower (User Image 5)
export function StampDiamondBlossom({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={`select-none ${className}`} fill="none">
      {/* Rotated 45-Degree Diamond Frame */}
      <path d="M 50 8 L 92 50 L 50 92 L 8 50 Z" stroke="#e0523d" strokeWidth="3.2" strokeLinejoin="round" />
      <path d="M 50 14 L 86 50 L 50 86 L 14 50 Z" stroke="#e0523d" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />

      {/* Central 5-Petal Blossom */}
      <circle cx="50" cy="40" r="4.5" fill="#e0523d" />
      <circle cx="50" cy="30" r="5" fill="#e0523d" />
      <circle cx="59" cy="36" r="5" fill="#e0523d" />
      <circle cx="56" cy="47" r="5" fill="#e0523d" />
      <circle cx="44" cy="47" r="5" fill="#e0523d" />
      <circle cx="41" cy="36" r="5" fill="#e0523d" />

      {/* Flower Stem */}
      <path d="M 50 48 Q 50 68 46 76" stroke="#e0523d" strokeWidth="3" strokeLinecap="round" />

      {/* Curved Leaves */}
      <path d="M 47 62 Q 28 64 30 50 Q 45 52 48 58" fill="#e0523d" />
      <path d="M 49 60 Q 68 58 64 46 Q 51 50 49 56" fill="#e0523d" />
    </svg>
  );
}

// 6. Diamond Sunflower with Flying Bees (User Image 6)
export function StampDiamondButterflies({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={`select-none ${className}`} fill="none">
      {/* Diamond Frame */}
      <path d="M 50 8 L 92 50 L 50 92 L 8 50 Z" stroke="#e0523d" strokeWidth="3.2" strokeLinejoin="round" />
      <path d="M 50 14 L 86 50 L 50 86 L 14 50 Z" stroke="#e0523d" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />

      {/* Center Dark-Hatched Seed Cone */}
      <path d="M 42 36 Q 50 20 58 32 Q 58 40 42 36 Z" fill="#e0523d" stroke="#e0523d" strokeWidth="1.5" />
      <line x1="46" y1="28" x2="54" y2="36" stroke="#191816" strokeWidth="1.5" />
      <line x1="50" y1="24" x2="56" y2="32" stroke="#191816" strokeWidth="1.5" />
      <line x1="44" y1="32" x2="52" y2="38" stroke="#191816" strokeWidth="1.5" />

      {/* Radiating Petals */}
      <path d="M 42 36 L 28 34 M 44 40 L 30 44 M 46 44 L 36 54 M 52 44 L 52 56 M 56 42 L 68 44 M 58 38 L 72 34 M 56 34 L 66 26" stroke="#e0523d" strokeWidth="2.5" strokeLinecap="round" />

      {/* Center Stem */}
      <path d="M 50 44 L 46 82" stroke="#e0523d" strokeWidth="3.5" strokeLinecap="round" />

      {/* Leaves on Left and Right of Stem */}
      <path d="M 47 62 Q 30 60 32 50 Q 42 52 48 58" fill="#e0523d" />
      <path d="M 48 68 Q 66 68 64 56 Q 52 58 47 64" fill="#e0523d" />

      {/* Left Flying Bee / Butterfly */}
      <path d="M 20 42 Q 24 36 28 40 Q 26 46 20 42 M 20 44 Q 24 50 28 46 Q 26 42 20 44" fill="#e0523d" />
      <line x1="16" y1="42" x2="26" y2="42" stroke="#e0523d" strokeWidth="2.5" strokeLinecap="round" />

      {/* Right Flying Bee / Butterfly */}
      <path d="M 76 44 Q 70 38 66 42 Q 68 48 76 44 M 76 46 Q 70 52 66 48 Q 68 44 76 46" fill="#e0523d" />
      <line x1="72" y1="44" x2="80" y2="44" stroke="#e0523d" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 7. Chinese Calligraphy Seal Character (User Image 7)
export function StampCalligraphySeal({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={`select-none ${className}`} fill="none">
      {/* Solid Terracotta Red Rounded Seal Block */}
      <rect x="6" y="6" width="88" height="88" rx="16" fill="#e0523d" />

      {/* Authentic Hand-Carved Seal Script Brush Strokes in Black */}
      {/* Left Radical Wavy Serpentine Brush Stroke */}
      <path
        d="M 32 18 Q 24 28 30 38 Q 36 46 24 58 Q 18 68 26 82"
        stroke="#191816"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Radical Upper Cross */}
      <path
        d="M 46 22 L 68 30"
        stroke="#191816"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Right Radical Center Horizontal Bar */}
      <path
        d="M 34 38 L 74 36"
        stroke="#191816"
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* Right Radical Archway / Bell Legs */}
      <path
        d="M 48 38 Q 42 60 34 82"
        stroke="#191816"
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      <path
        d="M 58 38 Q 66 60 72 82"
        stroke="#191816"
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* Inner Characteristic Tick */}
      <path
        d="M 48 64 L 54 72"
        stroke="#191816"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 8. Magic Teapot / Urn with Spiral Motif
export function StampMagicTeapot({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={`select-none ${className}`} fill="none">
      {/* Solid Red Block */}
      <rect x="6" y="6" width="88" height="88" rx="16" fill="#e0523d" />

      {/* Teapot / Urn with Spiral Emblem */}
      <path
        d="M 38 22 L 62 22 L 60 30 L 40 30 Z M 40 30 Q 22 42 26 68 Q 34 82 50 82 Q 66 82 74 68 Q 78 42 60 30 Z"
        fill="#191816"
      />
      {/* Handle */}
      <path d="M 26 44 Q 14 54 26 64" stroke="#191816" strokeWidth="4" strokeLinecap="round" />
      {/* Spout */}
      <path d="M 72 42 Q 84 38 82 56 L 74 54" fill="#191816" />
      {/* Spiral motif on belly */}
      <path d="M 50 56 Q 44 56 44 50 Q 44 44 50 44 Q 56 44 56 52 Q 56 60 48 60 Q 40 60 40 48" stroke="#e0523d" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// Side Stamp Ribbons running vertically along left and right borders
export function StampRibbon({ side = 'left' }) {
  const stampComponents = [
    StampCalligraphySeal,
    StampRamenBowl,
    StampBrowserCursor,
    StampLotusFlower,
    StampNightOwl,
    StampDiamondSunflower,
    StampDiamondBlossom,
    StampMagicTeapot
  ];

  function StampDiamondSunflower(props) {
    return <StampDiamondButterflies {...props} />;
  }

  return (
    <div
      className={`fixed top-0 bottom-0 ${
        side === 'left' ? 'left-0' : 'right-0'
      } z-40 w-[48px] sm:w-[56px] overflow-hidden pointer-events-none select-none flex flex-col justify-start items-center py-2 space-y-3`}
    >
      {/* Render 24 sequential stamps tiling down the viewport */}
      {Array.from({ length: 24 }).map((_, i) => {
        const StampComponent = stampComponents[i % stampComponents.length];
        return (
          <div
            key={i}
            className={`w-9 h-9 sm:w-11 sm:h-11 shrink-0 ${
              side === 'right' ? 'scale-x-[-1]' : ''
            } transform hover:scale-115 transition-transform duration-200 drop-shadow-md opacity-95`}
          >
            <StampComponent className="w-full h-full" />
          </div>
        );
      })}
    </div>
  );
}

// Hand-Drawn Avatar Face with Socials Branching (Top of Hero)
export function HandDrawnAvatar({ onNavigate }) {
  return (
    <div className="flex flex-col items-center select-none pt-2">
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
          href="https://medium.com/@mallikarjunr444"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#e0523d] hover:scale-125 transition-all text-xs font-serif italic font-bold"
          title="Medium"
        >
          M
        </a>
      </div>

      {/* Hand Drawn Face Icon */}
      <div
        onClick={() => onNavigate && onNavigate('about')}
        className="w-12 h-12 text-[#faecd8] hover:text-[#e0523d] transition-colors cursor-pointer"
        title="About Mallikarjun"
      >
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
        <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('about'); }} className="hover:text-[#e0523d] transition-colors cursor-pointer">
          about
        </a>
        <a href="#work" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('work'); }} className="hover:text-[#e0523d] transition-colors cursor-pointer">
          work
        </a>
        <a
          href="#connect"
          onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('connect'); }}
          className="relative px-3 py-0.5 hover:text-[#e0523d] transition-colors cursor-pointer"
        >
          <span>Connect</span>
          {/* Hand drawn oval ring around Connect */}
          <svg className="absolute inset-0 w-full h-full text-[#faecd8] pointer-events-none" viewBox="0 0 80 32" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M10 16 C8 6, 72 4, 72 16 C72 26, 6 28, 12 16" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// Authentic Image Chalk Doodles from jackiezhang.co.za
export function ChalkLuckyCat({ className = "" }) {
  return (
    <img
      src="https://framerusercontent.com/images/LKbBfnsJYBIcTHb37SByXysxfM.png?width=164&height=151"
      alt="Maneki Neko"
      className={`object-contain select-none ${className}`}
      loading="lazy"
    />
  );
}

export function ChalkOrigamiMap({ className = "" }) {
  return (
    <img
      src="https://framerusercontent.com/images/Y6jrcs7yZkqh9sRA4eMYaPQ96pk.png?width=408&height=326"
      alt="Origami Map"
      className={`object-contain select-none ${className}`}
      loading="lazy"
    />
  );
}

export function ChalkCoffeeKettle({ className = "" }) {
  return (
    <img
      src="https://framerusercontent.com/images/bvaE5Tit9l38Dd7DsufX28pGs.png?width=130&height=240"
      alt="Coffee Kettle"
      className={`object-contain select-none ${className}`}
      loading="lazy"
    />
  );
}

export function ChalkJuiceBox({ className = "" }) {
  return (
    <img
      src="https://framerusercontent.com/images/PyLCiCXcTclOUzVEMcAaMR8w.png?width=302&height=300"
      alt="Juice Box"
      className={`object-contain select-none ${className}`}
      loading="lazy"
    />
  );
}

export function ChalkRamenBowl({ className = "" }) {
  return (
    <img
      src="https://framerusercontent.com/images/a4cvua7pf3dgY3RkFzwNmyByP1Y.png?width=322&height=682"
      alt="Ramen / Plant"
      className={`object-contain select-none ${className}`}
      loading="lazy"
    />
  );
}

export function ChalkFlowers({ className = "" }) {
  return (
    <img
      src="https://framerusercontent.com/images/FRkj7J6yOqj9bBSMBJF7zdRGrY.png?width=381&height=325"
      alt="Flowers"
      className={`object-contain select-none ${className}`}
      loading="lazy"
    />
  );
}

export function ChalkRetroComputer({ className = "" }) {
  return (
    <img
      src="https://framerusercontent.com/images/raBEoGeB7wmHSyDXXPu6VzQPAg.png?width=242&height=232"
      alt="Retro Computer"
      className={`object-contain select-none ${className}`}
      loading="lazy"
    />
  );
}

export function ChalkPerchedBird({ className = "" }) {
  return (
    <img
      src="https://framerusercontent.com/images/zbVoYsGmG4nEEedbtgkv5193W6I.png?width=413&height=392"
      alt="Perched Bird"
      className={`object-contain select-none ${className}`}
      loading="lazy"
    />
  );
}

export function ChalkBotanicalBranch({ className = "" }) {
  return (
    <img
      src="https://framerusercontent.com/images/EYbfG6roNwIxhPystqzDKOK4.png?width=401&height=464"
      alt="Botanical Branch"
      className={`object-contain select-none ${className}`}
      loading="lazy"
    />
  );
}
