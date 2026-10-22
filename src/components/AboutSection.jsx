import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import AnimatedHeading from './AnimatedHeading';

/* Hallmark · component: AboutSection · slop: purged · gate-54: pass · gate-41: pass */
export default function AboutSection() {
  return (
    <section id="about" className="relative pt-12 sm:pt-16 pb-28 sm:pb-36 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1520px] mx-auto overflow-hidden">
      
      {/* Visual Sheet Pull Affordance Handle */}
      <div className="flex justify-center -mt-2 sm:-mt-4 mb-10 sm:mb-14 pointer-events-none">
        <div className="w-12 sm:w-16 h-1 sm:h-1.5 rounded-full bg-white/25 shadow-[0_0_12px_rgba(255,255,255,0.15)]" />
      </div>

      {/* Main Two-Column Editorial Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Bold Headline & Grounded Resume Narrative */}
        <div className="lg:col-span-7">
          <AnimatedHeading
            kicker="ENGINEERING BACKGROUND"
            title="Building Reliable AI Agents & Neural Systems"
            subtitle="Designing production-grade agentic workflows, low-latency LLM inference pipelines, and deep learning systems."
            titleClassName="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] mb-4"
            subtitleClassName="text-base sm:text-lg mb-8 max-w-2xl"
            delay={50}
          />

          <div className="space-y-4 mb-8">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
              <span className="font-display font-bold text-xs sm:text-sm text-white tracking-tight uppercase block mb-2">
                Academic & Professional Foundation
              </span>
              <p className="text-neutral-300 font-sans text-xs sm:text-[13.5px] font-normal leading-relaxed">
                B.Tech Computer Science graduate from SRM Institute of Science and Technology ('25) and active AI Intern at Leniko Solutions, specializing in LangGraph multi-agent orchestration, NVIDIA NIM low-latency microservices, and supervised deep learning pipelines.
              </p>
            </div>
          </div>

          {/* Minimal Key Metrics Bar */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]">
            <div>
              <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight block">2021–25</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#bef264] block mt-1">SRM B.Tech</span>
            </div>
            <div>
              <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight block">04</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#bef264] block mt-1">Core Projects</span>
            </div>
            <div>
              <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight block">03</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#bef264] block mt-1">Certifications</span>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Editorial Quote & Grounded Philosophy Card */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
          
          {/* Minimalist Quote Block (Side-stripe purged per Hallmark anti-pattern) */}
          <div 
            data-card="true"
            className="p-8 sm:p-10 rounded-3xl bg-[#0f0e17] border border-white/10 relative overflow-hidden shadow-2xl group hover:border-[#bef264]/40 transition-colors duration-200"
          >
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#bef264] uppercase font-semibold block mb-4">
              ENGINEERING ETHOS
            </span>

            <blockquote className="font-sans text-base sm:text-lg text-white font-medium leading-relaxed mb-6 italic">
              “True autonomy in AI isn't generating tokens—it is executing verifiable actions with deterministic state.”
            </blockquote>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs text-neutral-400">
              <span className="text-white uppercase tracking-wider font-semibold">Rithin Rakesh</span>
              <span className="text-[#bef264] text-[11px] tracking-widest uppercase">Leniko Solutions</span>
            </div>
          </div>

          {/* Education & Current Role Summary Strip */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-[#bef264]/10 text-[#bef264] mt-0.5">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#bef264] block mb-0.5">
                  Current Role
                </span>
                <h4 className="font-display text-sm uppercase text-white font-bold tracking-tight">AI Intern — Leniko Solutions</h4>
                <p className="text-xs font-sans text-neutral-400 mt-0.5">LangGraph · NVIDIA NIM · FastAPI</p>
              </div>
            </div>

            <div className="border-t border-white/[0.06] pt-3.5 flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-white/5 text-neutral-300 mt-0.5">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-0.5">
                  Degree Conferred
                </span>
                <h4 className="font-display text-sm uppercase text-white font-bold tracking-tight">B.Tech Computer Science</h4>
                <p className="text-xs font-sans text-neutral-400 mt-0.5">SRM Institute of Science and Technology ('25)</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
