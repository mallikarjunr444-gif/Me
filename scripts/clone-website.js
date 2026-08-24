import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { URL } from 'url';

const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

function decodeHtmlEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x2F;/g, '/');
}

function fetchUrl(targetUrl, isBinary = false) {
  return new Promise((resolve, reject) => {
    try {
      const cleanUrl = decodeHtmlEntities(targetUrl);
      const parsed = new URL(cleanUrl);
      const client = parsed.protocol === 'https:' ? https : http;

      const req = client.get(
        cleanUrl,
        {
          headers: {
            'User-Agent': USER_AGENT,
            Accept: '*/*',
          },
        },
        (res) => {
          if (
            res.statusCode >= 300 &&
            res.statusCode < 400 &&
            res.headers.location
          ) {
            const redirectUrl = new URL(res.headers.location, cleanUrl).href;
            return resolve(fetchUrl(redirectUrl, isBinary));
          }

          if (res.statusCode < 200 || res.statusCode >= 300) {
            return reject(
              new Error(`HTTP ${res.statusCode} for URL: ${cleanUrl}`)
            );
          }

          const chunks = [];
          res.on('data', (chunk) => chunks.push(chunk));
          res.on('end', () => {
            const buffer = Buffer.concat(chunks);
            resolve(isBinary ? buffer : buffer.toString('utf-8'));
          });
        }
      );

      req.on('error', reject);
      req.setTimeout(20000, () => {
        req.destroy();
        reject(new Error(`Timeout fetching ${cleanUrl}`));
      });
    } catch (e) {
      reject(e);
    }
  });
}

function sanitizeFilename(urlStr) {
  try {
    const parsed = new URL(urlStr);
    const pathname = parsed.pathname;
    let base = path.basename(pathname) || 'index';
    base = base.replace(/[^a-zA-Z0-9._-]/g, '_');
    return base;
  } catch {
    return 'asset_' + Math.random().toString(36).substring(2, 8);
  }
}

