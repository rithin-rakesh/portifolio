import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, Copy, Check, FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Footer({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rithinrakesh2002@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative pt-24 sm:pt-32 pb-12 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1520px] mx-auto overflow-hidden border-t border-white/[0.08]">
      
      {/* Background Watermark in Syne Display */}
      <div className="absolute bottom-6 left-0 right-0 pointer-events-none select-none opacity-[0.025] text-center z-0">
        <span className="font-display font-black text-[22vw] uppercase leading-none tracking-tight block animate-letter-track">
          RITHIN
        </span>
      </div>

      {/* Main Contact Card with Refined Display Typography */}
      <ScrollReveal direction="up" delay={100}>
        <div 
          data-card="true"
          className="relative z-10 p-8 sm:p-12 md:p-16 rounded-3xl bg-[#0d0c14] border border-white/10 mb-16 overflow-hidden shadow-2xl"
        >
          {/* Saturated Amber Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#ff5500]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#bef264] font-medium block mb-3">
                COMMUNICATION CHANNELS · OPEN TO ROLES · 2026
              </span>

              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] text-white tracking-[-0.035em] leading-[1.08]">
                Let's Build Something Intelligent Together
              </h2>

              <p className="mt-4 text-sm sm:text-base font-sans text-neutral-400 font-normal leading-relaxed max-w-xl">
                Open for AI/ML engineering roles, autonomous agentic systems architecture, and production collaborations.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono">
                <a 
                  href="mailto:rithinrakesh2002@gmail.com"
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black font-display font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 transition-all duration-200 shadow-lg shadow-white/10 hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                  <span>GET IN TOUCH</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-5 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-neutral-200 hover:text-white border border-white/15 flex items-center gap-2 transition-colors uppercase font-mono tracking-wider text-[11px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">COPIED TO CLIPBOARD</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Direct Dispatch Info */}
            <div className="lg:col-span-5 flex flex-col gap-4 font-mono text-xs">
              
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[#bef264] font-bold text-xs">*</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#bef264] block">
                    DIRECT EMAIL
                  </span>
                </div>
                <a 
                  href="mailto:rithinrakesh2002@gmail.com" 
                  className="text-white hover:text-[#bef264] transition-colors text-sm font-semibold tracking-wider"
                >
                  rithinrakesh2002@gmail.com
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[#bef264] font-bold text-xs">*</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#bef264] block">
                    LOCATION
                  </span>
                </div>
                <span className="text-white text-sm font-semibold tracking-wider">
                  Kannur, Kerala, India · IST (UTC+05:30)
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#ff5500] block mb-1">
                    CURRICULUM VITAE
                  </span>
                  <span className="text-white text-sm font-semibold tracking-wider">
                    Verified Experience & Credentials
                  </span>
                </div>
                <button
                  onClick={onOpenResume}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#ff5500] text-white transition-colors uppercase text-[11px] font-semibold tracking-wider"
                >
                  View CV
                </button>
              </div>

            </div>

          </div>
        </div>
      </ScrollReveal>

      {/* Bottom Footer Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.08] text-xs font-mono text-neutral-400">
        
        <div className="flex items-center gap-2">
          <span className="font-display font-extrabold text-lg text-white">RITHIN RAKESH</span>
          <span>·</span>
          <span>AI/ML & Agentic Systems Engineer</span>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/rithin-rakesh" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-[#ff5500] transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/rithin-rakesh-3a9504283/" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-[#ff5500] transition-colors flex items-center gap-1.5"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="#home" 
            className="hover:text-white transition-colors"
          >
            Back to Top ↑
          </a>
        </div>

      </div>

    </footer>
  );
}
