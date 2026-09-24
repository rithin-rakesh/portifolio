import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, Bot, Activity, Landmark, Github, ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ProjectsSection({ onOpenWorkflow }) {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewMode, setViewMode] = useState('horizontal'); // 'horizontal' | 'grid'

  const projects = [
    {
      id: "job-agent",
      title: "Agentic AI Job Application Agent",
      subtitle: "Autonomous Multi-Agent Application Platform",
      period: "2026 — Present",
      category: "LANGGRAPH / AGENTIC AI",
      featured: true,
      description: "An end-to-end AI-powered job application platform integrating job discovery, candidate profiling, semantic matching, LLM screening, and automated multi-step browser applications with Human-in-the-Loop governance.",
      highlights: [
        "Architected with Python, FastAPI, LangGraph, NVIDIA NIM, and Supabase/PostgreSQL for stateful multi-agent execution and candidate answer management.",
        "Engineered multi-source job discovery (JobSpy, Apify) with normalization, deduplication, and hybrid semantic/deterministic candidate matching.",
        "Implemented LLM candidate screening with resume grounding, eligibility validation, and Human-in-the-Loop approval to prevent unsupported responses.",
        "Automated browser-based applications on Indeed and Glassdoor via Playwright/CDP and PyWinAuto, featuring CAPTCHA/MFA handling, daily limits, and persistent state recovery."
      ],
      tags: ["LangGraph", "NVIDIA NIM", "FastAPI", "Supabase", "PostgreSQL", "Playwright/CDP", "JobSpy", "Apify", "PyWinAuto", "HITL"],
      actionLabel: "Inspect Architecture",
      actionType: "modal",
      icon: Bot,
      color: "#ff5500"
    },
    {
      id: "brain-tumor",
      title: "Brain Tumor Classification",
      subtitle: "Deep Learning Medical Image Diagnostics",
      period: "2025",
      category: "DEEP LEARNING / VISION",
      featured: false,
      description: "A transfer learning computer vision pipeline designed to analyze complex MRI scans, classify neurological tumor patterns, and assist healthcare diagnostics with high accuracy and reduced false positives.",
      highlights: [
        "Preprocessed and augmented high-resolution medical MRI datasets.",
        "Built and fine-tuned Convolutional Neural Networks using transfer learning architectures.",
        "Evaluated classification sensitivity using confusion matrices, precision-recall, and ROC-AUC curves."
      ],
      tags: ["Python", "Transfer Learning", "CNNs", "Computer Vision", "Scikit-learn", "Deep Learning"],
      actionLabel: "View Code on GitHub",
      actionType: "link",
      link: "https://github.com/rithin-rakesh",
      icon: Activity,
      color: "#06b6d4"
    },
    {
      id: "loan-fraud",
      title: "Bank Loan Fraud Detection",
      subtitle: "Predictive Anomaly & Risk Classification",
      period: "2025",
      category: "MACHINE LEARNING / FINTECH",
      featured: false,
      description: "A machine learning fraud detection framework that evaluates high-volume transactional data to predict fraudulent financial applications and classify customer legitimacy with predictive feature modeling.",
      highlights: [
        "Cleaned, scaled, and normalized large structured financial datasets with high class imbalance.",
        "Engineered domain-specific risk indicator features to identify anomalous behavioral patterns.",
        "Delivered optimized classifier models with calibrated decision thresholds to minimize default losses."
      ],
      tags: ["Python", "Machine Learning", "EDA", "Feature Engineering", "Pandas", "Scikit-learn"],
      actionLabel: "View Code on GitHub",
      actionType: "link",
      link: "https://github.com/rithin-rakesh",
      icon: Landmark,
      color: "#10b981"
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress((scrollLeft / maxScroll) * 100);
      }
    }
  };

  const scrollByAmount = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-28 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/[0.08] relative">
      
      {/* Section Header */}
      <ScrollReveal direction="down">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[#ff5500] font-bold">|</span>
            <span className="text-white font-medium">FEATURED PROJECTS</span>
          </div>
          <div className="text-neutral-400">
            <span>03 / 05</span>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={150}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
              PROVEN INTELLIGENT SYSTEMS, BUILT FROM CODE TO PRODUCTION.
            </h2>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
              Explore autonomous multi-agent pipelines, transfer learning CNN models, and financial fraud detection systems.
            </p>
          </div>

          {/* Horizontal Track Controls & View Toggle */}
          <div className="flex items-center gap-3">
            {/* View Mode Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/[0.08]">
              <button
                onClick={() => setViewMode('horizontal')}
                className={`p-2 rounded-lg text-xs font-mono transition-colors ${
                  viewMode === 'horizontal' ? 'bg-[#ff5500] text-white' : 'text-neutral-400 hover:text-white'
                }`}
                title="Horizontal Scroll View"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs font-mono transition-colors ${
                  viewMode === 'grid' ? 'bg-[#ff5500] text-white' : 'text-neutral-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Arrows for Horizontal Scroll */}
            {viewMode === 'horizontal' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollByAmount('left')}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-[#ff5500] hover:text-white text-neutral-300 border border-white/[0.08] transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollByAmount('right')}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-[#ff5500] hover:text-white text-neutral-300 border border-white/[0.08] transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>

      {/* Horizontal Scroll Track Indicator */}
      {viewMode === 'horizontal' && (
        <div className="w-full h-1 bg-white/[0.05] rounded-full mb-8 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#ff5500] to-[#06b6d4] transition-all duration-150 ease-out"
            style={{ width: `${Math.max(15, scrollProgress)}%` }}
          />
        </div>
      )}

      {/* Projects Container (Horizontal Scroll Track OR Grid) */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className={
          viewMode === 'horizontal'
            ? 'flex gap-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory'
            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        }
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <div 
              key={idx}
              data-card="true"
              className={`relative z-20 rounded-2xl bg-[#0d0c14] border ${
                project.featured 
                  ? 'border-[#ff5500]/40 shadow-xl shadow-[#ff5500]/5' 
                  : 'border-white/[0.07]'
              } hover:border-[#ff5500]/60 transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:-translate-y-1.5 ${
                viewMode === 'horizontal'
                  ? 'min-w-[340px] sm:min-w-[420px] lg:min-w-[460px] snap-center shrink-0'
                  : 'h-full'
              }`}
            >
              <div>
                {/* Visual Header / Banner */}
                <div className="relative h-48 w-full bg-[#13121b] p-6 flex flex-col justify-between border-b border-white/[0.06] overflow-hidden">
                  
                  {/* Subtle Background Glow */}
                  <div 
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
                    style={{ backgroundColor: project.color }}
                  />

                  {/* Top Badges */}
                  <div className="flex items-center justify-between z-10">
                    <span 
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold tracking-wider uppercase"
                      style={{ 
                        backgroundColor: `${project.color}15`, 
                        color: project.color,
                        borderColor: `${project.color}40`,
                        borderWidth: '1px'
                      }}
                    >
                      {project.category}
                    </span>

                    <span className="text-[11px] font-mono text-neutral-400">
                      {project.period}
                    </span>
                  </div>

                  {/* Icon & Title In Header */}
                  <div className="z-10 flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white border"
                      style={{ 
                        backgroundColor: `${project.color}20`,
                        borderColor: `${project.color}40`
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: project.color }} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-neutral-400 block">
                        PROJECT 0{idx + 1}
                      </span>
                      <h4 className="font-display font-bold text-base text-white group-hover:text-[#ff5500] transition-colors">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <p className="text-xs text-neutral-300 leading-relaxed mb-5 font-normal">
                    {project.description}
                  </p>

                  {/* Highlight Bullets */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-[11px] text-neutral-400 leading-normal">
                        <span className="text-[#ff5500] font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button Footer */}
              <div className="p-6 pt-0 border-t border-transparent">
                {project.actionType === 'modal' ? (
                  <button
                    onClick={onOpenWorkflow}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#ff5500] hover:bg-[#ff6c1a] text-white font-mono text-xs font-semibold tracking-wider transition-all duration-200 shadow-md shadow-[#ff5500]/20"
                  >
                    <span>{project.actionLabel}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] hover:text-white text-neutral-300 font-mono text-xs font-medium tracking-wider border border-white/10 transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>{project.actionLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
