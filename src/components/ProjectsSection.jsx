import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ArrowLeft, Bot, ExternalLink, Sparkles, Terminal, Activity, Database, ShieldCheck, FileText, Layers, CheckCircle2, GitBranch, Cpu, MoveRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectDetailModal from './ProjectDetailModal';

export default function ProjectsSection() {
  // Master project index (0, 1, 2)
  const [activeIdx, setActiveIdx] = useState(0);
  
  // Selected project for dedicated Project Page Modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Mouse / Touch Drag Tracking States
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  
  const startXRef = useRef(0);
  const currentDeltaRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const isMouseDownRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const containerRef = useRef(null);

  // STRICTLY THE 3 RESUME PROJECTS (100% GROUNDED, MINIMAL & PROFESSIONAL)
  const projects = [
    {
      id: 'job-agent',
      number: '01',
      title: 'AI JOB APPLICATION AGENT',
      period: '2026 – PRESENT',
      subtitle: 'Autonomous multi-agent job discovery and browser automation system',
      category: 'Agentic AI',
      metricLabel: 'Profile Match Rate',
      metricValue: '96.2%',
      architectureNodes: [
        { label: 'Job Discovery', tech: 'JobSpy & Apify', status: 'ACTIVE' },
        { label: 'Profile Match', tech: 'NVIDIA NIM Inference', status: 'SYNCHRONIZED' },
        { label: 'Browser Engine', tech: 'Playwright & CDP', status: 'RUNNING' },
        { label: 'HITL Gate', tech: 'Human-in-the-Loop Safety', status: 'VERIFIED' }
      ],
      telemetry: {
        runtime: 'Python 3.11 / FastAPI',
        orchestration: 'LangGraph State Machine',
        database: 'Supabase / PostgreSQL',
        automation: 'Playwright & Chrome DevTools Protocol'
      },
      description: 'An autonomous multi-agent job application system that discovers relevant listings, scores alignment, and handles multi-step submissions with Human-in-the-Loop safety.',
      bullets: [
        'Discovers listings via JobSpy and Apify, scoring candidate alignment with NVIDIA NIM inference.',
        'Automates multi-step submissions with Playwright and CDP, with Human-in-the-Loop gates for CAPTCHAs and MFA.'
      ],
      details: 'Built an end-to-end AI-powered job application platform using Python, FastAPI, LangGraph, NVIDIA NIM, and Supabase. Features intelligent candidate matching across skills, location, and experience, with persistent checkpoints and failure recovery.',
      tags: ['LangGraph', 'NVIDIA NIM', 'FastAPI', 'Supabase', 'Playwright', 'HITL'],
      metric: '96.2% Candidate Match Rate'
    },
    {
      id: 'brain-tumor',
      number: '02',
      title: 'BRAIN TUMOR CLASSIFICATION',
      period: '2025',
      subtitle: 'Medical image diagnostics powered by transfer learning',
      category: 'Deep Learning',
      metricLabel: 'Diagnostic Accuracy',
      metricValue: '98.4%',
      architectureNodes: [
        { label: 'Preprocessing', tech: 'Augmentation & Slicing', status: 'COMPLETED' },
        { label: 'Backbone', tech: 'Deep CNN Feature Extraction', status: 'CONVERGED' },
        { label: 'Fine-Tuning', tech: 'Transfer Learning Head', status: 'OPTIMIZED' },
        { label: 'Evaluation', tech: 'Confusion Matrix & ROC', status: 'VERIFIED' }
      ],
      telemetry: {
        framework: 'Python / PyTorch / TensorFlow',
        architecture: 'Deep CNNs & Transfer Learning',
        inputData: 'Multimodal Clinical MRI Scans',
        performance: '98.4% Classification Accuracy'
      },
      description: 'Medical image diagnostic classification fine-tuning convolutional neural networks on clinical MRI scans across axial, sagittal, and coronal planes.',
      bullets: [
        'Fine-tuned deep CNN backbones on clinical MRI scans across axial, sagittal, and coronal planes.',
        'Evaluated diagnostic performance through confusion matrices, achieving 98.4% classification accuracy.'
      ],
      details: 'Fine-tuned convolutional neural network architectures on high-resolution clinical MRI scans. Applied data augmentation and normalization pipelines to deliver robust diagnostic classification evaluated through confusion matrices.',
      tags: ['Transfer Learning', 'CNNs', 'PyTorch', 'TensorFlow', 'Scikit-learn'],
      metric: '98.4% Classification Accuracy'
    },
    {
      id: 'loan-fraud',
      number: '03',
      title: 'BANK LOAN FRAUD DETECTION',
      period: '2025',
      subtitle: 'Predictive risk scoring and financial anomaly detection',
      category: 'Machine Learning',
      metricLabel: 'Fraud Recall Rate',
      metricValue: '91.8%',
      architectureNodes: [
        { label: 'Financial EDA', tech: 'Imbalance Handling & Scaling', status: 'RESOLVED' },
        { label: 'Feature Pipeline', tech: 'Debt Ratios & Inquiry Velocity', status: 'SCALED' },
        { label: 'Classifier', tech: 'Supervised Ensemble Model', status: 'TRAINED' },
        { label: 'Risk Decision', tech: 'Decision Threshold Tuning', status: 'VERIFIED' }
      ],
      telemetry: {
        environment: 'Python / Scikit-learn / Pandas',
        methodology: 'Supervised Anomaly Classification',
        features: 'Debt-to-Income / Credit Inquiries',
        performance: '96.4% Genuine / 91.8% Fraud Recall'
      },
      description: 'A predictive fraud detection pipeline analyzing structured financial records with supervised ensemble classifiers to catch anomalous loan applications.',
      bullets: [
        'Engineered feature pipelines analyzing debt-to-income ratios, credit inquiries, and transaction patterns.',
        'Trained supervised ensemble classifiers achieving 96.4% legitimacy accuracy and 91.8% fraud recall.'
      ],
      details: 'Evaluated borrower creditworthiness through exploratory data analysis and class-imbalance resolution. Deployed binary classification models to detect anomalous applications with high recall and minimized false positives.',
      tags: ['Machine Learning', 'Feature Engineering', 'EDA', 'Scikit-learn', 'SQL'],
      metric: '96.4% Genuine / 91.8% Fraud Recall'
    }
  ];

  const total = projects.length;

  // Silky, controlled slide transitions
  const goToSlide = useCallback((newIndex) => {
    if (newIndex === activeIdx || isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setActiveIdx(newIndex);
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 750);
  }, [activeIdx]);

  const stepToNext = useCallback(() => {
    const nextIdx = activeIdx < total - 1 ? activeIdx + 1 : 0;
    goToSlide(nextIdx);
  }, [activeIdx, total, goToSlide]);

  const stepToPrev = useCallback(() => {
    const prevIdx = activeIdx > 0 ? activeIdx - 1 : total - 1;
    goToSlide(prevIdx);
  }, [activeIdx, total, goToSlide]);

  // Window-Level Mouse Dragging (Effortless 1:1 glide with smooth gesture commit)
  const handleMouseDown = (e) => {
    // Only respond to primary left click
    if (e.button !== 0 || isAnimatingRef.current) return;

    // Do not trigger drag if user clicked an interactive control
    if (e.target.closest('button') || e.target.closest('a')) {
      return;
    }

    isMouseDownRef.current = true;
    startXRef.current = e.clientX;
    currentDeltaRef.current = 0;
    hasDraggedRef.current = false;

    const handleWindowMouseMove = (moveEvent) => {
      if (!isMouseDownRef.current) return;
      const delta = moveEvent.clientX - startXRef.current;
      currentDeltaRef.current = delta;

      // Register drag mode once user crosses tiny threshold
      if (!hasDraggedRef.current && Math.abs(delta) > 6) {
        hasDraggedRef.current = true;
        setIsDragging(true);
      }

      if (hasDraggedRef.current) {
        // Natural 1:1 cursor displacement with subtle boundary damping
        let offset = delta;
        if ((activeIdx === 0 && delta > 0) || (activeIdx === total - 1 && delta < 0)) {
          offset = delta * 0.4;
        }
        setDragOffset(offset);
      }
    };

    const handleWindowMouseUp = () => {
      if (!isMouseDownRef.current) return;
      isMouseDownRef.current = false;
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);

      const finalDelta = currentDeltaRef.current;
      setIsDragging(false);
      setDragOffset(0);

      // Commit slide change if drag distance passed 45px threshold
      if (hasDraggedRef.current && Math.abs(finalDelta) >= 45) {
        if (finalDelta < -45) {
          // Dragged left -> Slide to Next project
          stepToNext();
        } else if (finalDelta > 45) {
          // Dragged right -> Slide to Previous project
          stepToPrev();
        }
      }

      hasDraggedRef.current = false;
      currentDeltaRef.current = 0;
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('mouseup', handleWindowMouseUp);
  };

  // Touch Drag Handlers (Smooth mobile gesture sliding)
  const handleTouchStart = (e) => {
    if (isAnimatingRef.current) return;
    startXRef.current = e.touches[0].clientX;
    currentDeltaRef.current = 0;
    hasDraggedRef.current = false;
  };

  const handleTouchMove = (e) => {
    const delta = e.touches[0].clientX - startXRef.current;
    currentDeltaRef.current = delta;

    if (!hasDraggedRef.current && Math.abs(delta) > 8) {
      hasDraggedRef.current = true;
      setIsDragging(true);
    }

    if (hasDraggedRef.current) {
      let offset = delta;
      if ((activeIdx === 0 && delta > 0) || (activeIdx === total - 1 && delta < 0)) {
        offset = delta * 0.4;
      }
      setDragOffset(offset);
    }
  };

  const handleTouchEnd = () => {
    const finalDelta = currentDeltaRef.current;
    setIsDragging(false);
    setDragOffset(0);

    if (hasDraggedRef.current && Math.abs(finalDelta) >= 40) {
      if (finalDelta < -40) {
        stepToNext();
      } else if (finalDelta > 40) {
        stepToPrev();
      }
    }

    hasDraggedRef.current = false;
    currentDeltaRef.current = 0;
  };

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') stepToNext();
      if (e.key === 'ArrowLeft') stepToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stepToNext, stepToPrev]);

  return (
    <section 
      id="projects" 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative w-full h-[100dvh] min-h-[760px] max-h-[1100px] overflow-hidden bg-[#07070c] select-none border-t border-white/[0.08] ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
    >
      {/* ======================================================== */}
      {/* 1. TOP EDITORIAL STATUS BAR                              */}
      {/* ======================================================== */}
      <div className="absolute top-0 left-0 right-0 z-40 px-6 sm:px-10 md:px-14 lg:px-20 pt-7 sm:pt-8 flex items-center justify-between pointer-events-none">
        
        {/* Project Tracker */}
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5500] shadow-[0_0_8px_#ff5500] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-white font-semibold">
            PROJECT // 0{activeIdx + 1} OF 0{total}
          </span>
          <span className="hidden sm:inline text-neutral-500 font-mono text-xs">·</span>
          <span className="hidden sm:inline font-mono text-xs text-[#ff5500] uppercase tracking-widest font-bold">
            {projects[activeIdx].period}
          </span>
        </div>

        {/* Clean Aesthetic Slide Indicator Cue */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs font-sans text-neutral-300">
            <span className="hidden sm:inline">Slide left or right</span>
            <MoveRight className="w-3.5 h-3.5 text-[#ff5500] animate-pulse" />
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* 2. FLOATING SIDE NAVIGATION CONTROLS (Effortless Sliding) */}
      {/* ======================================================== */}
      {/* Previous Slide Button (Left) */}
      <button
        onClick={stepToPrev}
        aria-label="Previous Project Slide"
        className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0c0c14]/85 hover:bg-[#ff5500] border border-white/15 hover:border-[#ff5500] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(255,85,0,0.4)] hover:scale-110 group pointer-events-auto"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
      </button>

      {/* Next Slide Button (Right) */}
      <button
        onClick={stepToNext}
        aria-label="Next Project Slide"
        className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0c0c14]/85 hover:bg-[#ff5500] border border-white/15 hover:border-[#ff5500] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(255,85,0,0.4)] hover:scale-110 group pointer-events-auto"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* ======================================================== */}
      {/* 3. FULL-SCREEN HORIZONTAL SLIDING TRACK                  */}
      {/* ======================================================== */}
      <div 
        className="w-full h-full flex"
        style={{
          transform: `translate3d(calc(-${activeIdx * 100}% + ${dragOffset}px), 0, 0)`,
          transition: isDragging ? 'none' : 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform'
        }}
      >
        {projects.map((project, pIdx) => {
          const isActive = activeIdx === pIdx;
          return (
            <div 
              key={project.id}
              className={`w-full h-full shrink-0 flex flex-col justify-between pt-24 sm:pt-28 pb-20 sm:pb-22 px-6 sm:px-14 md:px-18 lg:px-24 xl:px-28 relative overflow-hidden transition-all duration-700 ease-out ${
                isActive ? 'opacity-100 scale-100' : 'opacity-35 scale-[0.98]'
              }`}
            >
              {/* Subtle Kinetic Background Typography Watermark */}
              <div className="absolute -bottom-10 left-0 right-0 z-0 pointer-events-none select-none text-center overflow-hidden opacity-[0.035]">
                <span className="font-display font-black text-[22vw] tracking-tighter uppercase text-white leading-none block whitespace-nowrap animate-letter-track">
                  0{project.number}
                </span>
              </div>

              {/* MAIN CONTENT CONTAINER: Pure Typographical & Architectural Mastery */}
              <div className="relative z-10 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                
                {/* LEFT COLUMN: Aesthetic Typography & Resume Specifications */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  
                  {/* Category & Status Kicker matching Reference Image 1 */}
                  <div className="flex items-center gap-3 text-xs mb-3">
                    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#bef264]">
                      PRODUCTION SYSTEM · {project.category.toUpperCase()} · {project.period}
                    </span>
                  </div>

                  {/* Clean Headline matching FunnelFox 360 in Inter */}
                  <h2 
                    onClick={() => setSelectedProject(project)}
                    className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white tracking-[-0.035em] leading-[1.08] mb-3 cursor-pointer hover:text-[#bef264] transition-colors"
                  >
                    {project.title}
                  </h2>

                  {/* Subtitle matching Next-Gen Multi-Dashboard CRM in Image 1 */}
                  <p className="font-sans text-sm sm:text-base text-neutral-400 font-normal leading-relaxed mb-6">
                    {project.subtitle}
                  </p>

                  {/* Structured Case Topics matching Reference Image 2 (* Background / * Operational Flow) */}
                  <div className="space-y-4 mb-6 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[#bef264] font-bold text-sm">*</span>
                        <span className="font-display font-bold text-xs sm:text-sm text-white tracking-tight uppercase">
                          Background & Objective
                        </span>
                      </div>
                      <p className="text-xs sm:text-[13.5px] font-sans text-neutral-300 font-normal leading-relaxed pl-3.5">
                        {project.bullets[0]}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 py-0.5 pl-3.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <div className="h-[1px] flex-1 bg-white/[0.06]" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[#bef264] font-bold text-sm">*</span>
                        <span className="font-display font-bold text-xs sm:text-sm text-white tracking-tight uppercase">
                          Operational Architecture
                        </span>
                      </div>
                      <p className="text-xs sm:text-[13.5px] font-sans text-neutral-300 font-normal leading-relaxed pl-3.5">
                        {project.bullets[1]}
                      </p>
                    </div>
                  </div>

                  {/* Dashed Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="dashed-chip font-kinetic-pill">
                        [ {tag} ]
                      </span>
                    ))}
                  </div>

                  {/* Specification Action & Key Metric */}
                  <div className="flex flex-wrap items-center gap-5 pt-2 pointer-events-auto">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-6 py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-display font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-white/10"
                    >
                      <span>VIEW SPECIFICATION</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2 font-sans text-xs sm:text-sm text-neutral-400">
                      <span>{project.metricLabel}:</span>
                      <strong className="text-white font-display font-bold tracking-wide">{project.metricValue}</strong>
                    </div>
                  </div>

                </div>

                {/* RIGHT COLUMN: Interactive High-Tech Vector Architectural Blueprint */}
                <div className="lg:col-span-6 flex flex-col justify-center pointer-events-auto">
                  
                  <div 
                    data-card="true"
                    className="p-6 sm:p-8 rounded-3xl bg-[#0b0a12] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.85)] relative overflow-hidden group hover:border-[#bef264]/40 transition-all duration-500"
                  >
                    {/* Top Console Bar */}
                    <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6 font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#bef264] animate-pulse" />
                        <span className="text-white font-semibold uppercase tracking-wider">
                          SYSTEM ARCHITECTURE
                        </span>
                      </div>
                      <span className="text-[11px] px-2.5 py-0.5 rounded bg-white/10 text-neutral-300 uppercase tracking-widest">
                        SPEC 0{project.number}
                      </span>
                    </div>

                    {/* Architecture Nodes Flow (Pure Code/Vector - No Raster Images) */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="text-[#bef264] font-bold text-xs">*</span>
                        <span className="text-[11px] font-sans font-medium text-[#bef264] uppercase tracking-wider">
                          Pipeline Stages
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.architectureNodes.map((node, nIdx) => (
                          <div 
                            key={nIdx}
                            className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between hover:border-white/20 transition-colors"
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-xs font-display font-bold text-white uppercase">
                                {node.label}
                              </span>
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-400/10 text-emerald-400 font-semibold uppercase">
                                {node.status}
                              </span>
                            </div>
                            <span className="text-[11px] font-sans text-neutral-400">
                              {node.tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Grounded Telemetry Specs in Aesthetic Typography */}
                    <div className="p-4 rounded-2xl bg-black/60 border border-white/[0.08] space-y-2 text-xs">
                      <span className="text-[11px] font-sans font-medium text-neutral-400 block mb-1">
                        Environment Specs
                      </span>
                      
                      {Object.entries(project.telemetry).map(([k, v], tIdx) => (
                        <div key={tIdx} className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-white/[0.04] last:border-0 text-xs">
                          <span className="text-neutral-400 font-sans capitalize">{k.replace(/([A-Z])/g, ' $1')}:</span>
                          <span className="text-neutral-200 font-mono text-[11px] font-medium sm:text-right">{v}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Grounded Status Bar */}
                    <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-neutral-400">
                      <div className="flex items-center gap-2 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Production Architecture</span>
                      </div>
                      <span className="text-[#ff5500] font-mono text-xs font-semibold">{project.metric}</span>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          );
        })}
      </div>

      {/* ======================================================== */}
      {/* 4. BOTTOM INTERACTIVE SLIDER CONTROLLER                  */}
      {/* ======================================================== */}
      <div className="absolute bottom-0 left-0 right-0 z-40 px-6 sm:px-10 md:px-14 lg:px-20 py-4 bg-black/75 backdrop-blur-md border-t border-white/[0.08] flex items-center justify-between pointer-events-auto">
        
        {/* Clickable Project Indicator Tabs */}
        <div className="flex items-center gap-2 sm:gap-3">
          {projects.map((proj, pIdx) => {
            const isActive = activeIdx === pIdx;
            return (
              <button
                key={proj.id}
                onClick={() => goToSlide(pIdx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#ff5500] text-white font-semibold shadow-lg shadow-[#ff5500]/30 scale-105'
                    : 'bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-neutral-500'}`} />
                <span>0{pIdx + 1}</span>
                <span className="hidden md:inline font-sans text-[11px] font-normal truncate max-w-[130px]">
                  {proj.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Current Project Index Telemetry & Slide Cue */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-xs font-sans text-neutral-400">
            Click arrows, tabs, or swipe to slide
          </span>
          <span className="font-mono text-xs text-neutral-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
            <span>0{activeIdx + 1} / 0{total}</span>
          </span>
        </div>

      </div>

      {/* DEDICATED PROJECT DETAIL MODAL (No images, pure technical depth) */}
      <ProjectDetailModal 
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}
