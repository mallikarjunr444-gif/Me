import React, { useState } from 'react';
import { FolderGit2, Star, ExternalLink, Sparkles, Filter, X, ArrowUpRight, Gamepad2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export function ProjectsShowcase({ projects }) {
  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'AI/ML', 'Game Dev', 'Full-Stack', 'Cloud/DevOps'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-cyan-300">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Selected Works & Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">Projects & Ventures</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-sans">
            Dominant work spanning AI dermatology platforms, indie game studios, and cloud native blueprints.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                filter === cat
                  ? 'bg-cyan-400 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-105'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="bento-card p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="space-y-4">
                
                {/* Visual Image Preview */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img
                    src={project.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[10px] font-mono text-cyan-300 font-bold">
                    {project.category}
                  </div>
                </div>

                {/* Header Title & Stars */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-heading flex items-center gap-2">
                    <span>{project.title}</span>
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-amber-400 font-mono">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{project.stars}</span>
                  </div>
                </div>

                <p className="text-xs font-mono text-cyan-400">{project.tagline}</p>

                {/* Short Description */}
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[10px] text-cyan-400 group-hover:underline flex items-center gap-1">
                  Full Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-xl bg-slate-900 hover:text-white border border-slate-800"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/30"
                      title="Live Product Web App"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Case Study Modal Overlay */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
            <div className="bento-card max-w-3xl w-full p-6 sm:p-8 border border-cyan-500/30 relative space-y-6 shadow-2xl animate-in fade-in zoom-in duration-200 my-8 max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 font-bold">
                  {activeModalProject.category}
                </span>
                <h3 className="text-3xl font-bold text-white font-heading">{activeModalProject.title}</h3>
                <p className="text-sm font-mono text-cyan-300">{activeModalProject.tagline}</p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Case Study Overview:
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {activeModalProject.longDescription || activeModalProject.description}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Technologies & Frameworks:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-xs font-mono rounded-xl bg-slate-800 hover:bg-slate-700 text-white flex items-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 text-xs font-mono font-bold rounded-xl bg-cyan-400 text-slate-950 flex items-center gap-2 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20"
                  >
                    <span>Launch Product Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
