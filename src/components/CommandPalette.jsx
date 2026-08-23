import React, { useState, useEffect } from 'react';
import { Search, Command, ArrowRight, Palette, Terminal, Sparkles, X, Activity, FolderGit2, User, Mail } from 'lucide-react';

export function CommandPalette({ isOpen, onClose, setTheme, onOpenCustomizer }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { id: 'sec-projects', title: 'Go to Selected Projects', category: 'Navigation', icon: <FolderGit2 className="w-4 h-4 text-cyan-400" />, action: () => { window.location.href = '#projects'; onClose(); } },
    { id: 'sec-medicus', title: 'Launch Medicus AI Scan Simulator', category: 'Interactive', icon: <Activity className="w-4 h-4 text-emerald-400" />, action: () => { window.location.href = '#medicus-spotlight'; onClose(); } },
    { id: 'sec-about', title: 'Go to About & Philosophy', category: 'Navigation', icon: <User className="w-4 h-4 text-indigo-400" />, action: () => { window.location.href = '#about'; onClose(); } },
    { id: 'sec-contact', title: 'Go to Contact Section', category: 'Navigation', icon: <Mail className="w-4 h-4 text-purple-400" />, action: () => { window.location.href = '#contact'; onClose(); } },
    { id: 'theme-cyber', title: 'Switch Theme: Cyber Dark', category: 'Theme', icon: <Palette className="w-4 h-4 text-cyan-400" />, action: () => { setTheme('cyber-dark'); onClose(); } },
    { id: 'theme-neon', title: 'Switch Theme: Neon Cyberpunk', category: 'Theme', icon: <Palette className="w-4 h-4 text-pink-400" />, action: () => { setTheme('neon-cyberpunk'); onClose(); } },
    { id: 'theme-emerald', title: 'Switch Theme: Deep Emerald', category: 'Theme', icon: <Palette className="w-4 h-4 text-emerald-400" />, action: () => { setTheme('deep-emerald'); onClose(); } },
    { id: 'customizer', title: 'Edit Live Profile JSON Data', category: 'Customizer', icon: <Sparkles className="w-4 h-4 text-amber-400" />, action: () => { onOpenCustomizer(); onClose(); } },
  ];

  const filtered = query
    ? actions.filter(a => a.title.toLowerCase().includes(query.toLowerCase()) || a.category.toLowerCase().includes(query.toLowerCase()))
    : actions;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bento-card max-w-xl w-full p-4 border border-cyan-500/40 relative shadow-2xl space-y-3 animate-in fade-in zoom-in duration-200">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-slate-900 border border-slate-800">
          <Search className="w-4 h-4 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or search... (Esc to close)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white text-xs font-mono focus:outline-none placeholder-slate-500"
          />
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-800 text-slate-400">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-72 overflow-y-auto space-y-1 pr-1">
          {filtered.length === 0 ? (
            <div className="py-6 text-center text-xs font-mono text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-900/90 text-left transition-colors group text-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500">{item.category}</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500 px-2">
          <span>Use ⌘K / Ctrl+K anytime</span>
          <span>Antigravity AI Engine</span>
        </div>

      </div>
    </div>
  );
}
