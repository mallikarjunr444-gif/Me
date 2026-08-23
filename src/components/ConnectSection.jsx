import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon, MediumIcon } from './Icons';

export function ConnectSection({ personal, socials }) {
  const [activeIntent, setActiveIntent] = useState('WORK TOGETHER');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const intents = [
    'WORK TOGETHER',
    'PROJECT IDEA',
    'AI COLLABORATION',
    'HACKATHON',
    'JUST SAY HI'
  ];

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
    }, 4000);
  };

  return (
    <section id="connect" className="py-28 px-4 sm:px-8 lg:px-12 relative border-t border-white/10 canvas-dots bg-[#0a0b0e]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header & Oversized CTA */}
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f05a3e]/10 border border-[#f05a3e]/30 text-xs font-mono text-[#f05a3e] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#f05a3e] animate-pulse" />
            <span>DISPATCH TRANSMISSION</span>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold text-white font-display tracking-tight leading-none uppercase select-none">
            LET'S BUILD <span className="text-[#f05a3e]">SOMETHING.</span>
          </h2>

          <p className="text-lg sm:text-2xl text-[#8b92a5] font-sans max-w-2xl mx-auto leading-relaxed">
            Have an ambitious clinical AI problem, cloud infrastructure project, or game engine idea? Let's connect.
          </p>
        </div>

        {/* Intention Selector Buttons */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <div className="text-xs font-mono text-[#8b92a5] uppercase tracking-wider">
            Select Your Inquiry Topic:
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {intents.map((intent) => (
              <button
                key={intent}
                onClick={() => setActiveIntent(intent)}
                data-cursor="INTENT"
                className={`px-5 py-2.5 rounded-2xl font-mono text-xs font-bold transition-all ${
                  activeIntent === intent
                    ? 'bg-[#f05a3e] text-white shadow-lg shadow-[#f05a3e]/30 scale-105 -rotate-1'
                    : 'bg-[#12141c] text-[#8b92a5] border border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {intent}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Form & Direct Email Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left: Email Copy & Socials (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Copy Box */}
            <div className="paper-card p-6 space-y-3 relative shadow-xl">
              <div className="absolute -top-3 left-6 w-20 h-5 washi-tape-orange rotate-1" />
              <div className="text-[11px] font-mono text-slate-600 uppercase font-bold">Direct Inbox</div>
              <div className="text-sm font-mono font-bold text-slate-950 break-all">{personal.email}</div>

              <button
                onClick={handleCopyEmail}
                data-cursor="COPY"
                className="w-full py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Studio Email'}</span>
              </button>
            </div>

            {/* Social Links Cards */}
            <div className="dark-card p-6 space-y-3 border border-white/10">
              <div className="text-xs font-mono text-[#8b92a5] uppercase mb-2">Verified Channels</div>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LINKEDIN"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-[#8b92a5] hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2.5 font-mono">
                  <LinkedinIcon className="w-4 h-4 text-[#38bdf8]" />
                  <span>LinkedIn (/in/mallikarjunr-com)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GITHUB"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-[#8b92a5] hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2.5 font-mono">
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>GitHub (@mallikarjunr444-gif)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={socials.medium}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="MEDIUM"
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-[#8b92a5] hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2.5 font-mono">
                  <MediumIcon className="w-4 h-4 text-[#10b981]" />
                  <span>Medium (@mallikarjunr)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right: Interactive Form (Col 7) */}
          <div className="lg:col-span-7 dark-card p-6 sm:p-10 border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="py-14 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#10b981]/20 border border-[#10b981] text-[#10b981] mx-auto flex items-center justify-center">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Transmission Dispatched!</h3>
                <p className="text-xs text-[#8b92a5] font-mono">
                  Thank you for reaching out. Mallikarjun will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-xs font-mono text-[#f05a3e] uppercase font-bold">
                  Inquiry Regarding: [{activeIntent}]
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#8b92a5]">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Aris Thorne"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs font-mono focus:border-[#f05a3e] transition-colors outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#8b92a5]">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. aris@medicuslabs.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs font-mono focus:border-[#f05a3e] transition-colors outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#8b92a5]">Message Parameters *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your clinical challenge, infrastructure architecture, or project idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs font-mono focus:border-[#f05a3e] transition-colors resize-none outline-none"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="SEND"
                  className="w-full py-4 rounded-xl bg-[#f05a3e] hover:bg-[#ff6f54] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#f05a3e]/30 hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Transmission</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
