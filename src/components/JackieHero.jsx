import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MediumIcon } from './Icons';

export function JackieHero({ personal, socials, achievements }) {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e7e5df] text-xs font-mono text-[#5c5a55] shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Open for select AI & Cloud engineering roles and ventures</span>
        </div>

        {/* Hero Grid: Left Intro + Right Photo Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Conversational Greeting & Bio */}
          <div className="lg:col-span-7 space-y-6">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#191816] tracking-tight leading-[1.1] font-heading">
              Hey there, I'm Mallikarjun — an{' '}
              <span className="text-[#2563eb]">AI engineer</span> & founder based in Bengaluru, India ☀️.
            </h1>

            <p className="text-lg sm:text-xl text-[#5c5a55] leading-relaxed font-sans">
              I build <span className="font-serif-italic text-[#191816] text-xl sm:text-2xl">clinical AI systems</span>, cloud-native infrastructure, and interactive 3D digital products that help people do their best work.
            </p>

            <p className="text-sm text-[#8c8980] leading-relaxed font-sans">
              Founder of <strong>Medicus Labs</strong> (Gemini AI dermatology pre-screening) and <strong>ORVEX Games</strong> (indie WebGL & Unity engine studio). Computer Science Engineer at DSATM Bengaluru.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="px-6 py-3 rounded-full bg-[#191816] hover:bg-[#33312e] text-white text-xs font-medium font-sans flex items-center gap-2 transition-all shadow-xs"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-white hover:bg-[#f4f2ee] text-[#191816] border border-[#e7e5df] text-xs font-medium font-sans transition-all"
              >
                <span>Get in touch</span>
              </a>

              {/* Social links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white hover:bg-[#f4f2ee] border border-[#e7e5df] text-[#5c5a55] hover:text-[#191816] transition-colors"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white hover:bg-[#f4f2ee] border border-[#e7e5df] text-[#5c5a55] hover:text-[#2563eb] transition-colors"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={socials.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white hover:bg-[#f4f2ee] border border-[#e7e5df] text-[#5c5a55] hover:text-[#059669] transition-colors"
                  title="Medium Articles"
                  aria-label="Medium Articles"
                >
                  <MediumIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Tactile Photo Card (Jackie Zhang Style) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-[320px] w-full">
              
              {/* Decorative background shadow card */}
              <div className="absolute inset-0 bg-[#ebe8e1] rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300 -z-10" />

              {/* Main Photo Card */}
              <div className="jackie-card p-3 rounded-3xl bg-white border border-[#e7e5df] shadow-md transform -rotate-1 group-hover:rotate-0 transition-transform duration-300 space-y-3">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#f4f2ee]">
                  <img
                    src={personal.avatar}
                    alt={`Portrait of ${personal.shortName}`}
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  />
                </div>

                {/* Caption / Badge */}
                <div className="p-2 pt-0 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-[#191816] font-heading">{personal.shortName}</div>
                    <div className="text-[11px] font-mono text-[#8c8980]">Founder & AI Engineer</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#f4f2ee] border border-[#e7e5df] text-[10px] font-mono text-[#5c5a55]">
                    Bengaluru 📍
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Milestone Highlights Bar */}
        <div className="pt-8 border-t border-[#e7e5df] grid grid-cols-2 sm:grid-cols-4 gap-4">
          {achievements.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-[#e7e5df] space-y-1">
              <div className="text-2xl font-extrabold text-[#191816] font-heading">
                {item.value}{item.suffix}
              </div>
              <div className="text-xs font-mono text-[#8c8980] uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
