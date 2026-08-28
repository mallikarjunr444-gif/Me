import fs from 'fs';
import path from 'path';

const LINKEDIN_URL = 'https://www.linkedin.com/in/mallikarjunr-com/';
const GITHUB_URL = 'https://github.com/mallikarjunr444-gif';
const KAGGLE_URL = 'https://www.kaggle.com/mallikarjunr1';
const CREDLY_URL = 'https://www.credly.com/users/mallikarjun-r.2d337356/badges';

const sourcePath = path.resolve('cloned_sites/jackiezhang_co_za_work/index.html');
const destPath = path.resolve('public/jackie_work/index.html');

let html = fs.readFileSync(sourcePath, 'utf8');

// Replace title & meta
html = html.replace(/<title>.*?<\/title>/gi, '<title>Mallikarjun R | Work</title>');
html = html.replace(/content="Hey there, I'm Jackie.*?"/gi, 'content="Mallikarjun R — AI Engineer, Cloud Builder & Founder."');
html = html.replace(/<meta property="og:title" content=".*?">/gi, '<meta property="og:title" content="Mallikarjun R | Work">');
html = html.replace(/<meta name="twitter:title" content=".*?">/gi, '<meta name="twitter:title" content="Mallikarjun R | Work">');

// Text replacements in SSR HTML
html = html.replaceAll('Zhang', 'Mallikarjun.R');
html = html.replaceAll('Grew up in a resturant', 'AI × Cloud × DevOps');
html = html.replaceAll('Cape Town', 'Bengaluru');
html = html.replaceAll('South Africa', 'India');

// Top head shield
const headShield = `
<style id="work-page-clean-shield">
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    background: #181716 !important;
    max-width: 100vw !important;
    overflow-x: hidden !important;
  }
  
  /* Ensure root Framer container scales properly and centered */
  .framer-Zfc2C {
    margin: 0 auto !important;
    max-width: 100vw !important;
    position: relative !important;
  }

  /* Clothing tag portrait */
  .clothing-tag-portrait {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: center 15% !important;
    border-radius: 12px !important;
    display: block !important;
  }

  /* Strict height for spiral notebook wire binding */
  .framer-1o1b9f9,
  [data-framer-name="Spiral note"] .framer-1o1b9f9,
  .framer-pet3hu .framer-1o1b9f9 {
    height: 41px !important;
    max-height: 41px !important;
    min-height: 41px !important;
    overflow: hidden !important;
    position: relative !important;
    display: block !important;
    width: 100% !important;
  }

  /* Interactive pointer styles */
  a, [data-framer-name="Connect"], [data-framer-name="About"], [data-framer-name="Work"] {
    cursor: pointer !important;
  }
</style>
<script>
(function() {
  var LK = "${LINKEDIN_URL}";
  var BLOCKED = ['x.com', 'twitter.com', 'jackie', '1953203804113125820', 'whosspeaking', 'tf2048', 'framer.website', 'jackiezhang'];

  function isLegacy(u) {
    if (!u || typeof u !== 'string') return false;
    var lo = u.toLowerCase();
    for (var i = 0; i < BLOCKED.length; i++) {
      if (lo.indexOf(BLOCKED[i]) !== -1) return true;
    }
    return false;
  }

  var realOpen = window.open;
  window.open = function(u, t, f) {
    if (isLegacy(u)) return realOpen.call(window, LK, '_blank', 'noopener,noreferrer');
    return realOpen.call(window, u, t, f);
  };
})();
</script>
`;

html = html.replace('<head>', '<head>\n' + headShield);

