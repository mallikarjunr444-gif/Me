import React, { useState, useEffect, useRef, useCallback } from 'react';
import { cuttingBoardData } from '../data/cuttingBoardData';

const BLOCKED_PATTERNS = ['x.com', 'twitter.com', 'jackie', '1953203804113125820', 'whosspeaking', 'tf2048', 'framer.website'];

function isBlocked(url) {
  if (!url) return false;
  const u = url.toLowerCase();
  return BLOCKED_PATTERNS.some(p => u.includes(p));
}

export function JackieAboutPage({ onNavigate, onOpenConnect }) {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(3800);
  const attachedRef = useRef(false);

  const sendConfigToIframe = useCallback(() => {
    try {
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage({ type: 'SYNC_CUTTING_BOARD', cards: cuttingBoardData }, '*');
      }
    } catch { /* cross-origin */ }
  }, []);

  useEffect(() => {
    const handleMessage = (e) => {
      if (!e.data) return;
      const { type, height, page, url } = e.data;
      if (type === 'SET_ABOUT_HEIGHT' && typeof height === 'number') {
        setIframeHeight(Math.max(height + 40, 2400));
      } else if (type === 'NAVIGATE') {
        window.location.hash = page || 'about';
        if (onNavigate) onNavigate(page || 'about');
      } else if (type === 'OPEN_CONNECT') {
        if (onOpenConnect) onOpenConnect();
      } else if (type === 'OPEN_URL' && url) {
        // Silently block legacy links — do nothing
        if (!isBlocked(url)) {
          window.open(url, '_blank', 'noopener,noreferrer');
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onNavigate, onOpenConnect]);

  const scrubIframeLinks = useCallback(() => {
    try {
      const doc = iframeRef.current?.contentDocument || iframeRef.current?.contentWindow?.document;
      if (!doc?.body) return;

      // Override window.open inside the iframe
      try {
        const iframeWin = iframeRef.current.contentWindow;
        if (iframeWin && !iframeWin.__linksScrubbed) {
          const origOpen = iframeWin.open.bind(iframeWin);
          iframeWin.open = function(url, target, features) {
            if (isBlocked(url)) return null;
            return origOpen(url, target, features);
          };
          iframeWin.__linksScrubbed = true;
        }
      } catch { /* cross-origin */ }

      // Remove hrefs from ALL <a> tags pointing to blocked URLs
      doc.querySelectorAll('a[href]').forEach(a => {
        const href = a.getAttribute('href') || '';
        if (isBlocked(href)) {
          a.removeAttribute('href');
          a.removeAttribute('target');
          a.style.cursor = 'default';
          a.onclick = e => { e.preventDefault(); e.stopImmediatePropagation(); return false; };
        }
      });

      // Remove hrefs from ALL cutting board slot containers
      const slots = [
        '.framer-6ctr7e-container', '.framer-11nqq4i-container', '.framer-5zt1ho-container',
        '.framer-1fickan-container', '.framer-gnejcv-container', '.framer-mqlzz-container',
        '.framer-1xalfcs-container', '.framer-1ggxag2-container', '.framer-f5j56f-container'
      ];
      slots.forEach(sel => {
        const container = doc.querySelector(sel);
        if (!container) return;
        container.querySelectorAll('a').forEach(a => {
          a.removeAttribute('href');
          a.removeAttribute('target');
          a.style.cursor = 'default';
          a.onclick = e => { e.preventDefault(); e.stopImmediatePropagation(); return false; };
        });
      });

      // Set height
      const h = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
      if (h > 800) setIframeHeight(h + 40);
    } catch { /* ignore */ }
  }, []);

  const attachClickGuard = useCallback(() => {
    try {
      const doc = iframeRef.current?.contentDocument || iframeRef.current?.contentWindow?.document;
      if (!doc?.body || doc.__clickGuardAttached) return;
      doc.__clickGuardAttached = true;

      doc.addEventListener('click', (e) => {
        let el = e.target;
        while (el && el !== doc.body) {
          const href = (el.getAttribute?.('href') || el.getAttribute?.('to') || '').toLowerCase();
          // Block ALL external clicks that don't go to our approved sites
          if (href.startsWith('http://') || href.startsWith('https://')) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            // Only open if explicitly allowed
            const allowed = ['github.com/mallikarjunr', 'linkedin.com/in/mallikarjunr', 'kaggle.com/mallikarjunr', 'credly.com/users/mallikarjun'];
            if (allowed.some(a => href.includes(a))) {
              window.open(el.getAttribute('href'), '_blank', 'noopener,noreferrer');
            }
            return false;
          }
          const text = (el.innerText || '').trim().toLowerCase();
          const name = el.getAttribute?.('data-framer-name') || '';
          if (href.includes('connect') || href.startsWith('mailto:') || text.includes("let's chat")) {
            e.preventDefault(); e.stopPropagation();
            if (onOpenConnect) onOpenConnect();
            return;
          }
          if (text === 'work' || name === 'Work') {
            e.preventDefault(); e.stopPropagation();
            window.location.hash = 'work';
            if (onNavigate) onNavigate('work');
            return;
          }
          if (text === 'about' || name === 'Logo' || href === '/' || href === './') {
            e.preventDefault(); e.stopPropagation();
            window.location.hash = 'about';
            if (onNavigate) onNavigate('about');
            return;
          }
          el = el.parentElement;
        }
      }, true);
    } catch { /* ignore */ }
  }, [onNavigate, onOpenConnect]);

  const attachListeners = useCallback(() => {
    sendConfigToIframe();
    scrubIframeLinks();
    attachClickGuard();
  }, [sendConfigToIframe, scrubIframeLinks, attachClickGuard]);

  useEffect(() => {
    // Run frequently so we catch Framer's dynamic re-renders
    const interval = setInterval(attachListeners, 300);
    return () => clearInterval(interval);
  }, [attachListeners]);

  return (
    <div className="w-full min-h-screen relative select-none bg-[#181716]">
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

