import React from 'react';
import { Bot, Cpu, ShieldCheck, GraduationCap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/[0.08]">
      
      {/* Top Header Bar */}
      <ScrollReveal direction="down">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[#ff5500] font-bold">|</span>
            <span className="text-white font-medium">ABOUT ME</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>© 2026</span>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <span className="hidden sm:inline">KANNUR, KERALA, INDIA</span>
          </div>
        </div>
      </ScrollReveal>

      {/* Editorial Mission Statement */}
      <div className="max-w-5xl mb-20">
        <ScrollReveal direction="up" delay={150}>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-[46px] leading-[1.15] text-white tracking-tight">
            AI/ML ENGINEER & DATA SCIENTIST SPECIALIZING IN{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] to-[#ff8c42]">
              AGENTIC ARCHITECTURES
            </span>
            , MULTI-STEP AUTOMATION, AND PRODUCTION-GRADE MACHINE LEARNING SYSTEMS.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={250}>
          <p className="mt-8 text-neutral-400 text-base md:text-lg leading-relaxed max-w-3xl font-normal">
            Graduated with a B.Tech in Computer Science and Engineering from SRM Institute of Science and Technology. 
            Currently advancing production-ready AI workflows at Leniko Solutions, bridging state-of-the-art Large Language Models 
            with robust Python backends, deterministic web automation, and Human-in-the-Loop governance.
          </p>
        </ScrollReveal>
      </div>

      {/* Core Engineering Pillars with Staggered Scroll Animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Pillar 1 */}
        <ScrollReveal direction="up" delay={100} duration={600}>
          <div className="h-full p-6 rounded-2xl bg-[#0d0d12] border border-white/[0.06] hover:border-[#ff5500]/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500] mb-5 group-hover:scale-110 transition-transform">
              <Bot className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#ff5500] block mb-2">
              Pillar 01
            </span>
            <h3 className="font-display font-bold text-lg text-white mb-2">
              Agentic AI & LLMs
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Multi-agent orchestration, Retrieval-Augmented Generation (RAG), dynamic tooling, and structured reasoning pipelines.
            </p>
          </div>
        </ScrollReveal>

        {/* Pillar 2 */}
        <ScrollReveal direction="up" delay={200} duration={600}>
          <div className="h-full p-6 rounded-2xl bg-[#0d0d12] border border-white/[0.06] hover:border-[#06b6d4]/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-[#06b6d4]/10 border border-[#06b6d4]/20 flex items-center justify-center text-[#06b6d4] mb-5 group-hover:scale-110 transition-transform">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#06b6d4] block mb-2">
              Pillar 02
            </span>
            <h3 className="font-display font-bold text-lg text-white mb-2">
              Machine & Deep Learning
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Transfer learning, CNN medical image classification, supervised predictive algorithms, and statistical risk modeling.
            </p>
          </div>
        </ScrollReveal>

        {/* Pillar 3 */}
        <ScrollReveal direction="up" delay={300} duration={600}>
          <div className="h-full p-6 rounded-2xl bg-[#0d0d12] border border-white/[0.06] hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-400 block mb-2">
              Pillar 03
            </span>
            <h3 className="font-display font-bold text-lg text-white mb-2">
              Safe Automation & HITL
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Autonomous web scrapers via Playwright & CDP integrated with Human-in-the-Loop safeguards and MFA/CAPTCHA handling.
            </p>
          </div>
        </ScrollReveal>

        {/* Pillar 4 */}
        <ScrollReveal direction="up" delay={400} duration={600}>
          <div className="h-full p-6 rounded-2xl bg-[#0d0d12] border border-white/[0.06] hover:border-purple-500/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-purple-400 block mb-2">
              Pillar 04
            </span>
            <h3 className="font-display font-bold text-lg text-white mb-2">
              Solid CSE Roots
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              B.Tech in Computer Science and Engineering from SRM IST Chennai (2021-2025), with AWS Academy ML & Cloud credentials.
            </p>
          </div>
        </ScrollReveal>

      </div>

    </section>
  );
}
