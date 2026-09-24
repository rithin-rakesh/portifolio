import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [time, setTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

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
      // Reveal sticky floating navbar only after scrolling past the hero
      if (window.scrollY > 480) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
        visible 
          ? 'translate-y-0 opacity-100 bg-[#08070d]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl' 
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brandmark */}
        <a href="#home" className="group flex items-center gap-2">
          <span className="font-display font-black text-xl md:text-2xl tracking-tight text-white group-hover:text-[#ff5500] transition-colors">
            RITHIN
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]"></span>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs font-mono uppercase tracking-[0.2em] text-neutral-300">
          <a href="#home" className="hover:text-white transition-colors duration-200">
            Home
          </a>
          <a href="#about" className="hover:text-white transition-colors duration-200">
            About
          </a>
          <a href="#experience" className="hover:text-white transition-colors duration-200">
            Experience
          </a>
          <a href="#projects" className="hover:text-white transition-colors duration-200">
            Projects
          </a>
          <a href="#skills" className="hover:text-white transition-colors duration-200">
            Skills
          </a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">
            Contact
          </a>
        </nav>

        {/* Right Info: Live Location Time & Resume Trigger */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-neutral-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-neutral-400">KANNUR (IN)</span>
            <span className="text-[#ff5500] font-semibold">{time || '00:00:00'} IST</span>
          </div>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white bg-white/[0.08] hover:bg-[#ff5500] hover:text-white px-4 py-2 rounded-full border border-white/10 transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenResume}
            className="text-[11px] font-mono uppercase text-[#ff5500] px-2.5 py-1 rounded bg-[#ff5500]/10 border border-[#ff5500]/30"
          >
            Resume
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0a14] border-b border-neutral-800 px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-4 text-sm font-mono uppercase tracking-wider text-neutral-300 mb-6">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#ff5500] transition-colors"
            >
              00. Home
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#ff5500] transition-colors"
            >
              01. About
            </a>
            <a 
              href="#experience" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#ff5500] transition-colors"
            >
              02. Experience
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#ff5500] transition-colors"
            >
              03. Projects
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#ff5500] transition-colors"
            >
              04. Skills
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#ff5500] transition-colors"
            >
              05. Contact
            </a>
          </div>

          <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>KANNUR, IN: {time} IST</span>
            <span className="text-emerald-400">Available for roles</span>
          </div>
        </div>
      )}
    </header>
  );
}
