import React, { useState } from 'react';
import { ArrowRight, MapPin, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export function Hero({ designer, featuredProjects }) {
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);
  const featured = featuredProjects[activeFeaturedIndex] || featuredProjects[0];

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Role & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability & Location Pill */}
            <div className="inline-flex flex-wrap items-center gap-3 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-300 font-bold">{designer.availability}</span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {designer.location} ({designer.timezone})
              </span>
            </div>

            {/* Role & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-heading leading-tight">
                {designer.name}
              </h1>
              <div className="text-xl sm:text-2xl font-mono text-sky-400 font-medium">
                {designer.role}
              </div>
            </div>

            {/* Positioning Statement / One-Sentence Value Prop */}
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl font-sans">
              {designer.positioning}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#work"
                className="px-7 py-4 rounded-full bg-sky-400 text-slate-950 font-bold font-mono text-xs hover:bg-sky-300 transition-all shadow-xl shadow-sky-500/20 hover:scale-105 flex items-center gap-2"
              >
                <span>View selected work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-7 py-4 rounded-full glass-pill text-slate-200 hover:text-white border border-slate-700 text-xs font-mono transition-all"
              >
                <span>Start a project</span>
              </a>
            </div>

          </div>

          {/* Right Column: Featured Artwork Carousel Preview */}
          <div className="lg:col-span-5 relative">
            <div className="editorial-card p-6 space-y-4 border border-white/10 shadow-2xl relative">
              
              {/* Image Preview Container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={featured.leadImage}
                  alt={featured.altText}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[10px] font-mono text-sky-300 font-bold">
                  Featured Case Study • {featured.year}
                </div>
              </div>

              {/* Project Meta Details */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white font-heading">{featured.name}</h3>
                  <span className="text-xs font-mono text-slate-400">{featured.discipline}</span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {featured.challenge}
                </p>
              </div>

              {/* Artwork Carousel Selector Controls */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Select Highlight:</span>
                <div className="flex items-center gap-1.5">
                  {featuredProjects.slice(0, 4).map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setActiveFeaturedIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeFeaturedIndex === idx
                          ? 'bg-sky-400 scale-125 shadow-md shadow-sky-500/50'
                          : 'bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`View featured project ${p.name}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
