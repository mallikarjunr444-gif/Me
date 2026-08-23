import React, { useState } from 'react';
import { X, Save, Download, RefreshCw, Edit3, Plus, Check } from 'lucide-react';

export function ProfileCustomizerModal({ profileData, onUpdateProfile, onClose }) {
  const [formData, setFormData] = useState(JSON.parse(JSON.stringify(profileData)));
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChangePersonal = (field, val) => {
    setFormData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: val,
      },
    }));
  };

  const handleSave = () => {
    onUpdateProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(formData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mallikarjun-profile-${Date.now()}.json`;
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="glass-panel max-w-3xl w-full rounded-3xl p-6 sm:p-8 border border-cyan-500/30 relative space-y-6 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <Edit3 className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">Interactive Profile Customizer</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-400">
          Modify portfolio fields dynamically below. Changes will update the live page instantly, and you can export your custom profile JSON.
        </p>

        {/* Form Fields */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-400">Full Name</label>
              <input
                type="text"
                value={formData.personal.name}
                onChange={(e) => handleChangePersonal('name', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-400">Professional Title</label>
              <input
                type="text"
                value={formData.personal.title}
                onChange={(e) => handleChangePersonal('title', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-slate-400">Subtitle / Education</label>
            <input
              type="text"
              value={formData.personal.subtitle}
              onChange={(e) => handleChangePersonal('subtitle', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-slate-400">Personal Bio Summary</label>
            <textarea
              rows={3}
              value={formData.personal.bio}
              onChange={(e) => handleChangePersonal('bio', e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-400">Location</label>
              <input
                type="text"
                value={formData.personal.location}
                onChange={(e) => handleChangePersonal('location', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-400">Status Pill Text</label>
              <input
                type="text"
                value={formData.personal.status}
                onChange={(e) => handleChangePersonal('status', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
              />
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleExportJSON}
            className="px-4 py-2 text-xs font-mono rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 flex items-center gap-2 border border-cyan-500/30"
          >
            <Download className="w-4 h-4" />
            <span>Export Profile JSON</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono rounded-xl text-slate-400 hover:text-white"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="px-5 py-2 text-xs font-mono font-bold rounded-xl bg-cyan-400 text-slate-950 flex items-center gap-2 hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20"
            >
              {savedSuccess ? <Check className="w-4 h-4 text-emerald-950" /> : <Save className="w-4 h-4" />}
              <span>{savedSuccess ? 'Updated Live!' : 'Apply Changes'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
