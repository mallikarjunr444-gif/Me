import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Sparkles, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export function InquiryForm({ designer }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    projectType: 'Brand Identity Systems',
    timeline: 'Within 1-2 months',
    budget: '$10k – $25k',
    referral: 'Awwwards / Godly',
    summary: '',
    consent: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.summary) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        website: '',
        projectType: 'Brand Identity Systems',
        timeline: 'Within 1-2 months',
        budget: '$10k – $25k',
        referral: 'Awwwards / Godly',
        summary: '',
        consent: true
      });
    }, 5000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(designer.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
            Initiate Project Inquiry
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Project Engagement</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans">
            Tell us about your brand goals, target timeline, and budget. {designer.responseTime}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Email & Response Time Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="editorial-card p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-sky-400" />
                Direct Communication
              </h3>

              {/* Email Copy Box */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="overflow-hidden">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Studio Email</div>
                  <div className="text-xs font-mono text-white font-bold truncate">{designer.email}</div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-300 text-xs flex items-center gap-1 transition-colors shrink-0"
                  title="Copy Studio Email"
                  aria-label="Copy studio email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Response Time Guarantee */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs font-sans">
                <div className="flex items-center gap-2 text-sky-400 font-mono font-bold">
                  <Clock className="w-4 h-4" />
                  <span>Response Time Guarantee</span>
                </div>
                <p className="text-slate-300">
                  {designer.responseTime}. We review every project inquiry to evaluate creative alignment and timeline feasibility.
                </p>
              </div>

              {/* Privacy Note */}
              <div className="flex items-start gap-2 text-[11px] text-slate-400 font-sans pt-2 border-t border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Your project details and non-disclosure requirements remain strictly confidential.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Inquiry Form */}
          <div className="lg:col-span-8">
            <div className="editorial-card p-6 sm:p-10 relative">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">Inquiry Dispatched!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto font-sans">
                    Thank you for detailing your project. {designer.name} will review your parameters and respond within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="inquiry-name" className="text-xs font-mono text-slate-400">Your Name *</label>
                      <input
                        id="inquiry-name"
                        type="text"
                        required
                        placeholder="e.g. Dr. Aris Thorne"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-xs font-sans focus:border-sky-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="inquiry-email" className="text-xs font-mono text-slate-400">Your Email *</label>
                      <input
                        id="inquiry-email"
                        type="email"
                        required
                        placeholder="e.g. aris@medicuslabs.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-xs font-sans focus:border-sky-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company & Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="inquiry-company" className="text-xs font-mono text-slate-400">Company / Organization</label>
                      <input
                        id="inquiry-company"
                        type="text"
                        placeholder="e.g. Medicus Labs Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-xs font-sans focus:border-sky-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="inquiry-website" className="text-xs font-mono text-slate-400">Website URL (Optional)</label>
                      <input
                        id="inquiry-website"
                        type="url"
                        placeholder="https://yourcompany.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-xs font-sans focus:border-sky-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="inquiry-type" className="text-xs font-mono text-slate-400">Primary Discipline / Scope *</label>
                      <select
                        id="inquiry-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-xs font-sans focus:border-sky-400 transition-colors"
                      >
                        <option value="Brand Identity Systems">Brand Identity Systems</option>
                        <option value="Campaign Art Direction">Campaign Art Direction</option>
                        <option value="Packaging & Print Design">Packaging & Print Design</option>
                        <option value="Digital Design & Launch Assets">Digital Design & Launch Assets</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="inquiry-budget" className="text-xs font-mono text-slate-400">Budget Range *</label>
                      <select
                        id="inquiry-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white text-xs font-sans focus:border-sky-400 transition-colors"
                      >
                        <option value="$5k – $10k">$5k – $10k</option>
                        <option value="$10k – $25k">$10k – $25k</option>
                        <option value="$25k+">$25k+</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Summary */}
                  <div className="space-y-1">
                    <label htmlFor="inquiry-summary" className="text-xs font-mono text-slate-400">Project Brief & Communication Challenge *</label>
                    <textarea
                      id="inquiry-summary"
                      rows={4}
                      required
                      placeholder="Outline your project scope, target launch date, and key deliverables..."
                      value={formData.summary}
                      onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-xs font-sans focus:border-sky-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-sky-400 text-slate-950 font-bold text-xs font-mono shadow-xl shadow-sky-500/20 hover:bg-sky-300 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Qualified Inquiry</span>
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
