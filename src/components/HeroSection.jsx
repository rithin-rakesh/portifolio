import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ArrowDown, ArrowRight, Bot, Cpu, Database, ShieldCheck, Globe, FileText, ExternalLink, Activity, CheckCircle2, ChevronRight, Sparkles, Zap, Layers } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';

/* Hallmark · component: HeroSection · Minimalist Client-Centric Storytelling · slop: purged */
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

  // Interactive mouse coordinate tracking for gentle 3D parallax
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
  const heroScale = 1 - exitT * 0.05;
  const dimOpacity = exitT * 0.75;

  // Simple, client-focused chapter definitions
  const chapters = [
    {
      id: 'identity',
      number: '01',
      kicker: 'AI & SYSTEMS ENGINEER',
      tabLabel: 'Who I Am',
      headlineWords: ['I', 'BUILD', 'INTELLIGENT', 'AI', 'AGENTS', '&', 'MODERN', 'APPS'],
      tagline: 'Simple automation for complex business problems.',
      description: "Hi, I'm Rithin Rakesh. I engineer autonomous AI workflows, smart machine learning models, and high-performance web platforms that automate real work and scale businesses.",
      pillars: [
        { label: 'Autonomous AI Agents', desc: 'Workflows that find data and execute multi-step tasks' },
        { label: 'Machine Learning', desc: 'High-accuracy computer vision and predictive models' },
        { label: 'Full-Stack Platforms', desc: 'Fast, secure web apps deployed on modern cloud edge' }
      ]
    },
    {
      id: 'agents',
      number: '02',
      kicker: 'AUTONOMOUS WORKFLOWS',
      tabLabel: 'AI Automation',
      headlineWords: ['AI', 'AGENTS', 'THAT', 'WORK', 'FOR', 'YOUR', 'BUSINESS'],
      tagline: 'Execution over prompts: software that takes real action.',
      description: 'Instead of basic chatbots, I build autonomous agents that research information, browse websites, and complete multi-step tasks automatically—with human review safeguards at every critical step.',
      benefits: [
        { title: 'Saves Hours of Manual Work', desc: 'Automatically discovers listings, scrapes data, and fills browser forms.' },
        { title: 'Human Safety Controls', desc: 'Built-in approval gates for CAPTCHAs, payments, and sensitive decisions.' },
        { title: '96.2% Verified Accuracy', desc: 'Reliable candidate and profile matching with zero unsupported hallucinations.' }
      ]
    },
    {
      id: 'neural',
      number: '03',
      kicker: 'COMPUTER VISION & ML',
      tabLabel: 'Smart Models',
      headlineWords: ['PRECISE', 'AI', 'MODELS', 'WITH', 'VERIFIED', 'ACCURACY'],
      tagline: 'Uncovering patterns invisible to the naked eye.',
      description: 'I train deep learning and neural models that analyze high-resolution imagery and complex financial data to deliver reliable diagnostic predictions and fraud protection.',
      benefits: [
        { title: '98.4% Diagnostic Accuracy', desc: 'Fine-tuned convolutional networks validated across clinical MRI scans.' },
        { title: '91.8% Fraud Detection', desc: 'Machine learning ensemble that flags anomalous and risky loan applications.' },
        { title: 'Sub-15ms AI Speed', desc: 'Optimized with NVIDIA NIM for instant predictions in live web applications.' }
      ]
    },
    {
      id: 'production',
      number: '04',
      kicker: 'PRODUCTION PLATFORMS',
      tabLabel: 'Full-Stack Apps',
      headlineWords: ['FAST,', 'SCALABLE', 'FULL-STACK', 'WEB', 'PLATFORMS'],
      tagline: 'From intelligent models to production software.',
      description: 'Great AI needs great software. I build complete web platforms—like Kannur Trails, connecting 85 destinations with automated travel planning and instant quotation generation.',
      benefits: [
        { title: 'Global Edge Speed', desc: 'Deployed on Cloudflare Workers for instant loading from anywhere in the world.' },
        { title: 'Complete End-to-End', desc: 'Modern user interface, relational SQL database, and cloud media storage.' },
        { title: 'Automated Quotations', desc: 'Instant branded PDF documents and private customer trip portals.' }
      ]
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
        {/* 3D CANVAS: Slow, Calm Spatial Particles & Caustic Field  */}
        {/* ======================================================== */}
        <Hero3DCanvas scrollProgress={scrollProgress} mousePos={mousePos} />

        {/* ======================================================== */}
        {/* TOP PERSISTENT NAVIGATION BAR                            */}
        {/* ======================================================== */}
        <header className="relative z-30 w-full pt-5 sm:pt-6 md:pt-7 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 flex items-center justify-between pointer-events-auto">
          
          {/* Brand Identity / Home Jump */}
          <button
            onClick={() => jumpToSlide(0)}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
          >
            <span className="font-hero text-2xl sm:text-3xl text-white tracking-wide uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] group-hover:text-[#bef264] transition-colors duration-200">
              RITHIN
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest px-2 py-0.5 rounded bg-white/10 text-neutral-300 uppercase">
              AI Engineer
            </span>
          </button>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10 text-xs font-mono uppercase tracking-[0.22em] text-white/90 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
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
              <span className="font-semibold text-white ml-0.5">{time ? time.slice(0, 5) : '18:45'}</span>
            </div>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#ff5500] text-white border border-white/20 text-[11px] font-mono uppercase tracking-wider transition-colors duration-200 backdrop-blur-sm shadow-md"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

        </header>

        {/* ======================================================== */}
        {/* 3D STORYTELLING STAGE: 4 MINIMALIST CLIENT SLIDES        */}
        {/* ======================================================== */}
        <div 
          className="relative z-20 flex-1 w-full max-w-[1480px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 py-2 sm:py-3 flex items-center justify-center overflow-hidden"
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
            const translateZ = dist < 0 ? dist * 180 : dist * 100;
            const translateY = dist < 0 ? -dist * 30 : -dist * 30;
            const rotateX = dist < 0 ? -dist * 10 : -dist * 8;
            const rotateY = mousePos.x * 4;
            const blurAmount = Math.max(0, Math.min(6, (absDist - 0.3) * 10));
            const isCurrent = absDist < 0.5;

            return (
              <div
                key={chap.id}
                className="absolute inset-0 px-4 sm:px-8 flex items-center justify-center pointer-events-none"
                style={{
                  opacity,
                  filter: `blur(${blurAmount}px)`,
                  transform: `translate3d(0, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transformStyle: 'preserve-3d',
                  willChange: 'transform, opacity, filter',
                  pointerEvents: isCurrent ? 'auto' : 'none'
                }}
              >
                
                {/* ---------------------------------------------------- */}
                {/* SLIDE 01: WHO I AM (Client-Focused Identity)         */}
                {/* ---------------------------------------------------- */}
                {idx === 0 && (
                  <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    
                    {/* Left: Minimal Portrait Silhouette with subtle glow */}
                    <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                      <div className="relative w-52 sm:w-60 md:w-68 lg:w-76 aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.85)] group bg-black/60">
                        <img 
                          src="/profile.jpg" 
                          alt="" 
                          aria-hidden="true" 
                          className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-50 scale-105"
                        />
                        <img 
                          src="/profile.jpg" 
                          alt="Rithin Rakesh — AI & Systems Engineer" 
                          className="relative w-full h-full object-cover object-[55%_4%] filter contrast-[1.05] brightness-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />
                        
                        {/* Clean Status Pill inside portrait */}
                        <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-white font-semibold">Rithin Rakesh</span>
                          </div>
                          <span className="text-[#bef264] text-[10px] uppercase font-mono">Available for Work</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Clean, Clear Value Statement & Word-by-Word Headline */}
                    <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-left">
                      
                      {/* Eyebrow with tracking expansion */}
                      <div className="overflow-hidden">
                        <span 
                          className="text-xs font-mono uppercase tracking-[0.25em] text-[#bef264] font-semibold inline-flex items-center gap-2 transition-all duration-700 ease-out"
                          style={{
                            transform: isCurrent ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)',
                            opacity: isCurrent ? 1 : 0
                          }}
                        >
                          <span className="w-2 h-2 rounded-full bg-[#bef264]" />
                          <span>01 // {chap.kicker}</span>
                        </span>
                      </div>

                      {/* Staggered Word-by-Word Animated Headline */}
                      <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] text-white tracking-[-0.035em] leading-[1.08] uppercase flex flex-wrap gap-x-[0.28em] gap-y-[0.05em]">
                        {chap.headlineWords.map((word, wIdx) => (
                          <span key={wIdx} className="inline-block overflow-hidden py-0.5">
                            <span
                              className="inline-block transition-transform duration-700 ease-out"
                              style={{
                                transform: isCurrent ? 'translate3d(0, 0, 0)' : 'translate3d(0, 115%, 0)',
                                opacity: isCurrent ? 1 : 0,
                                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                                transitionDelay: `${80 + wIdx * 35}ms`
                              }}
                            >
                              {word}
                            </span>
                          </span>
                        ))}
                      </h1>

                      {/* Simple Plain-English Description */}
                      <p 
                        className="font-sans text-sm sm:text-base text-neutral-300 font-normal leading-relaxed max-w-xl transition-all duration-700 ease-out"
                        style={{
                          transform: isCurrent ? 'translate3d(0, 0, 0)' : 'translate3d(0, 15px, 0)',
                          opacity: isCurrent ? 1 : 0,
                          transitionDelay: '350ms'
                        }}
                      >
                        {chap.description}
                      </p>

                      {/* 3 Simple Value Pillars */}
                      <div 
                        className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 transition-all duration-700 ease-out"
                        style={{
                          transform: isCurrent ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                          opacity: isCurrent ? 1 : 0,
                          transitionDelay: '450ms'
                        }}
                      >
                        {chap.pillars.map((pil, pIdx) => (
                          <div key={pIdx} className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-colors">
                            <h4 className="font-display font-bold text-xs text-white uppercase mb-0.5">{pil.label}</h4>
                            <p className="text-[11px] font-sans text-neutral-400 leading-snug">{pil.desc}</p>
                          </div>
                        ))}
                      </div>

                      {/* Simple Contact Link & Location */}
                      <div className="pt-1 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
                        <a 
                          href="mailto:rithinrakesh2002@gmail.com" 
                          className="text-white hover:text-[#bef264] underline underline-offset-4 font-semibold transition-colors"
                        >
                          rithinrakesh2002@gmail.com
                        </a>
                        <span>·</span>
                        <span>Kannur, Kerala (India)</span>
                      </div>

                    </div>

                  </div>
                )}

                {/* ---------------------------------------------------- */}
                {/* SLIDE 02: AI AGENTS IN ACTION (Simple Business Value) */}
                {/* ---------------------------------------------------- */}
                {idx === 1 && (
                  <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    
                    {/* Left 6 Cols: Value Messaging & Headline */}
                    <div className="lg:col-span-6 space-y-5 text-left">
                      
                      <div className="overflow-hidden">
                        <span 
                          className="text-xs font-mono uppercase tracking-[0.25em] text-[#bef264] font-semibold inline-flex items-center gap-2 transition-all duration-700 ease-out"
                          style={{
                            transform: isCurrent ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)',
                            opacity: isCurrent ? 1 : 0
                          }}
                        >
                          <span className="w-2 h-2 rounded-full bg-[#bef264]" />
                          <span>02 // {chap.kicker}</span>
                        </span>
                      </div>

                      {/* Word-by-Word Animated Headline */}
                      <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-[-0.03em] leading-[1.08] uppercase flex flex-wrap gap-x-[0.28em] gap-y-[0.05em]">
                        {chap.headlineWords.map((word, wIdx) => (
                          <span key={wIdx} className="inline-block overflow-hidden py-0.5">
                            <span
                              className="inline-block transition-transform duration-700 ease-out"
                              style={{
                                transform: isCurrent ? 'translate3d(0, 0, 0)' : 'translate3d(0, 115%, 0)',
                                opacity: isCurrent ? 1 : 0,
                                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                                transitionDelay: `${80 + wIdx * 35}ms`
                              }}
                            >
                              {word}
                            </span>
                          </span>
                        ))}
                      </h2>

                      <p 
                        className="font-sans text-sm sm:text-base text-neutral-300 font-normal leading-relaxed transition-all duration-700 ease-out"
                        style={{
                          transform: isCurrent ? 'translate3d(0, 0, 0)' : 'translate3d(0, 15px, 0)',
                          opacity: isCurrent ? 1 : 0,
                          transitionDelay: '350ms'
                        }}
                      >
                        {chap.description}
                      </p>

                      {/* 3 Client Benefit Cards */}
                      <div 
                        className="space-y-2.5 pt-1 transition-all duration-700 ease-out"
                        style={{
                          transform: isCurrent ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                          opacity: isCurrent ? 1 : 0,
                          transitionDelay: '450ms'
                        }}
                      >
                        {chap.benefits.map((b, bIdx) => (
                          <div key={bIdx} className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[#bef264] mt-0.5 shrink-0" />
                            <div>
                              <h4 className="font-display font-bold text-xs text-white uppercase">{b.title}</h4>
                              <p className="text-xs font-sans text-neutral-400 mt-0.5 leading-snug">{b.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Right 6 Cols: Clean Visual Workflow Blueprint */}
                    <div className="lg:col-span-6 flex justify-center">
                      <div className="w-full p-6 sm:p-7 rounded-3xl bg-[#0b0a13] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.85)] space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-white font-semibold uppercase tracking-wider">HOW THE AGENT WORKS</span>
                          </div>
                          <span className="text-[#bef264] text-[10px] uppercase font-mono">AUTOMATED PIPELINE</span>
                        </div>

                        {/* 4 Simple Visual Steps */}
                        <div className="space-y-2.5">
                          {[
                            { num: '01', title: 'Data Discovery', desc: 'Agent searches listings and gathers job specifications' },
                            { num: '02', title: 'Intelligent Scoring', desc: 'AI scores candidate experience against qualifications' },
                            { num: '03', title: 'Browser Execution', desc: 'Automates multi-step form applications on Glassdoor / Indeed' },
                            { num: '04', title: 'Human Safety Check', desc: 'Pauses for user approval on CAPTCHAs and sensitive questions' }
                          ].map((step, sIdx) => (
                            <div key={sIdx} className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className="font-mono text-xs font-bold text-[#bef264]">{step.num}</span>
                                <div>
                                  <h4 className="font-display font-bold text-xs uppercase text-white">{step.title}</h4>
                                  <p className="text-[11px] font-sans text-neutral-400">{step.desc}</p>
                                </div>
                              </div>
                              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-400 font-semibold uppercase">
                                VERIFIED
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 flex items-center justify-between text-xs text-neutral-400 border-t border-white/[0.06]">
                          <span>Result: 96.2% Profile Match</span>
                          <span className="text-[#ff5500] font-mono font-semibold">Zero Hallucinations</span>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* ---------------------------------------------------- */}
                {/* SLIDE 03: COMPUTER VISION & ACCURACY                */}
                {/* ---------------------------------------------------- */}
                {idx === 2 && (
                  <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    
                    {/* Left 6 Cols: Value Messaging & Headline */}
                    <div className="lg:col-span-6 space-y-5 text-left">
                      
                      <div className="overflow-hidden">
                        <span 
                          className="text-xs font-mono uppercase tracking-[0.25em] text-[#bef264] font-semibold inline-flex items-center gap-2 transition-all duration-700 ease-out"
                          style={{
                            transform: isCurrent ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)',
                            opacity: isCurrent ? 1 : 0
                          }}
                        >
                          <span className="w-2 h-2 rounded-full bg-[#bef264]" />
                          <span>03 // {chap.kicker}</span>
                        </span>
                      </div>

                      {/* Word-by-Word Animated Headline */}
                      <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-[-0.03em] leading-[1.08] uppercase flex flex-wrap gap-x-[0.28em] gap-y-[0.05em]">
                        {chap.headlineWords.map((word, wIdx) => (
                          <span key={wIdx} className="inline-block overflow-hidden py-0.5">
                            <span
                              className="inline-block transition-transform duration-700 ease-out"
                              style={{
                                transform: isCurrent ? 'translate3d(0, 0, 0)' : 'translate3d(0, 115%, 0)',
                                opacity: isCurrent ? 1 : 0,
                                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                                transitionDelay: `${80 + wIdx * 35}ms`
                              }}
                            >
                              {word}
                            </span>
                          </span>
                        ))}
                      </h2>

                      <p 
                        className="font-sans text-sm sm:text-base text-neutral-300 font-normal leading-relaxed transition-all duration-700 ease-out"
                        style={{
                          transform: isCurrent ? 'translate3d(0, 0, 0)' : 'translate3d(0, 15px, 0)',
                          opacity: isCurrent ? 1 : 0,
                          transitionDelay: '350ms'
                        }}
                      >
                        {chap.description}
                      </p>

                      {/* 3 Client Benefit Cards */}
                      <div 
                        className="space-y-2.5 pt-1 transition-all duration-700 ease-out"
                        style={{
                          transform: isCurrent ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                          opacity: isCurrent ? 1 : 0,
                          transitionDelay: '450ms'
                        }}
                      >
                        {chap.benefits.map((b, bIdx) => (
                          <div key={bIdx} className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[#bef264] mt-0.5 shrink-0" />
                            <div>
                              <h4 className="font-display font-bold text-xs text-white uppercase">{b.title}</h4>
                              <p className="text-xs font-sans text-neutral-400 mt-0.5 leading-snug">{b.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Right 6 Cols: Clean Minimal Diagnostic Card */}
                    <div className="lg:col-span-6 flex justify-center">
                      <div className="w-full p-6 sm:p-7 rounded-3xl bg-[#0b0a13] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.85)] space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#bef264] animate-pulse" />
                            <span className="text-white font-semibold uppercase tracking-wider">VERIFIED CLINICAL ACCURACY</span>
                          </div>
                          <span className="text-[#bef264] text-[10px] uppercase font-mono">DIAGNOSTIC AI</span>
                        </div>

                        {/* Multi-planar Slices Display */}
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { name: 'Axial View', acc: '98.6%', label: 'Cross-Section' },
                            { name: 'Coronal View', acc: '98.2%', label: 'Frontal Slices' },
                            { name: 'Sagittal View', acc: '98.4%', label: 'Side Profiles' }
                          ].map((v, vIdx) => (
                            <div key={vIdx} className="p-3 rounded-2xl bg-white/[0.025] border border-white/[0.08] text-center">
                              <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1">{v.name}</span>
                              <span className="text-lg font-display font-bold text-white block">{v.acc}</span>
                              <span className="text-[10px] font-sans text-neutral-400 mt-1 block">{v.label}</span>
                            </div>
                          ))}
                        </div>

                        {/* Model Specs in Simple English */}
                        <div className="p-4 rounded-2xl bg-black/60 border border-white/[0.08] space-y-2 text-xs">
                          <div className="flex justify-between py-1 border-b border-white/10 font-sans">
                            <span className="text-neutral-400">Diagnosis Type:</span>
                            <span className="text-white font-medium">Brain Tumor Medical Classification</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-white/10 font-sans">
                            <span className="text-neutral-400">Fraud Prevention:</span>
                            <span className="text-[#ff5500] font-medium font-mono">91.8% Loan Risk Detection</span>
                          </div>
                          <div className="flex justify-between py-1 font-sans">
                            <span className="text-neutral-400">Response Speed:</span>
                            <span className="text-emerald-400 font-mono font-medium">&lt;15ms Fast Inference</span>
                          </div>
                        </div>

                        <div className="pt-1 text-right">
                          <span className="text-[11px] font-mono text-neutral-400">Validated via PyTorch & Scikit-learn</span>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* ---------------------------------------------------- */}
                {/* SLIDE 04: FULL-STACK PRODUCTION PLATFORMS            */}
                {/* ---------------------------------------------------- */}
                {idx === 3 && (
                  <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    
                    {/* Left 6 Cols: Value Messaging & Action Buttons */}
                    <div className="lg:col-span-6 space-y-5 text-left">
                      
                      <div className="overflow-hidden">
                        <span 
                          className="text-xs font-mono uppercase tracking-[0.25em] text-[#bef264] font-semibold inline-flex items-center gap-2 transition-all duration-700 ease-out"
                          style={{
                            transform: isCurrent ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)',
                            opacity: isCurrent ? 1 : 0
                          }}
                        >
                          <span className="w-2 h-2 rounded-full bg-[#bef264]" />
                          <span>04 // {chap.kicker}</span>
                        </span>
                      </div>

                      {/* Word-by-Word Animated Headline */}
                      <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-[-0.03em] leading-[1.08] uppercase flex flex-wrap gap-x-[0.28em] gap-y-[0.05em]">
                        {chap.headlineWords.map((word, wIdx) => (
                          <span key={wIdx} className="inline-block overflow-hidden py-0.5">
                            <span
                              className="inline-block transition-transform duration-700 ease-out"
                              style={{
                                transform: isCurrent ? 'translate3d(0, 0, 0)' : 'translate3d(0, 115%, 0)',
                                opacity: isCurrent ? 1 : 0,
                                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                                transitionDelay: `${80 + wIdx * 35}ms`
                              }}
                            >
                              {word}
                            </span>
                          </span>
                        ))}
                      </h2>

                      <p 
                        className="font-sans text-sm sm:text-base text-neutral-300 font-normal leading-relaxed transition-all duration-700 ease-out"
                        style={{
                          transform: isCurrent ? 'translate3d(0, 0, 0)' : 'translate3d(0, 15px, 0)',
                          opacity: isCurrent ? 1 : 0,
                          transitionDelay: '350ms'
                        }}
                      >
                        {chap.description}
                      </p>

                      {/* 3 Client Benefit Cards */}
                      <div 
                        className="space-y-2.5 pt-1 transition-all duration-700 ease-out"
                        style={{
                          transform: isCurrent ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                          opacity: isCurrent ? 1 : 0,
                          transitionDelay: '450ms'
                        }}
                      >
                        {chap.benefits.map((b, bIdx) => (
                          <div key={bIdx} className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[#bef264] mt-0.5 shrink-0" />
                            <div>
                              <h4 className="font-display font-bold text-xs text-white uppercase">{b.title}</h4>
                              <p className="text-xs font-sans text-neutral-400 mt-0.5 leading-snug">{b.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Primary Action Buttons */}
                      <div className="pt-2 flex flex-wrap items-center gap-4">
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
                          <span>VIEW RESUME</span>
                        </button>
                      </div>

                    </div>

                    {/* Right 6 Cols: Live Platform Showcase Card */}
                    <div className="lg:col-span-6 flex justify-center">
                      <div className="w-full p-6 sm:p-7 rounded-3xl bg-[#0b0a13] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.85)] space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-white font-semibold uppercase tracking-wider">LIVE PLATFORM: KANNUR TRAILS</span>
                          </div>
                          <span className="text-emerald-400 text-[10px] uppercase font-mono">EDGE PREVIEW</span>
                        </div>

                        {/* Minimalist Browser Frame */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/60">
                          <div className="flex items-center justify-between px-3.5 py-2 bg-white/[0.04] border-b border-white/[0.08] text-[11px] font-mono text-neutral-400">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-white/20" />
                              <span className="w-2 h-2 rounded-full bg-white/20" />
                              <span className="w-2 h-2 rounded-full bg-white/20" />
                            </div>
                            <span className="text-neutral-300 text-[11px]">kannurtrails.com</span>
                            <span className="text-emerald-400 text-[10px] uppercase font-semibold">Live Edge</span>
                          </div>
                          <img 
                            src="/projects/kannur_trails.jpg" 
                            alt="Kannur Trails Tourism Platform" 
                            className="w-full h-44 sm:h-52 object-cover object-top"
                          />
                        </div>

                        {/* Quick Platform Metrics */}
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                            <span className="text-[10px] font-mono text-[#bef264] uppercase tracking-wider block mb-0.5">Platform Scope</span>
                            <span className="text-white font-display font-bold text-xs uppercase">85 Destinations</span>
                            <p className="text-[11px] font-sans text-neutral-400 mt-0.5">Stays & Custom Trips</p>
                          </div>
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                            <span className="text-[10px] font-mono text-[#bef264] uppercase tracking-wider block mb-0.5">Features</span>
                            <span className="text-white font-display font-bold text-xs uppercase">PDF Quotations</span>
                            <p className="text-[11px] font-sans text-neutral-400 mt-0.5">Private Customer Portals</p>
                          </div>
                        </div>

                        <div className="pt-1 text-right">
                          <span className="text-[11px] font-mono text-[#ff5500] font-semibold">Deployed on Cloudflare Workers</span>
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
        <div className="relative z-30 w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-3 bg-black/65 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-300 pointer-events-auto">
          
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
                  <span className="font-sans text-[11px] font-medium">
                    {chap.tabLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Progress Cue & Scroll Telemetry */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="hidden sm:inline text-neutral-400 font-sans text-[11px]">
              Scroll down or click tabs to explore
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
