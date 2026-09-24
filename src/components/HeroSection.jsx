import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Mail, ArrowUpRight, Sparkles, FileText, Compass, ExternalLink } from 'lucide-react';

export default function HeroSection({ onOpenResume }) {
  const [scrollY, setScrollY] = useState(0);
  const [time, setTime] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroCardRef = useRef(null);

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

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interactive mouse tilt / parallax across the hero section
  const handleMouseMove = (e) => {
    if (!heroCardRef.current) return;
    const rect = heroCardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      id="home" 
      ref={heroCardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-card="true"
      className="relative w-full min-h-[96dvh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#ea4e17] select-none"
      style={{ perspective: '1200px' }}
    >
      {/* ======================================================== */}
      {/* LAYER 1: FULL-BLEED IMAGE FILLING SIDES & ENTIRE CANVAS */}
      {/* ======================================================== */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 6}px, ${mousePos.y * 6 + scrollY * 0.04 + 18}px, 0) scale(1.02)`
        }}
      >
        {/* Ultra-wide ambient fill using the exact same image to guarantee 100% side coverage on all aspect ratios */}
        <img 
          src="/profile.jpg" 
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover filter blur-2xl scale-125 opacity-70"
        />

        {/* Primary sharp portrait positioned downwards so hair has complete visibility and headroom */}
        <img 
          src="/profile.jpg" 
          alt="Rithin Rakesh — AI/ML Engineer"
          className="relative w-full h-full object-cover object-[55%_4%] sm:object-[55%_5%] md:object-[54%_6%] lg:object-[53%_7%] filter contrast-[1.06] saturate-[1.22] brightness-[1.06]"
        />

        {/* Saturated Studio Lighting Glows and Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.08)_0%,_transparent_60%)] mix-blend-overlay pointer-events-none" />
      </div>

      {/* ======================================================== */}
      {/* LAYER 2: ELEGANT ORBITAL VECTOR CURVES (Image 2 match)    */}
      {/* ======================================================== */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-10 transition-transform duration-700 ease-out" 
        viewBox="0 0 1440 900" 
        preserveAspectRatio="none"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `translate3d(${mousePos.x * -8}px, ${mousePos.y * -8 + scrollY * -0.04 + 14}px, 0)`
        }}
      >
        {/* Main sweeping horizontal arc 1 (Curving through eyes/cheek level) */}
        <path 
          d="M -60 480 C 380 290, 1060 290, 1500 480" 
          stroke="rgba(255, 255, 255, 0.32)" 
          strokeWidth="1.2" 
        />

        {/* Counter-sweeping horizontal arc 2 (Intersecting to create lens contour) */}
        <path 
          d="M -60 320 C 420 510, 1020 510, 1500 320" 
          stroke="rgba(255, 255, 255, 0.28)" 
          strokeWidth="1.1" 
        />

        {/* Vertical descending orbital arc */}
        <path 
          d="M 680 -40 C 720 280, 740 600, 690 940" 
          stroke="rgba(255, 255, 255, 0.26)" 
          strokeWidth="1" 
        />

        {/* Sweeping diagonal trajectory arc */}
        <path 
          d="M 40 820 C 380 420, 960 160, 1420 260" 
          stroke="rgba(255, 255, 255, 0.22)" 
          strokeWidth="1" 
        />

        {/* Delicate celestial dashed orbit */}
        <ellipse 
          cx="720" 
          cy="420" 
          rx="540" 
          ry="280" 
          stroke="rgba(255, 255, 255, 0.16)" 
          strokeWidth="0.9" 
          strokeDasharray="4 8" 
        />

        {/* Micro coordinate markers */}
        <circle cx="720" cy="385" r="3" fill="#ffffff" opacity="0.6" />
        <circle cx="430" cy="360" r="2.5" fill="#ffffff" opacity="0.5" />
        <circle cx="1010" cy="360" r="2.5" fill="#ffffff" opacity="0.5" />

        {/* Micro technical labels */}
        <text x="60" y="465" fill="rgba(255, 255, 255, 0.45)" fontSize="9" fontFamily="monospace" letterSpacing="0.2em">
          TRAJECTORY // 01
        </text>
        <text x="1280" y="465" fill="rgba(255, 255, 255, 0.45)" fontSize="9" fontFamily="monospace" letterSpacing="0.2em">
          LAT 11°52'N
        </text>
      </svg>

      {/* ======================================================== */}
      {/* LAYER 3: ENGRAVED TOP NAVIGATION (Edge-to-Edge Canvas)   */}
      {/* ======================================================== */}
      <header className="relative z-30 w-full pt-6 sm:pt-8 md:pt-9 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 flex items-center justify-between pointer-events-auto">
        
        {/* Top Left: AMELIA -> RITHIN */}
        <a 
          href="#home" 
          className="group flex items-center gap-2"
        >
          <span className="font-poster text-2xl sm:text-3xl md:text-4xl text-white tracking-wide uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] group-hover:opacity-85 transition-opacity">
            RITHIN
          </span>
        </a>

        {/* Top Center: HOME   ABOUT   PROJECT   EXPERIENCE   CONTACT */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12 xl:gap-14 text-xs lg:text-[13px] font-mono uppercase tracking-[0.28em] text-white/95 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          <a 
            href="#home" 
            className="relative text-white hover:text-white transition-colors duration-200 group py-1"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white rounded-full transition-transform duration-200" />
          </a>
          <a 
            href="#about" 
            className="relative text-white/85 hover:text-white transition-colors duration-200 group py-1"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white rounded-full group-hover:w-full transition-all duration-200" />
          </a>
          <a 
            href="#projects" 
            className="relative text-white/85 hover:text-white transition-colors duration-200 group py-1"
          >
            Project
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white rounded-full group-hover:w-full transition-all duration-200" />
          </a>
          <a 
            href="#experience" 
            className="hidden lg:inline-block relative text-white/85 hover:text-white transition-colors duration-200 group py-1"
          >
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white rounded-full group-hover:w-full transition-all duration-200" />
          </a>
          <a 
            href="#contact" 
            className="relative text-white/85 hover:text-white transition-colors duration-200 group py-1"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white rounded-full group-hover:w-full transition-all duration-200" />
          </a>
        </nav>

        {/* Top Right: TORNTO (CA) 03:15 -> KANNUR (IN) [Live Clock] */}
        <div className="flex items-center gap-3 sm:gap-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          <div className="flex items-center gap-2 text-xs sm:text-[13px] font-mono tracking-[0.2em] text-white/95 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            <span className="uppercase">KANNUR</span>
            <span className="text-white/70">(IN)</span>
            <span className="font-semibold text-white ml-0.5">{time ? time.slice(0, 5) : '16:52'}</span>
          </div>

          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/35 hover:bg-black/55 text-white border border-white/25 text-[11px] font-mono uppercase tracking-wider transition-all duration-200 backdrop-blur-sm"
          >
            <FileText className="w-3 h-3" />
            <span>CV</span>
          </button>
        </div>

      </header>

      {/* ======================================================== */}
      {/* LAYER 4: MICRO-COPY (Directly above the headline)        */}
      {/* ======================================================== */}
      <div className="relative z-20 w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mt-auto mb-2 sm:mb-3 md:mb-4 pointer-events-auto">
        
        {/* Left Micro-Copy: HELLO@AMELIA CARTER.COM -> RITHINRAKESH2002@GMAIL.COM */}
        <div className="flex flex-col">
          <a 
            href="mailto:rithinrakesh2002@gmail.com" 
            className="text-xs sm:text-sm font-mono tracking-[0.22em] text-white/95 hover:text-white uppercase font-medium transition-colors border-b border-white/40 pb-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            RITHINRAKESH2002@GMAIL.COM
          </a>
        </div>

        {/* Right Micro-Copy: 3-line Right-Aligned Editorial Statement */}
        <div className="text-left sm:text-right max-w-[320px] sm:max-w-[380px] md:max-w-[460px]">
          <p className="text-[10px] sm:text-[11px] md:text-xs font-mono uppercase tracking-[0.16em] text-white/90 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            ARCHITECTING PRODUCTION MULTI-AGENT SYSTEMS, AUTONOMOUS WORKFLOWS & HIGH-THROUGHPUT DETERMINISTIC RETRIEVAL ENGINES.
          </p>
        </div>

      </div>

      {/* ======================================================== */}
      {/* LAYER 5: MASSIVE DISPLAY HEADLINE (Bottom Edge-to-Edge)   */}
      {/* ======================================================== */}
      <div 
        className="relative z-30 w-full px-2 sm:px-4 md:px-8 text-center pointer-events-none overflow-hidden transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * 0.02}px, 0)`
        }}
      >
        <h1 className="font-poster text-[12.8vw] sm:text-[11.8vw] md:text-[10.8vw] lg:text-[10.2vw] xl:text-[9.8vw] 2xl:text-[152px] tracking-tight leading-none text-white drop-shadow-[0_12px_36px_rgba(0,0,0,0.85)] uppercase whitespace-nowrap select-none">
          RITHIN RAKESH
        </h1>
      </div>

      {/* ======================================================== */}
      {/* LAYER 6: SUB-HERO STATUS BAR (Docked along the base)     */}
      {/* ======================================================== */}
      <div className="relative z-30 w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-3 bg-black/40 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-300 pointer-events-auto">
        
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 rounded-full bg-[#ff5500] shadow-[0_0_6px_#ff5500]" />
          <span className="text-white font-medium tracking-wide">
            AI Intern at Leniko Solutions
          </span>
          <span className="hidden md:inline text-neutral-500">·</span>
          <span className="hidden md:inline text-neutral-300">
            FastAPI · LangGraph · NVIDIA NIM · Supabase
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a 
            href="#about" 
            className="flex items-center gap-1.5 text-white/90 hover:text-[#ff5500] transition-colors py-1 group"
          >
            <span>Explore Engineering</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <button 
            onClick={onOpenResume}
            className="px-4 py-1.5 rounded-full bg-[#ff5500] hover:bg-[#ff6a1a] text-white font-mono text-[11px] font-semibold tracking-wider transition-colors shadow-lg shadow-[#ff5500]/30"
          >
            VIEW CREDENTIALS
          </button>
        </div>

      </div>

    </section>
  );
}
