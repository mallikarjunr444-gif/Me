import React, { useState, useEffect, useRef } from 'react';

export function JackieWorkPage({ onNavigate, onOpenConnect, onSelectProject }) {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(4200);

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data) {
        if (e.data.type === 'SET_HEIGHT' && typeof e.data.height === 'number') {
          setIframeHeight(Math.max(e.data.height + 40, 2400));
        } else if (e.data.type === 'NAVIGATE' && onNavigate) {
          onNavigate(e.data.page || 'about');
        } else if (e.data.type === 'OPEN_CONNECT' && onOpenConnect) {
          onOpenConnect();
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onNavigate, onOpenConnect]);

  const handleIframeLoad = () => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
        if (doc && doc.body) {
          const calculatedHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
          if (calculatedHeight > 800) {
            setIframeHeight(calculatedHeight + 40);
          }

          // Inject click interception into iframe for instant React navigation
          doc.addEventListener('click', (e) => {
            const anchor = e.target.closest('a');
            if (anchor) {
              const href = anchor.getAttribute('href') || '';
              const text = (anchor.innerText || '').trim().toLowerCase();
              if (href === '/' || href.includes('about') || text === 'about') {
                e.preventDefault();
                if (onNavigate) onNavigate('about');
              } else if (href.includes('connect') || text === 'connect') {
                e.preventDefault();
                if (onOpenConnect) onOpenConnect();
              }
            }
          });
        }
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div className="w-full min-h-screen relative select-none bg-[#181716]">
      {/* 1:1 Pixel-Perfect Work Page Replica with Full Interactivity */}
      <iframe
        ref={iframeRef}
        src="/jackie_work/index.html"
        onLoad={handleIframeLoad}
        title="Work Page"
        className="w-full border-0 bg-[#181716] block"
        style={{
          width: '100%',
          height: `${iframeHeight}px`,
          minHeight: '2600px',
          border: 'none',
          overflow: 'hidden',
          display: 'block'
        }}
        scrolling="no"
      />
    </div>
  );
}
