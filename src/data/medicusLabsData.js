/**
 * MEDICUS LABS CARD CONFIGURATION FILE
 * 
 * You can easily update this file to add/change:
 * - images: Array of photo paths/URLs for the flip carousel
 * - title & subtitle
 * - tag (e.g., 'CLINICAL AI', 'GEMINI VISION')
 * - description
 * - stats & metrics
 * - tech stack pills
 */

export const medicusLabsData = {
  id: "medicus-labs",
  title: "Medicus Labs",
  subtitle: "AI Dermatology Diagnostics Platform",
  tag: "CLINICAL AI",
  rot: "-rotate-[2deg]",
  
  // 👉 Add or replace your photos here:
  images: [
    "/images/medicus-labs-logo.png",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
  ],

  // 👉 Project Description:
  description: "Gemini-powered multimodal clinical pre-screening tool analyzing skin lesions with heatmap overlays and ICD-10 automated reports.",
  
  // 👉 Key Metrics & Stats:
  stats: [
    "98.4% Precision",
    "12 Clinics",
    "HIPAA GCP"
  ],

  // 👉 Technologies:
  tech: [
    "Gemini Vision",
    "Python",
    "GCP Cloud Run",
    "React",
    "PyTorch"
  ],

  // 👉 Links:
  liveUrl: "https://medicuslabs.app",
  githubUrl: "https://github.com/mallikarjunr444-gif"
};
