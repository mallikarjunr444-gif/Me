import fs from 'fs';
import path from 'path';

function sanitizeFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace any instance of twitter/x status link or jackie zhang links
  content = content.replaceAll(/https?:\/\/(www\.)?(x|twitter)\.com\/jackie_zhang_ls[^\s"'>]*/gi, '#');
  content = content.replaceAll(/https?:\/\/(www\.)?x\.com\/[^\s"'>]*1953203804113125820[^\s"'>]*/gi, '#');
  content = content.replaceAll(/https?:\/\/whosspeaking\.framer\.website[^\s"'>]*/gi, '#');
  content = content.replaceAll(/https?:\/\/tf2048\.io[^\s"'>]*/gi, '#');
  content = content.replaceAll(/mailto:lapsun\.j\.zhang@gmail\.com/gi, 'mailto:mallikarjunr444@gmail.com');

  // Inject a top-level inline script in head to neutralize any anchor creation or navigation
  const sanitizerSnippet = `
<script>
(function() {
  // Overwrite window.open to block any unwanted links
  var origOpen = window.open;
  window.open = function(url, target, features) {
    if (typeof url === 'string') {
      var u = url.toLowerCase();
      if (u.includes('x.com') || u.includes('twitter.com') || u.includes('jackie') || u.includes('1953203804113125820') || u.includes('whosspeaking') || u.includes('tf2048') || u.includes('framer')) {
        console.warn('Blocked opening legacy link:', url);
        return null;
      }
    }
    return origOpen.call(window, url, target, features);
  };

  // Continuous DOM scrubber
  function scrubLinks() {
    var allA = document.querySelectorAll('a, [href], [data-href]');
    allA.forEach(function(el) {
      var h = (el.getAttribute('href') || el.getAttribute('data-href') || '').toLowerCase();
      if (h.includes('x.com') || h.includes('twitter') || h.includes('jackie') || h.includes('1953203804113125820') || h.includes('whosspeaking') || h.includes('tf2048') || h.includes('framer.website') || h.includes('framer.com')) {
        el.removeAttribute('href');
        el.removeAttribute('target');
        el.removeAttribute('to');
        el.setAttribute('role', 'presentation');
        el.style.cursor = 'default';
        el.onclick = function(e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          return false;
        };
      }

      // Neutralize cutting board mat cards specifically
      if (el.closest && el.closest('.framer-6ctr7e-container, .framer-11nqq4i-container, .framer-5zt1ho-container, .framer-1fickan-container, .framer-gnejcv-container, .framer-mqlzz-container, .framer-1xalfcs-container, .framer-1ggxag2-container, .framer-f5j56f-container')) {
        el.removeAttribute('href');
        el.removeAttribute('target');
        el.removeAttribute('to');
        el.setAttribute('role', 'presentation');
        el.style.cursor = 'default';
        el.onclick = function(e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          return false;
        };
      }
    });
  }

  window.addEventListener('DOMContentLoaded', scrubLinks);
  window.addEventListener('load', scrubLinks);
  setInterval(scrubLinks, 100);

  // Capture phase click interceptor on document
  document.addEventListener('click', function(e) {
    var el = e.target;
    while (el && el !== document.body && el !== document.documentElement) {
      var h = (el.getAttribute ? (el.getAttribute('href') || el.getAttribute('to') || '') : '').toLowerCase();
      if (h.includes('x.com') || h.includes('twitter') || h.includes('jackie') || h.includes('1953203804113125820') || h.includes('whosspeaking') || h.includes('tf2048') || h.includes('framer.website') || h.includes('framer.com')) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
      if (el.closest && el.closest('.framer-6ctr7e-container, .framer-11nqq4i-container, .framer-5zt1ho-container, .framer-1fickan-container, .framer-gnejcv-container, .framer-mqlzz-container, .framer-1xalfcs-container, .framer-1ggxag2-container, .framer-f5j56f-container')) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
      el = el.parentElement;
    }
  }, true);
})();
</script>
`;

  if (!content.includes('// Overwrite window.open to block any unwanted links')) {
    content = content.replace('<head>', '<head>\n' + sanitizerSnippet);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Sanitized:', filePath);
}

const aboutPath = path.resolve('public/jackie_about/index.html');
const workPath = path.resolve('public/jackie_work/index.html');
const f18Path = path.resolve('f18170.html');

if (fs.existsSync(aboutPath)) sanitizeFile(aboutPath);
if (fs.existsSync(workPath)) sanitizeFile(workPath);
if (fs.existsSync(f18Path)) sanitizeFile(f18Path);

// Also sanitize scratch/uxmagic_screen.json
const scratchPath = path.resolve('scratch/uxmagic_screen.json');
if (fs.existsSync(scratchPath)) {
  let s = fs.readFileSync(scratchPath, 'utf8');
  s = s.replaceAll(/https?:\/\/(www\.)?(x|twitter)\.com\/jackie_zhang_ls[^\s"'>\\]*/gi, '#');
  s = s.replaceAll(/https?:\/\/(www\.)?x\.com\/[^\s"'>\\]*1953203804113125820[^\s"'>\\]*/gi, '#');
  fs.writeFileSync(scratchPath, s, 'utf8');
  console.log('Sanitized scratch/uxmagic_screen.json');
}
