import React from 'react';
import { X, CheckCircle2, AlertCircle, FileCheck } from 'lucide-react';

export function PreLaunchChecklistModal({ isOpen, onClose, checklist }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checklist-title"
    >
      <div className="editorial-card max-w-xl w-full p-6 sm:p-8 border border-sky-500/40 relative space-y-6 shadow-2xl animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-sky-400" />
            <h3 id="checklist-title" className="text-xl font-bold text-white font-heading">
              Pre-Launch Content Checklist
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white"
            aria-label="Close pre-launch checklist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-300 font-sans leading-relaxed">
          Verify every asset, client quote, image crop, and domain link before going live with prospective clients.
        </p>

        {/* Checklist Items */}
        <div className="space-y-3">
          {checklist.map((c, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-200 font-sans">{c.item}</span>
              </div>
              <span className="font-mono text-[10px] text-sky-300 font-bold px-2 py-0.5 rounded bg-slate-950 border border-slate-800 shrink-0">
                {c.status}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-2 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-sky-400 text-slate-950 font-bold font-mono text-xs hover:bg-sky-300 transition-colors"
          >
            Close Checklist
          </button>
        </div>

      </div>
    </div>
  );
}
