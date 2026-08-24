import React, { useEffect, useRef } from 'react';

export function JackieWorkPage({ onNavigateHome, onSelectProject }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data && e.data.type === 'SET_HEIGHT' && iframeRef.current) {
        iframeRef.current.style.height = `${e.data.height}px`;
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="w-full min-h-screen relative select-none">
      {/* 100% Pixel-Perfect Cloned Jackie Zhang Work Page */}
      <iframe
        ref={iframeRef}
        src="/jackie_work/index.html"
        title="Jackie Zhang Work Portfolio"
        className="w-full min-h-[1600px] border-0 rounded-2xl shadow-2xl bg-[#121212] overflow-hidden"
        style={{
          width: '100%',
          height: '2400px',
          border: 'none',
        }}
      />
    </div>
  );
}
