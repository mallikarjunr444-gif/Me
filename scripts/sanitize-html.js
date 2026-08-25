import fs from 'fs';
import path from 'path';

const LINKEDIN_URL = 'https://www.linkedin.com/in/mallikarjunr-com/';

function cleanHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Hard string replace of all legacy URLs & Twitter status links to LinkedIn
  content = content.replaceAll(/https?:\/\/(www\.)?(x|twitter)\.com\/jackie_zhang_ls[^\s"'>]*/gi, LINKEDIN_URL);
  content = content.replaceAll(/https?:\/\/(www\.)?x\.com\/[^\s"'>]*1953203804113125820[^\s"'>]*/gi, LINKEDIN_URL);
  content = content.replaceAll(/https?:\/\/(www\.)?twitter\.com\/[^\s"'>]*1953203804113125820[^\s"'>]*/gi, LINKEDIN_URL);
  content = content.replaceAll(/https?:\/\/whosspeaking\.framer\.website[^\s"'>]*/gi, LINKEDIN_URL);
  content = content.replaceAll(/https?:\/\/tf2048\.io[^\s"'>]*/gi, LINKEDIN_URL);
  content = content.replaceAll(/mailto:lapsun\.j\.zhang@gmail\.com/gi, 'mailto:mallikarjunr444@gmail.com');

  // 2. Remove all legacy names
  content = content.replaceAll(/Jackie Zhang/gi, 'Mallikarjun R');
  content = content.replaceAll(/jackie_zhang/gi, 'mallikarjunr');

  // 3. Inject our Ironclad Armor at the top of <head>
  const headShield = `
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

  // 1. Overwrite window.open to redirect legacy links to LinkedIn
  var realOpen = window.open;
  window.open = function(u, t, f) {
    if (isLegacy(u)) return realOpen.call(window, LK, '_blank', 'noopener,noreferrer');
    return realOpen.call(window, u, t, f);
  };

  // Continuous DOM link unhooker
  function disableCardLinks() {
    // 9 Cutting board slots
    var cuttingBoardSlots = [
      '.framer-6ctr7e-container',
      '.framer-11nqq4i-container',
      '.framer-5zt1ho-container',
      '.framer-1fickan-container',
      '.framer-gnejcv-container',
      '.framer-mqlzz-container',
      '.framer-1xalfcs-container',
      '.framer-1ggxag2-container',
      '.framer-f5j56f-container'
    ];

    cuttingBoardSlots.forEach(function(sel) {
      var container = document.querySelector(sel);
      if (!container) return;
      var links = container.querySelectorAll('a, [href]');
      links.forEach(function(a) {
        a.removeAttribute('href');
        a.removeAttribute('target');
        a.removeAttribute('to');
        a.style.cursor = 'default';
        a.onclick = function(e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          return false;
        };
      });
    });

    // Global check on any <a> with legacy URLs - rewrite to LinkedIn
    document.querySelectorAll('a').forEach(function(a) {
      var h = (a.getAttribute('href') || '').toLowerCase();
      if (isLegacy(h)) {
        a.setAttribute('href', LK);
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
        a.style.cursor = 'pointer';
        a.style.pointerEvents = 'auto';
      }
    });
  }

  window.addEventListener('DOMContentLoaded', disableCardLinks);
  window.addEventListener('load', disableCardLinks);
  setInterval(disableCardLinks, 50);

  // Capture phase blocker on legacy URLs -> open LinkedIn smoothly
  ['click'].forEach(function(evtName) {
    window.addEventListener(evtName, function(e) {
      var el = e.target;
      while (el && el !== document.body && el !== document.documentElement) {
        var h = (el.getAttribute ? (el.getAttribute('href') || el.getAttribute('to') || '') : '').toLowerCase();
        if (isLegacy(h)) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          window.open(LK, '_blank', 'noopener,noreferrer');
          return false;
        }
        el = el.parentElement;
      }
    }, true);
  });
})();
</script>
`;

  // Strip previous injected shields
  content = content.replace(/<script>\s*\(function\(\)\s*\{\s*var LK = [\s\S]*?<\/script>/gi, '');
  content = content.replace(/<script>\s*\(function\(\)\s*\{\s*\/\/\s*Overwrite window\.open[\s\S]*?<\/script>/gi, '');
  content = content.replace('<head>', '<head>\n' + headShield);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Processed & Secured:', filePath);
}

cleanHtmlFile(path.resolve('public/jackie_about/index.html'));
cleanHtmlFile(path.resolve('public/jackie_work/index.html'));
cleanHtmlFile(path.resolve('f18170.html'));
