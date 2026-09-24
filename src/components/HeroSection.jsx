import React, { useEffect, useState } from 'react';
import { ArrowDown, Mail, ArrowUpRight, Sparkles, FileText, MapPin } from 'lucide-react';

export default function HeroSection({ onOpenResume }) {
  const [scrollY, setScrollY] = useState(0);
  const [time, setTime] = useState('');

  // Live IST Clock (Kannur, Kerala)
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full min-h-[96dvh] lg:min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#08070e]"
    >
      {/* Saturated & Bright Ambient Studio Lighting (Syncing the photo's rich amber & cyan backlight) */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10 transition-transform duration-700 ease-out"
        style={{ transform: `translate3d(0, ${scrollY * 0.16}px, 0)` }}
      >
        {/* Luminous Warm Amber Glow on the Left */}
        <div className="absolute top-[3%] left-[5%] w-[650px] md:w-[950px] h-[520px] md:h-[700px] bg-[radial-gradient(circle,rgba(255,100,20,0.52)_0%,rgba(217,70,10,0.22)_48%,transparent_75%)] filter blur-3xl opacity-90" />
        
        {/* Soft Violet/Magenta Depth in Top-Center */}
        <div className="absolute -top-10 left-[28%] w-[520px] h-[480px] bg-[radial-gradient(circle,rgba(147,51,234,0.28)_0%,transparent_70%)] filter blur-3xl opacity-70" />
        
        {/* Vibrant Studio Teal/Cyan Rim Glow on the Right */}
        <div className="absolute top-[8%] right-[2%] w-[520px] md:w-[720px] h-[480px] md:h-[620px] bg-[radial-gradient(circle,rgba(6,182,212,0.38)_0%,rgba(13,148,136,0.18)_55%,transparent_75%)] filter blur-2xl opacity-85" />
      </div>

      {/* Cybernetic Geometric Arc Vectors (Slightly brighter with Parallax drift) */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-35 transition-transform duration-700 ease-out" 
        viewBox="0 0 1440 900" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `translate3d(0, ${scrollY * 0.06}px, 0)` }}
      >
        <circle cx="720" cy="450" r="380" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="720" cy="450" r="560" stroke="rgba(255, 100, 20, 0.24)" strokeWidth="1.2" />
        <ellipse cx="720" cy="430" rx="720" ry="340" stroke="rgba(255, 255, 255, 0.07)" strokeWidth="1" />
        <line x1="80" y1="110" x2="1360" y2="110" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" />
        <circle cx="1020" cy="380" r="6" fill="rgba(6, 182, 212, 0.6)" />
        <circle cx="420" cy="380" r="6" fill="rgba(255, 95, 20, 0.6)" />
      </svg>

      {/* Main Canvas Container */}
      <div className="relative w-full flex-1 flex flex-col justify-between max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 pt-4 sm:pt-6 pb-6">
        
        {/* ENGRAVED TOP NAVIGATION (Directly inside image canvas, matching Amelia Carter reference) */}
        <div className="relative z-30 w-full flex items-center justify-between pt-1 pb-3 sm:pb-4">
          
          {/* Brand Name (Top Left) */}
          <a href="#home" className="group flex items-center gap-2">
            <span className="font-display font-black text-2xl md:text-3xl tracking-tight text-white group-hover:text-[#ff5500] transition-colors uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              RITHIN
            </span>
            <span className="w-2 h-2 rounded-full bg-[#ff5500] shadow-[0_0_8px_#ff5500]"></span>
          </a>

          {/* Center Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10 text-xs font-mono uppercase tracking-[0.25em] text-neutral-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <a href="#home" className="hover:text-[#ff5500] text-white transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="hover:text-[#ff5500] transition-colors duration-200">
              About
            </a>
            <a href="#experience" className="hover:text-[#ff5500] transition-colors duration-200">
              Experience
            </a>
            <a href="#projects" className="hover:text-[#ff5500] transition-colors duration-200">
              Projects
            </a>
            <a href="#skills" className="hover:text-[#ff5500] transition-colors duration-200">
              Arsenal
            </a>
            <a href="#contact" className="hover:text-[#ff5500] transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* Top Right Live Time & Status Indicator */}
          <div className="flex items-center gap-3 text-xs font-mono drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/15 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-neutral-300 font-semibold text-[11px] sm:text-xs">KANNUR (IN)</span>
              <span className="text-[#ff5500] font-bold text-[11px] sm:text-xs">{time || '15:20:00'} IST</span>
            </div>

            <button
              onClick={onOpenResume}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ff5500]/20 hover:bg-[#ff5500] text-white border border-[#ff5500]/40 hover:border-[#ff5500] text-[11px] font-mono uppercase tracking-wider transition-all duration-200 backdrop-blur-sm shadow-lg shadow-[#ff5500]/15"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

        </div>

        {/* Centerstage: Vibrant Portrait Canvas (Calibrated for 100% Mobile Visibility + Desktop Elegance) */}
        <div className="relative w-full flex-1 flex flex-col justify-center my-auto min-h-[440px] sm:min-h-[500px] md:min-h-[560px] lg:min-h-[620px]">
          
          {/* Main Visual Container */}
          <div data-card="true" className="relative z-20 w-full h-[460px] sm:h-[520px] md:h-[580px] lg:h-[640px] rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.95)] border border-white/10 bg-gradient-to-r from-[#170e1a]/95 via-[#0e0c16]/85 to-[#0b171c]/95">
            
            {/* The Landscape Photograph with Increased Brightness & Saturation */}
            {/* In mobile view, object-[74%_24%] centers Rithin's face (who is on the right) so he is 100% visible on phones! */}
            <img 
              src="/profile.png" 
              alt="Rithin Rakesh — AI/ML Engineer"
              className="w-full h-full object-cover object-[74%_24%] md:object-[center_30%] filter contrast-[1.07] saturate-[1.36] brightness-[1.12] transition-transform duration-1000 ease-out"
              style={{ transform: `translate3d(0, ${scrollY * 0.04}px, 0)` }}
            />

            {/* Seamless Vignette & Saturated Glow Blends (Synchronized with page background) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#08070e]/85 via-transparent to-[#08070e]/50 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08070e] via-[#08070e]/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#08070e]/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Saturated Ambient Studio Highlight Wash */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6010]/15 via-transparent to-[#06b6d4]/18 mix-blend-screen pointer-events-none" />

            {/* Micro-Copy on Left (Direct Dispatch, like HELLO@AMELIA CARTER.COM) */}
            <div className="absolute left-5 sm:left-10 md:left-14 bottom-24 sm:bottom-28 md:bottom-32 z-20 max-w-[280px]">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#ff5500] font-semibold block mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                DIRECT TRANSMISSION
              </span>
              <a 
                href="mailto:rithinrakesh2002@gmail.com" 
                className="text-xs sm:text-sm font-mono text-white hover:text-[#ff5500] transition-colors border-b border-white/30 pb-0.5 tracking-wider drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
              >
                rithinrakesh2002@gmail.com
              </a>
            </div>

            {/* Micro-Copy on Right (Directive Statement) */}
            <div className="hidden md:block absolute right-8 sm:right-12 md:right-14 bottom-24 sm:bottom-28 md:bottom-32 z-20 max-w-[320px] text-right pointer-events-none">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#ff5500] font-semibold block mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                ENGINEERING THESIS
              </span>
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                ARCHITECTING PRODUCTION-READY MULTI-AGENT WORKFLOWS, DETERMINISTIC LLM RETRIEVAL & AUTONOMOUS AUTOMATION.
              </p>
            </div>

            {/* SINGLE-LINE DISPLAY TITLE: RITHIN RAKESH */}
            {/* Perfectly sized to fit edge-to-edge on one line without any letter clipping */}
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-0 right-0 z-30 px-3 sm:px-6 md:px-8 text-center pointer-events-none">
              <h1 className="font-display font-black text-[7.8vw] sm:text-[7vw] md:text-[6.4vw] lg:text-[72px] xl:text-[84px] tracking-tight leading-none text-white drop-shadow-[0_12px_32px_rgba(0,0,0,0.98)] uppercase whitespace-nowrap select-none">
                RITHIN RAKESH
              </h1>
            </div>

          </div>

        </div>

        {/* Bottom Status & Scroll Prompt Strip */}
        <div className="relative z-20 w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 sm:pt-4 border-t border-white/[0.08] text-xs font-mono text-neutral-400">
          
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-[#ff5500] shadow-[0_0_6px_#ff5500]"></span>
            <span className="text-neutral-200 font-medium tracking-wide">
              AI Intern at Leniko Solutions
            </span>
            <span className="hidden md:inline text-neutral-600">·</span>
            <span className="hidden md:inline text-neutral-400">
              LangGraph & Agentic AI Architectures
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#about" 
              className="flex items-center gap-1.5 text-neutral-300 hover:text-[#ff5500] transition-colors py-1"
            >
              <span>Scroll Down</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
            <button 
              onClick={onOpenResume}
              className="px-4 py-1.5 rounded-full bg-[#ff5500] hover:bg-[#ff6a1a] text-white font-mono text-[11px] font-semibold tracking-wider transition-colors shadow-lg shadow-[#ff5500]/25"
            >
              VIEW CREDENTIALS
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