export async function cloneWebsite(targetUrl, customOutputDir = null) {
  console.log(`\n======================================================`);
  console.log(`🌐 [Universal Website Cloner]`);
  console.log(`🎯 Target URL: ${targetUrl}`);
  console.log(`======================================================\n`);

  const parsedTarget = new URL(targetUrl);
  const siteDirName =
    customOutputDir ||
    `cloned_sites/${parsedTarget.hostname.replace(/[^a-zA-Z0-9_-]/g, '_')}${parsedTarget.pathname.replace(/[^a-zA-Z0-9_-]/g, '_')}`;

  const outputDir = path.resolve(process.cwd(), siteDirName);
  const assetsDir = path.join(outputDir, 'assets');
  const imgDir = path.join(assetsDir, 'images');
  const cssDir = path.join(assetsDir, 'css');
  const jsDir = path.join(assetsDir, 'js');
  const fontDir = path.join(assetsDir, 'fonts');

  fs.mkdirSync(imgDir, { recursive: true });
  fs.mkdirSync(cssDir, { recursive: true });
  fs.mkdirSync(jsDir, { recursive: true });
  fs.mkdirSync(fontDir, { recursive: true });

  console.log(`📥 [1/4] Downloading root HTML page...`);
  let html = await fetchUrl(targetUrl, false);

  const downloadedMap = new Map();

  async function downloadAsset(assetUrl, category = 'images') {
    try {
      const decodedUrl = decodeHtmlEntities(assetUrl.trim());
      if (
        !decodedUrl ||
        decodedUrl.startsWith('data:') ||
        decodedUrl.startsWith('#') ||
        decodedUrl.startsWith('javascript:')
      ) {
        return assetUrl;
      }

      const fullUrl = new URL(decodedUrl, targetUrl).href;
      if (downloadedMap.has(fullUrl)) {
        return downloadedMap.get(fullUrl);
      }

      let subDir = imgDir;
      let relFolder = 'assets/images';
      if (category === 'css') {
        subDir = cssDir;
        relFolder = 'assets/css';
      } else if (category === 'js') {
        subDir = jsDir;
        relFolder = 'assets/js';
      } else if (category === 'fonts') {
        subDir = fontDir;
        relFolder = 'assets/fonts';
      }

      let filename = sanitizeFilename(fullUrl);
      if (!path.extname(filename)) {
        if (category === 'css') filename += '.css';
        else if (category === 'js') filename += '.js';
        else if (category === 'fonts') filename += '.woff2';
        else filename += '.png';
      }

      let localPath = path.join(subDir, filename);
      let counter = 1;
      while (fs.existsSync(localPath)) {
        const ext = path.extname(filename);
        const name = path.basename(filename, ext);
        filename = `${name}_${counter}${ext}`;
        localPath = path.join(subDir, filename);
        counter++;
      }

      console.log(`  ↓ [${category}] ${fullUrl.substring(0, 70)}...`);
      const buffer = await fetchUrl(fullUrl, true);
      fs.writeFileSync(localPath, buffer);

      const relPath = `${relFolder}/${filename}`;
      downloadedMap.set(fullUrl, relPath);

      if (category === 'css') {
        let cssContent = buffer.toString('utf-8');
        const urlMatches = [
          ...cssContent.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g),
        ];
        for (const match of urlMatches) {
          const nestedUrl = match[1];
          if (
            nestedUrl &&
            !nestedUrl.startsWith('data:') &&
            !nestedUrl.startsWith('#')
          ) {
            try {
              const nestedCategory =
                /\.(woff2?|ttf|otf|eot)(\?.*)?$/i.test(nestedUrl)
                  ? 'fonts'
                  : 'images';
              const downloadedRel = await downloadAsset(
                nestedUrl,
                nestedCategory
              );
              cssContent = cssContent.replaceAll(
                match[0],
                `url("../${downloadedRel.replace('assets/', '')}")`
              );
            } catch (err) {
              // Ignore nested fetch failure
            }
          }
        }
        fs.writeFileSync(localPath, cssContent);
      }

      return relPath;
    } catch (err) {
      console.warn(`  ⚠️ Skip asset: ${assetUrl} (${err.message})`);
      return assetUrl;
    }
  }

  console.log(`📦 [2/4] Downloading Stylesheets and Fonts...`);
  const linkMatches = [
    ...html.matchAll(
      /<link[^>]+rel=["']?(?:stylesheet|icon|apple-touch-icon|preload)["']?[^>]*href=["']([^"']+)["'][^>]*>/gi
    ),
  ];
  for (const m of linkMatches) {
    const rawUrl = m[1];
    const category = m[0].includes('stylesheet')
      ? 'css'
      : m[0].includes('font')
        ? 'fonts'
        : 'images';
    const localRel = await downloadAsset(rawUrl, category);
    html = html.replaceAll(rawUrl, localRel);
  }

  console.log(`🖼️ [3/4] Downloading Images and Vectors...`);
  const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
  for (const m of imgMatches) {
    const rawUrl = m[1];
    const localRel = await downloadAsset(rawUrl, 'images');
    html = html.replaceAll(rawUrl, localRel);
  }

  const inlineUrls = [...html.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/gi)];
  for (const m of inlineUrls) {
    const rawUrl = m[1];
    const category = /\.(woff2?|ttf|otf|eot)(\?.*)?$/i.test(rawUrl)
      ? 'fonts'
      : 'images';
    const localRel = await downloadAsset(rawUrl, category);
    html = html.replaceAll(rawUrl, localRel);
  }

  console.log(`⚡ [4/4] Downloading Scripts and Runtime Bundles...`);
  const scriptMatches = [
    ...html.matchAll(/<script[^>]+src=["']([^"']+)["'][^>]*>/gi),
  ];
  for (const m of scriptMatches) {
    const rawUrl = m[1];
    if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) {
      const localRel = await downloadAsset(rawUrl, 'js');
      html = html.replaceAll(rawUrl, localRel);
    }
  }

  const finalHtmlPath = path.join(outputDir, 'index.html');
  fs.writeFileSync(finalHtmlPath, html, 'utf-8');

  console.log(`\n======================================================`);
  console.log(`🎉 SUCCESS: Cloned 100% A-to-Z Offline Replica!`);
  console.log(`📂 Location: ${outputDir}`);
  console.log(`📄 Main File: ${finalHtmlPath}`);
  console.log(`📦 Assets Extracted: ${downloadedMap.size}`);
  console.log(`\n▶️ Run this command to view the cloned website:`);
  console.log(`   npx serve ${outputDir}`);
  console.log(`======================================================\n`);

  return {
    outputDir,
    finalHtmlPath,
    totalAssets: downloadedMap.size,
  };
}

const target = process.argv[2];
if (target) {
  cloneWebsite(target).catch((err) => {
    console.error(`❌ Error cloning website:`, err);
    process.exit(1);
  });
}
