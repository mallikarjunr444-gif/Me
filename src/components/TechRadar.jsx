import React, { useState } from 'react';
import { Brain, Cloud, Code, Database, Cpu, Layers, Terminal, Sparkles } from 'lucide-react';

export function TechRadar({ skills }) {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTag, setSelectedTag] = useState('All');

  const iconsMap = {
    Brain: <Brain className="w-5 h-5 text-cyan-400" />,
    Cloud: <Cloud className="w-5 h-5 text-indigo-400" />,
    Code: <Code className="w-5 h-5 text-emerald-400" />,
    Database: <Database className="w-5 h-5 text-amber-400" />,
  };

  const currentCategory = skills[activeTab] || skills[0];

  // Extract all unique tags across categories for filtering
  const allTags = ['All', ...new Set(currentCategory.items.map((i) => i.tag))];

  const filteredItems = selectedTag === 'All'
    ? currentCategory.items
    : currentCategory.items.filter((i) => i.tag === selectedTag);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-indigo-500/30 text-xs font-mono text-indigo-300">
            <Cpu className="w-4 h-4 text-indigo-400" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tech Stack & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Engineering Matrix</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            A comprehensive matrix of tools, frameworks, and cloud systems Mallikarjun uses to architect AI products and infrastructure.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {skills.map((cat, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setSelectedTag('All');
              }}
              className={`px-5 py-3 rounded-2xl border font-medium text-sm transition-all flex items-center gap-2.5 ${
                activeTab === index
                  ? 'bg-slate-800 border-cyan-400 text-white shadow-lg shadow-cyan-500/10 scale-105'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {iconsMap[cat.icon] || <Layers className="w-5 h-5 text-cyan-400" />}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Sub-tag filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs font-mono text-slate-500 mr-2">Filter Sub-domain:</span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 text-xs rounded-full border font-mono transition-colors ${
                selectedTag === tag
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold'
                  : 'bg-slate-900/40 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Skill Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/30 transition-all hover:-translate-y-1 space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-slate-900 text-cyan-400 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h4>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-400">
                  {item.tag}
                </span>
              </div>

              {/* Proficiency Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Proficiency Mastery</span>
                  <span className="text-cyan-300 font-bold">{item.level}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-700"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
