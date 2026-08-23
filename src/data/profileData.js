export const initialProfileData = {
  personal: {
    name: "MALLIKARJUN R",
    handle: "mallikarjunr-com",
    headline: "Engineering ideas into intelligent systems.",
    roles: [
      "AI Engineer",
      "Cloud & DevOps Builder",
      "Full-Stack Developer",
      "Game Developer"
    ],
    bio: "Computer Science Engineering student and technology builder based in Bengaluru, India. Dedicated to forging high-performance AI systems, cloud-native architectures, autonomous agent workflows, and immersive digital experiences.",
    location: "Bengaluru, Karnataka, India",
    institution: "Dayananda Sagar Academy of Technology and Management (DSATM)",
    degree: "B.E. Computer Science & Engineering",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    status: "Building AI & Cloud Infrastructure • Available for Projects",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/mallikarjunr-com/",
    github: "https://github.com/mallikarjunr444-gif",
    medium: "https://medium.com/@mallikarjunr",
    website: "https://medicuslabs.app",
    email: "mallikarjunr.dev@gmail.com",
  },
  metrics: [
    { label: "Ventures & Studios", value: "3 Projects", detail: "Medicus Labs, ORVEX, Tech Discover" },
    { label: "Core Stack", value: "AI + Cloud", detail: "Gemini API, PyTorch, Kubernetes, Terraform" },
    { label: "Open Source Repos", value: "25+ Repos", detail: "GitHub @mallikarjunr444-gif" },
    { label: "Academic Standing", value: "DSATM CSE", detail: "Bengaluru, India" }
  ],
  medicusLabs: {
    name: "Medicus Labs",
    badge: "Flagship Startup",
    role: "Founder & Lead Architect",
    appUrl: "https://medicuslabs.app",
    summary: "Medicus Labs is an AI-powered healthcare intelligence platform specializing in dermatological analysis and clinical decision support. Utilizing computer vision algorithms paired with Gemini API multimodal reasoning, Medicus Labs delivers clinical-grade confidence heatmaps, diagnostic breakdowns, and instant report generation.",
    features: [
      "Multimodal Lesion & Skin Condition Scan Analysis",
      "Gemini AI Diagnostic Confidence Scoring & Heatmap Overlays",
      "Automated Clinical Report PDF Generation",
      "Privacy-First Data Architecture & Cloud Infrastructure"
    ],
    sampleCases: [
      {
        id: "case-1",
        title: "Eczema / Atopic Dermatitis",
        category: "Inflammatory Skin Condition",
        confidence: 94.8,
        risk: "Low-Moderate",
        riskColor: "amber",
        description: "Observed erythema with xerosis and superficial excoriation. Gemini AI identifies localized inflammatory patch.",
        recommendations: [
          "Apply hypoallergenic emollient cream twice daily.",
          "Avoid topical irritants and hot bath exposure.",
          "Schedule follow-up consult if redness spreads."
        ],
        heatmapGradient: "from-amber-500/40 via-red-500/20 to-transparent",
        icon: "AlertCircle"
      },
      {
        id: "case-2",
        title: "Psoriasis Vulgaris",
        category: "Chronic Autoimmune Condition",
        confidence: 92.4,
        risk: "Moderate",
        riskColor: "orange",
        description: "Well-demarcated erythematous plaque with silvery scale accumulation detected along epidermal layer.",
        recommendations: [
          "Topical corticosteroid regimen as advised by dermatologist.",
          "Maintain daily skin hydrator and humidity management.",
          "Monitor plaque thickness over 14-day window."
        ],
        heatmapGradient: "from-orange-500/40 via-rose-500/20 to-transparent",
        icon: "ShieldAlert"
      },
      {
        id: "case-3",
        title: "Benign Melanocytic Nevus",
        category: "Pigmented Lesion",
        confidence: 97.2,
        risk: "Low / Normal",
        riskColor: "emerald",
        description: "Regular border symmetry, uniform pigmentation, no elevated asymmetry detected across skin metrics.",
        recommendations: [
          "Routine semi-annual skin check.",
          "Use broad-spectrum SPF 50+ sunscreen outdoor protection.",
          "Log photo in Medicus Labs tracker for comparative baseline."
        ],
        heatmapGradient: "from-emerald-500/30 via-teal-500/10 to-transparent",
        icon: "CheckCircle"
      },
      {
        id: "case-4",
        title: "Healthy Epidermal Tissue",
        category: "Normal Baseline",
        confidence: 98.9,
        risk: "Clear",
        riskColor: "cyan",
        description: "Intact skin barrier, zero active lesions or pathological discoloration detected in deep visual field.",
        recommendations: [
          "Maintain daily cleansing and hydration skincare routine.",
          "Continue preventive UV protective care."
        ],
        heatmapGradient: "from-cyan-500/30 via-blue-500/10 to-transparent",
        icon: "Sparkles"
      }
    ]
  },
  projects: [
    {
      id: "medicus-labs",
      title: "Medicus Labs",
      category: "AI/ML",
      featured: true,
      tagline: "AI Dermatology & Skincare Intelligence Platform",
      description: "An end-to-end clinical assistant leveraging Gemini API and computer vision to deliver instantaneous skin disease risk stratification, confidence heatmaps, and downloadable medical report cards.",
      longDescription: "Medicus Labs bridges state-of-the-art computer vision models with Google Gemini API multimodal reasoning. Designed to assist clinicians and patients with preliminary triage, the system processes high-resolution skin imagery to output diagnostic heatmaps, risk severity metrics, and comprehensive clinical PDF summaries.",
      tags: ["Gemini API", "PyTorch", "Next.js", "Computer Vision", "GCP"],
      liveUrl: "https://medicuslabs.app",
      githubUrl: "https://github.com/mallikarjunr444-gif",
      stars: 52,
      gradient: "from-cyan-500/30 via-blue-600/30 to-purple-600/30",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "orvex-games",
      title: "ORVEX Games",
      category: "Game Dev",
      featured: true,
      tagline: "Independent Game Development Studio & WebGL Graphics Engine",
      description: "Interactive 3D game experiences, custom ShaderLab effects, and real-time WebGL graphics created with Unity Engine & WebGPU.",
      longDescription: "ORVEX Games is Mallikarjun's independent game development studio dedicated to crafting immersive 3D gameplay, custom graphics shaders, and web-playable interactive titles built on Unity and WebGL runtime technology.",
      tags: ["Unity", "C#", "ShaderLab", "WebGL", "3D Modeling", "HLSL"],
      githubUrl: "https://github.com/mallikarjunr444-gif",
      stars: 38,
      gradient: "from-indigo-500/30 via-violet-600/30 to-pink-600/30",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tech-discover",
      title: "Tech Discover",
      category: "Full-Stack",
      featured: true,
      tagline: "AI-Powered Technology News & Discovery Platform",
      description: "Real-time aggregator and AI summarization engine curating breakthrough developments across AI, cloud computing, and developer tools.",
      longDescription: "Tech Discover uses automated Web scraping pipelines and Gemini API sentiment extraction to summarize daily tech breakthroughs into actionable 2-minute developer briefs and interactive discovery feeds.",
      tags: ["Next.js", "Node.js", "Gemini API", "Tailwind CSS", "Redis"],
      githubUrl: "https://github.com/mallikarjunr444-gif",
      stars: 30,
      gradient: "from-emerald-500/30 via-teal-600/30 to-cyan-600/30",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cloudops-terraform-iac",
      title: "CloudOps Multi-Cloud IaC Blueprint",
      category: "Cloud/DevOps",
      featured: false,
      tagline: "Terraform & Kubernetes Automation for Resilient Microservices",
      description: "Production-ready Infrastructure-as-Code modules for provisioning secure Kubernetes clusters on AWS and GCP with integrated GitOps pipelines.",
      tags: ["Terraform", "Kubernetes", "AWS", "GCP", "Docker", "DevOps"],
      githubUrl: "https://github.com/mallikarjunr444-gif",
      stars: 34,
      gradient: "from-amber-500/30 via-orange-600/30 to-red-600/30",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    }
  ],
  expertise: [
    {
      category: "AI, ML & Multimodal Systems",
      icon: "Brain",
      description: "Designing clinical-grade vision pipelines, Gemini multimodal API integration, and autonomous RAG agents.",
      items: [
        { name: "Gemini Multimodal API", level: 96, tag: "Core LLM" },
        { name: "Computer Vision (OpenCV/PyTorch)", level: 91, tag: "Vision" },
        { name: "Autonomous Agent Architectures", level: 93, tag: "RAG/Tools" },
        { name: "Prompt Engineering & RAG", level: 95, tag: "LLMs" },
        { name: "TensorFlow & PyTorch", level: 86, tag: "Deep Learning" }
      ]
    },
    {
      category: "Cloud Computing & DevOps",
      icon: "Cloud",
      description: "Provisioning high-availability Kubernetes clusters, multi-cloud Terraform pipelines, and automated GitOps CI/CD.",
      items: [
        { name: "Amazon Web Services (AWS)", level: 90, tag: "Cloud" },
        { name: "Google Cloud Platform (GCP)", level: 93, tag: "Cloud" },
        { name: "Docker & Kubernetes (K8s)", level: 89, tag: "Containers" },
        { name: "Terraform (IaC)", level: 87, tag: "DevOps" },
        { name: "CI/CD & GitHub Actions", level: 92, tag: "Automation" }
      ]
    },
    {
      category: "Full-Stack Development",
      icon: "Code",
      description: "Architecting modern web applications, high-throughput microservices, and reactive user interfaces.",
      items: [
        { name: "Next.js / React", level: 95, tag: "Frontend" },
        { name: "Node.js & NestJS", level: 90, tag: "Backend" },
        { name: "Python", level: 93, tag: "Core" },
        { name: "Tailwind CSS & SolidJS", level: 89, tag: "UI/UX" },
        { name: "REST APIs & GraphQL", level: 92, tag: "APIs" }
      ]
    },
    {
      category: "Game Development & Shaders",
      icon: "Gamepad2",
      description: "Crafting 3D game engines, custom HLSL ShaderLab effects, and real-time WebGL graphics at ORVEX Games.",
      items: [
        { name: "Unity Engine & C#", level: 88, tag: "Game Dev" },
        { name: "WebGL & WebGPU", level: 85, tag: "Graphics" },
        { name: "ShaderLab & HLSL Shaders", level: 82, tag: "Shaders" },
        { name: "3D Asset Optimization", level: 86, tag: "3D Pipelines" }
      ]
    }
  ],
  experience: [
    {
      role: "Founder & Lead Architect",
      organization: "Medicus Labs",
      period: "2024 - Present",
      location: "Bengaluru, India",
      type: "Startup Founder",
      description: "Leading the architectural design, AI model orchestration, and market execution for an intelligent healthcare startup. Built diagnostic heatmaps using Gemini API and computer vision pipelines.",
      highlights: [
        "Architected Gemini API multimodal vision pipeline for dermatology scan analysis.",
        "Engineered real-time diagnostic reporting UI with custom confidence scoring.",
        "Built responsive medical portal web app deployed on cloud native infrastructure."
      ]
    },
    {
      role: "Founder & Game Developer",
      organization: "ORVEX Games",
      period: "2023 - Present",
      location: "Bengaluru, India",
      type: "Game Studio",
      description: "Designing independent 3D titles and WebGL interactive experiences using Unity Engine, custom ShaderLab effects, and WebGPU.",
      highlights: [
        "Developed custom WebGL shader pipelines for high-fps web browser rendering.",
        "Created interactive gameplay mechanics, AI pathfinding, and physics simulations."
      ]
    },
    {
      role: "B.E. Computer Science & Engineering",
      organization: "Dayananda Sagar Academy of Technology & Management (DSATM)",
      period: "2022 - 2026",
      location: "Bengaluru, India",
      type: "Education",
      description: "Specializing in Artificial Intelligence, Cloud Computing, Operating Systems, and Distributed Software Systems.",
      highlights: [
        "Core member of tech & developer innovation initiatives.",
        "Organized and competed in cloud computing & AI hackathons.",
        "Focus on DevOps workflows, Docker containerization, and full-stack web engineering."
      ]
    }
  ],
  achievements: [
    {
      title: "AI Healthcare Innovation Winner",
      org: "Medicus Labs Platform Showcase",
      date: "2024",
      description: "Awarded top distinction for building an end-to-end dermatology AI diagnostic workflow powered by Gemini API."
    },
    {
      title: "Cloud & DevOps Hackathon Finalist",
      org: "National Developer Summit",
      date: "2023",
      description: "Recognized for multi-cloud automated Infrastructure-as-Code deployments using Terraform and Kubernetes."
    },
    {
      title: "Top Technical Author",
      org: "Medium Platform",
      date: "2023 - Present",
      description: "Authored highly-read deep dives on Healthcare AI, Kubernetes in production, and Gemini multimodal engineering."
    }
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Architect Foundations",
      issuer: "Amazon Web Services",
      date: "2024",
      verifyUrl: "https://aws.amazon.com/"
    },
    {
      name: "Google Cloud Infrastructure & BigQuery Specialist",
      issuer: "Google Cloud",
      date: "2024",
      verifyUrl: "https://cloud.google.com/"
    },
    {
      name: "Docker & Kubernetes Containerization Specialist",
      issuer: "CNCF / Linux Foundation",
      date: "2023",
      verifyUrl: "https://kubernetes.io/"
    }
  ],
  articles: [
    {
      id: "art-1",
      title: "Building Clinical-Grade Healthcare AI with Google Gemini Multimodal API",
      snippet: "How we leveraged Gemini API's multimodal vision capabilities at Medicus Labs to generate instant dermatological diagnostic heatmaps and structured medical insights.",
      date: "2024",
      readTime: "6 min read",
      url: "https://medium.com/@mallikarjunr",
      tags: ["Healthcare AI", "Gemini API", "Medicus Labs", "Computer Vision"]
    },
    {
      id: "art-2",
      title: "Architecting Resilient Multi-Cloud Infrastructure using Terraform & Kubernetes",
      snippet: "A practical guide to structuring modular Infrastructure-as-Code for zero-downtime microservices across AWS and GCP environments.",
      date: "2024",
      readTime: "8 min read",
      url: "https://medium.com/@mallikarjunr",
      tags: ["DevOps", "Terraform", "Kubernetes", "AWS", "GCP"]
    },
    {
      id: "art-3",
      title: "Real-Time WebGL Shaders & Physics in Modern Game Engines",
      snippet: "Optimizing 3D graphics, ShaderLab HLSL code, and WebGPU memory buffers for browser-playable indie games at ORVEX Games.",
      date: "2023",
      readTime: "7 min read",
      url: "https://medium.com/@mallikarjunr",
      tags: ["Game Dev", "WebGL", "Unity", "Shaders"]
    }
  ]
};
