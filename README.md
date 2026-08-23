# Mallikarjun R — Premium Animated Portfolio & AI Showcase

A high-performance, dark futuristic personal portfolio website built for **Mallikarjun R** (Founder @ Medicus Labs, Vision X, ORVEX Games, CSE @ DSATM).

Designed using **React + Vite + Tailwind CSS v4**, featuring interactive mouse-reactive neural network particle canvas, Space Grotesk + Inter typography, Gemini AI dermatology diagnostic simulator, filterable project case studies, and a live in-browser JSON profile customizer.

---

## ⚡ Features & Architecture

- **Interactive Hero Canvas**: Mouse-tracking particle node network reacting to cursor proximity.
- **Dynamic Role Typing Carousel**: Automatically rotates between `AI Engineer`, `Cloud & DevOps Builder`, `Full-Stack Developer`, and `Game Developer`.
- **Medicus Labs Gemini AI Simulator**: Real-time dermatological scan processor showing confidence heatmaps, diagnostic severity gauges, custom scan uploads, and PDF report triggers.
- **Featured Projects Spotlight**: Case study cards for **Medicus Labs**, **Vision X**, **ORVEX Games**, and **Tech Discover** with full detail modal overlays.
- **Engineering Expertise Matrix**: Categorized skill levels across AI/ML, Cloud DevOps, Full-Stack Web, and Unity Game Development.
- **Experience & Milestones**: Career timeline combined with Honors/Achievements and AWS/GCP Cloud Certifications.
- **Live Profile Customizer & JSON Exporter**: Edit bio, projects, and links directly in the browser and export updated JSON data.

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 3. Production Build
```bash
npm run build
```
Generates optimized production assets in the `dist/` directory.

---

## 🛠 How to Customize & Modify Data

### Adding / Editing Projects & Bio
All content is centralized in [`src/data/profileData.js`](file:///Users/malikarjunr/me/src/data/profileData.js). To add a new project, add an entry to the `projects` array:

```js
{
  id: "new-project-id",
  title: "New Project Name",
  category: "AI/ML", // "AI/ML" | "Game Dev" | "Full-Stack" | "Cloud/DevOps"
  featured: true,
  tagline: "Short one-line tagline",
  description: "Brief summary description.",
  longDescription: "Detailed case study breakdown for the modal popup.",
  tags: ["React", "PyTorch", "GCP"],
  liveUrl: "https://your-app-url.com",
  githubUrl: "https://github.com/username/repo",
  stars: 45,
  gradient: "from-cyan-500/30 via-indigo-600/30 to-purple-600/30",
  image: "https://images.unsplash.com/your-image-url"
}
```

### Modifying Theme Colors
Themes are defined as CSS variables in [`src/index.css`](file:///Users/malikarjunr/me/src/index.css). You can adjust `--accent-cyan`, `--accent-violet`, or `--bg-primary` to customize the aesthetic.

---

## 📦 Deployment Options

### Vercel / Netlify
1. Push your repository to GitHub.
2. Connect your repository to Vercel or Netlify.
3. Set build command to `npm run build` and publish directory to `dist`.

### GitHub Pages
1. Build the production output with `npm run build`.
2. Deploy the generated `dist/` folder using `gh-pages`:
```bash
npx gh-pages -d dist
```

---

## 📄 License
© Mallikarjun R. Open source under the MIT License.
