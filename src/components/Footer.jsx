import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, Copy, Check, FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Footer({ onOpenResume }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rithinrakesh2002@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative pt-28 pb-12 px-6 md:px-12 max-w-[1440px] mx-auto overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute bottom-6 left-0 right-0 pointer-events-none select-none opacity-[0.03] text-center z-0">
        <span className="font-display font-black text-[22vw] uppercase leading-none tracking-tight block">
          RITHIN
        </span>
      </div>

      {/* Main Contact Card with Scale & Fade Scroll Animation */}
      <ScrollReveal direction="up" delay={100} duration={750}>
        <div className="relative z-10 p-8 sm:p-12 md:p-16 rounded-3xl bg-[#0d0d12] border border-white/[0.08] mb-16 overflow-hidden shadow-2xl">
          
          {/* Amber backlight corner glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#ff5500]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Inquiry Prompt */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#ff5500] font-semibold block mb-3">
                AVAILABLE FOR HIRE · GLOBAL / REMOTE & ONSITE
              </span>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.15]">
                READY TO BUILD NEXT-GENERATION AGENTIC WORKFLOWS?
              </h2>

              <p className="mt-6 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
                Whether you need to architect autonomous multi-agent pipelines, fine-tune medical vision classifiers, or automate complex business operations, let's connect.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono">
                <a 
                  href="mailto:rithinrakesh2002@gmail.com"
                  className="px-6 py-3.5 rounded-full bg-[#ff5500] hover:bg-[#ff6c1a] text-white font-semibold tracking-wider flex items-center gap-2 transition-all duration-200 shadow-lg shadow-[#ff5500]/25"
                >
                  <Mail className="w-4 h-4" />
                  <span>START A CONVERSATION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-5 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 hover:text-white border border-white/[0.08] flex items-center gap-2 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Email Copied!" : "Copy Email"}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Direct Channels & Socials */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>COMMUNICATION CHANNELS</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Active
                  </span>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <a 
                    href="mailto:rithinrakesh2002@gmail.com"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-[#ff5500]/10 border border-white/[0.04] hover:border-[#ff5500]/30 text-neutral-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#ff5500]" />
                      <span>rithinrakesh2002@gmail.com</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                  </a>

                  <a 
                    href="tel:+918111855550"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-[#ff5500]/10 border border-white/[0.04] hover:border-[#ff5500]/30 text-neutral-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#ff5500]" />
                      <span>+91 81118 55550</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                  </a>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-neutral-300">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#ff5500]" />
                      <span>Kannur, Kerala, India</span>
                    </span>
                    <span className="text-[10px] text-neutral-400">IST (UTC+5:30)</span>
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a 
                    href="https://github.com/rithin-rakesh"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono text-neutral-300 hover:text-white border border-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>

                  <a 
                    href="https://linkedin.com/in/rithinrakesh"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono text-neutral-300 hover:text-white border border-white/10 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                </div>

                {/* Resume Trigger */}
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/[0.03] hover:bg-[#ff5500]/15 text-xs font-mono text-white border border-white/10 hover:border-[#ff5500]/40 transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#ff5500]" />
                  <span>Open Full Curriculum Vitae</span>
                </button>

              </div>

            </div>

          </div>

        </div>
      </ScrollReveal>

      {/* Bottom Legal / Copyright Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400 border-t border-white/[0.06] pt-8">
        <div>
          <span>© 2026 Rithin Rakesh. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#home" className="hover:text-white transition-colors">Back to top ↑</a>
          <span className="text-neutral-700">|</span>
          <span className="text-neutral-400">Crafted with taste-skill & Precision</span>
        </div>
      </div>

    </footer>
  );
}
