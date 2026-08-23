import React, { useState } from 'react';
import { Brain, Cloud, Code, Gamepad2, Cpu, Terminal, Sparkles, Layers } from 'lucide-react';

export function ExpertiseSection({ expertise }) {
  const [activeTab, setActiveTab] = useState(0);

  const iconsMap = {
    Brain: <Brain className="w-5 h-5 text-cyan-400" />,
    Cloud: <Cloud className="w-5 h-5 text-indigo-400" />,
    Code: <Code className="w-5 h-5 text-emerald-400" />,
    Gamepad2: <Gamepad2 className="w-5 h-5 text-purple-400" />,
  };

  const currentCategory = expertise[activeTab] || expertise[0];

  return (
    <section id="expertise" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-purple-500/30 text-xs font-mono text-purple-300">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Engineering & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">Domain Expertise</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-sans">
            Specialized engineering proficiencies spanning artificial intelligence, cloud DevOps automation, full-stack systems, and game graphics engine development.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {expertise.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-3 rounded-2xl border font-medium text-sm transition-all flex items-center gap-2.5 font-heading ${
                activeTab === index
                  ? 'bg-slate-800/90 border-cyan-400 text-white shadow-lg shadow-cyan-500/10 scale-105'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {iconsMap[cat.icon] || <Layers className="w-5 h-5 text-cyan-400" />}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Category Description Banner */}
        <div className="max-w-3xl mx-auto text-center mb-10 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-cyan-300">
          {currentCategory.description}
        </div>

        {/* Skill Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.items.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/30 transition-all hover:-translate-y-1 space-y-4 group glow-card"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-slate-900 text-cyan-400 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors font-heading">
                    {item.name}
                  </h4>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-400 font-bold">
                  {item.tag}
                </span>
              </div>

              {/* Proficiency Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Engineering Level</span>
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
