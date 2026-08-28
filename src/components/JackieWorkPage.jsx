import React, { useState, useEffect, useRef, useCallback } from 'react';
import { portfolioData } from '../data/portfolioData';

const LINKEDIN_URL = 'https://www.linkedin.com/in/mallikarjunr-com/';
const BLOCKED_PATTERNS = ['x.com', 'twitter.com', 'jackie', '1953203804113125820', 'whosspeaking', 'tf2048', 'framer.website', 'jackiezhang'];

function isLegacy(url) {
  if (!url || typeof url !== 'string') return false;
  const u = url.toLowerCase();
  return BLOCKED_PATTERNS.some(p => u.includes(p));
}

export function JackieWorkPage({ onNavigate, onOpenConnect, onSelectProject }) {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(2600);

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data) {
        if (e.data.type === 'SET_HEIGHT' && typeof e.data.height === 'number') {
          const clamped = Math.min(Math.max(e.data.height + 20, 1800), 8000);
          setIframeHeight(clamped);
        } else if (e.data.type === 'NAVIGATE') {
          window.location.hash = e.data.page || 'about';
          if (onNavigate) onNavigate(e.data.page || 'about');
        } else if (e.data.type === 'OPEN_CONNECT') {
          if (onOpenConnect) onOpenConnect();
        } else if (e.data.type === 'OPEN_URL' && e.data.url) {
          if (isLegacy(e.data.url)) {
            window.open(LINKEDIN_URL, '_blank', 'noopener,noreferrer');
            return;
          }
          window.open(e.data.url, '_blank', 'noopener,noreferrer');
        } else if (e.data.type === 'SELECT_PROJECT') {
          const matched = portfolioData.projects.find(
            (p) => p.id === e.data.projectId || p.title.toLowerCase().includes((e.data.title || '').toLowerCase())
          ) || portfolioData.projects[0];
          if (onSelectProject) onSelectProject(matched);
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onNavigate, onOpenConnect, onSelectProject]);

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
            if (isLegacy(url)) return origOpen(LINKEDIN_URL, target || '_blank', features || 'noopener,noreferrer');
            return origOpen(url, target, features);
          };
          iframeWin.__linksScrubbed = true;
        }
      } catch { /* cross-origin */ }

      // Rewrite legacy URLs to LinkedIn on all <a> tags
      doc.querySelectorAll('a[href]').forEach(a => {
        const href = a.getAttribute('href') || '';
        if (isLegacy(href)) {
          a.setAttribute('href', LINKEDIN_URL);
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.style.cursor = 'pointer';
        }
      });

      // Safely measure root element without recursive expansion
      const root = doc.querySelector('.framer-Zfc2C') || doc.querySelector('#main') || doc.body;
      if (root) {
        const measured = Math.ceil(root.getBoundingClientRect?.().height || root.offsetHeight || 2600);
        if (measured > 800 && measured < 10000) {
          setIframeHeight(measured + 20);
        }
      }
    } catch { /* ignore */ }
  }, []);

  const attachListeners = useCallback(() => {
    try {
      scrubIframeLinks();
      if (iframeRef.current && iframeRef.current.contentWindow) {
        const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
        if (doc && doc.body && !doc.__workClickGuardAttached) {
          doc.__workClickGuardAttached = true;

          // Capture-phase click interceptor on iframe document
          doc.addEventListener(
            'click',
            (e) => {
              let el = e.target;
              while (el && el !== doc.body) {
                const text = (el.innerText || '').trim().toLowerCase();
                const href = (el.getAttribute && (el.getAttribute('href') || el.getAttribute('to'))) || '';
                const tag = el.tagName ? el.tagName.toLowerCase() : '';

                // Replace legacy links with LinkedIn smoothly
                if (isLegacy(href) || isLegacy(text)) {
                  e.preventDefault();
                  e.stopPropagation();
                  e.stopImmediatePropagation();
                  window.open(LINKEDIN_URL, '_blank', 'noopener,noreferrer');
                  return false;
                }

                // 1. External Links (GitHub, LinkedIn, Credly, Kaggle)
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

                // 2. Specific social text clicks
                if (text.includes('github.com') || (text.includes('github') && (el.closest('a') || tag === 'a'))) {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open('https://github.com/mallikarjunr444-gif', '_blank', 'noopener,noreferrer');

                  return;
                }

                if (text.includes('linkedin.com') || (text.includes('linkedin') && (el.closest('a') || tag === 'a'))) {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open('https://www.linkedin.com/in/mallikarjunr-com/', '_blank', 'noopener,noreferrer');
                  return;
                }

                if (text.includes('credly') || href.includes('credly')) {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open('https://www.credly.com/users/mallikarjun-r.2d337356/badges', '_blank', 'noopener,noreferrer');
                  return;
                }

                if (text.includes('kaggle') || href.includes('kaggle')) {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open('https://www.kaggle.com/mallikarjunr1', '_blank', 'noopener,noreferrer');
                  return;
                }

                // 3. Navigation
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

                // 4. Project clicks
                if (text.includes('medicus labs')) {
                  e.preventDefault();
                  if (onSelectProject) {
                    const p = portfolioData.projects.find((pr) => pr.id === 'medicus-labs') || portfolioData.projects[0];
                    onSelectProject(p);
                  }
                  return;
                }

                if (text.includes('vision x')) {
                  e.preventDefault();
                  if (onSelectProject) {
                    const p = portfolioData.projects.find((pr) => pr.id === 'medicus-vision-triage') || portfolioData.projects[1] || portfolioData.projects[0];
                    onSelectProject(p);
                  }
                  return;
                }

                if (text.includes('orvex') || text.includes('game')) {
                  e.preventDefault();
                  if (onSelectProject) {
                    const p = portfolioData.projects.find((pr) => pr.id === 'medicus-doctor-hub') || portfolioData.projects[0];
                    onSelectProject(p);
                  }
                  return;
                }

                if (text.includes('tech news') || text.includes('cloud & devops')) {
                  e.preventDefault();
                  if (onSelectProject) {
                    const p = portfolioData.projects.find((pr) => pr.id === 'medicus-cloud-hipaa') || portfolioData.projects[0];
                    onSelectProject(p);
                  }
                  return;
                }

                el = el.parentElement;
              }
            },
            true // Capture phase
          );
        }
      }
    } catch {
      // Ignore cross-origin issues
    }
  }, [scrubIframeLinks, onNavigate, onOpenConnect, onSelectProject]);

  useEffect(() => {
    const interval = setInterval(attachListeners, 300);
    return () => clearInterval(interval);
  }, [attachListeners]);

  return (
    <div className="w-full min-h-screen relative select-none bg-[#181716] overflow-x-hidden">
      {/* 1:1 Cloned Work Page View with Personalized Artifacts (Luggage Tag, Vision X, CRT Monitor, Verified Links) */}
      <iframe
        ref={iframeRef}
        src="/jackie_work/index.html"
        onLoad={attachListeners}
        title="Work Page"
        className="w-full border-0 bg-[#181716] block"
        style={{
          width: '100%',
          height: `${iframeHeight}px`,
          minHeight: '100vh',
          border: 'none',
          overflow: 'hidden',
          display: 'block'
        }}
        scrolling="no"
      />

      {/* Clean Bottom Ending Signoff */}
      <div className="text-center pt-8 pb-12 border-t border-white/10 text-xs font-mono text-[#faecd8]/40 space-y-2 max-w-4xl mx-auto px-4">
        <div className="font-hand text-xl text-[#faecd8]/70">
          "Mallikarjun.R • Bengaluru, India • Still building :)"
        </div>
        <div>© {new Date().getFullYear()} Mallikarjun.R. All projects & systems verified.</div>
      </div>
    </div>
  );
}
