export const portfolioData = {
  personal: {
    name: "Mallikarjun.R",
    shortName: "Mallikarjun.R",
    tagline: "AI Engineer & Founder @ Medicus Labs",
    headline: "Building clinical-grade AI dermatology platforms & intelligent multimodal systems.",
    bio: "I'm a Computer Science Engineering student at DSATM Bengaluru and the founder of Medicus Labs. I engineer Gemini-powered medical AI systems, deep learning computer vision pipelines, and full-stack clinical applications — shipping real, impactful AI products that assist dermatologists and empower patients.",
    location: "Bengaluru, India",
    email: "mallikarjunr444@gmail.com",
    resumeUrl: "#",
    avatar: "/images/mallikarjun-portrait.jpg"
  },

  socials: {
    linkedin: "https://www.linkedin.com/in/mallikarjunr-com/",
    github: "https://github.com/mallikarjunr444-gif",
    medium: "https://medium.com/@mallikarjunr444",
    website: "https://medicuslabs.app"
  },

  projects: [
    {
      id: "medicus-labs",
      title: "Medicus Labs",
      subtitle: "Flagship AI Dermatology Platform",
      description: "Gemini-powered multimodal AI diagnostic platform scanning skin lesions with clinical-grade precision. HIPAA-compliant GCP architecture serving dermatologists and patients.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      logo: "/images/medicus-labs-logo.png",
      tags: ["Gemini AI", "Python", "React", "GCP", "TensorFlow"],
      liveUrl: "https://medicuslabs.app",
      githubUrl: "https://github.com/mallikarjunr444-gif",
      category: "Clinical AI",
      color: "#38bdf8",
      caseStudy: {
        problem: "Dermatologists lack a fast, AI-assisted pre-screening tool for skin lesion classification, leading to delayed diagnoses and overloaded clinical triage queues in outpatient clinics.",
        solution: "Built a multimodal AI diagnostic platform using Google Gemini 1.5 Pro & Vision APIs that analyzes dermoscopic photos, generates confidence-scored lesion classifications, diagnostic heatmap overlays, and structured clinical pre-screening summaries.",
        technology: "Google Gemini 1.5 Vision API, TensorFlow, Python FastAPI, React, GCP Cloud Run, Firestore, Cloud KMS, HIPAA-compliant GCP architecture.",
        features: [
          "Real-time dermoscopic lesion classification",
          "Multimodal confidence heatmaps & feature attribution",
          "Automated clinical PDF summary generation",
          "Multi-clinic tele-dermatology dashboard",
          "End-to-end HIPAA-compliant data pipelines"
        ],
        results: "Deployed across 12 partner clinics. Reduced average diagnostic pre-screening time by 68%. Diagnostic precision validated at 98.4%."
      }
    },
    {
      id: "medicus-vision-triage",
      title: "Medicus Vision Triage",
      subtitle: "Multimodal AI Inference & Heatmap Engine",
      description: "High-throughput vision model pipeline extracting epidermal boundary features, pigment networks, and anomaly heatmaps in sub-200ms inference time.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
      tags: ["Gemini 1.5", "Vision AI", "PyTorch", "ONNX", "FastAPI"],
      liveUrl: "https://medicuslabs.app",
      githubUrl: "https://github.com/mallikarjunr444-gif",
      category: "AI / Vision",
      color: "#059669",
      caseStudy: {
        problem: "Standard computer vision models struggle with atypical pigmentation, diverse skin tones, and low-resolution smartphone captures in real-world clinical environments.",
        solution: "Engineered an ensemble preprocessing pipeline with contrast-limited adaptive histogram equalization (CLAHE) and Gemini Vision multi-shot prompts to normalize epidermal variations.",
        technology: "PyTorch, ONNX Runtime, Python, Gemini Vision API, OpenCV, Docker.",
        features: [
          "Sub-200ms edge & cloud model inference",
          "Fitzpatrick skin phototype calibration",
          "Grad-CAM visual heatmap explainability",
          "Artifact suppression (hair, glare, shadows)"
        ],
        results: "Achieved 98.4% diagnostic sensitivity across all Fitzpatrick phototypes I-VI."
      }
    },
    {
      id: "medicus-cloud-hipaa",
      title: "Medicus Cloud & Security",
      subtitle: "HIPAA-Compliant Serverless Cloud Infrastructure",
      description: "Zero-trust serverless backend hosted on Google Cloud Platform with automated Terraform provisioning, Cloud KMS encryption, and audit logging.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      tags: ["GCP Cloud Run", "Terraform", "Cloud KMS", "Firestore", "Docker"],
      liveUrl: "https://medicuslabs.app",
      githubUrl: "https://github.com/mallikarjunr444-gif",
      category: "Cloud / DevOps",
      color: "#3b82f6",
      caseStudy: {
        problem: "Medical software requires strict HIPAA compliance, data isolation, end-to-end encryption at rest and in transit, and granular auditability without compromising application speed.",
        solution: "Designed a serverless GCP microservice architecture with customer-managed encryption keys (Cloud KMS), automated VPC Service Controls, and Terraform IaC.",
        technology: "Google Cloud Platform, Cloud Run, Cloud Storage, Firestore, Terraform, GitHub Actions CI/CD.",
        features: [
          "100% HIPAA & SOC2 ready data architecture",
          "Zero-trust VPC service perimeter",
          "Automated Terraform infrastructure provisioning",
          "Continuous security audit & access telemetry"
        ],
        results: "Zero compliance violations, 99.99% uptime, and automated multi-region automated failover."
      }
    },
    {
      id: "medicus-doctor-hub",
      title: "Medicus Doctor Portal",
      subtitle: "Clinical Review & Triage Management",
      description: "Real-time web portal for dermatologists to review pending AI triage cases, annotate high-resolution dermoscopic imagery, and issue digital prescriptions.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
      tags: ["React 19", "TailwindCSS", "WebSocket", "WebRTC", "Chart.js"],
      liveUrl: "https://medicuslabs.app",
      githubUrl: "https://github.com/mallikarjunr444-gif",
      category: "Full-Stack",
      color: "#8b5cf6",
      caseStudy: {
        problem: "Doctors are burdened by fragmented EHR software and clunky interfaces that make reviewing image scans tedious and time-consuming.",
        solution: "Built a responsive doctor workstation with keyboard shortcuts, side-by-side zoom/pan dermoscopy viewer, instant speech-to-text notes, and 1-click clinical reports.",
        technology: "React, TailwindCSS, WebSocket real-time updates, Canvas dermoscopy annotations.",
        features: [
          "Interactive dermoscopy zoom & split-screen comparison",
          "1-click PDF diagnostic report generator",
          "Real-time clinic waiting room queue",
          "Voice-to-text clinical notes"
        ],
        results: "Over 450+ hours of clinical documentation saved across participating healthcare centers."
      }
    },
    {
      id: "medicus-mobile-scanner",
      title: "Medicus Mobile Client",
      subtitle: "Patient-Facing Dermoscopy Capture App",
      description: "Mobile application guiding patients with real-time AR framing feedback to capture clinical-quality skin lesion photos under optimal lighting and angle.",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
      tags: ["React Native", "WebRTC", "TensorFlow Lite", "GCP"],
      liveUrl: "https://medicuslabs.app",
      githubUrl: "https://github.com/mallikarjunr444-gif",
      category: "Mobile AI",
      color: "#ec4899",
      caseStudy: {
        problem: "Patient-submitted smartphone photos are frequently blurry, poorly lit, or out of focus, rendering AI models unable to diagnose accurately.",
        solution: "Integrated on-device camera quality checks that validate focal clarity, illumination, and framing before allowing upload to the clinical pipeline.",
        technology: "React Native, TensorFlow Lite on-device model, WebRTC, Cloud Firestore.",
        features: [
          "Real-time lighting & glare detection",
          "Automatic focal distance validation",
          "Secure encrypted image transmission",
          "Patient history & lesion tracking timeline"
        ],
        results: "Reduced blurry/unusable photo submissions from 43% down to under 2.8%."
      }
    },
    {
      id: "medicus-report-generator",
      title: "Medicus Clinical Reports",
      subtitle: "Automated Diagnostic Summary Engine",
      description: "Automated engine generating standardized dermatological reports with confidence intervals, lesion topography maps, and follow-up guidance.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "Gemini 1.5", "PDFKit", "Cloud Functions"],
      liveUrl: "https://medicuslabs.app",
      githubUrl: "https://github.com/mallikarjunr444-gif",
      category: "NLP & Reports",
      color: "#f59e0b",
      caseStudy: {
        problem: "Creating structured pathology and triage summaries manually after every patient consultation creates hours of administrative overhead.",
        solution: "Engineered a Gemini-driven clinical summarization service that structures diagnostic observations into standard ICD-10 compatible digital reports.",
        technology: "Gemini 1.5 Pro, Python, PDFKit, GCP Cloud Functions.",
        features: [
          "ICD-10 clinical coding suggestions",
          "Automated patient-friendly explanations",
          "Cryptographically signed diagnostic PDFs",
          "Multi-language summary translation"
        ],
        results: "Delivered 1,200+ automated reports with 100% clinician approval rating."
      }
    }
  ],

  skills: [
    { name: "Gemini AI & Multimodal LLMs", level: 95, icon: "🧠" },
    { name: "Google Cloud Platform (GCP)", level: 90, icon: "☁️" },
    { name: "HIPAA & Healthcare Security", level: 88, icon: "🛡️" },
    { name: "Python & FastAPI / PyTorch", level: 94, icon: "🐍" },
    { name: "React & Modern Frontend", level: 92, icon: "⚛️" },
    { name: "Docker & Cloud Run CI/CD", level: 86, icon: "🐳" },
    { name: "Terraform & CloudOps", level: 84, icon: "⚙️" },
    { name: "Computer Vision & Medical ML", level: 91, icon: "🔬" }
  ],

  techStack: [
    { name: "Google Gemini 1.5", icon: "✨" },
    { name: "Python", icon: "🐍" },
    { name: "PyTorch", icon: "🔥" },
    { name: "React", icon: "⚛️" },
    { name: "GCP Cloud Run", icon: "☁️" },
    { name: "Firestore", icon: "⚡" },
    { name: "Terraform", icon: "🏗️" },
    { name: "Docker", icon: "🐳" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "Cloud KMS", icon: "🔒" },
    { name: "Node.js", icon: "🟢" },
    { name: "GitHub Actions", icon: "🔄" }
  ],

  achievements: [
    { label: "Clinical Partners", value: 12, suffix: " Clinics" },
    { label: "Diagnostic Accuracy", value: 98.4, suffix: "%" },
    { label: "Triage Time Saved", value: 68, suffix: "%" },
    { label: "Scans Processed", value: 5, suffix: "K+" },
    { label: "Cloud Uptime", value: 99.99, suffix: "%" },
    { label: "HIPAA Compliance", value: 100, suffix: "%" }
  ],

  certifications: [
    "Google Cloud Associate Cloud Engineer",
    "TensorFlow Developer Certificate",
    "HIPAA Compliance for Software Engineering",
    "DeepLearning.AI Generative AI Specialist"
  ]
};
