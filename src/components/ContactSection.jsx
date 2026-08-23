import React, { useState } from 'react';
import { Send, ArrowUpRight, Check, Mail, Copy } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GithubIcon, LinkedinIcon } from './Icons';

/**
 * Contact / Final CTA — "The Track: Tagline" style
 * Bold statement + compact form + social links.
 */
export function ContactSection({ personal, socials }) {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Big Statement — "The Track: Tagline" */}
        <div className={`text-center space-y-4 mb-16 reveal-base ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white font-heading leading-none tracking-tight">
            LET'S BUILD
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
              SOMETHING.
            </span>
          </h2>
          <p className="text-[#7a8196] text-base sm:text-lg max-w-xl mx-auto">
            Have a project idea, collaboration opportunity, or just want to connect? Reach out.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left: Links & Email */}
          <div className={`space-y-6 reveal-left ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            
            {/* Email Copy */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between gap-3">
              <div className="overflow-hidden">
                <div className="text-[10px] font-mono text-[#4a5068] uppercase tracking-wider">Email</div>
                <div className="text-sm font-mono text-white font-semibold truncate">{personal.email}</div>
              </div>
              <button
                onClick={copyEmail}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#7a8196] hover:text-white transition-colors shrink-0"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              {[
                { href: socials.linkedin, icon: <LinkedinIcon className="w-4 h-4" />, label: 'LinkedIn' },
                { href: socials.github, icon: <GithubIcon className="w-4 h-4" />, label: 'GitHub' },
                { href: personal.resumeUrl, icon: <Mail className="w-4 h-4" />, label: 'Resume / CV' },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] text-[#7a8196] hover:text-white transition-all text-sm"
                >
                  <div className="flex items-center gap-3">
                    {link.icon}
                    <span className="font-mono">{link.label}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className={`reveal-right ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading">Message Sent!</h3>
                  <p className="text-xs text-[#7a8196]">I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="text-[11px] font-mono text-[#4a5068] uppercase tracking-wider">Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-[#4a5068] text-sm focus:border-indigo-500 transition-colors outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="text-[11px] font-mono text-[#4a5068] uppercase tracking-wider">Email *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-[#4a5068] text-sm focus:border-indigo-500 transition-colors outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="contact-msg" className="text-[11px] font-mono text-[#4a5068] uppercase tracking-wider">Message *</label>
                    <textarea
                      id="contact-msg"
                      rows={4}
                      required
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-[#4a5068] text-sm focus:border-indigo-500 transition-colors outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
