import fs from 'fs';
import path from 'path';

const LINKEDIN_URL = 'https://www.linkedin.com/in/mallikarjunr-com/';

function sanitizeFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace any instance of twitter/x status link or jackie zhang links with LinkedIn
  content = content.replaceAll(/https?:\/\/(www\.)?(x|twitter)\.com\/jackie_zhang_ls[^\s"'>]*/gi, LINKEDIN_URL);
  content = content.replaceAll(/https?:\/\/(www\.)?x\.com\/[^\s"'>]*1953203804113125820[^\s"'>]*/gi, LINKEDIN_URL);
  content = content.replaceAll(/https?:\/\/whosspeaking\.framer\.website[^\s"'>]*/gi, LINKEDIN_URL);
  content = content.replaceAll(/https?:\/\/tf2048\.io[^\s"'>]*/gi, LINKEDIN_URL);
  content = content.replaceAll(/mailto:lapsun\.j\.zhang@gmail\.com/gi, 'mailto:mallikarjunr444@gmail.com');

  // Inject a top-level inline script in head to redirect any legacy link directly to LinkedIn
  const sanitizerSnippet = `
<script>
(function() {
  var LINKEDIN = "${LINKEDIN_URL}";

  // Overwrite window.open: if any attempt is made to open twitter/jackie links, redirect to LinkedIn
  var origOpen = window.open;
  window.open = function(url, target, features) {
    if (typeof url === 'string') {
      var u = url.toLowerCase();
      if (u.includes('x.com') || u.includes('twitter.com') || u.includes('jackie') || u.includes('1953203804113125820') || u.includes('whosspeaking') || u.includes('tf2048') || u.includes('framer.website')) {
        return origOpen.call(window, LINKEDIN, target || '_blank', features || 'noopener,noreferrer');
      }
    }
    return origOpen.call(window, url, target, features);
  };

  // Continuous DOM scrubber: rewrite legacy URLs to LinkedIn
  function scrubLinks() {
    var allA = document.querySelectorAll('a, [href], [data-href]');
    allA.forEach(function(el) {
      var h = (el.getAttribute('href') || el.getAttribute('data-href') || '').toLowerCase();
      if (h.includes('x.com') || h.includes('twitter') || h.includes('jackie') || h.includes('1953203804113125820') || h.includes('whosspeaking') || h.includes('tf2048') || h.includes('framer.website')) {
        el.setAttribute('href', LINKEDIN);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
        el.onclick = function(e) {
          e.preventDefault();
          e.stopPropagation();
          window.open(LINKEDIN, '_blank', 'noopener,noreferrer');
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
      if (h.includes('x.com') || h.includes('twitter') || h.includes('jackie') || h.includes('1953203804113125820') || h.includes('whosspeaking') || h.includes('tf2048') || h.includes('framer.website')) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        window.open(LINKEDIN, '_blank', 'noopener,noreferrer');
        return false;
      }
      el = el.parentElement;
    }
  }, true);
})();
</script>
`;

  // Remove old sanitizer snippet if present
  content = content.replace(/<script>\s*\(function\(\)\s*\{\s*\/\/\s*Overwrite window\.open[\s\S]*?<\/script>/gi, '');
  content = content.replace('<head>', '<head>\n' + sanitizerSnippet);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Sanitized & redirected to LinkedIn:', filePath);
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
  s = s.replaceAll(/https?:\/\/(www\.)?(x|twitter)\.com\/jackie_zhang_ls[^\s"'>\\]*/gi, LINKEDIN_URL);
  s = s.replaceAll(/https?:\/\/(www\.)?x\.com\/[^\s"'>\\]*1953203804113125820[^\s"'>\\]*/gi, LINKEDIN_URL);
  fs.writeFileSync(scratchPath, s, 'utf8');
  console.log('Sanitized scratch/uxmagic_screen.json to LinkedIn');
}
