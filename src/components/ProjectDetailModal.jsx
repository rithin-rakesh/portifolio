import React, { useEffect } from 'react';
import { X, ArrowRight, ExternalLink, Github, CheckCircle2, Bot, Brain, ShieldAlert, Cpu, Layers, Terminal } from 'lucide-react';

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl bg-[#0d0c14] border border-white/15 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden my-auto max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/[0.08] bg-[#12111b]/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5500] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-300">
              SPECIFICATION // {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#ff5500] text-white font-mono text-xs uppercase tracking-wider transition-colors duration-200"
          >
            <span>Close</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10 font-sans text-neutral-200">
          
          {/* Hero Title & Period matching Reference Image 1 */}
          <div className="border-b border-white/10 pb-8">
            <div className="flex items-center gap-3 text-xs font-mono text-[#bef264] uppercase tracking-[0.2em] mb-3">
              <span>{project.category.toUpperCase()}</span>
              <span>·</span>
              <span>VERIFIED PRODUCTION SPECIFICATION</span>
              <span>·</span>
              <span>{project.period}</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-[-0.035em] leading-[1.08]">
              {project.title}
            </h1>
            
            <p className="mt-3 text-sm sm:text-base font-sans text-neutral-400 font-normal leading-relaxed max-w-3xl">
              {project.subtitle}
            </p>
          </div>

          {/* Platform Interface Preview (if project has an image) */}
          {project.image && (
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl">
              <div className="flex items-center justify-between px-5 py-3 bg-[#12111d] border-b border-white/10 text-xs font-mono text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#bef264] animate-pulse" />
                  <span className="font-semibold text-white tracking-wider uppercase">
                    PLATFORM INTERFACE PREVIEW
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] px-2.5 py-0.5 rounded bg-emerald-400/10 text-emerald-400 font-mono uppercase tracking-wider">
                    CLOUDFLARE EDGE PREVIEW
                  </span>
                </div>
              </div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full max-h-[460px] object-cover object-top"
              />
            </div>
          )}

          {/* Architecture Pipeline Telemetry Grid */}
          <div className="p-6 sm:p-8 rounded-2xl bg-black/50 border border-white/15">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="text-white uppercase font-bold tracking-wider">
                  PIPELINE STAGES
                </span>
              </div>
              <span className="text-[#bef264] uppercase tracking-wider text-[11px] font-mono">
                PRODUCTION READY
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.architectureNodes && project.architectureNodes.map((node, nIdx) => (
                <div key={nIdx} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-[10px] font-mono text-[#bef264] uppercase tracking-widest block mb-1">
                    {node.status}
                  </span>
                  <h4 className="font-display text-sm font-bold text-white uppercase mb-1">
                    {node.label}
                  </h4>
                  <p className="text-xs font-sans text-neutral-400">
                    {node.tech}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Case Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 8 Cols: Structured Topics */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Background */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-tight">
                    Background
                  </h3>
                </div>
                <p className="text-sm font-sans text-neutral-300 font-normal leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Separator Node */}
              <div className="flex items-center gap-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <div className="h-[1px] flex-1 bg-white/[0.08]" />
              </div>

              {/* Problem & Operational Friction */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-tight">
                    The Problem & Operational Friction
                  </h3>
                </div>
                <p className="text-sm font-sans text-neutral-300 font-normal leading-relaxed">
                  {project.details}
                </p>
              </div>

              {/* Separator Node */}
              <div className="flex items-center gap-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <div className="h-[1px] flex-1 bg-white/[0.08]" />
              </div>

              {/* Key Implementation Bullets */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-tight">
                    Key Capabilities & Implementation
                  </h3>
                </div>
                <div className="space-y-3">
                  {project.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.06]">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 shrink-0 select-none" />
                      <p className="text-xs sm:text-[13.5px] font-sans text-neutral-200 font-normal leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 4 Cols: Technical Stack & Meta */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff5500] block mb-4">
                  CORE TECH STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="dashed-chip">
                      [ {tag} ]
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Metrics Card */}
              <div className="p-6 rounded-2xl bg-[#ff5500]/10 border border-[#ff5500]/25">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff5500] block mb-2">
                  PERFORMANCE METRICS
                </span>
                <div className="space-y-2 text-xs text-neutral-200">
                  <div className="flex justify-between py-1 border-b border-white/10 font-sans">
                    <span>{project.metricLabel || 'Performance'}:</span>
                    <span className="font-bold text-white font-mono">{project.metricValue || project.metric || 'Production Ready'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10 font-sans">
                    <span>Status:</span>
                    <span className="text-emerald-400 font-bold font-mono">VERIFIED</span>
                  </div>
                  <div className="flex justify-between py-1 font-sans">
                    <span>Stack:</span>
                    <span className="text-white font-mono truncate max-w-[170px] text-right">
                      {project.telemetry.runtime || project.telemetry.framework || project.telemetry.frontend || project.telemetry.environment || 'Production'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <a 
                  href="https://github.com/rithin-rakesh" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#ff5500] hover:bg-[#ff6c1a] text-white font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-colors duration-200 shadow-lg shadow-[#ff5500]/25"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW CODE ON GITHUB</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
