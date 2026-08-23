import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon, MediumIcon } from './Icons';

export function JackieContact({ personal, socials }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#e7e5df] bg-[#faf9f6]">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-4 text-center">
          <span className="text-xs font-mono text-[#8c8980] uppercase tracking-[0.2em] font-semibold">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#191816] tracking-tight font-heading leading-tight">
            Let's build something <span className="font-serif-italic text-4xl sm:text-7xl font-normal text-[#2563eb]">great.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5c5a55] font-sans max-w-xl mx-auto">
            Whether you're looking for AI healthcare platforms, cloud infrastructure consulting, or exciting new ventures, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Email Box & Socials */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Email Copy Card */}
            <div className="jackie-card p-6 bg-white border border-[#e7e5df] space-y-3">
              <div className="text-[11px] font-mono text-[#8c8980] uppercase">Direct Studio Email</div>
              <div className="text-sm font-mono font-bold text-[#191816] break-all">{personal.email}</div>
              
              <button
                onClick={handleCopyEmail}
                className="w-full py-2.5 rounded-xl bg-[#f4f2ee] hover:bg-[#ebe8e1] text-[#191816] text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition-colors border border-[#e7e5df]"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to clipboard!' : 'Copy email address'}</span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="jackie-card p-6 bg-white border border-[#e7e5df] space-y-2">
              <div className="text-[11px] font-mono text-[#8c8980] uppercase mb-2">Social Channels</div>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#f4f2ee] text-xs text-[#5c5a55] hover:text-[#191816] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#2563eb]" />
                  <span className="font-mono">LinkedIn (/in/mallikarjunr-com)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#f4f2ee] text-xs text-[#5c5a55] hover:text-[#191816] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-[#191816]" />
                  <span className="font-mono">GitHub (@mallikarjunr444-gif)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={socials.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#f4f2ee] text-xs text-[#5c5a55] hover:text-[#191816] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <MediumIcon className="w-4 h-4 text-emerald-600" />
                  <span className="font-mono">Medium (@mallikarjunr)</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7">
            <div className="jackie-card p-6 sm:p-8 bg-white border border-[#e7e5df]">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#191816] font-heading">Message Sent!</h3>
                  <p className="text-xs text-[#5c5a55]">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-[#8c8980]">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Elena Rostova"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf9f6] border border-[#e7e5df] text-xs text-[#191816] placeholder-[#8c8980] focus:border-[#191816] transition-colors font-sans"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-[#8c8980]">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. elena@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf9f6] border border-[#e7e5df] text-xs text-[#191816] placeholder-[#8c8980] focus:border-[#191816] transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#8c8980]">Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your project, idea, or role..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf9f6] border border-[#e7e5df] text-xs text-[#191816] placeholder-[#8c8980] focus:border-[#191816] transition-colors resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#191816] hover:bg-[#33312e] text-white text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
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