// Bottom script
const bottomScript = `
<script>
(function() {
  var LK = "${LINKEDIN_URL}";
  var GH = "${GITHUB_URL}";
  var KG = "${KAGGLE_URL}";
  var CR = "${CREDLY_URL}";

  function sendHeight() {
    try {
      var root = document.querySelector('.framer-Zfc2C') || document.querySelector('#main') || document.body;
      var h = Math.ceil(root.getBoundingClientRect ? root.getBoundingClientRect().height : root.offsetHeight);
      if (h > 600 && h < 6000) {
        window.parent.postMessage({ type: 'SET_HEIGHT', height: h }, '*');
      }
    } catch(e) {}
  }

  function syncDOM() {
    sendHeight();

    // 1. Portrait on Tag
    var clothingTags = document.querySelectorAll('.framer-f3pk7n, [data-framer-name="Clothing tag 01"], [data-framer-name="Clothing tag 02"], .framer-8s5eq');
    clothingTags.forEach(function(tag) {
      var img = tag.querySelector('img');
      if (img) {
        if (!img.src.includes('mallikarjun-portrait.jpg')) {
          img.src = 'assets/images/mallikarjun-portrait.jpg';
        }
        img.className = 'clothing-tag-portrait';
        img.alt = 'Mallikarjun R';
      } else if (!tag.querySelector('.custom-portrait-wrap')) {
        var wrap = document.createElement('div');
        wrap.className = 'custom-portrait-wrap';
        wrap.style.cssText = 'position:absolute; inset:0; width:100%; height:100%; overflow:hidden; border-radius:12px;';
        wrap.innerHTML = '<img class="clothing-tag-portrait" src="assets/images/mallikarjun-portrait.jpg" alt="Mallikarjun R" />';
        tag.appendChild(wrap);
      }
    });

    // 2. Pulse -> VISION X
    var pulseLinks = document.querySelectorAll('a[href*="pulseliveco"], .framer-rdqgi5');
    pulseLinks.forEach(function(link) {
      link.href = GH;
      var titleP = link.querySelector('p');
      if (titleP) titleP.textContent = 'VISION X';
    });

    // 3. CRT Monitor -> MALLIKARJUN R
    var crtLinks = document.querySelectorAll('a[href*="dotslash"], .framer-dkhbbb');
    crtLinks.forEach(function(link) {
      link.href = GH;
      var titleP = link.querySelector('p');
      if (titleP) titleP.textContent = 'MALLIKARJUN R';
    });
  }

  window.addEventListener('DOMContentLoaded', syncDOM);
  window.addEventListener('load', syncDOM);
  window.addEventListener('resize', sendHeight);
  setInterval(syncDOM, 300);

  // Click interceptor
  window.addEventListener('click', function(e) {
    var el = e.target;
    while (el && el !== document.body && el !== document.documentElement) {
      var text = (el.textContent || '').trim().toLowerCase();
      var name = el.getAttribute ? (el.getAttribute('data-framer-name') || '') : '';
      var href = el.getAttribute ? (el.getAttribute('href') || el.getAttribute('to') || '') : '';
      var tag = el.tagName ? el.tagName.toLowerCase() : '';

      // External link
      if (tag === 'a' && href && (href.startsWith('http://') || href.startsWith('https://'))) {
        var hLow = href.toLowerCase();
        if (hLow.includes('x.com') || hLow.includes('twitter') || hLow.includes('jackie') || hLow.includes('1953203804113125820') || hLow.includes('whosspeaking') || hLow.includes('tf2048') || hLow.includes('framer') || hLow.includes('jackiezhang')) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          window.open(LK, '_blank', 'noopener,noreferrer');
          return false;
        }
        if (hLow.includes('github.com') || hLow.includes('linkedin.com') || hLow.includes('kaggle.com') || hLow.includes('credly.com') || hLow.includes('google.com')) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          window.open(href, '_blank', 'noopener,noreferrer');
          return false;
        }
      }

      // Connect Drawer
      if (name === 'Connect' || text === 'connect' || href.includes('connect') || (el.className && typeof el.className === 'string' && el.className.includes('1t6lft1'))) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        window.parent.postMessage({ type: 'OPEN_CONNECT' }, '*');
        return false;
      }

      // About Navigation
      if (text === 'about' || text === 'about me' || href === './' || href === '/' || href === '#about' || name === 'Logo' || (el.className && typeof el.className === 'string' && el.className.includes('3v0uqz'))) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        window.parent.postMessage({ type: 'NAVIGATE', page: 'about' }, '*');
        return false;
      }

      // Work Navigation
      if (text === 'work' || name === 'Work' || href === '#work') {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        window.parent.postMessage({ type: 'NAVIGATE', page: 'work' }, '*');
        return false;
      }

      el = el.parentElement;
    }
  }, true);
})();
</script>
`;

html = html.replace('</body>', bottomScript + '\n</body>');

fs.writeFileSync(destPath, html, 'utf8');
console.log('Pristine public/jackie_work/index.html generated successfully from cloned source!');
