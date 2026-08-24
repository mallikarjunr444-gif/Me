import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import { JackieCaseStudyModal } from './components/JackieCaseStudyModal';
import { JackieAboutDrawer } from './components/JackieAboutDrawer';
import { JackieConnectDrawer } from './components/JackieConnectDrawer';
import { JackieWorkPage } from './components/JackieWorkPage';
import { JackieAboutPage } from './components/JackieAboutPage';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('about'); // 'about' | 'work'

  const data = portfolioData;

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'work') {
        setCurrentPage('work');
      } else if (hash === 'about' || hash === '') {
        setCurrentPage('about');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (target) => {
    if (target === 'about') {
      setCurrentPage('about');
      window.location.hash = 'about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'connect') {
      setConnectOpen(true);
    } else if (target === 'work') {
      setCurrentPage('work');
      window.location.hash = 'work';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextProject = () => {
    if (!activeProject) return;
    const idx = data.projects.findIndex((p) => p.id === activeProject.id);
    setActiveProject(data.projects[(idx + 1) % data.projects.length]);
  };

  return (
    <div className="min-h-screen bg-[#181716] text-[#faecd8] relative font-sans selection:bg-[#c93f2c] selection:text-white pb-24 overflow-x-hidden">
      
      {currentPage === 'work' ? (
        /* Dedicated Fullscreen 1:1 Cloned Work Page */
        <JackieWorkPage
          onNavigate={(page) => handleNavigate(page)}
          onOpenConnect={() => setConnectOpen(true)}
          onSelectProject={(p) => setActiveProject(p)}
        />
      ) : (
        /* Dedicated Fullscreen 1:1 Cloned About Page */
        <JackieAboutPage
          onNavigate={(page) => handleNavigate(page)}
          onOpenConnect={() => setConnectOpen(true)}
        />
      )}

      {/* Modals & Drawers */}
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
