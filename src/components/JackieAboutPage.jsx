import React, { useState, useEffect, useRef } from 'react';
import { cuttingBoardData } from '../data/cuttingBoardData';

export function JackieAboutPage({ onNavigate, onOpenConnect }) {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(3800);

  const sendConfigToIframe = () => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          {
            type: 'SYNC_CUTTING_BOARD',
            cards: cuttingBoardData
          },
          '*'
        );
      }
    } catch {
      // Ignore
    }
  };

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data) {
        if (e.data.type === 'SET_ABOUT_HEIGHT' && typeof e.data.height === 'number') {
          setIframeHeight(Math.max(e.data.height + 40, 2400));
        } else if (e.data.type === 'NAVIGATE') {
          window.location.hash = e.data.page || 'about';
          if (onNavigate) onNavigate(e.data.page || 'about');
        } else if (e.data.type === 'OPEN_CONNECT') {
          if (onOpenConnect) onOpenConnect();
        } else if (e.data.type === 'OPEN_URL' && e.data.url) {
          const u = e.data.url.toLowerCase();
          if (
            !u.includes('x.com') &&
            !u.includes('twitter.com') &&
            !u.includes('jackie') &&
            !u.includes('1953203804113125820') &&
            !u.includes('whosspeaking') &&
            !u.includes('tf2048') &&
            !u.includes('framer')
          ) {
            window.open(e.data.url, '_blank', 'noopener,noreferrer');
          }
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onNavigate, onOpenConnect]);

  const attachListeners = () => {
    try {
      sendConfigToIframe();

      if (iframeRef.current && iframeRef.current.contentWindow) {
        const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
        if (doc && doc.body) {
          const calculatedHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
          if (calculatedHeight > 800) {
            setIframeHeight(calculatedHeight + 40);
          }

          doc.addEventListener(
            'click',
            (e) => {
              let el = e.target;
              while (el && el !== doc.body) {
                const text = (el.innerText || '').trim().toLowerCase();
                const href = (el.getAttribute && (el.getAttribute('href') || el.getAttribute('to'))) || '';
                const hrefLower = href.toLowerCase();
                const name = el.getAttribute ? (el.getAttribute('data-framer-name') || '') : '';

                // Block any legacy links or cutting board card clicks
                if (
                  hrefLower.includes('x.com') ||
                  hrefLower.includes('twitter') ||
                  hrefLower.includes('jackie') ||
                  hrefLower.includes('1953203804113125820') ||
                  hrefLower.includes('whosspeaking') ||
                  hrefLower.includes('tf2048') ||
                  hrefLower.includes('framer') ||
                  (el.closest && el.closest('.framer-6ctr7e-container, .framer-11nqq4i-container, .framer-5zt1ho-container, .framer-1fickan-container, .framer-gnejcv-container, .framer-mqlzz-container, .framer-1xalfcs-container, .framer-1ggxag2-container, .framer-f5j56f-container'))
                ) {
                  e.preventDefault();
                  e.stopPropagation();
                  return;
                }

                // Let's chat / Connect Drawer handler
                if (text.includes("let's chat") || href.includes('connect') || href.startsWith('mailto:')) {
                  e.preventDefault();
                  e.stopPropagation();
                  if (onOpenConnect) onOpenConnect();
                  return;
                }

                // Legitimate External Links (GitHub, LinkedIn, Kaggle, Credly)
                if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
                  if (href.includes('github.com') || href.includes('linkedin.com') || href.includes('kaggle.com') || href.includes('credly.com') || href.includes('google.com')) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(href, '_blank', 'noopener,noreferrer');
                    return;
                  }
                  e.preventDefault();
                  e.stopPropagation();
                  return;
                }

                // Work Navigation
                if (text === 'work' || href.includes('work') || name === 'Work') {
                  e.preventDefault();
                  e.stopPropagation();
                  window.location.hash = 'work';
                  if (onNavigate) onNavigate('work');
                  return;
                }

                // Connect Drawer
                if (text === 'connect' || href.includes('connect') || name === 'Connect') {
                  e.preventDefault();
                  e.stopPropagation();
                  if (onOpenConnect) onOpenConnect();
                  return;
                }

                // About / Logo
                if (text === 'about' || href === '/' || href === '#about' || name === 'Logo') {
                  e.preventDefault();
                  e.stopPropagation();
                  window.location.hash = 'about';
                  if (onNavigate) onNavigate('about');
                  return;
                }

                el = el.parentElement;
              }
            },
            true
          );
        }
      }
    } catch {
      // Ignore cross-origin issues
    }
  };

  useEffect(() => {
    const interval = setInterval(attachListeners, 500);
    return () => clearInterval(interval);
  }, [onNavigate, onOpenConnect]);

  return (
    <div className="w-full min-h-screen relative select-none bg-[#181716]">
      {/* 1:1 Pixel-Perfect About Page Replica with Customizable Cutting Board Data */}
      <iframe
        ref={iframeRef}
        src="/jackie_about/index.html"
        onLoad={attachListeners}
        title="About Page"
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
