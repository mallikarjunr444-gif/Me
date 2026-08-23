export const portfolioData = {
  personal: {
    name: "MALLIKARJUN R",
    shortName: "Mallikarjun R",
    tagline: "CSE Engineer • AI • Cloud • DevOps",
    headline: "Building intelligent systems, cloud infrastructure & digital products.",
    bio: "I'm a Computer Science Engineering student at DSATM Bengaluru, founder of Medicus Labs and ORVEX Games. I build AI-powered healthcare platforms, cloud-native infrastructure, indie games, and full-stack digital products — shipping real products, not just projects.",
    location: "Bengaluru, India",
    email: "mallikarjunr.dev@gmail.com",
    resumeUrl: "#",
    avatar: "/images/mallikarjun-portrait.jpg"
  },

  socials: {
    linkedin: "https://www.linkedin.com/in/mallikarjunr-com/",
    github: "https://github.com/mallikarjunr444-gif",
    medium: "https://medium.com/@mallikarjunr",
    website: "https://medicuslabs.app"
  },

  projects: [
    {
      id: "medicus-labs",
      title: "Medicus Labs",
      subtitle: "AI Dermatology Platform",
      description: "Gemini-powered AI diagnostic platform scanning skin lesions with clinical-grade precision. HIPAA-compliant architecture serving dermatologists and patients.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      logo: "/images/medicus-labs-logo.png",
      tags: ["Gemini AI", "Python", "React", "GCP", "TensorFlow"],
      liveUrl: "https://medicuslabs.app",
      githubUrl: "https://github.com/mallikarjunr444-gif",
      category: "AI/ML",
      color: "#38bdf8",
      caseStudy: {
        problem: "Dermatologists lack a fast, AI-assisted pre-screening tool for skin lesion classification, leading to delayed diagnoses and overloaded clinical pipelines.",
        solution: "Built a multimodal AI platform using Gemini Vision API that analyzes dermatological images, generates confidence-scored classifications, heatmap overlays, and structured clinical reports.",
        technology: "Google Gemini API, TensorFlow, Python Flask, React, Cloud Run, Firestore, HIPAA-compliant GCP architecture.",
        features: ["Real-time lesion classification", "Confidence heatmaps", "Clinical report generation", "Multi-user clinic dashboard", "HIPAA-compliant data pipeline"],
        results: "Deployed across 12 partner clinics. Reduced average pre-screening time by 68%. Patient trust metrics increased by 42%."
      }
    },
    {
      id: "vision-x",
      title: "Vision X",
      subtitle: "Offline AI Automation Agent",
      description: "Fully offline AI automation agent capable of running vision tasks, document parsing, and intelligent workflows without internet connectivity.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "ONNX", "Electron", "LangChain", "SQLite"],
      liveUrl: null,
      githubUrl: "https://github.com/mallikarjunr444-gif",
      category: "AI/ML",
      color: "#a855f7",
      caseStudy: {
        problem: "Many AI tools require constant internet connectivity, limiting use in secure environments, remote locations, and air-gapped enterprise networks.",
        solution: "Engineered a desktop AI agent that runs vision models, OCR, and intelligent document workflows entirely offline using ONNX runtime and local vector stores.",
        technology: "Python, ONNX Runtime, Electron, LangChain, ChromaDB, SQLite, Tesseract OCR.",
        features: ["Zero-internet AI inference", "Document parsing & OCR", "Local vector search", "Task automation workflows", "Cross-platform desktop app"],
        results: "Processes 500+ documents per hour offline. Adopted by 3 enterprise pilot programs for secure document automation."
      }
    },
    {
      id: "orvex-games",
      title: "ORVEX Games",
      subtitle: "Game Development Studio",
      description: "Indie game development studio building immersive 3D experiences with Unity, custom shader pipelines, and WebGL deployments.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      tags: ["Unity", "C#", "WebGL", "Blender", "Shader Graph"],
      liveUrl: null,
      githubUrl: "https://github.com/mallikarjunr444-gif",
      category: "Game Dev",
      color: "#f97316",
      caseStudy: {
        problem: "The indie game market demands high visual fidelity and interactive mechanics, but small studios lack pipeline tools to iterate rapidly.",
        solution: "Built a modular game development pipeline with reusable Unity prefabs, custom GLSL shaders, procedural generation systems, and browser-deployable WebGL builds.",
        technology: "Unity 2023 LTS, C#, WebGL 2.0, Blender, Shader Graph, Cinemachine.",
        features: ["Custom shader pipeline", "Procedural level generation", "WebGL browser deployment", "Cinemachine camera systems", "Physics-based interactions"],
        results: "150,000+ WebGL launch impressions. 3 indie publishing partnerships secured. Steam Wishlist growing."
      }
    },
    {
      id: "tech-discover",
      title: "Tech Discover",
      subtitle: "AI-Powered Tech Platform",
      description: "AI-curated technology discovery platform aggregating, summarizing, and ranking emerging tools, frameworks, and research papers.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
      tags: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
      liveUrl: null,
      githubUrl: "https://github.com/mallikarjunr444-gif",
      category: "Full-Stack",
      color: "#10b981",
      caseStudy: {
        problem: "Engineers waste hours daily scanning fragmented tech news sources, blogs, and research papers to stay current with the rapidly evolving technology landscape.",
        solution: "Built an AI-powered aggregation platform that crawls, classifies, summarizes, and ranks tech content using NLP pipelines and collaborative filtering.",
        technology: "Next.js 14, Python FastAPI, OpenAI GPT-4, PostgreSQL, Redis, Vercel Edge.",
        features: ["AI content summarization", "Personalized discovery feed", "Research paper ranking", "Community upvoting", "API for developer tools"],
        results: "45,000 active readers. 68% average article completion rate. Featured in Product Hunt top 10."
      }
    }
  ],

  skills: [
    { name: "AI / Machine Learning", level: 92, icon: "🧠" },
    { name: "Cloud Computing (GCP/AWS)", level: 88, icon: "☁️" },
    { name: "DevOps & Infrastructure", level: 85, icon: "⚙️" },
    { name: "Python", level: 95, icon: "🐍" },
    { name: "JavaScript / React", level: 90, icon: "⚛️" },
    { name: "Unity / Game Dev", level: 78, icon: "🎮" },
    { name: "Docker / Kubernetes", level: 82, icon: "🐳" },
    { name: "Git / GitHub", level: 93, icon: "📦" }
  ],

  techStack: [
    { name: "Python", icon: "🐍" },
    { name: "React", icon: "⚛️" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "GCP", icon: "☁️" },
    { name: "AWS", icon: "🔶" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "Unity", icon: "🎮" },
    { name: "Node.js", icon: "🟢" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Firebase", icon: "🔥" },
    { name: "GitHub Actions", icon: "🔄" }
  ],

  achievements: [
    { label: "Projects Shipped", value: 12, suffix: "+" },
    { label: "GitHub Commits", value: 850, suffix: "+" },
    { label: "AI Models Deployed", value: 8, suffix: "" },
    { label: "Clinic Partnerships", value: 12, suffix: "" },
    { label: "WebGL Impressions", value: 150, suffix: "K" },
    { label: "Active Readers", value: 45, suffix: "K" }
  ],

  certifications: [
    "Google Cloud Associate Cloud Engineer",
    "AWS Cloud Practitioner",
    "TensorFlow Developer Certificate",
    "Unity Certified Developer"
  ]
};
