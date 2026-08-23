import React from 'react';
import { Zap, Activity, Cpu, Sparkles } from 'lucide-react';

export function RiveWidget({ activeState, setActiveState }) {
  const states = [
    { id: 'idle', label: 'Idle Pulse', color: '#38bdf8', icon: <Activity className="w-3.5 h-3.5" /> },
    { id: 'scan', label: 'AI Scan Active', color: '#34d399', icon: <Zap className="w-3.5 h-3.5" /> },
    { id: 'sync', label: 'Neural Mesh Sync', color: '#a855f7', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'hyper', label: 'Hyperdrive Engine', color: '#fbbf24', icon: <Sparkles className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="p-3 rounded-2xl bg-slate-900/90 border border-cyan-500/30 shadow-xl space-y-2 backdrop-blur-md">
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 px-1 uppercase tracking-wider">
        <span>Rive Interactive State Machine:</span>
        <span className="text-cyan-400 font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          Live Vector Physics
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {states.map((st) => (
          <button
            key={st.id}
            onClick={() => setActiveState(st.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
              activeState === st.id
                ? 'bg-slate-800 text-white border border-cyan-400 shadow-md scale-102'
                : 'bg-slate-950/60 text-slate-400 border border-slate-800 hover:text-slate-200'
            }`}
          >
            <span style={{ color: st.color }}>{st.icon}</span>
            <span>{st.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
