import React, { useState } from 'react';
import { Sparkles, Terminal, Cloud, Cpu, Gamepad2, Code2, Database, ShieldCheck, ArrowUpRight } from 'lucide-react';

export function SkillEcosystemSection() {
  const [activeSkill, setActiveSkill] = useState(null);

  const skillGroups = [
    {
      group: "ARTIFICIAL INTELLIGENCE",
      color: "#38bdf8",
      skills: [
        { name: "Gemini Multimodal API", level: "Production", project: "Medicus Labs", note: "Clinical dermatology visual inference." },
        { name: "TensorFlow & PyTorch", level: "Advanced", project: "Medicus Labs", note: "Neural network model training & classification." },
        { name: "Computer Vision & YOLO", level: "Advanced", project: "Medicus Labs / Vision X", note: "Real-time lesion & document segmentation." },
        { name: "LangChain & Vector DBs", level: "Production", project: "Vision X", note: "ChromaDB local embedding retrieval." }
      ]
    },
    {
      group: "CLOUD & DEVOPS INFRASTRUCTURE",
      color: "#f05a3e",
      skills: [
        { name: "Google Cloud Platform (GCP)", level: "Production", project: "Medicus Labs", note: "Cloud Run, Firestore, IAM security." },
        { name: "Amazon Web Services (AWS)", level: "Certified", project: "CloudOps IaC", note: "ECS, S3, CloudFront, Lambda." },
        { name: "Docker & Containerization", level: "Production", project: "All Projects", note: "Multi-stage minimal image packaging." },
        { name: "Kubernetes & Orchestration", level: "Proficient", project: "Cloud Labs", note: "Cluster deployments & autoscaling." },
        { name: "Terraform (IaC)", level: "Advanced", project: "CloudOps IaC", note: "Declarative infrastructure automation." },
        { name: "GitHub Actions CI/CD", level: "Production", project: "All Projects", note: "Automated test suites & container deploys." }
      ]
    },
    {
      group: "LANGUAGES & GAME ENGINES",
      color: "#a855f7",
      skills: [
        { name: "Python", level: "Expert", project: "Medicus / Vision X", note: "FastAPI, Flask, NumPy, OpenCV, ONNX." },
        { name: "JavaScript / TypeScript", level: "Expert", project: "All Web Platforms", note: "React, Next.js, Vite, WebGL." },
        { name: "Unity 3D & C#", level: "Certified", project: "ORVEX Games", note: "Procedural level design, Cinemachine." },
        { name: "GLSL / HLSL Shaders", level: "Proficient", project: "ORVEX Games", note: "Custom vertex shaders & particle physics." },
        { name: "C++ & Java Core", level: "Academic Core", project: "DSATM Systems", note: "Data structures, memory architecture, OOP." }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 lg:px-12 relative border-t border-white/10 canvas-grid">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-hand text-2xl text-[#38bdf8] -rotate-1">✦ Chapter 04</span>
              <span className="text-xs font-mono text-[#8b92a5] uppercase tracking-widest">[SKILL CONSTELLATION]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-none">
              CONNECTED <span className="text-[#38bdf8]">CAPABILITIES</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#8b92a5] font-sans max-w-2xl">
              An interactive engineering node map connecting languages, cloud infrastructure, and AI tools with shipped production products.
            </p>
          </div>

          <div className="font-hand text-lg text-[#38bdf8] rotate-1">
            (zero percentage circles, pure production capability)
          </div>
        </div>

        {/* Skill Node Constellation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, gIdx) => (
            <div
              key={gIdx}
              className="dark-card p-6 sm:p-8 space-y-6 flex flex-col justify-between relative overflow-hidden border border-white/10"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span
                    className="text-xs font-mono font-bold uppercase tracking-wider"
                    style={{ color: group.color }}
                  >
                    {group.group}
                  </span>
                  <span className="text-[10px] font-mono text-[#8b92a5]">0{gIdx + 1}</span>
                </div>

                <div className="space-y-3">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      onMouseEnter={() => setActiveSkill(skill)}
                      data-cursor="INSPECT"
                      className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all cursor-pointer space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white font-display">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded">
                          {skill.level}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-[#8b92a5]">
                        <span>Applied in: <strong className="text-slate-300">{skill.project}</strong></span>
                      </div>

                      <p className="text-[11px] text-slate-400 font-sans pt-1">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#8b92a5]">
                <span>MALLIKARJUN R. STACK</span>
                <span style={{ color: group.color }}>VERIFIED ✦</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
