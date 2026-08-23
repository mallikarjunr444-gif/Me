import React from 'react';
import { Newspaper, Sparkles, TrendingUp, ArrowUpRight, BookOpen } from 'lucide-react';
import { MediumIcon } from './Icons';

export function TechDiscoverSection({ mediumUrl }) {
  const articles = [
    {
      id: 1,
      tag: "CLINICAL AI",
      title: "Building Multimodal Diagnostic Pipelines with Google Gemini Vision",
      readTime: "6 min read",
      summary: "How we structured zero-trust image segmentation and multimodal reasoning for dermatology pre-screening in production.",
      views: "18.4K reads"
    },
    {
      id: 2,
      tag: "CLOUD ARCHITECTURE",
      title: "Automating Multi-Cloud Infrastructure with Terraform & GCP Cloud Run",
      readTime: "8 min read",
      summary: "A practical guide to deploying scalable, HIPAA-compliant serverless containers with automated GitHub Actions CI/CD.",
      views: "14.2K reads"
    },
    {
      id: 3,
      tag: "GAME ENGINE DEV",
      title: "Mastering Procedural Generation & Vertex Shaders in Unity WebGL",
      readTime: "5 min read",
      summary: "Optimizing HLSL vertex shaders and procedural mesh generation for 60 FPS in browser-native WebGL games.",
      views: "12.8K reads"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-8 lg:px-12 relative border-t border-white/10 canvas-grid">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-hand text-2xl text-[#f59e0b] -rotate-1">✦ Flagship Work #04</span>
              <span className="text-xs font-mono text-[#8b92a5] uppercase tracking-widest">[TECH MEDIA & INTELLIGENCE]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-none">
              TECH <span className="text-[#f59e0b]">DISCOVER</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#8b92a5] font-sans max-w-2xl">
              AI-powered engineering publication and discovery engine synthesizing emerging AI research papers and framework architectures.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-xs font-mono text-[#f59e0b] font-bold">
              45,000+ ACTIVE READERS
            </span>
          </div>
        </div>

        {/* Editorial News Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art) => (
            <article
              key={art.id}
              data-cursor="READ"
              className="paper-card p-6 sm:p-8 flex flex-col justify-between space-y-6 relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950 text-white font-bold text-[10px]">
                    {art.tag}
                  </span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-950 font-display group-hover:text-[#f05a3e] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-300 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="text-[#059669] font-bold">{art.views}</span>
                <span className="text-[#f05a3e] font-bold group-hover:underline flex items-center gap-1">
                  Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
