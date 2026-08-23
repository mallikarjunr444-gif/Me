import React from 'react';
import { GitBranch, Star, ExternalLink, Code2, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';

export function GithubSection({ githubUrl }) {
  const featuredRepos = [
    {
      name: "medicus-labs-ai",
      desc: "AI Dermatology & Skincare Intelligence Platform powered by Gemini API & PyTorch.",
      stars: 52,
      forks: 14,
      lang: "TypeScript",
      langColor: "bg-blue-500",
      url: "https://github.com/mallikarjunr444-gif"
    },
    {
      name: "tech-discover-ai",
      desc: "AI-powered technology discovery platform and automated news summarizer.",
      stars: 41,
      forks: 9,
      lang: "TypeScript",
      langColor: "bg-cyan-500",
      url: "https://github.com/mallikarjunr444-gif"
    },
    {
      name: "orvex-shaders-webgl",
      desc: "High-performance HLSL ShaderLab & WebGL runtime renderer graphics code.",
      stars: 38,
      forks: 11,
      lang: "C#",
      langColor: "bg-purple-500",
      url: "https://github.com/mallikarjunr444-gif"
    },
    {
      name: "terraform-k8s-multicloud",
      desc: "Production-ready Infrastructure-as-Code modules for AWS & GCP Kubernetes clusters.",
      stars: 34,
      forks: 8,
      lang: "HCL",
      langColor: "bg-indigo-500",
      url: "https://github.com/mallikarjunr444-gif"
    }
  ];

  return (
    <section id="github" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>Open Source & Repositories</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 font-heading">
              GitHub <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Activity & Repos</span>
            </h2>
          </div>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl glass-panel text-xs font-mono font-bold text-white border border-slate-700 hover:border-cyan-500/40 flex items-center gap-2 transition-all hover:scale-105"
          >
            <GithubIcon className="w-4 h-4" />
            <span>@mallikarjunr444-gif on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredRepos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-4 glow-card group block"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {repo.name}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
                    {repo.forks}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {repo.desc}
              </p>

              <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-400">
                <span className={`w-3 h-3 rounded-full ${repo.langColor}`} />
                <span>{repo.lang}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
