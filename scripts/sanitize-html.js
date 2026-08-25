import fs from 'fs';
import path from 'path';

const BLOCKED_URL = '#';

function cleanHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Hard string replace of all legacy URLs & Twitter status links
  content = content.replaceAll(/https?:\/\/(www\.)?(x|twitter)\.com\/jackie_zhang_ls[^\s"'>]*/gi, BLOCKED_URL);
  content = content.replaceAll(/https?:\/\/(www\.)?x\.com\/[^\s"'>]*1953203804113125820[^\s"'>]*/gi, BLOCKED_URL);
  content = content.replaceAll(/https?:\/\/(www\.)?twitter\.com\/[^\s"'>]*1953203804113125820[^\s"'>]*/gi, BLOCKED_URL);
  content = content.replaceAll(/https?:\/\/whosspeaking\.framer\.website[^\s"'>]*/gi, BLOCKED_URL);
  content = content.replaceAll(/https?:\/\/tf2048\.io[^\s"'>]*/gi, BLOCKED_URL);
  content = content.replaceAll(/mailto:lapsun\.j\.zhang@gmail\.com/gi, 'mailto:mallikarjunr444@gmail.com');

  // 2. Remove all legacy names
  content = content.replaceAll(/Jackie Zhang/gi, 'Mallikarjun R');
  content = content.replaceAll(/jackie_zhang/gi, 'mallikarjunr');

  // 3. Inject our Ironclad Armor at the top of <head>
  const headShield = `
<script>
(function() {
  var BLOCKED = ['x.com', 'twitter.com', 'jackie', '1953203804113125820', 'whosspeaking', 'tf2048', 'framer.website', 'jackiezhang'];

  function isBlocked(u) {
    if (!u || typeof u !== 'string') return false;
    var lo = u.toLowerCase();
    for (var i = 0; i < BLOCKED.length; i++) {
      if (lo.indexOf(BLOCKED[i]) !== -1) return true;
    }
    return false;
  }

  // 1. Block window.open
  var realOpen = window.open;
  window.open = function(u, t, f) {
    if (isBlocked(u)) return null;
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

    // Global check on any <a> with legacy URLs
    document.querySelectorAll('a').forEach(function(a) {
      var h = (a.getAttribute('href') || '').toLowerCase();
      if (isBlocked(h)) {
        a.removeAttribute('href');
        a.removeAttribute('target');
        a.style.cursor = 'default';
        a.style.pointerEvents = 'none';
      }
    });
  }

  window.addEventListener('DOMContentLoaded', disableCardLinks);
  window.addEventListener('load', disableCardLinks);
  setInterval(disableCardLinks, 50);

  // Capture phase blocker on cutting board clicks
  ['click', 'pointerdown', 'mousedown', 'mouseup'].forEach(function(evtName) {
    window.addEventListener(evtName, function(e) {
      var el = e.target;
      while (el && el !== document.body && el !== document.documentElement) {
        if (el.matches && el.matches('.framer-6ctr7e-container, .framer-11nqq4i-container, .framer-5zt1ho-container, .framer-1fickan-container, .framer-gnejcv-container, .framer-mqlzz-container, .framer-1xalfcs-container, .framer-1ggxag2-container, .framer-f5j56f-container, .framer-6ctr7e-container *, .framer-11nqq4i-container *, .framer-5zt1ho-container *, .framer-1fickan-container *, .framer-gnejcv-container *, .framer-mqlzz-container *, .framer-1xalfcs-container *, .framer-1ggxag2-container *, .framer-f5j56f-container *')) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          return false;
        }
        var h = (el.getAttribute ? (el.getAttribute('href') || el.getAttribute('to') || '') : '').toLowerCase();
        if (isBlocked(h)) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
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
