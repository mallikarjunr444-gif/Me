import React, { useState, useEffect, useRef } from 'react';

export function JackieWorkPage({ onNavigateHome, onSelectProject }) {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(3800);

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data && e.data.type === 'SET_HEIGHT' && typeof e.data.height === 'number') {
        setIframeHeight(Math.max(e.data.height + 50, 2000));
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleIframeLoad = () => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
        if (doc && doc.body) {
          const calculatedHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
          if (calculatedHeight > 500) {
            setIframeHeight(calculatedHeight + 50);
          }
        }
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div className="w-full relative select-none -mx-4 sm:-mx-8">
      {/* 100% Cloned Jackie Zhang Work Page */}
      <iframe
        ref={iframeRef}
        src="/jackie_work/index.html"
        onLoad={handleIframeLoad}
        title="Cloned Work Page"
        className="w-full border-0 rounded-2xl bg-transparent transition-all duration-300"
        style={{
          width: '100%',
          height: `${iframeHeight}px`,
          minHeight: '2200px',
          border: 'none',
          overflow: 'hidden',
          display: 'block'
        }}
        scrolling="no"
      />
    </div>
  );
}
