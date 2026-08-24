import React, { useState, useEffect, useRef } from 'react';

export function JackieWorkPage({ onNavigate, onOpenConnect, onSelectProject }) {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(4200);

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data) {
        if (e.data.type === 'SET_HEIGHT' && typeof e.data.height === 'number') {
          setIframeHeight(Math.max(e.data.height + 40, 2400));
        } else if (e.data.type === 'NAVIGATE') {
          window.location.hash = e.data.page || 'about';
          if (onNavigate) onNavigate(e.data.page || 'about');
        } else if (e.data.type === 'OPEN_CONNECT') {
          if (onOpenConnect) onOpenConnect();
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onNavigate, onOpenConnect]);

  const attachListeners = () => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
        if (doc && doc.body) {
          const calculatedHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
          if (calculatedHeight > 800) {
            setIframeHeight(calculatedHeight + 40);
          }

          // Capture-phase click interceptor on iframe document
          doc.addEventListener(
            'click',
            (e) => {
              let el = e.target;
              while (el && el !== doc.body) {
                const text = (el.innerText || '').trim().toLowerCase();
                const href = (el.getAttribute && (el.getAttribute('href') || el.getAttribute('to'))) || '';

                if (text === 'about' || href.includes('about') || href === '/' || href === '#about') {
                  e.preventDefault();
                  e.stopPropagation();
                  window.location.hash = 'about';
                  if (onNavigate) onNavigate('about');
                  return;
                }

                if (text === 'connect' || href.includes('connect') || href === '#connect') {
                  e.preventDefault();
                  e.stopPropagation();
                  if (onOpenConnect) onOpenConnect();
                  return;
                }

                if (
                  el.getAttribute &&
                  (el.getAttribute('data-framer-name') === 'Logo' ||
                    (el.className && typeof el.className === 'string' && el.className.includes('Logo')))
                ) {
                  e.preventDefault();
                  e.stopPropagation();
                  window.location.hash = 'about';
                  if (onNavigate) onNavigate('about');
                  return;
                }

                el = el.parentElement;
              }
            },
            true // Capture phase to intercept before Framer
          );
        }
      }
    } catch {
      // Ignore cross-origin issues if any
    }
  };

  useEffect(() => {
    const interval = setInterval(attachListeners, 500);
    return () => clearInterval(interval);
  }, [onNavigate, onOpenConnect]);

  return (
    <div className="w-full min-h-screen relative select-none bg-[#181716]">
      {/* 1:1 Pixel-Perfect Work Page with Live Navigation Hooked Up */}
      <iframe
        ref={iframeRef}
        src="/jackie_work/index.html"
        onLoad={attachListeners}
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
