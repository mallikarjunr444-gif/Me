import React, { useState } from 'react';
import { BookOpen, Clock, ArrowUpRight, X, ExternalLink, Sparkles } from 'lucide-react';
import { MediumIcon } from './Icons';


export function ArticlesSection({ articles, mediumUrl }) {
  const [activeArticleModal, setActiveArticleModal] = useState(null);

  return (
    <section id="articles" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-emerald-500/30 text-xs font-mono text-emerald-300">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Technical Writing & Insights</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3">
              Articles on <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Medium</span>
            </h2>
          </div>

          <a
            href={mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl glass-panel text-xs font-mono font-bold text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/10 flex items-center gap-2 transition-all hover:scale-105"
          >
            <span>Follow @mallikarjunr on Medium</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <div
              key={art.id}
              onClick={() => setActiveArticleModal(art)}
              className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/40 transition-all hover:-translate-y-1 cursor-pointer space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-emerald-400">{art.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors flex items-start justify-between gap-2">
                  <span>{art.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 shrink-0 mt-1" />
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {art.snippet}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {art.tags.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-emerald-400">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 text-xs font-mono text-emerald-400 group-hover:underline">
                Read Article Preview →
              </div>
            </div>
          ))}
        </div>

        {/* Article Preview Modal */}
        {activeArticleModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="glass-panel max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-emerald-500/30 relative space-y-6 shadow-2xl animate-in fade-in zoom-in duration-200">
              
              <button
                onClick={() => setActiveArticleModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="text-emerald-400 font-bold">{activeArticleModal.date}</span>
                  <span>•</span>
                  <span>{activeArticleModal.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{activeArticleModal.title}</h3>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-300 leading-relaxed space-y-3">
                <p>{activeArticleModal.snippet}</p>
                <p className="text-xs text-slate-400">
                  "At Medicus Labs, bridging advanced machine learning models with accessible patient decision support requires robust engineering. In this technical publication, Mallikarjun R details the design considerations..."
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Published on Medium</span>
                <a
                  href={activeArticleModal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 text-xs font-mono font-bold rounded-xl bg-emerald-400 text-slate-950 flex items-center gap-2 hover:bg-emerald-300"
                >
                  <span>Open Full Story on Medium</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
