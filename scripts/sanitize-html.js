import fs from 'fs';
import path from 'path';

const LINKEDIN_URL = 'https://www.linkedin.com/in/mallikarjunr-com/';

function cleanHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Hard string replace of all legacy URLs
  content = content.replaceAll(/https?:\/\/(www\.)?(x|twitter)\.com\/jackie_zhang_ls[^\s"'>]*/gi, LINKEDIN_URL);
  content = content.replaceAll(/https?:\/\/(www\.)?x\.com\/[^\s"'>]*1953203804113125820[^\s"'>]*/gi, LINKEDIN_URL);
  content = content.replaceAll(/https?:\/\/whosspeaking\.framer\.website[^\s"'>]*/gi, LINKEDIN_URL);
  content = content.replaceAll(/https?:\/\/tf2048\.io[^\s"'>]*/gi, LINKEDIN_URL);
  content = content.replaceAll(/mailto:lapsun\.j\.zhang@gmail\.com/gi, 'mailto:mallikarjunr444@gmail.com');

  // 2. Remove all legacy name mentions
  content = content.replaceAll(/Jackie Zhang/gi, 'Mallikarjun R');
  content = content.replaceAll(/jackie_zhang/gi, 'mallikarjunr');

  // 3. Fix bottom click delegator in the HTML file
  const badBlockRegex = /\/\/\s*1\.\s*External Links[\s\S]*?window\.parent\.postMessage\(\{\s*type:\s*'OPEN_URL'[\s\S]*?return false;\s*\}\s*\}/gi;
  
  const cleanExternalLinkBlock = `
      // 1. External Links: strictly route to Mallikarjun socials or LinkedIn
      if (tag === 'a' && href && (href.startsWith('http://') || href.startsWith('https://'))) {
        var hLow = href.toLowerCase();
        if (hLow.includes('x.com') || hLow.includes('twitter') || hLow.includes('jackie') || hLow.includes('1953203804113125820') || hLow.includes('whosspeaking') || hLow.includes('tf2048') || hLow.includes('framer')) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          window.open('${LINKEDIN_URL}', '_blank', 'noopener,noreferrer');
          return false;
        }
        if (hLow.includes('github.com') || hLow.includes('linkedin.com') || hLow.includes('kaggle.com') || hLow.includes('credly.com') || hLow.includes('google.com')) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          window.open(href, '_blank', 'noopener,noreferrer');
          return false;
        }
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
  `;

  content = content.replace(badBlockRegex, cleanExternalLinkBlock);

  // 4. Overwrite window.open at the very top of <head>
  const headShield = `
<script>
(function() {
  var LK = "${LINKEDIN_URL}";
  var realOpen = window.open;
  window.open = function(u, t, f) {
    if (typeof u === 'string') {
      var s = u.toLowerCase();
      if (s.includes('x.com') || s.includes('twitter.com') || s.includes('jackie') || s.includes('1953203804113125820') || s.includes('whosspeaking') || s.includes('tf2048') || s.includes('framer.website')) {
        return realOpen.call(window, LK, '_blank', 'noopener,noreferrer');
      }
    }
    return realOpen.call(window, u, t, f);
  };
})();
</script>
`;
  if (!content.includes('var LK = ')) {
    content = content.replace('<head>', '<head>\n' + headShield);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Cleaned and secured:', filePath);
}

cleanHtmlFile(path.resolve('public/jackie_about/index.html'));
cleanHtmlFile(path.resolve('public/jackie_work/index.html'));
cleanHtmlFile(path.resolve('f18170.html'));
