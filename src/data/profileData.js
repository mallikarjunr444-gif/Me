export const initialProfileData = {
  personal: {
    name: "Mallikarjun.R",
    handle: "mallikarjunr-com",
    headline: "Engineering ideas into intelligent healthcare systems.",
    roles: [
      "AI Engineer",
      "Founder @ Medicus Labs",
      "Machine Learning Engineer",
      "Computer Vision Specialist"
    ],
    bio: "Computer Science Engineering student at DSATM Bengaluru and Founder of Medicus Labs. Dedicated to forging clinical-grade AI vision pipelines, multimodal reasoning models, and life-saving diagnostic software.",
    location: "Bengaluru, Karnataka, India",
    institution: "Dayananda Sagar Academy of Technology and Management (DSATM)",
    degree: "B.E. Computer Science & Engineering",
    avatar: "/images/mallikarjun-portrait.jpg",
    status: "Building Medicus Labs • Shipping Clinical AI",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/mallikarjunr-com/",
    github: "https://github.com/mallikarjunr444-gif",
    medium: "https://medium.com/@mallikarjunr444",
    website: "https://medicuslabs.app",
    email: "mallikarjunr444@gmail.com",
  },
  metrics: [
    { label: "Venture", value: "Medicus Labs", detail: "AI Dermatology Diagnostic Platform" },
    { label: "Core Stack", value: "Gemini + GCP", detail: "Gemini 1.5 Pro, Cloud Run, Terraform" },
    { label: "Partner Clinics", value: "12 Clinics", detail: "Clinical Pre-Screening & Triage" },
    { label: "Academic Standing", value: "DSATM CSE", detail: "Bengaluru, India" }
  ],
  medicusLabs: {
    name: "Medicus Labs",
    badge: "Flagship Venture",
    role: "Founder & Lead AI Architect",
    appUrl: "https://medicuslabs.app",
    summary: "Medicus Labs is an AI-powered healthcare intelligence platform specializing in dermatological lesion analysis and clinical decision support. Utilizing computer vision algorithms paired with Gemini 1.5 Pro multimodal reasoning, Medicus Labs delivers clinical-grade confidence heatmaps, diagnostic breakdowns, and instant PDF report generation.",
    features: [
      "Multimodal Lesion & Skin Condition Scan Analysis",
      "Gemini AI Diagnostic Confidence Scoring & Heatmap Overlays",
      "Automated Clinical Report PDF Generation",
      "HIPAA-Compliant Zero-Trust Cloud Architecture on GCP"
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
        confidence: 98.4,
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
        confidence: 99.1,
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
      category: "Clinical AI",
      featured: true,
      tagline: "AI Dermatology & Skincare Intelligence Platform",
      description: "An end-to-end clinical assistant leveraging Gemini API and computer vision to deliver instantaneous skin disease risk stratification, confidence heatmaps, and downloadable medical report cards.",
      longDescription: "Medicus Labs bridges state-of-the-art computer vision models with Google Gemini API multimodal reasoning. Designed to assist clinicians and patients with preliminary triage, the system processes high-resolution skin imagery to output diagnostic heatmaps, risk severity metrics, and comprehensive clinical PDF summaries.",
      tags: ["Gemini 1.5 Pro", "Python", "React", "GCP Cloud Run", "HIPAA"],
      liveUrl: "https://medicuslabs.app",
      githubUrl: "https://github.com/mallikarjunr444-gif",
      stars: 84,
      gradient: "from-cyan-500/30 via-blue-600/30 to-purple-600/30",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
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
      description: "Authored highly-read deep dives on Healthcare AI, Cloud Run in production, and Gemini multimodal engineering."
    }
  ]
};
