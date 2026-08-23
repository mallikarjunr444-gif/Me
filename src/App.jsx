import React, { useState } from 'react';
import { portfolioData } from './data/portfolioData';
import { StampRibbon, HandDrawnAvatar } from './components/HandDrawnAssets';
import { JackieHeroBoard, LayeredPaperNotes } from './components/JackieHeroBoard';
import { JackieProjectPeelSection } from './components/JackieProjectPeelSection';
import { JackieWhatILookForSection } from './components/JackieWhatILookForSection';
import { JackieCaseStudyModal } from './components/JackieCaseStudyModal';
import { JackieAboutDrawer } from './components/JackieAboutDrawer';
import { JackieConnectDrawer } from './components/JackieConnectDrawer';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  const data = portfolioData;

  const handleNavigate = (target) => {
    if (target === 'about') {
      setAboutOpen(true);
    } else if (target === 'connect') {
      setConnectOpen(true);
    } else if (target === 'work') {
      const el = document.getElementById('work');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNextProject = () => {
    if (!activeProject) return;
    const idx = data.projects.findIndex((p) => p.id === activeProject.id);
    setActiveProject(data.projects[(idx + 1) % data.projects.length]);
  };

  return (
    <div className="min-h-screen bg-[#181716] text-[#faecd8] relative font-sans selection:bg-[#c93f2c] selection:text-white pb-24 overflow-x-hidden">
      
      {/* 1. Left Vertical Stamp Ribbon */}
      <StampRibbon side="left" />

      {/* 2. Right Vertical Stamp Ribbon */}
      <StampRibbon side="right" />

      {/* Main Content Container */}
      <div className="px-10 sm:px-14 pt-10 sm:pt-14 space-y-16">
        
        {/* 3. Top Hand-Drawn Avatar & Links */}
        <HandDrawnAvatar onNavigate={handleNavigate} />

        {/* 4. Main Hero Cutting Board / Grid Notebook */}
        <JackieHeroBoard onSelectProject={(p) => setActiveProject(p)} />

        {/* 5. Layered Scrapbook Paper Notes */}
        <LayeredPaperNotes />

        {/* 6. Peeling Project Cards & Background Chalk Doodles */}
        <JackieProjectPeelSection
          projects={data.projects}
          onSelectProject={(p) => setActiveProject(p)}
        />

        {/* 7. "What I Look For" Card + Retro Smiling Computer + Botanicals (Screenshot 1 exact!) */}
        <JackieWhatILookForSection
          onOpenConnect={() => setConnectOpen(true)}
          personal={data.personal}
        />

        {/* Bottom Ending Signoff */}
        <div className="text-center pt-16 pb-8 border-t border-white/10 text-xs font-mono text-[#faecd8]/40 space-y-2">
          <div className="font-hand text-xl text-[#faecd8]/70">
            "Mallikarjun R • Bengaluru, India • Still building :)"
          </div>
          <div>© {new Date().getFullYear()} Mallikarjun R. All projects & systems verified.</div>
        </div>

      </div>

      {/* Modals */}
      {activeProject && (
        <JackieCaseStudyModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onNext={handleNextProject}
        />
      )}

      <JackieAboutDrawer
        isOpen={aboutOpen}
        onClose={() => setAboutOpen(false)}
        personal={data.personal}
      />

      <JackieConnectDrawer
        isOpen={connectOpen}
        onClose={() => setConnectOpen(false)}
        personal={data.personal}
        socials={data.socials}
      />

    </div>
  );
}
