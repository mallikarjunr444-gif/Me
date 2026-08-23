import React from 'react';
import { Sparkles, Megaphone, Package, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

export function ServicesSection({ services }) {
  const iconMap = {
    Sparkles: <Sparkles className="w-5 h-5 text-sky-400" />,
    Megaphone: <Megaphone className="w-5 h-5 text-purple-400" />,
    Package: <Package className="w-5 h-5 text-emerald-400" />,
    Globe: <Globe className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="services" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
            Capabilities & Engagement Shapes
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Scoped Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Services</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-sans">
            Structured engagement frameworks designed for high-growth tech startups, consumer goods, and cultural institutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="editorial-card p-8 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Icon & Title */}
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                    {iconMap[srv.icon] || <Sparkles className="w-5 h-5 text-sky-400" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading">{srv.title}</h3>
                    <div className="text-xs font-mono text-sky-400">{srv.engagement}</div>
                  </div>
                </div>

                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {srv.summary}
                </p>

                {/* Ideal Fit Box */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-sans">
                  <span className="font-mono text-sky-300 font-bold">Ideal Fit: </span>
                  <span className="text-slate-300">{srv.idealFit}</span>
                </div>

                {/* Deliverables List */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Typical Deliverables:</div>
                  <ul className="space-y-1.5">
                    {srv.deliverables.map((del, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Next Step Footer */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4 text-xs font-mono">
                <span className="text-slate-400">{srv.nextStep}</span>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-sky-300 border border-slate-800 font-bold shrink-0 transition-colors"
                >
                  Inquire
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
