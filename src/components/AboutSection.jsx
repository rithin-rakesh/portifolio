import React from 'react';
import { ArrowUpRight, GraduationCap, Briefcase, Award, Terminal, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 sm:py-36 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1520px] mx-auto border-t border-white/[0.08] overflow-hidden">
      
      {/* Top Editorial Index Bar */}
      <ScrollReveal direction="down">
        <div className="relative z-10 flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 mb-12 sm:mb-16 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
            <span className="text-white font-medium">01 // ABOUT</span>
          </div>
          <div className="hidden md:block flex-1 mx-8 border-b border-dashed border-white/15" />
          <div className="text-neutral-400 font-mono text-[11px] tracking-[0.2em]">
            SRM '25 · LENIKO SOLUTIONS
          </div>
        </div>
      </ScrollReveal>

      {/* Main Two-Column Editorial Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Bold Headline & Grounded Resume Narrative */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="up" delay={100}>
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#bef264] font-medium block mb-3">
              ENGINEERING BACKGROUND · 2021 - 2026
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[50px] leading-[1.08] text-white tracking-[-0.035em] mb-4 font-bold">
              Building Reliable AI Agents & Neural Systems
            </h2>
            <p className="font-sans text-neutral-400 text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-2xl">
              Next-Gen Multi-Agent Systems, Autonomous Automation & Deterministic AI Architecture.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={180}>
            <div className="space-y-4 mb-8">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#bef264] font-bold text-sm">*</span>
                  <span className="font-display font-bold text-xs sm:text-sm text-white tracking-tight uppercase">Academic & Professional Foundation</span>
                </div>
                <p className="text-neutral-300 font-sans text-xs sm:text-[13.5px] font-normal leading-relaxed pl-3.5">
                  B.Tech Computer Science graduate from SRM University ('25) and active AI Intern at Leniko Solutions, specializing in LangGraph multi-agent orchestration, NVIDIA NIM low-latency microservices, and supervised deep learning pipelines.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Minimal Key Metrics Bar */}
          <ScrollReveal direction="up" delay={240}>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]">
              <div>
                <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight block">2021-25</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#bef264] block mt-1">SRM B.Tech</span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight block">03</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#bef264] block mt-1">Core Projects</span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight block">03</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#bef264] block mt-1">Certifications</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Clean Editorial Quote & Grounded Philosophy Card */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
          
          {/* Tasteful Minimalist Quote Block */}
          <ScrollReveal direction="up" delay={220}>
            <div 
              data-card="true"
              className="p-8 sm:p-10 rounded-3xl bg-[#0f0e17] border border-white/10 relative overflow-hidden shadow-2xl group hover:border-[#bef264]/40 transition-all duration-300"
            >
              <div className="w-1 h-12 bg-[#bef264] absolute top-8 left-0 rounded-r" />
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#bef264] font-bold text-sm">*</span>
                <span className="text-[11px] font-mono tracking-[0.25em] text-[#bef264] uppercase font-semibold">
                  ENGINEERING ETHOS
                </span>
              </div>

              <blockquote className="font-sans text-base sm:text-lg text-white font-medium leading-relaxed mb-6 italic">
                “True autonomy in AI isn't generating tokens: it is executing verifiable actions with deterministic state.”
              </blockquote>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs text-neutral-400">
                <span className="text-white uppercase tracking-wider font-semibold">Rithin Rakesh</span>
                <span className="text-[#bef264] text-[11px] tracking-widest uppercase">Leniko Solutions</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Education & Current Role Summary Strip */}
          <ScrollReveal direction="up" delay={300}>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[#bef264]/10 text-[#bef264] mt-0.5">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[#bef264] font-bold text-xs">*</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#bef264] block">Current Role</span>
                  </div>
                  <h4 className="font-display text-sm uppercase text-white font-bold tracking-tight">AI Intern · Leniko Solutions</h4>
                  <p className="text-xs font-sans text-neutral-400 mt-0.5">LangGraph · NVIDIA NIM · FastAPI</p>
                </div>
              </div>

              <div className="border-t border-white/[0.06] pt-3.5 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-white/5 text-neutral-300 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[#bef264] font-bold text-xs">*</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block">Degree Conferred</span>
                  </div>
                  <h4 className="font-display text-sm uppercase text-white font-bold tracking-tight">B.Tech Computer Science</h4>
                  <p className="text-xs font-sans text-neutral-400 mt-0.5">SRM Institute of Science and Technology ('25)</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>

    </section>
  );
}
