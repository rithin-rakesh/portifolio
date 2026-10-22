import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ArrowDown, ArrowRight, Bot, Cpu, Database, ShieldCheck, Globe, FileText, ExternalLink, Activity, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';

/* Hallmark · component: HeroSection · 4-Slide 3D Scroll-Controlled Storytelling · slop: purged */
export default function HeroSection({ onOpenResume }) {
  const containerRef = useRef(null);
  const stickyFrameRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState('');

  // Live IST Clock (Kannur, Kerala) formatted as HH:MM
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTime(now.toLocaleTimeString('en-GB', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Continuous rAF-throttled scroll progress calculation across the 400vh track
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false;
            return;
          }

          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight || 800;
          const totalScrollable = rect.height - windowHeight;

          if (totalScrollable > 0) {
            const currentScroll = -rect.top;
            const progress = Math.min(1, Math.max(0, currentScroll / totalScrollable));
            setScrollProgress(progress);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interactive mouse coordinate tracking for 3D camera parallax
  const handleMouseMove = (e) => {
    if (!stickyFrameRef.current) return;
    const rect = stickyFrameRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Jump to specific chapter (0 to 3) smoothly
  const jumpToSlide = useCallback((slideIdx) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const windowHeight = window.innerHeight || 800;
    const totalScrollable = containerRef.current.offsetHeight - windowHeight;
    const targetY = containerTop + (slideIdx / 3) * totalScrollable;

    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  }, []);

  // Keyboard navigation for jumping chapters (1, 2, 3, 4)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only respond if active element is not an input
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (['1', '2', '3', '4'].includes(e.key)) {
        jumpToSlide(parseInt(e.key, 10) - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [jumpToSlide]);

  // Interpolated progress float between 0 and 3
  const progressFloat = scrollProgress * 3;
  const currentChapter = Math.min(3, Math.floor(scrollProgress * 4));

  // Exit curtain compression when completing Chapter 4 (scrollProgress > 0.92)
  const exitT = Math.max(0, (scrollProgress - 0.92) / 0.08);
  const heroScale = 1 - exitT * 0.06;
  const dimOpacity = exitT * 0.75;

  // Chapter configurations
  const chapters = [
    {
      id: 'foundation',
      number: '01',
      kicker: 'ARCHITECTURAL FOUNDATION',
      tabLabel: 'Identity & Ethos',
      headline: 'FROM STATIC CODE TO AUTONOMOUS REASONING',
      subtitle: 'Designing resilient multi-agent systems, low-latency inference pipelines, and deterministic state machines.',
      quote: '“True autonomy in artificial intelligence isn’t generating tokens—it is executing verifiable actions with deterministic state.”',
      telemetry: {
        focus: 'LangGraph · NVIDIA NIM · FastAPI',
        origin: 'Kannur, Kerala [11.8745° N, 75.3704° E]',
        status: 'Active AI Intern @ Leniko Solutions'
      }
    },
    {
      id: 'agentic',
      number: '02',
      kicker: 'AGENTIC ARCHITECTURES',
      tabLabel: 'Multi-Agent Core',
      headline: 'DETERMINISTIC STATE IN NON-DETERMINISTIC WORLDS',
      subtitle: 'Orchestrating autonomous agents that discover listings, score candidate alignment, and handle multi-step browser execution with Human-in-the-Loop safety.',
      bullets: [
        'LangGraph state graphs with persistent checkpointing and automatic recovery',
        'Playwright & Chrome DevTools Protocol automation with CAPTCHA / MFA safety gates',
        'NVIDIA NIM inference for sub-millisecond candidate profiling'
      ],
      metricLabel: 'Candidate Match Rate',
      metricValue: '96.2%',
      metricSub: 'Verified Zero Hallucination Gate'
    },
    {
      id: 'neural',
      number: '03',
      kicker: 'DEEP LEARNING & VISION',
      tabLabel: 'Neural Systems',
      headline: 'SUB-MILLISECOND INFERENCE & CLINICAL DIAGNOSTICS',
      subtitle: 'Fine-tuning deep convolutional backbones on multimodal clinical MRI scans across axial, sagittal, and coronal planes with ROC validation.',
      bullets: [
        'Transfer learning architectures evaluated via confusion matrices',
        'Multimodal MRI feature extraction with augmented normalization pipelines',
        'Financial anomaly ensemble models achieving 91.8% fraud recall'
      ],
      metricLabel: 'Diagnostic Accuracy',
      metricValue: '98.4%',
      metricSub: 'Supervised Medical Imaging Models'
    },
    {
      id: 'production',
      number: '04',
      kicker: 'PRODUCTION DEPLOYMENTS',
      tabLabel: 'Global Edge Scale',
      headline: 'MODELS SHIFT, BUT INFRASTRUCTURE ENDURES',
      subtitle: 'Deploying full-stack production platforms on Cloudflare Workers edge runtime—combining D1 SQL, R2 object storage, and automated document generation.',
      bullets: [
        'Kannur Trails: 85-destination tourism & quotation engine deployed on Cloudflare edge',
        'Automated versioned quotations and branded PDF generation services',
        'Email-verification security safeguards with instant revocation controls'
      ],
      metricLabel: 'Catalog Depth',
      metricValue: '85 Stays & Destinations',
      metricSub: 'Cloudflare Workers · D1 SQL · R2'
    }
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative z-10 w-full h-[400vh] bg-[#070709] select-none"
    >
      {/* ======================================================== */}
      {/* STICKY 100dvh VIEWPORT FRAME                             */}
      {/* ======================================================== */}
      <div
        ref={stickyFrameRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-between"
        style={{
          transform: `scale(${heroScale})`,
          willChange: 'transform'
        }}
      >
        {/* Sinking Cinematic Dim Overlay (Deepens as About Section Rises at the end) */}
        <div
          className="absolute inset-0 bg-black pointer-events-none z-40 transition-opacity duration-150"
          style={{ opacity: dimOpacity, willChange: 'opacity' }}
        />

        {/* ======================================================== */}
        {/* 3D CANVAS: Spatial Particles, Isometric Grid & Caustic   */}
        {/* ======================================================== */}
        <Hero3DCanvas scrollProgress={scrollProgress} mousePos={mousePos} />

        {/* ======================================================== */}
        {/* TOP PERSISTENT NAVIGATION BAR                            */}
        {/* ======================================================== */}
        <header className="relative z-30 w-full pt-5 sm:pt-7 md:pt-8 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 flex items-center justify-between pointer-events-auto">
          
          {/* Brand Identity / Home Jump */}
          <button
            onClick={() => jumpToSlide(0)}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
          >
            <span className="font-hero text-2xl sm:text-3xl md:text-4xl text-white tracking-wide uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] group-hover:text-[#bef264] transition-colors duration-200">
              RITHIN
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest px-2 py-0.5 rounded bg-white/10 text-neutral-300 uppercase">
              AI / ML
            </span>
          </button>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-11 text-xs lg:text-[13px] font-mono uppercase tracking-[0.25em] text-white/90 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            <button
              onClick={() => jumpToSlide(0)}
              className="relative text-white transition-colors duration-200 py-1"
            >
              Story
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#bef264] rounded-full" />
            </button>
            <a
              href="#about"
              className="relative text-neutral-400 hover:text-white transition-colors duration-200 py-1"
            >
              About
            </a>
            <a
              href="#experience"
              className="relative text-neutral-400 hover:text-white transition-colors duration-200 py-1"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="relative text-neutral-400 hover:text-white transition-colors duration-200 py-1"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hidden lg:inline-block relative text-neutral-400 hover:text-white transition-colors duration-200 py-1"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="relative text-neutral-400 hover:text-white transition-colors duration-200 py-1"
            >
              Contact
            </a>
          </nav>

          {/* Right Live IST Telemetry Clock & CV Modal */}
          <div className="flex items-center gap-3 sm:gap-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            <div className="flex items-center gap-2 text-xs sm:text-[13px] font-mono tracking-[0.2em] text-white/95 font-medium">
              <div className="flex items-center gap-[2px] h-3.5 px-1 py-0.5 rounded bg-emerald-400/15 border border-emerald-400/30">
                <span className="w-[2px] h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="w-[2px] h-3 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                <span className="w-[2px] h-1.5 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                <span className="w-[2px] h-2.5 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '450ms' }} />
              </div>

              <span className="uppercase hidden sm:inline">KANNUR</span>
              <span className="text-white/70">(IN)</span>
              <span className="font-semibold text-white ml-0.5">{time ? time.slice(0, 5) : '18:30'}</span>
            </div>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-[#ff5500] text-white border border-white/20 text-[11px] font-mono uppercase tracking-wider transition-colors duration-200 backdrop-blur-sm shadow-md"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>
          </div>

        </header>

        {/* ======================================================== */}
        {/* 3D STORYTELLING STAGE: 4 CONTINUOUS 3D SLIDES           */}
        {/* ======================================================== */}
        <div 
          className="relative z-20 flex-1 w-full max-w-[1520px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 py-2 sm:py-4 flex items-center justify-center overflow-hidden"
          style={{ perspective: '1200px' }}
        >
          {chapters.map((chap, idx) => {
            // Distance from active camera position (-3 to +3)
            const dist = progressFloat - idx;
            const absDist = Math.abs(dist);

            // Visibility threshold
            if (absDist > 1.35) return null;

            // Mathematical interpolation curves for enter, present, exit
            const opacity = Math.max(0, Math.min(1, 1 - absDist * 1.3));
            const translateZ = dist < 0 ? dist * 220 : dist * 120;
            const translateY = dist < 0 ? -dist * 35 : -dist * 40;
            const rotateX = dist < 0 ? -dist * 14 : -dist * 10;
            const rotateY = mousePos.x * 5;
            const blurAmount = Math.max(0, Math.min(8, (absDist - 0.25) * 12));
            const isCurrent = absDist < 0.5;

            return (
              <div
                key={chap.id}
                className="absolute inset-0 px-4 sm:px-8 md:px-12 flex items-center justify-center pointer-events-none"
                style={{
                  opacity,
                  filter: `blur(${blurAmount}px)`,
                  transform: `translate3d(0, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transformStyle: 'preserve-3d',
                  willChange: 'transform, opacity, filter',
                  pointerEvents: isCurrent ? 'auto' : 'none'
                }}
              >
                
                {/* Slide 01: Inception & Core Identity */}
                {idx === 0 && (
                  <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left: Silhouette Portrait in 3D Depth Vessel */}
                    <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                      <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.85)] group bg-black/60">
                        {/* Blur halo */}
                        <img 
                          src="/profile.jpg" 
                          alt="" 
                          aria-hidden="true" 
                          className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-60 scale-110"
                        />
                        {/* Sharp portrait */}
                        <img 
                          src="/profile.jpg" 
                          alt="Rithin Rakesh" 
                          className="relative w-full h-full object-cover object-[55%_4%] filter contrast-[1.05] brightness-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />
                        
                        {/* Status label inside image */}
                        <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-white text-[11px] font-semibold">Rithin Rakesh</span>
                          </div>
                          <span className="text-[#bef264] text-[10px] uppercase font-mono">Leniko Solutions</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Architectural Narrative & Bold Display Title */}
                    <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-left">
                      <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#bef264] uppercase font-semibold">
                        <span className="w-2 h-2 rounded-full bg-[#bef264]" />
                        <span>01 // {chap.kicker}</span>
                      </div>

                      <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white tracking-[-0.035em] leading-[1.08] uppercase">
                        FROM STATIC CODE TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-neutral-400">AUTONOMOUS REASONING</span>
                      </h1>

                      <blockquote className="font-sans text-sm sm:text-base text-neutral-300 font-medium leading-relaxed italic border-l-2 border-[#bef264] pl-4">
                        {chap.quote}
                      </blockquote>

                      {/* Stack Badges */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {['LangGraph', 'NVIDIA NIM', 'FastAPI', 'PyTorch', 'Cloudflare Workers'].map((tag, tIdx) => (
                          <span key={tIdx} className="dashed-chip text-[11px]">
                            [ {tag} ]
                          </span>
                        ))}
                      </div>

                      {/* Direct Micro-Action & Location Strip */}
                      <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
                        <a 
                          href="mailto:rithinrakesh2002@gmail.com" 
                          className="text-white hover:text-[#bef264] underline underline-offset-4 font-semibold transition-colors"
                        >
                          RITHINRAKESH2002@GMAIL.COM
                        </a>
                        <span>·</span>
                        <span className="text-neutral-400">Kannur, Kerala (India)</span>
                      </div>
                    </div>

                  </div>
                )}

                {/* Slide 02: Agentic State Machines */}
                {idx === 1 && (
                  <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left 6 Cols: Story Narrative & Metrics */}
                    <div className="lg:col-span-6 space-y-5 text-left">
                      <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#bef264] uppercase font-semibold">
                        <span className="w-2 h-2 rounded-full bg-[#bef264]" />
                        <span>02 // {chap.kicker}</span>
                      </div>

                      <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-[-0.03em] leading-[1.08] uppercase">
                        {chap.headline}
                      </h2>

                      <p className="font-sans text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
                        {chap.subtitle}
                      </p>

                      <div className="space-y-2.5 pt-1">
                        {chap.bullets.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-sans text-neutral-300">
                            <span className="text-[#bef264] font-mono mt-0.5 select-none">›</span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>

                      {/* Verified Telemetry Box */}
                      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-[#bef264] block">Verified Milestone</span>
                          <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">{chap.metricValue}</span>
                          <span className="font-sans text-xs text-neutral-400 block">{chap.metricLabel}</span>
                        </div>
                        <div className="text-right font-mono text-xs">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-400 font-semibold border border-emerald-400/20">
                            HITL VERIFIED
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right 6 Cols: 3D Topological Multi-Agent Workflow Blueprint */}
                    <div className="lg:col-span-6 flex justify-center">
                      <div className="w-full p-6 sm:p-7 rounded-3xl bg-[#0b0a13] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.9)] space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-white font-semibold uppercase tracking-wider">LANGGRAPH WORKFLOW STATE</span>
                          </div>
                          <span className="text-[#bef264] text-[10px] font-mono uppercase">SPEC 01</span>
                        </div>

                        {/* Pipeline Nodes */}
                        <div className="space-y-3">
                          {[
                            { name: 'JobSpy & Apify Discovery', desc: 'Aggregates listings & sanitizes schema', status: 'ACTIVE', tech: 'JobSpy API' },
                            { name: 'NVIDIA NIM Profile Scorer', desc: 'Evaluates candidate skills & location alignment', status: 'SYNCED', tech: 'NIM Inference' },
                            { name: 'Playwright CDP Automation', desc: 'Navigates multi-step form submissions', status: 'RUNNING', tech: 'CDP Engine' },
                            { name: 'Human-in-the-Loop Safety Gate', desc: 'Guards CAPTCHAs, MFA, & ungrounded prompts', status: 'LOCKED', tech: 'Safety Gate' }
                          ].map((step, sIdx) => (
                            <div key={sIdx} className="p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.08] flex items-center justify-between hover:border-white/20 transition-colors">
                              <div>
                                <h4 className="font-display font-bold text-xs uppercase text-white tracking-tight">{step.name}</h4>
                                <p className="text-[11px] font-sans text-neutral-400">{step.desc}</p>
                              </div>
                              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-emerald-400 font-semibold uppercase">
                                {step.status}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 text-right">
                          <span className="text-[11px] font-mono text-neutral-400">Orchestration: Python 3.11 / FastAPI / Supabase</span>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* Slide 03: Neural Systems & Clinical Diagnostics */}
                {idx === 2 && (
                  <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left 6 Cols: Story Narrative & Metrics */}
                    <div className="lg:col-span-6 space-y-5 text-left">
                      <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#bef264] uppercase font-semibold">
                        <span className="w-2 h-2 rounded-full bg-[#bef264]" />
                        <span>03 // {chap.kicker}</span>
                      </div>

                      <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-[-0.03em] leading-[1.08] uppercase">
                        {chap.headline}
                      </h2>

                      <p className="font-sans text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
                        {chap.subtitle}
                      </p>

                      <div className="space-y-2.5 pt-1">
                        {chap.bullets.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-sans text-neutral-300">
                            <span className="text-[#bef264] font-mono mt-0.5 select-none">›</span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>

                      {/* Verified Telemetry Box */}
                      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-[#bef264] block">Validation Accuracy</span>
                          <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">{chap.metricValue}</span>
                          <span className="font-sans text-xs text-neutral-400 block">{chap.metricSub}</span>
                        </div>
                        <div className="text-right font-mono text-xs">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-400 font-semibold border border-emerald-400/20">
                            CONVERGED
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right 6 Cols: 3D Volumetric Tensor Lattice Vessel */}
                    <div className="lg:col-span-6 flex justify-center">
                      <div className="w-full p-6 sm:p-7 rounded-3xl bg-[#0b0a13] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.9)] space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#bef264] animate-pulse" />
                            <span className="text-white font-semibold uppercase tracking-wider">NEURAL DIAGNOSTIC PIPELINE</span>
                          </div>
                          <span className="text-[#bef264] text-[10px] font-mono uppercase">SPEC 02 & 03</span>
                        </div>

                        {/* Multi-planar Orthogonal Slices Visual */}
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { plane: 'AXIAL PLANE', res: '256 × 256', acc: '98.6%' },
                            { plane: 'CORONAL PLANE', res: '256 × 256', acc: '98.2%' },
                            { plane: 'SAGITTAL PLANE', res: '256 × 256', acc: '98.4%' }
                          ].map((sl, slIdx) => (
                            <div key={slIdx} className="p-3 rounded-2xl bg-white/[0.025] border border-white/[0.08] text-center">
                              <span className="font-mono text-[9px] text-neutral-400 block mb-1">{sl.plane}</span>
                              <span className="font-display font-bold text-base text-white block">{sl.acc}</span>
                              <span className="font-mono text-[10px] text-emerald-400 mt-1 block">Valid</span>
                            </div>
                          ))}
                        </div>

                        {/* Deep Learning Engine Specs */}
                        <div className="p-4 rounded-2xl bg-black/60 border border-white/[0.08] space-y-2 text-xs">
                          <div className="flex justify-between py-1 border-b border-white/10 font-sans">
                            <span className="text-neutral-400">Backbone:</span>
                            <span className="text-white font-mono">Fine-Tuned CNNs & Transfer Learning</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-white/10 font-sans">
                            <span className="text-neutral-400">Evaluation:</span>
                            <span className="text-white font-mono">Confusion Matrix & ROC AUC</span>
                          </div>
                          <div className="flex justify-between py-1 font-sans">
                            <span className="text-neutral-400">Risk Model:</span>
                            <span className="text-[#ff5500] font-mono font-semibold">91.8% Loan Fraud Recall</span>
                          </div>
                        </div>

                        <div className="pt-1 text-right">
                          <span className="text-[11px] font-mono text-neutral-400">Framework: PyTorch / Scikit-learn / TensorFlow</span>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* Slide 04: Production Systems & Global Edge Scale */}
                {idx === 3 && (
                  <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left 6 Cols: Story Narrative & Actions */}
                    <div className="lg:col-span-6 space-y-5 text-left">
                      <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#bef264] uppercase font-semibold">
                        <span className="w-2 h-2 rounded-full bg-[#bef264]" />
                        <span>04 // {chap.kicker}</span>
                      </div>

                      <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-[-0.03em] leading-[1.08] uppercase">
                        {chap.headline}
                      </h2>

                      <p className="font-sans text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
                        {chap.subtitle}
                      </p>

                      <div className="space-y-2.5 pt-1">
                        {chap.bullets.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-sans text-neutral-300">
                            <span className="text-[#bef264] font-mono mt-0.5 select-none">›</span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Launchpad: Direct Section & Resume Triggers */}
                      <div className="pt-3 flex flex-wrap items-center gap-4">
                        <a
                          href="#about"
                          className="px-6 py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-display font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 transition-colors duration-200 shadow-xl shadow-white/10"
                        >
                          <span>EXPLORE FULL PORTFOLIO</span>
                          <ArrowDown className="w-4 h-4" />
                        </a>

                        <button
                          onClick={onOpenResume}
                          className="px-5 py-3 rounded-full bg-[#ff5500] hover:bg-[#ff6c1a] text-white font-display font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 transition-colors duration-200 shadow-lg shadow-[#ff5500]/25"
                        >
                          <FileText className="w-4 h-4" />
                          <span>VIEW RESUME / CV</span>
                        </button>
                      </div>
                    </div>

                    {/* Right 6 Cols: Cloudflare Edge Constellation Vessel */}
                    <div className="lg:col-span-6 flex justify-center">
                      <div className="w-full p-6 sm:p-7 rounded-3xl bg-[#0b0a13] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.9)] space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-white font-semibold uppercase tracking-wider">KANNUR TRAILS // CLOUDFLARE EDGE</span>
                          </div>
                          <span className="text-emerald-400 text-[10px] font-mono uppercase">PREVIEW LIVE</span>
                        </div>

                        {/* Edge Platform Live Card */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/60">
                          <div className="flex items-center justify-between px-3.5 py-2 bg-white/[0.04] border-b border-white/[0.08] text-[11px] font-mono text-neutral-400">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-white/20" />
                              <span className="w-2 h-2 rounded-full bg-white/20" />
                              <span className="w-2 h-2 rounded-full bg-white/20" />
                            </div>
                            <span className="text-neutral-300 text-[11px]">kannurtrails.com</span>
                            <span className="text-emerald-400 text-[10px] uppercase font-semibold">Edge 0ms Latency</span>
                          </div>
                          <img 
                            src="/projects/kannur_trails.jpg" 
                            alt="Kannur Trails" 
                            className="w-full h-44 sm:h-52 object-cover object-top"
                          />
                        </div>

                        {/* Edge Infrastructure Specs */}
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                            <span className="text-[10px] font-mono text-[#bef264] uppercase tracking-wider block mb-0.5">Global Runtime</span>
                            <span className="text-white font-display font-bold text-xs uppercase">Cloudflare Workers</span>
                            <p className="text-[11px] font-sans text-neutral-400 mt-0.5">D1 SQL Database</p>
                          </div>
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                            <span className="text-[10px] font-mono text-[#bef264] uppercase tracking-wider block mb-0.5">Media & Auth</span>
                            <span className="text-white font-display font-bold text-xs uppercase">R2 Object Store</span>
                            <p className="text-[11px] font-sans text-neutral-400 mt-0.5">Branded PDF Engine</p>
                          </div>
                        </div>

                        <div className="pt-1 text-right">
                          <span className="text-[11px] font-mono text-[#ff5500] font-semibold">85 Destinations · Preview Deployed</span>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* TACTILE BOTTOM TIMELINE SCRUBBER DOCK                    */}
        {/* ======================================================== */}
        <div className="relative z-30 w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-3.5 bg-black/65 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-300 pointer-events-auto">
          
          {/* Chapter Scrubber Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {chapters.map((chap, cIdx) => {
              const isActive = currentChapter === cIdx;
              const isPast = currentChapter > cIdx;

              return (
                <button
                  key={chap.id}
                  onClick={() => jumpToSlide(cIdx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors duration-200 flex items-center gap-2 border ${
                    isActive
                      ? 'bg-[#bef264] text-black font-bold border-[#bef264] shadow-md shadow-[#bef264]/20'
                      : isPast
                      ? 'bg-white/10 text-white border-white/20 hover:bg-white/15'
                      : 'bg-white/[0.03] text-neutral-400 border-white/[0.06] hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-black' : isPast ? 'bg-[#bef264]' : 'bg-neutral-500'}`} />
                  <span>{chap.number}</span>
                  <span className="hidden md:inline font-sans text-[11px] font-medium">
                    {chap.tabLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Progress Cue & Scroll Telemetry */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="hidden sm:inline text-neutral-400 font-sans text-[11px]">
              Scroll down or click tabs to explore 3D story
            </span>
            <div className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
              <span className="text-white font-semibold">0{currentChapter + 1} / 04</span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-300">{Math.round(scrollProgress * 100)}%</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
