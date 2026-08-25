import React, { useState } from 'react';
import { X, Send, Check, Copy, ArrowUpRight, GraduationCap } from 'lucide-react';
import { LinkedinIcon, GithubIcon, MediumIcon } from './Icons';

export function JackieConnectDrawer({ isOpen, onClose, personal, socials }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200 select-none">
      
      {/* Outer Red Mat Bevel */}
      <div className="relative max-w-2xl w-full rounded-[2.5rem] p-3 bg-[#c93f2c] border-2 border-[#a12f1f] shadow-2xl">
        
        {/* Inner Cream Paper Form */}
        <div
          className="relative rounded-[2rem] p-6 sm:p-10 bg-[#fbf5ea] border border-[#e5d5c0] space-y-6"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(201, 63, 44, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(201, 63, 44, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-full bg-[#c93f2c]/10 text-[#c93f2c] hover:bg-[#c93f2c] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title */}
          <div className="space-y-1">
            <div className="font-hand text-3xl sm:text-4xl text-[#c93f2c] font-bold">
              Let's connect :)
            </div>
            <p className="text-xs sm:text-sm font-mono text-slate-700">
              Inquiries regarding AI engineering, cloud architecture, and ventures.
            </p>
          </div>

          {/* Email 1-click copy */}
          <div className="p-3.5 rounded-2xl bg-white border border-slate-300 flex items-center justify-between gap-3 text-xs font-mono">
            <div>
              <span className="text-[10px] text-slate-500 uppercase block font-bold">Direct Studio Email</span>
              <span className="font-bold text-slate-900">{personal.email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-xl bg-[#c93f2c] text-white text-xs font-bold flex items-center gap-1.5 hover:bg-[#b03423] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="py-8 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center font-bold">
                ✓
              </div>
              <h4 className="text-xl font-serif text-slate-900 font-bold">Message Dispatched!</h4>
              <p className="text-xs font-mono text-slate-600">I will reply within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-mono text-slate-900 placeholder-slate-400 focus:border-[#c93f2c] outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-mono text-slate-900 placeholder-slate-400 focus:border-[#c93f2c] outline-none"
                />
              </div>

              <textarea
                rows={3}
                required
                placeholder="How can we build together? *"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-mono text-slate-900 placeholder-slate-400 focus:border-[#c93f2c] outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#c93f2c] hover:bg-[#b03423] text-white font-mono text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Note</span>
              </button>
            </form>
          )}

          {/* Social icons bottom */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 border-t border-slate-300 text-xs font-mono text-slate-700">
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#c93f2c] font-bold">
              LinkedIn
            </a>
            <span>•</span>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#c93f2c] font-bold">
              GitHub
            </a>
            <span>•</span>
            <a href={socials.kaggle || "https://www.kaggle.com/mallikarjunr1"} target="_blank" rel="noopener noreferrer" className="hover:text-[#c93f2c] font-bold">
              Kaggle
            </a>
            <span>•</span>
            <a href={socials.credly || "https://www.credly.com/earner/dashboard"} target="_blank" rel="noopener noreferrer" className="hover:text-[#c93f2c] font-bold">
              Credly
            </a>
            <span>•</span>
            <a href={socials.medium} target="_blank" rel="noopener noreferrer" className="hover:text-[#c93f2c] font-bold">
              Medium
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
